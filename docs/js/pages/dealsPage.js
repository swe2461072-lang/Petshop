import { t } from "../i18n/i18n.js";
import { products } from "../data/products.js";
import { renderBanner } from "../components/banner.js";
import { renderProductCard } from "../components/productCard.js";

export function renderDealsPage() {
  const app = document.getElementById("app");
  const deals = products.filter((product) => product.sale > 0).sort((a, b) => b.sale - a.sale);

  app.innerHTML = `
    ${renderBanner({
      color: "coral",
      icon: "fa-percent",
      title: t("dealsPage.title"),
      text: t("dealsPage.text"),
      crumb: `${t("common.home")} / ${t("dealsPage.title")}`,
    })}
 
    <section class="app-section">
      <div class="container">
        <div class="app-grid">${deals.map(renderProductCard).join("")}</div>
      </div>
    </section>
  `;
}
