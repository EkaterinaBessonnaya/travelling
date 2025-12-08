const button = document.querySelector(".card-trip__favourite");
const tripStatus = document.querySelector(".status-trip");
const menu = document.querySelector(".header__list");
const burger = document.querySelector(".header__burger");

document.addEventListener("DOMContentLoaded", () => {
  sliderInit();
});

if (button) {
  button.addEventListener("click", () => {
    tripStatus.classList.toggle("visible");
  });
}

if (burger) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("header__list--open");
    burger.classList.toggle("active");
  });
}

function sliderInit() {
  const testimonialSlider = new Swiper(".testimonial-slider", {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    speed: 800,

    // If we need pagination
    pagination: {
      el: ".testimonial-slider__pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".testimonial-slider__button-next",
      prevEl: ".testimonial-slider__button-prev",
    },
  });
}
