//* Fibonacci
let numero;
let secuencia;

const ingresarNumero = () => {
  let numeroIngresado;
  let numeroValido;

  do {
    numeroIngresado = parseInt(prompt("Ingrese un número:"));
    numeroValido = !isNaN(numeroIngresado) & (numeroIngresado >= 1);

    if (!numeroValido) {
      alert("Ingrese un número positivo.");
    }
  } while (isNaN(numeroIngresado) || numeroIngresado < 1);

  return numeroIngresado;
};

const calcularFibonacci = (numero) => {
  let array = [0, 1];
  let numeroSiguiente;

  for (let i = 2; i < numero; i++) {
    numeroSiguiente = array[i - 1] + array[i - 2];
    array.push(numeroSiguiente);
  }

  return array;
};

numero = ingresarNumero();
secuencia = calcularFibonacci(numero);
console.log(`Secuencia de Fibonacci hasta ${numero}: ${secuencia.join(" ")}`);
