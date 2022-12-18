let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let dt = document.querySelector("#date-time");
dt.innerHTML = `${day} ${hours}:${minutes}`;
function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let showTitle = document.querySelector("#temp-selector");
  showTitle.innerHTML = `${temp}°C`;
}
function search(event) {
  event.preventDefault();
  let apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
  let city = document.querySelector("#city-search").value;
  let cityTitle = document.querySelector("#city-name");
  cityTitle.innerHTML = `${city}`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${url}&appid=${apiKey}`).then(showTemp);
}
let form = document.querySelector("#form-search");
form.addEventListener("click", search);