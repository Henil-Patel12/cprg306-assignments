import React from 'react';
import Item from './item';

const ItemList = () => {
    const items = [
        { name: "milk, 4 L 🥛", quantity: 1, category: "dairy", color: "white" },
        { name: "bread 🍞", quantity: 2, category: "bakery", color: "brown" },
        { name: "eggs, dozen 🥚", quantity: 2, category: "dairy", color: "yellow" },
        { name: "bananas 🍌", quantity: 6, category: "produce", color: "yellow" },
        { name: "broccoli 🥦", quantity: 3, category: "produce", color: "green" },
        { name: "chicken breasts, 1 kg 🍗", quantity: 1, category: "meat", color: "pink" },
        { name: "pasta sauce 🍝", quantity: 3, category: "canned goods", color: "red" },
        { name: "spaghetti, 454 g 🍝", quantity: 2, category: "dry goods", color: "yellow" },
        { name: "toilet paper, 12 pack 🧻", quantity: 1, category: "household", color: "white" },
        { name: "paper towels, 6 pack", quantity: 1, category: "household", color: "white" },
        { name: "dish soap 🍽️", quantity: 1, category: "household", color: "blue" },
        { name: "hand soap 🧼", quantity: 4, category: "household", color: "blue" },
    ];

    return (
        <main className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center bg-gray-100 text-2xl">
            <div className="grid grid-cols-3 gap-4">
                {items.map((item, index) => (
                    <div key={index}>
                        <Item name={item.name} quantity={item.quantity} category={item.category} color={item.color} />
                    </div>
                ))}
            </div>
        </main>
    );
};

export default ItemList;