/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exportPageContents\": () => (/* binding */ exportPageContents)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n// create title function \"component\"\n// return title in a div\n\n\nconst createHeader = () => {\n    const createHeader = document.createElement(\"header\");\n    const headerContent = document.createElement(\"h1\");\n    createHeader.appendChild(headerContent);\n    headerContent.innerText = \"A Place by the Sea\";\n    createHeader.appendChild(headerContent);\n    return createHeader;\n}\n\nconst navButtons = () => {\n    const navBar = document.createElement(\"div\");\n    navBar.className = \"navbar\";\n\n    const homeBtn = document.createElement(\"button\");\n    homeBtn.classList.add(\"homeButton\");\n    homeBtn.textContent = \"Home\"\n    homeBtn.addEventListener('click', (e) => {\n        return (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    })\n\n    const menuBtn = document.createElement(\"button\");\n    menuBtn.classList.add(\"menuButton\");\n    menuBtn.textContent = \"Menu\"\n\n    const contactBtn = document.createElement(\"button\");\n    contactBtn.classList.add(\"contactButton\");\n    contactBtn.textContent = \"Contact\"\n\n    navBar.appendChild(homeBtn);\n    navBar.appendChild(menuBtn);\n    navBar.appendChild(contactBtn);\n    \n    return navBar;\n}\n\nconst backgroundImage = () => {\n    const myImage = new Image();\n    myImage.src = \"./assets/lighthouse.jpg\"\n    return myImage\n}\n\nconst exportPageContents = () => {\n    const mainContent = document.querySelector(\"#content\")\n    mainContent.appendChild(createHeader());\n    mainContent.appendChild(navButtons());\n    mainContent.appendChild(backgroundImage())\n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/config.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//                  PART ONE\n// function to return short bio and description\n\n\n//                  PART TWO\n\n\nconst createText = () => {\n    const createContainer = document.createElement('div');\n    const createText = document.createElement('p');\n    createContainer.appendChild(createText);\n    createText.innerText = \"Some inner text about the restaurant that makes you want to got there\";\n    return createContainer;\n}\n\n//                  PART THREEE\n\nconst exportHomePage = () => {\n    const mainContent = document.querySelector(\"#content\");\n    mainContent.appendChild(createText());\n    return mainContent;\n}\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportHomePage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\nconsole.log(\"Hello World!\")\n\n;\n\n(0,_config__WEBPACK_IMPORTED_MODULE_0__.exportPageContents)()\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;