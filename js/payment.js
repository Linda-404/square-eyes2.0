const paymentCard = document.querySelector(".paymentcard");
const creditCardNumber = document.querySelector("#creditcard_number");
const creditCardNumberError = document.querySelector("#creditcard_error");
const nameCardHolder = document.querySelector("#name_cardholder");
const nameCardHolderError = document.querySelector("#cardholder_error");
const expireDate = document.querySelector("#expire_date");
const expireDateError = document.querySelector("#expire_error");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvv_error");

function validateCardNumber(event) {
    event.preventDefault();
    if (checkLength(creditCardNumber.value, 17) === true) {
        creditCardNumberError.style.display = "none";
    }
    else {
        creditCardNumberError.style.display = "block";
    }
}
function validateCardholder(event) {
    event.preventDefault();
    if (checkLength(nameCardHolder.value, 4) === true) {
        nameCardHolderError.style.display = "none";
    }
    else {
        nameCardHolderError.style.display = "block";
    }
}
function validateCvv(event) {
    event.preventDefault();
    if (checkLength(cvv.value, 3) === true) {
        cvvError.style.display = "none";
    }
    else {
        cvv.style.display = "block";
    }
}
function validateExpireDate(event) {
    event.preventDefault();
    if (checkLength(expireDate.value, 6) === true) {
        expireDateError.style.display = "none";
    }
    else {
        expireDateError.style.display = "block";
    }
}

creditCardNumber.addEventListener("blur", validateCardNumber);
nameCardHolder.addEventListener("blur", validateCardholder);
cvv.addEventListener("blur", validateCvv);
expireDate.addEventListener("blur", validateExpireDate);


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}