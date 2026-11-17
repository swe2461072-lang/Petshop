let count = 0;

export function getCartCount() {
  return count;
}

export function addToCart() {
  count += 1;
  updateCartBadge();
}

export function updateCartBadge() {
  document.querySelectorAll(".app-cart-count").forEach((badge) => {
    badge.textContent = count;
    badge.classList.toggle("is-hidden", count === 0);
  });
}
