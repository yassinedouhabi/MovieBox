function updateMobileMenuHeight() {
  let header = document.querySelector("header");
  let mobileMenu = document.querySelector(".mobile-menu");

  const headerHeight = header.offsetHeight;
  mobileMenu.style.height = `calc(100vh - ${headerHeight}px)`;
}

updateMobileMenuHeight();
window.addEventListener("resize", updateMobileMenuHeight);

// Add the event listener to the toggle menu to handle opening and closing
let toggleMenu = document.querySelector(".toggle-menu");
toggleMenu.addEventListener("click", () => {
  let openMenu = document.querySelector(".open-menu");
  let closeMenu = document.querySelector(".close-menu"); // This variable isn't used in the snippet provided

  if (openMenu.classList.contains("hide")) {
    openMenu.classList.remove("hide");
    closeMenu.classList.remove("show");
    closeMenu.classList.add("show");
  } else {
    openMenu.classList.add("hide");
    closeMenu.classList.remove("show");
  }
});
