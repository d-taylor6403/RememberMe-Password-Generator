// Creat arrays for lowercase, uppercase, numerals and symbols to generate passwords from

let lowerAlpha = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
console.log(lowerAlpha);

let upperAlpha = String.prototype.toUpperCase.apply(lowerAlpha).split(",");
console.log(upperAlpha);

let numerals = ['1','2','3','4','5', '6','7','8','9']
console.log(numeric);

let symbols = ['!','$','%','^','&','*','_','+','|','~','-','=','{}','[]',':',';','>','?','.','/'];
console.log(symbols);

function getPasswordOptions() {
  //variable to store user length selection
  let length = parseInt(
    prompt('Your password must be bewtween 8-120 characters.How many characters should your password contain?')
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

  if(length>120) {
    alert('Password cannot be more than 120 characters long. Try Again.');
    return;
  }

  //statement to check that the entered value 
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
