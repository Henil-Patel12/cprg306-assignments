"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleRemoveItem(name, quantity, category) {
    const updatedItems = items.filter(item => item.name !== name || item.quantity !== quantity || item.category !== category);
    setItems(updatedItems);
  }

  function handleItemSelect(itemName) {
    setSelectedItemName(itemName);
  }

  return (
    <main>
      <div className="flex">
        <div className="max-w-sm m-2">
          <h1 className="text-4xl font-semibold mb-4">Shopping List</h1>
          <div className="pr-2">
            <NewItem onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>
        <div className="w-1/2 pl-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
