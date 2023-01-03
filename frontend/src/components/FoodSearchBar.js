import React from "react";

const FoodSearchBar = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSearchFood}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default FoodSearchBar;
