/* const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
	alert("Hello World");
});
const call = document.querySelector('#callback');
call.addEventListener('click', function (e) {

	if (e.target.style.background === 'blue') {
		e.target.style.background = '';
	}
	else {
		e.target.style.background = 'blue';
	}
}); */
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		alert("Hello, World!");
	})
});