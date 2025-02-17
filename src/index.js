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
const rePassError = document.querySelector("#re-password + span");

submit.addEventListener("click", () => {
  if (
    !email.validity.valid ||
    !password.validity.valid ||
    !rePassword.validity.valid
  ) {
    if (!email.validity.valid) {
      showEmailError();
    }
    if (!password.validity.valid) {
      showPassError();
    }
    if (!rePassword.validity.valid) {
      showRePassError();
    }
    return;
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
  console.log(password.value);
  if (password.validity.valid) {
    passError.textContent = "";
    passError.classList.remove("active");
  } else {
    showPassError();
  }
  rePassword.setAttribute("pattern", password.value);
});
function showPassError() {
  if (password.validity.valueMissing) {
    passError.textContent = "Required field";
  } else if (password.validity.tooShort) {
    passError.textContent = "Must be at least 8 characters long.";
  } else if (password.validity.patternMismatch) {
    passError.textContent =
      "Must contain at least one number, one uppercase and one lowercase letter.";
  }
  passError.classList.add("active");
}

rePassword.addEventListener("input", () => {
  if (rePassword.validity.valid) {
    rePassError.textContent = "";
    rePassError.classList.remove("active");
  } else {
    showRePassError();
  }
});
function showRePassError() {
  if (rePassword.validity.valueMissing) {
    rePassError.textContent = "Required field.";
  } else if (rePassword.validity.patternMismatch) {
    rePassError.textContent = "Passwords do not match.";
  }
  rePassError.classList.add("active");
}
