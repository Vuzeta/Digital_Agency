/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jump.js/dist/jump.module.js":
/*!**************************************************!*\
  !*** ./node_modules/jump.js/dist/jump.module.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Robert Penner's easeInOutQuad\n\n// find the rest of his easing functions here: http://robertpenner.com/easing/\n// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js\n\nvar easeInOutQuad = function easeInOutQuad(t, b, c, d) {\n  t /= d / 2;\n  if (t < 1) return c / 2 * t * t + b;\n  t--;\n  return -c / 2 * (t * (t - 2) - 1) + b;\n};\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) {\n  return typeof obj;\n} : function (obj) {\n  return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n};\n\nvar jumper = function jumper() {\n  // private variable cache\n  // no variables are created during a jump, preventing memory leaks\n\n  var element = void 0; // element to scroll to                   (node)\n\n  var start = void 0; // where scroll starts                    (px)\n  var stop = void 0; // where scroll stops                     (px)\n\n  var offset = void 0; // adjustment from the stop position      (px)\n  var easing = void 0; // easing function                        (function)\n  var a11y = void 0; // accessibility support flag             (boolean)\n\n  var distance = void 0; // distance of scroll                     (px)\n  var duration = void 0; // scroll duration                        (ms)\n\n  var timeStart = void 0; // time scroll started                    (ms)\n  var timeElapsed = void 0; // time spent scrolling thus far          (ms)\n\n  var next = void 0; // next scroll position                   (px)\n\n  var callback = void 0; // to call when done scrolling            (function)\n\n  // scroll position helper\n\n  function location() {\n    return window.scrollY || window.pageYOffset;\n  }\n\n  // element offset helper\n\n  function top(element) {\n    return element.getBoundingClientRect().top + start;\n  }\n\n  // rAF loop helper\n\n  function loop(timeCurrent) {\n    // store time scroll started, if not started already\n    if (!timeStart) {\n      timeStart = timeCurrent;\n    }\n\n    // determine time spent scrolling so far\n    timeElapsed = timeCurrent - timeStart;\n\n    // calculate next scroll position\n    next = easing(timeElapsed, start, distance, duration);\n\n    // scroll to it\n    window.scrollTo(0, next);\n\n    // check progress\n    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop\n    : done(); // scrolling is done\n  }\n\n  // scroll finished helper\n\n  function done() {\n    // account for rAF time rounding inaccuracies\n    window.scrollTo(0, start + distance);\n\n    // if scrolling to an element, and accessibility is enabled\n    if (element && a11y) {\n      // add tabindex indicating programmatic focus\n      element.setAttribute('tabindex', '-1');\n\n      // focus the element\n      element.focus();\n    }\n\n    // if it exists, fire the callback\n    if (typeof callback === 'function') {\n      callback();\n    }\n\n    // reset time for next jump\n    timeStart = false;\n  }\n\n  // API\n\n  function jump(target) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    // resolve options, or use defaults\n    duration = options.duration || 1000;\n    offset = options.offset || 0;\n    callback = options.callback; // \"undefined\" is a suitable default, and won't be called\n    easing = options.easing || easeInOutQuad;\n    a11y = options.a11y || false;\n\n    // cache starting position\n    start = location();\n\n    // resolve target\n    switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {\n      // scroll from current position\n      case 'number':\n        element = undefined; // no element to scroll to\n        a11y = false; // make sure accessibility is off\n        stop = start + target;\n        break;\n\n      // scroll to element (node)\n      // bounding rect is relative to the viewport\n      case 'object':\n        element = target;\n        stop = top(element);\n        break;\n\n      // scroll to element (selector)\n      // bounding rect is relative to the viewport\n      case 'string':\n        element = document.querySelector(target);\n        stop = top(element);\n        break;\n    }\n\n    // resolve scroll distance, accounting for offset\n    distance = stop - start + offset;\n\n    // resolve duration\n    switch (_typeof(options.duration)) {\n      // number in ms\n      case 'number':\n        duration = options.duration;\n        break;\n\n      // function passed the distance of the scroll\n      case 'function':\n        duration = options.duration(distance);\n        break;\n    }\n\n    // start the loop\n    window.requestAnimationFrame(loop);\n  }\n\n  // expose only the jump method\n  return jump;\n};\n\n// export singleton\n\nvar singleton = jumper();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (singleton);\n\n\n//# sourceURL=webpack:///./node_modules/jump.js/dist/jump.module.js?");

/***/ }),

/***/ "./src/js/animationFacts.js":
/*!**********************************!*\
  !*** ./src/js/animationFacts.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar animationFacts = function animationFacts() {\n  var scrollValue = document.documentElement.scrollTop;\n\n  var factsBox = _toConsumableArray(document.querySelectorAll('.facts__box'));\n\n  var boxFromTop = factsBox[0].offsetTop;\n  var boxOuterHeight = factsBox[0].offsetHeight;\n\n  if (window.screen.availWidth > 1023) {\n    if (scrollValue > boxFromTop + boxOuterHeight / 2) {\n      factsBox.forEach(function (el) {\n        el.classList.add('facts__box--active');\n      });\n    }\n\n    if (scrollValue < 100) {\n      factsBox.forEach(function (el) {\n        el.classList.remove('facts__box--active');\n      });\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animationFacts);\n\n//# sourceURL=webpack:///./src/js/animationFacts.js?");

/***/ }),

