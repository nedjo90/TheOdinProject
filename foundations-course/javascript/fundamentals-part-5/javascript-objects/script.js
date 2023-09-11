let user = {
	name: "John",
	id: "johnny57",
	age: 33,
	city: "metz",
	sexe: "m",
	login: true,
	"multi word property": "access with square brackets object[\"the property\"]",
}
const userInfo = document.querySelector("#user");
const userInfoDelete = document.querySelector("#userDelete");
const welcome = document.querySelector("#welcome");
welcome.textContent = user.id;
welcome.style.color = "#00F8F0"
for (const [info, value] of Object.entries(user)) {
	const displayInfo = document.createElement("li");
	displayInfo.textContent = `${info}: ${value}`;
	userInfo.appendChild(displayInfo);
}
delete user.age;
for (const [info, value] of Object.entries(user)) {
	const displayInfo = document.createElement("li");
	displayInfo.textContent = `${info}: ${value}`;
	userInfoDelete.appendChild(displayInfo);
}

/* let key = prompt("What do you want to know about the user?");
alert( user[key]); */


let fruit = ["apple", "pineapple"];

let bag = {
	fruit: fruit,
	number: [5, 10],
}

alert(`hey we have ${bag.number[0]} ${bag.fruit[0]} and ${bag.number[1]} ${bag.fruit[1]}`);

