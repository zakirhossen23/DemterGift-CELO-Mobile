"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/pages/Login/main.jsx":
/*!**********************************!*\
  !*** ./src/pages/Login/main.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateEvents; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main.css */ "./src/pages/Login/main.css");
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/layout/Header */ "./src/components/layout/Header/index.tsx");













function CreateEvents() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      modalShow = _useState2[0],
      setModalShow = _useState2[1];

  var regex = /\[(.*)\]/g;
  var str = decodeURIComponent(window.location.search);
  var m;
  var redirecting = "";

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    redirecting = m[1];
  }

  function TypeSet(_x) {
    return _TypeSet.apply(this, arguments);
  } //Celo


  function _TypeSet() {
    _TypeSet = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              window.localStorage.setItem("Type", e.target.getAttribute("type"));
              _context.next = 3;
              return onClickConnectCelo();

            case 3:
              window.location.href = redirecting;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _TypeSet.apply(this, arguments);
  }

  function onClickConnectCelo() {
    return _onClickConnectCelo.apply(this, arguments);
  }

  function _onClickConnectCelo() {
    _onClickConnectCelo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var result, getacc;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 2:
              result = _context2.sent;
              result;
              _context2.prev = 4;
              _context2.next = 7;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0xaef3'
                }] //44787

              });

            case 7:
              getacc = _context2.sent;
              getacc;
              _context2.next = 22;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](4);

              if (!(_context2.t0.code === 4902)) {
                _context2.next = 22;
                break;
              }

              _context2.prev = 14;
              _context2.next = 17;
              return window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0xaef3',
                  //44787
                  chainName: 'Alfajores Celo Testnet',
                  nativeCurrency: {
                    name: 'CELO',
                    symbol: 'CELO',
                    decimals: 18
                  },
                  rpcUrls: ['https://alfajores-forno.celo-testnet.org']
                }]
              });

            case 17:
              _context2.next = 22;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t1 = _context2["catch"](14);
              // handle "add" error
              console.log(_context2.t1);

            case 22:
              window.localStorage.setItem("ConnectedMetaCelo", "true");

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 11], [14, 19]]);
    }));
    return _onClickConnectCelo.apply(this, arguments);
  }

  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function EventManger() {
    if (window.localStorage.getItem("Type") == "manager") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        type: "manager",
        onClick: TypeSet,
        className: "Login eventManagerButton active"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        type: "manager",
        style: {
          fontSize: 35,
          color: "yellow"
        }
      }, "Event Manager")));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      type: "manager",
      onClick: TypeSet,
      className: "Login eventManagerButton"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      type: "manager",
      style: {
        fontSize: 35,
        color: "yellow"
      }
    }, "Event Manager")));
  }

  function DonatorType() {
    if (window.localStorage.getItem("Type") == "Donator") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        type: "Donator",
        onClick: TypeSet,
        className: "Login userButton active"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        type: "Donator",
        style: {
          color: "black"
        }
      }, "Donator")));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      type: "Donator",
      onClick: TypeSet,
      className: "Login userButton"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      type: "Donator",
      style: {
        color: "black"
      }
    }, "Donator")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_layout_Header__WEBPACK_IMPORTED_MODULE_8__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "Login row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "Login col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "Login container",
    style: {
      background: "transparent",
      padding: "19px",
      borderRadius: "4px",
      height: "100%",
      border: "white solid"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      margin: "0px 0px 30px 0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {
    style: {
      marginBottom: "10px"
    }
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      margin: "18px 0px",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(EventManger, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(DonatorType, null))))))));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/Login/main.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/Login/main.css ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 650px) {\r\n .Login.row{\r\n    width: 100%;\r\n }\r\n .Login.col{\r\n    width: 90%;\r\n }\r\n .Login.eventManagerButton{\r\n    width: 50%;\r\n    font-size: 5vw;\r\n }\r\n .Login.userButton{\r\n    width: 50%;\r\n    font-size: 5vw;\r\n }\r\n\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n  \r\n}\r\n\r\n\r\n  \r\n.eventManagerButton{\r\n    background: #5959e9;\r\n    height: 150px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-content: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    user-select: none;\r\n    color: yellow;\r\n}\r\n\r\n.eventManagerButton.active{\r\n    background: #0d0d5a;\r\n}\r\n.userButton.active{\r\n    background: #0e6616;\r\n}\r\n.userButton{\r\n    background: #59e964;\r\n    height: 150px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-content: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    user-select: none;\r\n}", "",{"version":3,"sources":["webpack://./src/pages/Login/main.css"],"names":[],"mappings":"AAAA;CACC;IACG,WAAW;CACd;CACA;IACG,UAAU;CACb;CACA;IACG,UAAU;IACV,cAAc;CACjB;CACA;IACG,UAAU;IACV,cAAc;CACjB;;AAED;AACA;;AAEA;;;;AAIA;IACI,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB","sourcesContent":["@media only screen and (max-width: 650px) {\r\n .Login.row{\r\n    width: 100%;\r\n }\r\n .Login.col{\r\n    width: 90%;\r\n }\r\n .Login.eventManagerButton{\r\n    width: 50%;\r\n    font-size: 5vw;\r\n }\r\n .Login.userButton{\r\n    width: 50%;\r\n    font-size: 5vw;\r\n }\r\n\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n  \r\n}\r\n\r\n\r\n  \r\n.eventManagerButton{\r\n    background: #5959e9;\r\n    height: 150px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-content: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    user-select: none;\r\n    color: yellow;\r\n}\r\n\r\n.eventManagerButton.active{\r\n    background: #0d0d5a;\r\n}\r\n.userButton.active{\r\n    background: #0e6616;\r\n}\r\n.userButton{\r\n    background: #59e964;\r\n    height: 150px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-content: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    user-select: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0890036a8d5ef957b405"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmZmMWMwNWY3ODZlYTEyNWNmZmEwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNXLFlBQVQsR0FBd0I7QUFDbkMsa0JBQWtDViwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU9XLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLGtCQUFrQixDQUFDQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWpCLENBQTlCO0FBQ0EsTUFBSUMsQ0FBSjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR04sS0FBSyxDQUFDUSxJQUFOLENBQVdQLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlLLENBQUMsQ0FBQ0csS0FBRixLQUFZVCxLQUFLLENBQUNVLFNBQXRCLEVBQWlDO0FBQzdCVixNQUFBQSxLQUFLLENBQUNVLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsV0FBVyxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFmO0FBQ0g7O0FBWmtDLFdBZXBCSyxPQWZvQjtBQUFBO0FBQUEsSUFvQm5DOzs7QUFwQm1DO0FBQUEsd01BZW5DLGlCQUF1QkMsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJVCxjQUFBQSxNQUFNLENBQUNVLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCLEVBQW9DRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixNQUF0QixDQUFwQztBQURKO0FBQUEscUJBRVVDLGtCQUFrQixFQUY1Qjs7QUFBQTtBQUdJZCxjQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JjLElBQWhCLEdBQXVCWCxXQUF2Qjs7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QU0sdUJBQXVCLG1CQUFtQix1QkFBdUIsTUFBTSxTQUFTLGdEQUFnRCxXQUFXLHNDQUFzQyw0QkFBNEIsc0JBQXNCLHdCQUF3QixzQkFBc0IsMEJBQTBCLDhCQUE4QixnQ0FBZ0MsNEJBQTRCLDBCQUEwQixzQkFBc0IsS0FBSyxtQ0FBbUMsNEJBQTRCLEtBQUssdUJBQXVCLDRCQUE0QixLQUFLLGdCQUFnQiw0QkFBNEIsc0JBQXNCLHdCQUF3QixzQkFBc0IsMEJBQTBCLDhCQUE4QixnQ0FBZ0MsNEJBQTRCLDBCQUEwQixLQUFLLG1CQUFtQjtBQUMvbEY7QUFDQSwrREFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDUHZDLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL0xvZ2luL21haW4uanN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL0xvZ2luL21haW4uY3NzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcblxyXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJ0AvY29tcG9uZW50cy9jb21wb25lbnRzL1VzZUZvcm1JbnB1dCc7XHJcblxyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XHJcbmltcG9ydCAnLi9tYWluLmNzcydcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9IZWFkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVFdmVudHMoKSB7XHJcbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgcmVnZXggPSAvXFxbKC4qKVxcXS9nO1xyXG4gICAgY29uc3Qgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgbGV0IG07XHJcbiAgICBsZXQgcmVkaXJlY3RpbmcgPSBcIlwiO1xyXG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXHJcbiAgICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xyXG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVkaXJlY3RpbmcgPSBtWzFdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBUeXBlU2V0KGUpIHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUeXBlXCIsIGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInR5cGVcIikpO1xyXG4gICAgICAgIGF3YWl0IG9uQ2xpY2tDb25uZWN0Q2VsbygpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdGluZztcclxuICAgIH1cclxuICAgIC8vQ2Vsb1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3RDZWxvKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgIHJlc3VsdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBnZXRhY2MgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFt7IGNoYWluSWQ6ICcweGFlZjMnLCB9XSwgLy80NDc4N1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZ2V0YWNjO1xyXG4gICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxyXG4gICAgICAgICAgICBpZiAoc3dpdGNoRXJyb3IuY29kZSA9PT0gNDkwMikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9hZGRFdGhlcmV1bUNoYWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogJzB4YWVmMycsIC8vNDQ3ODdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbk5hbWU6ICdBbGZham9yZXMgQ2VsbyBUZXN0bmV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ0VMTycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ0NFTE8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNVcmxzOiBbJ2h0dHBzOi8vYWxmYWpvcmVzLWZvcm5vLmNlbG8tdGVzdG5ldC5vcmcnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChhZGRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBcImFkZFwiIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBvdGhlciBcInN3aXRjaFwiIGVycm9yc1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiLCBcInRydWVcIilcclxuICAgIH1cclxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XHJcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gRXZlbnRNYW5nZXIoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gXCJtYW5hZ2VyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiB0eXBlPVwibWFuYWdlclwiIG9uQ2xpY2s9e1R5cGVTZXR9IGNsYXNzTmFtZT0nTG9naW4gZXZlbnRNYW5hZ2VyQnV0dG9uIGFjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdHlwZT1cIm1hbmFnZXJcIiBzdHlsZT17eyBmb250U2l6ZTogMzUsIGNvbG9yOiBcInllbGxvd1wiIH19PkV2ZW50IE1hbmFnZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgICAgIDxkaXYgdHlwZT1cIm1hbmFnZXJcIiBvbkNsaWNrPXtUeXBlU2V0fSBjbGFzc05hbWU9J0xvZ2luIGV2ZW50TWFuYWdlckJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiB0eXBlPVwibWFuYWdlclwiIHN0eWxlPXt7IGZvbnRTaXplOiAzNSwgY29sb3I6IFwieWVsbG93XCIgfX0+RXZlbnQgTWFuYWdlcjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+KVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gRG9uYXRvclR5cGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gXCJEb25hdG9yXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiB0eXBlPVwiRG9uYXRvclwiIG9uQ2xpY2s9e1R5cGVTZXR9IGNsYXNzTmFtZT0nTG9naW4gdXNlckJ1dHRvbiBhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHR5cGU9XCJEb25hdG9yXCIgc3R5bGU9e3sgIGNvbG9yOiBcImJsYWNrXCIgfX0+RG9uYXRvcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoPD5cclxuICAgICAgICAgICAgPGRpdiB0eXBlPVwiRG9uYXRvclwiIG9uQ2xpY2s9e1R5cGVTZXR9IGNsYXNzTmFtZT0nTG9naW4gdXNlckJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiB0eXBlPVwiRG9uYXRvclwiIHN0eWxlPXt7ICBjb2xvcjogXCJibGFja1wiIH19PkRvbmF0b3I8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPilcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+PD5cclxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMb2dpbiByb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9naW4gY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0xvZ2luIGNvbnRhaW5lcicgc3R5bGU9e3sgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiwgcGFkZGluZzogXCIxOXB4XCIsIGJvcmRlclJhZGl1czogXCI0cHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYm9yZGVyOiBcIndoaXRlIHNvbGlkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDMwcHggMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+TG9naW48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogXCIxOHB4IDBweFwiLGRpc3BsYXk6IFwiZmxleFwiLGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIn19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRNYW5nZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9uYXRvclR5cGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz48Lz5cclxuICAgICk7XHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG4gLkxvZ2luLnJvd3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuIH1cXHJcXG4gLkxvZ2luLmNvbHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gfVxcclxcbiAuTG9naW4uZXZlbnRNYW5hZ2VyQnV0dG9ue1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBmb250LXNpemU6IDV2dztcXHJcXG4gfVxcclxcbiAuTG9naW4udXNlckJ1dHRvbntcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZm9udC1zaXplOiA1dnc7XFxyXFxuIH1cXHJcXG5cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gIFxcclxcbi5ldmVudE1hbmFnZXJCdXR0b257XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1OTU5ZTk7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uZXZlbnRNYW5hZ2VyQnV0dG9uLmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZDogIzBkMGQ1YTtcXHJcXG59XFxyXFxuLnVzZXJCdXR0b24uYWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMGU2NjE2O1xcclxcbn1cXHJcXG4udXNlckJ1dHRvbntcXHJcXG4gICAgYmFja2dyb3VuZDogIzU5ZTk2NDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9Mb2dpbi9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDO0lBQ0csV0FBVztDQUNkO0NBQ0E7SUFDRyxVQUFVO0NBQ2I7Q0FDQTtJQUNHLFVBQVU7SUFDVixjQUFjO0NBQ2pCO0NBQ0E7SUFDRyxVQUFVO0lBQ1YsY0FBYztDQUNqQjs7QUFFRDtBQUNBOztBQUVBOzs7O0FBSUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG4gLkxvZ2luLnJvd3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuIH1cXHJcXG4gLkxvZ2luLmNvbHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gfVxcclxcbiAuTG9naW4uZXZlbnRNYW5hZ2VyQnV0dG9ue1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBmb250LXNpemU6IDV2dztcXHJcXG4gfVxcclxcbiAuTG9naW4udXNlckJ1dHRvbntcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZm9udC1zaXplOiA1dnc7XFxyXFxuIH1cXHJcXG5cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gIFxcclxcbi5ldmVudE1hbmFnZXJCdXR0b257XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1OTU5ZTk7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBjb2xvcjogeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uZXZlbnRNYW5hZ2VyQnV0dG9uLmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZDogIzBkMGQ1YTtcXHJcXG59XFxyXFxuLnVzZXJCdXR0b24uYWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMGU2NjE2O1xcclxcbn1cXHJcXG4udXNlckJ1dHRvbntcXHJcXG4gICAgYmFja2dyb3VuZDogIzU5ZTk2NDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMDg5MDAzNmE4ZDVlZjk1N2I0MDVcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm93IiwidG9hc3QiLCJDb2wiLCJCdXR0b24iLCJVc2VGb3JtSW5wdXQiLCJGb3JtIiwidXNlQ29udHJhY3QiLCJIZWFkZXIiLCJDcmVhdGVFdmVudHMiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJyZWdleCIsInN0ciIsImRlY29kZVVSSUNvbXBvbmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwibSIsInJlZGlyZWN0aW5nIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwiVHlwZVNldCIsImUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwib25DbGlja0Nvbm5lY3RDZWxvIiwiaHJlZiIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInJlc3VsdCIsInBhcmFtcyIsImNoYWluSWQiLCJnZXRhY2MiLCJjb2RlIiwiY2hhaW5OYW1lIiwibmF0aXZlQ3VycmVuY3kiLCJuYW1lIiwic3ltYm9sIiwiZGVjaW1hbHMiLCJycGNVcmxzIiwiY29uc29sZSIsImxvZyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJFdmVudE1hbmdlciIsImdldEl0ZW0iLCJmb250U2l6ZSIsImNvbG9yIiwiRG9uYXRvclR5cGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=