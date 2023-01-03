import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import DietPage from "./pages/DietPage";
import TrainingPage from "./pages/TrainingPage";

const App = () => {
  return (
    <Router>
      <div>
        {/* <Header /> */}
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
