import React, { memo } from 'react';
import { useState } from 'react';

export const Categories = memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              onClick={() => onSelectItem(index)}
              className={activeItem === index ? 'active' : ''}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});
