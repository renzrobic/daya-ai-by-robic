import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="left">
          <span>
            <img src="logo3.png" alt="" />
            <h1>DAYA</h1>
          </span>

          <p>
            Daya AI is a website offering AI-powered solutions and tools to
            streamline tasks, solve problems, and enhance productivity. With
            features like data analysis, automation, and creative assistance, it
            provides a versatile, user-friendly platform to meet modern needs
            efficiently.
          </p>
        </div>
        <div className="right">
          <ul>
            <li>RESOURCES</li>
            <li>PRICING</li>
            <li>AI MODEL</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
      <div className="footer-end">
        <div className="left">
          {" "}
          <p>COPYRIGHT © 2025 DAYA AI. ALL RIGHTS RESERVED.</p>
        </div>

        <div className="right">
          <p>Follow Us</p>
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
    </div>
  );
};

export default Footer;
