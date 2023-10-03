// Assignment code here

function returnCapLetters(){
  console.log(String.fromCharCode(Math.floor(Math.random() * 25) + 65));
  return String.fromCharCode(Math.floor(Math.random() * 25) + 65);
}

function returnLowLetters(){
  return String.fromCharCode(Math.floor(Math.random() * 25) + 97);
}

function returnNum(){
  return Math.floor(Math.random()*9);
}

function returnSpecChars(){
  var charCode = Math.floor(Math.random() * 93) + 33;

  if(charCode > 47 && charCode < 58)
    charCode = 58;
  else if(charCode > 64 && charCode < 91)
    charCode = 91;
  else if(charCode > 96 && charCode < 123)
    charCode = 123;

  console.log(String.fromCharCode(charCode));

  return String.fromCharCode(charCode);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log(password);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
