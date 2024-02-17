"use strict";
// SELECTIONS
const popup = document.querySelector(".pop-up");
const subBtn = document.querySelector(".sub-btn");
const okBtn = document.querySelector(".ok-btn");
// EVENT HANDLERS...
subBtn.addEventListener("click", () => popup.classList.add("pop-up-show"));
okBtn.addEventListener("click", () => popup.classList.remove("pop-up-show"));
