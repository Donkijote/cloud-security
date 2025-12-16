import { useEffect, useState } from "react";

import { clsx } from "clsx";
import { ArrowUp } from "lucide-react";

import { LocalStorageKeys, setItem } from "@/application/storage/LocalStorage";

const SCROLL_THRESHOLD = 400;

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isVisible = window.scrollY > SCROLL_THRESHOLD;
      setIsVisible(isVisible);
      setItem(LocalStorageKeys.GO_BACK_BUTTON, isVisible.toString());
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Volver arriba"
      className={clsx(
        "fixed bottom-0 right-2 md:bottom-0 md:right-4 z-40 cursor-pointer opacity-0",
        "h-11 w-11 rounded-full inline-flex items-center justify-center",
        "bg-white/10 dark:bg-slate-900/70",
        "border border-white/10 dark:border-slate-700/70",
        "backdrop-blur-lg shadow-lg shadow-slate-900/10 dark:shadow-black/40",
        "text-slate-900 dark:text-slate-100",
        "transition-all duration-300",
        "hover:-translate-y-0.5 hover:bg-white/90 dark:hover:bg-slate-900/90",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        {
          "opacity-100 bottom-4 md:bottom-6": isVisible,
        },
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};
