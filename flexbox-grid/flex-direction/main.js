const directionB = document.querySelector(".direction");
const justify = document.getElementById("justify-select");
const align = document.getElementById("align-select");
const directionT = document.querySelector(".row-col");
const flex = document.querySelector(".flex");


directionB.addEventListener("click",
	function () {
		if (flex.style.flexDirection === "column")
			flex.style.flexDirection = "column-reverse";
		else if (flex.style.flexDirection === "column-reverse") {
			flex.style.flexDirection = "row";
		}
		else if (flex.style.flexDirection === "row") {
			flex.style.flexDirection = "row-reverse";
		}
		else {
			flex.style.flexDirection = "column";
		}
		directionT.textContent = flex.style.flexDirection;
	}
)

justify.addEventListener("change",
	(event) => {
		flex.style.justifyContent = event.target.value;
	}
)
align.addEventListener("change",
	(event) => {
		flex.style.alignItems = event.target.value;
	}
)


