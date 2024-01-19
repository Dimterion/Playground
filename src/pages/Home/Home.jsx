import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <section className="home-section">
      <Link to="/rps-game" className="home-link">
        Rock, Paper, Scissors
      </Link>
    </section>
  );
}
