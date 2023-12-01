//* Agregá caminos
/*
Si la edad es negativa, que se muestre en la consola este mensaje: "Error, su edad no es válida."
Importante: No se deberá mostrar ningún otro mensaje.
Si tiene 21 años, además de darle la bienvenida, felicitalo por haber llegado a la mayoría de edad.
Si su edad es impar decile en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".
*/

let edad = parseInt(prompt("Ingrese su edad:"));

if (edad < 0) {
  alert("Error, su edad no es válida.");
} else if (edad < 18) {
  alert("No puede pasar al bar.");
} else if (edad < 21) {
  alert("Puede pasar al bar, pero no puede tomar alcohol.");
} else if (edad === 21) {
  alert("Puede pasar al bar.\n¡Felicitaciones por haber llegado a la mayoría de edad!");
} else {
  alert("Puede pasar al bar y tomar alcohol.");
}

if (edad >= 0 && edad % 2 !== 0) {
  alert("¿Sabías que tu edad es impar?");
}
