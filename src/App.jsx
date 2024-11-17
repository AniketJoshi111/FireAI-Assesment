import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import Navigation from "./components/NavigationMenu";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
import SettingsPage from "./components/SettingsPage";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Analytics from "./components/Analytics";
const App = () => {

  return (
    <div className="min-h-screen bg-gray-50">
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/analytics" element={<Analytics/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
