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
      const response = await fetch("/users/current");
      const res = await response.json();
      console.log(res);
      return res;
    };
    setUserInfo(() => getCurrentUser());
    console.log(userInfo);
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/diet"
            element={
              <DietPage username={userInfo.username} meals={userInfo.meals} />
            }
          />
          <Route path="/training" element={<TrainingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
