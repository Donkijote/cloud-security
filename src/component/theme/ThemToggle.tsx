import { useEffect, useState } from "react";

import { clsx } from "clsx";
import { Moon, Sun } from "lucide-react";

import { LocalStorageKeys, setItem } from "@/application/storage/LocalStorage";

type Theme = "light" | "dark";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initial = detectInitialTheme();
    setTheme(initial);
    setItem(LocalStorageKeys.THEME, initial);
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
      setItem(LocalStorageKeys.THEME, theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      setItem(LocalStorageKeys.THEME, newTheme);
      return newTheme;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={clsx(
        "cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm",
        "border-slate-200/60 bg-(--color-surface) shadow-sm backdrop-blur",
        "hover:bg-white/90 dark:border-slate-700 dark:bg-slate-800/90 dark:hover:bg-slate-700",
      )}
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
