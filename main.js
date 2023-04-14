// GET NECESSARY ELEMENTS
const inputs = document.querySelectorAll(".input");
const myForm = document.querySelector(".form");
const myName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

// EVENT LİSTENERS
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(myName.value);
});

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// NECESSARY FUNCTİONS /TOOLS
