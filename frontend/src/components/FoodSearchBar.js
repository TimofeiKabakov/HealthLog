import React, { useState } from "react";
import FoodListItem from "./FoodListItem";

const FoodSearchBar = (props) => {
  const [results, setResults] = useState(null);

  /* make request to the USDA food database api with given query(food name) */
  /* return food query results in json format */
  const searchFood = async (query) => {
    const API_ENDPOINT = "https://api.nal.usda.gov/fdc/v1/foods/search";
    const API_KEY = "DgN17Iv5tFj5hYJgwzbHgK7mIPpEFTQqUQEgE3eS";

    const url = `${API_ENDPOINT}?api_key=${API_KEY}&query=${query}`;

    const response = await fetch(url);
    return await response.json();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    searchFood(query).then((results) => setResults(results));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {results != null && (
        <ul>
          {results.foods.map((food) => (
            <FoodListItem key={food.fdcId} food={food} onClick={() => props.onClick(food)} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodSearchBar;
