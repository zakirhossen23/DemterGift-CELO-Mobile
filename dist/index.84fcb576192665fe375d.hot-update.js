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
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main.css */ "./src/pages/Login/main.css");












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
                    name: 'CEUR',
                    symbol: 'CEUR',
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    style: {
      width: "45vw",
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "bf07783d3db3d75f3ea0"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4Ljg0ZmNiNTc2MTkyNjY1ZmUzNzVkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU1UsWUFBVCxHQUF3QjtBQUNuQyxrQkFBa0NULCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT1UsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsV0FBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0Msa0JBQWtCLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBakIsQ0FBOUI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCOztBQUNBLFNBQU8sQ0FBQ0QsQ0FBQyxHQUFHTixLQUFLLENBQUNRLElBQU4sQ0FBV1AsR0FBWCxDQUFMLE1BQTBCLElBQWpDLEVBQXVDO0FBQ25DO0FBQ0EsUUFBSUssQ0FBQyxDQUFDRyxLQUFGLEtBQVlULEtBQUssQ0FBQ1UsU0FBdEIsRUFBaUM7QUFDN0JWLE1BQUFBLEtBQUssQ0FBQ1UsU0FBTjtBQUNIOztBQUNESCxJQUFBQSxXQUFXLEdBQUdELENBQUMsQ0FBQyxDQUFELENBQWY7QUFDSDs7QUFaa0MsV0FlcEJLLE9BZm9CO0FBQUE7QUFBQSxJQW9CbkM7OztBQXBCbUM7QUFBQSx3TUFlbkMsaUJBQXVCQyxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lULGNBQUFBLE1BQU0sQ0FBQ1UsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsRUFBb0NGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxZQUFULENBQXNCLE1BQXRCLENBQXBDO0FBREo7QUFBQSxxQkFFVUMsa0JBQWtCLEVBRjVCOztBQUFBO0FBR0lkLGNBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQmMsSUFBaEIsR0FBcUJYLFdBQXJCOztBQUhK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STtBQUFJLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxZQUFZLEVBQUU7QUFBaEI7QUFBWCxhQURKLENBREosZUFLSTtBQUFLLFNBQUssRUFBRTtBQUNSRCxNQUFBQSxNQUFNLEVBQUUsVUFEQTtBQUVSUixNQUFBQSxPQUFPLEVBQUUsTUFGRDtBQUdSQyxNQUFBQSxjQUFjLEVBQUU7QUFIUjtBQUFaLGtCQUtJLGlEQUFDLFdBQUQsT0FMSixlQU1JLGlEQUFDLFdBQUQsT0FOSixDQUxKLENBREosQ0FESixDQURKLENBRkYsQ0FBRixDQURKO0FBeUJIOzs7Ozs7OztVQ2hJRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9Mb2dpbi9tYWluLmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5cclxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQnO1xyXG5cclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xyXG5pbXBvcnQgJy4vbWFpbi5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVFdmVudHMoKSB7XHJcbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgcmVnZXggPSAvXFxbKC4qKVxcXS9nO1xyXG4gICAgY29uc3Qgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgbGV0IG07XHJcbiAgICBsZXQgcmVkaXJlY3RpbmcgPSBcIlwiO1xyXG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXHJcbiAgICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xyXG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVkaXJlY3RpbmcgPSBtWzFdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBUeXBlU2V0KGUpIHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUeXBlXCIsIGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInR5cGVcIikpO1xyXG4gICAgICAgIGF3YWl0IG9uQ2xpY2tDb25uZWN0Q2VsbygpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9cmVkaXJlY3Rpbmc7XHJcbiAgICB9XHJcbiAgICAvL0NlbG9cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0Q2VsbygpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgICAgICByZXN1bHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0YWNjID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiAnMHhhZWYzJywgfV0sIC8vNDQ3ODdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGdldGFjYztcclxuICAgICAgICB9IGNhdGNoIChzd2l0Y2hFcnJvcikge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGVycm9yIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIGNoYWluIGhhcyBub3QgYmVlbiBhZGRlZCB0byBNZXRhTWFzay5cclxuICAgICAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICcweGFlZjMnLCAvLzQ0Nzg3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5OYW1lOiAnQWxmYWpvcmVzIENlbG8gVGVzdG5ldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlQ3VycmVuY3k6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0NFVVInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6ICdDRVVSJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDE4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnBjVXJsczogWydodHRwczovL2FsZmFqb3Jlcy1mb3Juby5jZWxvLXRlc3RuZXQub3JnJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoYWRkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgXCJhZGRcIiBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZEVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgb3RoZXIgXCJzd2l0Y2hcIiBlcnJvcnNcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ29ubmVjdGVkTWV0YUNlbG9cIiwgXCJ0cnVlXCIpXHJcbiAgICB9XHJcbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xyXG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICB9KTtcclxuICAgIGZ1bmN0aW9uIEV2ZW50TWFuZ2VyKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpID09IFwibWFuYWdlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgdHlwZT1cIm1hbmFnZXJcIiBvbkNsaWNrPXtUeXBlU2V0fSBjbGFzc05hbWU9J2V2ZW50TWFuYWdlckJ1dHRvbiBhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHR5cGU9XCJtYW5hZ2VyXCIgc3R5bGU9e3sgZm9udFNpemU6IDM1LCBjb2xvcjogXCJ5ZWxsb3dcIiB9fT5FdmVudCBNYW5hZ2VyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgICAgICA8ZGl2IHR5cGU9XCJtYW5hZ2VyXCIgb25DbGljaz17VHlwZVNldH0gY2xhc3NOYW1lPSdldmVudE1hbmFnZXJCdXR0b24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gdHlwZT1cIm1hbmFnZXJcIiBzdHlsZT17eyBmb250U2l6ZTogMzUsIGNvbG9yOiBcInllbGxvd1wiIH19PkV2ZW50IE1hbmFnZXI8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPilcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIERvbmF0b3JUeXBlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpID09IFwiRG9uYXRvclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgdHlwZT1cIkRvbmF0b3JcIiBvbkNsaWNrPXtUeXBlU2V0fSBjbGFzc05hbWU9J3VzZXJCdXR0b24gYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB0eXBlPVwiRG9uYXRvclwiIHN0eWxlPXt7IGZvbnRTaXplOiAzNSwgY29sb3I6IFwiYmxhY2tcIiB9fT5Eb25hdG9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgICAgICA8ZGl2IHR5cGU9XCJEb25hdG9yXCIgb25DbGljaz17VHlwZVNldH0gY2xhc3NOYW1lPSd1c2VyQnV0dG9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHR5cGU9XCJEb25hdG9yXCIgc3R5bGU9e3sgZm9udFNpemU6IDM1LCBjb2xvcjogXCJibGFja1wiIH19PkRvbmF0b3I8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPilcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+PD5cclxuICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDV2d1wiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIHBhZGRpbmc6IFwiMTlweFwiLCBib3JkZXJSYWRpdXM6IFwiNHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMHB4IDBweCAzMHB4IDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkxvZ2luPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMThweCAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRNYW5nZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9uYXRvclR5cGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Lz48Lz5cclxuICAgICk7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiYmYwNzc4M2QzZGIzZDc1ZjNlYTBcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm93IiwidG9hc3QiLCJDb2wiLCJCdXR0b24iLCJVc2VGb3JtSW5wdXQiLCJGb3JtIiwidXNlQ29udHJhY3QiLCJDcmVhdGVFdmVudHMiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJyZWdleCIsInN0ciIsImRlY29kZVVSSUNvbXBvbmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwibSIsInJlZGlyZWN0aW5nIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwiVHlwZVNldCIsImUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwib25DbGlja0Nvbm5lY3RDZWxvIiwiaHJlZiIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInJlc3VsdCIsInBhcmFtcyIsImNoYWluSWQiLCJnZXRhY2MiLCJjb2RlIiwiY2hhaW5OYW1lIiwibmF0aXZlQ3VycmVuY3kiLCJuYW1lIiwic3ltYm9sIiwiZGVjaW1hbHMiLCJycGNVcmxzIiwiY29uc29sZSIsImxvZyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJFdmVudE1hbmdlciIsImdldEl0ZW0iLCJmb250U2l6ZSIsImNvbG9yIiwiRG9uYXRvclR5cGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYm9yZGVyIiwibWFyZ2luIiwibWFyZ2luQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==