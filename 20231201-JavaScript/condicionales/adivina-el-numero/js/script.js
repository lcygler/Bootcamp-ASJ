//* Adiviná el número
// En un nuevo documento HTML, agregá un tag script y creá la Variable numeroSecreto. Ese número deberá ser igual a un entero.
// Preguntale al usuario cuál es el número secreto.
// Mostrale un mensaje que le indique al usuario si adivinó, o no, el número secreto.
// Indicale al usuario si el número ingresado es mayor o menor que el número secreto.

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
const numero = Number(prompt("Intenta adivinar el número secreto (entre 1 y 10):"));

if (numero === numeroSecreto) {
  alert("¡Adivinaste el número secreto!");

  const input = prompt("¿Querés jugar de nuevo? (S o N):");
  if (input.toLowerCase() === "s") {
    window.location.reload();
  }
} else {
  if (numero > numeroSecreto) {
    alert("El número secreto es menor.");
    window.location.reload();
  } else {
    alert("El número secreto es mayor.");
    window.location.reload();
  }
}
