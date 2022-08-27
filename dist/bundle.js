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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  background: #cfcfcf;\\r\\n}\\r\\n\\r\\n.task-wrapper {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n.tasks {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  text-align: center;\\r\\n  border: 1px solid #f2f2f2;\\r\\n  background: #fff;\\r\\n  padding: 0 7px;\\r\\n}\\r\\n\\r\\n.head {\\r\\n  color: red;\\r\\n  background-color: #fff;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  height: 79px;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  margin: 0 10px;\\r\\n}\\r\\n\\r\\n.navside {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 10px;\\r\\n  margin: 0 10px;\\r\\n}\\r\\n\\r\\n.home:hover {\\r\\n  color: blue;\\r\\n}\\r\\n\\r\\n.contact:hover {\\r\\n  color: blue;\\r\\n}\\r\\n\\r\\n.support:hover {\\r\\n  color: blue;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.main-div {\\r\\n  box-shadow: 1px 6px 17px -1px rgba(34, 60, 80, 0.19);\\r\\n  width: 40vw;\\r\\n  font-family: Poppins, serif;\\r\\n  font-size: 18px;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.div {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  margin-top: 90px;\\r\\n}\\r\\n\\r\\n.input-div {\\r\\n  padding: 15px;\\r\\n  border-bottom: 1px solid #d0d0d0;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  border: none;\\r\\n  padding: 15px;\\r\\n  font-style: oblique;\\r\\n  font-size: 18px;\\r\\n  border-bottom: 1px solid #d0d0d0;\\r\\n}\\r\\n\\r\\n.listContent {\\r\\n  flex: 2;\\r\\n  border: none;\\r\\n  margin: 18px 0;\\r\\n}\\r\\n\\r\\n.input:checked + .listContent {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\np {\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n#clear {\\r\\n  text-align: center;\\r\\n  color: #989898;\\r\\n  margin: 0;\\r\\n  padding: 25px;\\r\\n  order: 111111111;\\r\\n}\\r\\n\\r\\n.clearAll {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n#clear:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ni {\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n#header {\\r\\n  font-weight: bold;\\r\\n  padding: 15px;\\r\\n}\\r\\n\\r\\n.listContent-disable {\\r\\n  text-decoration: line-through;\\r\\n  opacity: 0.6;\\r\\n}\\r\\n\\r\\n.remove-icon-active {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.icon2 {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.changeBg {\\r\\n  background-color: #fffed3;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _module_Template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/Template.js */ \"./src/module/Template.js\");\n/* harmony import */ var _module_edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/edit.js */ \"./src/module/edit.js\");\n/* harmony import */ var _module_updateWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/updateWindow.js */ \"./src/module/updateWindow.js\");\n/* harmony import */ var _module_statusOperation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/statusOperation.js */ \"./src/module/statusOperation.js\");\n// all imports goes here\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet array = [];\r\nconst sendToLocalStorage = () => {\r\n  localStorage.setItem('list', JSON.stringify(array));\r\n};\r\n\r\n// Entering list event\r\nconst dataEntry = document.querySelector(' .dataEntry');\r\ndataEntry.addEventListener('keypress', (e) => {\r\n  if (e.key === 'Enter') {\r\n    createTask(e);\r\n    e.preventDefault()\r\n  }\r\n});\r\n\r\n// Window Load event\r\nwindow.addEventListener('load', () => {\r\n  (0,_module_updateWindow_js__WEBPACK_IMPORTED_MODULE_3__.updateWindow)();\r\n  document.querySelector('#clear').onclick = _module_statusOperation_js__WEBPACK_IMPORTED_MODULE_4__.clearAllCompleteted;\r\n});\r\n\r\nfunction createTask(e) {\r\n  const taskArray = (localStorage.getItem('list') ? JSON.parse((localStorage.getItem('list'))) : []);\r\n  const task = new _module_Template_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](e.target.value, false, taskArray.length)\r\n  console.log(task, \"Jafer\")\r\n  taskArray.push(task);\r\n  localStorage.setItem('list', JSON.stringify(taskArray));\r\n  e.target.value = \"\";\r\n  (0,_module_updateWindow_js__WEBPACK_IMPORTED_MODULE_3__.updateWindow)();\r\n}\n\n//# sourceURL=webpack://my-webpack/./src/index.js?");

/***/ }),

/***/ "./src/module/Add.js":
/*!***************************!*\
  !*** ./src/module/Add.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.js */ \"./src/module/edit.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove.js */ \"./src/module/remove.js\");\n/* harmony import */ var _statusOperation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statusOperation.js */ \"./src/module/statusOperation.js\");\n\r\n\r\n\r\n\r\nconst addTask = (task) => {\r\n  const form = document.querySelector('.form');\r\n  const list = document.createElement('div');\r\n  list.id = `${task.index}`;\r\n  list.className = 'input-div';\r\n  form.appendChild(list);\r\n  const checkboxes = document.createElement('input');\r\n  checkboxes.onclick = _statusOperation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n  checkboxes.className = 'input';\r\n  checkboxes.type = 'checkbox';\r\n  checkboxes.checked = task.completed;\r\n  const listText = document.createElement('input');\r\n  listText.addEventListener('change', (e) => {\r\n    (0,_edit_js__WEBPACK_IMPORTED_MODULE_0__.updateTask)(e);\r\n    e.target.parentElement.focus();\r\n    // e.preventDefault()\r\n  });\r\n  listText.value = task.description;\r\n  listText.className = 'listContent';\r\n  listText.disabled = true;\r\n  const threeDots = document.createElement('i');\r\n  threeDots.onclick = _edit_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  threeDots.className = 'fas fa-ellipsis-v';\r\n  const trashIcon = document.createElement('i');\r\n  trashIcon.className = 'fas fa-trash-alt icon2';\r\n  trashIcon.onclick = _remove_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n  list.append(checkboxes, listText, threeDots, trashIcon);\r\n  document.querySelector('.listContainer').appendChild(list);\r\n};\n\n//# sourceURL=webpack://my-webpack/./src/module/Add.js?");

