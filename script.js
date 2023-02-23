"use strict";

const spinner = document.querySelector(".triple-spinner");
const overlay = document.querySelector(".overlay");

setTimeout(() => {
  overlay.style.opacity = "0";
  spinner.style.opacity = "0";
  setTimeout(() => {
    spinner.remove();
    overlay.remove();
  }, 300);
}, 3000);
