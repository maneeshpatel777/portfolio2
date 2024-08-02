const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const navLinks = document.querySelectorAll("#nav-section a");
const body = document.body;

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  body.classList.toggle("blur");
  body.classList.toggle("no-scroll");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
    body.classList.remove("blur");
    body.classList.remove("no-scroll");
  });
});
