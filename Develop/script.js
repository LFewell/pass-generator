// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  lowerCase = "abcdefghijklmnopqrstuvwxyz";
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numbers = "0123456789";
  specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var passArray = "";

  //console.log("You clicked the button!");
  var passwordLength = window.prompt("How many characters would you like your password to contain? 8-128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please select a length between 8 and 128 characters");
    return;
  } else {

    var lowerAdd = window.confirm("Would you like to include lowercase letters?");
    if (lowerAdd === true) {
      passArray = passArray.concat(lowerCase);
    }
    

    var upperAdd = window.confirm("Would you like to include uppercase letters?");
    if (upperAdd === true) {
      passArray = passArray.concat(upperCase);
    }

    var numberAdd = window.confirm("Would you like to include numbers?");
    if (numberAdd === true) {
      passArray = passArray.concat(numbers);
    }

    var specialAdd = window.confirm("Would you like to include special characters?")
    if (specialAdd === true) {
      passArray = passArray.concat(specialChars);
    }

    userPass = "";

    for (var i = 0; i < passwordLength; ++i) { 
      var randomPass = passArray[Math.floor(Math.random() * passArray.length)];
        userPass = userPass.concat(randomPass);

      }
    
    }

  
return userPass;
  
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
