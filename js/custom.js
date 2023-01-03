/** INSERT CUSTOM JS HERE **/
const hamburger = document.querySelector(".nav__hamburger");
const nav = document.querySelector(".nav");
const bg = document.querySelector(".bg__blur");

export default function () {
  hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    bg.classList.toggle("active");
  });

  bg.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    bg.classList.toggle("active");
  });
}
