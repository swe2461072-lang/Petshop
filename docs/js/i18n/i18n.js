import { translations } from "./translations.js";

const DEFAULT_LANGUAGE = "en";
const LANGUAGES = ["mn", "en", "ko"];

export function getCurrentLanguage() {
  return localStorage.getItem("language") || DEFAULT_LANGUAGE;
}

export function setLanguage(language) {
  localStorage.setItem("language", language);
}

export function t(path) {
  const language = getCurrentLanguage();
  const keys = path.split(".");
  let value = translations[language];

  for (const key of keys) {
    value = value?.[key];
  }

  return value ?? path;
}

export function toggleLanguage() {
  const current = getCurrentLanguage();
  const index = LANGUAGES.indexOf(current);
  const next = LANGUAGES[(index + 1) % LANGUAGES.length];
  setLanguage(next);
  return next;
}
