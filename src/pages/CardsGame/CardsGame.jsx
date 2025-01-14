import { useEffect } from "react";
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";
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
