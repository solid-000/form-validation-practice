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
const codeError = document.querySelector("#code + span");

submit.addEventListener("click", () => {
  if (
    !email.validity.valid ||
    !password.validity.valid ||
    !rePassword.validity.valid ||
    !code.validity.valid
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
    if (!code.validity.valid) {
      showCodeError();
    }
    return;
  } else {
    alert("success");
  }
});

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.classList.remove("active");
    email.classList.remove("active");
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
  email.classList.add("active");
}

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passError.textContent = "";
    passError.classList.remove("active");
    password.classList.remove("active");
  } else {
    showPassError();
  }
  rePassword.setAttribute("pattern", password.value);
});
function showPassError() {
  if (password.validity.valueMissing) {
    passError.textContent = "Required field";
  } else if (password.validity.patternMismatch) {
    passError.textContent =
      "Must be at least 8 characters long, contain one number, one uppercase and one lowercase letter.";
  }
  passError.classList.add("active");
  password.classList.add("active");
}

rePassword.addEventListener("input", () => {
  if (rePassword.validity.valid) {
    rePassError.textContent = "";
    rePassError.classList.remove("active");
    rePassword.classList.remove("active");
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
  rePassword.classList.add("active");
}

const constraints = {
  ch: [
    "^(CH-)?\\d{4}$",
    "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
  ],
  fr: [
    "^(F-)?\\d{5}$",
    "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
  ],
  de: [
    "^(D-)?\\d{5}$",
    "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
  ],
  nl: [
    "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
    "Dutch postal codes must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
  ],
  np: ["^\\d{5}$", "Nepal postal codes must have exactly 5 digits: e.g. 44600"],
};
code.setAttribute("pattern", constraints[country.value][0]);

country.addEventListener("change", () => {
  let constraint = constraints[country.value][0];
  code.setAttribute("pattern", constraint);
  if (code.validity.patternMismatch) {
    showCodeError();
  }
});

code.addEventListener("input", () => {
  if (code.validity.valid) {
    codeError.textContent = "";
    codeError.classList.remove("active");
    code.classList.remove("active");
  } else {
    showCodeError();
  }
});
function showCodeError() {
  if (code.validity.valueMissing) {
    codeError.textContent = "Required field.";
  } else if (code.validity.patternMismatch) {
    codeError.textContent = constraints[country.value][1];
  }
  code.classList.add("active");
  codeError.classList.add("active");
}
