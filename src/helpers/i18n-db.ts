type LocalizedText = Record<string, string>;

export const translate = (
  value: string | LocalizedText | undefined,
  lang: string,
  fallbackLang = "es",
) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] ?? value[fallbackLang] ?? Object.values(value)[0] ?? "";
};
