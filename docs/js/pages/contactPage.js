import { t } from "../i18n/i18n.js";
import { renderBanner } from "../components/banner.js";

export function renderContactPage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    ${renderBanner({
      color: "butter",
      icon: "fa-address-card",
      title: t("contact.title"),
      text: t("contact.text"),
      crumb: `${t("common.home")} / ${t("contact.title")}`,
    })}
 
    <section class="app-section">
      <div class="container app-perks">
        <div class="app-perk is-blue">
          <span class="app-perk-icon"><i class="fas fa-location-dot"></i></span>
          <div><b>${t("contact.address")}</b><span>${t("contact.addressText")}</span></div>
        </div>
        <div class="app-perk is-pink">
          <span class="app-perk-icon"><i class="fas fa-phone"></i></span>
          <div><b>${t("contact.phone")}</b><span>+976 9906 6987</span></div>
        </div>
        <div class="app-perk is-mint">
          <span class="app-perk-icon"><i class="fas fa-clock"></i></span>
          <div><b>${t("contact.hours")}</b><span>${t("contact.hoursText")}</span></div>
        </div>
      </div>
    </section>
  `;
}
