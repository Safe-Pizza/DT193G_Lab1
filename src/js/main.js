// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", () => {

  //Eventlyssnare för hamburgermeny
  document.querySelector("#menu-toggle").addEventListener("click", toggleMenu);

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