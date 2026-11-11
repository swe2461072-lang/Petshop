import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderReptilesPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    id: "reptiles",
    title: "Reptiles",
    content: `
      <p>Welcome to the Reptiles page.</p>
    `,
  });
}
