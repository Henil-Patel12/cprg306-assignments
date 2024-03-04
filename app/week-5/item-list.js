"use client";

import { useState } from "react";
import Item from "./item.js";
import items from "./items.json";

export default function Week5ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [groupByCategory, setGroupByCategory] = useState(false);

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  const handleGroupByCategory = () => {
    setGroupByCategory(!groupByCategory);
  };

  const sortedItems = groupByCategory
    ? items
        .sort((a, b) => a.category.localeCompare(b.category))
        .reduce((acc, item) => {
          const existingCategory = acc.find(
            (category) => category.category === item.category
          );

          if (existingCategory) {
            existingCategory.items.push(item);
          } else {
            acc.push({ category: item.category, items: [item] });
          }

          return acc;
        }, [])
    : items.sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
          return a.category.localeCompare(b.category);
        }
      });

  return (
    <main className="p-8 bg-gray-900 text-white">
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          body {
            font-family: sans-serif;
          }

          /* Main Container */
          main {
            padding: 8rem;
            background-color: #1f2937;
            color: #ffffff;
          }

          /* Buttons */
          button {
            text-transform: uppercase;
            font-size: 1.6rem;
            font-weight: 600;
            background-color: #374151;
            padding: 2rem 4rem;
            border-radius: 0.5rem;
            transition: all 0.3s ease;
            cursor: pointer;
            outline: none;
            border: none;
          }

          button:hover {
            background-color: #10b981;
          }

          button:focus {
            outline: 2px solid #10b981;
          }

          /* Item Container */
          .space-y-4 {
            margin-top: 4rem;
          }

          /* Sorting Buttons Container */
          .flex {
            gap: 4rem;
          }

          /* Item Grid */
          .grid {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 4rem;
          }

          @media screen and (min-width: 640px) {
            .grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media screen and (min-width: 768px) {
            .grid {
              grid-template-columns: repeat
          `}
      </style>
      <div className="mb-8 flex gap-4">
        <button
          className="text-xl font-semibold bg-gray-800 py-2 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          onClick={handleSortByName}
        >
          Sort by Name
        </button>
        <button
          className="text-xl font-semibold bg-gray-800 py-2 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          onClick={handleSortByCategory}
        >
          Sort by Category
        </button>
        <button
          className="text-xl font-semibold bg-gray-800 py-2 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          onClick={handleGroupByCategory}
        >
          Group by Category
        </button>
      </div>
      <div className="space-y-4">
        {sortedItems.map((item, index) => {
          return groupByCategory ? (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-4">{item.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {item.items.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="bg-gray-800 rounded-md p-4 text-white text-center mb-4"
                  >
                    <Item {...subItem} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div key={index} className="bg-gray-800 rounded-md p-4 text-white text-center mb-4">
              <Item {...item} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
