"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Client {
  img: string;
  name: string;
  comment: string;
}

import styles from "./CSS/HappyClients.module.css";

export default function HappyClients() {
  const clients: Client[] = [
    {
      img: "/assets/safdar.png",
      name: "Safdar Ansari",
      comment:
        "Reliable Electrical Services transformed our office setup with a modern wiring and lighting system. Professional and safe work!",
    },
    {
      img: "/assets/safdar.png",
      name: "Safdar Ansari",
      comment:
        "Reliable Electrical Services transformed our office setup with a modern wiring and lighting system. Professional and safe work!",
    },
    {
      img: "/assets/safdar.png",
      name: "Mohit mishra",
      comment:
        "Quick and efficient! Their smart home installation has made life so convenient. Highly recommended!",
    },
    {
      img: "/assets/safdar.png",
      name: "David Wilson",
      comment:
        "Excellent service! They provided industrial-grade solutions for our factory that boosted both safety and efficiency.",
    },
    {
      img: "/assets/safdar.png",
      name: "Sophia Khan",
      comment:
        "Very responsive and professional team. Solved our electrical issue within hours. Truly reliable!",
    },
    {
      img: "/assets/safdar.png",
      name: "Arjun Patel",
      comment:
        "They gave us the best electrical panel upgrade. Our home is now much safer and energy-efficient!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1280) setCardsPerView(4);
      else if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const prevSlide = () =>
    setCurrentIndex((prev) => Math.max(prev - cardsPerView, 0));
  const nextSlide = () =>
    setCurrentIndex((prev) =>
      Math.min(prev + cardsPerView, clients.length - cardsPerView)
    );

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>😊 Happy Clients</h2>

      <div className={styles.carousel}>
        <button
          className={styles.navBtn}
          onClick={prevSlide}
          aria-label="Previous clients"
          disabled={currentIndex === 0}
        >
          ❮
        </button>

        {/* Carousel Track */}
        <div className={styles.cardsContainer}>
          <div
            className={styles.cardsTrack}
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              width: `${clients.length * (100 / cardsPerView)}%`,
            }}
          >
            {clients.map((client, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.avatarContainer}>
                  <Image
                    src={client.img}
                    alt={client.name}
                    width={80}
                    height={96}
                    className={styles.avatar}
                  />
                </div>
                <h3 className={styles.name}>{client.name}</h3>
                <p className={styles.comment} style={{ color: "#374151" }}>
                  {client.comment}
                </p>
                <div className={styles.hoverOverlay}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          className={styles.navBtn}
          onClick={nextSlide}
          aria-label="Next clients"
          disabled={currentIndex >= clients.length - cardsPerView}
        >
          ❯
        </button>
      </div>
    </section>
  );
}
