import { mountNavbar } from "./components/navbar.js";
import { mountFooter } from "./components/footer.js";
import { addToCart, updateCartBadge } from "./services/cart.js";
import { initRouter } from "./router.js";
import { routes } from "./routes.js";

mountNavbar(document.getElementById("navbar"));
mountFooter(document.getElementById("footer"));

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  addToCart(button.dataset.add);
  button.classList.add("is-added");
  setTimeout(() => button.classList.remove("is-added"), 700);
});

updateCartBadge();
initRouter(routes);
