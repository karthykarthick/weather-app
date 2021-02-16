import "./scss/styles.scss";
import storm from "../src/images/storm.svg";
import clouds from "../src/images/clouds.svg";
import rain from "../src/images/rain.svg";
import snowflake from "../src/images/snowflake.svg";

const loc = document.getElementById("location");
const tempIcon = document.getElementById("temp-icon");
const tempValue = document.getElementById("temp-value");
const climate = document.getElementById("climate");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const temp = document.querySelector("#selectt");


function weatherConverter(feels_like) {
  temp.addEventListener("click", (e) => {
    let tempval = e.target.value;
    if (tempval == 1) {
      var celcius = Math.round(feels_like - 273.15);
      tempValue.textContent = celcius + "°C";
      return celcius;
    } else {
      var faren = feels_like;
      faren = ((feels_like - 273.15) * 9) / 5 + 32;
      faren = Math.round(faren);
      tempValue.textContent = faren + "°F";
      return faren;
    }
  });
}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(searchInput.value);
  searchInput.Value = "";
});

const getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=90582edac32da819f08413ad8ebbcb45`
    );

    const weatherData = await response.json();

    const { name } = weatherData;
    const { feels_like } = weatherData.main;
    const { id, main } = weatherData.weather[0];
    loc.textContent = name;
    climate.textContent = main;
    weatherConverter(feels_like);

    if (id < 300 && id < 200) {
      tempIcon.src = storm;
    } else if (id < 400 && id < 300) {
      tempIcon.src = clouds;
    } else if (id < 600 && id < 500) {
      tempIcon.src = rain;
    } else if (id < 700 && id < 600) {
      tempIcon.src = snowflake;
    } else if (id < 800 && id < 700) {
      tempIcon.src = clouds;
    } else if (id == 800) {
      tempIcon.src = clouds;
    }
  } catch (error) {
    alert("City Not Found");
  }
};

window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4b0acdbf1b451ce9f57778d2b016642b`;

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          const { name } = data;
          const { feels_like } = data.main;
          const { id, main } = data.weather[0];

          loc.textContent = name;
          climate.textContent = main;
          tempValue.textContent = Math.round(feels_like - 273) + "°C";

          if (id < 300 && id < 200) {
            tempIcon.src = storm;
          } else if (id < 400 && id < 300) {
            tempIcon.src = clouds;
          } else if (id < 600 && id < 500) {
            tempIcon.src = rain;
          } else if (id < 700 && id < 600) {
            tempIcon.src = snowflake;
          } else if (id < 800 && id < 700) {
            tempIcon.src = clouds;
          } else if (id == 800) {
            tempIcon.src = clouds;
          }
        });
    });
  }
});
