// Importing Function
import { test } from "./api.js";

function info() {
  alert("Simple Weather App.");
}

function getTime(unix) {
  let date = new Date(unix * 1000);

  const options = {
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
}

function getDate(unix) {
  let date = new Date(unix * 1000);

  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
}

getDate(23224234);

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Random City Generator

const Cities = [
  "Tokyo",
  "Delhi",
  "Shanghai",
  "Sao Paulo",
  "Mumbai",
  "Beijing",
  "Cairo",
  "Mexico City",
  "Osaka",
  "New York City",
  "Chongqing",
  "Istanbul",
  "Karachi",
  "Buenos Aires",
  "Kolkata",
  "Kinshasa",
  "Manila",
  "Tianjin",
  "Rio de Janeiro",
  "Lahore",
  "Guangzhou",
  "Bangalore",
  "Shenzhen",
  "Moscow",
  "Tehran",
  "Jakarta",
  "London",
  "Lima",
  "Bangkok",
  "Chengdu",
  "Nairobi",
  "Hong Kong",
  "Ho Chi Minh City",
  "Hyderabad",
  "Wuhan",
  "Ahmedabad",
  "Baghdad",
  "Paris",
  "Bogota",
  "Lisbon",
  "Riyadh",
  "Singapore",
  "Bucharest",
  "Luanda",
  "Berlin",
  "Kiev",
  "Brisbane",
  "Barcelona",
  "Sydney",
];

const cityList = document.querySelectorAll(".randomCity");

for (let i in cityList) {
  try {
    cityList[i].innerHTML = Cities[generateRandomNumber(1, Cities.length)];
  } catch (err) {
    console.log("Random Cities Generated..");
  }
}

cityList.forEach((city) => {
  city.addEventListener("click", () => {
    getDataS(city.innerHTML);

  });
});

// Getting City Name

const input = document.querySelector(".input-section input");
const search = document.querySelector(".search");

input.value = '';

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getDataS(input.value);
  }
});

search.addEventListener("click", () => {
  // console.log(input.value);
  getDataS(input.value);
});

// Display Weather

const weatherDisplay = document.querySelector(".weather-display");

// getData();

const apiKey = "97ef31728132456ba9e56fb5747fa534";
const apiKey2 = "04497a42fafb8d2ec86226fe9fccf74c";
const cityName = "johannesburg";

// API endpoint URL
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
let apiUrlH = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&appid=${apiKey2}&units=metric`;

function getData() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.weather[0].icon);
      const displayWeather = `
<div class="city-dateNtime">
<span class="date">${getDate(data.dt)}</span> |
<span class="time">local time: ${getTime(data.dt)}</span>
</div>
<div class="city-details">
<h1 class="city-name">${data.name}, ${data.sys.country}</h1>
<span class="weather-description">${data.weather[0].description}</span>
</div>
<div class="weather-details">
<div class="weather-summary">
  <div class="summary">
    <img
      src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"
      alt=""
    />
  </div>
  <div class="summary">
    <span class="degree">${Math.floor(data.main.temp)}<span>&deg;</span></span>
  </div>
  <div class="summary">
    <ul class="stats">
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="M480-80q-83 0-141.5-58.5T280-280q0-48 21-89.5t59-70.5v-320q0-50 35-85t85-35q50 0 85 35t35 85v320q38 29 59 70.5t21 89.5q0 83-58.5 141.5T480-80Zm-40-440h80v-40h-40v-40h40v-80h-40v-40h40v-40q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240Z"
          />
        </svg>
        real fell: <span> ${Math.floor(data.main.feels_like)}&deg;</span>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm0-80q100 0 170-68.5T720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180Z"
          />
        </svg>
        humidity:<span> ${Math.floor(data.main.humidity)}%</span>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="M750-614q-27 27-62 41t-70 14q-35 0-69-13.5T488-614l-75-75q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T267-689l-75 75-57-57 75-75q27-27 61-40.5t69-13.5q35 0 68.5 13.5T469-746l75 75q16 16 35 23.5t39 7.5q20 0 39.5-7.5T693-671l75-75 57 57-75 75Zm0 200q-27 27-61.5 40.5T619-360q-35 0-69.5-13.5T488-414l-75-75q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T267-489l-75 75-57-56 75-76q27-27 61-40.5t69-13.5q35 0 68.5 13.5T469-546l75 75q16 16 35 23.5t39 7.5q20 0 39.5-7.5T693-471l75-75 57 57-75 75Zm-1 200q-27 27-61 40.5T619-160q-35 0-69.5-13.5T488-214l-76-75q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T266-289l-75 75-56-56 75-76q27-27 61-40.5t69-13.5q35 0 68.5 13.5T469-346l75 75q16 16 35.5 23.5T619-240q20 0 39-7.5t35-23.5l75-75 56 57-75 75Z"
          />
        </svg>
        wind:<span> ${Math.floor(data.wind.speed)}km/h</span>
      </li>
    </ul>
  </div>
</div>
<ul class="weather-timestamp">
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"
      />
    </svg>
    rise: ${getTime(data.sys.sunrise)} 
  </li>
<span class="divider">|</span>
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="m734-556-56-58 86-84 56 56-86 86ZM80-160v-80h800v80H80Zm360-520v-120h80v120h-80ZM226-558l-84-86 56-56 86 86-58 56Zm71 158h366q-23-54-72-87t-111-33q-62 0-111 33t-72 87Zm-97 80q0-117 81.5-198.5T480-600q117 0 198.5 81.5T760-320H200Zm280-80Z"
      />
    </svg>
    set: ${getTime(data.sys.sunset)} 
  </li>
