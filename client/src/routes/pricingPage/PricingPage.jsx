import Footer from "../../components/footer/Footer";
import "./pricingPage.css";
import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <div className="pricingPage">
      <div className="container">
        <div className="header">
          <h1>Unlock AI-powered chats</h1>
          <p>Sign up for Daya AI and find the plan that works for you!</p>
        </div>
        <div className="cards">
          <div className="card basic">
            <h2>Basic</h2>
            <h1>₱ 0</h1>
            <p>
              Enjoy 10 AI chats daily, personalized recommendations, and core
              features—completely free!
            </p>
            <Link to="/dashboard">
              <button className="getStarted">Get Started</button>
            </Link>
            <ul>
              <li>
                <img src="ai-chats.png" alt="" />
                10 AI chats per day
              </li>
              <li>
                <img src="core-features.png" alt="" />
                Access to Core Features
              </li>
              <li>
                <img src="ai-model.png" alt="" />
                Don't have access to Latest AI Model
              </li>
              <li>
                <img src="support.png" alt="" />
                Don't have Priority Support
              </li>
            </ul>
          </div>
          <div className="card premium">
            <h2>Standard Plan</h2>
            <h1>₱ 99.99 /month</h1>
            <p>
              Get 100 AI chats daily, personalized recommendations, and full
              access to core features—ideal for regular users!
            </p>
            <Link to="/">
              <button className="getStarted">Subscribe</button>
            </Link>
            <ul>
              <li>
                {" "}
                <img src="ai-chats.png" alt="" />
                100 AI chats per day
              </li>
              <li>
                {" "}
                <img src="core-features.png" alt="" />
                Access to core features
              </li>
              <li>
                {" "}
                <img src="ai-model.png" alt="" />
                Access to the latest AI model
              </li>
              <li>
                {" "}
                <img src="support.png" alt="" />
                Priority support
              </li>
            </ul>
          </div>
          <div className="card enterprise">
            <h2>Pro Plan</h2>
            <h1>₱ 199.99 /month</h1>
            <p>
              Enjoy unlimited AI chats, advanced features, and the best Daya AI
              experience—perfect for power users!
            </p>
            <Link to="/">
              <button className="getStarted">Subscribe</button>
            </Link>
            <ul>
              <li>
                {" "}
                <img src="ai-chats.png" alt="" />
                Unlimited AI chats
              </li>
              <li>
                {" "}
                <img src="core-features.png" alt="" />
                Access to core features
              </li>
              <li>
                {" "}
                <img src="ai-model.png" alt="" />
                Access to the latest AI model
              </li>
              <li>
                {" "}
                <img src="support.png" alt="" />
                Priority support
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
