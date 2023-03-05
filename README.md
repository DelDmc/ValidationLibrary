# ValidationLibrary

This is a simple validation library that provides functions for validating different types of user inputs such as email, phone numbers, credit card numbers, passwords, and checking if a value is not empty.

## Functions

### notEmptyValidation
Checks if a given string is not null, empty, or whitespace. It also checks if the value is equal to the string 'false'.

```javascript
notEmptyValidation(value: string) => boolean
```

### isValidEmail
Checks if a given string is a valid email address.

```javascript
isValidEmail(email: string) => boolean
```

### isComplexPassword
Validates password input based on the following criteria:

Password should contain at least one uppercase letter
Password should contain at least one lowercase letter
Password should contain at least one digit
Password should contain at least one special character (^~@$!%*#?&)
Password should contain at least 8 characters

```javascript
isComplexPassword(password: string) => boolean
```

### isValidPhoneNumber
Checks if a given string is a valid 10-digit phone number.

```javascript
isValidPhoneNumber(phoneNumber: string) => boolean
```

### isValidCreditCard
Checks if a given string is a valid credit card number for the following types of credit cards (some fake card numbers are provided for testing):

    (Visa)             4111111111111111 
    (Mastercard)       5555555555554444 
    (American Express) 378282246310005  
    (Discover)         6011111111111117 
    (Maestro)          5018123456789012 
    (Diners Club)      30569309025904   
    (JCB)              3530111333300000 

```javascript
isValidCreditCard(creditCardNumber: string) => boolean
```

### isInRange
Checks if a given number is within a given range.

```javascript
isInRange(min: number, max: number, number: number) => boolean
```

## Usage
To use this library, import the required function and call it with the appropriate arguments. For example:

```javascript
import { isValidEmail } from 'validation-library';

const isValid = isValidEmail('example@domain.com');
```

## Link to paste library to your project
[https://deldmc.github.io/ValidationLibrary/app/validationLib.js](https://deldmc.github.io/ValidationLibrary/app/validationLib.js)

## You can check the validation lib in action
[TRY IT NOW](https://deldmc.github.io/ValidationLibrary/app/)
