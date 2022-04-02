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
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);








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
      var statusp, web3, accounts;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              statusp = document.getElementById("CNTbutton");
              web3 = new web3__WEBPACK_IMPORTED_MODULE_5__("https://alfajores-forno.celo-testnet.org");
              statusp.innerHTML = "Connecting.... With Celo";
              accounts = web3.eth.accounts.privateKeyToAccount(document.getElementById('privatekey').value);
              statusp.innerHTML = "Connected Successfully!";
              window.accounts = accounts;
              window.web3 = web3;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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
/******/ 	__webpack_require__.h = function() { return "edb270f4a07f7df62ec9"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmRlN2VjMDc5M2Q3Y2ViNDdhZjY1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDZSxTQUFTTyxLQUFULEdBQWlCO0FBQzVCLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEVBQUQ7QUFBQSxXQUFRLElBQUksdUZBQVEsVUFBQ0MsT0FBRDtBQUFBLGFBQWFDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRCxFQUFWLENBQXZCO0FBQUEsS0FBWixDQUFSO0FBQUEsR0FBZDs7QUFENEIsV0FHYkcsT0FIYTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx3TUFHNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGNBQUFBLE9BRFIsR0FDbUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQURuQjtBQUdVQyxjQUFBQSxJQUhWLEdBR2lCLElBQUlWLGlDQUFKLENBQVMsMENBQVQsQ0FIakI7QUFJSU8sY0FBQUEsT0FBTyxDQUFDSSxTQUFSLEdBQW9CLDBCQUFwQjtBQUNJQyxjQUFBQSxRQUxSLEdBS21CRixJQUFJLENBQUNHLEdBQUwsQ0FBU0QsUUFBVCxDQUFrQkUsbUJBQWxCLENBQXNDTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NNLEtBQTVFLENBTG5CO0FBTUlSLGNBQUFBLE9BQU8sQ0FBQ0ksU0FBUixHQUFvQix5QkFBcEI7QUFDQUssY0FBQUEsTUFBTSxDQUFDSixRQUFQLEdBQWtCQSxRQUFsQjtBQUNBSSxjQUFBQSxNQUFNLENBQUNOLElBQVAsR0FBY0EsSUFBZDs7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUg0QjtBQUFBO0FBQUE7O0FBYTVCLHNCQUFRLGlIQUNKLGlIQUNJLDJFQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVPLE1BQUFBLE1BQU0sRUFBRSxNQUFWO0FBQWtCQyxNQUFBQSxVQUFVLEVBQUU7QUFBOUI7QUFBWixJQURKLENBREosZUFJSTtBQUFLLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUUsS0FBWDtBQUFrQkMsTUFBQUEsR0FBRyxFQUFFLE1BQXZCO0FBQStCQyxNQUFBQSxLQUFLLEVBQUUsTUFBdEM7QUFBOENDLE1BQUFBLFFBQVEsRUFBRTtBQUF4RDtBQUFaLGtCQUNJO0FBQ0ksU0FBSyxFQUFFO0FBQ0hMLE1BQUFBLE1BQU0sRUFBRSxPQURMO0FBRUhNLE1BQUFBLFlBQVksRUFBRSxLQUZYO0FBR0hDLE1BQUFBLE9BQU8sRUFBRSxNQUhOO0FBSUhDLE1BQUFBLFFBQVEsRUFBRSxRQUpQO0FBS0hILE1BQUFBLFFBQVEsRUFBRSxVQUxQO0FBTUhKLE1BQUFBLFVBQVUsRUFBRSxvQkFOVDtBQU9IUSxNQUFBQSxhQUFhLEVBQUUsUUFQWjtBQVFIQyxNQUFBQSxjQUFjLEVBQUU7QUFSYjtBQURYLGtCQVlJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFDSSxPQUFHLEVBQUMsNkVBRFI7QUFFSSxTQUFLLEVBQUU7QUFBRU4sTUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFGWCxJQURKLENBWkosZUFrQkk7QUFDSSxhQUFTLEVBQUMsWUFEZDtBQUVJLFNBQUssRUFBRTtBQUNITyxNQUFBQSxTQUFTLEVBQUUsUUFEUjtBQUVIVCxNQUFBQSxPQUFPLEVBQUUsS0FGTjtBQUdIVSxNQUFBQSxHQUFHLEVBQUUsS0FIRjtBQUlIQyxNQUFBQSxLQUFLLEVBQUUsZUFKSjtBQUtIYixNQUFBQSxNQUFNLEVBQUUsTUFMTDtBQU1ITyxNQUFBQSxPQUFPLEVBQUUsTUFOTjtBQU9IRSxNQUFBQSxhQUFhLEVBQUUsUUFQWjtBQVFIQyxNQUFBQSxjQUFjLEVBQUU7QUFSYjtBQUZYLGtCQWFJO0FBQUksU0FBSyxFQUFFO0FBQUVJLE1BQUFBLFFBQVEsRUFBRTtBQUFaO0FBQVgsMENBYkosQ0FsQkosZUFpQ0k7QUFDSSxTQUFLLEVBQUU7QUFDSFYsTUFBQUEsS0FBSyxFQUFFLE1BREo7QUFFSEcsTUFBQUEsT0FBTyxFQUFFLE1BRk47QUFHSFEsTUFBQUEsWUFBWSxFQUFFLFFBSFg7QUFJSEMsTUFBQUEsTUFBTSxFQUFFLEtBSkw7QUFLSFgsTUFBQUEsUUFBUSxFQUFFLFVBTFA7QUFNSEgsTUFBQUEsT0FBTyxFQUFFLEtBTk47QUFPSFUsTUFBQUEsR0FBRyxFQUFFLEtBUEY7QUFRSEssTUFBQUEsVUFBVSxFQUFFLFFBUlQ7QUFTSFIsTUFBQUEsYUFBYSxFQUFFO0FBVFo7QUFEWCxrQkFhSTtBQUNJLGVBQVcsRUFBQyxhQURoQjtBQUVJLFFBQUksRUFBQyxVQUZUO0FBR0ksYUFBUyxFQUFDLGNBSGQ7QUFJSSxnQkFBWSxFQUFDLEVBSmpCO0FBS0ksTUFBRSxFQUFDLFlBTFA7QUFNSSxTQUFLLEVBQUU7QUFBRUssTUFBQUEsUUFBUSxFQUFFLEtBQVo7QUFBbUJkLE1BQUFBLE1BQU0sRUFBRTtBQUEzQjtBQU5YLElBYkosZUFxQkk7QUFBSyxXQUFPLEVBQUVYLE9BQWQ7QUFBdUIsU0FBSyxFQUFFO0FBQUVlLE1BQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCSixNQUFBQSxNQUFNLEVBQUU7QUFBekI7QUFBOUIsa0JBQ0k7QUFBSyxXQUFPLEVBQUVYLE9BQWQ7QUFBdUIsYUFBUyxFQUFDLDZCQUFqQztBQUErRCxTQUFLLEVBQUU7QUFBdEUsa0JBQ0k7QUFBSyxXQUFPLEVBQUVBLE9BQWQ7QUFBdUIsTUFBRSxFQUFDLFdBQTFCO0FBQXNDLGFBQVMsRUFBQyxXQUFoRDtBQUE0RCxTQUFLLEVBQUU7QUFBRXlCLE1BQUFBLFFBQVEsRUFBRTtBQUFaO0FBQW5FLGVBREosQ0FESixDQXJCSixDQWpDSixDQURKLENBSkosQ0FESSxDQUFSO0FBMkVIOzs7Ozs7OztVQzlGRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9Mb2dpbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvVXNlRm9ybUlucHV0JztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0ICogYXMgV2ViMyBmcm9tIFwid2ViM1wiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gICAgY29uc3Qgc2xlZXAgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIENvbm5lY3QoKSB7XHJcbiAgICAgICAgdmFyIHN0YXR1c3AgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJDTlRidXR0b25cIikpXHJcblxyXG4gICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhcImh0dHBzOi8vYWxmYWpvcmVzLWZvcm5vLmNlbG8tdGVzdG5ldC5vcmdcIilcclxuICAgICAgICBzdGF0dXNwLmlubmVySFRNTCA9IFwiQ29ubmVjdGluZy4uLi4gV2l0aCBDZWxvXCJcclxuICAgICAgICBsZXQgYWNjb3VudHMgPSB3ZWIzLmV0aC5hY2NvdW50cy5wcml2YXRlS2V5VG9BY2NvdW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcml2YXRla2V5JykudmFsdWUpXHJcbiAgICAgICAgc3RhdHVzcC5pbm5lckhUTUwgPSBcIkNvbm5lY3RlZCBTdWNjZXNzZnVsbHkhXCJcclxuICAgICAgICB3aW5kb3cuYWNjb3VudHMgPSBhY2NvdW50cztcclxuICAgICAgICB3aW5kb3cud2ViMyA9IHdlYjM7XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI3OHZ3XCIsIGJhY2tncm91bmQ6IFwicmdiKDIzNCAxOTkgMClcIiB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjZ2d1wiLCB0b3A6IFwiMzV2d1wiLCB3aWR0aDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwOHZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI4dndcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5jcnlwdG8tY2FyZWVycy5jb20vdXBsb2Fkcy9qb2IvbG9nby8xMzAxMDI1Mi9vcGVuZ3JhcGhfY2Vsby5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzV2d1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXYtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiM3Z3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IFwiMXZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoMyA1OCAxMDApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjl2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6IFwiN3Z3XCIgfX0+UGxlYXNlIGVudGVyIHlvdXIgQ0VMTyBwcml2YXRlIGtleTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiMHZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzdndcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogXCI1dndcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJpdmF0ZSBLZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3ByaXZhdGVrZXknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCI0dndcIiwgaGVpZ2h0OiBcIjEydndcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e0Nvbm5lY3R9IHN0eWxlPXt7IHdpZHRoOiBcIjY1dndcIiwgaGVpZ2h0OiBcIjE1dndcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17Q29ubmVjdH0gY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgeWVsbG93YnV0dG9uXCIgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e0Nvbm5lY3R9IGlkPSdDTlRidXR0b24nIGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGZvbnRTaXplOiAyNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZWRiMjcwZjRhMDdmN2RmNjJlYzlcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2TGluayIsIlVzZUZvcm1JbnB1dCIsInVzZUhpc3RvcnkiLCJXZWIzIiwiTG9naW4iLCJzbGVlcCIsIm1zIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJDb25uZWN0Iiwic3RhdHVzcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3ZWIzIiwiaW5uZXJIVE1MIiwiYWNjb3VudHMiLCJldGgiLCJwcml2YXRlS2V5VG9BY2NvdW50IiwidmFsdWUiLCJ3aW5kb3ciLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsInRvcCIsIndpZHRoIiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5Iiwib3ZlcmZsb3ciLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJnYXAiLCJjb2xvciIsImZvbnRTaXplIiwicGxhY2VDb250ZW50IiwiYm90dG9tIiwiYWxpZ25JdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=