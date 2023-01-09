const search = document.querySelector(".search");
const searchInput = search.querySelector("input");
const toTopEl = document.querySelector("#to-top");

search.addEventListener("click", () => {
  searchInput.focus();
});

searchInput.addEventListener("focus", () => {
  search.classList.add("focused");
  searchInput.setAttribute("placeholder", "통합검색");
});

searchInput.addEventListener("blur", () => {
  search.classList.remove("focused");
  searchInput.setAttribute("placeholder", "");
});

const badge = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 500) {
      gsap.to(badge, 0.3, {
        opacity: 0,
        display: "none",
      });
      gsap.to("#to-top", 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badge, 0.3, {
        opacity: 1,
        display: "block",
      });

      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

const fade = document.querySelectorAll(".visual .fade-in");

fade.forEach((fade, index) => {
  gsap.to(fade, 0.7, {
    delay: (index + 1) * 0.4,
    opacity: 1,
  });
});

toTopEl.addEventListener("click", () => {
  gsap.to(window, 0.5, {
    scrollTo: 0,
  });
});
