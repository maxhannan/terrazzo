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

/***/ "./src/NavBar.js":
/*!***********************!*\
  !*** ./src/NavBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavBar\": () => (/* binding */ NavBar)\n/* harmony export */ });\nconst NavBar = (()=>{\n    let nav = document.createElement('div');\n    nav.classList.add('navBar');\n    const home = document.createElement('a');\n     home.classList.add('navlink');\n     home.classList.add('active');\n     home.id = 'home'\n     home.href = '#'\n     home.innerHTML = 'home'\n    const menu = document.createElement('a');\n     menu.classList.add('navlink');\n     menu.id = 'menu'\n     menu.href = '#'\n     menu.innerHTML = 'menu'\n    const about = document.createElement('a');\n     about.classList.add('navlink');\n     about.id = 'about'\n     about.href = '#'\n     about.innerHTML = 'about'\n     nav.appendChild(home)\n     nav.appendChild(menu)\n     nav.appendChild(about)\n    document.body.appendChild(nav);\n\n    const toggleActive = (section)=>{\n        switch(section){\n            case 'menu':\n                menu.classList.add('active');\n                about.classList.remove('active');\n                home.classList.remove('active');\n                break;\n            case 'about':\n                menu.classList.remove('active');\n                about.classList.add('active');\n                home.classList.remove('active');\n                break;\n            case 'home':\n                menu.classList.remove('active');\n                about.classList.remove('active');\n                home.classList.add('active');\n                break;\n        }\n        \n    }\n    return{\n        toggleActive\n    }\n})();\n\n\n\n\n//# sourceURL=webpack://terrazzo/./src/NavBar.js?");

/***/ }),

/***/ "./src/heroConstructor.js":
/*!********************************!*\
  !*** ./src/heroConstructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"heroFactory\": () => (/* binding */ heroFactory)\n/* harmony export */ });\nconst heroFactory = (section,msg)=>{\n    const hero = document.createElement('div')\n    hero.id = 'imgBox'\n    hero.style.backgroundImage = `url('./assets/${section}.jpg')`\n    const titleText = document.createElement('div')\n    titleText.classList.add('titleText');\n    const textContent = document.createElement('h3');\n    textContent.innerHTML = msg\n    titleText.appendChild(textContent);\n    hero.appendChild(titleText);\n    return {\n        hero\n    }\n}\n\n\n//# sourceURL=webpack://terrazzo/./src/heroConstructor.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heroConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroConstructor */ \"./src/heroConstructor.js\");\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ \"./src/NavBar.js\");\n\n\n\nconst content = document.querySelector('.content')\n\nfunction sleep(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n  \nconst tabswitch = async(e) =>{\n    console.log(e.target.id)\n    _NavBar__WEBPACK_IMPORTED_MODULE_1__.NavBar.toggleActive(e.target.id)\n    content.classList.toggle('hide')\n    await sleep(1000);\n    content.innerHTML = ''\n    let hero = (0,_heroConstructor__WEBPACK_IMPORTED_MODULE_0__.heroFactory)(e.target.id, e.target.id).hero;\n    content.appendChild(hero)\n    content.classList.toggle('hide')\n    \n}\nconst pageLoad = (()=>{\n    const navlinks = document.querySelectorAll('.navlink');\n    navlinks.forEach(link => {\n        link.addEventListener('click', tabswitch)\n    })\n    let hero = (0,_heroConstructor__WEBPACK_IMPORTED_MODULE_0__.heroFactory)('home', 'Terrazzo').hero;\n    content.appendChild(hero)\n})();\n\n\n\n//# sourceURL=webpack://terrazzo/./src/index.js?");

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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;