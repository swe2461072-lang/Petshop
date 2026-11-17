import { t } from "../i18n/i18n.js";
import { pets, products, brands } from "../data/products.js";
import { renderBanner } from "../components/banner.js";
import { renderProductCard } from "../components/productCard.js";

export function renderBrandsPage() {
  const app = document.getElementById("app");
  let selected = brands[0];

  app.innerHTML = `
    ${renderBanner({
      color: "lilac",
      icon: "fa-award",
      title: t("brandsPage.title"),
      text: t("brandsPage.text"),
      crumb: `${t("common.home")} / ${t("brandsPage.title")}`,
    })}
 
    <section class="app-section">
      <div class="container">
        <div class="app-brandcards" id="brandCards"></div>
        <h2 class="app-heading" id="brandTitle"></h2>
        <div class="app-grid" id="brandGrid"></div>
      </div>
    </section>
  `;

  const cards = document.getElementById("brandCards");
  const title = document.getElementById("brandTitle");
  const grid = document.getElementById("brandGrid");

  function update() {
    cards.innerHTML = brands
      .map((brand) => {
        const own = products.filter((product) => product.brand === brand);
        const petKeys = [...new Set(own.map((product) => product.pet))];

        return `
          <button class="app-brandcard ${brand === selected ? "is-active" : ""}" type="button" data-brand="${brand}">
            <span class="app-brandcard-name">${brand}</span>
            <span class="app-brandcard-pets">
              ${petKeys.map((key) => `<i class="fas ${pets[key].icon}"></i>`).join("")}
            </span>
            <span class="app-brandcard-count">${own.length} ${t("brandsPage.products")}</span>
          </button>
        `;
      })
      .join("");

    title.textContent = selected;
    grid.innerHTML = products
      .filter((product) => product.brand === selected)
      .map(renderProductCard)
      .join("");
  }

  cards.addEventListener("click", (event) => {
    const card = event.target.closest("[data-brand]");
    if (!card) return;

    selected = card.dataset.brand;
    update();
  });

  update();
}
