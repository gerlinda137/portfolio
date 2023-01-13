import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "normalize.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import Typewriter from "typewriter-effect/dist/core";

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 38,
  slidesPerView: "auto",
  // centeredSlides: true,
  // loop: true,
  slidesOffsetBefore: 102,
  slidesOffsetAfter: 20,
});

const portfolio = document.querySelector(`.portfolio`);
const portfolioCards = portfolio.querySelectorAll(`.project-card`);
const portfolioCardsHidden = [];
const showMoreBtn = portfolio.querySelector("#show-more");

function hidePortfolioCards() {
  for (let i = 4; i < portfolioCards.length; i++) {
    portfolioCards[i].classList.add("hidden");
    portfolioCardsHidden.push(portfolioCards[i]);
  }

  showMoreBtn.addEventListener("click", () => {
    if (showMoreBtn.dataset.shown === "false") {
      for (const card of portfolioCardsHidden) {
        card.classList.remove("hidden");
        showMoreBtn.textContent = "Скрыть";
        showMoreBtn.dataset.shown = "true";
      }
    } else {
      for (const card of portfolioCardsHidden) {
        card.classList.add("hidden");
        showMoreBtn.textContent = "Показать больше";
        showMoreBtn.dataset.shown = "false";
        showMoreBtn.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }
  });
}

// tabs

const skillTable = document.querySelector(".skills-table");
const tableTitle = skillTable.querySelector("#table-title");
const tabs = skillTable.querySelectorAll(".tabs__item button");
const tableContent = skillTable.querySelector(".table-content");
const tableContentInners = tableContent.querySelectorAll(
  ".table-content__inner"
);

for (let j = 0; j < tabs.length; j++) {
  const tab = tabs[j];
  tab.onclick = () => {
    tabs.forEach((element) => {
      element.parentNode.classList.remove("active");
    });

    tab.parentNode.classList.add("active");
    const tabId = tab.id;
    const trimmedBtnId = tabId.split("-");
    const btnIdNumber = trimmedBtnId.pop();
    tableTitle.textContent = tab.textContent;

    for (const content of tableContentInners) {
      content.classList.add("visually-hidden");

      if (btnIdNumber === content.id) {
        content.classList.remove("visually-hidden");
      }
    }
  };
}

// burger

const burger = document.querySelector(".burger");
const headerInner = document.querySelector(".main-header__inner");

burger.addEventListener("click", () => {
  headerInner.classList.toggle("open");
});

// reveal
// eslint-disable-next-line no-undef
AOS.init({
  once: true,
});

// typed
// eslint-disable-next-line no-unused-vars
const app = document.getElementById("app");

// eslint-disable-next-line no-undef
const typewriter = new Typewriter(app, {
  cursor: "",
});

typewriter
  .pauseFor(500)
  .typeString("<p>веб-верстка</p>")
  .pauseFor(500)
  .typeString("<p>фронтенд-разработка</p>")
  .start();

// tab

// window.onload = () => {
if (window.innerWidth > 1024) {
  hidePortfolioCards();
} else if (window.innerWidth <= 1024) {
  showMoreBtn.classList.add("hidden");

  // eslint-disable-next-line no-unused-vars
  const swiper2 = new Swiper(".gallery", {
    speed: 400,
    spaceBetween: 18,
    wrapperClass: "gallery__inner",
    slideClass: "project-card",
    slidesPerView: "auto",
    slidesOffsetBefore: 45,
    slidesOffsetAfter: 45,
  });
}
// };

// skills-table tablet

// function skillsTableToSlides () {

// }

if (window.innerWidth <= 1024) {
  // eslint-disable-next-line no-unused-vars
  const swiperMarkup = new Swiper(".markup-skills", {
    speed: 400,
    spaceBetween: 18,
    wrapperClass: "table-contents",
    slideClass: "markup-skills__slider",
    slidesPerView: "auto",
    slidesOffsetBefore: 45,
    slidesOffsetAfter: 45,
  });

  // eslint-disable-next-line no-unused-vars
  const swiperTools = new Swiper(".tool-skills", {
    speed: 400,
    spaceBetween: 18,
    wrapperClass: "table-contents",
    slideClass: "tool-skills__slider",
    slidesPerView: "auto",
    slidesOffsetBefore: 45,
    slidesOffsetAfter: 45,
  });

  // eslint-disable-next-line no-unused-vars
  const swiperAddSkills = new Swiper(".additional-skills", {
    speed: 400,
    spaceBetween: 18,
    wrapperClass: "table-contents",
    slideClass: "additional-skills__slider",
    slidesPerView: "auto",
    slidesOffsetBefore: 45,
    slidesOffsetAfter: 45,
  });
}
