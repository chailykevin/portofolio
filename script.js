const navbar = document.getElementById("hamburger-nav");
const hamburgerLogo = document.getElementById("hamburger");

function setActive() {
  if (hamburgerLogo.classList.contains("active")) {
    toggleNavbar(false, hamburgerLogo);
  } else {
    toggleNavbar(true, hamburgerLogo);
  }
}

function toggleNavbar(activeness) {
  hamburgerLogo.classList.toggle("active");
  if (activeness) {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
}

window.addEventListener("click", function (e) {
  offNav(e);
});

window.addEventListener("resize", function(e) {
  offNav(e);
})

function offNav(e) {
  if (e.target != hamburgerLogo && e.target != navbar) {
    navbar.style.display = "none";
    hamburgerLogo.classList.remove("active");
  }
}