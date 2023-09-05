const result = document.querySelector("#result");

function square() {
	for (let i = 1; i < 100; i++) {
		const produit = `${i} x ${i} = ${i * i}`;
		result.textContent += `${produit}\n`;
	}
	result.textContent += '\nFinished!\n\n';
}

function cleaning() {
	result.textContent = "";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", square);
clearBtn.addEventListener("click", cleaning);
