import "../pages/Home.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="eventplus-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-col">
            <h3>College Event Management</h3>
            <p>
              Your premier platform for campus events and activities management.
            </p>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i> College Campus, City,
                State
              </li>
              <li>
                <i className="fas fa-phone"></i> +91 9876543210
              </li>
              <li>
                <i className="fas fa-envelope"></i> events@yourcollege.edu
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Subscribe to get updates on upcoming events</p>
            <form class="newsletter-form">
              <input
                type="email"
                class="email-input"
                placeholder="Your Email Address"
              />
              <button type="submit" class="subscribe-btn">
                Subscribe
              </button>
            </form>

            <div className="auth-buttons">
              <button className="auth-btn" onClick={() => navigate("/login")}>
                Login
              </button>
              <button
                className="auth-btn"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>© 2023 College Event Management. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
