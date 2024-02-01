import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <div style={{ backgroundColor: 'hsl(0, 0%, 10%)', borderRadius: '10px', padding: '10px', margin: '10px', boxShadow: '0 50px 50px 0 rgba(0, 0, 0, 0.2)' }}>
    <p className="text-lg">{name}</p>
    <p>Buy {quantity} in {category}</p>
</div>
    );
};

export default Item;
