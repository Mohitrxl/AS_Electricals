import styles from "../components/CSS/hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2>Powering Your World with Reliable Electrical Solutions</h2>
        <p>
          At Reliable Electrical Services, we provide safe, efficient, and modern
          electrical solutions for homes, businesses, and industries.
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
    </section>
  );
}
