let colores = [
  "rgb(240, 14, 128)",
  "rgb(143, 174, 110)",
  "rgb(61, 42, 163)",
  "rgb(149, 211, 73)",
  "rgb(211, 124, 73)",
  "rgb(211, 73, 84)",
];

let cuadrados = document.querySelectorAll(".square");
let nombreColor = document.getElementById("colorDisplay");
let mensaje = document.getElementById("message");
let h1 = document.getElementById("h1");

let colorRandom = pickColor();
nombreColor.innerHTML = colorRandom;

for (let i = 0; i < cuadrados.length; i++) {
  cuadrados[i].style.backgroundColor = colores[i];

  cuadrados[i].addEventListener("click", () => {
    let cuadradoElegido = document.getElementById(`cuadrado${i + 1}`);
    let colorCuadrado = cuadradoElegido.style.backgroundColor;

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
  let colorRandom = Math.floor(Math.random() * colores.length);
  let pickedColor = colores[colorRandom];
  return pickedColor;
}
