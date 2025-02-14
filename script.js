function playGame(playerChoice) {
  let choice = ["rock", "paper", "scissors"];
  let computerChoice = choice[Math.floor(Math.random() * choice.length)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = 'It\'s a tie!';
  }
  else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! ${playerChoice} beats ${computerChoice}`;
    }
    else {
    result = `You lose! ${computerChoice} beats ${playerChoice}`;
    }
    document.getElementById("result").textContent = result;
}
