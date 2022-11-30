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
