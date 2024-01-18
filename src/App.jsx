import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import RPSGame from "./pages/RPSGame/RPSGame";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rps-game" element={<RPSGame />} />
      </Routes>
    </BrowserRouter>
  );
}
