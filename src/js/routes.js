import { renderHomePage } from "./pages/homePage.js";
import { renderDogsPage } from "./pages/dogsPage.js";
import { renderCatsPage } from "./pages/catsPage.js";
import { renderReptilesPage } from "./pages/reptilesPage.js";
import { renderContactPage } from "./pages/contactPage.js";
import { renderNotFoundPage } from "./pages/notFoundPage.js";

export const routes = {
  "#/home": renderHomePage,
  "#/dogs": renderDogsPage,
  "#/cats": renderCatsPage,
  "#/reptiles": renderReptilesPage,
  "#/contact": renderContactPage,
  "#/404": renderNotFoundPage,
};
