import React from "react";

const FoodListItem = (props) => {
  return <li onClick={props.onClick}>{props.data.description}</li>;
};

export default FoodListItem;
