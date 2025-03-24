import "./aboutAI.css";

const AboutAI = () => {
  return (
    <div className="aboutAI">
      <div className="aboutAI-container">
        <h2 className="about-title">
          Learn About
          <br />
          AI & AI Chatbot
        </h2>
        <div className="about-content">
          <p className="about-description">
            Artificial Intelligence (AI) is the simulation of human intelligence
            in machines, enabling them to learn, think, and make decisions like
            humans.
          </p>
          <button className="about-cta" tabIndex="0">
            Learn AI
          </button>
        </div>
      </div>

      <div className="separator"></div>

      <div className="chatbot-section">
        <img
          src="/Illustration1.png"
          alt="AI Chatbot Illustration"
          className="chatbot-image"
        />
        <div className="chatbot-content">
          <h2 className="chatbot-title">AI CHATBOT</h2>
          <p className="chatbot-description">
            An AI chatbot is a software application that uses artificial
            intelligence to simulate human-like conversations. It leverages AI
            technologies like natural language processing (NLP) and machine
            learning to understand user input, generate relevant responses, and
            continuously improve its interactions.
            <br />
            <br />
            The interconnection lies in AI powering the chatbot's ability to
            process language, learn from data, and engage in meaningful,
            context-aware conversations.
          </p>
          <button className="chatbot-cta" tabIndex="0">
            Learn AI ChatBot
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutAI;
