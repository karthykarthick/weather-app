/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

// CONCATENATED MODULE: ./src/images/storm.svg
/* harmony default export */ const storm = (__webpack_require__.p + "images/storm.svg");
// CONCATENATED MODULE: ./src/images/clouds.svg
/* harmony default export */ const clouds = (__webpack_require__.p + "images/clouds.svg");
// CONCATENATED MODULE: ./src/images/rain.svg
/* harmony default export */ const rain = (__webpack_require__.p + "images/rain.svg");
// CONCATENATED MODULE: ./src/images/snowflake.svg
/* harmony default export */ const snowflake = (__webpack_require__.p + "images/snowflake.svg");
// CONCATENATED MODULE: ./src/index.js







const loc = document.getElementById("location");
const tempIcon = document.getElementById("temp-icon");
const tempValue = document.getElementById("temp-value");
const climate = document.getElementById("climate");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

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
    console.log(weatherData);

    const { name } = weatherData;
    const { feels_like } = weatherData.main;
    const { id, main } = weatherData.weather[0];

    loc.textContent = name;
    climate.textContent = main;
    tempValue.textContent = Math.round(feels_like - 273);

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
          tempValue.textContent = Math.round(feels_like - 273);

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

/******/ })()
;
//# sourceMappingURL=app.js.map