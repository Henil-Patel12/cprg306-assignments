import React from 'react';
import Item from './item';


const ItemList = () => {
    const items = [
        { name: "milk, 4 L 🥛", quantity: 1, category: "dairy"},
        { name: "bread 🍞", quantity: 2, category: "bakery"},
        { name: "eggs, dozen 🥚", quantity: 2, category: "dairy"},
        { name: "bananas 🍌", quantity: 6, category: "produce"},
        { name: "broccoli 🥦", quantity: 3, category: "produce"},
        { name: "chicken breasts, 1 kg 🍗", quantity: 1, category: "meat"},
        { name: "pasta sauce 🍝", quantity: 3, category: "canned goods"},
        { name: "spaghetti, 454 g 🍝", quantity: 2, category: "dry good0s"},
        { name: "toilet paper, 12 pack 🧻", quantity: 1, category: "household"},
        { name: "paper towels, 6 pack", quantity: 1, category: "household"},
        { name: "dish soap 🍽️", quantity: 1, category: "household"},
        { name: "hand soap 🧼", quantity: 4, category: "household"},
    ];

    return (
        <div className="grid grid-cols-4 gap-4 p-4 rounded-md" style={{ backgroundColor: 'hsl(0, 0%, 4%)' }}>
    {items.map((item, index) => (
        <div key={index} className="bg-gray-800 rounded-md p-4 text-white text-center mb-4" style={{ borderRadius: '10px', padding: '10px', margin: '10px', boxShadow: '0 50px 50px 0 rgba(0, 0, 0, 0.2)' }}>
            <Item name={item.name} quantity={item.quantity} category={item.category}  />
        </div>
    ))}
</div>
    );
};

export default ItemList;






