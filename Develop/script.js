// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//variables for the input form
const characterAmountRange = document.getElementById('characterAmountRange');

const characterAmountNumber = document.getElementById('characterAmountNumber');

const includeUppercaseEl = document.getElementById('includeUppercase');

const includeNumbersEl = document.getElementById('includeNumbers');

const includeSymbolsEl = document.getElementById('includeSymbols');

const form = document.getElementById('passwordGenerator');

const passwordDisplay = document.getElementById('password-display');

//this variable cycles through the uppercase letters in the char code(65-90) if checked on input
const uppercaseCharCode = arrayLowToHigh(65, 90);

// this variable cycles through the lowercase letters in the char code(97-122) if checked on input 
const lowercaseCharCode = arrayLowToHigh(97, 122);

// this variable cycles through the numbers in the char code (48-57) if checked on input
const numbersCharCode = arrayLowToHigh (48, 57);

// this variable cycles through multiple arrays with the .concat syntax due to the special characters found in different spots in the char code
const symbolsCharCode = arrayLowToHigh (33, 47).concat(
  arrayLowToHigh(58, 64)
).concat(
  arrayLowToHigh(91, 96)
).concat(
  arrayLowToHigh(123, 126)
)

//listens for if the checkboxes are checked off or not
characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prevents page from refreshing  
form.addEventListener('submit', event => {
  event.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseEl.checked
  const includeNumbers = includeNumbersEl.checked
  const includeSymbols = includeSymbolsEl.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
  passwordDisplay.innerText = password
})

// returns random characters including alphanumeric and special characters 
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = lowercaseCharCode
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCode)
  if (includeSymbols) charCodes = charCodes.concat(symbolsCharCode)
  if (includeNumbers) charCodes = charCodes.concat(numbersCharCode)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount, i++;) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
 
}

// cycles through the char code array's given parameters
function arrayLowToHigh(low, high) {
  const array = []
  for (let i = low; i<= high; i++) {
    array.push(i)
  }
  return array
}

// this function syncs the slide bar and the number box value together
function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
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
