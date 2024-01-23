const apiKey = "97ef31728132456ba9e56fb5747fa534"; // Replace 'your_api_key' with your actual API key
const cityName = "new york";

// API endpoint URL
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

const city = document.querySelector(".weather h1");
const degree = document.querySelector(".weather span");
const icon = document.querySelector(".weather .icon");

function getWeather() {
  console.log(data);
}

document;

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
      city.innerHTML = data.name;
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      degree.innerHTML = `${data.main.temp} &deg;C`;
    })
    .catch((error) => {
      console.error("Error fetching Data: ", error);
    });
}


searchCity()