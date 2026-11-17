import { t, getCurrentLanguage } from "../i18n/i18n.js";
import { pets, subIcons, getProductName, getFinalPrice } from "../data/products.js";

export function formatPrice(usd) {
  const language = getCurrentLanguage();

  if (language === "mn") {
    const value = Math.round((usd * 3500) / 100) * 100;
    return `${value.toLocaleString("en-US")}₮`;
  }
  if (language === "ko") {
    const value = Math.round((usd * 1350) / 100) * 100;
    return `₩${value.toLocaleString("en-US")}`;
  }
  return `$${usd.toFixed(2)}`;
}

export function renderProductCard(product) {
  const pet = pets[product.pet];
  const name = getProductName(product, getCurrentLanguage());

  const price = product.sale
    ? `<span class="app-price">${formatPrice(getFinalPrice(product))}</span>
       <span class="app-price-old">${formatPrice(product.usd)}</span>`
    : `<span class="app-price">${formatPrice(product.usd)}</span>`;

  return `
    <article class="app-product is-${pet.color}">
      ${product.sale ? `<span class="app-badge">-${product.sale}%</span>` : ""}
      <div class="app-product-art">
        <i class="fas ${subIcons[product.sub]}"></i>
      </div>
      <p class="app-product-tag">${t(`category.subs.${product.sub}`)}</p>
      <h3 class="app-product-name">${name}</h3>
      <p class="app-product-brand">${product.brand}</p>
      <div class="app-product-foot">
        <div class="app-prices">${price}</div>
        <button class="app-add" type="button" data-add="${product.id}" aria-label="${t("common.add")}">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </article>
  `;
}
