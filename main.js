document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.getElementById("navbar-toggler");
  const navbarMenu = document.getElementById("navbar-menu");

  if (!navbarToggler || !navbarMenu) return;

  // Toggle menu on hamburger click (mobile only)
  navbarToggler.addEventListener("click", () => {
    if (window.innerWidth >= 768) return; // Only toggle on mobile
    const expanded = navbarToggler.getAttribute("aria-expanded") === "true";
    navbarToggler.setAttribute("aria-expanded", !expanded);
    navbarMenu.classList.toggle("hidden");
    if (!navbarMenu.classList.contains("hidden")) {
      navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
    } else {
      navbarMenu.style.maxHeight = "0px";
    }
  });

  // Close menu when clicking outside (mobile only)
  document.addEventListener("click", (e) => {
    if (
      window.innerWidth < 768 &&
      !navbarMenu.classList.contains("hidden") &&
      !navbarMenu.contains(e.target) &&
      !navbarToggler.contains(e.target)
    ) {
      navbarMenu.classList.add("hidden");
      navbarMenu.style.maxHeight = "0px";
      navbarToggler.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu when clicking a nav link (mobile only)
  navbarMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        navbarMenu.classList.add("hidden");
        navbarMenu.style.maxHeight = "0px";
        navbarToggler.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Reset menu on resize (desktop/mobile switch)
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navbarMenu.classList.remove("hidden");
      navbarMenu.style.maxHeight = null;
      navbarToggler.setAttribute("aria-expanded", "false");
    } else {
      navbarMenu.classList.add("hidden");
      navbarMenu.style.maxHeight = "0px";
      navbarToggler.setAttribute("aria-expanded", "false");
    }
  });
});
