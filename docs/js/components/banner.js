export function renderBanner({ color = "blue", icon = "fa-paw", title = "", text = "", crumb = "" }) {
  return `
    <section class="app-banner is-${color}">
      <div class="container app-banner-inner">
        <div class="app-banner-icon"><i class="fas ${icon}"></i></div>
        <div>
          ${crumb ? `<p class="app-crumb">${crumb}</p>` : ""}
          <h1 class="app-banner-title">${title}</h1>
          ${text ? `<p class="app-banner-text">${text}</p>` : ""}
        </div>
      </div>
    </section>
  `;
}
