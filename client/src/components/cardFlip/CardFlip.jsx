import { useState } from "react";
import "./cardFlip.css";

const CardFlip = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card-container" onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="card-face card-front">
          <img src="/logo.png" alt="Front" />
        </div>
        <div className="card-face card-back">Description goes here</div>
      </div>
    </div>
  );
};

export default CardFlip;
