import React, { useState } from "react";

const FoodCart = (props) => {
  const [mealName, setMealName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddMeal(mealName);
  }

  return (
    <div>
      {props.meal.length > 0 && (
        <ul>
          {props.meal.map((food) => (
            <li key={food.id}>
              {food.amount} x {food.name}
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Meal Name" value={mealName} onChange={(e) => setMealName(e.target.value)}/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
};

export default FoodCart;
