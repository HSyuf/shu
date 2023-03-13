"use strict";

const btnPre = document.querySelector(".btn-pre");
const btnNext = document.querySelector(".btn-next");
const indexs = document.querySelectorAll(".index");
const progress = document.querySelector(".progress");

let current = 0;

const updateUI = function (current) {
  if (current === 3) btnNext.classList.remove("btn-active");
  if (current === 0) btnPre.classList.remove("btn-active");
  if (current > 0 && current < 3) {
    btnPre.classList.add("btn-active");
    btnNext.classList.add("btn-active");
  }

  progress.style.width = (current / 3) * 100 + "%";
  indexs.forEach((e, i) => {
    if (i <= current) e.classList.add("active");
    else e.classList.remove("active");
  });
  console.log(current);
};

btnNext.addEventListener("click", function (e) {
  e.preventDefault();
  current++;
  if (current > 3) {
    current = 3;
    return;
  }

  updateUI(current);
});

btnPre.addEventListener("click", function (e) {
  e.preventDefault();

  current--;
  if (current < 0) {
    current = 0;
    return;
  }

  updateUI(current);
});
