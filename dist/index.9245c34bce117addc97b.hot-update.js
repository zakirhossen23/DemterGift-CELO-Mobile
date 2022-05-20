"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/pages/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.css */ "./src/pages/Home/home.css");





function Home() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();

  function Connect() {
    return _Connect.apply(this, arguments);
  }

  function _Connect() {
    _Connect = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var statusp, result, getacc;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              statusp = document.getElementById("CNTbutton");
              statusp.innerHTML = "Connecting...";
              _context.next = 5;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 5:
              result = _context.sent;
              result;
              _context.prev = 7;
              _context.next = 10;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0xaef3'
                }] //44787

              });

            case 10:
              getacc = _context.sent;
              getacc;
              _context.next = 25;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](7);

              if (!(_context.t0.code === 4902)) {
                _context.next = 25;
                break;
              }

              _context.prev = 17;
              _context.next = 20;
              return window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0xaef3',
                  //44787
                  chainName: 'Alfajores Celo Testnet',
                  nativeCurrency: {
                    name: 'CEUR',
                    symbol: 'CEUR',
                    decimals: 18
                  },
                  rpcUrls: ['https://alfajores-forno.celo-testnet.org']
                }]
              });

            case 20:
              _context.next = 25;
              break;

            case 22:
              _context.prev = 22;
              _context.t1 = _context["catch"](17);
              // handle "add" error
              console.log(_context.t1);

            case 25:
              statusp.innerHTML = "Connected Successfully!";
              window.localStorage.setItem("ConnectedMetaCelo", "true");
              _context.next = 32;
              break;

            case 29:
              _context.prev = 29;
              _context.t2 = _context["catch"](0);
              return _context.abrupt("return");

            case 32:
              history.push("/welcome");

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 29], [7, 14], [17, 22]]);
    }));
    return _Connect.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "home-wrapper",
    style: {
      justifyContent: "center",
      background: "#0e1f2a"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "home-row",
    style: {
      background: "#0e1f2a",
      width: "100%",
      display: "flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {
    className: "home-img",
    src: "https://i.postimg.cc/Lsxrbz02/Logo-2.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "home-row",
    style: {
      background: "#0e1f2a",
      width: "100%",
      display: "flex",
      margin: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "home-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    onClick: Connect,
    className: "home-connectBTN",
    style: {
      height: "15vw"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    onClick: Connect,
    className: "card card-body yellowbutton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    id: "CNTbutton",
    onClick: Connect,
    className: "home card-body"
  }, "CONNECT TO CELO WALLET")))))));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/Home/home.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/Home/home.css ***!
  \***********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 500px) {\r\n    .home-wrapper{\r\n        align-items: stretch;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        min-height: 100vh;\r\n        overflow: hidden;\r\n        position: relative;\r\n        height: 100%;\r\n        width: 100%;\r\n    }\r\n    .home-row{\r\n        place-content: center;\r\n        margin-bottom: 23px;\r\n        flex-wrap: wrap;\r\n        margin-top: calc(var(--bs-gutter-y) * -1);\r\n        margin-left: calc(var(--bs-gutter-x) * -0.5);\r\n    }\r\n    .home-img{\r\n        width: 74em;\r\n    }\r\n    .home-col{\r\n        width: 17em;\r\n\r\n    }\r\n    .home-connectBTN{\r\n        height: 3em;\r\n    }\r\n    .home .card-body{\r\n        font-size: 1.3em;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/pages/Home/home.css"],"names":[],"mappings":"AAAA;IACI;QACI,oBAAoB;QACpB,aAAa;QACb,sBAAsB;QACtB,8BAA8B;QAC9B,iBAAiB;QACjB,gBAAgB;QAChB,kBAAkB;QAClB,YAAY;QACZ,WAAW;IACf;IACA;QACI,qBAAqB;QACrB,mBAAmB;QACnB,eAAe;QACf,yCAAyC;QACzC,4CAA4C;IAChD;IACA;QACI,WAAW;IACf;IACA;QACI,WAAW;;IAEf;IACA;QACI,WAAW;IACf;IACA;QACI,gBAAgB;IACpB;AACJ","sourcesContent":["@media only screen and (max-width: 500px) {\r\n    .home-wrapper{\r\n        align-items: stretch;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n        min-height: 100vh;\r\n        overflow: hidden;\r\n        position: relative;\r\n        height: 100%;\r\n        width: 100%;\r\n    }\r\n    .home-row{\r\n        place-content: center;\r\n        margin-bottom: 23px;\r\n        flex-wrap: wrap;\r\n        margin-top: calc(var(--bs-gutter-y) * -1);\r\n        margin-left: calc(var(--bs-gutter-x) * -0.5);\r\n    }\r\n    .home-img{\r\n        width: 74em;\r\n    }\r\n    .home-col{\r\n        width: 17em;\r\n\r\n    }\r\n    .home-connectBTN{\r\n        height: 3em;\r\n    }\r\n    .home .card-body{\r\n        font-size: 1.3em;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/Home/home.css":
/*!*********************************!*\
  !*** ./src/pages/Home/home.css ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/Home/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/Home/home.css",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/Home/home.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "958768189ecc1478f9a8"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjkyNDVjMzRiY2UxMTdhZGRjOTdiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ2UsU0FBU0UsSUFBVCxHQUFnQjtBQUMzQixNQUFJQyxPQUFPLEdBQUdGLDREQUFVLEVBQXhCOztBQUQyQixXQUdaRyxPQUhZO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdNQUczQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVZQyxjQUFBQSxPQUZaLEdBRXVCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FGdkI7QUFHUUYsY0FBQUEsT0FBTyxDQUFDRyxTQUFSLEdBQW9CLGVBQXBCO0FBSFI7QUFBQSxxQkFJMkJDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFBRUMsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQXhCLENBSjNCOztBQUFBO0FBSVlDLGNBQUFBLE1BSlo7QUFLUUEsY0FBQUEsTUFBTTtBQUxkO0FBQUE7QUFBQSxxQkFPaUNKLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFDekNDLGdCQUFBQSxNQUFNLEVBQUUsNEJBRGlDO0FBRXpDRSxnQkFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUFELENBRmlDLENBRVA7O0FBRk8sZUFBeEIsQ0FQakM7O0FBQUE7QUFPa0JDLGNBQUFBLE1BUGxCO0FBV1lBLGNBQUFBLE1BQU07QUFYbEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBY2dCLFlBQVlDLElBQVosS0FBcUIsSUFkckM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQWdCMEJSLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFDMUJDLGdCQUFBQSxNQUFNLEVBQUUseUJBRGtCO0FBRTFCRSxnQkFBQUEsTUFBTSxFQUFFLENBQ0o7QUFDSUMsa0JBQUFBLE9BQU8sRUFBRSxRQURiO0FBQ3VCO0FBQ25CRyxrQkFBQUEsU0FBUyxFQUFFLHdCQUZmO0FBR0lDLGtCQUFBQSxjQUFjLEVBQUU7QUFDWkMsb0JBQUFBLElBQUksRUFBRSxNQURNO0FBRVpDLG9CQUFBQSxNQUFNLEVBQUUsTUFGSTtBQUdaQyxvQkFBQUEsUUFBUSxFQUFFO0FBSEUsbUJBSHBCO0FBUUlDLGtCQUFBQSxPQUFPLEVBQUUsQ0FBQywwQ0FBRDtBQVJiLGlCQURJO0FBRmtCLGVBQXhCLENBaEIxQjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZ0NvQjtBQUNBQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBakNwQjtBQXNDUXBCLGNBQUFBLE9BQU8sQ0FBQ0csU0FBUixHQUFvQix5QkFBcEI7QUFDQUMsY0FBQUEsTUFBTSxDQUFDaUIsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsbUJBQTVCLEVBQWlELE1BQWpEO0FBdkNSO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUE0Q0l4QixjQUFBQSxPQUFPLENBQUN5QixJQUFSLENBQWEsVUFBYjs7QUE1Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIMkI7QUFBQTtBQUFBOztBQWtEM0Isc0JBQVEsaUhBQ0o7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixTQUFLLEVBQUU7QUFBRUMsTUFBQUEsY0FBYyxFQUFFLFFBQWxCO0FBQTRCQyxNQUFBQSxVQUFVLEVBQUU7QUFBeEM7QUFBckMsa0JBQ0k7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixTQUFLLEVBQUU7QUFBRUEsTUFBQUEsVUFBVSxFQUFFLFNBQWQ7QUFBeUJDLE1BQUFBLEtBQUssRUFBRSxNQUFoQztBQUF3Q0MsTUFBQUEsT0FBTyxFQUFFO0FBQWpEO0FBQWpDLGtCQUNJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBMEIsT0FBRyxFQUFDO0FBQTlCLElBREosQ0FESixlQUlJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBMEIsU0FBSyxFQUFFO0FBQUVGLE1BQUFBLFVBQVUsRUFBRSxTQUFkO0FBQXlCQyxNQUFBQSxLQUFLLEVBQUUsTUFBaEM7QUFBd0NDLE1BQUFBLE9BQU8sRUFBRSxNQUFqRDtBQUF5REMsTUFBQUEsTUFBTSxFQUFFO0FBQWpFO0FBQWpDLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxXQUFPLEVBQUU3QixPQUFkO0FBQXVCLGFBQVMsRUFBQyxpQkFBakM7QUFBbUQsU0FBSyxFQUFFO0FBQUU4QixNQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUExRCxrQkFDSTtBQUFLLFdBQU8sRUFBRTlCLE9BQWQ7QUFBdUIsYUFBUyxFQUFDO0FBQWpDLGtCQUNJO0FBQUssTUFBRSxFQUFDLFdBQVI7QUFBb0IsV0FBTyxFQUFFQSxPQUE3QjtBQUFzQyxhQUFTLEVBQUM7QUFBaEQsOEJBREosQ0FESixDQURKLENBREosQ0FKSixDQURJLENBQVI7QUFvQkg7Ozs7Ozs7Ozs7Ozs7OztBQzFFRDtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EscUZBQXFGLHNCQUFzQixpQ0FBaUMsMEJBQTBCLG1DQUFtQywyQ0FBMkMsOEJBQThCLDZCQUE2QiwrQkFBK0IseUJBQXlCLHdCQUF3QixTQUFTLGtCQUFrQixrQ0FBa0MsZ0NBQWdDLDRCQUE0QixzREFBc0QseURBQXlELFNBQVMsa0JBQWtCLHdCQUF3QixTQUFTLGtCQUFrQix3QkFBd0IsYUFBYSx5QkFBeUIsd0JBQXdCLFNBQVMseUJBQXlCLDZCQUE2QixTQUFTLEtBQUssT0FBTywwRkFBMEYsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sb0VBQW9FLHNCQUFzQixpQ0FBaUMsMEJBQTBCLG1DQUFtQywyQ0FBMkMsOEJBQThCLDZCQUE2QiwrQkFBK0IseUJBQXlCLHdCQUF3QixTQUFTLGtCQUFrQixrQ0FBa0MsZ0NBQWdDLDRCQUE0QixzREFBc0QseURBQXlELFNBQVMsa0JBQWtCLHdCQUF3QixTQUFTLGtCQUFrQix3QkFBd0IsYUFBYSx5QkFBeUIsd0JBQXdCLFNBQVMseUJBQXlCLDZCQUE2QixTQUFTLEtBQUssbUJBQW1CO0FBQ3JpRTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ052QyxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF3RztBQUN4RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7QUFHeEIsSUFBSSxJQUFVO0FBQ2QsT0FBTyw0RkFBYyxJQUFJLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsNEZBQWM7QUFDdkMsb0NBQW9DLDBFQUFXLEdBQUcsNEZBQWM7O0FBRWhFLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sa0lBQTJEO0FBQ2pFLE1BQU07QUFBQTtBQUNOLHNEQUFzRCwwRUFBVyxHQUFHLDRGQUFjO0FBQ2xGLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQywwRUFBVyxHQUFHLDRGQUFjOztBQUV0RSxxQkFBcUIscUZBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUcwRTtBQUMxRSxPQUFPLCtEQUFlLHFGQUFPLElBQUksNEZBQWMsR0FBRyw0RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7OztVQ25GN0UscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvSG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvSG9tZS9ob21lLmNzcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9Ib21lL2hvbWUuY3NzP2EyNjAiLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgJy4vaG9tZS5jc3MnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBDb25uZWN0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNwID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ05UYnV0dG9uXCIpKVxyXG4gICAgICAgICAgICBzdGF0dXNwLmlubmVySFRNTCA9IFwiQ29ubmVjdGluZy4uLlwiXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgICAgICByZXN1bHQ7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRhY2MgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogW3sgY2hhaW5JZDogJzB4YWVmMycsIH1dLCAvLzQ0Nzg3XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGdldGFjYztcclxuICAgICAgICAgICAgfSBjYXRjaCAoc3dpdGNoRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxyXG4gICAgICAgICAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICcweGFlZjMnLCAvLzQ0Nzg3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluTmFtZTogJ0FsZmFqb3JlcyBDZWxvIFRlc3RuZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0NFVVInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnQ0VVUicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY1VybHM6IFsnaHR0cHM6Ly9hbGZham9yZXMtZm9ybm8uY2Vsby10ZXN0bmV0Lm9yZyddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChhZGRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgXCJhZGRcIiBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIG90aGVyIFwic3dpdGNoXCIgZXJyb3JzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdHVzcC5pbm5lckhUTUwgPSBcIkNvbm5lY3RlZCBTdWNjZXNzZnVsbHkhXCIgIFxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiLCBcInRydWVcIilcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBoaXN0b3J5LnB1c2goXCIvd2VsY29tZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtd3JhcHBlclwiIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kOiBcIiMwZTFmMmFcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXJvd1wiIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzBlMWYyYVwiLCB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2hvbWUtaW1nJyBzcmM9XCJodHRwczovL2kucG9zdGltZy5jYy9Mc3hyYnowMi9Mb2dvLTIucG5nXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1yb3dcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiMwZTFmMmFcIiwgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWNvbFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e0Nvbm5lY3R9IGNsYXNzTmFtZT1cImhvbWUtY29ubmVjdEJUTlwiIHN0eWxlPXt7IGhlaWdodDogXCIxNXZ3XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17Q29ubmVjdH0gY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgeWVsbG93YnV0dG9uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nQ05UYnV0dG9uJyBvbkNsaWNrPXtDb25uZWN0fSBjbGFzc05hbWU9XCJob21lIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENPTk5FQ1QgVE8gQ0VMTyBXQUxMRVRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgLmhvbWUtd3JhcHBlcntcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuaG9tZS1yb3d7XFxyXFxuICAgICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1icy1ndXR0ZXIteSkgKiAtMSk7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1icy1ndXR0ZXIteCkgKiAtMC41KTtcXHJcXG4gICAgfVxcclxcbiAgICAuaG9tZS1pbWd7XFxyXFxuICAgICAgICB3aWR0aDogNzRlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuaG9tZS1jb2x7XFxyXFxuICAgICAgICB3aWR0aDogMTdlbTtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAuaG9tZS1jb25uZWN0QlROe1xcclxcbiAgICAgICAgaGVpZ2h0OiAzZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmhvbWUgLmNhcmQtYm9keXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL0hvbWUvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSTtRQUNJLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5QixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVztJQUNmO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZix5Q0FBeUM7UUFDekMsNENBQTRDO0lBQ2hEO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7O0lBRWY7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAuaG9tZS13cmFwcGVye1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5ob21lLXJvd3tcXHJcXG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWJzLWd1dHRlci15KSAqIC0xKTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLWJzLWd1dHRlci14KSAqIC0wLjUpO1xcclxcbiAgICB9XFxyXFxuICAgIC5ob21lLWltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiA3NGVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5ob21lLWNvbHtcXHJcXG4gICAgICAgIHdpZHRoOiAxN2VtO1xcclxcblxcclxcbiAgICB9XFxyXFxuICAgIC5ob21lLWNvbm5lY3RCVE57XFxyXFxuICAgICAgICBoZWlnaHQ6IDNlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuaG9tZSAuY2FyZC1ib2R5e1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI5NTg3NjgxODllY2MxNDc4ZjlhOFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlSGlzdG9yeSIsIkhvbWUiLCJoaXN0b3J5IiwiQ29ubmVjdCIsInN0YXR1c3AiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicmVzdWx0IiwicGFyYW1zIiwiY2hhaW5JZCIsImdldGFjYyIsImNvZGUiLCJjaGFpbk5hbWUiLCJuYXRpdmVDdXJyZW5jeSIsIm5hbWUiLCJzeW1ib2wiLCJkZWNpbWFscyIsInJwY1VybHMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmQiLCJ3aWR0aCIsImRpc3BsYXkiLCJtYXJnaW4iLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9