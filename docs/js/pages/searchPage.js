import { t } from "../i18n/i18n.js";
import { getQuery } from "../services/search.js";
import { searchProducts } from "../services/search.js";
import { renderBanner } from "../components/banner.js";
import { renderProductCard } from "../components/productCard.js";

export function renderSearchPage() {
  const app = document.getElementById("app");
  const query = getQuery();
  const results = searchProducts(query);

  app.innerHTML = `
    ${renderBanner({
      color: "butter",
      icon: "fa-magnifying-glass",
      title: t("searchPage.title"),
      text: query ? `“${query}”` : t("searchPage.all"),
    })}
 
    <section class="app-section">
      <div class="container">
        ${
          results.length
            ? `<div class="app-grid">${results.map(renderProductCard).join("")}</div>`
            : `<p class="app-empty"><i class="fas fa-paw"></i> ${t("searchPage.empty")}</p>`
        }
      </div>
    </section>
  `;
}
