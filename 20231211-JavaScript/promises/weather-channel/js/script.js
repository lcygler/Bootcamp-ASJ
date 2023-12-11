const input = document.getElementById("input");
const enviar = document.getElementById("enviar");
const ciudad = document.getElementById("ciudad");
const temperatura = document.getElementById("temperatura");
const wicon = document.getElementById("wicon");
const descripcion = document.getElementById("descripcion");

enviar.addEventListener("click", getWeather);

function getWeather() {
  console.log(input.value);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=fdd533266e28101881f610f2b8f1ebe1`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("API Response:", data);
      ciudad.textContent = data.name;
      temperatura.innerHTML = data.main.temp + "<sup>°C</sup>";
      wicon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      descripcion.textContent = data.weather[0].description;
      document.querySelector(".container").style.visibility = "visible";
    })
    .catch((error) => {
      console.error("Ocurrió un error:", error);
    });
}
