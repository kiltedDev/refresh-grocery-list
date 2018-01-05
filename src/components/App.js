import React from 'react';
import GroceryList from "./GroceryList"

const App = props => {
  let groceryData = [
    { id: 1, itemName: "Oranges" },
    { id: 2, itemName: "Bananas" },
    { id: 3, itemName: "Bread" }
  ];

  return(
    <div>
      <h1>Grocery List</h1>
      <GroceryList groceries={groceryData} buttonClick='Button was clicked'/>
    </div>
  );
};

export default App;
