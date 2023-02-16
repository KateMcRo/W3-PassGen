// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const passLength = prompt1()
  console.log({passLength})

  const includeUppercase = prompt2()
  console.log({includeUppercase})

  const includeLowercase = prompt3()
  console.log({includeLowercase})

  const includeNumber = prompt4()
  console.log({includeNumber})

  const includeSpecial = prompt5()
  console.log({includeSpecial})

  // var password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// This is the first prompt asking user for pass length
function prompt1 () {
  const response = window.prompt("Choose a password length between 8-128 characters 👇")
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
