//game functions

const choices = ["rock", "paper", "scissor"];
let computerWins = 0;
let playerWins = 0;
function getComputerChoice() {
	return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();

	playerMove.src = `img/${playerSelection}.svg`;
	computerMove.src = `img/${computerSelection}.svg`;

	function getWonMsg(player, computer) {
		return `${player.charAt(0).toUpperCase() + player.slice(1)} beats ${
			computer.charAt(0).toUpperCase() + computer.slice(1)
		}`;
	}
	function getLostMsg(player, computer) {
		return `${player} gets beaten by ${computer}`;
	}
	if (playerSelection === computerSelection) {
		scoreInfo.textContent = "It's a Tie.";
		scoreMsg.textContent = `${playerSelection} ties with ${computerSelection}`;
	} else {
		if (playerSelection === "rock") {
			if (computerSelection === "scissor") {
				playerWins++;
				scorePlayer.textContent = `Player: ${playerWins}`;
				scoreInfo.textContent = "You won.";
				scoreMsg.textContent = getWonMsg(playerSelection, computerSelection);
			} else {
				computerWins++;
				scoreComputer.textContent = `Computer: ${computerWins}`;
				scoreInfo.textContent = "You lost.";
				scoreMsg.textContent = getLostMsg(playerSelection, computerSelection);
			}
		} else if (playerSelection === "paper") {
			if (computerSelection === "rock") {
				playerWins++;
				scorePlayer.textContent = `Player: ${playerWins}`;
				scoreInfo.textContent = "You won.";
				scoreMsg.textContent = getWonMsg(playerSelection, computerSelection);
			} else {
				computerWins++;
				scoreComputer.textContent = `Computer: ${computerWins}`;
				scoreInfo.textContent = "You lost.";
				scoreMsg.textContent = getLostMsg(playerSelection, computerSelection);
			}
		} else {
			if (computerSelection === "paper") {
				playerWins++;
				scorePlayer.textContent = `Player: ${playerWins}`;
				scoreInfo.textContent = "You won.";
				scoreMsg.textContent = getWonMsg(playerSelection, computerSelection);
			} else {
				computerWins++;
				scoreComputer.textContent = `Computer: ${computerWins}`;
				scoreInfo.textContent = "You lost.";
				scoreMsg.textContent = getLostMsg(playerSelection, computerSelection);
			}
		}
		if (playerWins === 5 || computerWins === 5) {
			modal.style.display = "block";
			buttons.forEach((button) => {
				button.disabled = true;
			});
		}
	}
}

//ui part

const buttons = document.querySelectorAll(".gameBtn");
const modal = document.getElementById("modalTeste");
const restartBtn = document.getElementById("restartGame");
const playerMove = document.getElementById("playerMove");
const computerMove = document.getElementById("computerMove");

const scorePlayer = document.querySelector("#playerScore");
const scoreComputer = document.querySelector("#computerScore");
const scoreInfo = document.querySelector(".scoreInfo");
const scoreMsg = document.querySelector(".scoreMsg");
restartBtn.addEventListener("click", () => restartGame());

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		playRound(button.id, getComputerChoice());
	});
});

window.onclick = function (event) {
	//clicar fora do modal fecha o msm
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

function restartGame() {
	playerWins = 0;
	computerWins = 0;
	scorePlayer.textContent = `Player: ${playerWins}`;
	scoreComputer.textContent = `Computer: ${computerWins}`;
	modal.style.display = "none";
	playerMove.src = "img/question-mark.svg";
	computerMove.src = "img/question-mark.svg";
	buttons;
}