<span class="divider">|</span>
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M680-520v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM320-120q-83 0-141.5-58.5T120-320q0-48 21-89.5t59-70.5v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T320-120Zm-40-440h80v-160q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720v160Z"
      />
    </svg>
    high: ${Math.floor(data.main.temp_max)}&deg;
  </li>
<span class="divider">|</span>
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M560-640v-80h320v80H560ZM320-120q-83 0-141.5-58.5T120-320q0-48 21-89.5t59-70.5v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T320-120ZM200-320h240q0-29-12.5-54T392-416l-32-24v-280q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720v280l-32 24q-23 17-35.5 42T200-320Z"
      />
    </svg>
    low: ${Math.floor(data.main.temp_min)}&deg;
  </li>
</ul>
</div>
`;

      weatherDisplay.innerHTML = displayWeather;
    })
    .catch((error) => {
      console.error("Error fetching Data: ", error);
    });
}

getData();

function getDataS(Search) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        console.log('Errors..')

        alert('Invalid City')
        location.reload()

      }
      return response.json();
    })
    .then((data) => {
      console.log(data.weather[0].icon);
      const displayWeather = `
<div class="city-dateNtime">
<span class="date">${getDate(data.dt)}</span> |
<span class="time">local time: ${getTime(data.dt)}</span>
</div>
<div class="city-details">
<h1 class="city-name">${data.name}, ${data.sys.country}</h1>
<span class="weather-description">${data.weather[0].description}</span>
</div>
<div class="weather-details">
<div class="weather-summary">
  <div class="summary">
    <img
      src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"
      alt=""
    />
  </div>
  <div class="summary">
    <span class="degree">${Math.floor(data.main.temp)}<span>&deg;</span></span>
  </div>
  <div class="summary">
    <ul class="stats">
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="M480-80q-83 0-141.5-58.5T280-280q0-48 21-89.5t59-70.5v-320q0-50 35-85t85-35q50 0 85 35t35 85v320q38 29 59 70.5t21 89.5q0 83-58.5 141.5T480-80Zm-40-440h80v-40h-40v-40h40v-80h-40v-40h40v-40q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240Z"
          />
        </svg>
        real fell: <span> ${Math.floor(data.main.feels_like)}&deg;</span>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm0-80q100 0 170-68.5T720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180Z"
          />
        </svg>
        humidity:<span> ${Math.floor(data.main.humidity)}%</span>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="M750-614q-27 27-62 41t-70 14q-35 0-69-13.5T488-614l-75-75q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T267-689l-75 75-57-57 75-75q27-27 61-40.5t69-13.5q35 0 68.5 13.5T469-746l75 75q16 16 35 23.5t39 7.5q20 0 39.5-7.5T693-671l75-75 57 57-75 75Zm0 200q-27 27-61.5 40.5T619-360q-35 0-69.5-13.5T488-414l-75-75q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T267-489l-75 75-57-56 75-76q27-27 61-40.5t69-13.5q35 0 68.5 13.5T469-546l75 75q16 16 35 23.5t39 7.5q20 0 39.5-7.5T693-471l75-75 57 57-75 75Zm-1 200q-27 27-61 40.5T619-160q-35 0-69.5-13.5T488-214l-76-75q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T266-289l-75 75-56-56 75-76q27-27 61-40.5t69-13.5q35 0 68.5 13.5T469-346l75 75q16 16 35.5 23.5T619-240q20 0 39-7.5t35-23.5l75-75 56 57-75 75Z"
          />
        </svg>
        wind:<span> ${Math.floor(data.wind.speed)}km/h</span>
      </li>
    </ul>
  </div>
</div>
<ul class="weather-timestamp">
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"
      />
    </svg>
    rise: ${getTime(data.sys.sunrise)} 
  </li>
<span class="divider">|</span>
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="m734-556-56-58 86-84 56 56-86 86ZM80-160v-80h800v80H80Zm360-520v-120h80v120h-80ZM226-558l-84-86 56-56 86 86-58 56Zm71 158h366q-23-54-72-87t-111-33q-62 0-111 33t-72 87Zm-97 80q0-117 81.5-198.5T480-600q117 0 198.5 81.5T760-320H200Zm280-80Z"
      />
    </svg>
    set: ${getTime(data.sys.sunset)} 
  </li>
<span class="divider">|</span>
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M680-520v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM320-120q-83 0-141.5-58.5T120-320q0-48 21-89.5t59-70.5v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T320-120Zm-40-440h80v-160q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720v160Z"
      />
    </svg>
    high: ${Math.floor(data.main.temp_max)}&deg;
  </li>
<span class="divider">|</span>
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M560-640v-80h320v80H560ZM320-120q-83 0-141.5-58.5T120-320q0-48 21-89.5t59-70.5v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T320-120ZM200-320h240q0-29-12.5-54T392-416l-32-24v-280q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720v280l-32 24q-23 17-35.5 42T200-320Z"
      />
    </svg>
    low: ${Math.floor(data.main.temp_min)}&deg;
  </li>
</ul>
</div>
`;

      weatherDisplay.innerHTML = displayWeather;
    })
    .catch((error) => {
      console.error("Error fetching Data: ", error);
    });
}
