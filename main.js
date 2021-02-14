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

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DEFAULT_ID\": () => (/* binding */ DEFAULT_ID),\n/* harmony export */   \"Loader\": () => (/* binding */ Loader)\n/* harmony export */ });\n// do not edit .js files directly - edit src/index.jst\n\n\n\nvar fastDeepEqual = function equal(a, b) {\n  if (a === b) return true;\n\n  if (a && b && typeof a == 'object' && typeof b == 'object') {\n    if (a.constructor !== b.constructor) return false;\n\n    var length, i, keys;\n    if (Array.isArray(a)) {\n      length = a.length;\n      if (length != b.length) return false;\n      for (i = length; i-- !== 0;)\n        if (!equal(a[i], b[i])) return false;\n      return true;\n    }\n\n\n\n    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;\n    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();\n    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();\n\n    keys = Object.keys(a);\n    length = keys.length;\n    if (length !== Object.keys(b).length) return false;\n\n    for (i = length; i-- !== 0;)\n      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;\n\n    for (i = length; i-- !== 0;) {\n      var key = keys[i];\n\n      if (!equal(a[key], b[key])) return false;\n    }\n\n    return true;\n  }\n\n  // true if both NaN, false otherwise\n  return a!==a && b!==b;\n};\n\n/**\r\n * Copyright 2019 Google LLC. All Rights Reserved.\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at.\r\n *\r\n *      Http://www.apache.org/licenses/LICENSE-2.0.\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\r\nconst DEFAULT_ID = \"__googleMapsScriptId\";\r\n/**\r\n * [[Loader]] makes it easier to add Google Maps JavaScript API to your application\r\n * dynamically using\r\n * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).\r\n * It works by dynamically creating and appending a script node to the the\r\n * document head and wrapping the callback function so as to return a promise.\r\n *\r\n * ```\r\n * const loader = new Loader({\r\n *   apiKey: \"\",\r\n *   version: \"weekly\",\r\n *   libraries: [\"places\"]\r\n * });\r\n *\r\n * loader.load().then(() => {\r\n *   const map = new google.maps.Map(...)\r\n * })\r\n * ```\r\n */\r\nclass Loader {\r\n    /**\r\n     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set\r\n     * using this library, instead the defaults are set by the Google Maps\r\n     * JavaScript API server.\r\n     *\r\n     * ```\r\n     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});\r\n     * ```\r\n     */\r\n    constructor({ apiKey, channel, client, id = DEFAULT_ID, libraries = [], language, region, version, mapIds, nonce, retries = 3, url = \"https://maps.googleapis.com/maps/api/js\", }) {\r\n        this.CALLBACK = \"__googleMapsCallback\";\r\n        this.callbacks = [];\r\n        this.done = false;\r\n        this.loading = false;\r\n        this.errors = [];\r\n        this.version = version;\r\n        this.apiKey = apiKey;\r\n        this.channel = channel;\r\n        this.client = client;\r\n        this.id = id || DEFAULT_ID; // Do not allow empty string\r\n        this.libraries = libraries;\r\n        this.language = language;\r\n        this.region = region;\r\n        this.mapIds = mapIds;\r\n        this.nonce = nonce;\r\n        this.retries = retries;\r\n        this.url = url;\r\n        if (Loader.instance) {\r\n            if (!fastDeepEqual(this.options, Loader.instance.options)) {\r\n                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);\r\n            }\r\n            return Loader.instance;\r\n        }\r\n        Loader.instance = this;\r\n    }\r\n    get options() {\r\n        return {\r\n            version: this.version,\r\n            apiKey: this.apiKey,\r\n            channel: this.channel,\r\n            client: this.client,\r\n            id: this.id,\r\n            libraries: this.libraries,\r\n            language: this.language,\r\n            region: this.region,\r\n            mapIds: this.mapIds,\r\n            nonce: this.nonce,\r\n            url: this.url,\r\n        };\r\n    }\r\n    /**\r\n     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].\r\n     *\r\n     * @ignore\r\n     */\r\n    createUrl() {\r\n        let url = this.url;\r\n        url += `?callback=${this.CALLBACK}`;\r\n        if (this.apiKey) {\r\n            url += `&key=${this.apiKey}`;\r\n        }\r\n        if (this.channel) {\r\n            url += `&channel=${this.channel}`;\r\n        }\r\n        if (this.client) {\r\n            url += `&client=${this.client}`;\r\n        }\r\n        if (this.libraries.length > 0) {\r\n            url += `&libraries=${this.libraries.join(\",\")}`;\r\n        }\r\n        if (this.language) {\r\n            url += `&language=${this.language}`;\r\n        }\r\n        if (this.region) {\r\n            url += `&region=${this.region}`;\r\n        }\r\n        if (this.version) {\r\n            url += `&v=${this.version}`;\r\n        }\r\n        if (this.mapIds) {\r\n            url += `&map_ids=${this.mapIds.join(\",\")}`;\r\n        }\r\n        return url;\r\n    }\r\n    /**\r\n     * Load the Google Maps JavaScript API script and return a Promise.\r\n     */\r\n    load() {\r\n        return this.loadPromise();\r\n    }\r\n    /**\r\n     * Load the Google Maps JavaScript API script and return a Promise.\r\n     *\r\n     * @ignore\r\n     */\r\n    loadPromise() {\r\n        return new Promise((resolve, reject) => {\r\n            this.loadCallback((err) => {\r\n                if (!err) {\r\n                    resolve();\r\n                }\r\n                else {\r\n                    reject(err);\r\n                }\r\n            });\r\n        });\r\n    }\r\n    /**\r\n     * Load the Google Maps JavaScript API script with a callback.\r\n     */\r\n    loadCallback(fn) {\r\n        this.callbacks.push(fn);\r\n        this.execute();\r\n    }\r\n    /**\r\n     * Set the script on document.\r\n     */\r\n    setScript() {\r\n        if (document.getElementById(this.id)) {\r\n            // TODO wrap onerror callback for cases where the script was loaded elsewhere\r\n            this.callback();\r\n            return;\r\n        }\r\n        const url = this.createUrl();\r\n        const script = document.createElement(\"script\");\r\n        script.id = this.id;\r\n        script.type = \"text/javascript\";\r\n        script.src = url;\r\n        script.onerror = this.loadErrorCallback.bind(this);\r\n        script.defer = true;\r\n        script.async = true;\r\n        if (this.nonce) {\r\n            script.nonce = this.nonce;\r\n        }\r\n        document.head.appendChild(script);\r\n    }\r\n    deleteScript() {\r\n        const script = document.getElementById(this.id);\r\n        if (script) {\r\n            script.remove();\r\n        }\r\n    }\r\n    resetIfRetryingFailed() {\r\n        const possibleAttempts = this.retries + 1;\r\n        if (this.done && !this.loading && this.errors.length >= possibleAttempts) {\r\n            this.deleteScript();\r\n            this.done = false;\r\n            this.loading = false;\r\n            this.errors = [];\r\n        }\r\n    }\r\n    loadErrorCallback(e) {\r\n        this.errors.push(e);\r\n        if (this.errors.length <= this.retries) {\r\n            const delay = this.errors.length * Math.pow(2, this.errors.length);\r\n            console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);\r\n            setTimeout(() => {\r\n                this.deleteScript();\r\n                this.setScript();\r\n            }, delay);\r\n        }\r\n        else {\r\n            this.onerrorEvent = e;\r\n            this.callback();\r\n        }\r\n    }\r\n    setCallback() {\r\n        window.__googleMapsCallback = this.callback.bind(this);\r\n    }\r\n    callback() {\r\n        this.done = true;\r\n        this.loading = false;\r\n        this.callbacks.forEach((cb) => {\r\n            cb(this.onerrorEvent);\r\n        });\r\n        this.callbacks = [];\r\n    }\r\n    execute() {\r\n        if (window.google && window.google.maps && window.google.maps.version) {\r\n            console.warn(\"Aborted attempt to load Google Maps JS with @googlemaps/js-api-loader.\" +\r\n                \"This may result in undesirable behavior as script parameters may not match.\");\r\n            this.callback();\r\n        }\r\n        this.resetIfRetryingFailed();\r\n        if (this.done) {\r\n            this.callback();\r\n        }\r\n        else {\r\n            if (this.loading) ;\r\n            else {\r\n                this.loading = true;\r\n                this.setCallback();\r\n                this.setScript();\r\n            }\r\n        }\r\n    }\r\n}\n\n\n//# sourceMappingURL=index.esm.js.map\n\n\n//# sourceURL=webpack://terrazzo/./node_modules/@googlemaps/js-api-loader/dist/index.esm.js?");

