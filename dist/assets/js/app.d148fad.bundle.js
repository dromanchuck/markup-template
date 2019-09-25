/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.js","vendor~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/_app.scss */ \"./assets/styles/_app.scss\");\n/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ \"../node_modules/slick-carousel/slick/slick.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* src/app */\n\n// Styles\n\n\n// Slider\n\n\n$(document).ready(() => {\n  console.log(\"Ready!\");\n\n  __webpack_require__(/*! ./assets/scripts/main */ \"./assets/scripts/main.js\");\n  __webpack_require__(/*! ./assets/scripts/header */ \"./assets/scripts/header.js\");\n  __webpack_require__(/*! ./assets/scripts/approach */ \"./assets/scripts/approach.js\");\n  __webpack_require__(/*! ./assets/scripts/slides */ \"./assets/scripts/slides.js\");\n  __webpack_require__(/*! ./assets/scripts/tabs */ \"./assets/scripts/tabs.js\");\n  __webpack_require__(/*! ./assets/scripts/form */ \"./assets/scripts/form.js\");\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./assets/scripts/approach.js":
/*!************************************!*\
  !*** ./assets/scripts/approach.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* APPROACH section scripts */\n\nif (document.querySelectorAll('.approach__item').lenght !== 0) {\n  function approachValidHeight() {\n    const items = document.querySelectorAll('.approach__item');\n    items.forEach(el => {\n      const itemHeight = el.offsetHeight;\n      const itemValidHeight = Math.round(itemHeight / 15) * 15 + 5;\n      el.style.height = `${itemValidHeight}px`;\n    });\n  }\n\n  approachValidHeight();\n  window.addEventListener('resize', approachValidHeight);\n}\n\nif (document.querySelectorAll('.approach__item_reverse--2').lenght !== 0) {\n  function arrowValidHeight() {\n    const items = document.querySelectorAll('.approach__item_reverse--2');\n    items.forEach(el => {\n      const itemHeight = el.offsetHeight;\n      const prevItemHeight = el.previousElementSibling.offsetHeight;\n      const itemsHeight = itemHeight + prevItemHeight;\n      const itemValidHeight = Math.round(itemsHeight / 15) * 15;\n      el.querySelector('.approach__item-arrow').style.height = `${itemValidHeight}px`;\n    });\n  }\n\n  arrowValidHeight();\n  window.addEventListener('resize', arrowValidHeight);\n}\n\n/* END APPROACH section scripts */\n\n//# sourceURL=webpack:///./assets/scripts/approach.js?");

/***/ }),

