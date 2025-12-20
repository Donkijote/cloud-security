import { useCallback, useEffect, useId, useRef, useState } from "react";

import { Check, ChevronDownIcon, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  {
    value: "en",
    label: "English",
    flagAlt: "United States",
    flagSrc:
      "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
  },
  {
    value: "es",
    label: "Español",
    flagAlt: "Chile",
    flagSrc:
      "https://purecatamphetamine.github.io/country-flag-icons/3x2/CL.svg",
  },
] as const;

type LangValue = (typeof LANGUAGES)[number]["value"];

const normalizeToSupported = (raw?: string | null): LangValue => {
  const fallback: LangValue = "en";
  if (!raw) return fallback;
  const base = raw.toLowerCase().split("-")[0];
  return (
    LANGUAGES.some((l) => l.value === base) ? base : fallback
  ) as LangValue;
};

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuId = useId();

  const current = normalizeToSupported(i18n.resolvedLanguage ?? i18n.language);
  const currentLang =
    LANGUAGES.find((l) => l.value === current) ?? LANGUAGES[0];

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (rootRef.current && !rootRef.current.contains(target)) close();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const setLang = (lng: LangValue) => {
    i18n.changeLanguage(lng).then();
    close();
  };

  return (
    <div ref={rootRef} className="relative inline-flex">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        className="cursor-pointer inline-flex items-center gap-2 rounded-full px-3 py-2 border border-(--color-border-subtle) bg-white/40 dark:bg-slate-900/40 backdrop-blur-md shadow-sm shadow-black/5 hover:shadow-md hover:shadow-black/10 transition focus:outline-none focus:ring-1 focus:ring-(--color-primary)"
      >
        <Languages className="h-4 w-4 text-(--color-text-muted)" />

        <img
          alt={currentLang.flagAlt}
          src={currentLang.flagSrc}
          className="w-4 h-4 rounded-full object-cover shadow-sm"
          loading="lazy"
        />

        <span className="text-xs sm:text-sm font-medium text-(--color-text)">
          {currentLang.label}
        </span>

        <span
          aria-hidden="true"
          className="text-(--color-text-muted) text-xs leading-none"
        >
          <ChevronDownIcon />
        </span>
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label="Language menu"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-44 overflow-hidden rounded-2xl border border-(--color-border-subtle) bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg shadow-black/10"
        >
          <div className="p-1">
            {LANGUAGES.map((l) => {
              const active = l.value === current;

              return (
                <button
                  key={l.value}
                  type="button"
                  role="menuitem"
                  onClick={() => setLang(l.value)}
                  className="w-full flex items-center gap-2 rounded-xl px-2 py-2 text-left text-xs sm:text-sm text-(--color-text) hover:bg-black/5 dark:hover:bg-white/8 transition cursor-pointer"
                >
                  <img
                    alt={l.flagAlt}
                    src={l.flagSrc}
                    className="h-4 w-4 rounded-full object-cover shadow-sm"
                    loading="lazy"
                  />

                  <span className="flex-1">{l.label}</span>

                  {active && (
                    <Check className="h-4 w-4 text-(--color-primary)" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
