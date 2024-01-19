const URL = "http://localhost:8080/alumnos";

// Seleccionar elementos
const enviarBtn = document.getElementById("enviar");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const nota = document.getElementById("nota");
const titulo = document.querySelector("h2");

// Obtener ID de la URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

let alumno = {};

if (id !== null) {
  obtenerAlumno();
  titulo.innerText = "Editar Alumno";
}

function obtenerAlumno() {
  fetch(`${URL}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      alumno = data;

      // Cargar valores en los inputs
      nombre.value = alumno.nombre;
      apellido.value = alumno.apellido;
      nota.value = alumno.nota;

      console.log(alumno);
    });
}

function agregarAlumno(nombre, apellido, nota) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, apellido, nota }),
  };

  fetch(URL, requestOptions).then((res) => console.log(res));

  window.location.href = "index.html";
}

function actualizarAlumno(id, nombre, apellido, nota) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, apellido, nota }),
  };

  fetch(`${URL}/${id}`, requestOptions).then((res) => console.log(res));

  window.location.href = "index.html";
}

enviarBtn.addEventListener("click", function () {
  const nom = nombre.value.trim();
  const ape = apellido.value.trim();
  const not = nota.value;

  if (!nom || !ape || !not) {
    alert("Debes completar todos los campos");
    return;
  }

  if (not < 0 || not > 10) {
    alert("La nota debe estar entre 0 y 10");
    return;
  }

  if (id !== null) {
    actualizarAlumno(id, nom, ape, not);
  } else {
    agregarAlumno(nom, ape, not);
  }
});
