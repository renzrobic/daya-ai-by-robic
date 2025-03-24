import "./cardFlip.css";
import { useState } from "react";

const SurdillaCard = () => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="card-container" onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="card-face card-front">
          <img src="/Surdilla.jpg" alt="Front" />
        </div>
        <div className="card-face card-back">
          {" "}
          <ul>
            <li>Graphic Design</li>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Programming</li>
            <li>3D Modeling</li>
            <li>Drawing & Painting</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SurdillaCard;
