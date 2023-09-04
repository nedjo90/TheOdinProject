function getComputerChoice() {
	let arrayRPP = ["Rock", "Paper", "Scissor"];
	let randomNumber = Math.floor(Math.random() * arrayRPP.length);
	return arrayRPP[randomNumber];
}

function playRound(player, computer) {
	player = player.toUpperCase();
	computer = computer.toUpperCase();
	if (player === "ROCK" && computer === "SCISSOR") {
		return ("You Win! Rock beats the Scissor");
	}
	else if (player === "ROCK" && computer === "PAPER") {
		return ("You Lose! Paper beats the Rock");
	}
	else if (player === "SCISSOR" && computer === "ROCK") {
		return ("You Lose! Rock beats the Scissor");
	}
	else if (player === "SCISSOR" && computer === "PAPER") {
		return ("You Win! Scissor beats the Paper");
	}
	else if (player === "PAPER" && computer === "ROCK") {
		return ("You Win! Paper beats the Rock");
	}
	else if (player === "PAPER" && computer === "SCISSOR") {
		return ("You Lose! Scissor beats the Paper");
	}
	else {
		return ("Equality!");
	}
}
const playerSelection = "Rock";
let computerSelection;
for (let i = 0; i < 5; i++) {
	computerSelection = getComputerChoice();
	console.log(playRound(playerSelection, computerSelection));
}