/***/ "./assets/scripts/form.js":
/*!********************************!*\
  !*** ./assets/scripts/form.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(jQuery, $) {// formHandler argument - BEM id string (#block__element_modificator)\n\nif (jQuery('#mainform__form').length !== 0) {\n  formHandler('#mainform__form');\n\n  function formHandler(form) {\n    const API_URL = 'http://localhost:8080/';\n    const file_api = window.File && window.FileReader && window.FileList && window.Blob ? true : false;\n    const FormFiles = [];\n\n    const file_extensions = ['pdf', 'doc', 'docx', 'rtf', 'ppt', 'pptx'];\n    const file_maxSize = 10000000;\n\n    const formNameSpace = form.split('__')[0].substring(1, form.length - 1);\n\n    const mainFormDragInput = $(form).find('[type=\"file\"]');\n    const mainFormDragLabel = mainFormDragInput.closest('label');\n    const mainFormDragFiles = mainFormDragLabel.parent().find(`.${formNameSpace}__drag-files`);\n\n    $(`.${formNameSpace}__success`).click(function (e) {\n      $(this).removeClass('active');\n    });\n\n    function validateInput(el) {\n      const value = el.value;\n      const name = el.name;\n      const type = el.type;\n      const checked = el.checked || false;\n      let valid = false;\n      let message = '';\n\n      switch (type) {\n        case 'email':\n          valid = !!value.match(/(http(s)?:\\/\\/.)?(www\\.)?[-a-zA-Z0-9@:%_\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g);\n          message = 'please, enter valid email';\n          break;\n        case 'text':\n          valid = !!value.match(/^[A-Za-zА-Яа-яЁёІіЇїЄє]+(\\s+[A-Za-zА-Яа-яЁёяЁёІіЇїЄє]+)?/g);\n          if (name === 'name') {\n            message = 'please, enter your name';\n          }\n          if (name === 'company') {\n            message = 'please, enter your company name';\n          }\n          break;\n        case 'textarea':\n          valid = !!value.match(/([A-Za-zА-Яа-яЁёІіЇїЄє]*)/g);\n          message = 'please, enter your message';\n          break;\n        case 'tel':\n          valid = !!value.match(/^[0-9+\\(\\)#\\.\\s\\/ext-]+$/g);\n          message = 'please, enter valid phone number';\n          break;\n        case 'checkbox':\n          valid = checked;\n          message = '';\n          break;\n        default:\n          break;\n      }\n\n      if (!valid) {\n        $(el).addClass('inValid');\n        const previous = el.previousElementSibling;\n        if (!previous || previous.tagName !== 'MARK') {\n          $('<mark>' + message + '</mark>').insertBefore(el);\n        }\n        return false;\n      } else {\n        $(el).removeClass('inValid');\n        $(el).closest('label').find('mark').remove();\n        return true;\n      }\n    }\n\n    function fullInput(el) {\n      const value = el.value;\n      if (value.trim() !== '') {\n        $(el).addClass('full');\n      } else {\n        $(el).removeClass('full');\n      }\n    }\n\n    function handleInputChange(e) {\n      e.preventDefault();\n      e.stopPropagation();\n      validateInput(this);\n    }\n\n    function handleInputFulling(e) {\n      e.preventDefault();\n      e.stopPropagation();\n      fullInput(this);\n    }\n\n    $(form).find('textarea,input:not(input[type=\"file\"])').keyup(handleInputFulling);\n\n    function dropFileValidation(name, size) {\n      const fileNameArr = name.split('.');\n      const fileExt = fileNameArr[fileNameArr.length - 1];\n\n      const isValidExtension = file_extensions.some(ext => ext === fileExt);\n      const isValidSize = size <= file_maxSize;\n\n      const fileElement = document.createElement('div');\n      fileElement.className = `${formNameSpace}__drag-file drag--file`;\n      fileElement.innerHTML = `<span class='${formNameSpace}__drag-file-name drag--file--name'>${name}</span>`;\n\n      const fileDeleteElement = document.createElement('span');\n      fileDeleteElement.className = `${formNameSpace}__drag-file-delete drag--file--delete`;\n      fileDeleteElement.addEventListener('click', function (event) {\n        if (this.parentElement.dataset.count) {\n          const arrayNumber = Number(this.parentElement.dataset.count);\n          FormFiles[arrayNumber] = null;\n        }\n\n        this.parentElement.remove();\n        event.stopPropagation();\n      });\n      fileElement.appendChild(fileDeleteElement);\n\n      if (!isValidExtension) {\n        $(fileElement).append('<mark>invalid file extension</mark>');\n      }\n\n      if (!isValidSize) {\n        $(fileElement).append(`<mark>file bigger than ${file_maxSize / 1000000}mb</mark>`);\n      }\n\n      if (!(isValidExtension & isValidSize)) {\n        fileElement.className = `${formNameSpace}__drag-file_invalid ${formNameSpace}__drag-file drag--file-invalid`;\n        mainFormDragFiles.append(fileElement);\n        return false;\n      }\n\n      fileElement.dataset.count = FormFiles.length;\n      mainFormDragFiles.append(fileElement);\n      return true;\n    }\n\n    function hanlerFilesBeforeSend(files) {\n      $(files).each((index, file) => {\n        const { name, size } = file;\n\n        if (!name.length) return;\n\n        if (!dropFileValidation(name, size)) {\n          return;\n        }\n\n        FormFiles.push(file);\n      });\n    }\n\n    $(mainFormDragInput).change(function (event) {\n      if (!file_api) {\n        alert('Your browser do not support file sending');\n        return;\n      }\n\n      hanlerFilesBeforeSend(this.files);\n    });\n    //.change();\n\n    $(mainFormDragLabel).on({\n      click: function (e) {\n        console.log(e.target);\n      },\n      dragenter: function (e) {\n        $(this).addClass('label--dragged');\n      },\n      dragleave: function (e) {\n        $(this).removeClass('label--dragged');\n      },\n      drop: function (e) {\n        e.stopPropagation();\n        e.preventDefault();\n        $(this).removeClass('label--dragged');\n\n        if (!file_api) {\n          alert('Your browser do not support file sending');\n          return;\n        }\n\n        const dropFiles = e.originalEvent.dataTransfer.files;\n        const label_self = this;\n\n        hanlerFilesBeforeSend(dropFiles);\n\n        /* img reader preloader Preview*/\n        function imgPreloadHandler(file) {\n          const imgReader = new FileReader();\n\n          imgReader.onload = function (file) {\n            return function (event) {\n              $(label_self).next().html(`<a href=\"#\" class=\"${formNameSpace}__upload-img-link upload--img-link\">Upload file</a>`);\n              $(label_self).html(`<img class=\"${formNameSpace}__upload-img-link upload--img-link\" src=\"${event.target.result}\"> <span>${file.name}</span>`);\n            };\n          }(file);\n\n          imgReader.readAsDataURL(file);\n        }\n        /* End img reader preloader Preview*/\n      }\n    });\n\n    $(form).on('submit', function (e) {\n      e.preventDefault();\n      e.stopPropagation();\n\n      const validatedInputs = $(this).find('textarea,select,[type]:not([type=\"radio\"]):not([type=\"button\"]):not([type=\"submit\"]):not([type=\"reset\"]):not([type=\"range\"]):not([type=\"file\"]):not([type=\"image\"])');\n\n      const sendedInputs = $(this).find('textarea,select,[type]:not([type=\"button\"]):not([type=\"submit\"]):not([type=\"reset\"]):not([type=\"file\"]):not([type=\"image\"])');\n\n      function validateBeforeSubmit(nodeList) {\n        nodeList.each((idx, el) => {\n          validateInput(el);\n          el.addEventListener('keyup', handleInputChange);\n          el.addEventListener('change', handleInputChange);\n          console.dir(el);\n        });\n        return Array.prototype.every.call(nodeList, el => !el.classList.contains('inValid'));\n      }\n\n      if (validateBeforeSubmit(validatedInputs)) {\n        const formData = new FormData();\n\n        sendedInputs.each((idx, { name, value }) => formData.append(name, value));\n\n        $(FormFiles).each(function (index, file) {\n          if (file !== null) {\n            formData.append('files[]', file, file.name);\n          }\n        });\n\n        // Success Send\n\n        $(`.${formNameSpace}__success`).addClass('active');\n\n        validatedInputs.each((idx, el) => {\n          el.type === 'checkbox' ? el.checked = false : el.value = '';\n        });\n\n        // End Success Send\n\n        const values = formData.values();\n        console.log(values.next());\n        console.log(values.next());\n        console.log(values.next());\n        console.log(values.next());\n        console.log(values.next());\n        console.log(values.next());\n        console.log(values.next());\n        console.log(values.next());\n\n        //   $.ajax({\n        //   url: this.action,\n        //   type: this.method,\n        //   data: dataToSend,\n        //   contentType: false,\n        //   processData: false,\n        //   success: function(data) {\n        //     alert('Файлы были успешно загружены');\n        //   },\n        // });\n      }\n    });\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\"), __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/scripts/form.js?");

/***/ }),

/***/ "./assets/scripts/header.js":
/*!**********************************!*\
  !*** ./assets/scripts/header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(jQuery, $) {// Sticky nav\n\nif (jQuery('.header__nav').length !== 0) {\n  if (window.innerWidth >= 1200) {\n    $(window).scroll(function () {\n      if ($(this).scrollTop() > 200) {\n        $('.header__nav').fadeIn().addClass('fixed');\n      } else {\n        $('.header__nav').fadeIn(10).removeClass('fixed');\n      }\n    });\n  }\n}\n\n// Cookie warning\n\nif (document.querySelectorAll('.header__cookie-btn').length !== 0) {\n  document.querySelector('.header__cookie-btn').addEventListener('click', function () {\n    this.closest('.header__cookie').classList.add('d-none');\n  });\n}\n\n// Nav mobile open\n\n$('.header__head-open-button').click(function () {\n  $(this).toggleClass('isOpen');\n  $(document.body).toggleClass('no--scroll');\n  $(this).prev('nav').toggleClass('isOpen');\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\"), __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/scripts/header.js?");

/***/ }),

