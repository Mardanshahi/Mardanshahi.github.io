const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("nav-toggle");
const closeBtn = document.getElementById("nav-close");
const navOverlay = document.getElementById("nav-overlay");

function openNav() {
  navMenu.classList.add("show");
  navOverlay.classList.add("show");
  document.body.classList.add("nav-open");
  toggleMenu.setAttribute("aria-expanded", "true");
}

function closeNav() {
  navMenu.classList.remove("show");
  navOverlay.classList.remove("show");
  document.body.classList.remove("nav-open");
  toggleMenu.setAttribute("aria-expanded", "false");
}

toggleMenu.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
navOverlay.addEventListener("click", closeNav);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNav();
  }
});

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", closeNav);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeNav();
  }
});

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    const sectionId = current.getAttribute("id");
    const link = document.querySelector('.nav__menu a[href="#' + sectionId + '"]');

    if (!link) {
      return;
    }

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollActive);
scrollActive();
