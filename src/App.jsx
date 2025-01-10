import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import RPSGame from "./pages/RPSGame/RPSGame";
import CardsGame from "./pages/CardsGame/CardsGame";
import Clock from "./pages/Clock/Clock";
import ImageEditor from "./pages/ImageEditor/ImageEditor";
import Weather from "./pages/Weather/Weather";
import ExpenseTracker from "./pages/ExpenseTracker/ExpenseTracker";
import Compilation from "./pages/Compilation/Compilation";
import Post from "./pages/Post/Post";
import Error from "./components/Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rps-game" element={<RPSGame />} />
        <Route path="/cards-game" element={<CardsGame />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/image-editor" element={<ImageEditor />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/compilation" element={<Compilation />} />
        <Route
          path="post/:filename"
          element={<Post />}
          errorElement={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}
