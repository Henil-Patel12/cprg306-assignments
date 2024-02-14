import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li>
      {name}, {quantity}, {category}
    </li>
  );
};

export default Item;