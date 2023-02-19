"use strict";
/********* Gallery *************/
const menu = [
  {
    id: 1,
    category: "app",
    img: "./img/portfolio/portfolio-1.jpg",
  },
  {
    id: 2,
    category: "web",
    img: "./img/portfolio/portfolio-2.jpg",
  },
  {
    id: 3,
    category: "app",
    img: "./img/portfolio/portfolio-3.jpg",
  },
  {
    id: 4,
    category: "card",
    img: "./img/portfolio/portfolio-4.jpg",
  },
  {
    id: 5,
    category: "web",
    img: "./img/portfolio/portfolio-5.jpg",
  },
  {
    id: 6,
    category: "app",
    img: "./img/portfolio/portfolio-6.jpg",
  },
  {
    id: 7,
    category: "card",
    img: "./img/portfolio/portfolio-7.jpg",
  },
  {
    id: 8,
    category: "card",
    img: "./img/portfolio/portfolio-8.jpg",
  },
  {
    id: 9,
    category: "web",
    img: "./img/portfolio/portfolio-9.jpg",
  },
];

const sectionCenter = document.querySelector(".section-center");
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  const filterBtn = document.querySelectorAll(".filter-btn");
  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItems) {
        if (menuItems.category === category) {
          return menuItems;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
});
function diplayMenuItems(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} alt="portfolio" class="photo" />
    <div class="item-info">
    </div>
  </article> `;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
/*************************************************************/
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
navToggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
/*********************************************************************/
//*********** Fixed navbar *************************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
//***** smooth scroll ************
const scrollLink = document.querySelectorAll(".scroll-link");
scrollLink.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    const navHeight = navbar.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
/*********************************************************************/
// Questions
const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  const btn = question.querySelector(".question-title");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
/*********************************************************************/
new Swiper(".clients-slider", {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 120,
    },
  },
});
// for validation
const nameInp = document.getElementById("nameInp");
const emailInp = document.getElementById("emailInp");
const subjectInp = document.getElementById("subjectInp");
const messageInp = document.getElementById("messageInp");
const submitBtn = document.getElementById("submit_btn");
submitBtn.addEventListener("click", handleSubmit);
function handleSubmit(e) {
  var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  e.preventDefault();
  if (!nameInp.value || nameInp.value.match(/^[0-9]+$/)) {
    nameInp.classList.add("error");
    setTimeout(() => nameInp.classList.remove("error"), 3000);
  } else {
    nameInp.classList.remove("error");
  }
  if (!emailInp.value.match(pattern)) {
    emailInp.classList.add("error");
    setTimeout(() => emailInp.classList.remove("error"), 3000);
  } else {
    emailInp.classList.remove("error");
  }
  if (!subjectInp.value) {
    subjectInp.classList.add("error");
    setTimeout(() => subjectInp.classList.remove("error"), 3000);
  } else {
    subjectInp.classList.remove("error");
  }
  if (!messageInp.value) {
    messageInp.classList.add("error");
    setTimeout(() => messageInp.classList.remove("error"), 3000);
  } else {
    messageInp.classList.remove("error");
  }
}
