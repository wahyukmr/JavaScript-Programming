"use strict";

const showModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function showElement() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeElement() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener("click", showElement);

// close with click the close button
btnCloseModal.addEventListener("click", closeElement);

// closing with an outer click of the element
overlay.addEventListener("click", closeElement);

// closing with pressed Escape button
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeElement();
  }
});
