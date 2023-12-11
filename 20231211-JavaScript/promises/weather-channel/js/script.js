// Obtener elementos
const input = document.getElementById("input");
const enviar = document.getElementById("enviar");
const ciudad = document.getElementById("ciudad");
const temperatura = document.getElementById("temperatura");
const wicon = document.getElementById("wicon");
const descripcion = document.getElementById("descripcion");
const container = document.querySelector(".container");

// Agregar eventos
enviar.addEventListener("click", getWeather);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getWeather();
  }
});

// Obtener clima
function getWeather() {
  const inputValue = input.value.trim();

  // Ciudad vacía
  if (inputValue === "") {
    alert("Por favor, ingrese una ciudad.");
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=fdd533266e28101881f610f2b8f1ebe1`
  )
    .then((response) => response.json())
    .then((data) => {
      // Respuesta API
      console.log("Respuesta API:", data);

      // Ciudad inválida
      if (data.cod === "404") {
        alert("Por favor, ingrese una ciudad válida.");
        input.value = "";
        return;
      }

      // Actualizar elementos
      ciudad.textContent = data.name;
      temperatura.innerHTML = data.main.temp + "<sup>°C</sup>";
      wicon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      descripcion.textContent = data.weather[0].description;
      container.style.visibility = "visible";
      input.value = "";
    })
    .catch((error) => {
      console.error("Ocurrió un error:", error);
    });
}
