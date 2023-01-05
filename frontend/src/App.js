import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import DietPage from "./pages/DietPage";
import TrainingPage from "./pages/TrainingPage";

const App = () => {
  const [csrfToken, setCsrfToken] = useState();

  useEffect(() => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${"csrftoken"}=`);
    if (parts.length === 2) setCsrfToken(parts.pop().split(";").shift());
  }, []);

  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/home" element={<Dashboard csrfToken={csrfToken} />} />
          <Route path="/diet" element={<DietPage csrfToken={csrfToken} />} />
          <Route path="/training" element={<TrainingPage csrfToken={csrfToken}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
