const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
	return choices[Math.floor(Math.random() * 3)];
}

let computerWins = 0;
let playerWins = 0;

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	const scorePlayer = document.querySelector("#playerScore");
	const scoreComputer = document.querySelector("#computerScore");
	if (playerSelection === computerSelection) {
		alert("It's a Draw.");
	} else {
		if (playerSelection === "rock") {
			if (computerSelection === "scissors") {
				playerWins++;
				scorePlayer.textContent = `Player: ${playerWins}`;
			} else {
				computerWins++;
				scoreComputer.textContent = `Computer: ${computerWins}`;
			}
		} else if (playerSelection === "paper") {
			if (computerSelection === "rock") {
				playerWins++;
				scorePlayer.textContent = `Player: ${playerWins}`;
			} else {
				computerWins++;
				scoreComputer.textContent = `Computer: ${computerWins}`;
			}
		} else {
			if (computerSelection === "paper") {
				playerWins++;
				scorePlayer.textContent = `Player: ${playerWins}`;
			} else {
				computerWins++;
				scoreComputer.textContent = `Computer: ${computerWins}`;
			}
		}
	}
	const results = document.querySelector(".results");

	if (computerWins === 5) {
		const winMessage = document.createElement("p");
		winMessage.textContent = "Computer is the ultimate winner.";
		results.appendChild(winMessage);
		computerWins = 0;
		playerWins = 0;
	} else if (playerWins === 5) {
		const winMessage = document.createElement("p");
		winMessage.textContent = "Player is the ultimate winner.";
		results.appendChild(winMessage);
	}
}