/***/ }),

/***/ "./src/module/Template.js":
/*!********************************!*\
  !*** ./src/module/Template.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Template)\n/* harmony export */ });\nclass Template {\r\n  constructor(description, completed, index) {\r\n    this.description = description;\r\n    this.completed = completed;\r\n    this.index = index;\r\n  }\r\n}\n\n//# sourceURL=webpack://my-webpack/./src/module/Template.js?");

/***/ }),

/***/ "./src/module/edit.js":
/*!****************************!*\
  !*** ./src/module/edit.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ enableEdit),\n/* harmony export */   \"updateTask\": () => (/* binding */ updateTask)\n/* harmony export */ });\nfunction enableEdit() {\r\n  this.parentElement.querySelector('.listContent').disabled = false;\r\n}\r\n\r\nfunction updateTask(e) {\r\n  const id = Number(e.target.parentElement.id);\r\n  const taskArray = JSON.parse(localStorage.getItem('list'));\r\n  taskArray[id].description = e.target.value;\r\n  localStorage.setItem('list', JSON.stringify(taskArray));\r\n  e.target.disabled = true;\r\n  location.reload();\r\n}\n\n//# sourceURL=webpack://my-webpack/./src/module/edit.js?");

/***/ }),

/***/ "./src/module/remove.js":
/*!******************************!*\
  !*** ./src/module/remove.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\r\n\r\n\r\nfunction removeTask() {\r\n  const id = Number(this.parentElement.id);\r\n  const taskArray = JSON.parse(localStorage.getItem('list'));\r\n  taskArray.splice(id, 1);\r\n  for (let i = 0; i < taskArray.length; i += 1) {\r\n    taskArray[i].id = i;\r\n  }\r\n\r\n  localStorage.setItem('list', JSON.stringify(taskArray));\r\n  this.parentElement.remove();\r\n}\n\n//# sourceURL=webpack://my-webpack/./src/module/remove.js?");

/***/ }),

/***/ "./src/module/statusOperation.js":
/*!***************************************!*\
  !*** ./src/module/statusOperation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearAllCompleteted\": () => (/* binding */ clearAllCompleteted),\n/* harmony export */   \"default\": () => (/* binding */ updateStatus)\n/* harmony export */ });\n/* harmony import */ var _updateWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateWindow.js */ \"./src/module/updateWindow.js\");\n\r\n// Add event to checkboxes\r\n\r\nfunction updateStatus() {\r\n  console.log([...this.parentElement.querySelectorAll('i')][0]);\r\n  [...this.parentElement.querySelectorAll('i')][0].classList.toggle('remove-icon-active');\r\n  [...this.parentElement.querySelectorAll('i')][1].classList.toggle('icon2');\r\n  this.parentElement.querySelector('input').classList.toggle('listContent-disable');\r\n  this.parentElement.classList.toggle('changeBg');\r\n  const taskArray = JSON.parse(localStorage.getItem('list'));\r\n  const taskIndex = Number(this.parentElement.id);\r\n  taskArray[taskIndex].completed = !taskArray[taskIndex].completed;\r\n  localStorage.setItem('list', JSON.stringify(taskArray));\r\n};\r\n\r\nconst clearAllCompleteted = () => {\r\n  const taskArray = JSON.parse(localStorage.getItem('list'));\r\n  const newTaskArray = taskArray.filter((task) => !task.completed);\r\n  for (let i = 0; i < newTaskArray.length; i += 1) {\r\n    newTaskArray[i].id = i;\r\n  }\r\n  console.log(newTaskArray);\r\n  localStorage.setItem('list', JSON.stringify(newTaskArray));\r\n  (0,_updateWindow_js__WEBPACK_IMPORTED_MODULE_0__.updateWindow)();\r\n}\n\n//# sourceURL=webpack://my-webpack/./src/module/statusOperation.js?");

/***/ }),

/***/ "./src/module/updateWindow.js":
/*!************************************!*\
  !*** ./src/module/updateWindow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateWindow\": () => (/* binding */ updateWindow)\n/* harmony export */ });\n/* harmony import */ var _Add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add */ \"./src/module/Add.js\");\n\r\n\r\nconst updateWindow = () => {\r\n  const taskArray = (localStorage.getItem('list') ? JSON.parse((localStorage.getItem('list'))) : []);\r\n  document.querySelector('.listContainer').innerHTML = \"\";\r\n  taskArray.map((task) => (0,_Add__WEBPACK_IMPORTED_MODULE_0__.addTask)(task))\r\n}\n\n//# sourceURL=webpack://my-webpack/./src/module/updateWindow.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;