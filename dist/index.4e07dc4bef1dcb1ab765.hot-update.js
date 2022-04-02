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
/* harmony import */ var _celo_tools_use_contractkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @celo-tools/use-contractkit */ "./node_modules/@celo-tools/use-contractkit/lib/index.js");
/* harmony import */ var _celo_tools_use_contractkit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_celo_tools_use_contractkit__WEBPACK_IMPORTED_MODULE_7__);










function Login() {
  var sleep = function sleep(ms) {
    return new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default())(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_5__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var _useContractKit = (0,_celo_tools_use_contractkit__WEBPACK_IMPORTED_MODULE_7__.useContractKit)(),
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
/******/ 	__webpack_require__.h = function() { return "cbef72eeb11abb9583b6"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjRlMDdkYzRiZWYxZGNiMWFiNzY1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU1MsS0FBVCxHQUFpQjtBQUM1QixNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxFQUFEO0FBQUEsV0FBUSxJQUFJLHVGQUFRLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUQsRUFBVixDQUF2QjtBQUFBLEtBQVosQ0FBUjtBQUFBLEdBQWQ7O0FBQ0EscUJBQW9DTCxpRUFBVyxDQUFDLFFBQUQsQ0FBL0M7QUFBQSxNQUFRUSxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGFBQWxCLGdCQUFrQkEsYUFBbEI7O0FBQ0gsd0JBQTZCUCwyRUFBYyxFQUEzQztBQUFBLE1BQVFRLE9BQVIsbUJBQVFBLE9BQVI7QUFBQSxNQUFpQkMsT0FBakIsbUJBQWlCQSxPQUFqQjs7QUFIK0IsV0FJYkMsT0FKYTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx3TUFJNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lGLGNBQUFBLE9BQU87QUFDSEcsY0FBQUEsT0FGUixHQUVtQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBRm5CO0FBSVVDLGNBQUFBLElBSlYsR0FJaUIsSUFBSWYsaUNBQUosQ0FBUyw4Q0FBVCxDQUpqQjtBQUtJWSxjQUFBQSxPQUFPLENBQUNJLFNBQVIsR0FBb0IsMEJBQXBCO0FBQ0lDLGNBQUFBLFFBTlIsR0FNbUJGLElBQUksQ0FBQ0csR0FBTCxDQUFTRCxRQUFULENBQWtCRSxtQkFBbEIsQ0FBc0NOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ00sS0FBNUUsQ0FObkI7QUFPSVIsY0FBQUEsT0FBTyxDQUFDSSxTQUFSLEdBQW9CLHlCQUFwQjtBQUNBSyxjQUFBQSxN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Q0FKSixDQURJLENBQVI7QUEyRUg7Ozs7Ozs7O1VDbEdELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL0xvZ2luL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XHJcbmltcG9ydCAqIGFzIFdlYjMgZnJvbSBcIndlYjNcIlxyXG5pbXBvcnQgeyB1c2VDb250cmFjdEtpdCB9IGZyb20gXCJAY2Vsby10b29scy91c2UtY29udHJhY3RraXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gICAgY29uc3Qgc2xlZXAgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XHJcblx0Y29uc3QgeyBjb25uZWN0LCBhZGRyZXNzIH0gPSB1c2VDb250cmFjdEtpdCgpO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gQ29ubmVjdCgpIHtcclxuICAgICAgICBjb25uZWN0KCk7XHJcbiAgICAgICAgdmFyIHN0YXR1c3AgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJDTlRidXR0b25cIikpXHJcblxyXG4gICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhcImh0dHBzOi8vYWxmYWpvcmVzLWZvcm5vLmNlbG8tdGVzdG5ldC5vcmc6NDQzXCIpXHJcbiAgICAgICAgc3RhdHVzcC5pbm5lckhUTUwgPSBcIkNvbm5lY3RpbmcuLi4uIFdpdGggQ2Vsb1wiXHJcbiAgICAgICAgbGV0IGFjY291bnRzID0gd2ViMy5ldGguYWNjb3VudHMucHJpdmF0ZUtleVRvQWNjb3VudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpdmF0ZWtleScpLnZhbHVlKVxyXG4gICAgICAgIHN0YXR1c3AuaW5uZXJIVE1MID0gXCJDb25uZWN0ZWQgU3VjY2Vzc2Z1bGx5IVwiXHJcbiAgICAgICAgd2luZG93LmNvbnRyYWN0ID0gY29udHJhY3Q7XHJcblxyXG4gICAgICAgIH1cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiNzh2d1wiLCBiYWNrZ3JvdW5kOiBcInJnYigyMzQgMTk5IDApXCIgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI2dndcIiwgdG9wOiBcIjM1dndcIiwgd2lkdGg6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDh2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuY3J5cHRvLWNhcmVlcnMuY29tL3VwbG9hZHMvam9iL2xvZ28vMTMwMTAyNTIvb3BlbmdyYXBoX2NlbG8uanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM1dndcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjN2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiBcIjF2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDMgNTggMTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI5dndcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiBcIjd2d1wiIH19PlBsZWFzZSBlbnRlciB5b3VyIENFTE8gcHJpdmF0ZSBrZXk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBcIjB2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiM3Z3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IFwiNXZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaXZhdGUgS2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdwcml2YXRla2V5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiNHZ3XCIsIGhlaWdodDogXCIxMnZ3XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtDb25uZWN0fSBzdHlsZT17eyB3aWR0aDogXCI2NXZ3XCIsIGhlaWdodDogXCIxNXZ3XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e0Nvbm5lY3R9IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IHllbGxvd2J1dHRvblwiIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtDb25uZWN0fSBpZD0nQ05UYnV0dG9uJyBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBmb250U2l6ZTogMjMgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImNiZWY3MmVlYjExYWJiOTU4M2I2XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJVc2VGb3JtSW5wdXQiLCJ1c2VIaXN0b3J5IiwidXNlQ29udHJhY3QiLCJXZWIzIiwidXNlQ29udHJhY3RLaXQiLCJMb2dpbiIsInNsZWVwIiwibXMiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsImNvbm5lY3QiLCJhZGRyZXNzIiwiQ29ubmVjdCIsInN0YXR1c3AiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2ViMyIsImlubmVySFRNTCIsImFjY291bnRzIiwiZXRoIiwicHJpdmF0ZUtleVRvQWNjb3VudCIsInZhbHVlIiwid2luZG93IiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJ0b3AiLCJ3aWR0aCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsIm92ZXJmbG93IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiZ2FwIiwiY29sb3IiLCJmb250U2l6ZSIsInBsYWNlQ29udGVudCIsImJvdHRvbSIsImFsaWduSXRlbXMiXSwic291cmNlUm9vdCI6IiJ9