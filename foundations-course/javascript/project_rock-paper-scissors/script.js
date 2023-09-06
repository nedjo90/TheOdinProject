function getComputerChoice() {
	let arrayRPP = ["Rock", "Paper", "Scissor"];
	let randomNumber = Math.floor(Math.random() * arrayRPP.length);
	return arrayRPP[randomNumber];
}

function playRound(player, computer) {
	player = player.toUpperCase();
	computer = computer.toUpperCase();
	if (player === "ROCK" && computer === "SCISSOR") {
		playerPt++;
		winnerBackground("#result",1, 0);
		return ("You Win! Rock beats the Scissor");
	}
	else if (player === "ROCK" && computer === "PAPER") {
		computerPt++;
		winnerBackground("#result",0, 1);
		return ("You Lose! Paper beats the Rock");
	}
	else if (player === "SCISSOR" && computer === "ROCK") {
		computerPt++;
		winnerBackground("#result",0, 1);
		return ("You Lose! Rock beats the Scissor");
	}
	else if (player === "SCISSOR" && computer === "PAPER") {
		playerPt++;
		winnerBackground("#result",1, 0);
		return ("You Win! Scissor beats the Paper");
	}
	else if (player === "PAPER" && computer === "ROCK") {
		playerPt++;
		winnerBackground("#result",1, 0);
		return ("You Win! Paper beats the Rock");
	}
	else if (player === "PAPER" && computer === "SCISSOR") {
		computerPt++;
		winnerBackground("#result",0, 1);
		return ("You Lose! Scissor beats the Paper");
	}
	else {
		winnerBackground("#result",0, 0);
		return ("Equality!");
	}
}

function winnerBackground(idName, one, two) {
	elt = document.querySelector(idName);
	if (one > two) {
		elt.classList.remove("equality");
		elt.classList.remove("computer");
		elt.classList.add("player");
	}
	else if (one < two) {
		elt.classList.remove("equality");
		elt.classList.remove("player");
		elt.classList.add("computer");
	}
	else {
		elt.classList.add("equality");
		elt.classList.remove("player");
		elt.classList.remove("computer");
	}
}

function handleButtonClick(event) {
	const playerSelection = event.target.textContent;
	const computerSelection = getComputerChoice();
	const divResult = document.querySelector("#result");
	const olVs = document.querySelector("#vs");
	const point = document.querySelector("#point");
	const newLi = document.createElement("li");
	if (playerPt === 5 || computerPt === 5) {
		divResult.textContent = "";
		olVs.replaceChildren();
		point.textContent = "";
		playerPt = 0;
		computerPt = 0;
		point.classList.remove("equality");
		point.classList.remove("player");
		point.classList.remove("computer");
	}
	const round = playRound(playerSelection, computerSelection);
	newLi.textContent = `${playerSelection} vs ${computerSelection}`;
	olVs.appendChild(newLi);
	if (playerPt === 5) {
		divResult.textContent = "YOU WIN!";
		winnerBackground("#result",1, 0);
	}
	else if (computerPt === 5) {
		divResult.textContent = "YOU LOSE!";
		winnerBackground("#result",0, 1);
	}
	else {
		divResult.textContent = round;
	}
	winnerBackground("#point", playerPt, computerPt);
	point.textContent = `Player = ${playerPt} Computer = ${computerPt}`;
}
let playerPt = 0;
let computerPt = 0;
const btnContainer = document.querySelector("#btn-container");
btnContainer.addEventListener("click", handleButtonClick);