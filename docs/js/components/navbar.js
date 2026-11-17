import { t, toggleLanguage } from "../i18n/i18n.js";
import { getCartCount } from "../services/cart.js";
import { getQuery, setQuery } from "../services/search.js";

const LINKS = [
  { href: "#/dogs", icon: "fa-dog", color: "blue", key: "dogs" },
  { href: "#/cats", icon: "fa-cat", color: "pink", key: "cats" },
  { href: "#/reptiles", icon: "fa-dragon", color: "mint", key: "reptiles" },
  { href: "#/brands", icon: "fa-award", color: "lilac", key: "brands" },
  { href: "#/deals", icon: "fa-percent", color: "coral", key: "deals" },
  { href: "#/contact", icon: "fa-address-card", color: "butter", key: "contact" },
];

export function renderNavbar() {
  const cartCount = getCartCount();

  return `
    <div class="app-promo"><i class="fas fa-truck-fast"></i> ${t("promo")}</div>
 
    <header class="app-header">
      <div class="container app-header-inner">
        <a class="app-brand" href="#/home">
          <span class="app-brand-mark"><i class="fas fa-paw"></i></span>
          <span class="app-brand-text"><b>Paw</b> World</span>
        </a>
 
        <form class="app-search" id="searchForm" role="search">
          <input
            id="searchInput"
            class="app-search-input"
            type="search"
            placeholder="${t("search.placeholder")}"
            aria-label="${t("search.button")}"
            value="${getQuery()}"
          />
          <button class="app-search-btn" type="submit" aria-label="${t("search.button")}">
            <i class="fas fa-magnifying-glass"></i>
          </button>
        </form>
 
        <div class="app-actions">
          <a class="app-pill-btn" href="#" id="langToggle">
            <i class="fas fa-globe"></i> ${t("nav.language")}
          </a>
          <span class="app-pill-btn app-cart" aria-label="${t("nav.cart")}">
            <i class="fas fa-basket-shopping"></i>
            <span class="app-cart-count ${cartCount === 0 ? "is-hidden" : ""}">${cartCount}</span>
          </span>
        </div>
      </div>
 
      <nav class="app-catnav" aria-label="main navigation">
        <div class="container app-catnav-inner">
          ${LINKS.map(
            (link) => `
              <a class="app-catlink" href="${link.href}">
                <span class="app-catlink-icon is-${link.color}"><i class="fas ${link.icon}"></i></span>
                <span>${t(`nav.${link.key}`)}</span>
              </a>
            `,
          ).join("")}
        </div>
      </nav>
    </header>
  `;
}

export function initNavbar() {
  const languageToggle = document.getElementById("langToggle");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const links = document.querySelectorAll(".app-catlink");

  function markActive() {
    const hash = window.location.hash || "#/home";
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === hash);
    });
  }

  markActive();
  window.addEventListener("hashchange", markActive);

  languageToggle?.addEventListener("click", (event) => {
    event.preventDefault();
    toggleLanguage();
    window.location.reload();
  });

  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    setQuery(searchInput.value);

    if (window.location.hash === "#/search") {
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    } else {
      window.location.hash = "#/search";
    }
  });
}

export function mountNavbar(root) {
  if (!root) return;
  root.innerHTML = renderNavbar();
  initNavbar();
}
