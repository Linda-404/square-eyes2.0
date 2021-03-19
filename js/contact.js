const form = document.querySelector("form");
const fullName = document.querySelector("#fullname");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const feedback = document.querySelector(".feedback");
const button = document.querySelector("button");

function checkIfButtonDisabled() {
    if (checkLength(fullName.value, 1) && checkLength(subject.value, 1) && checkLength(message.value, 1) && checkLength(message.value, 1) && validateEmail(email.value)) {
        button.disabled = false;
    }
    else {
        feedback.innerHTML = "";
        button.disabled = true;
    }
}

fullName.addEventListener("keyup", checkIfButtonDisabled);
email.addEventListener("keyup", checkIfButtonDisabled);
subject.addEventListener("keyup", checkIfButtonDisabled);
message.addEventListener("keyup", checkIfButtonDisabled);

function submitForm(event) {
    event.preventDefault();
    feedback.innerHTML = '<div class="feedback">Your message has been sent!</div>';
    form.reset();
}

form.addEventListener("submit", submitForm);

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}