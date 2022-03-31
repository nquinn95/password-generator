// Assignment Code
var generateBtn = document.querySelector("#generate");

const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//funciton that prompts user choices and receives answers
function userChoices(){

  var choicesArr = [];
//receive input on password length, check against low of 8 and high of 128
var numChars = window.prompt("How many characters would you like your password to be?");
if (numChars >= 8 && numChars <= 128){

}else {
  window.alert("Please choose a number from 8-128.");
  return;
}

//yes or no lowercase, uppercase, mumeric, and/or special characters OR
//buttons for each type of special character OR // after yes have a text box

var userSpecial = confirm("Do you want to include special characters?");
var userUpper = confirm("Do you want to include upper case letters?");
var userLower = confirm("Do you want to include upper case letters?");
var userNum = confirm("Do you want to include numbers?");

//add all user choices into an array
choicesArr = [numChars, userSpecial, userUpper, userLower, userNum];

//returns array of all user choices
return choicesArr;
}

//array to select each character in the password
function passwordRandArray(){
  //define local variables
  var selectedChars = [];

  //define array with results of userChoice
  var resultsUser = userChoices();
  resultsUser = resultsUser.splice[0];

  //loop through userChoice results and check the result of each spot
  // for (var i = 0; i < array.resultsUser; i++) {
  //    //if statements for adding all arrays togehter

    
  // }
   

return resultsUser;
}


function generatePassword(){

var passTest = passwordRandArray();
return passTest;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
