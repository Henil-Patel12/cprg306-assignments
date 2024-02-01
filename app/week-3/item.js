import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <div>
            <p className="text-hsl-90 text-lg">{name}</p>
            <p className="text-hsl-90">Buy {quantity} in {category}</p>
        </div>
    );
};

export default Item;
