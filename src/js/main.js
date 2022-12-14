import Swiper from "swiper";
import "swiper/swiper-bundle.css";

import "normalize.css";

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
    }
  }
});

// tabs

const skillTable = document.querySelector(".skills-table");
// const tableTitle = skillTable.querySelector("#table-title");
const tabs = skillTable.querySelectorAll(".tabs__item button");
// const tableContent = skillTable.querySelector(".table-content");
// const tableContents = tableContent.querySelectorAll(".table-contents");

for (let j = 0; j < tabs.length; j++) {
  const tab = tabs[j];
  tab.onclick = () => {
    tabs.forEach((e) => {
      e.parentNode.classList.remove("active");
    });
    tab.parentNode.classList.add("active");
    // const tabId = tab.id;
  };
}

// for (const tab of tabs) {
//   tab.onclick = () => {
//     tabs.forEach((e) => {
//       e.parentNode.classList.remove("active");
//     });
//     tab.parentNode.classList.add("active");
//     const tabId = tab.id;
//   };
// }

// burger

const burger = document.querySelector(".burger");
const headerInner = document.querySelector(".main-header__inner");

burger.addEventListener("click", () => {
  headerInner.classList.toggle("open");
});

// reveal
