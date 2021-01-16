// Arrays used in password generator and a blank variable array to store the generated random password
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);




var passArrays = [];
var useLowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var useUppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var useNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var useSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '/', '<', '<', '{', '}', '|', '~'];

// Function to generate password based on user input from prompts and confirms

function generatePassword() {
  var passwordLength = ' ';
  var confirmLower = ' ';
  var confirmUpper = ' ';
  var confirmNumber = ' ';
  var confirmSymbol = ' ';

  //Prompting user for the length of password. 

  //If it meets criteria then will go on too ask for confirmation of characters they want to use

  var passwordLength = +prompt("How long do you want your password to be, please choose the number of characters");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must enter a number between 8 and 128");
    passwordLength = +prompt("How long do you want your password to be, please choose the number of characters");
  }
  //Confirming what type of characters the user wants to use for their password
  console.log(passwordLength)

  var confirmLower = confirm("Do you want to use lowercase letters for your password");
  var confirmUpper = confirm("Do you want to use uppercase letters for your password");
  var confirmNumber = confirm("Do you want to use numerical for your password");
  var confirmSymbol = confirm("Do you want to use special characters for your password");

  if (!confirmLower === true && !confirmUpper === true && !confirmNumber === true && !confirmSymbol === true) {
    alert("You must choose at least two values for the password generator to work");
    confirmLower = confirm("Do you want to use lowercase letters for your password");
    confirmUpper = confirm("Do you want to use uppercase letters for your password");
    confirmNumber = confirm("Do you want to use numerical characters for your password");
    confirmSymbol = confirm("Do you want to use special characters for your password");

  }
  else {
    //For loop to generate password by slicing existing arrays and pushing them into the var passArray[] 

    for (var i = 0; i < 128; i++) {

      console.log(i);
//lowercase returns true
      if (confirmLower === true) 
        {
        var rand_pass = useLowers[Math.floor(Math.random() * useLowers.length)] ;
        passArrays += (rand_pass);
        console.log(passArrays);
        }
 
//uppers returns true       
        if (confirmUpper === true) 
        {
        var rand_pass = useUppers[Math.floor(Math.random() * useUppers.length)] ;
        passArrays += (rand_pass);
        console.log(passArrays);
        }
//numbers returns true       
      if (confirmNumber === true) 
        {
        var rand_pass = useNumbers[Math.floor(Math.random() * useNumbers.length)] ;
        passArrays += (rand_pass);
        console.log(passArrays);
        }
  
  //symbols returns true       
      if (confirmUpper === true) 
      {
       var rand_pass = useUppers[Math.floor(Math.random() * useUppers.length)] ;
      passArrays += (rand_pass);
      console.log(passArrays);
      }
    }
    var password = passArrays.toLocaleString();
    console.log(password);
    var correct = password.slice(0, passwordLength);
    return correct;
    
 
//Returns password to the secure password section  - ran out of time

function writePassword ()
{
var show = document.querySelector(".password");
 show = document.body.appendChild(correct);
  
}
  
}

}
