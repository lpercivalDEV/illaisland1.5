// una sorpresa para los curiosos...

let wreck = document.getElementById("onda");
let prize = document.getElementById("sorpresa");
let winnerWinnerChickenDinner = document.getElementById("sorpresaText");
let exit = document.getElementById("exit");
let title = document.createElement("h1");
let ptext = document.createElement("p");
let title2 = document.createElement("h3");
let ptext2 = document.createElement("p");

let appear = () => {
  title.innerHTML = "¡Felicidades!";
  ptext.innerHTML =
    "¡Encontraste el secreto! La palabra clave secreta es: Barahona. Introduce este código en el formulario de contacto para reclamar tu premio.";
  title2.innerHTML = "Congratulations!";
  ptext2.innerHTML =
    "You found the secret! The secret codeword is: Barahona. Enter this code in the contact form to claim your prize.";

  winnerWinnerChickenDinner.appendChild(title);
  winnerWinnerChickenDinner.appendChild(ptext);
  winnerWinnerChickenDinner.appendChild(title2);
  winnerWinnerChickenDinner.appendChild(ptext2);
};

let disappear = () => {
  winnerWinnerChickenDinner.removeChild(title);
  winnerWinnerChickenDinner.removeChild(ptext);
  winnerWinnerChickenDinner.removeChild(title2);
  winnerWinnerChickenDinner.removeChild(ptext2);
};

wreck.addEventListener("click", () => {
  prize.style.display = "block";
  appear();
});

exit.addEventListener("click", () => {
  disappear();
  prize.style.display = "none";
});
