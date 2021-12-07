"use script";

const body = document.querySelector("body");



const toggleBtn = document.querySelector(".header-toggle__con-btn");



toggleBtn.addEventListener("click", function (e) {
  if (e.target.checked) body.classList.add("dark");
  else body.classList.remove("dark");
});

let lightTheme = {};
