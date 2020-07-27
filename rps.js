function rockPaperScissors() {
  const readline = require('readline-sync');
  const VALID_CHOICES = [1, 2, 3];
  function rps() {
    function validUserInput(inp) {
      while (!VALID_CHOICES.includes(inp)) {
        console.log('please choose a valid input');
        inp = parseInt(readline.question('Please enter your choice\n1 for Rock | 2 for Scissors | 3 for Paper: '), 10);
      }
    }

    const userInput = parseInt(readline.question('Please enter your choice\n1 for Rock | 2 for Scissors | 3 for Paper: '), 10);

    validUserInput(userInput);

    switch (userInput) {
      case 1:
        console.log('You chose 1 - Rock');
        break;
      case 2:
        console.log('You chose 2 - Scissors');
        break;
      case 3:
        console.log('You chose 3 - Paper');
        break;
      default:
        console.log('This is not a valid choice');
    }

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    const computerInput = getRandomInt(3) + 1;
    switch (computerInput) {
      case 1:
        console.log('Computer chose 1 - Rock');
        break;
      case 2:
        console.log('Computer chose 2 - Scissors');
        break;
      case 3:
        console.log('Computer chose 3 - Paper');
        break;
      default:
        console.log("Computer couldn't choose a valid choice");
    }
    if (userInput === 1 && computerInput === 2) {
      console.log('You win!');
    } else if (userInput === 2 && computerInput === 1) {
      console.log('You loose!');
    } else if (userInput === 1 && computerInput === 3) {
      console.log('You loose!');
    } else if (userInput === 3 && computerInput === 1) {
      console.log('You win!');
    } else if (userInput === 2 && computerInput === 3) {
      console.log('You win!');
    } else if (userInput === 3 && computerInput === 2) {
      console.log('You loose!');
    } else if (userInput === computerInput) {
      console.log("It's a tie");
    }
  }

  rps();

  function playAgain() {
    function validPlayAgain(playAgain) {
      return ['y', 'n'].includes(playAgain);
    }

    let playAgainUserInput = readline.question("would you like to play again? Please 'y' for yes, 'n' for no ").toLowerCase();

    while (validPlayAgain(playAgainUserInput) === false) {
      console.log('Please enter a valid choice');
      playAgainUserInput = readline.question("would you like to play again? Please 'y' for yes, 'n' for no ").toLowerCase();
    }

    while (playAgainUserInput === 'y' || playAgainUserInput === 'yes') {
      rps();
      playAgainUserInput = readline.question("would you like to play again? Please 'y' for yes, 'n' for no ").toLowerCase();
    }
  }
  playAgain();
  console.clear();
}

rockPaperScissors();
