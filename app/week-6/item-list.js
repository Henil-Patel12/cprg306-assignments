"use client";

import { useState } from "react";
import Item from "./item.js";

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
    ? [...items]
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
    : [...items].sort((a, b) => (sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)));

  return (
    <div>
      <button onClick={handleSortByName}>Sort by Name</button>
      <button onClick={handleSortByCategory}>Sort by Category</button>
      <button onClick={handleGroupByCategory}>Group by Category</button>
      {sortedItems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}