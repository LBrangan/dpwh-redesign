document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle.querySelector(".theme-icon");

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
  };

  const initializeTheme = () => {
    const savedTheme =
      localStorage.getItem("theme") ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
  };

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (!localStorage.getItem("theme")) {
        setTheme(event.matches ? "dark" : "light");
      }
    });

  initializeTheme();
  setTimeout(() => {
    document.documentElement.classList.add("transition-enabled");
  }, 10);

  const carousel = document.querySelector("#projCarousel");
  const toggleButton = document.querySelector("#carouselToggle");
  let isPaused = false;

  toggleButton.addEventListener("click", () => {
    const carouselInstance =
      bootstrap.Carousel.getInstance(carousel) ||
      new bootstrap.Carousel(carousel);

    if (isPaused) {
      carouselInstance.cycle();
      toggleButton.innerHTML = "⏸ Pause";
      toggleButton.setAttribute("aria-pressed", "false");
      toggleButton.setAttribute("aria-label", "Pause carousel");
    } else {
      carouselInstance.pause();
      toggleButton.innerHTML = "▶️ Play";
      toggleButton.setAttribute("aria-pressed", "true");
      toggleButton.setAttribute("aria-label", "Play carousel");
    }

    isPaused = !isPaused;
  });

  window.addEventListener("scroll", function () {
    const btn = document.getElementById("backToTopBtn");
    if (window.scrollY > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  document
    .getElementById("backToTopBtn")
    .addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
