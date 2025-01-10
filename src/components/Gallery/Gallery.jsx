import cardImg from "../../assets/Card/cardImg.jpg";
import "./gallery.css";

function Gallery() {
  return (
    <div className="gallery-wrapper">
      <section className="gallery-section">
        <figure className="gallery-figure">
          <img src={cardImg} alt="Card image placeholder" />
        </figure>
        <figure className="gallery-figure">
          <img src={cardImg} alt="Card image placeholder" />
        </figure>
        <figure className="gallery-figure">
          <img src={cardImg} alt="Card image placeholder" />
        </figure>
        <figure className="gallery-figure">
          <img src={cardImg} alt="Card image placeholder" />
        </figure>
      </section>
    </div>
  );
}

export default Gallery;
