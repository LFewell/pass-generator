// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  console.log("You clicked the button!");
  var passwordLength = window.prompt("How many characters would you like your password to contain? 8-128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please select a length between 8 and 128 characters");
    return;
  } else {
    var chosenCharacters = [];
    console.log(chosenCharacters);
    var lowerCase = window.confirm("Would you like to include lowercase letters?");
    if (lowerCase === true) {
      chosenCharacters.push(0);
    }

    var upperCase = window.confirm("Would you like to include uppercase letters?");
    if (upperCase === true) {
      chosenCharacters.push(1);
    }

  

  return "Password will display here"
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
