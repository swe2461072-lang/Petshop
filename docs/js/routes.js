import { renderHomePage } from "./pages/homePage.js";
import { renderDogsPage } from "./pages/dogsPage.js";
import { renderCatsPage } from "./pages/catsPage.js";
import { renderReptilesPage } from "./pages/reptilesPage.js";
import { renderBrandsPage } from "./pages/brandsPage.js";
import { renderDealsPage } from "./pages/dealsPage.js";
import { renderCartPage } from "./pages/cartPage.js";
import { renderSearchPage } from "./pages/searchPage.js";
import { renderContactPage } from "./pages/contactPage.js";
import { renderNotFoundPage } from "./pages/notFoundPage.js";

export const routes = {
  "#/home": renderHomePage,
  "#/dogs": renderDogsPage,
  "#/cats": renderCatsPage,
  "#/reptiles": renderReptilesPage,
  "#/brands": renderBrandsPage,
  "#/deals": renderDealsPage,
  "#/cart": renderCartPage,
  "#/search": renderSearchPage,
  "#/contact": renderContactPage,
  "#/404": renderNotFoundPage,
};