/***/ "./src/js/animationProgress.js":
/*!*************************************!*\
  !*** ./src/js/animationProgress.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar percentsItems = _toConsumableArray(document.querySelectorAll('.best__percent'));\n\nvar percents = [];\npercentsItems.forEach(function (item) {\n  return percents.push(item.textContent);\n});\n\nvar animationProgress = function animationProgress() {\n  var scrollValue = document.documentElement.scrollTop;\n\n  var progressBoxs = _toConsumableArray(document.querySelectorAll('.best__progress'));\n\n  var progressWrapper = document.querySelector('.best__information');\n  var progressWrapperFromTop = progressWrapper.offsetTop;\n  var progressWrapperHeight = progressWrapper.offsetHeight;\n\n  if (scrollValue > progressWrapperFromTop - progressWrapperHeight / 2) {\n    progressBoxs.forEach(function (progress, index) {\n      return progress.style.width = percents[index];\n    });\n  }\n\n  if (scrollValue < 100) {\n    progressBoxs.forEach(function (progress) {\n      return progress.style.width = '0%';\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animationProgress);\n\n//# sourceURL=webpack:///./src/js/animationProgress.js?");

/***/ }),

/***/ "./src/js/fixedNavigation.js":
/*!***********************************!*\
  !*** ./src/js/fixedNavigation.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar fixedNavigation = function fixedNavigation() {\n  var navigation = document.querySelector('.navigation');\n  var scrollValue = document.documentElement.scrollTop;\n  var rightResolution = false;\n  var navigationActive = false;\n\n  if (window.screen.availWidth > 1023) {\n    rightResolution = true;\n  } else {\n    rightResolution = false;\n  }\n\n  if (scrollValue > 200) {\n    navigationActive = true;\n  } else if (scrollValue === 0) {\n    navigationActive = false;\n  }\n\n  if (rightResolution && navigationActive) {\n    navigation.classList.add('navigation--active');\n  } else {\n    navigation.classList.remove('navigation--active');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fixedNavigation);\n\n//# sourceURL=webpack:///./src/js/fixedNavigation.js?");

/***/ }),

/***/ "./src/js/hamburger.js":
/*!*****************************!*\
  !*** ./src/js/hamburger.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar navigation = document.querySelector('.navigation__list');\n\nvar hamburger = function hamburger(element) {\n  if (element.classList.contains('fa-bars')) element.classList.replace('fa-bars', 'fa-arrow-up');else element.classList.replace('fa-arrow-up', 'fa-bars');\n  navigation.classList.toggle('navigation__list--open');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hamburger);\n\n//# sourceURL=webpack:///./src/js/hamburger.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _animationFacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationFacts */ \"./src/js/animationFacts.js\");\n/* harmony import */ var _animationProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animationProgress */ \"./src/js/animationProgress.js\");\n/* harmony import */ var _fixedNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixedNavigation */ \"./src/js/fixedNavigation.js\");\n/* harmony import */ var _slideNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideNavigation */ \"./src/js/slideNavigation.js\");\n/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hamburger */ \"./src/js/hamburger.js\");\n/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jump.js */ \"./node_modules/jump.js/dist/jump.module.js\");\n\n\n\n\n\n\n\nvar hamburgerElement = document.querySelector('.navigation__hamburger');\nvar navLinks = document.querySelectorAll('.navigation__link');\nhamburgerElement.addEventListener('click', function () {\n  return Object(_hamburger__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(hamburgerElement);\n});\nwindow.addEventListener('load', function () {\n  return Object(_slideNavigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\ndocument.addEventListener('scroll', function () {\n  return Object(_animationFacts__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\ndocument.addEventListener('scroll', function () {\n  return Object(_animationProgress__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\ndocument.addEventListener('scroll', function () {\n  return Object(_fixedNavigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\nnavLinks.forEach(function (link) {\n  return link.addEventListener('click', function (e) {\n    Object(jump_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"\".concat(e.target.hash), {\n      duration: 1000,\n      offset: -110\n    });\n\n    if (window.screen.availWidth < 641) {\n      Object(_hamburger__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(hamburgerElement);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/slideNavigation.js":
/*!***********************************!*\
  !*** ./src/js/slideNavigation.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar slideNavigation = function slideNavigation() {\n  var navigation = document.querySelector('.navigation');\n  navigation.style.top = '0%';\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slideNavigation);\n\n//# sourceURL=webpack:///./src/js/slideNavigation.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });