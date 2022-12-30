import React, { useState } from "react";
import Modal from "react-modal";
import FoodCart from "./FoodCart";
import FoodDetail from "./FoodDetail";
import FoodSearchBar from "./FoodSearchBar";

const AddMealModal = () => {
  // TODO: these can have better names
  const [modalIsOpen, setIsOpen] = useState();
  const [currentFood, setCurrentFood] = useState();
  const [meal, setMeal] = useState([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // TODO: better name & logic
  const handleChildClick = (food) => {
    console.log(food);
    const foodInfo = {
      name: food.description,
      id: food.fdcId,
      servingSize: food.servingSize,
      servingSizeUnit: food.servingSizeUnit,
      calories: food.foodNutrients.find((e) => e.nutrientId === 1008).value,
      carb: food.foodNutrients.find((e) => e.nutrientId === 1005).value,
      protein: food.foodNutrients.find((e) => e.nutrientId === 1003).value,
      fat: food.foodNutrients.find((e) => e.nutrientId === 1004).value,
    };
    setCurrentFood(foodInfo);
    console.log(foodInfo);
  };

  // TODO: fix bug(?): need to click twice to log the food
  const handleAddCurrentFood = (amount) => {
    const foodAlreadyInMeal = meal.some((e) => e.info.id === currentFood.id);
    if (foodAlreadyInMeal) {
      setMeal(
        meal.map((food) => {
          if (food.info.id === currentFood.id) {
            return { info: food.info, amount: food.amount + amount };
          }
          return food;
        })
      );
    } else {
      setMeal(meal.concat({ info: currentFood, amount: amount }));
    }
    // for testing
    console.log(meal);
  };

  const handleAddMeal = () => {
    if (meal.length === 0) {
      console.log("There is not food yet");
    } else {
      console.log(meal);
      closeModal();
    }
  }

  return (
    <div>
      <button onClick={openModal}>Add Meal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Meal"
      >
        <button onClick={closeModal}>close</button>
        <FoodSearchBar onClick={(food) => handleChildClick(food)} />
        <FoodDetail foodInfo={currentFood} onClick={(amount) => handleAddCurrentFood(amount)} />
        <FoodCart meal={meal} handleAddMeal={() => handleAddMeal}/>
      </Modal>
    </div>
  );
};

export default AddMealModal;
