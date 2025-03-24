import { Link } from "react-router-dom";
import "./homepage.css";
import Features from "../../components/features/Features";
import MarqueeM from "../../components/marquee/Marquee";
import AboutAI from "../../components/aboutAI/AboutAI";
import Footer from "../../components/footer/Footer";

function Homepage() {
  return (
    <div className="homepage">
      <div className="hero">
        <h1>Think Beyond, Create Beyond.</h1>

        <p>
          Redefine creation, innovation, and AI interaction—DAYA AI is your
          smart companion for ideas and problem-solving.
        </p>
        <Link to="/dashboard">
          Get Started <img src="arrow.png" alt="" />
        </Link>
      </div>
      <Features />
      <MarqueeM />
      <AboutAI />
      <Footer />
    </div>
  );
}

export default Homepage;
