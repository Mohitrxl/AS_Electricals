"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle"; // 👈 import your toggle

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (key: string) => {
    if (window.innerWidth >= 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setActiveDrop(key);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        setActiveDrop(null);
      }, 200);
    }
  };

  const handleClick = (key: string) => {
    if (window.innerWidth < 768) {
      setActiveDrop(activeDrop === key ? null : key);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white sticky top-0 z-50 shadow-md transition-colors duration-300">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-yellow-500 font-bold text-xl">
          RES
        </Link>

        {/* Right Section (ThemeToggle + Mobile Toggle) */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Menu */}
        <ul
          className={`md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto 
            bg-white dark:bg-gray-900 md:bg-transparent flex-col md:flex-row 
            transition-all duration-300 ${menuOpen ? "flex" : "hidden"}`}
        >
          <li>
            <Link href="/" className="block px-4 py-2 hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="block px-4 py-2 hover:text-yellow-500"
            >
              About
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className="block px-4 py-2 cursor-pointer hover:text-yellow-500"
              onClick={() => handleClick("services")}
            >
              Services ▾
            </span>

            {/* Desktop dropdown */}
            <ul
              className={`absolute bg-white dark:bg-gray-800 rounded-md mt-2 w-52 shadow-lg 
                transition-all duration-300 transform origin-top hidden md:block ${
                  activeDrop === "services"
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                }`}
            >
              <li>
                <Link
                  href="/services"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/service-details"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Service Details
                </Link>
              </li>
            </ul>

            {/* Mobile accordion */}
            <ul
              className={`md:hidden overflow-hidden transition-[max-height] duration-300 
                bg-gray-100 dark:bg-gray-800 ${
                  activeDrop === "services" ? "max-h-40" : "max-h-0"
                }`}
            >
              <li>
                <Link
                  href="/services"
                  className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/service-details"
                  className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Service Details
                </Link>
              </li>
            </ul>
          </li>

          {/* Pages Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("pages")}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className="block px-4 py-2 cursor-pointer hover:text-yellow-500"
              onClick={() => handleClick("pages")}
            >
              Pages ▾
            </span>

            {/* Desktop dropdown */}
            <ul
              className={`absolute bg-white dark:bg-gray-800 rounded-md mt-2 w-52 shadow-lg 
                transition-all duration-300 transform origin-top hidden md:block ${
                  activeDrop === "pages"
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                }`}
            >
              <li>
                <Link
                  href="/team"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  FAQ
                </Link>
              </li>
            </ul>

            {/* Mobile accordion */}
            <ul
              className={`md:hidden overflow-hidden transition-[max-height] duration-300 
                bg-gray-100 dark:bg-gray-800 ${
                  activeDrop === "pages" ? "max-h-60" : "max-h-0"
                }`}
            >
              <li>
                <Link
                  href="/team"
                  className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </li>

          {/* Blogs Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("blogs")}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className="block px-4 py-2 cursor-pointer hover:text-yellow-500"
              onClick={() => handleClick("blogs")}
            >
              Blogs ▾
            </span>

            {/* Desktop dropdown */}
            <ul
              className={`absolute bg-white dark:bg-gray-800 rounded-md mt-2 w-52 shadow-lg 
                transition-all duration-300 transform origin-top hidden md:block ${
                  activeDrop === "blogs"
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                }`}
            >
              <li>
                <Link
                  href="/blog"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/blog-details"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Blog Details
                </Link>
              </li>
            </ul>

            {/* Mobile accordion */}
            <ul
              className={`md:hidden overflow-hidden transition-[max-height] duration-300 
                bg-gray-100 dark:bg-gray-800 ${
                  activeDrop === "blogs" ? "max-h-28" : "max-h-0"
                }`}
            >
              <li>
                <Link
                  href="/blog"
                  className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/blog-details"
                  className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Blog Details
                </Link>
              </li>
            </ul>
          </li>

          {/* Simple links */}
          <li>
            <Link
              href="/#gallery"
              className="block px-4 py-2 hover:text-yellow-500"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="block px-4 py-2 hover:text-yellow-500"
            >
              Contact
            </Link>
          </li>
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  );
}
