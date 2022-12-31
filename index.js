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
if(hours<10){hours=`0${hours}`;}
let minutes = now.getMinutes();
if(minutes<10){minutes=`0${minutes}`;}
let dt = document.querySelector("#date-time");
dt.innerHTML = `${day} ${hours}:${minutes}`;
function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let humidityTitle=document.querySelector("#humidity-value");
  let windTitle=document.querySelector("#wind-value")
  let descriptionTitle=document.querySelector("#weather-description")
  let showTitle = document.querySelector("#temp-selector");
  showTitle.innerHTML = `${temp}°C`;
  humidityTitle.innerHTML=response.data.main.humidity;
  windTitle.innerHTML=response.data.wind.speed;
  descriptionTitle.innerHTML=response.data.weather[0].description;
}
function search(event) {
  event.preventDefault();
  let apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
  let city = document.querySelector("#city-search").value;
  let cityTitle = document.querySelector("#city-name");
  cityTitle.innerHTML = `${city}`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemp);
}
let form = document.querySelector("#form-search");
form.addEventListener("click", search);
