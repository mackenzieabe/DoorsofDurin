// create an object for the data used in the creation of the password
var allCharacters = {
    uppercaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercaseLetters: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    specialCharacter: "!@#$%^&*()_+="
}

// Get references to the #generate element
//generate refers to the button that we need clicked
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // setting the password to be an empty string
    var password = ""
    var passwordChars = ""

    // ask the user what kind of characters they want 
    var pwLength = prompt("Between 8 and 128, how long would you like your password to be?")
    while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
        alert("Your password must be a number and can only be between 8 and 128 characters long")
        pwLength = prompt("Between 8 and 128, how long would you like your password to be?")
    }

// 
    var wantsUpper = confirm("Would you like uppercase letters?")
    var wantsLower = confirm("Would you like lowercase letters?")
    var wantsNumbers = confirm("Would you like numbers?")
    var wantsSpecialChar = confirm("Would you like special characters?")
// 
    while (!wantsUpper && !wantsLower && !wantsNumbers && !wantsSpecialChar) {
        alert("You must choose at least one type of character")
        wantsUpper = confirm("Would you like uppercase letters?")
        wantsLower = confirm("Would you like lowercase letters?")
        wantsNumbers = confirm("Would you like numbers?")
        wantsSpecialChar = confirm("Would you like special characters?")
    }
// 
    if (wantsUpper) {
        passwordChars += allCharacters.uppercaseLetters
    }
    if (wantsLower) {
        passwordChars += allCharacters.lowercaseLetters
    }
    if (wantsNumbers) {
        passwordChars += allCharacters.numbers
    }
    if (wantsSpecialChar) {
        passwordChars += allCharacters.specialCharacter
    }

    console.log(passwordChars);
// 
    for (var i = 0; i < pwLength; i++) {
        password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length))
    }

    // return the password value
    return password
}

// Write password to the #password input
//this is the event listener
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button--this is the event listener
generateBtn.addEventListener("click", writePassword);