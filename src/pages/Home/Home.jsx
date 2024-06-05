import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  useEffect(() => {
    document.title = "Playground";
  }, []);

  return (
    <section className="home-section">
      <Link to="/rps-game" className="home-link">
        Rock, Paper, Scissors
      </Link>
      <Link to="/clock" className="home-link">
        Clock
      </Link>
      <Link to="/image-editor" className="home-link">
        Image editor
      </Link>
    </section>
  );
}
