/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/clouds.svg":
/*!*******************************!*\
  !*** ./src/images/clouds.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/clouds.svg");

/***/ }),

/***/ "./src/images/rain.svg":
/*!*****************************!*\
  !*** ./src/images/rain.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/rain.svg");

/***/ }),

/***/ "./src/images/snowflake.svg":
/*!**********************************!*\
  !*** ./src/images/snowflake.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/snowflake.svg");

/***/ }),

/***/ "./src/images/storm.svg":
/*!******************************!*\
  !*** ./src/images/storm.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/storm.svg");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _src_images_storm_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/storm.svg */ "./src/images/storm.svg");
/* harmony import */ var _src_images_clouds_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/clouds.svg */ "./src/images/clouds.svg");
/* harmony import */ var _src_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/rain.svg */ "./src/images/rain.svg");
/* harmony import */ var _src_images_snowflake_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/images/snowflake.svg */ "./src/images/snowflake.svg");







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
      tempIcon.src = _src_images_storm_svg__WEBPACK_IMPORTED_MODULE_1__.default;
    } else if (id < 400 && id < 300) {
      tempIcon.src = _src_images_clouds_svg__WEBPACK_IMPORTED_MODULE_2__.default;
    } else if (id < 600 && id < 500) {
      tempIcon.src = _src_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__.default;
    } else if (id < 700 && id < 600) {
      tempIcon.src = _src_images_snowflake_svg__WEBPACK_IMPORTED_MODULE_4__.default;
    } else if (id < 800 && id < 700) {
      tempIcon.src = _src_images_clouds_svg__WEBPACK_IMPORTED_MODULE_2__.default;
    } else if (id == 800) {
      tempIcon.src = _src_images_clouds_svg__WEBPACK_IMPORTED_MODULE_2__.default;
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
            tempIcon.src = _src_images_storm_svg__WEBPACK_IMPORTED_MODULE_1__.default;
          } else if (id < 400 && id < 300) {
            tempIcon.src = _src_images_clouds_svg__WEBPACK_IMPORTED_MODULE_2__.default;
          } else if (id < 600 && id < 500) {
            tempIcon.src = _src_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__.default;
          } else if (id < 700 && id < 600) {
            tempIcon.src = _src_images_snowflake_svg__WEBPACK_IMPORTED_MODULE_4__.default;
          } else if (id < 800 && id < 700) {
            tempIcon.src = _src_images_clouds_svg__WEBPACK_IMPORTED_MODULE_2__.default;
          } else if (id == 800) {
            tempIcon.src = _src_images_clouds_svg__WEBPACK_IMPORTED_MODULE_2__.default;
          }
        });
    });
  }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=app.js.map