import React from "react";
import { Card } from "../components/Card/Card";
import AddMeal from "../components/Card/AddNewCard";
import "./DietPage.css";

const DietPage = (props) => {
  const image = require("../assets/food.jpg");

  return (
    <div className="DietPage">
      {console.log(props.meals)}
      <h1>Here are your meals:</h1>
      <div className="Cards">
        {props.meals.map((meal) => (
          <Card name={meal.name} image={image} />
        ))}
      </div>
      <AddMeal />
    </div>
  );
};

export default DietPage;
