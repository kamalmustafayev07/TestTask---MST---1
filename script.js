window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


/*Burger MENU*/

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".universal_nav");
  const overlay = document.querySelector(".menu-overlay");

  function toggleMenu() {
    nav.classList.toggle("active");
    burger.classList.toggle("open");
    overlay.classList.toggle("active");
  }

  burger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
});
