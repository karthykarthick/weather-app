/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// import './scss/styles.scss';

let loc = document.getElementById("location");
let tempIcon = document.getElementById("temp-icon");
let tempValue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxt = "https://cors-anywhere.herokuapp.com/";
      // const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4b0acdbf1b451ce9f57778d2b016642b`;
      const api = `${proxt}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4b0acdbf1b451ce9f57778d2b016642b`;
  
      fetch(api).then((response) => {
          return response.json();
        }).then((data) => {
          const { name } = data;
          const { feels_like } = data.main;
          const { id, main } = data.weather[0];
  
          loc.textContent = name;
          climate.textContent = main;
          tempValue.textContent = Math.round(feels_like - 273);
        });

      
    });
  }
});

/******/ })()
;
//# sourceMappingURL=app.js.map