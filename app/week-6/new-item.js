'use client';
import { useState } from 'react';

export default function NewItem ({ onAddItem }) { 
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit (event) {
        event.preventDefault();

        const newItem = { 
            id: Math.random().toString(36).substring(2, 15), // generate a random string
            name, 
            quantity, 
            category 
        };

        console.log(newItem);

        onAddItem(newItem); 

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <form className="p-6" onSubmit={handleSubmit}>
            <label>Name: </label>
            <input className="text-black m-1 p-1 rounded" type="text" value={name} onChange={e => setName(e.target.value)} required/><br/>
            <label>Quantity: </label>
            <input className="text-black m-1 p-1 rounded" type="number" value={quantity} min="1" max="99" onChange={e => setQuantity(parseInt(e.target.value))} required/><br/>
            <label>Category: </label>
            <select className="text-black m-1 p-1 rounded" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
            </select>
            <button type="submit">Add Item</button>
        </form>
    );
}