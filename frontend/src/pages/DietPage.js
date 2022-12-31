import React from "react";
import FoodSeachBar from "../components/FoodSeachBar";
import { Card } from "../components/Card/Card";
import AddMeal from "../components/Card/AddNewCard";
import "./DietPage.css";

const DietPage = (props) => {
  const image = require("../assets/food.jpg");

  const meals = [
    {
      id: 1,
      username: "timofei",
      name: "Meal Uno",
      description: "this is meal 1",
      date: "2 Dec",
      img: image,
    },
    {
      id: 2,
      username: "way",
      name: "Meal Dos",
      description: "this is meal 2",
      date: "May 9",
      img: image,
    },

    {
      id: 3,
      username: "timofei",
      name: "Meal Tres",
      description: "this is meal 3",
      date: "1 Jan",
      img: image,
    },

    {
      id: 3,
      username: "timofei",
      name: "Meal Tres",
      description: "this is meal 3",
      date: "1 Jan",
      img: image,
    },
  ];

  return (
    <div className="DietPage">
      <h1>Here are your meals:</h1>
      <div className="Cards">
        {meals.map((meal) => (
          <Card
            // key={meal.id}
            name={meal.name}
            // date={meal.date}
            image={meal.img}
          />
        ))}
      </div>
      <AddMeal />
    </div>
  );
};

export default DietPage;
