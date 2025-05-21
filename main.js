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

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    const isClickInside =
      navbarMenu.contains(e.target) || navbarToggler.contains(e.target);
    if (!isClickInside && !navbarMenu.classList.contains("hidden")) {
      navbarMenu.classList.add("hidden");
      navbarToggler.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu when clicking on a link
  const navLinks = navbarMenu.getElementsByTagName("a");
  Array.from(navLinks).forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        // md breakpoint
        navbarMenu.classList.add("hidden");
        navbarToggler.setAttribute("aria-expanded", "false");
      }
    });
  });
});
