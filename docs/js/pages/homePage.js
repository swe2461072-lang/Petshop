import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderHomePage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    id: "home",
    title: "Home",
    content: `
            <p>Welcome to the Home page.</p>
            `,
  });
}
