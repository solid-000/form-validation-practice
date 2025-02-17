"use strict";
import "./styles.css";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#re-password");
const country = document.querySelector("#country");
const code = document.querySelector("#code");
const submit = document.querySelector(".submit");

const emailError = document.querySelector("#email + span.error");

function validateEmail() {
  const emailConstraint = new RegExp();
}
