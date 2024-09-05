// `src/components/BurgerStack.jsx`
import React from 'react';
const BurgerStack = (props) => {
  const { stack, onRemove } = props;

  return (
    <div style={{ width: '45%' }}>
      <h2>Burger Stack</h2>
      <ul>
        {stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color, padding: '8px', marginBottom: '4px' }}>
            {ingredient.name}
            <button onClick={() => onRemove(ingredient)} style={{ marginLeft: '10px' }}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;