function addElement(i) {
	let newLi = document.createElement("li");
	let newContent = document.createTextNode(i);
	newLi.appendChild(newContent);
	let currentUl = document.getElementById("liste");
	currentUl.appendChild(newLi);
}

function fizzBuzz(FB) {
	let ulParent = document.getElementById("liste");
	ulParent.innerHTML = '';

	for (let i = 1; i <= FB; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			addElement("FizzBuzz");
		}
		else if (i % 3 === 0) {
			addElement("Fizz");
		}
		else if (i % 5 === 0) {
			addElement("Buzz");
		}
		else {
			addElement(i);
		}
	}
}

let nb = document.getElementById("nb");
nb.addEventListener("input", function () {
	fizzBuzz(nb.value);
});
