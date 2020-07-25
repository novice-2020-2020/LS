// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
const readline = require('readline-sync');
function calculator() {

const MESSAGES = require('./messages.json');
console.log(MESSAGES["language/bhasha"]);
console.log('hindi ke liye h dabayein\nfor engligh press e');
const lang = String(readline.question());

function prompt(str) {
  console.log(`=> ${str}`);
}

function isValidNumber(num) {
  return Number.isNaN(Number(num)) || num.trimStart() === '';
}

console.log(prompt(MESSAGES[lang]["welcome"]));

console.log(prompt(MESSAGES[lang]["number1"]));
let number1 = readline.question();
while (isValidNumber(number1)) {
  console.log('invalid number');
  number1 = readline.question();
}

console.log(prompt(MESSAGES[lang]["number2"]));
let number2 = readline.question();
while (isValidNumber(number2)) {
  console.log('invalid number');
  number2 = readline.question();
}

console.log(prompt(MESSAGES[lang]["operation"]));
const operation = readline.question();

let output;

switch (operation) {
  case '1':
    output = number1 + number2;
    break;
  case '2':
    output = number1 - number2;
    break;
  case '3':
    output = number1 * number2;
    break;
  case '4':
    output = number1 / number2;
    break;
  default:
    console.log('not a valid operation');
}
console.log(`The result is ${output}`);
}

calculator()

function anotherRound(){ 
  let anotherCalc = readline.question("would you like to make another calculation? y/n: ").toLowerCase();
  return anotherCalc==='y';
}

x = anotherRound();
while (x===true) {
  console.log("we're running another round")
  calculator();
  x = anotherRound();
}
console.log("thank you, type calculator() to run another calculation");