//* ¿Puedo jubilarme?
// Parte 1
// En este ejercicio, crearás un programa que le indique a las mujeres si están en edad, o no, de jubilarse.
// Importante: En Argentina, las mujeres pueden jubilarse a los 60 años.
const edadMujer = parseInt(prompt("Ingrese su edad:"));

if (edadMujer >= 60) {
  alert("Ya podés jubilarte!");
} else {
  alert("Todavía no podés jubilarte.");
}

// Parte 2
// En este ejercicio, modificarás tu programa para informar, tanto a las mujeres como a los hombres, si están en edad de jubilarse.
// Importante: En Argentina, los hombres pueden jubilarse a los 65 años.
const genero = prompt("Ingrese su género (H o M): ").toLowerCase();
const edad = parseInt(prompt("Ingrese su edad:"));

if (genero === "m") {
  edad >= 60 ? alert("Ya podés jubilarte!") : alert("Todavía no podés jubilarte.");
} else if (genero === "h") {
  edad >= 65 ? alert("Ya podés jubilarte!") : alert("Todavía no podés jubilarte.");
}

// Extra Bonus
// Optimizá tu código de modo que, todo el ejercicio, se resuelva con un solo if. Usá operadores lógicos y de relación.
const genero2 = prompt("Ingrese su género (H o M): ").toLowerCase();
const edad2 = parseInt(prompt("Ingrese su edad:"));

if ((genero2 === "m" && edad2 >= 60) || (genero2 === "h" && edad2 >= 65)) {
  alert("Ya podés jubilarte!");
} else {
  alert("Todavía no podés jubilarte.");
}
