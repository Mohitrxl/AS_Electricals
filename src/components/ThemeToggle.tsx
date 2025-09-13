"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-yellow-400 text-black dark:bg-gray-800 dark:text-yellow-400 shadow-md transition-transform hover:scale-110"
    >   
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
