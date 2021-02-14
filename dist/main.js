/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/js/all.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


/***/ }),

/***/ "./src/NavBar.js":
/*!***********************!*\
  !*** ./src/NavBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavBar\": () => (/* binding */ NavBar)\n/* harmony export */ });\nconst NavBar = (()=>{\n    let nav = document.createElement('div');\n    nav.classList.add('navBar');\n    const home = document.createElement('a');\n     home.classList.add('navlink');\n     home.classList.add('active');\n     home.id = 'home'\n     home.href = '#'\n     home.innerHTML = 'home'\n    const menu = document.createElement('a');\n     menu.classList.add('navlink');\n     menu.id = 'menu'\n     menu.href = '#'\n     menu.innerHTML = 'menu'\n    const about = document.createElement('a');\n     about.classList.add('navlink');\n     about.id = 'about'\n     about.href = '#'\n     about.innerHTML = 'about'\n     nav.appendChild(home)\n     nav.appendChild(menu)\n     nav.appendChild(about)\n    document.body.appendChild(nav);\n    let currentpage = 'home'\n    const getcurrent = () =>{\n        return currentpage;\n    }\n    \n    const toggleActive = (section)=>{\n        currentpage = section;\n        console.log({currentpage}, 'NAV');\n        switch(section){\n            case 'menu':\n                menu.classList.add('active');\n                about.classList.remove('active');\n                home.classList.remove('active');\n                break;\n            case 'about':\n                menu.classList.remove('active');\n                about.classList.add('active');\n                home.classList.remove('active');\n                break;\n            case 'home':\n                menu.classList.remove('active');\n                about.classList.remove('active');\n                home.classList.add('active');\n                break;\n        }\n        \n    }\n    return{\n        toggleActive,\n        getcurrent\n    }\n})();\n\n\n\n\n//# sourceURL=webpack://terrazzo/./src/NavBar.js?");

/***/ }),

/***/ "./src/heroConstructor.js":
/*!********************************!*\
  !*** ./src/heroConstructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"heroFactory\": () => (/* binding */ heroFactory)\n/* harmony export */ });\nconst heroFactory = (section,msg)=>{\n    const hero = document.createElement('div')\n    hero.id = 'imgBox'\n    hero.style.backgroundImage = `url('./assets/${section}.jpg')`\n    const titleText = document.createElement('div')\n    titleText.classList.add('titleText');\n    const textContent = document.createElement('h3');\n    textContent.innerHTML = `\n    ${msg}\n    ${section === 'menu'? \"<a id = 'openBtn' href ='#'><i class='fas fa-arrow-right fa-xs'></i></a>\": ''}\n    `\n    titleText.appendChild(textContent);\n    hero.appendChild(titleText);\n\n    return {\n        hero\n    }\n}\n\n\n//# sourceURL=webpack://terrazzo/./src/heroConstructor.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heroConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroConstructor */ \"./src/heroConstructor.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ \"./src/NavBar.js\");\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@fortawesome/fontawesome-free/js/all */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst content = document.querySelector('.content')\n\nfunction sleep(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n  \nconst tabswitch = async(e) =>{\n    let target = e.target.id;\n    let current = _NavBar__WEBPACK_IMPORTED_MODULE_2__.NavBar.getcurrent();\n    _NavBar__WEBPACK_IMPORTED_MODULE_2__.NavBar.toggleActive(target)\n   \n    console.log({target, current})\n    if(target === current){\n        return;\n    }\n\n    \n    content.classList.toggle('hide')\n    await sleep(200);\n    content.classList.toggle('close')\n    await sleep(1000);\n    content.innerHTML = ''\n    if(target === 'menu'){\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuFactory)(content);\n    }else{\n        let hero = (0,_heroConstructor__WEBPACK_IMPORTED_MODULE_0__.heroFactory)('home', 'Terrazzo').hero;\n        content.appendChild(hero) \n    }\n    content.classList.toggle('close')\n    await sleep(200);\n    content.classList.toggle('hide')\n    \n    \n}\nconst pageLoad = (()=>{\n    const navlinks = document.querySelectorAll('.navlink');\n    navlinks.forEach(link => {\n        link.addEventListener('click', tabswitch)\n    })\n    let hero = (0,_heroConstructor__WEBPACK_IMPORTED_MODULE_0__.heroFactory)('home', 'Terrazzo').hero;\n    content.appendChild(hero)\n})();\n\n\n\n//# sourceURL=webpack://terrazzo/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuFactory\": () => (/* binding */ menuFactory)\n/* harmony export */ });\n/* harmony import */ var _heroConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroConstructor */ \"./src/heroConstructor.js\");\n\n\nconst menuFactory =(content)=>{\n    let hero = (0,_heroConstructor__WEBPACK_IMPORTED_MODULE_0__.heroFactory)('menu', 'Menu').hero;\n    content.appendChild(hero)\n    let menuBox = document.createElement('div');\n    menuBox.classList.add('menuBox')\n    content.appendChild(menuBox)\n    let openBtn = document.querySelector('#openBtn');\n\n    const openMenu = ()=>{\n        menuBox.classList.toggle('open')\n    }\n    openBtn.addEventListener('click', openMenu);\n} \n\n\n\n//# sourceURL=webpack://terrazzo/./src/menu.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;