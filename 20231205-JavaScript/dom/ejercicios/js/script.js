let inputNombre = document.getElementById("input-nombre");
let inputApellido = document.getElementById("input-apellido");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  h1.innerText = inputNombre.value;
  h2.innerText = inputApellido.value;
  h2.style.color = "red";
});
