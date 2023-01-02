import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import FoodCart from "./FoodCart";
import FoodDetail from "./FoodDetail";
import FoodSearchBar from "./FoodSearchBar";

const AddMealModal = () => {
  // TODO: these can have better names
  const [modalIsOpen, setIsOpen] = useState();
  const [currentFood, setCurrentFood] = useState();
  const [meal, setMeal] = useState([]);

  // get CSRF token from cookie
  const [csrfToken, setCsrfToken] = useState();
  useEffect(() => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${"csrftoken"}=`);
    if (parts.length === 2) setCsrfToken(parts.pop().split(";").shift());
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // TODO: better name & logic
  const handleChooseFood = (food) => {
    console.log(food);
    const foodInfo = {
      name: food.description,
      id: food.fdcId,
      serving_size: parseInt(food.servingSize),
      serving_size_unit: food.servingSizeUnit,
      calories: parseInt(food.foodNutrients.find((e) => e.nutrientId === 1008).value),
      carbohydrates: parseInt(food.foodNutrients.find((e) => e.nutrientId === 1005)
        .value),
      protein: parseInt(food.foodNutrients.find((e) => e.nutrientId === 1003).value),
      total_fat: parseInt(food.foodNutrients.find((e) => e.nutrientId === 1004).value),
      amount: parseInt(1),
    };
    setCurrentFood(foodInfo);
    console.log(foodInfo);
    fetch("http://127.0.0.1:8000/api/foods/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify({...foodInfo, 'meal': parseInt(1)}),
    });
  };

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
  };

  return (
    <div>
      <button onClick={openModal}>Add Meal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Meal"
      >
        <button onClick={closeModal}>close</button>
        <FoodSearchBar onClick={(food) => handleChooseFood(food)} />
        <FoodDetail
          foodInfo={currentFood}
          onClick={(amount) => handleAddCurrentFood(amount)}
        />
        <FoodCart meal={meal} handleAddMeal={() => handleAddMeal()} />
      </Modal>
    </div>
  );
};

export default AddMealModal;
