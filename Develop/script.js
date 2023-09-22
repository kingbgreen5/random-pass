// Assignment Code
var generateBtn = document.querySelector("#generate");
var hasupper = false;




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}









var numChar= 10;
var upper = true;
var number = false;
var special= true;


// ----------------------------------------TAKEN FROM W3 SCHOOLS
// ----------------------------------------RANDOMIZES AN ARRAY

function randomize(values) {
  let index = values.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (index != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * index);
    index--;
    // And swap it with the current element.
    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }
  return values;
}


// ----------------------------------------
//                  Creates initial arrays
// ----------------------------------------

const lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numberArray = ["1","2","3","4","5","6","7","8","9","0"];
const specialArray = ["!","@","#","$","%","&","*","(",")",'+','-','/','<','=','>','?','@','^','~'];




const lowerPass =[]
const upperPass =[]
const numPass =[]
const specialPass =[]
const initialEight=[]
// ---> DEFINED LATER ---- passwordAddon = lowerPass.concat(upperPass,numberPass,specialPass)

const allCharsArr = lowerCaseArray.concat(upperCaseArray, numberArray,specialArray);


// -------------------------------------------------------------------
//                      SHUFFLES ALL ARRAYS BEFORE INCORPORATING 
// -----------------------------------------------------------------
randomize(lowerCaseArray);
randomize(upperCaseArray);
randomize(numberArray);
randomize(specialArray);
randomize(allCharsArr)

//console.log(lowercasearray);
//console.log(uppercasearray);
//console.log(numberarray);
//console.log(specialarray);










console.log(numChar)




//                                                            always runs every time, THIS IS THE LOWER CASE BLOCK

// Prompt user when page opens
// user inputs NUmber into numChar

//Adds to initialEight
initialEight.push(lowerCaseArray[0])
initialEight.push(lowerCaseArray[1])

//Adds to lowerPass
for (var i = 0; i < [numChar]; i++) {
  //                adds the random letter to password output
    lowerPass.push(lowerCaseArray[Math.floor(Math.random() * 26)])
 }

console.log("InitialEight- " + initialEight);
console.log("LowerPass " + lowerPass)

//------------------------------------------------
//                                                                      IF UPPER IS TRUE RUN THIS BLOCK


if (upper===true) {
  initialEight.push(upperCaseArray[0])
  initialEight.push(upperCaseArray[1])
  
  //Adds to lowerPass
  for (var i = 0; i < [numChar]; i++) {
    //                adds the random letter to password output
      upperPass.push(upperCaseArray[Math.floor(Math.random() * 26)])
   }
  
  console.log("InitialEight- " + initialEight);
  console.log("upperPass " + upperPass)
}
//------------------------------------------------




//------------------------------------------------
//                                                              IF NUMBER IS TRUE RUN THIS BLOCK


if (number===true) {
  initialEight.push(numberArray[0])
  initialEight.push(numberArray[1])
  
  //Adds to NUMBERPass
  for (var i = 0; i < [numChar]; i++) {
    //                adds the random letter to password output
      numPass.push(numberArray[Math.floor(Math.random() * 10)])
   }
  
  console.log("InitialEight- " + initialEight);
  console.log("numpass " + numPass)
}
//------------------------------------------------




//------------------------------------------------
//                                                          IF special IS TRUE RUN THIS BLOCK

//------------------------------------------------




if (special===true) {
  initialEight.push(specialArray[0])
  initialEight.push(specialArray[1])
  
  //Adds to NUMBERPass
  for (var i = 0; i < [numChar]; i++) {
    //                adds the random letter to password output
      specialPass.push(specialArray[Math.floor(Math.random() * 19)])
   }
  
  console.log("InitialEight- " + initialEight);
  console.log("special " + specialPass)
}














// ADDS Everything together, almost last step
// randomizes passwordAddon
//add password addon
passwordAddon=[]
passwordAddon.push(lowerPass)
passwordAddon.push(upperPass) 
passwordAddon.push(numPass) 
passwordAddon.push(specialPass) 
randomize(passwordAddon)



//randomize(passwordAddon);

//let passwordOut = [initialEight.concat(passwordAddon)];

//console.log("uncut password output---> " + passwordOut);
// const passwordOut = initialEight + passwordAddon;
// randomize(passwordOut)

