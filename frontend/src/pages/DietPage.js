import React, { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import DietPageCSS from "./DietPage.module.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import AddMealModal from "../components/AddMealModal";

const DietPage = (props) => {
  const [userMeals, setUserMeals] = useState();
  const image = require("../assets/food.jpg");

  async function getMealsFetch() {
    //TODO: error handling
    const response = await fetch("/meals");
    const res = await response.json();
    return res;
  }
  
  const getMeals = async () => {
    const meals = await getMealsFetch();
    setUserMeals(() => meals);
  }

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div className={DietPageCSS.Dashboard}>
      <div className={DietPageCSS.DashboardGlass}>
        <Sidebar selectedIndex={2} />
        <div className={DietPageCSS.DietPage}>
          <h1>Here are your meals:</h1>
          <div className={DietPageCSS.Cards}>
            {userMeals ? (
              userMeals.map((meal) => <Card name={meal.name} image={image} />)
            ) : (
              <p>You have not added any meals yet</p>
            )}
          </div>
        </div>
        <AddMealModal updateMeals={getMeals} csrfToken={props.csrfToken}/>
      </div>
    </div>
  );
};

export default DietPage;