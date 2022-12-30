import React from "react";

const FoodListItem = (props) => {
  return <li onClick={props.onClick} className="clickBox">{props.food.description}</li>;
};

export default FoodListItem;
