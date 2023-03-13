"use strict";

const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

const cardActiveRemove = function () {
  cards.forEach((e) => e.classList.remove("card-active"));
};

cardContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("card")) {
    cardActiveRemove();
    e.target.classList.add("card-active");
  }
});