/***/ }),

/***/ "./src/NavBar.js":
/*!***********************!*\
  !*** ./src/NavBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavBar\": () => (/* binding */ NavBar)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\nconst NavBar = (()=>{\n    let nav = document.createElement('div');\n    nav.classList.add('navBar');\n    \n    const home = document.createElement('a');\n     home.classList.add('navlink');\n     home.classList.add('active');\n     home.id = 'home'\n     home.href = '#'\n     home.innerHTML = 'home'\n    const menu = document.createElement('a');\n     menu.classList.add('navlink');\n     menu.id = 'menu'\n     menu.href = '#'\n     menu.innerHTML = 'menu'\n    const about = document.createElement('a');\n     about.classList.add('navlink');\n     about.id = 'about'\n     about.href = '#'\n     about.innerHTML = 'about'\n     nav.appendChild(home)\n     nav.appendChild(menu)\n     nav.appendChild(about)\n    document.body.appendChild(nav);\n    \n    \n    let currentpage = 'home'\n    const getcurrent = () =>{\n        return currentpage;\n    }\n    \n    const toggleActive = async(section)=>{\n        currentpage = section;\n        console.log({currentpage}, 'NAV');\n        switch(section){\n            case 'menu':\n                menu.classList.add('menupage')\n                about.classList.add('menupage')\n                home.classList.add('menupage')\n                about.classList.remove('active');\n                menu.classList.add('active');\n                home.classList.remove('active');\n                await (0,_index__WEBPACK_IMPORTED_MODULE_0__.sleep)(1500);\n                nav.classList.add('whiteBack')\n                break;\n            case 'about':\n                menu.classList.add('menupage')\n                about.classList.add('menupage')\n                home.classList.add('menupage')\n                menu.classList.remove('active');\n                about.classList.add('active');\n                home.classList.remove('active');\n                await (0,_index__WEBPACK_IMPORTED_MODULE_0__.sleep)(1500);\n                nav.classList.add('whiteBack')\n                break;\n            case 'home':\n                nav.classList.remove('whiteBack')\n                menu.classList.remove('menupage')\n                about.classList.remove('menupage')\n                home.classList.remove('menupage')\n                menu.classList.remove('active');\n                about.classList.remove('active');\n                home.classList.add('active');\n                break;\n        }\n        \n    }\n    return{\n        toggleActive,\n        getcurrent\n    }\n})();\n\n\n\n\n//# sourceURL=webpack://terrazzo/./src/NavBar.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutFactory\": () => (/* binding */ aboutFactory)\n/* harmony export */ });\n/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ \"./node_modules/@googlemaps/js-api-loader/dist/index.esm.js\");\n\n\nconst aboutFactory = (content) =>{\n    let map = document.createElement('div');\n    map.id = 'map'\n    \n    content.appendChild(map)\n    let aboutContainer = document.createElement('div');\n    aboutContainer.classList.add('aboutContainer');\n    aboutContainer.innerHTML = `\n    <h2 id = 'aboutHead' >restaurant</h2>\n        <p id = 'para'>\n        ***Terrazzo's committment to hospitality begins long before you sit down at our table. \n        We reopen Terrazzo in the same way that has guided us since opening our doors 17 years ago: \n        with keen attention to detail, warmth and hospitality, and with the goal of making happy \n        memories for our guests.\n        <br><br>\n        Terrazzo is now taking reservations for February and beyond, beginning on Valentine's Day. \n        <br><br>\n        We will be offering a special menu from <b>Chef de Cuisine Corey Chow</b>, and a wine accompaniment \n        designed by <b>Beverage Director, Michel Couvreux</b>.\n        <br><br>\n        Join us for our Chef's Tasting menus Tuesday to Saturday.<br><br>\n        Seatings begin at 5:00pm and 7:30pm.</p>\n    `\n    \n    \n    content.appendChild(aboutContainer)\n    \n    \n    //MAPS API\n    const loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__.Loader({\n        apiKey: \"AIzaSyAzvI9cu1Zk8OegSCLn8Yv0BTagQSWDMFQ\",\n        version: \"weekly\",\n      });\n      loader.load().then(() => {\n        const myLatLng = { lat: 44.986520, lng: -93.258910};\n        map = new google.maps.Map(document.getElementById(\"map\"), {\n          center: myLatLng,\n          zoom: 14,\n          disableDefaultUI: true,\n          styles : [\n            {\n              \"elementType\": \"geometry\",\n              \"stylers\": [\n                {\n                  \"color\": \"#f5f5f5\"\n                }\n              ]\n            },\n            {\n              \"elementType\": \"labels.icon\",\n              \"stylers\": [\n                {\n                  \"visibility\": \"off\"\n                }\n              ]\n            },\n            {\n              \"elementType\": \"labels.text.fill\",\n              \"stylers\": [\n                {\n                  \"color\": \"#616161\"\n                }\n              ]\n            },\n            {\n              \"elementType\": \"labels.text.stroke\",\n              \"stylers\": [\n                {\n                  \"color\": \"#f5f5f5\"\n                }\n              ]\n            },\n            {\n              \"featureType\": \"administrative.land_parcel\",\n              \"elementType\": \"labels.text.fill\",\n              \"stylers\": [\n                {\n                  \"color\": \"#bdbdbd\"\n                }\n              ]\n            },\n            {\n              \"featureType\": \"poi\",\n              \"elementType\": \"geometry\",\n              \"stylers\": [\n                {\n                  \"color\": \"#eeeeee\"\n                }\n              ]\n            },\n            {\n              \"featureType\": \"poi\",\n              \"elementType\": \"labels.text.fill\",\n              \"stylers\": [\n                {\n                  \"color\": \"#757575\"\n                }\n              ]\n            },\n            {\n              \"featureType\": \"poi.park\",\n              \"elementType\": \"geometry\",\n              \"stylers\": [\n                {\n                  \"color\": \"#e5e5e5\"\n                }\n              ]\n            },\n            {\n              \"featureType\": \"poi.park\",\n              \"elementType\": \"labels.text.fill\",\n              \"stylers\": [\n                {\n                  \"color\": \"#9e9e9e\"\n                }\n              ]\n            },\n            {\n              \"featureType\": \"road\",\n              \"elementType\": \"geometry\",\n              \"stylers\": [\n                {\n                  \"color\": \"#ffffff\"\n                }\n              ]\n            },\n            {\n              \"featureType\": \"road.arterial\",\n              \"elementType\": \"labels.text.fill\",\n              \"stylers\": [\n                {\n                  \"color\": \"#757575\"\n                }\n              ]\n            },\n            {\n              \"featureType\": \"road.highway\",\n              \"elementType\": \"geometry\",\n              \"stylers\": [\n                {\n                  \"color\": \"#dadada\"\n                }\n              ]\n            },\n            {\n              \"featureType\": \"road.highway\",\n              \"elementType\": \"labels.text.fill\",\n              \"stylers\": [\n                {\n                  \"color\": \"#616161\"\n                }\n              ]\n            },\n            {\n              \"featureType\": \"road.local\",\n              \"elementType\": \"labels.text.fill\",\n              \"stylers\": [\n                {\n                  \"color\": \"#9e9e9e\"\n                }\n              ]\n            },\n            {\n              \"featureType\": \"transit.line\",\n              \"elementType\": \"geometry\",\n              \"stylers\": [\n                {\n                  \"color\": \"#e5e5e5\"\n                }\n              ]\n            },\n            {\n              \"featureType\": \"transit.station\",\n              \"elementType\": \"geometry\",\n              \"stylers\": [\n                {\n                  \"color\": \"#eeeeee\"\n                }\n              ]\n            },\n            {\n              \"featureType\": \"water\",\n              \"elementType\": \"geometry\",\n              \"stylers\": [\n                {\n                  \"color\": \"#c9c9c9\"\n                }\n              ]\n            },\n            {\n              \"featureType\": \"water\",\n              \"elementType\": \"labels.text.fill\",\n              \"stylers\": [\n                {\n                  \"color\": \"#9e9e9e\"\n                }\n              ]\n            }\n          ],\n          \n        });\n        const svgMarker = {\n            path:\n            \"M50,5C32.6,5,18.5,19.1,18.5,36.5c0,6.8,2.2,14.6,5.9,19.8L50,95l25.6-38.7c3.7-5.2,5.9-12.9,5.9-19.8  C81.5,19.1,67.4,5,50,5z M50,48.5c-6.6,0-12-5.4-12-12c0-6.6,5.4-12,12-12s12,5.4,12,12C62,43.1,56.6,48.5,50,48.5z\",\n            fillColor: \"slateblue\",\n            fillOpacity: 1,\n            strokeWeight: 0,\n            rotation: 0,\n            scale: .4,\n            anchor: new google.maps.Point(15, 30),\n          };\n        new google.maps.Marker({\n            position: myLatLng,\n            map,\n            icon: svgMarker,\n            title: \"Hello World!\",\n          });\n      }); \n}\n\n\n\n//# sourceURL=webpack://terrazzo/./src/about.js?");

