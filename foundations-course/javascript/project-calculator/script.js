let numberX = 0;
let numberY = 0;
let change = true;
let operation = 0;
let decimal = false;

const btnClick = document.querySelectorAll("button");
const display = document.querySelector("#display");

function calculate() {
	let floatX = parseFloat(numberX);
	let floatY = parseFloat(numberY);
	console.log(floatX, floatY);
	if (operation === "+") {
		floatX += +floatY;
		console.log(floatX);
	}
	else if (operation === "-") {
		floatX -= floatY;
	}
	else if (operation === "*") {
		floatX *= floatY;
	}
	else if (operation === "/") {
		floatX /= floatY;
	}
	numberX = floatX.toFixed(10).toString();
	if (numberX.includes(".")) {
		while (numberX[numberX.length - 1] == 0 || numberX[numberX.length - 1] == ".") {
			numberX = numberX.slice(0, numberX.length - 1);
		}
	}
	numberY = 0;
	operation = 0;
	decimal = false;
	display.textContent = numberX;
}


btnClick.forEach((item) => {
	item.addEventListener('click', () => {
		const clickedElement = item.textContent;
		if (clickedElement >= 0 && clickedElement <= 9) {
			if (change) {
				if (decimal && numberX % 1 === 0) {
					numberX += clickedElement;
				}
				else if (decimal) {
					numberX += clickedElement;
				}
				else {
					numberX = (numberX * 10) + +clickedElement;
				}
				display.textContent = numberX;
			}
			else {
				if (decimal && numberY % 1 === 0) {
					numberY += clickedElement;
				}
				else if (decimal) {
					numberY += clickedElement;
				}
				else {
					numberY = (numberY * 10) + +clickedElement;
				}
				display.textContent = numberY;
			}
		}
		else if (clickedElement === "=") {
			calculate();
		}
		else if (clickedElement === "+" || clickedElement === "-" || clickedElement === "*" || clickedElement === "/") {
			change = false;
			decimal = false;
			if (operation === 0) {
				operation = clickedElement;
				console.log("la");
			}
			else if (clickedElement === "/" && numberY === 0) {
				alert("Can't divide by 0!!!")
			}
			else {
				calculate();
				operation = clickedElement;
				console.log("ici");
			}
		}
		else if (clickedElement === "D") {
			if (change) {
				numberX = numberX.slice(0, numberX.length - 1);
				display.textContent = numberX;
			}
			else {
				numberY = numberY.slice(0, numberY.length - 1);
				display.textContent = numberY;
			}
		}
		else if (clickedElement === "C") {
			if (change) {
				numberX = 0;
				decimal = false;
				display.textContent = numberX;
			}
			else {
				numberY = 0;
				decimal = false;
				display.textContent = numberY;
			}
		}
		else if (clickedElement === "AC") {
			numberX = 0;
			numberY = 0;
			change = true;
			operation = 0;
			decimal = false;
			display.textContent = numberX;
		}
		if (clickedElement === ".") {
			decimal = true;
			if (change) {
				numberX += ".";
				display.textContent = numberX;
			}
			else {
				numberY += ".";
				display.textContent = numberY;
			}
		}
		console.log(`x = ${numberX} y = ${numberY} // operation = ${operation} // change = ${change} // click = ${clickedElement}`);
	})
});