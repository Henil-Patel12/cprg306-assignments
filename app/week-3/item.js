import React from 'react';

const Item = ({ name, quantity, category, color }) => {
    return (
        <div style={{ color: color }}>
            <p>{name}</p>
            <p>{quantity}</p>
            <p>{category}</p>
        </div>
    );
};

export default Item;