'use client';
import React, { useState } from 'react';
import NewItem from './new-item';

export default function List () {
    const [items, setItems] = useState([]); 

    const addItem = (item) => {
        setItems(prevItems => [...prevItems, item]); 
    };

    return (
        <main>
            <h1 className="text-3xl pl-6 pt-6">New Item</h1>
            <NewItem addItem={addItem}/> 
            <div>
                {items.map((item, index) => (
                    <div key={index} className="bg-gray-800 rounded-md p-4 text-white text-center mb-4" style={{ borderRadius: '10px', padding: '10px', margin: '10px', boxShadow: '0 50px 50px 0 rgba(0, 0, 0, 0.2)' }}>
    <p>Name: {item.name}</p>
    <p>Quantity: {item.quantity}</p>
    <p>Category: {item.category}</p>
</div>
                ))}
            </div>
        </main>
    )
}