"use strict";
let navbarDark = false;
// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (!navbarDark && window.scrollY > navbarHeight / 2) {
    navbarDark = true;
    navbar.classList.add("navbar--dark");
  } else if (navbarDark && window.scrollY < navbarHeight / 2) {
    navbarDark = false;
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link != null) {
    // console.log(link);
    scrollIntoView(link);
  }
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Handle click on "contact me" button on home
const contactMeButton = document.querySelector(".home__contact");
contactMeButton.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Make home slowly fade to transparent as the window scrolls down

// Show "arrow up" button when scrolling down

// Handle click on the "arrow up" button

// Projects

// Remove selection from the previous item and select the new one

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
