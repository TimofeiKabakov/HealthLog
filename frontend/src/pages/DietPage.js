import React from "react";
import { Card } from "../components/Card/Card";
import AddMeal from "../components/Card/AddNewCard";
import DietPageCSS from "./DietPage.module.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import AddMealModal from "../components/AddMealModal";

const DietPage = (props) => {
  const image = require("../assets/food.jpg");

  return (
    <div className={DietPageCSS.Dashboard}>
      <div className={DietPageCSS.DashboardGlass}>
        <Sidebar selectedIndex={2} />
        <div className={DietPageCSS.DietPage}>
          <h1>Here are your meals:</h1>
          <div className={DietPageCSS.Cards}>
            {props.meals ? (
              props.meals.map((meal) => <Card name={meal.name} image={image} />)
            ) : (
              <p>You have not added any meals yet</p>
            )}
          </div>
        </div>
        <AddMealModal />
      </div>
    </div>
  );
};

export default DietPage;
