var bluegenesToolHomology =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
function main (el, service, imEntity, _state, _config, navigate) {
  // 1

  var button1 = document.createElement('button');
  button1.type = "button";
  button1.onclick = function(event) {
    navigate('report', {type: 'Gene', id: 1460425});
  };
  button1.appendChild(document.createTextNode("Local report for flymine/default"));

  el.appendChild(button1);

  // 2

  var button2 = document.createElement('button');
  button2.type = "button";
  button2.onclick = function(event) {
    navigate('report', {type: 'Gene', id: 1018204}, 'humanmine');
  };
  button2.appendChild(document.createTextNode("External report (humanmine)"));

  el.appendChild(button2);

  // 3

  var myQuery = {
    name: 'Gene_Protein',
    title: 'Gene --> Proteins.',
    comment: 'Added 26OCT2010: ML',
    description:
    'For a given Gene (or List of Genes) returns the corresponding Protein(s) products.',
    from: 'Gene',
    select: [
      'primaryIdentifier',
      'symbol',
      'proteins.primaryIdentifier',
      'proteins.primaryAccession',
      'proteins.name',
      'proteins.length'
    ],
    orderBy: [
      {
        path: 'primaryIdentifier',
        direction: 'ASC'
      }
    ],
    where: [
      {
        path: 'Gene.id',
        op: '=',
        value: 1018204
      }
    ]
  };

  var button3 = document.createElement('button');
  button3.type = "button";
  button3.onclick = function(event) {
    navigate('query', myQuery);
  };
  button3.appendChild(document.createTextNode("Local query"));

  el.appendChild(button3);

  // 4

  var myQuery = {
    "title": "Sumsum",
    "from": "Gene",
    "select": [
      "Gene.symbol"
    ],
    "constraintLogic": "(A)",
    "where": [
      {
        "path": "Gene.symbol",
        "op": "CONTAINS",
        "value": "1287",
        "code": "A"
      }
    ]
  };

  var button4 = document.createElement('button');
  button4.type = "button";
  button4.onclick = function(event) {
    navigate('query', myQuery, "flymine");
  };
  button4.appendChild(document.createTextNode("External query (flymine)"));

  el.appendChild(button4);
}


/***/ })
/******/ ]);