import "./gallery.css";
import cardImg from "../../assets/Card/cardImg.jpg";

function Gallery() {
  return (
    <div className="gallery-wrapper">
      <section className="gallery-section">
        <figure className="gallery-figure">
          <img src={cardImg} alt="Card image" />
        </figure>
        <figure className="gallery-figure">
          <img src={cardImg} alt="Card image" />
        </figure>
        <figure className="gallery-figure">
          <img src={cardImg} alt="Card image" />
        </figure>
        <figure className="gallery-figure">
          <img src={cardImg} alt="Card image" />
        </figure>
      </section>
    </div>
  );
}

export default Gallery;
