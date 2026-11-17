import { t } from "../i18n/i18n.js";
import { pets, products, brands } from "../data/products.js";
import { renderProductCard } from "../components/productCard.js";

function renderPetCards() {
  return Object.entries(pets)
    .map(
      ([key, pet]) => `
        <a class="app-petcard is-${pet.color}" href="#/${key}">
          <span class="app-petcard-icon"><i class="fas ${pet.icon}"></i></span>
          <span class="app-petcard-title">${t(`pets.${key}.title`)}</span>
          <span class="app-petcard-text">${t(`petCards.${key}`)}</span>
        </a>
      `,
    )
    .join("");
}

export function renderHomePage() {
  const app = document.getElementById("app");
  const popular = products.filter((product) => product.popular);
  const deals = products
    .filter((product) => product.sale > 0)
    .sort((a, b) => b.sale - a.sale)
    .slice(0, 4);

  app.innerHTML = `
    <section class="app-hero">
      <div class="container app-hero-inner">
        <div class="app-hero-copy">
          <span class="app-chip"><i class="fas fa-heart"></i> ${t("hero.badge")}</span>
          <h1 class="app-hero-title">${t("hero.title")}</h1>
          <p class="app-hero-text">${t("hero.text")}</p>
          <div class="app-hero-cta">
            <a class="app-btn is-coral" href="#/dogs">${t("hero.shopDogs")}</a>
            <a class="app-btn is-ghost" href="#/cats">${t("hero.shopCats")}</a>
          </div>
        </div>
 
        <div class="app-hero-art" aria-hidden="true">
          <div class="app-blob is-blue"><i class="fas fa-dog"></i></div>
          <div class="app-blob is-pink"><i class="fas fa-cat"></i></div>
          <div class="app-blob is-mint"><i class="fas fa-dragon"></i></div>
          <i class="fas fa-bone app-deco is-d1"></i>
          <i class="fas fa-heart app-deco is-d2"></i>
          <i class="fas fa-star app-deco is-d3"></i>
        </div>
      </div>
    </section>
 
    <section class="app-section">
      <div class="container">
        <h2 class="app-heading">${t("shopByPet")}</h2>
        <div class="app-petcards">${renderPetCards()}</div>
      </div>
    </section>
 
    <section class="app-section">
      <div class="container">
        <h2 class="app-heading">${t("popular")}</h2>
        <div class="app-grid">${popular.map(renderProductCard).join("")}</div>
      </div>
    </section>
 
    <section class="app-section">
      <div class="container">
        <div class="app-heading-row">
          <h2 class="app-heading">${t("homeSections.deals")}</h2>
          <a class="app-link" href="#/deals">${t("homeSections.viewAll")} <i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="app-grid">${deals.map(renderProductCard).join("")}</div>
      </div>
    </section>
 
    <section class="app-section">
      <div class="container">
        <div class="app-heading-row">
          <h2 class="app-heading">${t("homeSections.brands")}</h2>
          <a class="app-link" href="#/brands">${t("homeSections.viewAll")} <i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="app-brandchips">
          ${brands.map((brand) => `<a class="app-brandchip" href="#/brands">${brand}</a>`).join("")}
        </div>
      </div>
    </section>
 
    <section class="app-section">
      <div class="container app-perks">
        <div class="app-perk is-butter">
          <span class="app-perk-icon"><i class="fas fa-truck-fast"></i></span>
          <div><b>${t("perks.deliveryTitle")}</b><span>${t("perks.deliveryText")}</span></div>
        </div>
        <div class="app-perk is-mint">
          <span class="app-perk-icon"><i class="fas fa-shield-heart"></i></span>
          <div><b>${t("perks.qualityTitle")}</b><span>${t("perks.qualityText")}</span></div>
        </div>
        <div class="app-perk is-pink">
          <span class="app-perk-icon"><i class="fas fa-hand-holding-heart"></i></span>
          <div><b>${t("perks.helpTitle")}</b><span>${t("perks.helpText")}</span></div>
        </div>
      </div>
    </section>
  `;
}
