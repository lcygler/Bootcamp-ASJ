const colores = [
  "rgb(240, 14, 128)",
  "rgb(143, 174, 110)",
  "rgb(61, 42, 163)",
  "rgb(149, 211, 73)",
  "rgb(211, 124, 73)",
  "rgb(211, 73, 84)",
];

const cuadrados = document.querySelectorAll(".square");
const nombreColor = document.getElementById("colorDisplay");
const mensaje = document.getElementById("message");
const h1 = document.getElementById("h1");

const colorRandom = pickColor();
nombreColor.innerHTML = `${colorRandom.toUpperCase()}`;

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

// Cambiar color a todos los cuadrados
function changeColors(color) {
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = color;
  }
}

// Elegir un color aleatorio
function pickColor() {
  const colorRandom = Math.floor(Math.random() * colores.length);
  const pickedColor = colores[colorRandom];
  return pickedColor;
}
