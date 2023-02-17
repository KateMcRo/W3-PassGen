// Assignment Code
var generateBtn = document.querySelector("#generate");

// Where all password options will be held
var passwordCharacterOptions = "";

// Will be put into character options string based on user prompts
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const numericalCharacters = "1234567890";
const specialCharacters = "~!@#$%^&*()_+`-=";

// Write password to the #password input
function writePassword() {
  // resets password options for each run through
  passwordCharacterOptions = "";
  const passLength = prompt1()
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    return handleValidation("Length must be between 8 to 128. Please click ok and Generate Password again.")
  }

  const includeUppercase = prompt2()
  if (includeUppercase) {
    handleUppercase()
  }

  const includeLowercase = prompt3()
  if (includeLowercase) {
    handleLowercase()
  }

  const includeNumber = prompt4()
  if (includeNumber) {
    handleNumbers()
  }

  const includeSpecial = prompt5()
  if (includeSpecial) {
    handleSpecial()
  }

  if (passwordCharacterOptions === "") {
    return handleValidation("At least one character type must be selected. Please click ok and try again.")
  }

  const password = generatePassword(passLength);
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// This is the first prompt asking user for pass length
function prompt1 () {
  const response = parseInt(prompt("Choose a password length between 8-128 characters 👇"))
  return response
}

// Second prompt, asking about Uppercase characters
function prompt2 () {
  const response = confirm("🤔 Would you like to include Uppercase characters?")
  return response
}

// Third prompt, asking about Lowercase
function prompt3 () {
  const response = confirm("Would you like to include Lowercase characters? 🙃")
  return response
}

// Fourth prompt re: Numbers
function prompt4 () {
  const response = confirm("🤓 Would you like to include Numbers?")
  return response
}

// Fifth prompt re: Special characters
function prompt5 () {
  const response = confirm("Would you like to include ✨Special✨ characters?")
  return response
}

// Functions to handle adding values to password options
function handleUppercase() {
  return passwordCharacterOptions += uppercaseCharacters
}

function handleLowercase() {
  return passwordCharacterOptions += lowercaseCharacters
}

function handleNumbers() {
  return passwordCharacterOptions += numericalCharacters
}

function handleSpecial() {
  return passwordCharacterOptions += specialCharacters
}

// Error messages
function handleValidation (errorMessage) {
  return alert(errorMessage)
}

// Generate Password fuction
function generatePassword(passLength) {
  var generatedPassword = ""
  for (let i = 0; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordCharacterOptions.length);
    var randomCharacter = passwordCharacterOptions[randomNumber]
    generatedPassword += randomCharacter
  }
  return generatedPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
