"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Work {
  img: string;
  title: string;
  desc: string;
}

export default function Gallery() {
  const works: Work[] = [
    {
      img: "/assets/RepairsInstallation.webp",
      title: "Repairs & Installation",
      desc: "Quick, safe fixes and reliable new installations for homes, offices, and industries. Our certified electricians ensure everything is wired securely and functions efficiently.",
    },
    {
      img: "/assets/LightingDesign.webp",
      title: "Lighting Design",
      desc: "Modern, energy-efficient lighting plans tailored to your space. From ambiance to task lighting, we design solutions that enhance comfort, aesthetics, and savings.",
    },
    {
      img: "/assets/SmartHome.webp",
      title: "Smart Home System",
      desc: "Automate lighting, security, and energy with advanced smart systems. Control your devices remotely and enjoy convenience, safety, and reduced energy costs.",
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      id="gallery"
      className="py-16 px-6 bg-black transition-colors duration-500"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-yellow-400 mb-12 relative">
        Current Services for You
        <span className="block w-20 h-1 bg-yellow-500 mx-auto mt-3 rounded"></span>
      </h2>

      <div className="grid gap-8 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {works.map((w, i) => (
          <div
            key={i}
            className="bg-white/10 dark:bg-white/10 rounded-2xl shadow-xl backdrop-blur-md overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col group"
          >
            {/* Image */}
            <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden rounded-t-2xl">
              <Image
                src={w.img}
                alt={w.title}
                width={400} // Explicit width
                height={250} // Explicit height
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Card content */}
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 transition-colors duration-300 group-hover:text-yellow-500">
                {w.title}
              </h3>

              <div
                className={`text-gray-200 mt-2 text-sm sm:text-base leading-relaxed overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  expanded === i ? "max-h-96" : "max-h-20"
                }`}
              >
                {w.desc}
              </div>

              <button
                className="mt-4 px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black shadow-lg shadow-yellow-400/30
                           hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-600 hover:scale-105 transform transition-all duration-300
                           relative overflow-hidden group self-center"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <span className="relative z-10">
                  {expanded === i ? "Show Less" : "Read More"}
                </span>
                <span className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
