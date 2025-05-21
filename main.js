document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.getElementById("navbar-toggler");
  const navbarMenu = document.getElementById("navbar-menu");

  if (!navbarToggler || !navbarMenu) {
    console.error("Navigation elements not found");
    return;
  }

  navbarToggler.addEventListener("click", () => {
    const expanded = navbarToggler.getAttribute("aria-expanded") === "true";
    navbarToggler.setAttribute("aria-expanded", !expanded);
    navbarMenu.classList.toggle("hidden");
  });
});
