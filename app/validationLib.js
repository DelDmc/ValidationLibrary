export function notEmptyValidation(value) {
    if (value == null || value.trim() === '') {
      return false;
    }
    if (value.trim() === 'false') {
      return false;
    }
    return true;
  }

export function isValidEmail (email) {
    let emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

/** 
    * Function validates password input
    * Password should contain at least one uppercase letter
    * Password should contain at least one lowercase letter
    * Password should contain at least one digit
    * Password should contain at least one special character (^~@$!%*#?&)
    * Password should contain at least 8 characters
    * @param {string} password - user's input password
    * @returns {boolean} true/false if password valid or not
*/ 
export function isComplexPassword (password) {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[/^~@$!%*#?&])[A-Za-z\d~^@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
}

export function isValidPhoneNumber (phoneNumber) {
    let phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
}

export function isValidCreditCard (creditCardNumber) {
    const creditCardsRegexExpressions = {
        mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
        americanExpress: /^3[47][0-9]{13}$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
        maestro: /^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$/,
        jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    };
    for (let creditcard in creditCardsRegexExpressions) {
        if (creditCardsRegexExpressions[creditcard].test(creditCardNumber)){
            return true;
        }
    }
}

export function isInRange(min, max, number) {
    return number >= min && number <= max;
  }
