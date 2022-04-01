// Assignment Code
var generateBtn = document.querySelector("#generate");

const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//potential global variable for number of characters in the password
var numChars;

//funciton that prompts user choices and receives answers
function userChoices(){
//local variable choicesArr to hold the choices from the user EXCLUDING password length
  var choicesArr = [];

//receive input on password length, check against low of 8 and high of 128
numChars = window.prompt("How many characters would you like your password to be?");
if (numChars >= 8 && numChars <= 128){

}else {
  window.alert("Please choose a number from 8-128.");
  return;
}

//yes or no lowercase, uppercase, mumeric, and/or special characters OR
//buttons for each type of special character OR // after yes have a text box

var userSpecial = confirm("Do you want to include special characters?");
var userUpper = confirm("Do you want to include upper case letters?");
var userLower = confirm("Do you want to include lower case letters?");
var userNum = confirm("Do you want to include numbers?");

//add all user choices into an array
choicesArr = [userSpecial, userUpper, userLower, userNum];

//returns array of all user choices
return choicesArr;
}

//array to select each character in the password
function passwordRandArray(){
  //define local variables
  var selectedChars = [];

  //define array with results of userChoice
  var resultsUser = userChoices();


  //loop through userChoice results and check the result of each spot
  for (var i = 0; i <= resultsUser.length; i++) {

     //if statements to concat the selectedChars
     if (i == 0 && resultsUser[i] === true){
       selectedChars = selectedChars.concat(specialChars);

     }else if (i == 1 && resultsUser[i] === true){
       selectedChars = selectedChars.concat(upperCaseChars);

     }else if (i == 2 && resultsUser[i] === true){
       selectedChars = selectedChars.concat(lowerCaseChars);

     }else if (i == 3 && resultsUser[i] === true){
       selectedChars = selectedChars.concat(numberChars);
     }
    }

    
   

return selectedChars;
}


function generatePassword(){

  //declare local variables
var chosenCharacters = passwordRandArray();
var finalPassArray = [];

console.log(chosenCharacters);

//for loop to select random elements from the array
for(var i = 0; i <= numChars; i++){

  //randomNumber is the math for a random item from the array
  randomNumber = Math.floor(Math.random() * chosenCharacters.length);


  let pleaseWork = chosenCharacters[randomNumber];

  finalPassArray = finalPassArray.concat(pleaseWork);

}

//join the array together to create the password


finalPassArray = finalPassArray.join(" ");

  console.log(numChars);
  console.log(chosenCharacters);
  
  //return the generated password!
  return finalPassArray;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
