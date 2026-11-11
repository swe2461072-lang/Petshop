export function renderNavbar() {
  return `
        <header class="app-sticky app-shadow">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item has-text-weight-bold is-uppercase app-logo" href="#/home">
                <figure class="image"><img src="./img/icon/icon.jpg" alt="logo" /></figure>
                <p><span>Paw</span> World Pet Shop</p>
                </a>
                <a class="navbar-burger" role="button" aria-expanded="false" data-target="topNavbar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu has-text-weight-semibold has-text-centered" id="topNavbar">
                <div class="navbar-start app-top-navbar-right">
                <a class="navbar-item" href="#/home">
                    <span class="icon has-text-warning">
                    <i class="fas fa-house"></i>
                    </span>
                    <span>Home</span>
                </a>
                <a class="navbar-item" href="#/dogs">
                    <span class="icon has-text-primary">
                    <i class="fas fa-dog"></i>
                    </span>
                    <span>Dogs</span>
                </a>
                <a class="navbar-item" href="#/cats">
                    <span class="icon has-text-link">
                    <i class="fas fa-cat"></i>
                    </span>
                    <span>Cats</span>
                </a>
                <a class="navbar-item" href="#/reptiles">
                    <span class="icon has-text-info">
                    <i class="fas fa-dragon"></i>
                    </span>
                    <span>Reptiles</span>
                </a>
                <a class="navbar-item" href="#/contact">
                    <span class="icon has-text-danger">
                    <i class="fas fa-address-card"></i>
                    </span>
                    <span>Contact us</span>
                </a>
                </div>

                <div class="navbar-end">
                <a class="navbar-item" href="#">MN</a>
                </div>
            </div>
            </div>
        </nav>
        </header>
    `;
}

export function initNavbar() {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.getElementById("topNavbar");

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");

    const isExpanded = burger.classList.contains("is-active");
    burger.setAttribute("aria-expanded", String(isExpanded));
  });
}
