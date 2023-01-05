import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import FoodCart from "./FoodCart";
import FoodDetail from "./FoodDetail";
import FoodList from "./FoodList";
import FoodSearchBar from "./FoodSearchBar";

const AddMealModal = (props) => {
  const [modalIsOpen, setIsOpen] = useState();
  const [searchResults, setSearchResults] = useState();
  const [currentFood, setCurrentFood] = useState();
  const [meal, setMeal] = useState([]);

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
        "X-CSRFToken": props.csrfToken,
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
        "X-CSRFToken": props.csrfToken,
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

  const handleChooseFood = (data) => {
    // testing
    console.log(data);
    const serving_size = data.servingSize;
    const serving_size_unit = data.servingSizeUnit;
    const calories = data.foodNutrients.find((e) => e.nutrientId === 1008);
    const carbohydrates = data.foodNutrients.find((e) => e.nutrientId === 1005);
    const protein = data.foodNutrients.find((e) => e.nutrientId === 1003);
    const total_fat = data.foodNutrients.find((e) => e.nutrientId === 1004);

    const food = {
      name: data.description,
      id: data.fdcId,
      serving_size: serving_size === undefined ? 1 : serving_size,
      serving_size_unit:
        serving_size_unit === undefined ? "N/A" : serving_size_unit,
      calories: calories === undefined ? 0 : parseInt(calories.value),
      carbohydrates:
        carbohydrates === undefined ? 0 : parseInt(carbohydrates.value),
      protein: protein === undefined ? 0 : parseInt(protein.value),
      total_fat: total_fat === undefined ? 0 : parseInt(total_fat.value),
      amount: parseInt(0),
    };

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

  async function doAddMeal(name) {
    const response = await addMeal(name);
    let mealId = response.id;
    for (let i = 0; i < meal.length; i++) {
      addFood(mealId, meal[i]);
    }
    setSearchResults();
    setCurrentFood();
    setMeal([]);
    closeModal();

    props.updateMeals();
  }

  const handleAddMeal = (name) => {
    if (meal.length === 0) {
      console.log("There is not food yet");
    } else {
      doAddMeal(name);
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
