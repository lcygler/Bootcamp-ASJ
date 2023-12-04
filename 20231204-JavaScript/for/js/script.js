//* Pirámide
const imprimirPiramide = () => {
  let numero;
  let linea;

  do {
    numero = parseInt(prompt("Ingrese un número:"));
  } while (numero < 1);

  // Pirámide normal
  for (let i = 1; i <= numero; i++) {
    linea = "";

    for (let j = 1; j <= i; j++) {
      linea += "*";
    }

    console.log(linea);
  }

  // Pirámide invertida
  for (let i = numero - 1; i > 0; i--) {
    linea = "";

    for (let j = 1; j <= i; j++) {
      linea += "*";
    }

    console.log(linea);
  }
};

//* Factorial
const calcularFactorial = () => {
  let numero;
  let factorial = 1;

  do {
    numero = parseInt(prompt("Ingrese un número:"));
  } while (numero < 0);

  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  alert(`El factorial de ${numero} es: ${factorial}`);
};

imprimirPiramide();
calcularFactorial();
