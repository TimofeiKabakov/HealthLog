import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import FoodCart from "./FoodCart";
import FoodDetail from "./FoodDetail";
import FoodList from "./FoodList";
import FoodSearchBar from "./FoodSearchBar";

const AddMealModal = () => {
  const [modalIsOpen, setIsOpen] = useState();
  const [searchResults, setSearchResults] = useState();
  const [currentFood, setCurrentFood] = useState();
  const [meal, setMeal] = useState([]);

  // get CSRF token from cookie... probably not good practise
  // also pull this up in the end
  const [csrfToken, setCsrfToken] = useState();
  useEffect(() => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${"csrftoken"}=`);
    if (parts.length === 2) setCsrfToken(parts.pop().split(";").shift());
  }, []);

  useEffect(() => {
    console.log(meal);
  }, [meal]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const searchFood = async (query) => {
    const API_ENDPOINT = "https://api.nal.usda.gov/fdc/v1/foods/search";
    const API_KEY = "DgN17Iv5tFj5hYJgwzbHgK7mIPpEFTQqUQEgE3eS";

    const url = `${API_ENDPOINT}?api_key=${API_KEY}&query=${query}`;

    const response = await fetch(url);
    return await response.json();
  };

  const addMeal = async (name) => {
    const response = await fetch("http://127.0.0.1:8000/api/meals/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify({ name: name }),
    });
    return await response.json();
  };

  const addFood = async (mealId, food) => {
    fetch("http://127.0.0.1:8000/api/foods/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify({ ...food, meal: mealId }),
    });
  };

  const handleSearchFood = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    searchFood(query).then((results) => setSearchResults(results));
    console.log(searchResults);
  };

  const handleChooseFood = (rawFoodData) => {
    // testing
    console.log(rawFoodData);
    const food = {
      name: rawFoodData.description,
      id: rawFoodData.fdcId,
      serving_size: parseInt(rawFoodData.servingSize),
      serving_size_unit: rawFoodData.servingSizeUnit,
      calories: parseInt(
        rawFoodData.foodNutrients.find((e) => e.nutrientId === 1008).value
      ),
      carbohydrates: parseInt(
        rawFoodData.foodNutrients.find((e) => e.nutrientId === 1005).value
      ),
      protein: parseInt(
        rawFoodData.foodNutrients.find((e) => e.nutrientId === 1003).value
      ),
      total_fat: parseInt(
        rawFoodData.foodNutrients.find((e) => e.nutrientId === 1004).value
      ),
      amount: parseInt(0),
    };
    if (isNaN(food.serving_size)) {
      food.serving_size = 1;
    }
    if (food.serving_size_unit === undefined) {
      food.serving_size_unit = "N/A";
    }
    setCurrentFood(food);
    // testing
    console.log(food);
  };

  const handleAddCurrentFood = (amount) => {
    const foodAlreadyInMeal = meal.some((e) => e.id === currentFood.id);
    if (foodAlreadyInMeal) {
      setMeal(
        meal.map((food) => {
          if (food.id === currentFood.id) {
            return { ...food, amount: food.amount + amount };
          }
          return food;
        })
      );
    } else {
      setMeal(meal.concat({ ...currentFood, amount: amount }));
    }
  };

  const handleAddMeal = () => {
    if (meal.length === 0) {
      console.log("There is not food yet");
    } else {
      addMeal("default_meal_name").then((response) => {
        // TODO
        let mealId = response.id;
        for (let i = 0; i < meal.length; i++) {
          addFood(mealId, meal[i]);
        }
      });
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
        <FoodSearchBar
          onClick={handleChooseFood}
          handleSearchFood={handleSearchFood}
        />
        <FoodList
          searchResults={searchResults}
          handleChooseFood={handleChooseFood}
        />
        <FoodDetail foodInfo={currentFood} onClick={handleAddCurrentFood} />
        <FoodCart meal={meal} handleAddMeal={handleAddMeal} />
      </Modal>
    </div>
  );
};

export default AddMealModal;
