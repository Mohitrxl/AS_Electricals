import styles from "../components/CSS/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Us</h2>
        <p className={styles.intro}>
          At{" "}
          <span className={styles.highlight}>
            Reliable Electrical Services (RES)
          </span>
          , we take pride in being one of the most trusted names in the
          electrical industry. With years of experience, we specialize in
          delivering innovative, safe, and cost-effective electrical solutions
          for <strong>residential, commercial, and industrial projects</strong>.
        </p>

        <p className={styles.text}>
          Our team of certified electricians and engineers brings deep expertise
          and a customer-first approach, ensuring that every project — whether a
          simple home wiring upgrade, a complex commercial installation, or a
          large-scale industrial setup — is completed with precision, safety,
          and efficiency.
        </p>

        <div className={styles.values}>
          <div className={styles.valueCard}>
            ⚡ <h3>Safety First</h3>
            <p>
              Strict adherence to national and international electrical
              standards.
            </p>
          </div>
          <div className={styles.valueCard}>
            ⚡ <h3>Innovation</h3>
            <p>
              Modern technology like smart home automation and energy-efficient
              systems.
            </p>
          </div>
          <div className={styles.valueCard}>
            ⚡ <h3>Reliability</h3>
            <p>24/7 support and quick response to emergency service calls.</p>
          </div>
          <div className={styles.valueCard}>
            ⚡ <h3>Sustainability</h3>
            <p>
              Promoting eco-friendly electrical solutions and renewable energy
              systems.
            </p>
          </div>
        </div>

        <p className={styles.mission}>
          At RES, our mission is simple:{" "}
          <span className={styles.highlight}>
            Powering homes, businesses, and industries with dependable solutions
            you can trust.
          </span>
        </p>
      </div>
    </section>
  );
}