/***/ "./assets/scripts/main.js":
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('dragover', function (e) {\n  e = e || event;\n  e.preventDefault();\n}, false);\nwindow.addEventListener('drop', function (e) {\n  e = e || event;\n  e.preventDefault();\n}, false);\n\nif (!NodeList.prototype.forEach) {\n  NodeList.prototype.forEach = Array.prototype.forEach;\n}\n\n//# sourceURL=webpack:///./assets/scripts/main.js?");

/***/ }),

/***/ "./assets/scripts/slides.js":
/*!**********************************!*\
  !*** ./assets/scripts/slides.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(jQuery, $) {const isIE = /*@cc_on!@*/ false || !!document.documentMode,\n      isEdge = !isIE && !!window.StyleMedia,\n      isMS = !(isIE || isEdge);\n\njQuery(function () {\n  // Header slider\n  if (jQuery('.header__slider').length !== 0) {\n    const headerSlider = jQuery('.header__slider');\n    headerSlider.slick({\n      arrows: false,\n      dots: false,\n      slidesToShow: 1,\n      slidesToScroll: 1,\n      infinite: true,\n      speed: 700,\n      autoplay: false,\n      autoplaySpeed: 7000,\n      cssEase: 'linear',\n      useTransform: isMS,\n      useCSS: isMS,\n      pauseOnHover: false,\n      focusOnSelect: true,\n      pauseOnDotsHover: false,\n      pauseOnFocus: true\n    });\n\n    headerSlider.find('.slick-list').addClass('header__slider-list').append('<div class=\"section--filter\"></div>');\n    headerSlider.slick('slickPrev');\n\n    const headerSliderSupport = jQuery('.header__slider_support');\n    headerSliderSupport.slick({\n      arrows: false,\n      dots: true,\n      slidesToShow: 1,\n      slidesToScroll: 1,\n      infinite: true,\n      speed: 700,\n      autoplay: false,\n      autoplaySpeed: 7000,\n      cssEase: 'linear',\n      useTransform: isMS,\n      useCSS: isMS,\n      pauseOnHover: false,\n      focusOnSelect: true,\n      pauseOnDotsHover: false,\n      pauseOnFocus: true\n    });\n\n    const headerSliderSupportDots = headerSliderSupport.find('.slick-dots');\n    headerSliderSupportDots.addClass('button--dots');\n    const headerSliderSupportDotsArray = headerSliderSupportDots.find('button');\n    const sliderLength = headerSliderSupportDotsArray.length;\n\n    headerSliderSupport.append('<div class=\"header__slider-number\">1/' + sliderLength + '</div>');\n\n    headerSliderSupport.on('afterChange', function (event, slick, currentSlide) {\n      $(this).find('.header__slider-number').html(currentSlide + 1 + '/' + sliderLength);\n    });\n\n    headerSliderSupport.on('beforeChange', function (event, slick, currentSlide, nextSlide) {\n      event.stopPropagation();\n\n      switch (nextSlide - currentSlide) {\n        case 0:\n          break;\n        case 1:\n        case 1 - sliderLength:\n          headerSlider.slick('slickPrev');\n          break;\n        case -1:\n        case sliderLength - 1:\n          headerSlider.slick('slickNext');\n          break;\n        default:\n          headerSlider.slick('slickGoTo', sliderLength - nextSlide - 1);\n      }\n    });\n  }\n\n  // END Header slider\n\n  // Stories slider\n\n  if (jQuery('.stories__slider').length !== 0) {\n    const storiesSlider = jQuery('.stories__slider');\n    const storiesSlides = storiesSlider.find('.stories__slide');\n    const sliderInitLength = storiesSlides.length;\n\n    const storiesSupportSlides = storiesSlider.closest('section').find('.stories__content-slide');\n\n    if (sliderInitLength === 2 || sliderInitLength === 3) {\n      storiesSlides.each((idx, el) => {\n        const clonedElement = el.cloneNode(true);\n        el.parentElement.appendChild(clonedElement);\n      });\n    }\n\n    storiesSlider.slick({\n      arrows: true,\n      dots: false,\n      slidesToShow: 1,\n      slidesToScroll: 1,\n      infinite: true,\n      speed: 1000,\n      autoplay: false,\n      autoplaySpeed: 7000,\n      cssEase: 'linear',\n      useTransform: isMS,\n      useCSS: isMS,\n      pauseOnHover: false,\n      focusOnSelect: true,\n      pauseOnDotsHover: false,\n      pauseOnFocus: false\n    });\n\n    storiesSlider.find('.slick-arrow').addClass('stories__arrow button--slide--round').html('<div class=\"round-btn-bg\"></div>');\n\n    const slides = storiesSlider.find('.slick-slide');\n\n    storiesSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {\n      const sliderLength = slick.slideCount;\n      const nextSupportSlide = nextSlide >= sliderInitLength ? nextSlide - sliderInitLength : nextSlide;\n      const currentSupportSlide = currentSlide >= sliderInitLength ? currentSlide - sliderInitLength : currentSlide;\n\n      storiesSupportSlides[currentSupportSlide].classList.remove('active');\n      storiesSupportSlides[nextSupportSlide].classList.add('active');\n\n      storiesSlider.find('.slick-visible').removeClass('slick-visible');\n      storiesSlider.find('.slick-disabled').removeClass('slick-disabled');\n\n      switch (nextSlide - currentSlide) {\n        case 0:\n        case 1:\n        case -1:\n          break;\n        case 1 - sliderLength:\n          slides[sliderLength + 1].classList.add('slick-visible');\n          slides[sliderLength + 2].classList.add('slick-visible');\n          slides[sliderLength + 2].classList.add('slick-disabled');\n          break;\n        case sliderLength - 1:\n          slides[0].classList.add('slick-visible');\n          slides[1].classList.add('slick-visible');\n          slides[1].classList.add('slick-disabled');\n          break;\n      }\n    });\n  }\n\n  // END Stories slider\n\n  // Clientsay slider\n\n  if (jQuery('.clientsay__slider').length !== 0) {\n    const clientsaySlider = jQuery('.clientsay__slider');\n    const clientsaySlides = clientsaySlider.find('.clientsay__slide');\n    const sliderLength = clientsaySlides.length;\n\n    if (sliderLength === 2 || sliderLength === 3) {\n      clientsaySlides.each((idx, el) => {\n        const clonedElement = el.cloneNode(true);\n        el.parentElement.appendChild(clonedElement);\n      });\n    }\n\n    clientsaySlider.slick({\n      arrows: true,\n      dots: false,\n      slidesToShow: 1,\n      slidesToScroll: 1,\n      infinite: true,\n      speed: 700,\n      autoplay: false,\n      autoplaySpeed: 7000,\n      cssEase: 'linear',\n      useTransform: isMS,\n      useCSS: isMS,\n      pauseOnHover: false,\n      focusOnSelect: true,\n      pauseOnDotsHover: false,\n      pauseOnFocus: false\n    });\n\n    clientsaySlider.find('.slick-arrow').addClass('clientsay__arrow button--slide--round').html('<div class=\"round-btn-bg\"></div>');\n\n    const slides = clientsaySlider.find('.slick-slide');\n\n    clientsaySlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {\n      const sliderLength = slick.slideCount;\n\n      clientsaySlider.find('.slick-visible').removeClass('slick-visible');\n      clientsaySlider.find('.slick-disabled').removeClass('slick-disabled');\n\n      switch (nextSlide - currentSlide) {\n        case 0:\n        case 1:\n        case -1:\n          break;\n        case 1 - sliderLength:\n          slides[sliderLength + 1].classList.add('slick-visible');\n          slides[sliderLength + 2].classList.add('slick-visible');\n          slides[sliderLength + 2].classList.add('slick-disabled');\n          break;\n        case sliderLength - 1:\n          slides[0].classList.add('slick-visible');\n          slides[1].classList.add('slick-visible');\n          slides[1].classList.add('slick-disabled');\n          break;\n      }\n    });\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\"), __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/scripts/slides.js?");

/***/ }),

