import { products, getProductName } from "../data/products.js";

let query = "";

export function getQuery() {
  return query;
}

export function setQuery(value) {
  query = value.trim();
}

export function searchProducts(text) {
  const q = text.trim().toLowerCase();
  if (!q) return products;

  return products.filter((product) => {
    const names = ["mn", "en", "ko"].map((lang) => getProductName(product, lang).toLowerCase());
    return product.brand.toLowerCase().includes(q) || names.some((name) => name.includes(q));
  });
}
