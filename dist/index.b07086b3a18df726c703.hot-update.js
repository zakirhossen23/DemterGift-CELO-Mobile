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
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);









function Login() {
  var sleep = function sleep(ms) {
    return new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default())(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_5__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var _useContractKit = useContractKit(),
      connect = _useContractKit.connect,
      address = _useContractKit.address;

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
              connect();
              statusp = document.getElementById("CNTbutton");
              web3 = new web3__WEBPACK_IMPORTED_MODULE_6__("https://alfajores-forno.celo-testnet.org:443");
              statusp.innerHTML = "Connecting.... With Celo";
              accounts = web3.eth.accounts.privateKeyToAccount(document.getElementById('privatekey').value);
              statusp.innerHTML = "Connected Successfully!";
              window.contract = contract;

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
      fontSize: 23
    }
  }, "Connect"))))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1b52265852234208ed9b"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmIwNzA4NmIzYTE4ZGY3MjZjNzAzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTUSxLQUFULEdBQWlCO0FBQzVCLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEVBQUQ7QUFBQSxXQUFRLElBQUksdUZBQVEsVUFBQ0MsT0FBRDtBQUFBLGFBQWFDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRCxFQUFWLENBQXZCO0FBQUEsS0FBWixDQUFSO0FBQUEsR0FBZDs7QUFDQSxxQkFBb0NKLGlFQUFXLENBQUMsUUFBRCxDQUEvQztBQUFBLE1BQVFPLFFBQVIsZ0JBQVFBLFFBQVI7QUFBQSxNQUFrQkMsYUFBbEIsZ0JBQWtCQSxhQUFsQjs7QUFDSCx3QkFBNkJDLGNBQWMsRUFBM0M7QUFBQSxNQUFRQyxPQUFSLG1CQUFRQSxPQUFSO0FBQUEsTUFBaUJDLE9BQWpCLG1CQUFpQkEsT0FBakI7O0FBSCtCLFdBSWJDLE9BSmE7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BSTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJRixjQUFBQSxPQUFPO0FBQ0hHLGNBQUFBLE9BRlIsR0FFbUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUZuQjtBQUlVQyxjQUFBQSxJQUpWLEdBSWlCLElBQUlmLGlDQUFKLENBQVMsOENBQVQsQ0FKakI7QUFLSVksY0FBQUEsT0FBTyxDQUFDSSxTQUFSLEdBQW9CLDBCQUFwQjtBQUNJQyxjQUFBQSxRQU5SLEdBTW1CRixJQUFJLENBQUNHLEdBQUwsQ0FBU0QsUUFBVCxDQUFrQkUsbUJBQWxCLENBQXNDTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NNLEtBQTVFLENBTm5CO0FBT0lSLGNBQUFBLE9BQU8sQ0FBQ0ksU0FBUixHQUFvQix5QkFBcEI7QUFDQUssY0FBQUEsTUFBTSxDQUFD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REksQ0FBUjtBQTJFSDs7Ozs7Ozs7VUNoR0QscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvTG9naW4vaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL1VzZUZvcm1JbnB1dCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcclxuaW1wb3J0ICogYXMgV2ViMyBmcm9tIFwid2ViM1wiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gICAgY29uc3Qgc2xlZXAgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XHJcblx0Y29uc3QgeyBjb25uZWN0LCBhZGRyZXNzIH0gPSB1c2VDb250cmFjdEtpdCgpO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gQ29ubmVjdCgpIHtcclxuICAgICAgICBjb25uZWN0KCk7XHJcbiAgICAgICAgdmFyIHN0YXR1c3AgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJDTlRidXR0b25cIikpXHJcblxyXG4gICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhcImh0dHBzOi8vYWxmYWpvcmVzLWZvcm5vLmNlbG8tdGVzdG5ldC5vcmc6NDQzXCIpXHJcbiAgICAgICAgc3RhdHVzcC5pbm5lckhUTUwgPSBcIkNvbm5lY3RpbmcuLi4uIFdpdGggQ2Vsb1wiXHJcbiAgICAgICAgbGV0IGFjY291bnRzID0gd2ViMy5ldGguYWNjb3VudHMucHJpdmF0ZUtleVRvQWNjb3VudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpdmF0ZWtleScpLnZhbHVlKVxyXG4gICAgICAgIHN0YXR1c3AuaW5uZXJIVE1MID0gXCJDb25uZWN0ZWQgU3VjY2Vzc2Z1bGx5IVwiXHJcbiAgICAgICAgd2luZG93LmNvbnRyYWN0ID0gY29udHJhY3Q7XHJcblxyXG4gICAgICAgIH1cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiNzh2d1wiLCBiYWNrZ3JvdW5kOiBcInJnYigyMzQgMTk5IDApXCIgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI2dndcIiwgdG9wOiBcIjM1dndcIiwgd2lkdGg6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDh2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuY3J5cHRvLWNhcmVlcnMuY29tL3VwbG9hZHMvam9iL2xvZ28vMTMwMTAyNTIvb3BlbmdyYXBoX2NlbG8uanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM1dndcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjN2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiBcIjF2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDMgNTggMTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI5dndcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiBcIjd2d1wiIH19PlBsZWFzZSBlbnRlciB5b3VyIENFTE8gcHJpdmF0ZSBrZXk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBcIjB2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiM3Z3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IFwiNXZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaXZhdGUgS2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdwcml2YXRla2V5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiNHZ3XCIsIGhlaWdodDogXCIxMnZ3XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtDb25uZWN0fSBzdHlsZT17eyB3aWR0aDogXCI2NXZ3XCIsIGhlaWdodDogXCIxNXZ3XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e0Nvbm5lY3R9IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IHllbGxvd2J1dHRvblwiIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtDb25uZWN0fSBpZD0nQ05UYnV0dG9uJyBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBmb250U2l6ZTogMjMgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjFiNTIyNjU4NTIyMzQyMDhlZDliXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJVc2VGb3JtSW5wdXQiLCJ1c2VIaXN0b3J5IiwidXNlQ29udHJhY3QiLCJXZWIzIiwiTG9naW4iLCJzbGVlcCIsIm1zIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJjb250cmFjdCIsInNpZ25lckFkZHJlc3MiLCJ1c2VDb250cmFjdEtpdCIsImNvbm5lY3QiLCJhZGRyZXNzIiwiQ29ubmVjdCIsInN0YXR1c3AiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2ViMyIsImlubmVySFRNTCIsImFjY291bnRzIiwiZXRoIiwicHJpdmF0ZUtleVRvQWNjb3VudCIsInZhbHVlIiwid2luZG93IiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJ0b3AiLCJ3aWR0aCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsIm92ZXJmbG93IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiZ2FwIiwiY29sb3IiLCJmb250U2l6ZSIsInBsYWNlQ29udGVudCIsImJvdHRvbSIsImFsaWduSXRlbXMiXSwic291cmNlUm9vdCI6IiJ9