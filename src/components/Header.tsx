"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState<string | null>(null);

  const toggleDrop = (key: string) => {
    setActiveDrop(activeDrop === key ? null : key);
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <nav className="flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-yellow-400 font-bold text-xl">RES</Link>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul
          className={`md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent flex-col md:flex-row transition-all ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <li><Link href="/" className="block px-4 py-2 hover:text-yellow-400">Home</Link></li>
          <li><a href="#about" className="block px-4 py-2 hover:text-yellow-400">About</a></li>

          {/* Services dropdown */}
          <li className="relative">
            <span
              className="block px-4 py-2 cursor-pointer hover:text-yellow-400"
              onClick={() => toggleDrop("services")}
            >
              Services ▾
            </span>
            <ul className={`absolute bg-gray-700 rounded-md mt-2 w-48 ${activeDrop==="services" ? "block" : "hidden"}`}>
              <li><Link href="/services" className="block px-4 py-2 hover:bg-gray-600">Our Services</Link></li>
              <li><Link href="/service-details" className="block px-4 py-2 hover:bg-gray-600">Service Details</Link></li>
            </ul>
          </li>

          {/* Pages dropdown */}
          <li className="relative">
            <span
              className="block px-4 py-2 cursor-pointer hover:text-yellow-400"
              onClick={() => toggleDrop("pages")}
            >
              Pages ▾
            </span>
            <ul className={`absolute bg-gray-700 rounded-md mt-2 w-48 ${activeDrop==="pages" ? "block" : "hidden"}`}>
              <li><Link href="/team" className="block px-4 py-2 hover:bg-gray-600">Team</Link></li>
              <li><Link href="/projects" className="block px-4 py-2 hover:bg-gray-600">Projects</Link></li>
              <li><Link href="/project-details" className="block px-4 py-2 hover:bg-gray-600">Project Details</Link></li>
              <li><Link href="/pricing" className="block px-4 py-2 hover:bg-gray-600">Pricing</Link></li>
              <li><Link href="/faq" className="block px-4 py-2 hover:bg-gray-600">FAQ</Link></li>
              <li><Link href="/404" className="block px-4 py-2 hover:bg-gray-600">Error 404</Link></li>
            </ul>
          </li>

          {/* Blogs dropdown */}
          <li className="relative">
            <span
              className="block px-4 py-2 cursor-pointer hover:text-yellow-400"
              onClick={() => toggleDrop("blogs")}
            >
              Blogs ▾
            </span>
            <ul className={`absolute bg-gray-700 rounded-md mt-2 w-48 ${activeDrop==="blogs" ? "block" : "hidden"}`}>
              <li><Link href="/blog" className="block px-4 py-2 hover:bg-gray-600">Blog</Link></li>
              <li><Link href="/blog-details" className="block px-4 py-2 hover:bg-gray-600">Blog Details</Link></li>
            </ul>
          </li>

          <li><a href="#gallery" className="block px-4 py-2 hover:text-yellow-400">Gallery</a></li>
          <li><a href="#contact" className="block px-4 py-2 hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
