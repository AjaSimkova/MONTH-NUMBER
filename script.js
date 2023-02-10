const buttonJanuary = document.querySelector(".january");
const buttonFebuary = document.querySelector(".february");
const buttonMarch = document.querySelector(".march");
const buttonApril = document.querySelector(".april");
const buttonJune = document.querySelector(".june");
const buttonJuly = document.querySelector(".july");
const buttonAugust = document.querySelector(".august");
const buttonSeptember = document.querySelector(".september");
const buttonOctober = document.querySelector(".october");
const buttonNovember = document.querySelector(".november");
const buttonDecember = document.querySelector(".december");
const buttonMay = document.querySelector(".may");

const mayMonth = document.getElementById("may-month");
let januaryMonth = document.getElementById("january-month");
let febuaryMonth = document.getElementById("february-month");
const marchMonth = document.getElementById("march-month");
const aprilMonth = document.getElementById("april-month");
const juneMonth = document.getElementById("june-month");
const julyMonth = document.getElementById("july-month");
const augustMonth = document.getElementById("august-month");
const septemberMonth = document.getElementById("september-month");
const novemberMonth = document.getElementById("november-month");
const decemberMonth = document.getElementById("december-month");
const octoberMonth = document.getElementById("october-1");

const reset = document.querySelector(".reset");

buttonFebuary.addEventListener("click", function () {
  febuaryMonth.textContent = "28 days";
});

buttonJanuary.addEventListener("click", function () {
  januaryMonth.textContent = "31 days";
});

buttonMarch.addEventListener("click", function () {
  marchMonth.textContent = "31 days";
});
buttonApril.addEventListener("click", function () {
  aprilMonth.textContent = "30 days";
});
buttonMarch.addEventListener("click", function () {
  marchMonth.textContent = "31 days";
});
buttonJune.addEventListener("click", function () {
  juneMonth.textContent = "30 days";
});
buttonJuly.addEventListener("click", function () {
  julyMonth.textContent = "31 days";
});
buttonAugust.addEventListener("click", function () {
  augustMonth.textContent = "31 days";
});
buttonSeptember.addEventListener("click", function () {
  septemberMonth.textContent = "30 days";
});
buttonOctober.addEventListener("click", function () {
  octoberMonth.textContent = "30 days";
});
buttonNovember.addEventListener("click", function () {
  novemberMonth.textContent = "32 days";
});
buttonDecember.addEventListener("click", function () {
  decemberMonth.textContent = "31days";
});

buttonMay.addEventListener("click", function () {
  mayMonth.textContent = "31 days";
});

reset.addEventListener("click", function () {
  januaryMonth.textContent = "";
  febuaryMonth.textContent = "";
  marchMonth.textContent = "";
  aprilMonth.textContent = "";
  mayMonth.textContent = "";
  juneMonth.textContent = "";
  julyMonth.textContent = "";
  augustMonth.textContent = "";
  septemberMonth.textContent = "";
  octoberMonth.textContent = "";
  novemberMonth.textContent = "";
  decemberMonth.textContent = "";
});
