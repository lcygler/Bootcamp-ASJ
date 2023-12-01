// alert("Hola Mundo");

function saludar(nombre) {
  alert(`Hola, ${nombre}!`);
}

function ingresarTexto() {
  let texto = prompt("Ingrese un mensaje:");
  return texto;
}

function ingresarEdad() {
  let edad = prompt("Ingrese su edad:");
  return parseInt(edad);
}

function calcularEdad(edad) {
  return edad * 365;
}

function ingresarNumero(mensaje) {
  let numero = prompt(mensaje);
  return parseInt(numero);
}

function ingresarNumeroConComa(mensaje) {
  let numero = prompt(mensaje);
  return parseFloat(numero);
}

function sumarNumeros(num1, num2) {
  return num1 + num2;
}

function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

let nombreIngresado = prompt("Ingrese su nombre:");
saludar(nombreIngresado);

// Ejercicio 1
let texto = ingresarTexto();
console.log("La longitud del mensaje es " + texto.length);

// Ejercicio 2
let edad = ingresarEdad();
let edadEnDias = calcularEdad(edad);
console.log(`Su edad representa ${edadEnDias} días`);

// Ejercicio 3
let num1 = ingresarNumero("Ingrese primer número:");
let num2 = ingresarNumero("Ingrese segundo numero:");
let resultado = sumarNumeros(num1, num2);
console.log(`El resultado de sumar ${num1} y ${num2} es ${resultado}`);

// Ejercicio 4
// Parte 1
let edadActual = 28;
let edadMaxima = 100;
let snackFavorito = "papas fritas";
let snacksPorDia = 2;

let añosRestantes = edadMaxima - edadActual;
let snacksRestantes = añosRestantes * 365 * snacksPorDia;
alert(`Necesitarás ${snacksRestantes} snacks para que te alcancen hasta los ${edadMaxima} años.`);

let precioPorSnack = 55;
let gastoTotal = snacksRestantes * precioPorSnack;
alert(`Gastarás $${gastoTotal.toFixed(2)} en snacks durante el resto de tu vida.`);

// Parte 2
let diasDeViaje = 10;
let presupuesto = 500;
let comidasAlDia = 2;

let comidasTotales = diasDeViaje * comidasAlDia;
let gastoPorComida = presupuesto / comidasTotales;

alert(
  `Podés gastar $${gastoPorComida.toFixed(
    2
  )} en cada comida para que te alcance la plata durante los ${diasDeViaje} días de viaje.`
);

//* ES6
// Ejercicio 1
let nombre = "Gabriela";
let profesion = "programadora";
console.log(`${nombre} es ${profesion}`);

// Ejercicio 2
let precio = ingresarNumeroConComa("Ingrese el precio del artículo:");
let cantidad = ingresarNumero("Ingrese la cantidad:");
let total = calcularTotal(precio, cantidad);
console.log(`El monto total es: $${total}`);
