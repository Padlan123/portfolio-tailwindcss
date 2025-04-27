// hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// navbar-fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// di luar hamburger

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// darkmode

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("dark-toggle");
  const htmlElement = document.documentElement;

  // Periksa tema yang disimpan di localStorage saat memuat halaman
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    htmlElement.setAttribute("data-theme", savedTheme);
    toggleButton.checked = savedTheme === "dark";
  }

  // Tambahkan event listener untuk toggle button
  toggleButton.addEventListener("change", () => {
    const newTheme = toggleButton.checked ? "dark" : "light";
    localStorage.setItem("theme", newTheme); // Simpan tema ke localStorage
    htmlElement.setAttribute("data-theme", newTheme); // Terapkan tema ke atribut data-theme
  });
});

// smooth scrolling

const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //  scroll other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
