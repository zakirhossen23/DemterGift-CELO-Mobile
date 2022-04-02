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

  var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");

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
              web3 = new Web3("https://alfajores-forno.celo-testnet.org");
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
/******/ 	__webpack_require__.h = function() { return "31dc2f9ac315a8ebcb66"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjRjOGI2ZTUwNzQ2YWNmMTdiMzQ4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNNLEtBQVQsR0FBaUI7QUFDNUIsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsRUFBRDtBQUFBLFdBQVEsSUFBSSx1RkFBUSxVQUFDQyxPQUFEO0FBQUEsYUFBYUMsVUFBVSxDQUFDRCxPQUFELEVBQVVELEVBQVYsQ0FBdkI7QUFBQSxLQUFaLENBQVI7QUFBQSxHQUFkOztBQUNBLE1BQU1HLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFwQjs7QUFGNEIsV0FHYkMsT0FIYTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx3TUFHNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGNBQUFBLE9BRFIsR0FDbUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQURuQjtBQUdVQyxjQUFBQSxJQUhWLEdBR2lCLElBQUlOLElBQUosQ0FBUywwQ0FBVCxDQUhqQjtBQUlJRyxjQUFBQSxPQUFPLENBQUNJLFNBQVIsR0FBb0IsMEJBQXBCO0FBQ0lDLGNBQUFBLFFBTFIsR0FLbUJGLElBQUksQ0FBQ0csR0FBTCxDQUFTRCxRQUFULENBQWtCRSxtQkFBbEIsQ0FBc0NOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ00sS0FBNUUsQ0FMbkI7QUFNSVIsY0FBQUEsT0FBTyxDQUFDSSxTQUFSLEdBQW9CLHlCQUFwQjtBQUNBSyxjQUFBQSxNQUFNLENBQUNKLFFBQVAsR0FBa0JBLFFBQWxCO0FBQ0FJLGNBQUFBLE1BQU0sQ0FBQ04sSUFBUCxHQUFjQSxJQUFkOztBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSDRCO0FBQUE7QUFBQTs7QUFhNUIsc0JBQVEsaUhBQ0osaUhBQ0ksMkVBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRU8sTUFBQUEsTUFBTSxFQUFFLE1BQVY7QUFBa0JDLE1BQUFBLFVBQVUsRUFBRTtBQUE5QjtBQUFaLElBREosQ0FESixlQUlJO0FBQUssU0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRSxLQUFYO0FBQWtCQyxNQUFBQSxHQUFHLEVBQUUsTUFBdkI7QUFBK0JDLE1BQUFBLEtBQUssRUFBRSxNQUF0QztBQUE4Q0MsTUFBQUEsUUFBUSxFQUFFO0FBQXhEO0FBQVosa0JBQ0k7QUFDSSxTQUFLLEVBQUU7QUFDSEwsTUFBQUEsTUFBTSxFQUFFLE9BREw7QUFFSE0sTUFBQUEsWUFBWSxFQUFFLEtBRlg7QUFHSEMsTUFBQUEsT0FBTyxFQUFFLE1BSE47QUFJSEMsTUFBQUEsUUFBUSxFQUFFLFFBSlA7QUFLSEgsTUFBQUEsUUFBUSxFQUFFLFVBTFA7QUFNSEosTUFBQUEsVUFBVSxFQUFFLG9CQU5UO0FBT0hRLE1BQUFBLGFBQWEsRUFBRSxRQVBaO0FBUUhDLE1BQUFBLGNBQWMsRUFBRTtBQVJiO0FBRFgsa0JBWUk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUNJLE9BQUcsRUFBQyw2RUFEUjtBQUVJLFNBQUssRUFBRTtBQUFFTixNQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUZYLElBREosQ0FaSixlQWtCSTtBQUNJLGFBQVMsRUFBQyxZQURkO0FBRUksU0FBSyxFQUFFO0FBQ0hPLE1BQUFBLFNBQVMsRUFBRSxRQURSO0FBRUhULE1BQUFBLE9BQU8sRUFBRSxLQUZOO0FBR0hVLE1BQUFBLEdBQUcsRUFBRSxLQUhGO0FBSUhDLE1BQUFBLEtBQUssRUFBRSxlQUpKO0FBS0hiLE1BQUFBLE1BQU0sRUFBRSxNQUxMO0FBTUhPLE1BQUFBLE9BQU8sRUFBRSxNQU5OO0FBT0hFLE1BQUFBLGFBQWEsRUFBRSxRQVBaO0FBUUhDLE1BQUFBLGNBQWMsRUFBRTtBQVJiO0FBRlgsa0JBYUk7QUFBSSxTQUFLLEVBQUU7QUFBRUksTUFBQUEsUUFBUSxFQUFFO0FBQVo7QUFBWCwwQ0FiSixDQWxCSixlQWlDSTtBQUNJLFNBQUssRUFBRTtBQUNIVixNQUFBQSxLQUFLLEVBQUUsTUFESjtBQUVIRyxNQUFBQSxPQUFPLEVBQUUsTUFGTjtBQUdIUSxNQUFBQSxZQUFZLEVBQUUsUUFIWDtBQUlIQyxNQUFBQSxNQUFNLEVBQUUsS0FKTDtBQUtIWCxNQUFBQSxRQUFRLEVBQUUsVUFMUDtBQU1ISCxNQUFBQSxPQUFPLEVBQUUsS0FOTjtBQU9IVSxNQUFBQSxHQUFHLEVBQUUsS0FQRjtBQVFISyxNQUFBQSxVQUFVLEVBQUUsUUFSVDtBQVNIUixNQUFBQSxhQUFhLEVBQUU7QUFUWjtBQURYLGtCQWFJO0FBQ0ksZUFBVyxFQUFDLGFBRGhCO0FBRUksUUFBSSxFQUFDLFVBRlQ7QUFHSSxhQUFTLEVBQUMsY0FIZDtBQUlJLGdCQUFZLEVBQUMsRUFKakI7QUFLSSxNQUFFLEVBQUMsWUFMUDtBQU1JLFNBQUssRUFBRTtBQUFFSyxNQUFBQSxRQUFRLEVBQUUsS0FBWjtBQUFtQmQsTUFBQUEsTUFBTSxFQUFFO0FBQTNCO0FBTlgsSUFiSixlQXFCSTtBQUFLLFdBQU8sRUFBRVgsT0FBZDtBQUF1QixTQUFLLEVBQUU7QUFBRWUsTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJKLE1BQUFBLE1BQU0sRUFBRTtBQUF6QjtBQUE5QixrQkFDSTtBQUFLLFdBQU8sRUFBRVgsT0FBZDtBQUF1QixhQUFTLEVBQUMsNkJBQWpDO0FBQStELFNBQUssRUFBRTtBQUF0RSxrQkFDSTtBQUFLLFdBQU8sRUFBRUEsT0FBZDtBQUF1QixNQUFFLEVBQUMsV0FBMUI7QUFBc0MsYUFBUyxFQUFDLFdBQWhEO0FBQTRELFNBQUssRUFBRTtBQUFFeUIsTUFBQUEsUUFBUSxFQUFFO0FBQVo7QUFBbkUsZUFESixDQURKLENBckJKLENBakNKLENBREosQ0FKSixDQURJLENBQVI7QUEyRUg7Ozs7Ozs7O1VDN0ZELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL0xvZ2luL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICAgIGNvbnN0IHNsZWVwID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gICAgY29uc3QgV2ViMyA9IHJlcXVpcmUoXCJ3ZWIzXCIpXHJcbiAgICBhc3luYyBmdW5jdGlvbiBDb25uZWN0KCkge1xyXG4gICAgICAgIHZhciBzdGF0dXNwID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ05UYnV0dG9uXCIpKVxyXG5cclxuICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoXCJodHRwczovL2FsZmFqb3Jlcy1mb3Juby5jZWxvLXRlc3RuZXQub3JnXCIpXHJcbiAgICAgICAgc3RhdHVzcC5pbm5lckhUTUwgPSBcIkNvbm5lY3RpbmcuLi4uIFdpdGggQ2Vsb1wiXHJcbiAgICAgICAgbGV0IGFjY291bnRzID0gd2ViMy5ldGguYWNjb3VudHMucHJpdmF0ZUtleVRvQWNjb3VudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpdmF0ZWtleScpLnZhbHVlKVxyXG4gICAgICAgIHN0YXR1c3AuaW5uZXJIVE1MID0gXCJDb25uZWN0ZWQgU3VjY2Vzc2Z1bGx5IVwiXHJcbiAgICAgICAgd2luZG93LmFjY291bnRzID0gYWNjb3VudHM7XHJcbiAgICAgICAgd2luZG93LndlYjMgPSB3ZWIzO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiNzh2d1wiLCBiYWNrZ3JvdW5kOiBcInJnYigyMzQgMTk5IDApXCIgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI2dndcIiwgdG9wOiBcIjM1dndcIiwgd2lkdGg6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDh2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuY3J5cHRvLWNhcmVlcnMuY29tL3VwbG9hZHMvam9iL2xvZ28vMTMwMTAyNTIvb3BlbmdyYXBoX2NlbG8uanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM1dndcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGl2LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjN2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiBcIjF2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDMgNTggMTAwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjI5dndcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiBcIjd2d1wiIH19PlBsZWFzZSBlbnRlciB5b3VyIENFTE8gcHJpdmF0ZSBrZXk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBcIjB2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiM3Z3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IFwiNXZ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaXZhdGUgS2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdwcml2YXRla2V5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiNHZ3XCIsIGhlaWdodDogXCIxMnZ3XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtDb25uZWN0fSBzdHlsZT17eyB3aWR0aDogXCI2NXZ3XCIsIGhlaWdodDogXCIxNXZ3XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e0Nvbm5lY3R9IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IHllbGxvd2J1dHRvblwiIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtDb25uZWN0fSBpZD0nQ05UYnV0dG9uJyBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBmb250U2l6ZTogMjUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjMxZGMyZjlhYzMxNWE4ZWJjYjY2XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJVc2VGb3JtSW5wdXQiLCJ1c2VIaXN0b3J5IiwiTG9naW4iLCJzbGVlcCIsIm1zIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJXZWIzIiwicmVxdWlyZSIsIkNvbm5lY3QiLCJzdGF0dXNwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndlYjMiLCJpbm5lckhUTUwiLCJhY2NvdW50cyIsImV0aCIsInByaXZhdGVLZXlUb0FjY291bnQiLCJ2YWx1ZSIsIndpbmRvdyIsImhlaWdodCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwidG9wIiwid2lkdGgiLCJwb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJvdmVyZmxvdyIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsImdhcCIsImNvbG9yIiwiZm9udFNpemUiLCJwbGFjZUNvbnRlbnQiLCJib3R0b20iLCJhbGlnbkl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==