"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

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
              _context.next = 3;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 3:
              result = _context.sent;
              result;
              _context.prev = 5;
              _context.next = 8;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0xaef3'
                }] //44787

              });

            case 8:
              getacc = _context.sent;
              getacc;
              _context.next = 23;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](5);

              if (!(_context.t0.code === 4902)) {
                _context.next = 23;
                break;
              }

              _context.prev = 15;
              _context.next = 18;
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

            case 18:
              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t1 = _context["catch"](15);
              // handle "add" error
              console.log(_context.t1);

            case 23:
              statusp.innerHTML = "Connected Successfully!";
              window.accounts = accounts;
              window.web3 = web3;

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 12], [15, 20]]);
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
/******/ 	__webpack_require__.h = function() { return "1ea314607f336a3dc1a4"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjMxZGMyZjlhYzMxNWE4ZWJjYjY2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNNLEtBQVQsR0FBaUI7QUFDNUIsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsRUFBRDtBQUFBLFdBQVEsSUFBSSx1RkFBUSxVQUFDQyxPQUFEO0FBQUEsYUFBYUMsVUFBVSxDQUFDRCxPQUFELEVBQVVELEVBQVYsQ0FBdkI7QUFBQSxLQUFaLENBQVI7QUFBQSxHQUFkOztBQUQ0QixXQUdiRyxPQUhhO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdNQUc1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUMsY0FBQUEsT0FEUixHQUNtQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBRG5CO0FBQUE7QUFBQSxxQkFFdUJDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFBRUMsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQXhCLENBRnZCOztBQUFBO0FBRVFDLGNBQUFBLE1BRlI7QUFHSUEsY0FBQUEsTUFBTTtBQUhWO0FBQUE7QUFBQSxxQkFLNkJKLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFDekNDLGdCQUFBQSxNQUFNLEVBQUUsNEJBRGlDO0FBRXpDRSxnQkFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUFELENBRmlDLENBRVA7O0FBRk8sZUFBeEIsQ0FMN0I7O0FBQUE7QUFLY0MsY0FBQUEsTUFMZDtBQVNRQSxjQUFBQSxNQUFNO0FBVGQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBWVksWUFBWUMsSUFBWixLQUFxQixJQVpqQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBY3NCUixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENB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QUFJLEVBQUMsVUFGVDtBQUdJLGFBQVMsRUFBQyxjQUhkO0FBSUksZ0JBQVksRUFBQyxFQUpqQjtBQUtJLE1BQUUsRUFBQyxZQUxQO0FBTUksU0FBSyxFQUFFO0FBQUVLLE1BQUFBLFFBQVEsRUFBRSxLQUFaO0FBQW1CZCxNQUFBQSxNQUFNLEVBQUU7QUFBM0I7QUFOWCxJQWJKLGVBcUJJO0FBQUssV0FBTyxFQUFFeEIsT0FBZDtBQUF1QixTQUFLLEVBQUU7QUFBRTRCLE1BQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCSixNQUFBQSxNQUFNLEVBQUU7QUFBekI7QUFBOUIsa0JBQ0k7QUFBSyxXQUFPLEVBQUV4QixPQUFkO0FBQXVCLGFBQVMsRUFBQyw2QkFBakM7QUFBK0QsU0FBSyxFQUFFO0FBQXRFLGtCQUNJO0FBQUssV0FBTyxFQUFFQSxPQUFkO0FBQXVCLE1BQUUsRUFBQyxXQUExQjtBQUFzQyxhQUFTLEVBQUMsV0FBaEQ7QUFBNEQsU0FBSyxFQUFFO0FBQUVzQyxNQUFBQSxRQUFRLEVBQUU7QUFBWjtBQUFuRSxlQURKLENBREosQ0FyQkosQ0FqQ0osQ0FESixDQUpKLENBREksQ0FBUjtBQTJFSDs7Ozs7Ozs7VUMzSEQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvTG9naW4vaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL1VzZUZvcm1JbnB1dCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gICAgY29uc3Qgc2xlZXAgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gQ29ubmVjdCgpIHtcclxuICAgICAgICB2YXIgc3RhdHVzcCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkNOVGJ1dHRvblwiKSlcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgICAgICByZXN1bHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0YWNjID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiAnMHhhZWYzJywgfV0sIC8vNDQ3ODdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGdldGFjYztcclxuICAgICAgICB9IGNhdGNoIChzd2l0Y2hFcnJvcikge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGVycm9yIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIGNoYWluIGhhcyBub3QgYmVlbiBhZGRlZCB0byBNZXRhTWFzay5cclxuICAgICAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICcweGFlZjMnLCAvLzQ0Nzg3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5OYW1lOiAnQWxmYWpvcmVzIENlbG8gVGVzdG5ldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlQ3VycmVuY3k6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0NVU0QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6ICdDVVNEJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDE4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnBjVXJsczogWydodHRwczovL2FsZmFqb3Jlcy1mb3Juby5jZWxvLXRlc3RuZXQub3JnJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoYWRkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgXCJhZGRcIiBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZEVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgb3RoZXIgXCJzd2l0Y2hcIiBlcnJvcnNcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdHVzcC5pbm5lckhUTUwgPSBcIkNvbm5lY3RlZCBTdWNjZXNzZnVsbHkhXCJcclxuICAgICAgICB3aW5kb3cuYWNjb3VudHMgPSBhY2NvdW50cztcclxuICAgICAgICB3aW5kb3cud2ViMyA9IHdlYjM7XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI3OHZ3XCIsIGJhY2tncm91bmQ6IFwicmdiKDIzNCAxOTkgMClcIiB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjZ2d1wiLCB0b3A6IFwiMzV2d1wiLCB3aWR0aDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwOHZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI4dndcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5jcnlwdG8tY2FyZWVycy5jb20vdXBsb2Fkcy9qb2IvbG9nby8xMzAxMDI1Mi9vcGVuZ3JhcGhfY2Vsby5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzV2d1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXYtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiM3Z3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IFwiMXZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoMyA1OCAxMDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjl2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6IFwiN3Z3XCIgfX0+UGxlYXNlIGVudGVyIHlvdXIgQ0VMTyBwcml2YXRlIGtleTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiMHZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzdndcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogXCI1dndcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJpdmF0ZSBLZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3ByaXZhdGVrZXknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCI0dndcIiwgaGVpZ2h0OiBcIjEydndcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e0Nvbm5lY3R9IHN0eWxlPXt7IHdpZHRoOiBcIjY1dndcIiwgaGVpZ2h0OiBcIjE1dndcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17Q29ubmVjdH0gY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgeWVsbG93YnV0dG9uXCIgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e0Nvbm5lY3R9IGlkPSdDTlRidXR0b24nIGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGZvbnRTaXplOiAyNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMWVhMzE0NjA3ZjMzNmEzZGMxYTRcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2TGluayIsIlVzZUZvcm1JbnB1dCIsInVzZUhpc3RvcnkiLCJMb2dpbiIsInNsZWVwIiwibXMiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIkNvbm5lY3QiLCJzdGF0dXNwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInJlc3VsdCIsInBhcmFtcyIsImNoYWluSWQiLCJnZXRhY2MiLCJjb2RlIiwiY2hhaW5OYW1lIiwibmF0aXZlQ3VycmVuY3kiLCJuYW1lIiwic3ltYm9sIiwiZGVjaW1hbHMiLCJycGNVcmxzIiwiY29uc29sZSIsImxvZyIsImlubmVySFRNTCIsImFjY291bnRzIiwid2ViMyIsImhlaWdodCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwidG9wIiwid2lkdGgiLCJwb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJvdmVyZmxvdyIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImdhcCIsImNvbG9yIiwiZm9udFNpemUiLCJwbGFjZUNvbnRlbnQiLCJib3R0b20iLCJhbGlnbkl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==