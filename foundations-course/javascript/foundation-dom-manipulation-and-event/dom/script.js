const container = document.querySelector("#container");
const redP = document.createElement('p');
redP.style.cssText = "color : red;"
redP.textContent = "Hey I'm red!";
container.appendChild(redP);
const blueh3 = document.createElement('h3');
blueh3.style.cssText = "color : blue;";
blueh3.textContent = "I'm a blue h3!";
container.appendChild(blueh3);
const childDiv = document.createElement('div');
const divh1 = document.createElement('h1');
divh1.textContent = "I'm in a div";
childDiv.appendChild(divh1);
const divp = document.createElement('p');
divp.textContent = "ME TOO!";
childDiv.appendChild(divp);
container.appendChild(childDiv);