const colores = [];
const cantidadColores = 6;

// Seleccionar elementos
const cuadrados = document.querySelectorAll(".square");
const nombreColor = document.getElementById("colorDisplay");
const mensaje = document.getElementById("message");
const h1 = document.getElementById("h1");
const reiniciar = document.getElementById("reset");
reiniciar.addEventListener("click", reiniciarJuego);

// Inicializar colores
for (let i = 0; i < cantidadColores; i++) {
  colores.push(generarColor());
}

// Elegir color ganador
const colorRandom = pickColor();
nombreColor.innerHTML = `${colorRandom.toUpperCase()}`;

// Inicializar cuadrados
for (let i = 0; i < cuadrados.length; i++) {
  cuadrados[i].style.backgroundColor = colores[i];

  cuadrados[i].addEventListener("click", () => {
    const cuadradoElegido = document.getElementById(`cuadrado${i + 1}`);
    const colorCuadrado = cuadradoElegido.style.backgroundColor;

    if (colorCuadrado === colorRandom) {
      mensaje.innerHTML = "¡Correcto!";
      h1.style.backgroundColor = colorRandom;
      changeColors(colorRandom);
    } else {
      cuadradoElegido.style.backgroundColor = "#232323";
      mensaje.innerHTML = "Inténtalo nuevamente";
    }
  });
}

// Generar número aleatorio
function generarNumero(numero) {
  return Math.floor(Math.random() * numero);
}

// Generar color aleatorio
function generarColor() {
  const rojo = generarNumero(256); // 0-255
  const verde = generarNumero(256); // 0-255
  const azul = generarNumero(256); // 0-255
  return `rgb(${rojo}, ${verde}, ${azul})`;
}

// Elegir un color aleatorio
function pickColor() {
  const colorRandom = generarNumero(cantidadColores);
  return colores[colorRandom];
}

// Cambiar color a todos los cuadrados
function changeColors(color) {
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = color;
  }
}

// Reiniciar juego
function reiniciarJuego() {
  window.location.reload();
}
