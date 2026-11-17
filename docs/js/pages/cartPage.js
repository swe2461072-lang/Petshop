import { t, getCurrentLanguage } from "../i18n/i18n.js";
import { pets, getProductName, getProductIcon, getProductImage } from "../data/products.js";
import { formatMoney } from "../services/currency.js";
import { getTotals, setQuantity, removeFromCart, clearCart } from "../services/cart.js";
import { renderBanner } from "../components/banner.js";

function renderLine({ product, qty, unit, original, total }) {
  const name = getProductName(product, getCurrentLanguage());
  const pet = pets[product.pet];

  return `
    <article class="app-cartline is-${pet.color}">
      <div class="app-cartline-art">
        <i class="fas ${getProductIcon(product)}"></i>
        <img src="${getProductImage(product)}" alt="${name}" onerror="this.remove()" />
      </div>
 
      <div class="app-cartline-info">
        <h3>${name}</h3>
        <p>${product.brand}</p>
        <p class="app-cartline-unit">
          ${formatMoney(unit)}
          ${product.sale ? `<span class="app-price-old">${formatMoney(original)}</span>` : ""}
        </p>
      </div>
 
      <div class="app-qty" aria-label="${t("cart.quantity")}">
        <button type="button" data-action="dec" data-id="${product.id}" aria-label="-"><i class="fas fa-minus"></i></button>
        <span>${qty}</span>
        <button type="button" data-action="inc" data-id="${product.id}" aria-label="+"><i class="fas fa-plus"></i></button>
      </div>
 
      <div class="app-cartline-total">${formatMoney(total)}</div>
 
      <button class="app-remove" type="button" data-action="remove" data-id="${product.id}" aria-label="${t("cart.remove")}">
        <i class="fas fa-trash"></i>
      </button>
    </article>
  `;
}

function renderSummary(totals) {
  const note = totals.isFree
    ? `<i class="fas fa-circle-check"></i> ${t("cart.freeReached")}`
    : t("cart.addMore").replace("{amount}", formatMoney(totals.remaining));

  return `
    <aside class="app-summary">
      <h2>${t("cart.summary")}</h2>
 
      <div class="app-summary-row"><span>${t("cart.subtotal")} (${totals.count})</span><b>${formatMoney(totals.subtotal)}</b></div>
      ${
        totals.saved > 0
          ? `<div class="app-summary-row is-saved"><span>${t("cart.saved")}</span><b>-${formatMoney(totals.saved)}</b></div>`
          : ""
      }
      <div class="app-summary-row">
        <span>${t("cart.delivery")}</span>
        <b>${totals.delivery === 0 ? t("cart.free") : formatMoney(totals.delivery)}</b>
      </div>
 
      <div class="app-progress"><span style="width:${Math.round(totals.progress * 100)}%"></span></div>
      <p class="app-progress-note">${note}</p>
 
      <div class="app-summary-row is-total"><span>${t("cart.total")}</span><b>${formatMoney(totals.total)}</b></div>
 
      <button class="app-btn is-coral app-checkout" type="button" data-action="checkout">${t("cart.checkout")}</button>
      <button class="app-clear" type="button" data-action="clear">${t("cart.clear")}</button>
    </aside>
  `;
}

export function renderCartPage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    ${renderBanner({
      color: "pink",
      icon: "fa-basket-shopping",
      title: t("cart.title"),
      text: t("cart.text"),
      crumb: `${t("common.home")} / ${t("cart.title")}`,
    })}
    <section class="app-section">
      <div class="container" id="cartRoot"></div>
    </section>
  `;

  const root = document.getElementById("cartRoot");
  let thanks = false;

  function update() {
    const totals = getTotals();

    if (thanks) {
      root.innerHTML = `<p class="app-empty"><i class="fas fa-circle-check"></i> ${t("cart.thanks")}<br /><a class="app-btn is-coral" href="#/home">${t("cart.shop")}</a></p>`;
      return;
    }

    if (totals.lines.length === 0) {
      root.innerHTML = `<p class="app-empty"><i class="fas fa-paw"></i> ${t("cart.empty")}<br /><a class="app-btn is-coral" href="#/home">${t("cart.shop")}</a></p>`;
      return;
    }

    root.innerHTML = `
      <div class="app-cart-layout">
        <div class="app-cartlines">${totals.lines.map(renderLine).join("")}</div>
        ${renderSummary(totals)}
      </div>
    `;
  }

  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;

    const { action, id } = button.dataset;
    const line = getTotals().lines.find((item) => item.product.id === id);

    if (action === "inc") setQuantity(id, line.qty + 1);
    if (action === "dec") setQuantity(id, line.qty - 1);
    if (action === "remove") removeFromCart(id);
    if (action === "clear") clearCart();
    if (action === "checkout") {
      clearCart();
      thanks = true;
    }

    update();
  });

  update();
}
