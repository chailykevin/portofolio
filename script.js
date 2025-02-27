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
  if (activeness) {
    hamburgerLogo.classList.add("active");
    navbar.style.display = "block";
  } else {
    hamburgerLogo.classList.remove("active");
    navbar.style.display = "none";
  }
}
