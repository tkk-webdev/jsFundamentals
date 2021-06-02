/* 
CONDITIONALS - Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. Conditionals will check if an expression is true,IF the expression is true, a block of code will run. /* 


/*
Falsy Values - considered false. 

1) False 
2) null 
3) Undefined 
4) 0 
5) NaN (not a number)
6) "" (empty string)
*/ 

/* 
Truthy Values - considered true. 

1) true
2) 42, -42 (number that isn't a zero)
3) "0" (string that isn't empty)
*/ 

let snowing = true; 

if (snowing == true) {
    console.log("it is snowing outside!");
}

if (snowing) {
    console.log("It is still snowing!");
}

let snowing = false; //false so it will not run 
if (snowing == false){
    console.log(`It stopped snowing. It's too warm`);
}

/* 
IF ELSE - If the expression is false, it will run the next block of code. 
the else statement specifies a block of code to be executed if the condition is false. 
*/

let puppies = 3; 

if (puppies < 1) {
    console.log("I need more puppies.");
} else {
    console.log("I have enough puppies!");
}

let myName = "Marco"

if (myName == "Marco") {
    console.log("Hello! My name is ${myName}.");
} else {
    console.log(`Hello, is your name ${myName}.`);
}

/* 
Challenge! */

let myName = "Tina";
let myFriendName = "Maggie"; 
console.log(myName.length); 
console.log(myFriendName.length);



