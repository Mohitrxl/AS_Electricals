"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Wrench, Building2, Factory, ToolCase, ArrowRight } from "lucide-react";
import type { ReactElement } from "react";
import styles from "./CSS/Services.module.css";

interface Service {
  title: string;
  desc: string;
  img: string;
  icon: ReactElement;
}

export default function Services() {
  const services: Service[] = [
    {
      title: "Residential Wiring",
      img: "/assets/ResidentialWiring.jpeg",
      desc: "Safe residential wiring ensures occupant safety, energy efficiency, and long system life. Best practices include proper layouts, high-quality ISI wires, adherence to codes, and use of safety devices like MCBs and RCCBs.",
      icon: <Wrench className={`w-8 h-8 ${styles.cardIcon} text-yellow-400`} />,
    },
    {
      title: "Commercial Projects",
      img: "/assets/CommercialProjects.png",
      desc: "Commercial electrical setups are designed for higher loads and diverse equipment. Offices require robust wiring, emergency backups, smart energy management, and compliance with electrical code standards.",
      icon: (
        <Building2 className={`w-8 h-8 ${styles.cardIcon} text-yellow-400`} />
      ),
    },
    {
      title: "Industrial Solutions",
      img: "/assets/industrialSolutions.jpg",
      desc: "Industrial systems handle high voltage and current loads, tailored for machinery and automation. Includes redundancy, surge protection, SCADA monitoring, and sustainable solutions with renewable integration.",
      icon: (
        <Factory className={`w-8 h-8 ${styles.cardIcon} text-yellow-400`} />
      ),
    },
    {
      title: "Maintenance & Repair",
      img: "/assets/MaintenanceRepair.jpg",
      desc: "Quick troubleshooting powered by CMMS tools, predictive maintenance, and routine inspections. Ensures safety, reduces downtime, and keeps residential, commercial, and industrial systems efficient.",
      icon: (
        <ToolCase className={`w-8 h-8 ${styles.cardIcon} text-yellow-400`} />
      ),
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // Only render after client mount to prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => [...prev, cardIndex]);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    document.querySelectorAll("[data-index]").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <section id="services" className={styles.section}>
        <h2 className={styles.heading}>Our Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={service.title}
              data-index={index}
              className={`${styles.card} ${
                visibleCards.includes(index) ? styles.animate : ""
              }`}
              data-animation-order={index}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={service.img}
                  alt={service.title}
                  className={styles.cardImage}
                  fill
                  objectFit="cover"
                />
              </div>
              <h3 className={styles.cardTitle}>
                {service.icon}
                {service.title}
              </h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <a
                href={`/service-details?service=${service.title}`}
                className={styles.cardButton}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>
      <section
        id="services"
        className="relative py-20 px-6 bg-black dark:bg-black text-gray-100"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-indigo-500/10 blur-3xl"></div>

        <h2 className="relative text-center text-4xl font-extrabold text-yellow-400 mb-14">
          Our Services
          <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded"></span>
        </h2>

        <div className="relative grid gap-8 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-white/10 dark:bg-white/10 rounded-2xl shadow-lg border border-gray-700 overflow-hidden flex flex-col hover:shadow-yellow-500/30 hover:scale-[1.03] transition-all duration-500 backdrop-blur-md"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-black/70 p-2 rounded-xl shadow">
                  {s.icon}
                </div>
              </div>

              <div className="flex flex-col flex-grow p-6 text-center">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  {s.title}
                </h3>

                <p
                  className={`text-gray-300 text-sm leading-relaxed transition-all duration-300 ${
                    expanded === i ? "line-clamp-none" : "line-clamp-3"
                  }`}
                >
                  {s.desc}
                </p>

                <button
                  className="mt-4 inline-block px-6 py-2 font-semibold rounded-full text-black bg-[#f7d759] shadow-lg shadow-yellow-400/30
             hover:bg-yellow-500 hover:scale-105 transform transition-all duration-300
             relative overflow-hidden group"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  {/** Use mounted check to ensure SSR doesn't mismatch */}
                  {expanded === i ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
