const readline = require('readline-sync');
const rpsMessages = require('./rpsMessages.json');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard', 'x', 'l', 's', 'p', 'r'];

function computerInput() {
  const computerChoice = rpsMessages[VALID_CHOICES[Math.floor(Math.random() * VALID_CHOICES.length)]];
  console.log(`The computer chose ${computerChoice}`);
  return computerChoice;
}

function UserInput() {
  let userInput = String(readline.question('Please enter your option: ').toLowerCase());

  while (!VALID_CHOICES.includes(userInput)) {
    console.log('This is not a valid input. Please enter your choice again');
    console.log(rpsMessages.choices);
    userInput = readline.question('Please enter your option: ').toLowerCase();
  }

  console.log(`Your choice is ${rpsMessages[userInput]}`);
  return rpsMessages[userInput];
}

function userWins(choice, computerChoice) {
  if ((choice === 'Rock' && computerChoice === 'Scissors')
         || (choice === 'Rock' && computerChoice === 'Lizard')
         || (choice === 'Paper' && computerChoice === 'Rock')
         || (choice === 'Paper' && computerChoice === 'Spock')
         || (choice === 'Scissors' && computerChoice === 'Paper')
         || (choice === 'Scissors' && computerChoice === 'Lizard')
         || (choice === 'Lizard' && computerChoice === 'Paper')
         || (choice === 'Lizard' && computerChoice === 'Spock')
         || (choice === 'Spock' && computerChoice === 'Rock')
         || (choice === 'Spock' && computerChoice === 'Scissors')) {
    return true;
  }
  if (choice === computerChoice) {
    return 'tie';
  }

  return false;
}

function divider() {
  console.log('-------------------------------------');
}
let userWinCount = 0;
let computerWinCount = 0;
let gameCount = 1;

function rpsGame() {
  console.log(`${rpsMessages.welcome} Game ${gameCount}\n`);
  console.log(rpsMessages.choices);
  const userChoice = UserInput();
  const computerChoice = computerInput();
  const result = userWins(userChoice, computerChoice);

  if (result === true) {
    userWinCount += 1;
    console.log('You won!\n');
  } else if (result === false) {
    computerWinCount += 1;
    console.log('You lose!\n');
  } else {
    console.log("It's a TIE!!\n");
  }

  console.log(`Total games played: ${gameCount} | Your score: ${userWinCount} | Computer's score: ${computerWinCount} | Games tied: ${gameCount - computerWinCount - userWinCount}\n`);
  divider();
  gameCount += 1;
}

let repeat = 'y';

function playAgain(count) {
  const validRepeat = ['y', 'yes'];
  while (count <= 5 && validRepeat.includes(repeat)) {
    if (count > 5) {
      console.log('You\'ve played 5 games');
    } else if (count === 5) {
      rpsGame();
      count += 1;
      // console.log(count);
    } else {
      rpsGame();
      repeat = String(readline.question('Would you like to play again? ')).toLowerCase();
      count += 1;
    }
  }
}

playAgain(gameCount);
