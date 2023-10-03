// Assignment code here
function returnCapLetters(){
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

  return String.fromCharCode(charCode);
}

function generatePassword(password){
  password = "";
  var funcToCall = [];

  while(funcToCall[0] === undefined){
    var doCap = confirm("Would you like Upper Case Letters?\n Ok for Yes, Cancel for No");
    var doLower = confirm("Would you like Lower Case Letters?\n Ok for Yes, Cancel for No");
    var doNum = confirm("Would you like Numbers?\n Ok for Yes, Cancel for No");
    var doSpec = confirm("Would you like Special Characters?\n Ok for Yes, Cancel for No");

    if(doCap)
      funcToCall.unshift("C");
    if(doLower)
      funcToCall.unshift("L");
    if(doNum)
      funcToCall.unshift("N");
    if(doSpec)
      funcToCall.unshift("S");

    if(funcToCall[0] === undefined)
      alert("Please select an option");
  }
  
  var howLong = null;

  while(howLong === null){
    var hl = prompt("How long would you like your password?\n please input a number from 8 to 128");
    if(hl < 8 || hl > 128)
      alert("Please enter a number from 8 to 128");
    else 
      howLong = hl;
  }

  var rand;

  for(var i = 0; i < howLong; i++){
    rand = Math.floor(Math.random()*(funcToCall.length)+1);

    if(funcToCall[rand-1] === "C")
      password += returnCapLetters();
    else if(funcToCall[rand-1] === "L")
      password += returnLowLetters();
    else if(funcToCall[rand-1] === "N")
      password += returnNum() + "";
    else if(funcToCall[rand-1] === "S")
      password += returnSpecChars();
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password + "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
