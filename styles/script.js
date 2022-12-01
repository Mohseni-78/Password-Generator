const passLen = document.querySelector("#length");
const password = document.querySelector(".password");
const form = document.querySelector(".form");

const upperCaseCheckBox = document.querySelector("#uppercase");
const lowerCaseCheckBox = document.querySelector("#lowercase");
const numberCheckBox = document.querySelector("#numbers");
const symbolCheckBox = document.querySelector("#symbol");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+=|";

function getUpperCase() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}
function getLowerCase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
function getNumber() {
  return number[Math.floor(Math.random() * number.length)];
}
function getSymbol() {
  return symbol[Math.floor(Math.random() * symbol.length)];
}

function generatePassword(e) {
  e.preventDefault();
  let pass = "";
  for (let i = 0; i < passLen.value; i++) {
    const x = generateX();
    console.log(x);
    pass += x;
  }
  password.value = pass;
  navigator.clipboard.writeText(pass);
  Toastify({
    text: "کپی شد",
    duration: 3000,
    gravity: "top",
    position: "left",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {},
  }).showToast();
}

function generateX() {
  const xs = [];
  if (upperCaseCheckBox.checked) {
    xs.push(getUpperCase());
  }
  if (lowerCaseCheckBox.checked) {
    xs.push(getLowerCase());
  }
  if (numberCheckBox.checked) {
    xs.push(getNumber());
  }
  if (symbolCheckBox.checked) {
    xs.push(getSymbol());
  }
  if (xs.length === 0) return "";
  return xs[Math.floor(Math.random() * xs.length)];
}

form.addEventListener("submit", generatePassword);
