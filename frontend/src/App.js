import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import DietPage from "./pages/DietPage";
import TrainingPage from "./pages/TrainingPage";

const App = () => {
  const [userInfo, setUserInfo] = useState({});
  //# TODO: when to get meals - at what level??

  useEffect(() => {
    const getCurrentUser = async (query) => {
      const response = await fetch("/current");
      const res = await response.json();
      return res;
    };
    setUserInfo(() =>
      getCurrentUser().then((res) => {
        res;
      })
    );
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/diet" element={<DietPage meals={userInfo} />} />
          <Route path="/training" element={<TrainingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
