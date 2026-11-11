import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderCatsPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    id: "cats",
    title: "Cats",
    content: `
      <p>Welcome to the Cats page.</p>
    `,
  });
}
