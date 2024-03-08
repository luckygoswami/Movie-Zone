"use strict";

// add event on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
  for (const elem of elements) {
    elem.addEventListener(eventType, callback);
  }
};

// toggle search box in small screen
const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", () => {
  searchBox.classList.toggle("active");
});

// store movieId to local storage
function getMovieDetail(movieId) {
  window.localStorage.setItem("movieId", String(movieId));
}
