//* Calcular promedio
/*
Que ingrese un numero, y en base a dicho numero, sumatoria de todos los numeros HASTA ese numero.
Mostrar promedio.

Extra: validar que lo ingresado sea un numero, en caso contrario, mostrar un alert avisando que el valor no es válido.
*/

const calcularPromedio = () => {
  let numero;
  let promedio;
  let contador = 1;
  let suma = 0;

  numero = parseInt(prompt("Ingrese un número:"));

  if (!isNaN(numero)) {
    while (contador <= numero) {
      suma += contador;
      contador++;
    }

    promedio = suma / numero;
    alert("El promedio es: " + promedio.toFixed(2));
  } else {
    alert("El valor no es válido.");
  }
};

//* Contador de positivos
/*
En este ejercicio deberás crear un programa que le pida al usuario que ingrese un número entero.
El programa terminará cuando se ingrese un número negativo.
Al terminar, mostrarle un mensaje con la cantidad de números positivos que ingresó.
*/

const contarPositivos = () => {
  let numero;
  let contador = 0;

  do {
    numero = parseInt(prompt("Ingrese un número entero:"));

    if (numero > 0) {
      contador++;
    }
  } while (numero >= 0);

  alert(`Ingresaste ${contador} números positivos.`);
};

//* FizzBuzz
/*
En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, teniendo en cuenta estos criterios:

Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
Si es múltiplo de 5, deberá imprimir "Buzz".
Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz".
*/

const fizzBuzz = () => {
  let i = 1;

  while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }

    i++;
  }
};

calcularPromedio();
contarPositivos();
fizzBuzz();
