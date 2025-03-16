import { load as home } from "./home.js"
import { load as menu } from "./menu.js"

const btnHome = document.querySelector(".btn.nav-home");
const btnMenu = document.querySelector(".btn.nav-menu");
const btnContactUs = document.querySelector(".btn.nav-contactUs");
const content = document.querySelector("div#content");

btnHome.addEventListener("click", loadHome);
btnMenu.addEventListener("click", loadMenu);

function clearContent() {
    content.innerHTML = "";
}

function loadHome() {
    clearContent();
    home();
}

function loadMenu() {
    clearContent();
    menu();
}

// Call home page load
home();
// menu();
console.log("Hello world!");