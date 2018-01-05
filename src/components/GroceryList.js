import React from 'react';
import Grocery from './Grocery'

const GroceryList = props => {
  let groceries = props.groceries.map(grocery => {
    return(
      <Grocery
        key={grocery.key}
        itemName={grocery.itemName}
        buttonClick={props.buttonClick}
      />
    )
  })

  return (
    <ul>
      {groceries}
    </ul>
  );
};

export default GroceryList;
