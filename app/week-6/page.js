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

  const handleRemoveItem = (name, quantity, category) => {
    const updatedItems = items.filter(item => !(item.name === name && item.quantity === quantity && item.category === category));
    setItems(updatedItems);
  };

  return (
    <main className="container mx-auto p-4 min-h-screen flex flex-col items-left" style={{ backgroundColor: 'hsl(0, 0%, 2%)' }}>
      <h1 className="text-4xl font-extrabold text-orange-400 bg-gray-900 rounded-md mb-4 mt-9" style={{ borderRadius: '1vh', padding: '1vh', marginTop: '11vh', boxShadow: '0 50px 50px 0 rgba(0, 0, 0, 0.2)' }}>Shopping List</h1>
      <div className="flex w-full gap-8">
        <div className="w-3/5 p-4 bg-gray-900 text-white" style={{ borderRadius: '1vh', padding: '1vh', boxShadow: '0 50px 50px 0 rgba(0, 0, 0, 0.2)' }}>
          <h2 className="text-2xl font-extrabold text-orange-400 mb-4">Current List</h2>
          <Week5ItemList items={items} />
        </div>
        <div className="w-1/5 bg-gray-900 text-white" style={{ borderRadius: '1vh', padding: '1vh', boxShadow: '0 50px 50px 0 rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', maxHeight: '30.5vh',  }}>          
          <NewItem onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} />
        </div>
        <div className="w-1/5 bg-gray-900 text-white" style={{ borderRadius: '1vh', padding: '1vh', boxShadow: '0 50px 50px 0 rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', maxHeight: '30.5vh',  }}>          
          <NewItem onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} />
        </div>
      </div>
    </main>
  );
}
