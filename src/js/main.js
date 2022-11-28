// import Swiper from "swiper";
// import "swiper/swiper-bundle.css";

import "normalize.css";

// const gbgbug = new Swiper();
// gbgbug.nygbugb();

const portfolio = document.querySelector(`.portfolio`);
const portfolioCards = portfolio.querySelectorAll(`.project-card`);
let portfolioCardsHidden = [];
const showMoreBtn = portfolio.querySelector("#show-more");

for (let i = 4; i < portfolioCards.length; i++) {
  portfolioCards[i].classList.add("hidden");
  portfolioCardsHidden.push(portfolioCards[i]);
}

showMoreBtn.addEventListener("click", () => {
  if (showMoreBtn.dataset.shown == "false") {
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
