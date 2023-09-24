// Assignment Code
var generateBtn = document.querySelector("#generate");                                           // Grabs the button

var initiate = function() {                                                                      // "Initiate" function --- Begins program

  var numChar = window.prompt("Enter Character length 8-128:");                                  // Asks user for character length
  if (numChar <8 ||numChar >128) {
    alert("Please enter number between 8-128");
    initiate()
  }else{

var lower = window.confirm("Do you want your password to contain Lower Case Characters?");       // Asks user for lower case
var upper = window.confirm("Do you want your password to contain Upper Case Characters?");       // Asks user for Upper case
var number = window.confirm("Do you want your password to contain Numbers?");                    // Asks user for Numbers
var special = window.confirm("Do you want your password to contain Special Characters?");        // Asks user for Special

if (lower==false && upper==false && number==false && special==false ) {                          // ALERTS USER THEY MUST CHOSE A CHARACTER IF THEY SAY NO TO EVERYTHING
  alert("Please choose at least one character type");
  initiate()
}else{

function randomize(values) {                                                                     // TAKEN FROM W3 SCHOOLS, RANDOMIZES AN ARRAY                                                              
  let index = values.length,
    randomIndex;
  while (index != 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;
    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }
  return values;
}

//// --------------------------------------------------------------// Fills initial arrays
const lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numberArray = ["1","2","3","4","5","6","7","8","9","0"];
const specialArray = ["!","@","#","$","%","&","*","(",")",'+','-','/','<','=','>','?','@','^','~'];


const lowerPass =[]                                                // Blank Arrays to be filled later
const upperPass =[]
const numPass =[]
const specialPass =[]
const initialEight=[]
const passwordAddon=[]        

console.log("Number of Characters:" + numChar)                      // Logs everything to the console
console.log("Lower Case: " + lower)
console.log("Upper Case: " + upper);
console.log("Numbers: " + number);
console.log("Special: " + special);
//                                                                  // When user selects a character, the original Character arrays are dumped into
//                                                                  // empty arrays which will all be added at the end reguardless if they are
//                                                                  // full or not. This aviods the use of many if else conditions. 

if (lower===true) {                                                 // LOWER CASE BLOCK
  initialEight.push(lowerCaseArray[0]);                               // Adds to initialEight, this ensures that the first 8 chars will contain
  initialEight.push(lowerCaseArray[1]);                               // all the characters the user selected

//Adds to lowerPass
for (var i = 0; i < [numChar]; i++) {
  //                adds the random letter to password output
    lowerPass.push(lowerCaseArray[Math.floor(Math.random() * 26)])
 };
}

if (upper===true) {                                                 // IF UPPER IS TRUE RUN THIS BLOCK
  initialEight.push(upperCaseArray[0])
  initialEight.push(upperCaseArray[1])

  for (var i = 0; i < [numChar]; i++) {
      upperPass.push(upperCaseArray[Math.floor(Math.random() * 26)])
   }
  };

if (number===true) {                                                // IF NUMBER IS TRUE RUN THIS BLOCK
  initialEight.push(numberArray[0])
  initialEight.push(numberArray[1])
  
  for (var i = 0; i < [numChar]; i++) {
      numPass.push(numberArray[Math.floor(Math.random() * 10)])
   }
};

if (special===true) {                                                // IF Special IS TRUE RUN THIS BLOCK
  initialEight.push(specialArray[0])
  initialEight.push(specialArray[1])
  
  for (var i = 0; i < [numChar]; i++) {
      specialPass.push(specialArray[Math.floor(Math.random() * 19)])
   }
}

function addValues(values){                                          // Will ADD Everything in the preliminary arrays
  for(var i = 0; i < numChar; i++)
   passwordAddon.push(values[i])
}

addValues(lowerPass);
addValues(upperPass);
addValues(numPass);
addValues(specialPass);                                              // Executes addValues, Adds all the different character arrays into the Addon Array
randomize(passwordAddon)                                             // Randomizes Password Addon

passwordOut=[]                                                       // CREATES "PASSWORD OUT"
passwordOut.push(initialEight);                                      // PUSHES the initial 8 chars into the front of the final Password, this is to ensure you always get all the characters you requested
passwordOut.push(passwordAddon);                                     // PUSHES the addon, which makes the password longer if you want more than 8 chars
randomize(passwordOut);                                              // RANDOMIZES PASSWORDOUT
string = passwordOut.toString();                                     // Changes to it to string
var string = string.replaceAll(',','');                              // REMOVES COMMAS
let slicedString = string.slice(0,numChar );                         // slices string to 'numChar' length
console.log("Password: "+ slicedString);

document.getElementById("password").innerHTML = slicedString;       // Writes Sliced String (the actual password, to the text field)
}
}
}
  
generateBtn.addEventListener("click",initiate);                     // When button is clicked, runs "initiate"