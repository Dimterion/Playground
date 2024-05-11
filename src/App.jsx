import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import RPSGame from "./pages/RPSGame/RPSGame";
import CardsGame from "./pages/CardsGame/CardsGame";
import Clock from "./pages/Clock/Clock";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rps-game" element={<RPSGame />} />
        <Route path="/cards-game" element={<CardsGame />} />
        <Route path="/clock" element={<Clock />} />
      </Routes>
    </BrowserRouter>
  );
}
