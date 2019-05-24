const getUserChoice = userInput => {
  userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput
  } else {
    console.log('Please choose rock, paper, or scissors!')
  }
}

let getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3);
  // let choice = '';
  if(number === 0){
    return 'rock'
  } else if(number === 1){
    return 'paper'
  } else if(number === 2){
    return 'scissors'
  }
  // return choice;
}

const determineWinner = (userChoice, computerChoice) => {
  // let winner = '';
  if(userChoice === 'bomb'){
    return 'You won!'
  }
  if(userChoice === computerChoice){
    return 'The game is a tie!'
  }

  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'scissors'){
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock'){
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
  // return winner;
}

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();