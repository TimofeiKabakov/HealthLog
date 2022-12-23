import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [results, setResults] = useState([]);

  const searchFood = (query) => {
    const API_ENDPOINT = "https://api.nal.usda.gov/fdc/v1/foods/search";
    const API_KEY = "DgN17Iv5tFj5hYJgwzbHgK7mIPpEFTQqUQEgE3eS";

    const params = {
      api_key: API_KEY,
      query,
    };

    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    
    const url = `${API_ENDPOINT}?${queryString}`;

    return fetch(url).then((response) => response.json());
  }
  
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    searchFood(query).then((results) => setResults(results));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type='text' name='query' />
        <button type='submit'>Search</button>
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
}

export default App;
