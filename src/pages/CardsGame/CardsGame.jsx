import { useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./cardsGame.css";

export default function CardsGame() {
  useEffect(() => {
    document.title = "Cards";
  }, []);

  return (
    <div className="cardsGame-container">
      <Header />
      <section className="cardsGame-section">
        <h1>Cards Game</h1>
      </section>
      <Footer />
    </div>
  );
}