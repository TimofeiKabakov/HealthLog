import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DietPage from "./pages/DietPage";
import TrainingPage from "./pages/TrainingPage";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/diet" element={<DietPage />} />
          <Route path="/training" element={<TrainingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
