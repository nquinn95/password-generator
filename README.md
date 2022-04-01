# password-generator
NQ password-generator homework


Used three separate functions to create the password generator.

1. userChoices()
first function user is prompted to choose how long the password should be and which types of characters they want to be eligible for the password.
it then returns an array with true or false statements corresponding to the order of the prompts that the user answered.
if all prompts were responded to with no, then it alerts the user that at least one prompt needs to be filled out.
if the user puts a number of characters that is outside the parameters for the password, it alerts the user that it is not eligible.
if either of the above 2 lines happen, the generator returns nothing and the program closes, making the user click the generate password button again.


2. passwordRandArray()
second function looks at the array resulting from the first function.
it then loops through the length of the array and looks at the boolean in each index of the array.  if the corresponding index is true, then it adds the type of character that the user
wanted to be in the password to a different array.
it then returns the array full of the characters that are eligible to be in the password

3. generatePassword()
third function looks at the array from the second function generates a password from the characters in that array
it loops through according to the number that the user put in for the length of the password.
each time it loops, a random number is generated from 0 to the highest index in the array.
the random number is then indexed in the array and put into a new variable. that variable is then concat'd into a different array that ultimately becomes the password generated
the array is then joined without spaces and returned.  The given password function then takes the password from generatePassword() and is given to the user