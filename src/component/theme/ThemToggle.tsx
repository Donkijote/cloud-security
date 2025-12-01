import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initial = detectInitialTheme();
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={
        "cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-slate-100 hover:border-slate-400 transition dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
      }
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
};

const detectInitialTheme = (): Theme => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return "light";
  }

  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  const root = document.documentElement;
  if (root.classList.contains("dark")) {
    return "dark";
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};
