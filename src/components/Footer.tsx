import styles from "../components/CSS/footer.module.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // For X (Twitter)

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company Info */}
        <div className={styles.column}>
          <h3 className={styles.logo}>Reliable Electrical Services</h3>
          <p>
            You can trust expert electrical solutions for homes and businesses.
          </p>

          {/* Social Media */}
          <div className={styles.socials}>
            <a
              href="https://linkedin.com/company/reliable-electrical"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/reliableelectrical"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/reliableelectrical"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.column}>
          <h4>Pages</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className={styles.column}>
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Terms & Condition</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h4>Contact Us</h4>
          <p>(123) 456-789</p>
          <p>domain@example.com</p>
          <p>456 Elm St, IL 62704, Dhaka</p>
          <p>Sun - Mon: 9AM - 5PM</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Reliable Electrical Services. All rights
          reserved.
        </p>
        <p>
          Developed by <span className={styles.dev}>Safdar Ansari</span>
        </p>
      </div>
    </footer>
  );
}
