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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n\n\t\"use strict\";\n\n\tvar calc = __webpack_require__(/*! ./parts/calc.js */ \"./src/js/parts/calc.js\"),\n\t    form = __webpack_require__(/*! ./parts/form.js */ \"./src/js/parts/form.js\"),\n\t    modal = __webpack_require__(/*! ./parts/modal.js */ \"./src/js/parts/modal.js\"),\n\t    slider = __webpack_require__(/*! ./parts/slider.js */ \"./src/js/parts/slider.js\"),\n\t    smoothscroll = __webpack_require__(/*! ./parts/smoothscroll.js */ \"./src/js/parts/smoothscroll.js\"),\n\t    tabs = __webpack_require__(/*! ./parts/tabs.js */ \"./src/js/parts/tabs.js\"),\n\t    timer = __webpack_require__(/*! ./parts/timer.js */ \"./src/js/parts/timer.js\");\n\tcalc();\n\tform();\n\tmodal();\n\tslider();\n\tsmoothscroll();\n\ttabs();\n\ttimer();\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction calc() {\n  var persons = document.querySelectorAll(\".counter-block-input\")[0],\n      restDays = document.querySelectorAll(\".counter-block-input\")[1],\n      calcInputs = document.querySelectorAll(\".counter-block-input\"),\n      place = document.getElementById(\"select\"),\n      totalValue = document.getElementById(\"total\"),\n      total = 0;\n\n  totalValue.innerHTML = total;\n\n  function animateTotalSum(startCount, endCount, element) {\n    var totalValue = startCount;\n    var increament = totalValue < endCount ? 100 : -100;\n    var timer = setInterval(function () {\n      totalValue += increament;\n      element.innerHTML = totalValue;\n      if (totalValue == endCount) {\n        clearInterval(timer);\n      }\n    }, 1);\n  }\n\n  function totalSumCalc(rst, prs) {\n    if (+rst && +prs) {\n      total = (+rst + +prs) * 4000;\n      animateTotalSum(+totalValue.innerHTML, total * place.options[place.selectedIndex].value, totalValue);\n    } else {\n      totalValue.innerHTML = 0;\n    }\n  }\n\n  [persons, restDays, place].forEach(function (item) {\n    item.addEventListener(\"change\", function () {\n      totalSumCalc(restDays.value, persons.value);\n    });\n  });\n\n  calcInputs.forEach(function (item) {\n    item.addEventListener(\"keypress\", function (e) {\n      if (/\\D/.test(e.key)) {\n        e.preventDefault();\n      }\n    });\n  });\n}\n\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./src/js/parts/calc.js?");

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction form() {\n  var message = {\n    loading: \"Загрузка...\",\n    success: \"Спасибо! Скором мы с вами свяжемся\",\n    failure: \"Что-то пошло не так\"\n  };\n\n  var form = document.querySelector(\".main-form\"),\n      input = form.getElementsByTagName(\"input\"),\n      statusMessage = document.createElement(\"div\"),\n      formContact = document.getElementById(\"form\"),\n      inputs = document.querySelectorAll(\"input\");\n  statusMessage.classList.add(\"status\");\n\n  inputs.forEach(function (item) {\n    if (item.type == \"tel\") {\n      item.addEventListener(\"keypress\", function (e) {\n        if (!/\\d|\\+/gm.test(e.key) && e.keyCode != 8 || item.value.length >= 12 && e.keyCode != 8) {\n          e.preventDefault();\n        }\n        if (e.key == '+' && item.value.length > 0) {\n          e.preventDefault();\n        }\n      });\n    }\n  });\n\n  [form, formContact].forEach(function (item) {\n    item.addEventListener(\"submit\", function (event) {\n      event.preventDefault();\n      item.appendChild(statusMessage);\n      var formData = new FormData(item);\n\n      function postData(data) {\n        return new Promise(function (resolve, reject) {\n          var request = new XMLHttpRequest();\n          request.open(\"POST\", \"server.php\");\n          request.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\n          request.onreadystatechange = function () {\n            if (request.status == 200 && request.readyState == 4) {\n              resolve();\n            } else {\n              reject();\n            }\n          };\n          request.send(data);\n        });\n      }\n\n      function clearInput() {\n        for (var i = 0; i < inputs.length; i++) {\n          inputs[i].value = \"\";\n        }\n      }\n      postData(formData).then(function () {\n        return statusMessage.innerHTML = message.loading;\n      }).then(function () {\n        statusMessage.innerHTML = \"\";\n        var success = document.createElement(\"img\");\n        success.src = \"img/Commons-emblem-success.svg\";\n        success.width = 48;\n        success.height = 48;\n        statusMessage.appendChild(success);\n        setTimeout(function () {\n          statusMessage.innerHTML = \"\";\n        }, 5000);\n      }).catch(function () {\n        statusMessage.innerHTML = \"\";\n        var alarm = document.createElement(\"img\");\n        alarm.src = \"img/alarmforesthumour.jpg\";\n        alarm.width = 200;\n        statusMessage.appendChild(alarm);\n        setTimeout(function () {\n          statusMessage.innerHTML = \"\";\n        }, 5000);\n      }).then(function () {\n        return clearInput();\n      });\n    });\n  });\n}\n\nmodule.exports = form;\n\n//# sourceURL=webpack:///./src/js/parts/form.js?");

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction modal() {\n  var more = document.querySelector(\".more\"),\n      overlay = document.querySelector(\".overlay\"),\n      close = document.querySelector(\".popup-close\"),\n      description = document.querySelectorAll(\".description-btn\");\n\n  more.addEventListener(\"click\", function () {\n    modal.call(this);\n  });\n\n  description.forEach(function (item) {\n    item.addEventListener(\"click\", function () {\n      modal.call(this);\n    });\n  });\n\n  function modal() {\n    overlay.style.display = \"block\";\n    this.classList.add(\"more-splash\");\n    document.body.style.overflow = \"hidden\";\n    if (window.screen.width > 992) {\n\n      if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\\./i)) {\n        overlay.classList.add('fade');\n      } else {\n        animate(overlay);\n      }\n    }\n  }\n\n  close.addEventListener(\"click\", function () {\n    overlay.style.display = \"none\";\n    more.classList.remove(\"more-splash\");\n    document.body.style.overflow = \"\";\n  });\n\n  function animate(element) {\n    var op = 0;\n\n    function step() {\n      if (op > 1) {\n        cancelAnimationFrame(step);\n      } else {\n        op = op + 0.01;\n        element.style.opacity = op;\n        requestAnimationFrame(step);\n      }\n    }\n    requestAnimationFrame(step);\n  }\n}\n\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./src/js/parts/modal.js?");

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction slider() {\n  var slideIndex = 1,\n      slides = document.querySelectorAll('.slider-item'),\n      prev = document.querySelector(\".prev\"),\n      next = document.querySelector(\".next\"),\n      dotsWrap = document.querySelector(\".slider-dots\"),\n      dots = document.querySelectorAll(\".dot\");\n\n  function showSlides(n) {\n    if (n > slides.length) {\n      slideIndex = 1;\n    }\n    if (n < 1) {\n      slideIndex = slides.length;\n    }\n\n    slides.forEach(function (item) {\n      item.style.display = \"none\";\n    });\n    dots.forEach(function (item) {\n      item.classList.remove(\"dot-active\");\n    });\n    slideAnimate(slides[slideIndex - 1]);\n    dots[slideIndex - 1].classList.add(\"dot-active\");\n  }\n\n  function slideAnimate(item) {\n    item.style.display = \"block\";\n    var left = -1000;\n\n    function step() {\n      if (left == 0) {\n        cancelAnimationFrame(step);\n      } else {\n        left = left + 50;\n        item.style.left = left + \"px\";\n        requestAnimationFrame(step);\n      }\n    }\n    requestAnimationFrame(step);\n  }\n\n  function plusSlides(n) {\n    showSlides(slideIndex += n);\n  }\n\n  function currentSlide(n) {\n    showSlides(slideIndex = n);\n  }\n  prev.addEventListener(\"click\", function () {\n    plusSlides(-1);\n  });\n  next.addEventListener(\"click\", function () {\n    plusSlides(1);\n  });\n  dotsWrap.addEventListener(\"click\", function (event) {\n    for (var i = 0; i < dots.length + 1; i++) {\n      if (event.target.classList.contains(\"dot\") && event.target == dots[i - 1]) {\n        currentSlide(i);\n      }\n    }\n  });\n  showSlides(1);\n}\n\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./src/js/parts/slider.js?");

/***/ }),

/***/ "./src/js/parts/smoothscroll.js":
/*!**************************************!*\
  !*** ./src/js/parts/smoothscroll.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction smoothscroll() {\n  var menu = document.querySelectorAll(\"li a\");\n  menu.forEach(function (item) {\n    item.addEventListener(\"click\", function (event) {\n      event.preventDefault();\n      document.querySelector(this.getAttribute(\"href\")).scrollIntoView({\n        block: \"start\",\n        behavior: \"smooth\"\n      });\n    });\n  });\n}\n\nmodule.exports = smoothscroll;\n\n//# sourceURL=webpack:///./src/js/parts/smoothscroll.js?");

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction tabs() {\n\tvar tab = document.querySelectorAll(\".info-header-tab\"),\n\t    info = document.querySelector(\".info-header\"),\n\t    tabContent = document.querySelectorAll(\".info-tabcontent\");\n\n\tvar hideTabContent = function hideTabContent(a) {\n\t\tfor (var i = a; i < tabContent.length; i++) {\n\t\t\ttabContent[i].classList.remove(\"show\");\n\t\t\ttabContent[i].classList.add(\"hide\");\n\t\t}\n\t};\n\n\thideTabContent(1);\n\n\tvar showTabContent = function showTabContent(b) {\n\t\tif (tabContent[b].classList.contains(\"hide\")) {\n\t\t\ttabContent[b].classList.remove(\"hide\");\n\t\t\ttabContent[b].classList.add(\"show\");\n\t\t}\n\t};\n\n\tinfo.addEventListener(\"click\", function (event) {\n\t\tvar target = event.target;\n\t\tif (target && target.classList.contains(\"info-header-tab\")) {\n\t\t\tfor (var i = 0; i < tab.length; i++) {\n\t\t\t\tif (target == tab[i]) {\n\t\t\t\t\thideTabContent(0);\n\t\t\t\t\tshowTabContent(i);\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t});\n}\n\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./src/js/parts/tabs.js?");

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction timer() {\n\n  var addZeroToDate = function addZeroToDate(date) {\n    if (date.toString().length == 1) {\n      return \"0\" + date.toString();\n    } else {\n      return date;\n    }\n  };\n  var deadline = \"2018-12-12\";\n\n  var getTimeRemaining = function getTimeRemaining(endtime) {\n\n    var t = Date.parse(endtime) - Date.parse(new Date()),\n        seconds = Math.floor(t / 1000 % 60),\n        minutes = Math.floor(t / 1000 / 60 % 60),\n        hours = Math.floor(t / 1000 / 60 / 60);\n\n    return {\n      'total': t,\n      'hours': hours,\n      'minutes': minutes,\n      'seconds': seconds\n    };\n  };\n\n  var setClock = function setClock(id, endtime) {\n    var timer = document.getElementById(id),\n        hours = timer.querySelector(\".hours\"),\n        minutes = timer.querySelector(\".minutes\"),\n        seconds = timer.querySelector(\".seconds\"),\n        timeInterval = setInterval(updateClock, 1000);\n\n    function updateClock() {\n\n      var t = getTimeRemaining(endtime);\n      hours.textContent = addZeroToDate(t.hours);\n      minutes.textContent = addZeroToDate(t.minutes);\n      seconds.textContent = addZeroToDate(t.seconds);\n\n      if (t.total <= 0) {\n        clearInterval(timeInterval);\n        hours.textContent = \"00\";\n        minutes.textContent = \"00\";\n        seconds.textContent = \"00\";\n      }\n    }\n  };\n  setClock(\"timer\", deadline);\n}\n\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./src/js/parts/timer.js?");

/***/ })

/******/ });