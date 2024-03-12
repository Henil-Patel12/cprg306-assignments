"use client";
import { useState } from 'react';

export default function NewItem({ onAddItem, onRemoveItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = { name, quantity, category };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  function handleRemove(event) {
    event.preventDefault();
    const confirmed = window.confirm(`Are you sure you want to remove item: ${name}, Quantity: ${quantity}, Category: ${category}`);
    if (confirmed) {
      onRemoveItem(name, quantity, category);
    }
  }

  return (
    <>
      <div className="p-1 bg-gray-900 text-white rounded-md mb-2">
        <h2 className="text-2xl font-extrabold text-orange-400 mb-2">Add New Item</h2>
        <form className="p-1" onSubmit={handleSubmit}>
          <label>Name: </label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required /><br />
          <label>Quantity: </label>
          <input type="number" value={quantity} min="1" max="99" onChange={e => setQuantity(parseInt(e.target.value))} required /><br />
          <label>Category: </label>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select><br />
          <button type="submit" className="text-white rounded bg-slate-600 p-1 mt-2 hover:bg-white hover:text-black">Add</button>
        </form>
      </div>
      <div className="p-1 bg-gray-900 text-white rounded-md mb-4">
        <form className="p-1" onSubmit={handleRemove}>
          <h2 className="text-2xl font-extrabold text-orange-400 mb-2">Remove Item</h2>
          <label>Name: </label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required /><br />
          <label>Quantity: </label>
          <input type="number" value={quantity} min="1" max="99" onChange={e => setQuantity(parseInt(e.target.value))} required /><br />
          <label>Category: </label>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select><br />
          <button type="submit" className="text-white rounded bg-red-600 p-1 mt-2 hover:bg-white hover:text-black">Remove</button>
        </form>
      </div>
    </>
  );
}
