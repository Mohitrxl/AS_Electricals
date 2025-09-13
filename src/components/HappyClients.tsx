"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Client {
  img: string;
  name: string;
  comment: string;
}

export default function HappyClients() {
  const clients: Client[] = [
    { img: "/assets/safdar.png", name: "Ravi Sharma", comment: "Reliable Electrical Services transformed our office setup with a modern wiring and lighting system. Professional and safe work!" },
    { img: "/assets/safdar.png", name: "Anita Verma", comment: "Quick and efficient! Their smart home installation has made life so convenient. Highly recommended!" },
    { img: "/assets/safdar.png", name: "David Wilson", comment: "Excellent service! They provided industrial-grade solutions for our factory that boosted both safety and efficiency." },
    { img: "/assets/safdar.png", name: "Sophia Khan", comment: "Very responsive and professional team. Solved our electrical issue within hours. Truly reliable!" },
    { img: "/assets/safdar.png", name: "Arjun Patel", comment: "They gave us the best electrical panel upgrade. Our home is now much safer and energy-efficient!" },
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

  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - cardsPerView, 0));
  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + cardsPerView, clients.length - cardsPerView));

  return (
    <section className="relative py-16 px-6 bg-black text-white overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-yellow-400 mb-12">
        😊 Happy Clients
      </h2>

      <div className="flex items-center relative">
        {/* Left Button */}
        <button
          className="bg-gray-800 text-yellow-400 hover:bg-gray-700 hover:text-white rounded-full p-2 text-2xl z-10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          ❮
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden flex-1 mx-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
              width: `${(clients.length / cardsPerView) * 100}%`,
            }}
          >
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex-0 mx-3 bg-gray-900 rounded-lg p-4 flex flex-col items-center justify-start shadow-lg relative hover:scale-105 transition-transform"
                style={{ flex: `0 0 ${100 / cardsPerView}%`, aspectRatio: "1 / 1" }} // square cards
              >
                <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-yellow-400 shadow-lg">
                  <Image
                    src={client.img}
                    alt={client.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-bold text-yellow-400 text-lg mb-2">{client.name}</h3>
                <p className="text-gray-300 text-center text-sm">{client.comment}</p>
                <div className="absolute top-0 left-0 w-full h-full rounded-lg border-2 border-yellow-500 opacity-0 hover:opacity-20 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          className="bg-gray-800 text-yellow-400 hover:bg-gray-700 hover:text-white rounded-full p-2 text-2xl z-10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          onClick={nextSlide}
          disabled={currentIndex >= clients.length - cardsPerView}
        >
          ❯
        </button>
      </div>
    </section>
  );
}
