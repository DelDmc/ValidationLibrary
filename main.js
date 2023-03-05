import * as validLib from "https://deldmc.github.io/ValidationLibrary/validationLib.js";

function validateField(inputField, OKStatus, NOKStatus, validationFunc){
        const isValid = validationFunc(inputField.value);
        console.log(isValid);
        console.log(inputField.value);
        changeStatusOneField(OKStatus, NOKStatus, isValid);
    }

function changeStatusOneField (OK, NOK,  condition){
    OK.style.display = condition ? 'flex': 'none';
    NOK.style.display = condition ? 'none': 'flex';
}


const notEmptyField = document.getElementById("empty-field-input");
const notEmptyFieldStatus = {
    OK: document.getElementById("empty-input-ok"),
    NOK:  document.getElementById("empty-input-not-ok")
};
notEmptyField.addEventListener(
    "keyup", function() {
        validateField(
            notEmptyField, 
            notEmptyFieldStatus.OK, 
            notEmptyFieldStatus.NOK, 
            validLib.notEmptyValidation
            );
    }
);
  

const passwordField = document.getElementById("password-input");
const passStatus = {
    OK: document.getElementById("pass-ok"),
    NOK: document.getElementById("pass-not-ok"),
};
passwordField.addEventListener(
    "keyup", function() {
        validateField(
            passwordField, 
            passStatus.OK, 
            passStatus.NOK, 
            validLib.isComplexPassword
            );
    }
);


const phoneNumberField = document.getElementById("phone-number-input");
const phoneNumberStatus = {
    OK: document.getElementById("phone-number-ok"),
    NOK: document.getElementById("phone-number-not-ok"),
};
phoneNumberField.addEventListener(
    "keyup", function() {
        validateField(
            phoneNumberField, 
            phoneNumberStatus.OK, 
            phoneNumberStatus.NOK, 
            validLib.isValidPhoneNumber
            );
    }
);


const emailField = document.getElementById("email-input");
const emailStatus = {
    OK: document.getElementById("email-ok"),
    NOK: document.getElementById("email-not-ok"),
};
emailField.addEventListener(
    "keyup", function() {
        validateField(
            emailField, 
            emailStatus.OK, 
            emailStatus.NOK, 
            validLib.isValidEmail
            );
    }
);


const creditCardField = document.getElementById("credit-card-input");
const creditCardStatus = {
    OK: document.getElementById("credit-card-ok"),
    NOK: document.getElementById("credit-card-not-ok"),
};
creditCardField.addEventListener(
    "keyup", function() {
        validateField(
            creditCardField, 
            creditCardStatus.OK, 
            creditCardStatus.NOK, 
            validLib.isValidCreditCard
            );
    }
);



// function updateArray(array, idx, value){
//     array[idx]=+value;
// }
// const inRangeStatus = {
//     OK: document.getElementById("in-range-ok"),
//     NOK: document.getElementById("in-range-not-ok"),
// };
// let valuesOfRange = [];

// function changeStatusRange (array, statusObject) {
//     statusObject.OK.style.display = isInRange(...array) ? 'flex': 'none';
//     statusObject.NOK.style.display = isInRange(...array) ? 'none': 'flex';
// }

// function validateInRange(){
//     rangeInputs = document.querySelectorAll('input[type="number"]');
//     rangeInputs.forEach(
//         function(input, idx) {
//             input.addEventListener(
//                 "keyup", 
//                 function () {
//                     updateArray(valuesOfRange, idx, input.value);
//                     changeStatusRange(valuesOfRange, inRangeStatus);
//                 });
//     });
// }
