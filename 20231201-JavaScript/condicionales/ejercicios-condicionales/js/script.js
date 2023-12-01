//* Comparaciones
// Que compare 2 Strings y retorne un valor true.
console.log("hola" === "hola");

// Que compare 2 Strings y devuelva false.
console.log("hola" === "chau");

// Que involucre un String y un Número y retorne false.
console.log("hola" === 123);

// Que involucre un String y un Número y retorne true.
console.log("123" == 123);

//* Mis primeros condicionales
// Escribir una sentencia if que siempre ejecute su bloque de código.
if (true) {
  console.log("Hola");
}

// Escribir una sentencia if que nunca ejecute su bloque de código.
if (false) {
  console.log("Hola");
}

// Escribir una sentencia que le pregunte al usuario cómo está y, si responde que está "triste", le deje un mensaje de aliento en la consola.
const estadoAnimo = prompt("¿Cómo estás?");

if (estadoAnimo.toLowerCase() === "triste") {
  console.log("Ánimo, ¡vos podés!");
}

// Escribir una sentencia que le pregunte al usuario cuál es el número secreto.
// Importante: Solamente deberás advertirle con un mensaje en caso de que esté equivocado.
const numeroSecreto = parseInt(prompt("¿Cuál es el número secreto?"));

if (numeroSecreto !== 28) {
  console.log("Incorrecto. Inténtalo de nuevo.");
}

// Pedir al visitante que ingrese una contraseña cuando visite el sitio.
// Si es correcta, redirigilo usando esta línea de código: window.location = "http://www.google.com"
const contraseña = prompt("Ingrese la contraseña:");

if (contraseña === "123456") {
  window.location = "http://www.google.com";
} else {
  console.log("Contraseña incorrecta.");
}

//* Par o Impar
// Pedile al usuario que ingrese un número para que tu programa evalúe si es par o impar.
// Usá la estructura condicional if...else.
const numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
  console.log("El número es par.");
} else {
  console.log("El número es impar.");
}
