import React from 'react';

const Grocery = props => {

  let itemName = props.itemName;
  let buttonAlert = () => alert(props.buttonClick);

  return (
    <li>
      <i /> - {itemName}
        <button type="button" onClick={buttonAlert }>Delete</button>
    </li>
  );
};

export default Grocery;
