import "./App.css";
import Athletes from "./pages/Athletes";
import Campaigns from "./pages/Campaigns";
import Homepage from "./pages/Homepage";
import Conta from "./components/Conta";
import RegisterConta from "./components/RegisterConta";
import DashboardAtleta from "./components/DashboardAtleta";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./pages/Sobre";
import DashboardPatrocinador from "./components/DashboardPatrocinador";
import DashboardDoador from "./components/DashboardDoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/conta" element={<RegisterConta />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
