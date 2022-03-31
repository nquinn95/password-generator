// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
//receive input on password length, check against low of 8 and high of 128


//yes or no lowercase, uppercase, mumeric, and/or special characters OR
//buttons for each type of special character OR // after yes have a text box 


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
