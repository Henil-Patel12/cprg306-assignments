"use client";
import React, { useState } from 'react';
import Week5ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Week5Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <main className="container mx-auto p-4 min-h-screen flex flex-col items-center" style={{ backgroundColor: 'hsl(0, 0%, 2%)' }}>
      <div className="w-full flex justify-center">
        <h1 className="text-4xl font-extrabold text-orange-400 mb-4 mt-9">Shopping List</h1>
      </div>
      <div className="w-full flex justify-between">
        <div className="w-3/5 p-4 bg-gray-900 text-white">
          <Week5ItemList items={items} />
        </div>
        <div className="w-2/5 p-4 bg-gray-900 text-white">
          <h2 className="text-2xl font-extrabold text-orange-400 mb-4">Add New Item</h2>
          <NewItem onAddItem={handleAddItem} />
        </div>
      </div>
    </main>
  );
}
