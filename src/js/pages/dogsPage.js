import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderDogsPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    id: "dogs",
    title: "Dogs",
    content: `
      <p>Welcome to the Dogs page.</p>
    `,
  });
}
