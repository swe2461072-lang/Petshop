import { products, getFinalPrice } from "../data/products.js";
import { convertPrice } from "./currency.js";

const STORAGE_KEY = "pawworld-cart";
export const FREE_DELIVERY_USD = 30; // энэ дүнгээс дээш бол хүргэлт үнэгүй
export const DELIVERY_FEE_USD = 3;

// { бараагийн id: тоо ширхэг }
let items = load();

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // хадгалах боломжгүй бол санах ойд л үлдэнэ
  }
  updateCartBadge();
}

export function getCartCount() {
  return Object.values(items).reduce((sum, qty) => sum + qty, 0);
}

export function addToCart(id) {
  items[id] = Math.min((items[id] || 0) + 1, 99);
  save();
}

export function setQuantity(id, qty) {
  if (qty <= 0) {
    delete items[id];
  } else {
    items[id] = Math.min(qty, 99);
  }
  save();
}

export function removeFromCart(id) {
  delete items[id];
  save();
}

export function clearCart() {
  items = {};
  save();
}

export function updateCartBadge() {
  const count = getCartCount();

  document.querySelectorAll(".app-cart-count").forEach((badge) => {
    badge.textContent = count;
    badge.classList.toggle("is-hidden", count === 0);
  });
}

// Сагсан дахь мөр бүр: бараа, тоо, нэгж үнэ, мөрийн дүн (бүгд тухайн хэлний мөнгөн нэгжээр)
export function getCartLines() {
  return Object.entries(items)
    .map(([id, qty]) => {
      const product = products.find((item) => item.id === id);
      if (!product) return null;

      const unit = convertPrice(getFinalPrice(product));
      const original = convertPrice(product.usd);

      return { product, qty, unit, original, total: unit * qty, saved: (original - unit) * qty };
    })
    .filter(Boolean);
}

// Тооцоолол: барааны дүн, хэмнэсэн дүн, хүргэлт, нийт дүн
export function getTotals() {
  const lines = getCartLines();
  const subtotal = lines.reduce((sum, line) => sum + line.total, 0);
  const saved = lines.reduce((sum, line) => sum + line.saved, 0);

  const subtotalUsd = lines.reduce((sum, line) => sum + getFinalPrice(line.product) * line.qty, 0);
  const isFree = subtotalUsd >= FREE_DELIVERY_USD;
  const delivery = lines.length === 0 || isFree ? 0 : convertPrice(DELIVERY_FEE_USD);
  const remainingUsd = Math.max(FREE_DELIVERY_USD - subtotalUsd, 0);

  return {
    lines,
    count: getCartCount(),
    subtotal,
    saved,
    delivery,
    isFree,
    total: subtotal + delivery,
    progress: Math.min(subtotalUsd / FREE_DELIVERY_USD, 1),
    remaining: convertPrice(remainingUsd),
  };
}
