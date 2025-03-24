import { useState } from "react";
import "./contactPage.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setResponseMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="contactPage">
      <div className="contact">
        <div className="left">
          <p className="contactUs">Contact Us</p>
          <h1>
            Get in touch: We're <br />
            Here to Answer Your <br />
            Questions
          </h1>
          <div className="links">
            <div className="link">
              <div className="contanier">
                <div className="linkcard">
                  <span>
                    <img src="./mail.png" alt="" />
                  </span>
                  <p>daya.ai.dev@gmail.com</p>
                </div>
                <h1>Customer Support</h1>
                <p className="pp">
                  Our support team is available around the clock to help you
                  with any questions.
                </p>
              </div>
              <div className="contanier">
                <div className="linkcard">
                  <span>
                    <img src="./phone-call.png" alt="" />
                  </span>
                  <p>+63 916 431 2995</p>
                </div>
                <h1>Feedback and Suggestions</h1>
                <p className="pp">
                  We value your feed back and continuously work towards
                  improving ourselves to help you better.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="container">
            <span>
              <h1 className="form-title">Get in Touch</h1>
              <p className="form-subtitle">You can reach us anytime</p>
            </span>

            <form onSubmit={handleSubmit}>
              <div className="name">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="input-field fName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="input-field lName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-field email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone no"
                className="input-field phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="input-field message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
            {responseMessage && (
              <p className="response-message">{responseMessage}</p>
            )}
          </div>
        </div>
      </div>
      <section id="map" className="map">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.587518938686!2d123.44481021042427!3d7.833404592155107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325422adc45ddb6b%3A0xb222544e018f6ca3!2sPagadian%20Capitol%20College%2C%20Inc!5e0!3m2!1sen!2sph!4v1717512611381!5m2!1sen!2sph"
            style={{ border: 0, width: "50%", height: "500px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="left">
            <p className="title">Our location</p>
            <h1 className="subtitle">You can find us at</h1>
            <p className="hq">Headquarters</p>
            <p className="address">
              Tuburan District, Pagadian City, Zamboanga del Sur
            </p>
            <p className="number">+63 916 431 2995</p>
            <p className="socials-title">Our Socials</p>
            <h2 className="socials-subtitle">You can follow us</h2>
            <div className="logos">
              <a
                href="https://www.facebook.com"
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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
