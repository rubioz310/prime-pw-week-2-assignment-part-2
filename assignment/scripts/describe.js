// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to "Dane" as a string.
// We check if name is equal to 'Mary', "Dane" is not equal to "Mary", so
// we console.log "How do you do?"
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//We create a variable named secret. We create a variable called code and we set it to 123 as a number.
//We check if code is equal to 123. In this case it is so we set secret to super as a string and
//set code as double the value of code. We check if code is bigger than 250 wich is not.
//Next we console.log "super".

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//We create a variable named isStudent and set it to true as a boolean.
//We create a variable named age and we set it to 34 as a number.
//We create a variable named zip and we set it to 55407 as a number.
//We check is isStudent is equal to true and if zip is bigger than 80000 wich they're not, so
//we now check if isStudent is equal to false or if age is less than 30 wich they're not, so
//we now check if isStudent is equal to true wich it is so
//we console.log "Welcome to prime!"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne is set to "red" but should be "blue" and colorTwo is set to"blue"
// but it should be "red" so we assign the correct value on both of them
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - colorOne is set to "purple" but the instrucions ask to set colorTwo to "purple" as well,
// so we set colorTwo="purple" inside the if statement.
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// FIX - || is used for an or statement but instructions ask's for a and statement, so
//we replace || with &&.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;// FIZ -  By setting minAge to 20 we can get the intended result without
//changing the rest of the code but is hard to read so we use the next FIX instead

// FIX - The result of the comparation results in console.log "no entry" when it should be
// console.log "enter" as both age and minAge are equal.
//So we change the comparation to age>=minAge, 
//on the section if the condition is true we replace console.log " no entry" to console.log "entry"
// and on the section if the condition is false we replace console.log "entry" to console.log "no entry"
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
