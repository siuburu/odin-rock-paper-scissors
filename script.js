const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
	return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	let result;
	if (playerSelection === computerSelection) {
		result = "It's a Draw.";
	} else {
		if (playerSelection === "rock") {
			if (computerSelection === "scissors") {
				result = "You win! Rock beats Scissors";
			} else {
				result = "You lose! Paper beats Rock";
			}
		} else if (playerSelection === "paper") {
			if (computerSelection === "rock") {
				result = "You win! Paper beats Rock";
			} else {
				result = "You lose! Scissors beats Paper";
			}
		} else {
			if (computerSelection === "paper") {
				result = "You win! Scissors beats Paper";
			} else {
				result = "You lose! Rock beats Scissors";
			}
		}
	}
	return result;
}
function game() {
	let computerWins = 0;
	let playerWins = 0;
	let result;
	for (let i = 0; i < 5; i++) {
		playerSelection = prompt("Rock, Paper or Scissors?", "Paper");
		result = playRound(playerSelection, getComputerChoice());
		if (result.includes("win")) {
			playerWins++;
			console.log(
				`You win. Score(Player x Computer):${playerWins} x ${computerWins}`
			);
		} else if (result.includes("lose")) {
			computerWins++;
			console.log(
				`You Lose. Score(Player x Computer):${playerWins} x ${computerWins}`
			);
		} else {
			console.log(
				result + ` Score(Player x Computer):${playerWins} x ${computerWins}`
			);
		}
	}
}
