import type { ChangeEvent } from "react";

import { ChevronDownIcon, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { value: "en", label: "English", flag: "🇺🇸" },
  { value: "es", label: "Español", flag: "🇪🇸" },
] as const;

type LangValue = (typeof LANGUAGES)[number]["value"];

const normalizeToSupported = (raw: string | null | undefined): LangValue => {
  const fallback: LangValue = "en";
  if (!raw) return fallback;

  const base = raw.toLowerCase().split("-")[0] as LangValue;

  return LANGUAGES.some((l) => l.value === base) ? base : fallback;
};

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const current = normalizeToSupported(i18n.resolvedLanguage ?? i18n.language);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(normalizeToSupported(e.target.value)).then();
  };

  return (
    <div className="relative inline-flex items-center">
      <div
        className="
          inline-flex items-center gap-2 rounded-full px-3 py-2
          border border-(--color-border-subtle)
          bg-white/40 dark:bg-slate-900/40
          backdrop-blur-md
          shadow-sm shadow-black/5
          hover:shadow-md hover:shadow-black/10
          transition
        "
      >
        <Languages className="h-4 w-4 text-(--color-text-muted)" />

        <select
          value={current}
          onChange={handleChange}
          aria-label="Change language"
          className="
            appearance-none bg-transparent
            pr-6
            text-xs sm:text-sm font-medium
            text-(--color-text)
            focus:outline-none
            cursor-pointer
          "
        >
          {LANGUAGES.map((l) => (
            <option key={l.value} value={l.value}>
              {l.flag} {l.label}
            </option>
          ))}
        </select>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 text-(--color-text-muted) text-xs"
        >
          <ChevronDownIcon />
        </span>
      </div>
    </div>
  );
};
