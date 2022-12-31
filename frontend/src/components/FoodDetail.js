import React from "react";

// TODO: fix bug: still displays after page close and reopen
const FoodDetail = (props) => {
  const handleAddFood = (event) => {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    props.onClick(parseInt(amount));
  }

  if (props.foodInfo != null) {
    return (
      <div>
        <ul>
          <li>Food Name: {props.foodInfo.name}</li>
          <li>Serving Size: {props.foodInfo.servingSize}{props.foodInfo.servingSizeUnit} per Serving</li>
          <li>Calories per Serving: {props.foodInfo.calories}</li>
          <li>Carbonhydrate per Serving: {props.foodInfo.carb}</li>
          <li>Protein per Serving: {props.foodInfo.protein}</li>
          <li>Fat per Serving: {props.foodInfo.fat}</li>
        </ul>
        <form onSubmit={handleAddFood}>
          <input type="number" name="amount" />
          <button type="submit">Add Food</button>
        </form>
      </div>
    );
  }
  else {
    return <div>Please select a food first</div>
  }
};

export default FoodDetail;
