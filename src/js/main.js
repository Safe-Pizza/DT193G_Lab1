// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", () => {
  const navButtonEl = document.querySelector("#menu-toggle");

  //eventlyssnare för hamburgermeny
  if (navButtonEl) {
    navButtonEl.addEventListener("click", toggleMenu);
  }

})

//togglefunktion för hamburgermeny
function toggleMenu() {
  const mainNavEl = document.querySelector("#nav-menu");

  if (mainNavEl.style.display === "block") {
    mainNavEl.style.display = "none";

  } else {
    mainNavEl.style.display = "block";
  }
}