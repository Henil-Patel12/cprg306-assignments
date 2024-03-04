"use client";

import { useState } from "react";
import Item from "./item.js";
import items from "./items.json";

export default function Week5ItemList({ items }) {
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
    <div>
      <div className="mb-8 flex gap-4">
        <button
          className={`text-xl font-semibold bg-gray-800 py-2 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${sortBy === 'name' ? 'bg-green-600' : ''}`}
          onClick={handleSortByName}
        >
          Sort by Name
        </button>
        <button
          className={`text-xl font-semibold bg-gray-800 py-2 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${sortBy === 'category' ? 'bg-green-600' : ''}`}
          onClick={handleSortByCategory}
        >
          Sort by Category
        </button>
        <button
          className={`text-xl font-semibold bg-gray-800 py-2 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${groupByCategory ? 'bg-green-600' : ''}`}
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
    </div>
  );
}
