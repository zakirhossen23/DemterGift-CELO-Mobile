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
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_layout_Header__WEBPACK_IMPORTED_MODULE_8__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
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
/******/ 	__webpack_require__.h = function() { return "bda7e0154a1d8be6d834"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjM3NWM3MDJjNWFjYjdhN2MwMmRjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU1csWUFBVCxHQUF3QjtBQUNuQyxrQkFBa0NWLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT1csU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsV0FBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0Msa0JBQWtCLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBakIsQ0FBOUI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEVBQWxCOztBQUNBLFNBQU8sQ0FBQ0QsQ0FBQyxHQUFHTixLQUFLLENBQUNRLElBQU4sQ0FBV1AsR0FBWCxDQUFMLE1BQTBCLElBQWpDLEVBQXVDO0FBQ25DO0FBQ0EsUUFBSUssQ0FBQyxDQUFDRyxLQUFGLEtBQVlULEtBQUssQ0FBQ1UsU0FBdEIsRUFBaUM7QUFDN0JWLE1BQUFBLEtBQUssQ0FBQ1UsU0FBTjtBQUNIOztBQUNESCxJQUFBQSxXQUFXLEdBQUdELENBQUMsQ0FBQyxDQUFELENBQWY7QUFDSDs7QUFaa0MsV0FlcEJLLE9BZm9CO0FBQUE7QUFBQSxJQW9CbkM7OztBQXBCbUM7QUFBQSx3TUFlbkMsaUJBQXVCQyxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lULGNBQUFBLE1BQU0sQ0FBQ1UsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsRUFBb0NGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxZQUFULENBQXNCLE1BQXRCLENBQXBDO0FBREo7QUFBQSxxQkFFVUMsa0JBQWtCLEVBRjVCOztBQUFBO0FBR0lkLGNBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQmMsSUFBaEIsR0FBcUJYLFdBQXJC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QVosa0JBQ0k7QUFBSSxTQUFLLEVBQUU7QUFBRUMsTUFBQUEsWUFBWSxFQUFFO0FBQWhCO0FBQVgsYUFESixDQURKLGVBS0k7QUFBSyxTQUFLLEVBQUU7QUFDUkQsTUFBQUEsTUFBTSxFQUFFLFVBREE7QUFFUlIsTUFBQUEsT0FBTyxFQUFFLE1BRkQ7QUFHUkMsTUFBQUEsY0FBYyxFQUFFO0FBSFI7QUFBWixrQkFLSSxpREFBQyxXQUFELE9BTEosZUFNSSxpREFBQyxXQUFELE9BTkosQ0FMSixDQURKLENBREosQ0FESixDQUZGLENBQUYsQ0FESjtBQXlCSDs7Ozs7Ozs7VUNqSUQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvTG9naW4vbWFpbi5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvbmVudHMvVXNlRm9ybUlucHV0JztcclxuXHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcclxuaW1wb3J0ICcuL21haW4uY3NzJ1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUV2ZW50cygpIHtcclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XHJcbiAgICBjb25zdCBzdHIgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBsZXQgbTtcclxuICAgIGxldCByZWRpcmVjdGluZyA9IFwiXCI7XHJcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcclxuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XHJcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZWRpcmVjdGluZyA9IG1bMV07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIFR5cGVTZXQoZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlR5cGVcIiwgZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSk7XHJcbiAgICAgICAgYXdhaXQgb25DbGlja0Nvbm5lY3RDZWxvKClcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1yZWRpcmVjdGluZztcclxuICAgIH1cclxuICAgIC8vQ2Vsb1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3RDZWxvKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgIHJlc3VsdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBnZXRhY2MgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFt7IGNoYWluSWQ6ICcweGFlZjMnLCB9XSwgLy80NDc4N1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZ2V0YWNjO1xyXG4gICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxyXG4gICAgICAgICAgICBpZiAoc3dpdGNoRXJyb3IuY29kZSA9PT0gNDkwMikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9hZGRFdGhlcmV1bUNoYWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogJzB4YWVmMycsIC8vNDQ3ODdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbk5hbWU6ICdBbGZham9yZXMgQ2VsbyBUZXN0bmV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ0VMTycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ0NFTE8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNVcmxzOiBbJ2h0dHBzOi8vYWxmYWpvcmVzLWZvcm5vLmNlbG8tdGVzdG5ldC5vcmcnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChhZGRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBcImFkZFwiIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBvdGhlciBcInN3aXRjaFwiIGVycm9yc1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiLCBcInRydWVcIilcclxuICAgIH1cclxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XHJcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gRXZlbnRNYW5nZXIoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gXCJtYW5hZ2VyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiB0eXBlPVwibWFuYWdlclwiIG9uQ2xpY2s9e1R5cGVTZXR9IGNsYXNzTmFtZT0nZXZlbnRNYW5hZ2VyQnV0dG9uIGFjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdHlwZT1cIm1hbmFnZXJcIiBzdHlsZT17eyBmb250U2l6ZTogMzUsIGNvbG9yOiBcInllbGxvd1wiIH19PkV2ZW50IE1hbmFnZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgICAgIDxkaXYgdHlwZT1cIm1hbmFnZXJcIiBvbkNsaWNrPXtUeXBlU2V0fSBjbGFzc05hbWU9J2V2ZW50TWFuYWdlckJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiB0eXBlPVwibWFuYWdlclwiIHN0eWxlPXt7IGZvbnRTaXplOiAzNSwgY29sb3I6IFwieWVsbG93XCIgfX0+RXZlbnQgTWFuYWdlcjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+KVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gRG9uYXRvclR5cGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gXCJEb25hdG9yXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiB0eXBlPVwiRG9uYXRvclwiIG9uQ2xpY2s9e1R5cGVTZXR9IGNsYXNzTmFtZT0ndXNlckJ1dHRvbiBhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHR5cGU9XCJEb25hdG9yXCIgc3R5bGU9e3sgZm9udFNpemU6IDM1LCBjb2xvcjogXCJibGFja1wiIH19PkRvbmF0b3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgICAgIDxkaXYgdHlwZT1cIkRvbmF0b3JcIiBvbkNsaWNrPXtUeXBlU2V0fSBjbGFzc05hbWU9J3VzZXJCdXR0b24nPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gdHlwZT1cIkRvbmF0b3JcIiBzdHlsZT17eyBmb250U2l6ZTogMzUsIGNvbG9yOiBcImJsYWNrXCIgfX0+RG9uYXRvcjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+KVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD48PlxyXG4gICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NXZ3XCIsIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiwgcGFkZGluZzogXCIxOXB4XCIsIGJvcmRlclJhZGl1czogXCI0cHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYm9yZGVyOiBcIndoaXRlIHNvbGlkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDMwcHggMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+TG9naW48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxOHB4IDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudE1hbmdlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb25hdG9yVHlwZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPjwvPlxyXG4gICAgKTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJiZGE3ZTAxNTRhMWQ4YmU2ZDgzNFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSb3ciLCJ0b2FzdCIsIkNvbCIsIkJ1dHRvbiIsIlVzZUZvcm1JbnB1dCIsIkZvcm0iLCJ1c2VDb250cmFjdCIsIkhlYWRlciIsIkNyZWF0ZUV2ZW50cyIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsInJlZ2V4Iiwic3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJtIiwicmVkaXJlY3RpbmciLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJUeXBlU2V0IiwiZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJvbkNsaWNrQ29ubmVjdENlbG8iLCJocmVmIiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicmVzdWx0IiwicGFyYW1zIiwiY2hhaW5JZCIsImdldGFjYyIsImNvZGUiLCJjaGFpbk5hbWUiLCJuYXRpdmVDdXJyZW5jeSIsIm5hbWUiLCJzeW1ib2wiLCJkZWNpbWFscyIsInJwY1VybHMiLCJjb25zb2xlIiwibG9nIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkV2ZW50TWFuZ2VyIiwiZ2V0SXRlbSIsImZvbnRTaXplIiwiY29sb3IiLCJEb25hdG9yVHlwZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJib3JkZXIiLCJtYXJnaW4iLCJtYXJnaW5Cb3R0b20iXSwic291cmNlUm9vdCI6IiJ9