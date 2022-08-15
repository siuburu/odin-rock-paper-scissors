//game functions

const choices = ["rock", "paper", "scissors"];
let computerWins = 0;
let playerWins = 0;

function getComputerChoice() {
	return choices[Math.floor(Math.random() * 3)];
}
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
}

//ui part

const buttons = document.querySelectorAll("button");
const modal = document.getElementById("modalTeste");
const restartBtn = document.getElementById("restartGame");
restartBtn.addEventListener("click", () => restartGame());
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		playRound(button.id, getComputerChoice());
	});
});
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
function restartGame() {
	playerWins = 0;
	computerWins = 0;
	scorePlayer.textContent = `Player: ${playerWins}`;
	scoreComputer.textContent = `Computer: ${computerWins}`;
}
