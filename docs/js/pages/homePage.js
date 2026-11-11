import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderHomePage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    id: "home",
    title: t("home.title"),
    content: `
      <p>${t("home.welcome")}</p>
    `,
  });
}
