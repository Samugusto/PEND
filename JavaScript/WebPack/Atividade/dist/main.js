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

/***/ "./src/calculo.js"
/*!************************!*\
  !*** ./src/calculo.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculo: () => (/* binding */ calculo)\n/* harmony export */ });\nfunction calculo() {\r\n    let n1 = 2;\r\n    let n2 = 3;\r\n\r\n    let soma = n1 + n2;\r\n    let subtracao = n1 - n2;\r\n    let multiplicacao = n1 * n2;\r\n    let divisao = n1/n2;\r\n\r\n    return { soma, subtracao, multiplicacao, divisao };\r\n}\n\n//# sourceURL=webpack://atividade/./src/calculo.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mensagem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mensagem.js */ \"./src/mensagem.js\");\n/* harmony import */ var _mensagem2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mensagem2.js */ \"./src/mensagem2.js\");\n/* harmony import */ var _calculo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculo.js */ \"./src/calculo.js\");\n\r\nconsole.log((0,_mensagem_js__WEBPACK_IMPORTED_MODULE_0__.mensagem)());\r\n\r\n\r\nconsole.log((0,_mensagem2_js__WEBPACK_IMPORTED_MODULE_1__.mensagem2)());\r\n\r\n\r\nconst resultados = (0,_calculo_js__WEBPACK_IMPORTED_MODULE_2__.calculo)();\r\nconsole.log(resultados.soma),\r\nconsole.log(resultados.subtracao),\r\nconsole.log(resultados.multiplicacao),\r\nconsole.log(resultados.divisao);\n\n//# sourceURL=webpack://atividade/./src/index.js?\n}");

/***/ },

/***/ "./src/mensagem.js"
/*!*************************!*\
  !*** ./src/mensagem.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mensagem: () => (/* binding */ mensagem)\n/* harmony export */ });\nfunction mensagem() {\r\n    return \"Olá Mundo!\";\r\n}\n\n//# sourceURL=webpack://atividade/./src/mensagem.js?\n}");

/***/ },

/***/ "./src/mensagem2.js"
/*!**************************!*\
  !*** ./src/mensagem2.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mensagem2: () => (/* binding */ mensagem2)\n/* harmony export */ });\nfunction mensagem2(){\r\n    return \"Olá Universo!\"\r\n}\n\n//# sourceURL=webpack://atividade/./src/mensagem2.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;