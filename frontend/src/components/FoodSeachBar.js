import React, { useState } from "react";

const FoodSeachBar = () => {
  const [results, setResults] = useState([]);

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
      {results.totalHits > 0 && (
        <ul>
          {results.foods.map((food) => (
            <li key={food.fdcId}>{food.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodSeachBar;
