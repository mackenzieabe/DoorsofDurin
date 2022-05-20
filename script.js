// create an object for the data used in the creation of the password
var allCharacters = {
    uppercaseLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercaseLetters: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    specialCharacter: "!@#$%^&*()_+="
}

// Get references to the #generate element
//Generate refers to the button that we need clicked
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    // Setting the password to be an empty string
    var password = ""
    var passwordChars = ""

    //Ask the user how many characters they want in their password
    var pwLength = prompt("Between 8 and 128, how long would you like your password to be?")
    while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
        //alerts the user if their password is less than 8 characters or greater than 128 characters and then prompts them again
        alert("Your password must be a number and can only be between 8 and 128 characters long")
        pwLength = prompt("Between 8 and 128, how long would you like your password to be?")
    }

// ask the user what kind of characters they want to use in their password 
    var wantsUpper = confirm("Would you like your password to have uppercase letters?")
    var wantsLower = confirm("Would you like your password to have lowercase letters?")
    var wantsNumbers = confirm("Would you like your password to have numbers?")
    var wantsSpecialChar = confirm("Would you like your password to have special characters?")
// confirms that the user is selecting characters that match with the answer they gave in the previous prompt
    while (!wantsUpper && !wantsLower && !wantsNumbers && !wantsSpecialChar) {
        alert("You must choose at least one type of character")
        wantsUpper = confirm("Would you like your password to have uppercase letters?")
        wantsLower = confirm("Would you like your password to have lowercase letters?")
        wantsNumbers = confirm("Would you like your password to have numbers?")
        wantsSpecialChar = confirm("Would you like your password to have special characters?")
    }
 //ensuring that whatever characters are chosen are the ones used
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
// generate random characters for user password 
    for (var i = 0; i < pwLength; i++) {
        password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length))
    }

    // return the password value
    return password
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);