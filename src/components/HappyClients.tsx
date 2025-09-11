"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../components/CSS/HappyClients.module.css";

interface Client {
  img: string;
  name: string;
  comment: string;
}

export default function HappyClients() {
  const clients: Client[] = [
    {
      img: "/assets/client1.jpg",
      name: "Ravi Sharma",
      comment:
        "Reliable Electrical Services transformed our office setup with a modern wiring and lighting system. Professional and safe work!",
    },
    {
      img: "/assets/client2.jpg",
      name: "Anita Verma",
      comment:
        "Quick and efficient! Their smart home installation has made life so convenient. Highly recommended!",
    },
    {
      img: "/assets/client3.jpg",
      name: "David Wilson",
      comment:
        "Excellent service! They provided industrial-grade solutions for our factory that boosted both safety and efficiency.",
    },
    {
      img: "/assets/client4.jpg",
      name: "Sophia Khan",
      comment:
        "Very responsive and professional team. Solved our electrical issue within hours. Truly reliable!",
    },
    {
      img: "/assets/client5.jpg",
      name: "Arjun Patel",
      comment:
        "They gave us the best electrical panel upgrade. Our home is now much safer and energy-efficient!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // desktop
      if (window.innerWidth >= 768) return 2; // tablet
    }
    return 1; // mobile
  };

  const cardsPerView = getCardsPerView();

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, clients.length - cardsPerView)
    );
  };

  return (
    <section id="happy-clients" className={styles.clientsSection}>
      <h2 className={styles.heading}>😊 Happy Clients</h2>
      <div className={styles.carousel}>
        {/* Left Button */}
        <button
          className={`${styles.navBtn} ${styles.left}`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          ❮
        </button>

        {/* Track */}
        <div className={styles.trackWrapper}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {clients.map((client, i) => (
              <div key={i} className={styles.card}>
                <Image
                  src={client.img}
                  alt={client.name}
                  width={80}
                  height={80}
                  className={styles.avatar}
                />
                <h3 className={styles.name}>{client.name}</h3>
                {/* ✅ Fixed escaping issue */}
                <p className={styles.comment}>&quot;{client.comment}&quot;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          className={`${styles.navBtn} ${styles.right}`}
          onClick={nextSlide}
          disabled={currentIndex >= clients.length - cardsPerView}
        >
          ❯
        </button>
      </div>
    </section>
  );
}
