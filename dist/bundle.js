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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './main.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n// all imports goes here\r\n\r\n\r\nclass Template {\r\n  constructor(description, completed, index) {\r\n    this.description = description;\r\n    this.completed = completed;\r\n    this.index = index;\r\n  }\r\n}\r\n\r\nlet array = [];\r\nconst sendToLocalStorage = () => {\r\n  localStorage.setItem('list', JSON.stringify(array));\r\n};\r\n\r\nconst section = document.querySelector('section');\r\nsection.innerHTML = `\r\n  <div class=\"main-div\">\r\n    <p id=\"header\">Today's To Do <i class=\"fas fa-sync\"></i></p>\r\n    <form action=\"\" class=\"form\">\r\n      <input class=\"dataEntry\" type=\"text\" placeholder=\"Add to your list...\" required></input>\r\n    </form>\r\n    <p id=\"clear\">Clear all completed</p>\r\n  </div>\r\n`;\r\n// Create list\r\nconst createList = () => {\r\n  const form = document.querySelector('.form');\r\n  const list = document.createElement('div');\r\n  list.className = 'input-div';\r\n  form.appendChild(list);\r\n  const checkboxes = document.createElement('input');\r\n  checkboxes.className = 'input';\r\n  checkboxes.type = 'checkbox';\r\n  const listText = document.createElement('p');\r\n  listText.className = 'listContent';\r\n  const threeDots = document.createElement('i');\r\n  threeDots.className = 'fas fa-ellipsis-v';\r\n  const trashIcon = document.createElement('i');\r\n  trashIcon.className = 'fas fa-trash-alt icon2';\r\n  list.append(checkboxes, listText, threeDots, trashIcon);\r\n  // Add event to checkboxes\r\n   let count = 1;\r\n  checkboxes.addEventListener('click', () => {\r\n    threeDots.classList.toggle('remove-icon-active');\r\n    trashIcon.classList.toggle('icon2');\r\n    listText.classList.toggle('listContent-disable');\r\n    list.classList.toggle('changeBg');\r\n    const getting = JSON.parse(localStorage.getItem('list'));\r\n    const empty = [];\r\n    const hammasi = document.querySelectorAll('.input-div');\r\n    for (let i = 0; i < getting.length; i += 1) {\r\n      if (hammasi[i].classList.contains('changeBg')) {\r\n        getting[i].completed = true;\r\n        count += 1;\r\n      } else {\r\n        getting[i].completed = false;\r\n      }\r\n      empty.push(getting[i]);\r\n      localStorage.setItem('list', JSON.stringify(empty));\r\n    }\r\n  });\r\n  const clearAll = document.querySelector('#clear');\r\n  clearAll.addEventListener('click', () => {\r\n    const getting = JSON.parse(localStorage.getItem('list'));\r\n    const variable = document.querySelectorAll('.changeBg');\r\n    for (let i = 0; i < variable.length; i += 1) {\r\n      form.removeChild(variable[i]);\r\n    }\r\n    const empty = [];\r\n    for (let i = 0; i < getting.length; i += 1) {\r\n      if (getting[i].completed === true) {\r\n        continue;\r\n      }\r\n      empty.push(getting[i]);\r\n    }\r\n    localStorage.setItem('list', JSON.stringify(empty));\r\n  });\r\n\r\n  // Remove from list event\r\n  trashIcon.addEventListener('click', () => {\r\n    form.removeChild(list);\r\n    const getFromLocalStorage = JSON.parse(localStorage.getItem('list'));\r\n    const result = getFromLocalStorage.filter((word) => word.description === listText.textContent);\r\n    const empty = [];\r\n    for (let i = 0; i < getFromLocalStorage.length; i += 1) {\r\n      if (result[0].description === getFromLocalStorage[i].description) {\r\n        continue;\r\n      }\r\n      empty.push(getFromLocalStorage[i]);\r\n    }\r\n    localStorage.setItem('list', JSON.stringify(empty));\r\n  });\r\n  \r\n  threeDots.addEventListener('click', () => {\r\n    const editInput = document.createElement('input');\r\n    editInput.type = 'text';\r\n    editInput.className = 'listContent';\r\n    editInput.style.backgroundColor = '#fffed3';\r\n    list.style.backgroundColor = '#fffed3';\r\n    editInput.value = listText.textContent;\r\n    list.replaceChild(editInput, listText);\r\n    editInput.addEventListener('keypress', (e) => {\r\n      if (e.key === 'Enter' && editInput.value) {\r\n        const getting = JSON.parse(localStorage.getItem('list'));\r\n        const result = getting.filter((word) => word.description === listText.textContent);\r\n        const empty = [];\r\n        for (let i = 0; i < getting.length; i += 1) {\r\n          if (getting[i].index === result[0].index) {\r\n            getting[i].description = editInput.value;\r\n          }\r\n          empty.push(getting[i]);\r\n          localStorage.setItem('list', JSON.stringify(empty));\r\n        }\r\n        list.replaceChild(listText, editInput);\r\n        listText.textContent = editInput.value;\r\n        list.style.backgroundColor = '#fff';\r\n      }\r\n    })\r\n  })\r\n};\r\n\r\n// Entering list event\r\nconst dataEntry = document.querySelector('.dataEntry');\r\ndataEntry.addEventListener('keypress', (e) => {\r\n  if (e.key === 'Enter' && dataEntry.value) {\r\n    const object = new Template(dataEntry.value, false, array.length);\r\n    array.push(object);\r\n    e.preventDefault();\r\n    createList();\r\n    const listText = document.querySelectorAll('.listContent');\r\n    for (let i = 0; i < array.length; i += 1) {\r\n      listText[i].textContent = array[i].description;\r\n    }\r\n    dataEntry.value = null;\r\n    sendToLocalStorage();\r\n  }\r\n});\r\n\r\n// Window Load event\r\nwindow.addEventListener('load', () => {\r\n  const getFromLocalStorage = JSON.parse(localStorage.getItem('list'));\r\n  for (let i = 0; i < getFromLocalStorage.length; i += 1) {\r\n    createList();\r\n    const listText = document.querySelectorAll('.listContent');\r\n    listText[i].textContent = getFromLocalStorage[i].description;\r\n    if (getFromLocalStorage[i].completed === true) {\r\n      getFromLocalStorage[i].completed = false;\r\n    }\r\n    localStorage.setItem('list', JSON.stringify(getFromLocalStorage));\r\n\r\n    array = getFromLocalStorage;\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://my-webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;