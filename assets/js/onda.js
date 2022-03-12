// una sorpresa para los curiosos...

let wreck = document.getElementById("onda");
let prize = document.getElementById("sorpresa");
let exit = document.getElementById("exit");

wreck.addEventListener("click", () => {
  prize.style.display = "block";
});

exit.addEventListener("click", () => {
  prize.style.display = "none";
});
