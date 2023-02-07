import Swiper, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
// import "swiper/swiper.min.css";
import "normalize.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import Typewriter from "typewriter-effect/dist/core";

window.onload = () => {
  document.querySelector("body").classList.remove("preload");
};

// eslint-disable-next-line no-unused-vars
const educationSwiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 38,
  slidesPerView: "auto",
  slidesOffsetBefore: 102,
  slidesOffsetAfter: 20,
});

if (window.innerWidth <= 1024 && window.innerWidth > 768) {
  educationSwiper.params.slidesOffsetBefore = 46;
  educationSwiper.update();
} else if (window.innerWidth <= 768) {
  educationSwiper.params.slidesOffsetBefore = 29;
  educationSwiper.params.spaceBetween = 11;
  educationSwiper.update();
}

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
} else if (window.innerWidth <= 1024 && window.innerWidth > 768) {
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
} else {
  showMoreBtn.classList.add("hidden");

  // eslint-disable-next-line no-unused-vars
  const swiper2 = new Swiper(".gallery", {
    modules: [Pagination],
    speed: 400,
    spaceBetween: 11,
    wrapperClass: "gallery__inner",
    slideClass: "project-card",
    slidesPerView: "auto",
    slidesOffsetBefore: 29,
    slidesOffsetAfter: 29,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });
}
// };

// skills-table tablet

// function skillsTableToSlides () {

// }

const toolSkills = document.querySelector(".tool-skills");
const markupSkills = document.querySelector(".markup-skills");
const additionalSkills = document.querySelector(".additional-skills");

const toolSkillsList = document.querySelector(".tool-skills ul");
const markupSkillsList = document.querySelector(".markup-skills ul");
const additionalSkillsList = document.querySelector(".additional-skills ul");

const toolSkillsCards = toolSkillsList.querySelectorAll("li");
const markupSkillsCards = markupSkillsList.querySelectorAll("li");
const additionalSkillsCards = additionalSkillsList.querySelectorAll("li");

function transformSkillsToTablet() {
  if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
    if (markupSkillsCards.length > 4) {
      // eslint-disable-next-line no-unused-vars
      const swiperMarkup = new Swiper(".markup-skills", {
        speed: 400,
        spaceBetween: 17,
        wrapperClass: "table-contents",
        slideClass: "markup-skills__slider",
        slidesPerView: "auto",
        slidesOffsetBefore: 45,
        slidesOffsetAfter: 45,
      });
    } else {
      markupSkills.classList.add("no-swiper");
    }

    if (toolSkillsCards.length > 4) {
      // eslint-disable-next-line no-unused-vars
      const swiperTools = new Swiper(".tool-skills", {
        speed: 400,
        spaceBetween: 17,
        wrapperClass: "table-contents",
        slideClass: "tool-skills__slider",
        slidesPerView: "auto",
        slidesOffsetBefore: 45,
        slidesOffsetAfter: 45,
      });
    } else {
      toolSkills.classList.add("no-swiper");
    }

    if (additionalSkillsCards.length > 4) {
      // eslint-disable-next-line no-unused-vars
      const swiperAddSkills = new Swiper(".additional-skills", {
        speed: 400,
        spaceBetween: 17,
        wrapperClass: "table-contents",
        slideClass: "additional-skills__slider",
        slidesPerView: "auto",
        slidesOffsetBefore: 45,
        slidesOffsetAfter: 45,
      });
    } else {
      additionalSkills.classList.add("no-swiper");
    }
  }
}

function transformSkillsToMobile() {
  if (window.innerWidth < 768) {
    if (markupSkillsCards.length > 2) {
      // eslint-disable-next-line no-unused-vars
      const swiperMarkup = new Swiper(".markup-skills", {
        speed: 400,
        spaceBetween: 11,
        wrapperClass: "table-contents",
        slideClass: "markup-skills__slider",
        slidesPerView: "auto",
        slidesOffsetBefore: 29,
        slidesOffsetAfter: 29,
      });
    } else {
      markupSkills.classList.add("no-swiper");
    }

    if (toolSkillsCards.length > 2) {
      // eslint-disable-next-line no-unused-vars
      const swiperTools = new Swiper(".tool-skills", {
        speed: 400,
        spaceBetween: 11,
        wrapperClass: "table-contents",
        slideClass: "tool-skills__slider",
        slidesPerView: "auto",
        slidesOffsetBefore: 29,
        slidesOffsetAfter: 29,
      });
    } else {
      toolSkills.classList.add("no-swiper");
    }

    if (additionalSkillsCards.length > 2) {
      // eslint-disable-next-line no-unused-vars
      const swiperAddSkills = new Swiper(".additional-skills", {
        speed: 400,
        spaceBetween: 11,
        wrapperClass: "table-contents",
        slideClass: "additional-skills__slider",
        slidesPerView: "auto",
        slidesOffsetBefore: 29,
        slidesOffsetAfter: 29,
      });
    } else {
      additionalSkills.classList.add("no-swiper");
    }
  }
}

transformSkillsToTablet();
transformSkillsToMobile();

window.addEventListener("resize", () => {
  transformSkillsToTablet();
  transformSkillsToMobile();
});

// checkbox accessibility
const themeSwitcher = document.querySelector(".theme-switcher");
const switcherLabel = themeSwitcher.querySelector(".theme-switcher__label");
const switcherCheckbox = themeSwitcher.querySelector(
  ".theme-switcher__checkbox"
);

switcherLabel.onkeydown = (event) => {
  if (event.keyCode === 13) {
    switcherLabel.click();
  }
};

// dark theme
const root = document.documentElement;
// checking local storage and if no matching - checking mediaqueries

const storageKey = "theme-preference";
let storagedTheme = null;
// eslint-disable-next-line no-undef
if (localStorage.getItem(storageKey)) {
  // eslint-disable-next-line no-undef
  storagedTheme = localStorage.getItem(storageKey);
}

if (storagedTheme !== null) {
  if (storagedTheme === "dark") {
    root.setAttribute("dark", true);
  } else if (storagedTheme === "light") {
    root.removeAttribute("dark");
  }
} else {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.setAttribute("dark", true);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (root.hasAttribute("dark")) {
    switcherCheckbox.checked = true;
  } else {
    switcherCheckbox.checked = false;
  }

  switcherLabel.addEventListener("click", () => {
    toggleTheme();
    const isDark = root.hasAttribute("dark");
    // eslint-disable-next-line no-undef
    localStorage.setItem("theme-preference", isDark ? "dark" : "light");
  });
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    toggleTheme();
  });

function toggleTheme() {
  switcherLabel.classList.toggle("theme-switcher--dark");
  if (root.hasAttribute("dark")) {
    root.removeAttribute("dark");
  } else {
    root.setAttribute("dark", true);
  }
}

// theme switcher in tab and mobile
function themeSwitcherToMobile() {
  if (window.innerWidth <= 1024) {
    themeSwitcher.remove();
    headerInner.append(themeSwitcher);
  }
}

themeSwitcherToMobile();
window.addEventListener("resize", themeSwitcherToMobile);

// remove transition on load

window.addEventListener("DOMContentLoaded", () => {
  document.body.style.setProperty("--transition", "0.2s");
});
