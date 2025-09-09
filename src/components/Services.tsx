"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../components/CSS/Services.module.css";

interface Service {
  title: string;
  desc: string;
  img: string;
}

export default function Services() {
  const services: Service[] = [
    {
      title: "Residential Wiring",
      img: "/assets/ResidentialWiring.jpeg",
      desc: "Safe residential wiring ensures occupant safety, energy efficiency, and long system life. Best practices include proper layouts, high-quality ISI wires, adherence to codes, and use of safety devices like MCBs and RCCBs.",
    },
    {
      title: "Commercial Projects",
      img: "/assets/CommercialProjects.png",
      desc: "Commercial electrical setups are designed for higher loads and diverse equipment. Offices require robust wiring, emergency backups, smart energy management, and compliance with electrical code standards.",
    },
    {
      title: "Industrial Solutions",
      img: "/assets/industrialSolutions.jpg",
      desc: "Industrial systems handle high voltage and current loads, tailored for machinery and automation. Includes redundancy, surge protection, SCADA monitoring, and sustainable solutions with renewable integration.",
    },
    {
      title: "Maintenance & Repair",
      img: "/assets/MaintenanceRepair.jpg",
      desc: "Quick troubleshooting powered by CMMS tools, predictive maintenance, and routine inspections. Ensures safety, reduces downtime, and keeps residential, commercial, and industrial systems efficient.",
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className={styles.section}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.grid}>
        {services.map((s, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={s.img}
                alt={s.title}
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>
                {expanded === i ? s.desc : `${s.desc.substring(0, 120)}...`}
              </p>
              <button
                className={styles.readMore}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                {expanded === i ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
