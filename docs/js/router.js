export function initRouter(routes) {
  function renderRoute() {
    const hash = window.location.hash || "#/home";
    const page = routes[hash];

    if (page) {
      page();
    } else {
      const notFound = routes["#/404"];
      if (notFound) {
        notFound();
      }
    }

    window.scrollTo(0, 0);
  }

  window.addEventListener("load", renderRoute);
  window.addEventListener("hashchange", renderRoute);
}
