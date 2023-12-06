const input = document.getElementById("input");
const parrafo = document.getElementById("parrafo");
input.addEventListener("keyup", convertirTexto);

function convertirTexto() {
  const textoIngresado = input.value;
  parrafo.textContent = reemplazarVocales(textoIngresado);
}

// Sin REGEX
function reemplazarVocales(texto) {
  const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let textoModificado = "";
  let caracter;

  for (let i = 0; i < texto.length; i++) {
    caracter = texto.charAt(i);

    if (vocales.includes(caracter)) {
      textoModificado += "_";
    } else {
      textoModificado += caracter;
    }
  }

  return textoModificado;
}

// Con REGEX
function reemplazarConRegex(texto) {
  const regex = /[aeiouAEIOU]/g;
  const textoModificado = texto.replace(regex, "_");
  return textoModificado;
}