//passwordSliced = passwordOut.slice(0, 4);
//console.log("cut Password Output---> " + passwordSliced);






//[initialEight.concat(passwordAddon)]





passwordOut=[]                                                 // CREATES PASSWORD OUT
passwordOut.push(initialEight);                               // PUSHES
passwordOut.push(passwordAddon);                              // PUSHES
console.log("pushed password output---> " + passwordOut);
console.log("pushed passwordAddon" + passwordAddon);
console.log("initialEight.length " + initialEight.length);

console.log("passwordAddon.length " + passwordAddon.length);


console.log("passwordOut "+ passwordOut)


 string = passwordOut.toString();                                       //changes to string
console.log("String "+ String)

var string = string.replaceAll(',','');                          //REMOVES COMMAS


let slicedString = string.slice(0,numChar );                                // slices string TO numChar length
console.log("slicedString "+ slicedString)














/*

if(upper === true && number === true && special === true) {

// -------------------------------------------------------------------
//                    USER WANTS ALL CHARS INCLUDED
// -----------------------------------------------------------------

// picks the first two already randomized characters from the 4 arrays and randomizes them. 

const firstEight = [lowerCaseArray[0],lowerCaseArray[1],upperCaseArray[0],upperCaseArray[1]
,numberArray[0],numberArray[0],specialArray[0],specialArray[1]]
randomize(firstEight);
console.log(firstEight+ " First 8 Chars");

for (var i = 0; i < [numChar-8]; i++) {
  //                adds the random letter to password output
    passwordAddon.push(allCharsArr[Math.floor(Math.random() * 26)])
 }
            //                 prints to console
    console.log(passwordAddon+ " password addon");

     passwordOutputAllChars = [firstEight.concat(passwordAddon)];
  
    console.log(allCharsArr)
     console.log("--------Output of allChars password-------" + passwordOutputAllChars)






}else {
  // -------------------------------------------------------------------
//                    LOWERCASE ONLY
// -----------------------------------------------------------------
  // -------------------------------------------------------------------
  //                     ADDS RANDOM LOWERCASE LETTERS TO PASSWORD OUTPUT
  // -----------------------------------------------------------------
  
       //             each loop,  numChar times
       for (var i = 0; i < [numChar]; i++) {
        //                adds the random letter to password output
          passwordOutputlower.push(lowerCaseArray[Math.floor(Math.random() * 26)])
       //}}
      }
                  //                 prints to console
          console.log("--------Output of lowercase password-------" + passwordOutputlower);
      
        
  
  }








      


  const slicedLower = lowerCaseArray.slice(0, [numChar]);
  console.log(slicedLower +" slicedlower")
  
  //returns random number between 0-25
  console.log(Math.floor(Math.random() * 26));
  
  
  
  


/*

 lowerCaseArray[Math.floor(Math.random() * 26)]+"randomindex";















passwordOutput.push(lowerCaseArray[Math.floor(Math.random() * 26)])

console.log( lowerCaseArray[Math.floor(Math.random() * 26)]+"randomindex");



//random number from lowercasearray
console.log("outputs a random number from lowercase array")
lowerCaseArray[Math.floor(Math.random() * 26)]+"randomindex";


//everything true

if(upper === true && number === true && special === true) {
    const everythingunshuffled = lowerCaseArray.concat(uppercasearray, numberarray,specialArray);
    console.log(everythingunshuffled + " Everything unshuffled");
}




//upper and number true

else if (upper && number){
  const upperandlowerandnumber =lowerCaseArray.concat(uppercasearray,numberarray)
console.log(upperandlowerandnumber)
}




//upper and special true

else if (upper){
  const upperandlower =lowerCaseArray.concat(uppercasearray,specialArray)
  randomize (upperandlower)
}




//special and number true



else if (upper){
  const upperandlower =lowerCaseArray.concat(uppercasearray)
  randomize (upperandlower)
}
else if (number){
  const lowerandnumber
   =lowerCaseArray.concat(uppercasearray)
  randomize (upperandlower)
}















function validateLength(userLength) {
  return false;
}





var passlength =  "ENTER PASSWORD LENGTH 8-128 CHARS";






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//create multiple arrays and then combine them


}

*/