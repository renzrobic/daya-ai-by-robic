import "./features.css";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="features">
      <h2 class="features-title">What DAYA AI Offers</h2>
      <div class="features-grid">
        <div class="feature-card">
          <span>
            <h3 class="feature-title">Creative Assistance</h3>
            <button class="feature-cta" tabindex="0">
              <span>
                <Link to="/dashboard">
                  <img src="arrow.png" alt="" />
                </Link>
              </span>
            </button>
          </span>
          <p class="feature-description">
            Generate high-quality AI-powered content, from text to images, with
            precision and style. Enhance your projects effortlessly with smart
            AI assistance.
          </p>
        </div>

        <div class="feature-card">
          <span>
            <h3 class="feature-title">Productivity Boost</h3>
            <button class="feature-cta" tabindex="0">
              <span>
                {" "}
                <Link to="/dashboard">
                  <img src="arrow.png" alt="" />
                </Link>
              </span>
            </button>
          </span>
          <p class="feature-description">
            Streamline your workflow with AI-powered brainstorming, task
            automation, and intelligent suggestions. Perfect for students,
            professionals, and teams.
          </p>
        </div>

        <div class="feature-card">
          <span>
            <h3 class="feature-title">Smart Conversations</h3>
            <button class="feature-cta" tabindex="0">
              <span>
                {" "}
                <Link to="/dashboard">
                  <img src="arrow.png" alt="" />
                </Link>
              </span>
            </button>
          </span>
          <p class="feature-description">
            Experience natural, context-aware AI interactions powered by
            Google's Gemini. Whether for research, casual chats, or
            problem-solving, DAYA AI delivers human-like responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
