const URL = "http://localhost:8080/alumnos";
const tbody = document.querySelector("tbody");
let alumnos = [];

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    alumnos = data;
    console.log(alumnos);
    cargarAlumnos(alumnos);
  });

function cargarAlumnos(alumnos) {
  alumnos.forEach((alumno) => {
    const tr = document.createElement("tr");

    const id = document.createElement("td");
    const nombre = document.createElement("td");
    const apellido = document.createElement("td");
    const nota = document.createElement("td");

    const acciones = document.createElement("td");
    const editarBtn = document.createElement("button");
    const eliminarBtn = document.createElement("button");

    id.innerHTML = alumno.id;
    nombre.innerHTML = alumno.nombre;
    apellido.innerHTML = alumno.apellido;
    nota.innerHTML = alumno.nota;

    editarBtn.innerHTML = "Editar";
    editarBtn.classList.add("btn", "btn-outline-secondary", "me-2");

    eliminarBtn.innerHTML = "Eliminar";
    eliminarBtn.classList.add("btn", "btn-outline-danger");

    acciones.appendChild(editarBtn);
    acciones.appendChild(eliminarBtn);

    tr.appendChild(id);
    tr.appendChild(nombre);
    tr.appendChild(apellido);
    tr.appendChild(nota);
    tr.appendChild(acciones);

    tbody.appendChild(tr);

    editarBtn.addEventListener("click", () => {
      window.location.href = `form.html?id=${alumno.id}`;
    });

    eliminarBtn.addEventListener("click", () => {
      eliminarAlumno(alumno.id);
    });
  });
}

function eliminarAlumno(id) {
  const confirmar = confirm(`Estás seguro que deseas eliminar el alumno ${id}?`);

  if (confirmar) {
    fetch(`${URL}/${id}`, { method: "DELETE" }).then((res) => {
      console.log(res);
      window.location.reload(true);
    });
  }
}
