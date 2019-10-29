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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _animationFacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationFacts */ \"./src/js/animationFacts.js\");\n/* harmony import */ var _animationProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animationProgress */ \"./src/js/animationProgress.js\");\n/* harmony import */ var _fixedNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixedNavigation */ \"./src/js/fixedNavigation.js\");\n/* harmony import */ var _slideNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideNavigation */ \"./src/js/slideNavigation.js\");\n/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hamburger */ \"./src/js/hamburger.js\");\n\n\n\n\n\n //HAMBURGER MENU\n\nvar hamburgerElement = document.querySelector('.navigation__hamburger');\nhamburgerElement.addEventListener('click', function () {\n  return Object(_hamburger__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(hamburgerElement);\n});\nwindow.addEventListener('load', function () {\n  return Object(_slideNavigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\ndocument.addEventListener('scroll', function () {\n  return Object(_animationFacts__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\ndocument.addEventListener('scroll', function () {\n  return Object(_animationProgress__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\ndocument.addEventListener('scroll', function () {\n  return Object(_fixedNavigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

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