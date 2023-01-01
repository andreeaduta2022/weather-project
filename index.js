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
function formatDay(timestamp){
  let date=new Date (timestamp*1000);
  let day=date.getDay()
  let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  return days[day]
}
function getForecast(coordinates) {
  let apiKey="1a6432c5ca7b6f9b0bee45c98d54ea71";
  let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${apiKey}`
axios.get(apiUrl).then(displayForecast);
}
function displayForecast(response){
  let forecast=response.data.daily
  let forecastElement=document.querySelector("#forecast");
  let forecastHTML=`<div class="row">`; 
  forecast.forEach(function(forecastDay, index){if (index<5) {
    forecastHTML=forecastHTML+ `<div class="col-2">
    <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
    <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="" width="" />
    <div class="weather-forecast-temperatures">
    <span class="weather-forecast-temperature-max">${Math.round(forecastDay.temp.max)}°C</span>
    <span class="weather-forecast-temperature-min">${Math.round(forecastDay.temp.min)}°C</span>
    </div>
    </div>
    </div>
    `;}
  });
  forecastHTML=forecastHTML+`</div>`;
  forecastElement.innerHTML=forecastHTML
}
function getForecast(coordinates) {
  let apiKey="1a6432c5ca7b6f9b0bee45c98d54ea71";
  let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${apiKey}`
axios.get(apiUrl).then(displayForecast);
}
function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let humidityTitle=document.querySelector("#humidity-value");
  let windTitle=document.querySelector("#wind-value")
  let descriptionTitle=document.querySelector("#weather-description")
  let showTitle = document.querySelector("#temp-selector");
  let iconTitle=document.querySelector("#icon");
  showTitle.innerHTML = `${temp}°C`;
  humidityTitle.innerHTML=response.data.main.humidity;
  windTitle.innerHTML=response.data.wind.speed;
  descriptionTitle.innerHTML=response.data.weather[0].description;
  iconTitle.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconTitle.setAttribute("alt",response.data.weather[0].description);
  getForecast (response.data.coord)
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
