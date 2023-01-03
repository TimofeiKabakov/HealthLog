import React from "react";
import Cards from "../Cards/Cards";
import "./MainDash.css";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards dataType="regular" />
      <Cards dataType="dashboard" />
    </div>
  );
};

export default MainDash;
