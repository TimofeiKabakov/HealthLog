import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DietPage from "./pages/DietPage";
import TrainingPage from "./pages/TrainingPage";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [userMeals, setUserMeals] = useState();
  //TODO: when to get meals - at what level

  async function getMealsFetch() {
    //TODO: error handling
    const response = await fetch("/meals");
    const res = await response.json();
    return res;
  }

  useEffect(() => {
    async function getMeals() {
      const meals = await getMealsFetch();
      setUserMeals(() => meals);
    }
    getMeals();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/diet" element={<DietPage meals={userMeals} />} />
          <Route path="/training" element={<TrainingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
