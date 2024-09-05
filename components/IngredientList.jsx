// src/components/IngredientList.jsx
  import React from 'react';

  const IngredientList = (props) => {
    const { availableIngredients, onAdd } = props;
  
    return (
      <div style={{ width: '45%' }}>
        <h2>Available Ingredients</h2>
        <ul>
          {availableIngredients.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color, padding: '8px', marginBottom: '4px' }}>
              {ingredient.name}
              <button onClick={() => onAdd(ingredient)} style={{ marginLeft: '10px' }}>+</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default IngredientList;