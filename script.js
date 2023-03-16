const respondAll = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dots = document.querySelector(".dots");
const slideNum = slideAll.length;
let curSlide = 0;
const slideChange = function (s) {
  slideAll.forEach(
    (el, i) => (el.style.transform = `translateX(${100 * (i + s)}%)`)
  );
};

const dotCreate = function () {
  slideAll.forEach(function (_, i) {
    dots.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const dotActive = function (slide) {
  const dot = document.querySelectorAll(".dots__dot");
  dot.forEach((el) => el.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const nextSlide = function () {
  curSlide = (curSlide + 1) % slideNum;
  slideChange(-curSlide);
  dotActive(curSlide);
};

const preSlide = function () {
  curSlide = (curSlide - 1 + slideNum) % slideNum;
  slideChange(-curSlide);
  dotActive(curSlide);
};

const init = function () {
  slideChange(0);
  dotCreate();
  dotActive(0);
};

init();
// console.log(dots);
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", preSlide);
document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") preSlide();
});
