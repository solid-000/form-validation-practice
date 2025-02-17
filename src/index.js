"use strict";
import "./styles.css";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#re-password");
const country = document.querySelector("#country");
const code = document.querySelector("#code");
const submit = document.querySelector(".submit");

const emailError = document.querySelector("#email + span");
const passError = document.querySelector("#password + span");

submit.addEventListener("click", () => {
  if (!email.validity.valid) {
    showEmailError();
  }
});

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.classList.remove("active");
  } else {
    showEmailError();
  }
});
function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Required field.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email address.";
  }
  emailError.classList.add("active");
}

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passError.textContent = "";
    passError.classList.remove("active");
  } else {
    showPassError();
  }
});
function showPassError() {
  if (password.validity.valueMissing) {
    passError.textContent = "Required field";
  } else if (password.validity.tooShort) {
    passError.textContent = "Must be at least 8 characters long.";
  }
  passError.classList.add("active");
}
