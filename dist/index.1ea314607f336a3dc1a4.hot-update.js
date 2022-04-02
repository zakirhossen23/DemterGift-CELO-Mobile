"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/pages/Home/mobile.tsx":
/*!***********************************!*\
  !*** ./src/pages/Home/mobile.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function Home() {
  var window;

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
              statusp = document.getElementById("CNTbutton");
              statusp.innerHTML = "CO";
              _context.next = 4;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 4:
              result = _context.sent;
              result;
              _context.prev = 6;
              _context.next = 9;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0xaef3'
                }] //44787

              });

            case 9:
              getacc = _context.sent;
              getacc;
              _context.next = 24;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](6);

              if (!(_context.t0.code === 4902)) {
                _context.next = 24;
                break;
              }

              _context.prev = 16;
              _context.next = 19;
              return window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0xaef3',
                  //44787
                  chainName: 'Alfajores Celo Testnet',
                  nativeCurrency: {
                    name: 'CUSD',
                    symbol: 'CUSD',
                    decimals: 18
                  },
                  rpcUrls: ['https://alfajores-forno.celo-testnet.org']
                }]
              });

            case 19:
              _context.next = 24;
              break;

            case 21:
              _context.prev = 21;
              _context.t1 = _context["catch"](16);
              // handle "add" error
              console.log(_context.t1);

            case 24:
              statusp.innerHTML = "Connected Successfully!";

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 13], [16, 21]]);
    }));
    return _Connect.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "wrapper",
    style: {
      justifyContent: "center",
      background: "#0e1f2a"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "row",
    style: {
      background: "#0e1f2a",
      width: "100%",
      display: "flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {
    src: "https://i.postimg.cc/Lsxrbz02/Logo-2.png",
    style: {
      width: "74vw"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "row",
    style: {
      background: "#0e1f2a",
      width: "100%",
      display: "flex",
      margin: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "col",
    style: {
      width: "88vw"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    onClick: Connect,
    style: {
      height: "15vw"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    onClick: Connect,
    className: "card card-body yellowbutton",
    style: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    onClick: Connect,
    className: "card-body",
    style: {
      fontSize: 23
    }
  }, "CONNECT TO A WALLET")))))));
}

/***/ }),

/***/ "./src/pages/Login/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/Login/index.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");







function Login() {
  var sleep = function sleep(ms) {
    return new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default())(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

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
              statusp = document.getElementById("CNTbutton");
              statusp.innerHTML = "CO";
              _context.next = 4;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 4:
              result = _context.sent;
              result;
              _context.prev = 6;
              _context.next = 9;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0xaef3'
                }] //44787

              });

            case 9:
              getacc = _context.sent;
              getacc;
              _context.next = 24;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](6);

              if (!(_context.t0.code === 4902)) {
                _context.next = 24;
                break;
              }

              _context.prev = 16;
              _context.next = 19;
              return window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0xaef3',
                  //44787
                  chainName: 'Alfajores Celo Testnet',
                  nativeCurrency: {
                    name: 'CUSD',
                    symbol: 'CUSD',
                    decimals: 18
                  },
                  rpcUrls: ['https://alfajores-forno.celo-testnet.org']
                }]
              });

            case 19:
              _context.next = 24;
              break;

            case 21:
              _context.prev = 21;
              _context.t1 = _context["catch"](16);
              // handle "add" error
              console.log(_context.t1);

            case 24:
              statusp.innerHTML = "Connected Successfully!";
              window.accounts = accounts;
              window.web3 = web3;

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 13], [16, 21]]);
    }));
    return _Connect.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      height: "78vw",
      background: "rgb(234 199 0)"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      padding: "6vw",
      top: "35vw",
      width: "100%",
      position: "absolute"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      height: "108vw",
      borderRadius: "8vw",
      display: "flex",
      overflow: "hidden",
      position: "relative",
      background: "rgb(255, 255, 255)",
      flexDirection: "column",
      justifyContent: "flex-start"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "div-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
    src: "https://www.crypto-careers.com/uploads/job/logo/13010252/opengraph_celo.jpg",
    style: {
      width: "35vw"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "div-center",
    style: {
      textAlign: "center",
      padding: "3vw",
      gap: "1vw",
      color: "rgb(3 58 100)",
      height: "29vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h4", {
    style: {
      fontSize: "7vw"
    }
  }, "Please enter your CELO private key")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      placeContent: "center",
      bottom: "0vw",
      position: "relative",
      padding: "3vw",
      gap: "5vw",
      alignItems: "center",
      flexDirection: "column"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", {
    placeholder: "Private Key",
    type: "password",
    className: "form-control",
    defaultValue: "",
    id: "privatekey",
    style: {
      fontSize: "4vw",
      height: "12vw"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    onClick: Connect,
    style: {
      width: "65vw",
      height: "15vw"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    onClick: Connect,
    className: "card card-body yellowbutton",
    style: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    onClick: Connect,
    id: "CNTbutton",
    className: "card-body",
    style: {
      fontSize: 25
    }
  }, "Connect"))))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "dcb01229fd411917051e"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjFlYTMxNDYwN2YzMzZhM2RjMWE0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUM5QixNQUFJQyxNQUFKOztBQUQ4QixXQUdaQyxPQUhZO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdNQUczQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUMsY0FBQUEsT0FEUixHQUNtQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBRG5CO0FBRUlGLGNBQUFBLE9BQU8sQ0FBQ0csU0FBUixHQUFrQixJQUFsQjtBQUZKO0FBQUEscUJBR3VCTCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCO0FBQUVDLGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUF4QixDQUh2Qjs7QUFBQTtBQUdRQyxjQUFBQSxNQUhSO0FBSUlBLGNBQUFBLE1BQU07QUFKVjtBQUFBO0FBQUEscUJBTTZCVCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCO0FBQ3pDQyxnQkFBQUEsTUFBTSxFQUFFLDRCQURpQztBQUV6Q0UsZ0JBQUFBLE1BQU0sRUFBRSxDQUFDO0FBQUVDLGtCQUFBQSxPQUFPLEVBQUU7QUFBWCxpQkFBRCxDQUZpQyxDQUVQOztBQUZPLGVBQXhCLENBTjdCOztBQUFBO0FBTWNDLGNBQUFBLE1BTmQ7QUFVUUEsY0FBQUEsTUFBTTtBQVZkO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLG9CQWFZLFlBQVlDLElBQVosS0FBcUIsSUFiakM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQWVzQmIsTUFBTSxDQUFDTSxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtBQUMxQkMsZ0JBQUFBLE1BQU0sRUFBRSx5QkFEa0I7QUFFMUJFLGdCQUFBQSxNQUFNLEVBQUUsQ0FDSjtBQUNJQyxrQkFBQUEsT0FBTyxFQUFFLFFBRGI7QUFDdUI7QUFDbkJHLGtC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LnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9Mb2dpbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuIGxldCB3aW5kb3c6IGFueTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBDb25uZWN0KCkge1xyXG4gICAgICAgIHZhciBzdGF0dXNwID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ05UYnV0dG9uXCIpKVxyXG4gICAgICAgIHN0YXR1c3AuaW5uZXJIVE1MPVwiQ09cIlxyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgIHJlc3VsdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBnZXRhY2MgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFt7IGNoYWluSWQ6ICcweGFlZjMnLCB9XSwgLy80NDc4N1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZ2V0YWNjO1xyXG4gICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxyXG4gICAgICAgICAgICBpZiAoc3dpdGNoRXJyb3IuY29kZSA9PT0gNDkwMikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9hZGRFdGhlcmV1bUNoYWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogJzB4YWVmMycsIC8vNDQ3ODdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbk5hbWU6ICdBbGZham9yZXMgQ2VsbyBUZXN0bmV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ1VTRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ0NVU0QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNVcmxzOiBbJ2h0dHBzOi8vYWxmYWpvcmVzLWZvcm5vLmNlbG8tdGVzdG5ldC5vcmcnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChhZGRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBcImFkZFwiIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBvdGhlciBcInN3aXRjaFwiIGVycm9yc1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0dXNwLmlubmVySFRNTCA9IFwiQ29ubmVjdGVkIFN1Y2Nlc3NmdWxseSFcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCIgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGJhY2tncm91bmQ6IFwiIzBlMWYyYVwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzBlMWYyYVwiLCB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kucG9zdGltZy5jYy9Mc3hyYnowMi9Mb2dvLTIucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiNzR2d1wiIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzBlMWYyYVwiLCB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiBcIjg4dndcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtDb25uZWN0fSAgc3R5bGU9e3sgaGVpZ2h0OiBcIjE1dndcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17Q29ubmVjdH0gIGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IHllbGxvd2J1dHRvblwiIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtDb25uZWN0fSAgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgZm9udFNpemU6IDIzIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT05ORUNUIFRPIEEgV0FMTEVUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICAgIGNvbnN0IHNsZWVwID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIENvbm5lY3QoKSB7XHJcbiAgICAgICAgdmFyIHN0YXR1c3AgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJDTlRidXR0b25cIikpXHJcbiAgICAgICAgc3RhdHVzcC5pbm5lckhUTUw9XCJDT1wiXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XHJcbiAgICAgICAgcmVzdWx0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldGFjYyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogW3sgY2hhaW5JZDogJzB4YWVmMycsIH1dLCAvLzQ0Nzg3XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnZXRhY2M7XHJcbiAgICAgICAgfSBjYXRjaCAoc3dpdGNoRXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBlcnJvciBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBjaGFpbiBoYXMgbm90IGJlZW4gYWRkZWQgdG8gTWV0YU1hc2suXHJcbiAgICAgICAgICAgIGlmIChzd2l0Y2hFcnJvci5jb2RlID09PSA0OTAyKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkOiAnMHhhZWYzJywgLy80NDc4N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluTmFtZTogJ0FsZmFqb3JlcyBDZWxvIFRlc3RuZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZUN1cnJlbmN5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdDVVNEJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnQ1VTRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzOiAxOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY1VybHM6IFsnaHR0cHM6Ly9hbGZham9yZXMtZm9ybm8uY2Vsby10ZXN0bmV0Lm9yZyddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGFkZEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIFwiYWRkXCIgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaGFuZGxlIG90aGVyIFwic3dpdGNoXCIgZXJyb3JzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXR1c3AuaW5uZXJIVE1MID0gXCJDb25uZWN0ZWQgU3VjY2Vzc2Z1bGx5IVwiXHJcbiAgICAgICAgd2luZG93LmFjY291bnRzID0gYWNjb3VudHM7XHJcbiAgICAgICAgd2luZG93LndlYjMgPSB3ZWIzO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiNzh2d1wiLCBiYWNrZ3JvdW5kOiBcInJnYigyMzQgMTk5IDApXCIgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI2dndcIiwgdG9wOiBcIjM1dndcIiwgd2lkdGg6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDh2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuY3J5cHRvLWNhcmVlcnMuY29tL3VwbG9hZHMvam9iL2xvZ28vMTMwMTAyNTIvb3BlbmdyYXBoX2NlbG8uanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM1dndcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjN2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiBcIjF2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDMgNTggMTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI5dndcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiBcIjd2d1wiIH19PlBsZWFzZSBlbnRlciB5b3VyIENFTE8gcHJpdmF0ZSBrZXk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBcIjB2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiM3Z3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IFwiNXZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaXZhdGUgS2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdwcml2YXRla2V5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiNHZ3XCIsIGhlaWdodDogXCIxMnZ3XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtDb25uZWN0fSBzdHlsZT17eyB3aWR0aDogXCI2NXZ3XCIsIGhlaWdodDogXCIxNXZ3XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e0Nvbm5lY3R9IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IHllbGxvd2J1dHRvblwiIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtDb25uZWN0fSBpZD0nQ05UYnV0dG9uJyBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBmb250U2l6ZTogMjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImRjYjAxMjI5ZmQ0MTE5MTcwNTFlXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJIb21lIiwid2luZG93IiwiQ29ubmVjdCIsInN0YXR1c3AiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicmVzdWx0IiwicGFyYW1zIiwiY2hhaW5JZCIsImdldGFjYyIsImNvZGUiLCJjaGFpbk5hbWUiLCJuYXRpdmVDdXJyZW5jeSIsIm5hbWUiLCJzeW1ib2wiLCJkZWNpbWFscyIsInJwY1VybHMiLCJjb25zb2xlIiwibG9nIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJkaXNwbGF5IiwibWFyZ2luIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJVc2VGb3JtSW5wdXQiLCJ1c2VIaXN0b3J5IiwiTG9naW4iLCJzbGVlcCIsIm1zIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJhY2NvdW50cyIsIndlYjMiLCJwYWRkaW5nIiwidG9wIiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJnYXAiLCJjb2xvciIsInBsYWNlQ29udGVudCIsImJvdHRvbSIsImFsaWduSXRlbXMiXSwic291cmNlUm9vdCI6IiJ9