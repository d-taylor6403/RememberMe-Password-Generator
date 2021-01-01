// Creat arrays for lowercase, uppercase, numerals and symbols to generate passwords from

let lowerAlpha = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
console.log(lowerAlpha);

let upperAlpha = String.prototype.toUpperCase.apply(lowerAlpha).split(",");
console.log(upperAlpha);

let numerals = ['1','2','3','4','5', '6','7','8','9']
console.log(numerals);

let symbols = ['!','$','%','^','&','*','_','+','|','~','-','=','{}','[]',':',';','>','?','.','/'];
console.log(symbols);

function getPasswordOptions() {
  //variable to store user length selection
  let length = parseInt(
    prompt('Enter your desired password length. \nPasswords must be at least 8 characters and no more than 120 characters.')
  );
  console.log(length);

  //statement to check that entered value is a number
  if(isNaN(length)=== true) {
    alert('Password length must be provided as a number');
    return;
  }

  if(length < 8) {
    alert('Password must be at least 8 characters long. Try Again');
    return;
  }

  if(length > 120) {
    alert('Password cannot be more than 120 characters long. Try Again.');
    return;
  }

  //variable to store response to special character requirement
  let specialChar = confirm('Should your password contain special characters? Click Ok if yes. Click Cancel if no.');

  //variable to store response to numeral requirement
  let numericChar = confirm('Should your password contain numeric digits? Click Ok if yes. Click Cancel if no.');

  //variable to store response to lowerCase requirement
  let lowerCaseChar = confirm('Should your password contain lower case letters? Click Ok if yes. Click Cancel if no.');

  //variable to store respone to upperCase requirment
  let upperCaseChar = confirm('Should your password contain upper case letters? Click Ok if yes. Click Cancel if no.');

  //conditional statement to check if user clicks cancel on all confirms

  if (
    specialChar === false &&
    numericChar === false &&
    lowerCaseChar === false &&
    upperCaseChar === false
  ){
    alert('You must select at least one character type. Try Again.');
    return;
  }

  //Object to store user input
  let userChoices = {
    length: length,
    specialChar: specialChar,
    numericChar: numericChar,
    lowerCaseChar: lowerCaseChar,
    upperCaseChar: upperCaseChar
  };

  return getPasswordOptions;
}

//function to get random element from array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];

  return randomElement;
}

//function to build password based on user input
function buildPassword(){
  let options = getPasswordOptions();
  //variable to store password as its being concatenated
  let result = [];

  //array to store types of characters to include
  let possibleCharacters = [];

  //array to contain one of each type of chosen character 
  let guaranteedCharacters = [];

  //conditional statement tht adds array of special characters to possible characters and add 1 random
  //character to guaranteedCharacters.
  //Push new random special character to guaranteedCharacters
  if(userChoices.specialChar) {
    possibleCharacters = possibleCharacters.concat(symbols);
    guaranteedCharacters.push(getRandom(symbols))
  }

  //conditional statement tht adds array of numeric characters to possible characters and add 1 random
  //character to guaranteedCharacters.
  //Push new random special character to guaranteedCharacters
  if(userChoices.numericChar) {
    possibleCharacters = possibleCharacters.concat(numerals);
    guaranteedCharacters.push(getRandom(numerals))
  }

  //conditional statement tht adds array of lower case characters to possible characters and add 1 random
  //character to guaranteedCharacters.
  //Push new random special character to guaranteedCharacters
  if(userChoices.lowerCaseChar) {
    possibleCharacters = possibleCharacters.concat(lowerAlpha);
    guaranteedCharacters.push(getRandom(lowerAlpha))
  }

  //conditional statement tht adds array of upper case characters to possible characters and add 1 random
  //character to guaranteedCharacters.
  //Push new random special character to guaranteedCharacters
  if(userChoices.upperCaseChar) {
    possibleCharacters = possibleCharacters.concat(upperAlpha);
    guaranteedCharacters.push(getRandom(upperAlpha))
  }

  //Loop through possible characters and push to results array
  for(let i = 0; i < options.length; i++) {
    let possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacters);
  }

  //Mix at least one of the guaranteed character in the result
  for(let i = 0; i<guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  //Create a string from result array to pass into writePassword
  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = buildPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
