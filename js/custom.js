/** INSERT CUSTOM JS HERE **/
const hamburger = document.querySelector(".nav__hamburger");
const nav = document.querySelector(".nav");
const bg = document.querySelector(".bg__blur");
const playBtn = document.querySelector(".hero__button");
const popUp = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");

export default function () {
  //handling opening and closing mobile menu navigation
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

  playBtn.addEventListener("click", () => {
    popUp.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    popUp.classList.remove("active");
  });
}
