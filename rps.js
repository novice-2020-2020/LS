function rockPaperScissors() {
  const readline = require('readline-sync');
  function rps() {
    function validUserInput() {
      while ([1, 2, 3].includes(userInput) === false) {
        console.log('please choose a valid input');
        userInput = parseInt(readline.question('Please enter your choice\n1 for Rock | 2 for Scissors | 3 for Paper: '));
      }
    }

    let userInput = parseInt(readline.question('Please enter your choice\n1 for Rock | 2 for Scissors | 3 for Paper: '));

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
    const computerInput = getRandomInt(3)+1;
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
      while (['y', 'n'].includes(playAgain) === false) {
        console.log('please enter a valid choice');
      }
    }

    let playAgainUserInput = readline.question("would you like to play again? Please 'y' for yes, 'n' for no ").toLowerCase();

    validPlayAgain(playAgainUserInput);

    console.log(playAgainUserInput);

    while (playAgainUserInput === 'y') {
      rps();
      playAgainUserInput = readline.question("would you like to play again? Please 'y' for yes, 'n' for no ").toLowerCase();
    }
  }
  playAgain();
  console.clear();
}

rockPaperScissors();
