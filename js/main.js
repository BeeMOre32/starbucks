new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});
const promotion = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = true;

promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotion.classList.add("hide");
  } else {
    promotion.classList.remove("hide");
  }
});

gsap.from(".coffee-bean-col1", {
  x: -200,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});
gsap.from(".coffee-bean-col2", {
  x: 300,
  opacity: 0,
  duration: 1.2,
  delay: 0.5,
});

let textImg1 = document.querySelector(".text-img1");
let textImg2 = document.querySelector(".text-img2");
let favMoreBtn = document.querySelector(".pick-your-fav-more");

let observer = new IntersectionObserver((e) => {
  e.forEach((el) => {
    if (el.isIntersecting) {
      gsap.from(textImg1, {
        x: -200,
        opacity: 1,
        duration: 1,
      });
      gsap.from(textImg2, {
        x: -300,
        opacity: 1,
        duration: 1.2,
      });
      gsap.from(favMoreBtn, {
        opacity: 1,
        duration: 1,
      });
    } else {
      gsap.from(textImg1, {
        x: -200,
        opacity: 0,
        duration: 1,
      });
      gsap.from(textImg2, {
        x: -300,
        opacity: 0,
        duration: 1.2,
      });
      gsap.from(favMoreBtn, {
        opacity: 0,
        duration: 1,
      });
    }
  });
});

const pickYourFav = document.querySelector(".pick-your-fav");

observer.observe(pickYourFav);

const thisYear = document.querySelector("#this-year");
thisYear.textContent = new Date().getFullYear().toString();
