import Image from "next/image";
import styles from "../components/CSS/Gallery.module.css";

interface Work {
  img: string;
  title: string;
  desc: string;
}

export default function Gallery() {
  const works: Work[] = [
    {
      img: "/assets/RepairsInstallation.jpg",
      title: "Repairs & Installation",
      desc: "Quick, safe fixes and reliable new installations for homes, offices, and industries. Our certified electricians ensure everything is wired securely and functions efficiently.",
    },
    {
      img: "/assets/LightingDesign.jpg",
      title: "Lighting Design",
      desc: "Modern, energy-efficient lighting plans tailored to your space. From ambiance to task lighting, we design solutions that enhance comfort, aesthetics, and savings.",
    },
    {
      img: "/assets/SmartHome.jpg",
      title: "Smart Home System",
      desc: "Automate lighting, security, and energy with advanced smart systems. Control your devices remotely and enjoy convenience, safety, and reduced energy costs.",
    },
  ];

  return (
    <section id="gallery" className={styles.section}>
      <h2 className={styles.heading}>Current Services for You</h2>

      <div className={styles.grid}>
        {works.map((w, i) => (
          <div key={i} className={styles.card}>
            <Image
              src={w.img}
              alt={w.title}
              width={500}
              height={300}
              className={styles.image}
            />
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{w.title}</h3>
              <p className={styles.cardDesc}>{w.desc}</p>
              {/* <button className={styles.button}>See More</button> */}
              <button className={styles.button}>
                <span>See More</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