/***/ }),

/***/ "./src/heroConstructor.js":
/*!********************************!*\
  !*** ./src/heroConstructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"heroFactory\": () => (/* binding */ heroFactory)\n/* harmony export */ });\nconst heroFactory = (section)=>{\n    const hero = document.createElement('div')\n    let msg\n    switch(section){\n        case 'menu':\n            hero.id = 'imgBoxMenu'\n            hero.classList.add('imgBoxMenu');\n            msg = '';\n            break;\n        case 'about':\n            hero.id = 'imgBoxAbout'\n            msg = 'about'\n            break;\n        case 'home':\n            hero.id = 'imgBox'\n            msg = 'terrazzo<br><h6>modern italian</h6>'\n            break;\n    }\n    const titleText = document.createElement('div')\n    titleText.classList.add('titleText');\n    const textContent = document.createElement('h3');\n    textContent.innerHTML = msg\n    titleText.appendChild(textContent);\n    hero.appendChild(titleText);\n\n    return {\n        hero\n    }\n}\n\n\n//# sourceURL=webpack://terrazzo/./src/heroConstructor.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad),\n/* harmony export */   \"homeFactory\": () => (/* binding */ homeFactory)\n/* harmony export */ });\n/* harmony import */ var _heroConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroConstructor */ \"./src/heroConstructor.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nconst pageLoad = (content)=>{\n    const navlinks = document.querySelectorAll('.navlink');\n    navlinks.forEach(link => {\n        link.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_1__.tabswitch)\n    })\n    homeFactory(content);\n};\n\nconst homeFactory = function(content){\n    let hero = (0,_heroConstructor__WEBPACK_IMPORTED_MODULE_0__.heroFactory)('home').hero;\n    content.appendChild(hero)\n}\n\n\n\n//# sourceURL=webpack://terrazzo/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sleep\": () => (/* binding */ sleep),\n/* harmony export */   \"tabswitch\": () => (/* binding */ tabswitch)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ \"./src/NavBar.js\");\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@fortawesome/fontawesome-free/js/all */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n\n\nconst content = document.querySelector('.content')\n\nfunction sleep(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nconst tabswitch = async(e) =>{\n    let target = e.target.id;\n    let current = _NavBar__WEBPACK_IMPORTED_MODULE_2__.NavBar.getcurrent();\n    \n    _NavBar__WEBPACK_IMPORTED_MODULE_2__.NavBar.toggleActive(target)\n    \n    if(target === current){\n        return;\n    }\n    if(current === 'menu'){\n        (0,_menu__WEBPACK_IMPORTED_MODULE_0__.slideshowtog)();\n    }\n    content.classList.toggle('hide')\n    await sleep(200);\n    content.classList.toggle('close')\n    await sleep(700);\n    \n    content.innerHTML = ''\n    switch(target){\n        case 'menu':\n            ;(0,_menu__WEBPACK_IMPORTED_MODULE_0__.menuFactory)(content);\n            (0,_menu__WEBPACK_IMPORTED_MODULE_0__.slideshowtog)();\n            break;\n        case 'home':\n            (0,_home__WEBPACK_IMPORTED_MODULE_4__.homeFactory)(content)\n            break;\n        case 'about':\n            (0,_about__WEBPACK_IMPORTED_MODULE_1__.aboutFactory)(content);\n            break;\n    }\n    content.classList.toggle('close')\n    await sleep(200);\n    content.classList.toggle('hide')\n    await sleep(400);    \n}\n    \n//initial page load\n;(0,_home__WEBPACK_IMPORTED_MODULE_4__.pageLoad)(content);\n\n\n\n//# sourceURL=webpack://terrazzo/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuFactory\": () => (/* binding */ menuFactory),\n/* harmony export */   \"slideshowtog\": () => (/* binding */ slideshowtog)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _heroConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heroConstructor */ \"./src/heroConstructor.js\");\n\n\n\nconst menuFactory =(content)=>{\n    let hero = (0,_heroConstructor__WEBPACK_IMPORTED_MODULE_1__.heroFactory)('menu', '').hero;\n    content.appendChild(hero)\n    let menuBox = document.createElement('div');\n    menuBox.classList.add('menuBox')\n    menuBox.innerHTML = '<img class = \"menuImg\" src = \"./assets/winterMenu.jpg\">'\n    content.appendChild(menuBox)\n\n\n    const titleText = document.createElement('div')\n    titleText.classList.add('titleTextArrow');\n    const textContent = document.createElement('h3');\n    textContent.innerHTML = `\n    <a id = 'openBtn' href ='#'>\n        <i class=\"far fa-snowflake\"></i>\n    </a>`\n    \n    titleText.appendChild(textContent);\n    content.appendChild(titleText);\n    let openBtn = document.querySelector('#openBtn');\n\n    const openMenu = async()=>{\n        menuBox.classList.toggle('open')\n       \n    }\n    openBtn.addEventListener('click', openMenu);\n}\n\nlet i;\nlet menuStat\nconst slideshowtog = () =>{\n    menuStat = !menuStat;\n    slideshow();\n}\nconst slideshow = async function(){\n    if(menuStat){\n        let element = document.querySelector('.imgBoxMenu')\n        let i = 0;\n        const backgrounds = [\n            \"url('./assets/lobster.jpg')\",\n            \"url('./assets/petit.jpg')\",\n            \"url('./assets/firsts.jpg')\",\n            \"url('./assets/about.jpg')\",\n            \"url('./assets/menu.jpg')\",\n        ]\n        while(menuStat){\n            await (0,___WEBPACK_IMPORTED_MODULE_0__.sleep)(2000)\n            element.style.opacity = 0;\n            await (0,___WEBPACK_IMPORTED_MODULE_0__.sleep)(1000)\n            element.style.backgroundImage = backgrounds[i]\n            console.log(backgrounds[i])\n            await (0,___WEBPACK_IMPORTED_MODULE_0__.sleep)(1000)\n            element.style.opacity = 1;\n            i++\n            if(i === backgrounds.length){\n                i = 0;\n            }\n        }\n    \n    };\n      \n}\n\n\n\n//# sourceURL=webpack://terrazzo/./src/menu.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;