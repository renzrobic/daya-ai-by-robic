import "./aboutPage.css";
import Footer from "../../components/footer/Footer";
import CardFlip from "../../components/cardFlip/CardFlip";
import BernalCard from "../../components/cardFlip/BernalCard";
import SurdillaCard from "../../components/cardFlip/SurdillaCard";
import BinaraoCard from "../../components/cardFlip/BinaraoCard";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="hero">
        <h1>Our Mission</h1>
        <div className="mission">
          <div className="cards">
            <div className="card">
              <div className="number">01</div>
              <span>
                <h1>Empowering Through AI</h1>
                <p>
                  At DAYA AI, our mission is to empower individuals and
                  businesses by providing innovative, reliable, and accessible
                  AI-driven solutions that enhance productivity and simplify
                  complex tasks.
                </p>
              </span>
            </div>
            <div className="card">
              <div className="number">02</div>
              <span>
                <h1>AI That Works for You</h1>
                <p>
                  We harness cutting-edge technology to unlock new
                  opportunities, automate workflows, and make AI more intuitive,
                  ensuring that users can focus on what truly matters in a
                  fast-paced digital world.
                </p>
              </span>
            </div>
            <div className="card">
              <div className="number">03</div>
              <span>
                <h1>Shaping the Future</h1>
                <p>
                  Fostering Growth & Success DAYA AI is more than just a chatbot
                  it’s a tool for growth and transformation. By making AI
                  accessible, we help individuals and businesses thrive in an
                  ever-evolving technological landscape.
                </p>
              </span>
            </div>
          </div>
          <img src="/mission.jpg" alt="" />
        </div>
        <div className="story">
          <span>
            <h1>OUR STORY</h1>
            <p>
              Daya AI started as a simple idea—born from a classroom challenge
              that would eventually become something far greater. It all began
              when our instructor gave us a project: to build an AI-powered
              website. As undergraduate students, we took on the task with
              enthusiasm, determination, and a deep curiosity about artificial
              intelligence. What seemed like just another assignment quickly
              became a passion project that pushed us beyond our limits. From
              the very beginning, we knew this wouldn’t be an easy journey. With
              limited resources but boundless ambition, we spent countless hours
              brainstorming, experimenting, and refining our ideas. Late nights
              turned into early mornings as we worked tirelessly to bring our
              vision to life—debugging code, testing features, and ensuring that
              our AI platform wasn’t just functional but truly innovative,
              intuitive, and impactful. Despite the challenges we faced as
              students—balancing coursework, deadlines, and learning new
              technologies—we remained committed to creating something
              meaningful. We wanted Daya AI to be more than just a class
              project; we wanted it to represent the power of creativity,
              perseverance, and teamwork. Every line of code, every feature, and
              every decision was fueled by our shared belief in what AI could do
              when placed in the hands of everyday users. Daya AI is more than a
              tool—it’s a testament to what passion, collaboration, and a
              relentless pursuit of knowledge can achieve. What started in a
              classroom has now evolved into a fully functional AI-powered
              platform, and this is just the beginning. We are excited for the
              future, eager to learn, grow, and push the boundaries of what’s
              possible. Our journey has just begun, and we invite you to be a
              part of it as we continue shaping the future of AI.
            </p>
          </span>
          <img src="/story.jpg" alt="" />
        </div>{" "}
        <div className="team">
          <h1>Our Team</h1>
          <div className="cards">
            <div className="card">
              <BernalCard />
              <h1>Renz Robic Bernal</h1>
              <p>Fullstack Dev</p>
              <span>
                <a
                  href="https://www.facebook.com/robic.bernal.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/fb-logo.png" alt="Facebook" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/insta-logo.png" alt="Instagram" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/ln-logo.png" alt="LinkedIn" />
                </a>
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/bh-logo.png" alt="Behance" />
                </a>
              </span>
            </div>
            <div className="card">
              <SurdillaCard />
              <h1>Jhonamery Surdilla</h1>
              <p>UI/UX Designer</p>
              <span>
                <a
                  href="https://www.facebook.com/search/top?q=damer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/fb-logo.png" alt="Facebook" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/insta-logo.png" alt="Instagram" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/ln-logo.png" alt="LinkedIn" />
                </a>
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/bh-logo.png" alt="Behance" />
                </a>
              </span>
            </div>
            <div className="card">
              <BinaraoCard />
              <h1>Christian Dale Binarao</h1>
              <p>Frontend Dev </p>
              <span>
                <a
                  href="https://www.facebook.com/G3N0S908"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/fb-logo.png" alt="Facebook" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/insta-logo.png" alt="Instagram" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/ln-logo.png" alt="LinkedIn" />
                </a>
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/bh-logo.png" alt="Behance" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
