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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\nvar PORT = 7999;\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get('/', function (req, res) {\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error(\"Something went wrong: \", err);\n      return res.status(500).send('Oops, better luck next time');\n    }\n\n    var a = data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\"));\n    return res.send(a);\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ \"query-string\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      sidebarData = _useState4[0],\n      setSidebarData = _useState4[1];\n\n  var params = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.parse(props.location.search);\n  console.log(\"in app.js file\", params);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    params.limit = 100;\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://api.spacexdata.com/v3/launches?\".concat(query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params))).then(function (res) {\n      setData(res.data);\n    });\n  }, [params.launch_success, params.land_success, params.launch_year]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://api.spacexdata.com/v3/launches?limit=100\").then(function (res) {\n      var a = [];\n      res.data.forEach(function (i) {\n        if (!a.includes(i.launch_year)) a.push(i.launch_year);\n      });\n      setSidebarData(a);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    data: data,\n    sidebarData: sidebarData,\n    name: \"Kumar Mani Shankar\"\n  });\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Home.css":
/*!**********************!*\
  !*** ./src/Home.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .parent {\\n|     background-color: lightgray;\\n|     display:flex;\");\n\n//# sourceURL=webpack:///./src/Home.css?");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sidebar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.css */ \"./src/Home.css\");\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"parent\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sidebar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    data: props.sidebarData\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    className: \"custom-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, props.data.map(function (flight) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      sm: 12,\n      md: 6,\n      lg: 3\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      style: {\n        width: '12rem',\n        height: '25rem'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Img, {\n      style: {\n        height: '10rem'\n      },\n      variant: \"top\",\n      src: flight.links.flickr_images[0] || \"https://img.icons8.com/ios/452/no-image.png\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, null, flight.mission_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Mission Ids: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      class: \"text-muted\"\n    }, flight.mission_id[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Launch Year: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      class: \"text-muted\"\n    }, flight.launch_year)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Successfull Launch: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      class: \"text-muted\"\n    }, flight.launch_success ? \"True\" : \"False\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Successfull Landing: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      class: \"text-muted\"\n    }, flight.rocket.first_stage.cores.land_success))))));\n  }))));\n});\n\n//# sourceURL=webpack:///./src/Home.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\src\\\\sidebar.js: Support for the experimental syntax 'classProperties' isn't currently enabled (15:15):\\n\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 15 | \\u001b[39m    itemClick \\u001b[33m=\\u001b[39m (item) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m              \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m        let params \\u001b[33m=\\u001b[39m queryString\\u001b[33m.\\u001b[39mparse(\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mprops\\u001b[33m.\\u001b[39mlocation\\u001b[33m.\\u001b[39msearch)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m        params\\u001b[33m.\\u001b[39mlaunch_year \\u001b[33m=\\u001b[39m item\\u001b[0m\\n\\u001b[0m \\u001b[90m 18 | \\u001b[39m        \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mprops\\u001b[33m.\\u001b[39mhistory\\u001b[33m.\\u001b[39mpush(\\u001b[32m`/?${queryString.stringify(params)}`\\u001b[39m)\\u001b[0m\\n\\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\\nIf you want to leave it as-is, add @babel/plugin-syntax-class-properties (https://git.io/vb4yQ) to the 'plugins' section to enable parsing.\\n    at Object._raise (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:766:17)\\n    at Object.raiseWithData (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:759:17)\\n    at Object.expectPlugin (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8971:18)\\n    at Object.parseClassProperty (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12455:12)\\n    at Object.pushClassProperty (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12419:30)\\n    at Object.parseClassMemberWithIsStatic (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12352:14)\\n    at Object.parseClassMember (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12289:10)\\n    at C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12241:14\\n    at Object.withTopicForbiddingContext (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11272:14)\\n    at Object.parseClassBody (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12218:10)\\n    at Object.parseClass (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12193:22)\\n    at Object.parseStatementContent (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11473:21)\\n    at Object.parseStatement (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11431:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12013:25)\\n    at Object.parseBlockBody (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11999:10)\\n    at Object.parseTopLevel (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11362:10)\\n    at Object.parse (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13045:10)\\n    at parse (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13098:38)\\n    at parser (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\gensync\\\\index.js:254:32)\\n    at C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\gensync\\\\index.js:266:13\\n    at async.call.result.err.err (C:\\\\Users\\\\kmanishankar\\\\Desktop\\\\Code Practice\\\\wetransfer-9a8494\\\\spacex-mani-shankar-1\\\\node_modules\\\\gensync\\\\index.js:216:11)\");\n\n//# sourceURL=webpack:///./src/sidebar.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"query-string\");\n\n//# sourceURL=webpack:///external_%22query-string%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");\n\n//# sourceURL=webpack:///external_%22react-bootstrap%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });