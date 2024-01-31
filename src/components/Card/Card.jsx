import cardImg from "../../assets/Card/cardImg.jpg";
import "./card.css";

export default function Card() {
  return (
    <section className="card-section">
      <div className="card-container">
        <div className="card-header">Card header</div>
        <div className="card-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          blanditiis sunt architecto perspiciatis esse et beatae cupiditate a
          possimus natus.
        </div>
        <div className="card-footer">
          <button className="card-btn">Details</button>
          <button className="card-btn card-btnOutline">Contact</button>
        </div>
      </div>
      <div className="card-container card-containerShadow">
        <div className="card-header">Card header</div>
        <div className="card-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          blanditiis sunt architecto perspiciatis esse et beatae cupiditate a
          possimus natus.
        </div>
        <div className="card-footer">
          <button className="card-btn">Details</button>
          <button className="card-btn card-btnOutline">Contact</button>
        </div>
      </div>
      <div className="card-container card-containerShadow">
        <div className="card-header card-image">
          <img src={cardImg} alt="Man looking at futuristic scroll" />
        </div>
        <div className="card-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          blanditiis sunt architecto perspiciatis esse et beatae cupiditate a
          possimus natus.
        </div>
        <div className="card-footer">
          <button className="card-btn">Details</button>
          <button className="card-btn card-btnOutline">Contact</button>
        </div>
      </div>
    </section>
  );
}
