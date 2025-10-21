"use client";
import styles from "../components/CSS/hero.module.css";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={`${styles.content} ${isVisible ? styles.slideUp : ""}`}>
        <h2>Powering Your World with Reliable Electrical Solutions</h2>
        <p>
          At Reliable Electrical Services, we provide safe, efficient, and
          modern electrical solutions for homes, businesses, and industries.
        </p>
        <div className={styles.buttons}>
          <a href="#services" className={styles.primaryBtn}>
            Explore Services
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Contact Us
          </a>
        </div>
      </div>

      <div
        className={styles.scrollIndicator}
        onClick={scrollToServices}
        aria-label="Scroll to services"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
