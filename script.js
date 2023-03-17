const nav = document.querySelector(".nav-changer");
const header = document.querySelector(".header");
const headerAbove = document.querySelector(".header-above");
const btnShow = document.querySelector(".icon-show");
const btnClose = document.querySelector(".btn-close");
const appointBox = document.querySelector(".appoint-box");

// ********************************
// part sticky nav
// *********************************

const navObserver = new IntersectionObserver(
  function (entries) {
    const [ent] = entries;
    console.log(ent);

    if (ent.isIntersecting === false) {
      nav.classList.add("sticky");
      header.classList.add("header-fix");
    }

    if (ent.isIntersecting === true) {
      nav.classList.remove("sticky");
      header.classList.remove("header-fix");
    }
  },
  {
    root: null,
    threshold: 0.99,
  }
);

navObserver.observe(header);

console.log(btnClose);
btnShow.addEventListener("click", function (e) {
  e.preventDefault();

  header.classList.add("header-change");
  appointBox.classList.add("appoint-box-show");
  btnClose.classList.remove("hidden");
  headerAbove.classList.remove("hidden");
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  btnClose.classList.add("hidden");
  headerAbove.classList.add("hidden");
  appointBox.classList.remove("appoint-box-show");
  header.classList.remove("header-change");
});
