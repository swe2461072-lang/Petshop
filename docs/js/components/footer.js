import { t } from "../i18n/i18n.js";

export function renderFooter() {
  return `
    <footer class="app-footer">
      <div class="container app-footer-inner">
        <div class="app-footer-brand">
          <a class="app-brand" href="#/home">
            <span class="app-brand-mark"><i class="fas fa-paw"></i></span>
            <span class="app-brand-text"><b>Paw</b> World</span>
          </a>
          <p>${t("footer.text")}</p>
        </div>
 
        <div class="app-footer-links">
          <p class="app-footer-title">${t("footer.shop")}</p>
          <a href="#/dogs">${t("nav.dogs")}</a>
          <a href="#/cats">${t("nav.cats")}</a>
          <a href="#/reptiles">${t("nav.reptiles")}</a>
          <a href="#/brands">${t("nav.brands")}</a>
          <a href="#/deals">${t("nav.deals")}</a>
          <a href="#/contact">${t("nav.contact")}</a>
        </div>
      </div>
      <p class="app-footer-copy">© 2026 Paw World. ${t("footer.rights")}</p>
    </footer>
  `;
}

export function mountFooter(root) {
  if (!root) return;
  root.innerHTML = renderFooter();
}
