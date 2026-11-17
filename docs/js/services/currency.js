import { getCurrentLanguage } from "../i18n/i18n.js";

export function convertPrice(usd) {
  const language = getCurrentLanguage();

  if (language === "mn") return Math.round((usd * 3500) / 100) * 100;
  if (language === "ko") return Math.round((usd * 1350) / 100) * 100;
  return Math.round(usd * 100);
}

export function formatMoney(value) {
  const language = getCurrentLanguage();

  if (language === "mn") return `${value.toLocaleString("en-US")}₮`;
  if (language === "ko") return `₩${value.toLocaleString("en-US")}`;
  return `$${(value / 100).toFixed(2)}`;
}

export function formatPrice(usd) {
  return formatMoney(convertPrice(usd));
}
