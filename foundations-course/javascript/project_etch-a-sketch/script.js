const nbSquare = document.querySelector("#nbSquare");
const outputValue = document.querySelector("#outputValue");
const container = document.querySelector("#container");
const colorInput = document.querySelector("#colorInput");
const remove = document.querySelector("#remove");
const random = document.querySelector("#random");
const clean = document.querySelector("#clean");
let randomColor = false;

function createSquare(nb) {
	container.replaceChildren();
	nb = Number(nb);
	const nb2 = nb ** 2;
	const size = 1 / nb * 100;
	let className;
	for (let i = 0; i < nb2; i++) {
		let square = document.createElement("div");
		className = "square-border";
		square.classList.add(className, `color-${i}`);
		container.appendChild(square);
		square.style.minWidth = `${size}%`;
		square.style.minHeight = `${size}%`;

	}

}

function changeColor(e) {
	const classDom = e.target.classList;
	const temp = "." + classDom[1];
	let changeClass = document.querySelector(temp);
	if (randomColor) {
		const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
		colorInput.value = newColor;
		changeClass.style.backgroundColor = colorInput.value;
	}
	else {
		changeClass.style.backgroundColor = colorInput.value;
	}
}


createSquare(nbSquare.value);
nbSquare.addEventListener("input", () => {
	outputValue.textContent = nbSquare.value;
	createSquare(nbSquare.value);
});

container.addEventListener("mouseover", changeColor);

remove.addEventListener("click", () => {
	colorInput.value = "#FFFFFF";
});

random.addEventListener("click", () => {
	if (randomColor == false)
		randomColor = true;
	else if (randomColor == true)
		randomColor = false;
});

clean.addEventListener("click", () => {
	const node = container.childNodes;
	for (let i = 0; i < nbSquare.value ** 2; i++) {
		const white = `.color-${i}`;
		const cleanClass = document.querySelector(white);
		cleanClass.style.backgroundColor = "#FFFFFF"
	}
});