var buttonBurger = document.querySelector(".navigation__menu-open");
var menuContacts = document.querySelector(".navigation--contacts");
var menuLinks = document.querySelector(".navigation__menu-links");
var logo = document.querySelector(".navigation__logo");
var pageHeader = document.querySelector(".page-header");
var closeMenu = document.querySelector(".navigation__menu-close");
var searchInput = document.querySelector("form.popup__search-form input[name=search]");
var searchClose = document.querySelector(".popup__search-close");
var popupSearch = document.querySelector(".popup__search");
var popupOverlay = document.querySelector(".popup__overlay");
var htmlDoc = document.querySelector("html");
var searchButton = document.querySelector(".navigation__search-open");

var openMenu = function () {
  menuContacts.classList.add("navigation--contacts--show");
  menuLinks.classList.add("navigation__menu-links--show");
  logo.classList.add("navigation__logo--hide");
  pageHeader.classList.add("page-header--show");
  closeMenu.classList.add("navigation__menu-close--show");
  buttonBurger.classList.add("navigation__menu-open--hide");
  searchButton.classList.add("navigation__search-open--hide");
  htmlDoc.classList.add("disable-scroll");
}

buttonBurger.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popupSearch.classList.contains("popup__search--show") && popupOverlay.classList.contains("popup__overlay--show")) {
    popupSearch.classList.remove("popup__search--show");
    popupOverlay.classList.remove("popup__overlay--show");
    searchButton.classList.remove("navigation__search-open--hide");
    openMenu();
  } else {
    openMenu();
  };
});

closeMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuContacts.classList.remove("navigation--contacts--show");
  menuLinks.classList.remove("navigation__menu-links--show");
  logo.classList.remove("navigation__logo--hide");
  pageHeader.classList.remove("page-header--show");
  closeMenu.classList.remove("navigation__menu-close--show");
  buttonBurger.classList.remove("navigation__menu-open--hide");
  searchButton.classList.remove("navigation__search-open--hide");
  htmlDoc.classList.toggle("disable-scroll");
});

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSearch.classList.add("popup__search--show");
  popupOverlay.classList.add("popup__overlay--show");
  htmlDoc.classList.add("disable-scroll");
  searchInput.focus();
  searchButton.classList.add("navigation__search-open--hide");
});

searchClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSearch.classList.remove("popup__search--show");
  popupOverlay.classList.remove("popup__overlay--show");
  htmlDoc.classList.toggle("disable-scroll");
  searchButton.classList.remove("navigation__search-open--hide");
})

document.onclick = function (evt) {
  if (evt.target.className.toString().includes("overlay")) {
    popupOverlay.classList.remove("popup__overlay--show");
    htmlDoc.classList.remove("disable-scroll");
    searchButton.classList.remove("navigation__search-open--hide");
  };
};

//////////////Initialize Swiper Intro///////////////////
var swiper = new Swiper(".swiper-container.swiper-container--intro", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,
  keyboard: true,
});

//////////////Initialize Swiper Stores//////////////////
//Инициализация свайпер-слайдера Магазины на мобиле
var swiper2 = Swiper;
var swiperExist = false;

/* Which media query
**************************************************************/
function swiperMode() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)"); // было max-width: 768px
  let tablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)"); // было (min-width: 769px) and (max-width: 1024px)
  let desktop = window.matchMedia("(min-width: 1024px)"); // было (min-width: 1025px)

  // Enable (for mobile)
  if(mobile.matches) {
    if (!swiperExist) {
      swiperExist = true;
      swiper2 = new Swiper(".swiper-container.swiper-container--stores", {
        slidesPerView: "auto", //1.9,//window.innerWidth*3.1/568 + 5 - 3.1*768/568,//1.9,
      });
    }
  }
  // Disable (for tablet)
  else if(tablet.matches) {
    if (swiperExist) {
      swiper2.destroy();
      swiperExist = false;
    }
  }
  // Disable (for desktop)
  else if(desktop.matches) {
    if (swiperExist) {
      swiper2.destroy();
      swiperExist = false;
    }
  }
}

/* On Load
**************************************************************/
window.addEventListener("load", function() {
  swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener("resize", function() {
  swiperMode();
});
