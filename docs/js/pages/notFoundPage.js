import { t } from "../i18n/i18n.js";
import { renderBanner } from "../components/banner.js";

export function renderNotFoundPage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    ${renderBanner({
      color: "pink",
      icon: "fa-paw",
      title: t("notFound.title"),
      text: t("notFound.text"),
    })}
 
    <section class="app-section has-text-centered">
      <a class="app-btn is-coral" href="#/home">${t("notFound.back")}</a>
    </section>
  `;
}
