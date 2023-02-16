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
  const passLength = prompt1()
  console.log({passLength})
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    return handleError("Length must be between 8 to 128. Please click ok and Generate Password again.")
  }

  const includeUppercase = prompt2()
  console.log({includeUppercase})
  if (includeUppercase) {
    handleUppercase()
  }
  console.log ({passwordCharacterOptions})

  const includeLowercase = prompt3()
  console.log({includeLowercase})
  if (includeLowercase) {
    handleLowercase()
  }
  console.log ({passwordCharacterOptions})

  const includeNumber = prompt4()
  console.log({includeNumber})
  if (includeNumber) {
    handleNumbers()
  }
  console.log ({passwordCharacterOptions})

  const includeSpecial = prompt5()
  console.log({includeSpecial})
  if (includeSpecial) {
    handleSpecial()
  }
  console.log ({passwordCharacterOptions})
  if (passwordCharacterOptions === "") {
    handleError("At least one character type must be selected. Please click ok and try again.")
  }

  const password = generatePassword(passLength);
  const passwordText = document.querySelector("#password");
  console.log({password})

  passwordText.value = password;

}

// This is the first prompt asking user for pass length
function prompt1 () {
  const response = parseInt(window.prompt("Choose a password length between 8-128 characters 👇"))
  return response
}

// Second prompt, asking about Uppercase characters
function prompt2 () {
  const response = window.confirm("🤔 Would you like to include Uppercase characters?")
  return response
}

// Third prompt, asking about Lowercase
function prompt3 () {
  const response = window.confirm("Would you like to include Lowercase characters? 🙃")
  return response
}

// Fourth prompt re: Numbers
function prompt4 () {
  const response = window.confirm("🤓 Would you like to include Numbers?")
  return response
}

// Fifth prompt re: Special characters
function prompt5 () {
  const response = window.confirm("Would you like to include ✨Special✨ characters?")
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
function handleError (errorMessage) {
  return window.alert(errorMessage)
}

// Generate Password fuction
function generatePassword(passLength) {
  console.log({passLength})
  var generatedPassword = ""
  for (let i = 0; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordCharacterOptions.length);
    var randomCharacter = passwordCharacterOptions[randomNumber]
    generatedPassword += randomCharacter
    console.log({randomCharacter, randomNumber})
  }
  return generatedPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
