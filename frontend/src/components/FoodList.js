import React from "react";
import FoodListItem from "./FoodListItem";

const FoodList = (props) => {
  return (
    <div>
      {props.searchResults != null && (
        <ul>
          {props.searchResults.foods.map((result) => (
            <FoodListItem
              key={result.fdcId}
              data={result}
              onClick={() => props.handleChooseFood(result)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodList;
