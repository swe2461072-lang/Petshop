import { t } from "../i18n/i18n.js";
import { pets, products } from "../data/products.js";
import { renderBanner } from "../components/banner.js";
import { renderProductCard } from "../components/productCard.js";

function renderChips(items, group, active) {
  return items
    .map(
      ({ value, label }) => `
        <button class="app-filter ${value === active ? "is-active" : ""}" type="button" data-group="${group}" data-value="${value}">
          ${label}
        </button>
      `,
    )
    .join("");
}

export function renderCategoryPage(petKey) {
  const app = document.getElementById("app");
  const pet = pets[petKey];
  const items = products.filter((product) => product.pet === petKey);
  const petBrands = [...new Set(items.map((product) => product.brand))].sort();

  const state = { sub: "all", brand: "all" };

  app.innerHTML = `
    ${renderBanner({
      color: pet.color,
      icon: pet.icon,
      title: t(`pets.${petKey}.title`),
      text: t(`pets.${petKey}.text`),
      crumb: `${t("common.home")} / ${t(`pets.${petKey}.title`)}`,
    })}
 
    <section class="app-section">
      <div class="container">
        <div class="app-filter-row">
          <span class="app-filter-label">${t("filters.category")}</span>
          <div class="app-filters" id="subFilters"></div>
        </div>
        <div class="app-filter-row">
          <span class="app-filter-label">${t("filters.brand")}</span>
          <div class="app-filters" id="brandFilters"></div>
        </div>
        <p class="app-count" id="productCount"></p>
        <div class="app-grid" id="productGrid"></div>
      </div>
    </section>
  `;

  const subBox = document.getElementById("subFilters");
  const brandBox = document.getElementById("brandFilters");
  const grid = document.getElementById("productGrid");
  const count = document.getElementById("productCount");

  function update() {
    subBox.innerHTML = renderChips(
      [{ value: "all", label: t("category.all") }, ...pet.subs.map((sub) => ({ value: sub, label: t(`category.subs.${sub}`) }))],
      "sub",
      state.sub,
    );
    brandBox.innerHTML = renderChips(
      [{ value: "all", label: t("category.all") }, ...petBrands.map((brand) => ({ value: brand, label: brand }))],
      "brand",
      state.brand,
    );

    const shown = items.filter(
      (product) => (state.sub === "all" || product.sub === state.sub) && (state.brand === "all" || product.brand === state.brand),
    );

    count.textContent = `${shown.length} ${t("filters.count")}`;
    grid.innerHTML = shown.map(renderProductCard).join("");
  }

  function onFilterClick(event) {
    const button = event.target.closest(".app-filter");
    if (!button) return;

    state[button.dataset.group] = button.dataset.value;
    update();
  }

  subBox.addEventListener("click", onFilterClick);
  brandBox.addEventListener("click", onFilterClick);

  update();
}
