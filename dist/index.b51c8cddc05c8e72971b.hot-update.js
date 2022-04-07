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
        className: "eventManagerButton active"
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
      className: "eventManagerButton"
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
        className: "userButton active"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        type: "Donator",
        style: {
          fontSize: 35,
          color: "black"
        }
      }, "Donator")));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      type: "Donator",
      onClick: TypeSet,
      className: "userButton"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      type: "Donator",
      style: {
        fontSize: 35,
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
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 650px) {\r\n .Login.row{\r\n\r\n }\r\n.Login.container{\r\n    width: 98%;\r\n}\r\n\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n    \r\n.eventManagerButton{\r\n    width: 350px;\r\n    background: #5959e9;\r\n    height: 150px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-content: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    user-select: none;\r\n    color: yellow;\r\n}\r\n\r\n.eventManagerButton.active{\r\n    background: #0d0d5a;\r\n}\r\n.userButton.active{\r\n    background: #0e6616;\r\n}\r\n.userButton{\r\n    width: 350px;\r\n    background: #59e964;\r\n    height: 150px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-content: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    user-select: none;\r\n}\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/pages/Login/main.css"],"names":[],"mappings":"AAAA;CACC;;CAEA;AACD;IACI,UAAU;AACd;;AAEA;AACA;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB;AACA","sourcesContent":["@media only screen and (max-width: 650px) {\r\n .Login.row{\r\n\r\n }\r\n.Login.container{\r\n    width: 98%;\r\n}\r\n\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n    \r\n.eventManagerButton{\r\n    width: 350px;\r\n    background: #5959e9;\r\n    height: 150px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-content: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    user-select: none;\r\n    color: yellow;\r\n}\r\n\r\n.eventManagerButton.active{\r\n    background: #0d0d5a;\r\n}\r\n.userButton.active{\r\n    background: #0e6616;\r\n}\r\n.userButton{\r\n    width: 350px;\r\n    background: #59e964;\r\n    height: 150px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-content: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n    user-select: none;\r\n}\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "7f464805a4e7607357eb"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmI1MWM4Y2RkYzA1YzhlNzI5NzFiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNXLFlBQVQsR0FBd0I7QUFDbkMsa0JBQWtDViwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU9XLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLGtCQUFrQixDQUFDQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWpCLENBQTlCO0FBQ0EsTUFBSUMsQ0FBSjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR04sS0FBSyxDQUFDUSxJQUFOLENBQVdQLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlLLENBQUMsQ0FBQ0csS0FBRixLQUFZVCxLQUFLLENBQUNVLFNBQXRCLEVBQWlDO0FBQzdCVixNQUFBQSxLQUFLLENBQUNVLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsV0FBVyxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFmO0FBQ0g7O0FBWmtDLFdBZXBCSyxPQWZvQjtBQUFBO0FBQUEsSUFvQm5DOzs7QUFwQm1DO0FBQUEsd01BZW5DLGlCQUF1QkMsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJVCxjQUFBQSxNQUFNLENBQUNVLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCLEVBQW9DRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixNQUF0QixDQUFwQztBQURKO0FBQUEscUJBRVVDLGtCQUFrQixFQUY1Qjs7QUFBQTtBQUdJZCxjQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JjLElBQWhCLEdBQXVCWCxXQUF2Qjs7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QiwwQkFBMEIsOEJBQThCLGdDQUFnQyw0QkFBNEIsMEJBQTBCLHNCQUFzQixLQUFLLG1DQUFtQyw0QkFBNEIsS0FBSyx1QkFBdUIsNEJBQTRCLEtBQUssZ0JBQWdCLHFCQUFxQiw0QkFBNEIsc0JBQXNCLHdCQUF3QixzQkFBc0IsMEJBQTBCLDhCQUE4QixnQ0FBZ0MsNEJBQTRCLDBCQUEwQixLQUFLLEtBQUssMkJBQTJCO0FBQ2p6RTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUNQdkMscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvTG9naW4vbWFpbi5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvTG9naW4vbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvbmVudHMvVXNlRm9ybUlucHV0JztcclxuXHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcclxuaW1wb3J0ICcuL21haW4uY3NzJ1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUV2ZW50cygpIHtcclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XHJcbiAgICBjb25zdCBzdHIgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBsZXQgbTtcclxuICAgIGxldCByZWRpcmVjdGluZyA9IFwiXCI7XHJcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcclxuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XHJcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZWRpcmVjdGluZyA9IG1bMV07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIFR5cGVTZXQoZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlR5cGVcIiwgZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSk7XHJcbiAgICAgICAgYXdhaXQgb25DbGlja0Nvbm5lY3RDZWxvKClcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0aW5nO1xyXG4gICAgfVxyXG4gICAgLy9DZWxvXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29ubmVjdENlbG8oKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XHJcbiAgICAgICAgcmVzdWx0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldGFjYyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogW3sgY2hhaW5JZDogJzB4YWVmMycsIH1dLCAvLzQ0Nzg3XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnZXRhY2M7XHJcbiAgICAgICAgfSBjYXRjaCAoc3dpdGNoRXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBlcnJvciBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBjaGFpbiBoYXMgbm90IGJlZW4gYWRkZWQgdG8gTWV0YU1hc2suXHJcbiAgICAgICAgICAgIGlmIChzd2l0Y2hFcnJvci5jb2RlID09PSA0OTAyKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkOiAnMHhhZWYzJywgLy80NDc4N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluTmFtZTogJ0FsZmFqb3JlcyBDZWxvIFRlc3RuZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZUN1cnJlbmN5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdDRUxPJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnQ0VMTycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzOiAxOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY1VybHM6IFsnaHR0cHM6Ly9hbGZham9yZXMtZm9ybm8uY2Vsby10ZXN0bmV0Lm9yZyddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGFkZEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIFwiYWRkXCIgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaGFuZGxlIG90aGVyIFwic3dpdGNoXCIgZXJyb3JzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNvbm5lY3RlZE1ldGFDZWxvXCIsIFwidHJ1ZVwiKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBFdmVudE1hbmdlcigpIHtcclxuICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVHlwZVwiKSA9PSBcIm1hbmFnZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHR5cGU9XCJtYW5hZ2VyXCIgb25DbGljaz17VHlwZVNldH0gY2xhc3NOYW1lPSdldmVudE1hbmFnZXJCdXR0b24gYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB0eXBlPVwibWFuYWdlclwiIHN0eWxlPXt7IGZvbnRTaXplOiAzNSwgY29sb3I6IFwieWVsbG93XCIgfX0+RXZlbnQgTWFuYWdlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoPD5cclxuICAgICAgICAgICAgPGRpdiB0eXBlPVwibWFuYWdlclwiIG9uQ2xpY2s9e1R5cGVTZXR9IGNsYXNzTmFtZT0nZXZlbnRNYW5hZ2VyQnV0dG9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHR5cGU9XCJtYW5hZ2VyXCIgc3R5bGU9e3sgZm9udFNpemU6IDM1LCBjb2xvcjogXCJ5ZWxsb3dcIiB9fT5FdmVudCBNYW5hZ2VyPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz4pXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBEb25hdG9yVHlwZSgpIHtcclxuICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVHlwZVwiKSA9PSBcIkRvbmF0b3JcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHR5cGU9XCJEb25hdG9yXCIgb25DbGljaz17VHlwZVNldH0gY2xhc3NOYW1lPSd1c2VyQnV0dG9uIGFjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdHlwZT1cIkRvbmF0b3JcIiBzdHlsZT17eyBmb250U2l6ZTogMzUsIGNvbG9yOiBcImJsYWNrXCIgfX0+RG9uYXRvcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoPD5cclxuICAgICAgICAgICAgPGRpdiB0eXBlPVwiRG9uYXRvclwiIG9uQ2xpY2s9e1R5cGVTZXR9IGNsYXNzTmFtZT0ndXNlckJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiB0eXBlPVwiRG9uYXRvclwiIHN0eWxlPXt7IGZvbnRTaXplOiAzNSwgY29sb3I6IFwiYmxhY2tcIiB9fT5Eb25hdG9yPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz4pXHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Pjw+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9naW4gcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ2luIGNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdMb2dpbiBjb250YWluZXInIHN0eWxlPXt7ICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIHBhZGRpbmc6IFwiMTlweFwiLCBib3JkZXJSYWRpdXM6IFwiNHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMHB4IDBweCAzMHB4IDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkxvZ2luPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46IFwiMThweCAwcHhcIixkaXNwbGF5OiBcImZsZXhcIixqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJ9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50TWFuZ2VyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvbmF0b3JUeXBlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+PC8+XHJcbiAgICApO1xyXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxyXFxuIC5Mb2dpbi5yb3d7XFxyXFxuXFxyXFxuIH1cXHJcXG4uTG9naW4uY29udGFpbmVye1xcclxcbiAgICB3aWR0aDogOTglO1xcclxcbn1cXHJcXG5cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgXFxyXFxuLmV2ZW50TWFuYWdlckJ1dHRvbntcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNTk1OWU5O1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmV2ZW50TWFuYWdlckJ1dHRvbi5hY3RpdmV7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwZDBkNWE7XFxyXFxufVxcclxcbi51c2VyQnV0dG9uLmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZDogIzBlNjYxNjtcXHJcXG59XFxyXFxuLnVzZXJCdXR0b257XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzU5ZTk2NDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvTG9naW4vbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQzs7Q0FFQTtBQUNEO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxyXFxuIC5Mb2dpbi5yb3d7XFxyXFxuXFxyXFxuIH1cXHJcXG4uTG9naW4uY29udGFpbmVye1xcclxcbiAgICB3aWR0aDogOTglO1xcclxcbn1cXHJcXG5cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgXFxyXFxuLmV2ZW50TWFuYWdlckJ1dHRvbntcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNTk1OWU5O1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmV2ZW50TWFuYWdlckJ1dHRvbi5hY3RpdmV7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwZDBkNWE7XFxyXFxufVxcclxcbi51c2VyQnV0dG9uLmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZDogIzBlNjYxNjtcXHJcXG59XFxyXFxuLnVzZXJCdXR0b257XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzU5ZTk2NDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjdmNDY0ODA1YTRlNzYwNzM1N2ViXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJvdyIsInRvYXN0IiwiQ29sIiwiQnV0dG9uIiwiVXNlRm9ybUlucHV0IiwiRm9ybSIsInVzZUNvbnRyYWN0IiwiSGVhZGVyIiwiQ3JlYXRlRXZlbnRzIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwicmVnZXgiLCJzdHIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsIm0iLCJyZWRpcmVjdGluZyIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsIlR5cGVTZXQiLCJlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIm9uQ2xpY2tDb25uZWN0Q2VsbyIsImhyZWYiLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJyZXN1bHQiLCJwYXJhbXMiLCJjaGFpbklkIiwiZ2V0YWNjIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImNvbnNvbGUiLCJsb2ciLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiRXZlbnRNYW5nZXIiLCJnZXRJdGVtIiwiZm9udFNpemUiLCJjb2xvciIsIkRvbmF0b3JUeXBlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJib3JkZXIiLCJtYXJnaW4iLCJtYXJnaW5Cb3R0b20iXSwic291cmNlUm9vdCI6IiJ9