/***/ "./assets/scripts/tabs.js":
/*!********************************!*\
  !*** ./assets/scripts/tabs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* TABS section scripts */\n\nif (document.querySelectorAll('.tabs').lenght !== 0) {\n  tabsSwitcher();\n\n  function tabsSwitcher() {\n    const tabs = document.querySelectorAll('.tabs');\n\n    tabs.forEach(tabSection => {\n      const tabsElements = tabSection.querySelectorAll('.tabs__list-item');\n      const tabsContent = tabSection.querySelectorAll('.tabs__content');\n\n      tabsElements.forEach((el, idx) => {\n        el.addEventListener('click', function (e) {\n          e.stopPropagation();\n          if (el.classList.contains('tabs__list-item_active')) {\n            return false;\n          }\n\n          const activeNumber = el.closest('.tabs__list').querySelector('.tabs__list-item_active').dataset.tab;\n\n          tabsElements[activeNumber].classList.remove('tabs__list-item_active');\n          tabsContent[activeNumber].classList.remove('tabs__content_active');\n\n          this.classList.add('tabs__list-item_active');\n          tabsContent[idx].classList.add('tabs__content_active');\n        });\n      });\n    });\n  }\n}\n\n/* END TABS section scripts */\n\n//# sourceURL=webpack:///./assets/scripts/tabs.js?");

/***/ }),

/***/ "./assets/styles/_app.scss":
/*!*********************************!*\
  !*** ./assets/styles/_app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/styles/_app.scss?");

/***/ })

/******/ });