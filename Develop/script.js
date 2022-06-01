// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// returns random characters including alphanumeric and special characters 
function generatePassword() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Write password to the #password input
function writePassword(num) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  for (var i = 0; i < num; i++) {
    password += generatePassword();
  }
  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


