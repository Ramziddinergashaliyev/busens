let menu = document.querySelector(".header__hamburger");
let navBar = document.querySelector(".header__list");

menu.addEventListener("click",function () {
  navBar.classList.toggle("header__show-list")
})


$(".owl-carousel").owlCarousel({
  margin: 4,
  loop: true,
  autoWidth: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
  items: 2,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    1000: {
      items: 1,
      nav: true,
      loop: false,
    },
  },
});
