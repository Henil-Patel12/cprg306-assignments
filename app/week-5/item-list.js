import React, { useState } from 'react';
import Item from './item';
import items from './items.json'; 

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <button
        style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
        onClick={() => setSortBy('name')}
      >
        Sort by name
      </button>
      <button
        style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}
        onClick={() => setSortBy('category')}
      >
        Sort by category
      </button>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;