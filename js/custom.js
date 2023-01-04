/** INSERT CUSTOM JS HERE **/
const hamburger = document.querySelector(".nav__hamburger");
const nav = document.querySelector(".nav");
const bg = document.querySelector(".bg__blur");
const playBtn = document.querySelector(".hero__button");
const popUp = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");

const b = document.body;
const html = document.documentElement;

export default function () {
  //handling opening and closing mobile menu navigation
  hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    bg.classList.toggle("active");

    html.style.overflowY =
      html.style.overflowY === "hidden" ? "visible" : "hidden";
    b.style.overflowY = b.style.overflowY === "hidden" ? "visible" : "hidden";
  });

  bg.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    bg.classList.toggle("active");
  });

  //handling opening and closing popup
  playBtn.addEventListener("click", () => {
    popUp.classList.add("active");

    html.style.overflowY =
      html.style.overflowY === "hidden" ? "visible" : "hidden";
    b.style.overflowY = b.style.overflowY === "hidden" ? "visible" : "hidden";
  });

  closeBtn.addEventListener("click", () => {
    popUp.classList.remove("active");

    html.style.overflowY =
      html.style.overflowY === "hidden" ? "visible" : "hidden";
    b.style.overflowY = b.style.overflowY === "hidden" ? "visible" : "hidden";
  });
}
