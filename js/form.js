const signUp = document.querySelector(".signupform");
const logIn = document.querySelector(".loginform");

const firstName = document.querySelector("#firstname");
const firstNameError = document.querySelector("#firstname_error");
const lastName = document.querySelector("#lastname");
const lastNameError = document.querySelector("#lastname_error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email_error");
// const password = document.querySelector("#password");
// const passwordError = document.querySelector("#password_error");
// const passwordConfirm = document.querySelector("#password_confirm");
// const passwordConfirmError = document.querySelector("#password_error2");



function validateFirstName(event) {
    event.preventDefault();
    if (checkLength(firstName.value, 1) === true) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }
    // if (checkLength(lastName.value, 1) === true) {
    //     lastNameError.style.display = "none";
    // }
    // else {
    //     lastNameError.style.display = "block";
    // }
    // if (validateEmail(email.value) === true) {
    //     emailError.style.display = "none";
    // }
    // else {
    //     emailError.style.display = "block";
    // }
}

function validateLastName(event) {
    event.preventDefault();
    if (checkLength(lastName.value, 1) === true) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }
}
function validateEmailField(event) {
    event.preventDefault();
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
}
// function validateForm4(event) {
//     event.preventDefault();
//     if (checkLength(password.value) === true) {
//         passwordError.style.display = "none";
//     }
//     else {
//         passwordError.style.display = "block";
//     }
// }
if (firstName){
    firstName.addEventListener("blur", validateFirstName);
}
if (lastName){
    lastName.addEventListener("blur", validateLastName);
}
if (email){
    email.addEventListener("blur", validateEmailField);
}
// password.addEventListener("submit", validateForm4);

// signUp.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}