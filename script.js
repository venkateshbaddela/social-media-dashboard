"use script";

const body = document.querySelector("body");

const headerBg = document.querySelector("header");

const headerText = document.querySelector(".header-content__txt");

const secTopHeading = document.querySelector(".header-content__heading");

const secBotheading = document.querySelector(".sec-bot__heading");

const toggleBtn = document.querySelector(".header-toggle__con-btn");

const topGridItems = document.querySelectorAll(".sec-box");

const botGridItems = document.querySelectorAll(".sec-con");

const followers = document.querySelectorAll(".sec-box__follow-num");

const days = document.querySelectorAll(".sec-con__bot-txt");

const numChange = [...followers, ...days];

const allGridItems = [...topGridItems, ...botGridItems];

toggleBtn.addEventListener("click", function (e) {
  if (e.target.checked) body.classList.add("dark");
  else body.classList.remove("dark");
});

let lightTheme = {};
