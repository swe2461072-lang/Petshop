import { t, getCurrentLanguage } from "../i18n/i18n.js";
import { pets, getProductName, getProductDescription, getProductIcon, getProductImage, getFinalPrice } from "../data/products.js";
import { formatPrice } from "../services/currency.js";

export { formatPrice };

export function renderProductCard(product) {
  const pet = pets[product.pet];
  const language = getCurrentLanguage();
  const name = getProductName(product, language);

  const price = product.sale
    ? `<span class="app-price">${formatPrice(getFinalPrice(product))}</span>
       <span class="app-price-old">${formatPrice(product.usd)}</span>`
    : `<span class="app-price">${formatPrice(product.usd)}</span>`;

  return `
    <article class="app-product is-${pet.color}">
      ${product.sale ? `<span class="app-badge">-${product.sale}%</span>` : ""}
      <div class="app-product-art">
        <i class="fas ${getProductIcon(product)}"></i>
        <img class="app-product-img" src="${getProductImage(product)}" alt="${name}" loading="lazy" onerror="this.remove()" />
      </div>
      <p class="app-product-tag">${t(`category.subs.${product.sub}`)}</p>
      <h3 class="app-product-name">${name}</h3>
      <p class="app-product-brand">${product.brand}</p>
      <p class="app-product-desc">${getProductDescription(product, language)}</p>
      <div class="app-product-foot">
        <div class="app-prices">${price}</div>
        <button class="app-add" type="button" data-add="${product.id}" aria-label="${t("common.add")}">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </article>
  `;
}
