"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/components/layout/Nav/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/layout/Nav/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nav": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/components/layout/Nav/index.scss");



 // import {ContentLoader} from '@/components/common/ContentLoader'



function Nav() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      acc = _useState2[0],
      setAcc = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      Balance = _useState4[0],
      setBalance = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      isSigned = _useState6[0],
      setSigned = _useState6[1];

  function fetchInfo() {
    return _fetchInfo.apply(this, arguments);
  }

  function _fetchInfo() {
    _fetchInfo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var Web3, ContractKit, web3, kit, cEURtoken, cEURBalance, subbing;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(window.ethereum == null)) {
                _context2.next = 5;
                break;
              }

              window.document.getElementById("withoutSign").style.display = "none";
              window.document.getElementById("withSign").style.display = "none";
              window.document.getElementById("installMeta").style.display = "";
              return _context2.abrupt("return");

            case 5:
              if (!(window.ethereum.selectedAddress != null && window.localStorage.getItem("ConnectedMetaCelo") == "true")) {
                _context2.next = 25;
                break;
              }

              Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
              ContractKit = __webpack_require__(/*! @celo/contractkit */ "./node_modules/@celo/contractkit/lib/index.js");
              web3 = new Web3(window.ethereum);
              kit = ContractKit.newKitFromWeb3(web3);
              _context2.next = 12;
              return kit.contracts.getStableToken('cEUR');

            case 12:
              cEURtoken = _context2.sent;
              _context2.next = 15;
              return cEURtoken.balanceOf(window.ethereum.selectedAddress);

            case 15:
              cEURBalance = _context2.sent;
              subbing = 10;

              if (window.innerWidth > 500) {
                subbing = 20;
              }

              _context2.next = 20;
              return setAcc(window.ethereum.selectedAddress.toString().substring(0, subbing) + "...");

            case 20:
              setBalance(cEURBalance / 1000000000000000000 + " cEUR");
              setSigned(true);

              try {
                window.document.getElementById("withoutSign").style.display = "none";
                window.document.getElementById("withSign").style.display = "";
              } catch (error) {}

              _context2.next = 28;
              break;

            case 25:
              setSigned(false);
              window.document.getElementById("withoutSign").style.display = "";
              window.document.getElementById("withSign").style.display = "none";

            case 28:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _fetchInfo.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setInterval( /*#__PURE__*/(0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetchInfo();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), 1000);
  }, []);

  function NavButtons() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
      to: "/donation",
      id: "donationbtnNav"
    }, "Donation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
      to: "/CreateEvents"
    }, "Create Events")));
  }

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      modalShow = _useState8[0],
      setModalShow = _useState8[1];

  function onClickDisConnectCelo() {
    return _onClickDisConnectCelo.apply(this, arguments);
  }

  function _onClickDisConnectCelo() {
    _onClickDisConnectCelo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              window.localStorage.setItem("ConnectedMetaCelo", "");
              window.localStorage.setItem("Type", "");
              window.location.href = "/";

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _onClickDisConnectCelo.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("nav", {
    className: "main-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(NavButtons, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("li", {
    className: "Nav walletstatus"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    id: "withoutSign",
    className: "wallets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
    to: "/login?[/]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return window.location.href = "/login?[" + window.location.pathname + "]";
    },
    className: "btn btn-secondary",
    "aria-disabled": "false"
  }, "Login")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    id: "installMeta",
    style: {
      display: "none"
    },
    className: "wallets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
    to: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    onClick: function onClick() {
      window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn", "_blank");
    },
    className: "btn btn-secondary",
    "aria-disabled": "false"
  }, "Install Metamask")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    id: "withSign",
    className: "wallets",
    style: {
      display: "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet",
    style: {
      height: 48,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet__wrapper",
    style: {
      display: "flex",
      alignItems: "center",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet__address",
    style: {
      fontSize: 14,
      letterSpacing: "0.5px"
    }
  }, acc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet__balance",
    style: {
      color: "rgb(236 190 33 / 50%)",
      fontSize: 12,
      letterSpacing: "0.6px"
    }
  }, Balance)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    onClick: onClickDisConnectCelo,
    className: "btn btn-logout",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    height: 32,
    width: 32,
    style: {
      fill: "rgb(197, 228, 243)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.4753 18.2903H19.295H20.1146V21.5162V23.9355H15.1966L15.1967 27L13.0492 26.2799L8.11633 24.662C7.4459 24.433 7 24.2782 7 24.2782V7H8.63938C8.66196 7 8.68378 7.00459 8.70558 7.00919C8.72248 7.01275 8.73936 7.0163 8.75659 7.01772C8.76929 7.01605 8.78125 7.01267 8.79315 7.00931C8.80968 7.00464 8.8261 7 8.84424 7H17.6556H20.1146V11.8387H19.295H18.4753L18.4754 8.61267L17.6556 8.61281H13.8376H11.918L15.1966 9.41936V22.3226H18.4753V21.5162V18.2903ZM23.153 11.2686L27 15.0644C27 15.0644 26.7522 15.3194 26.4318 15.6346L23.153 18.8605L21.7541 20.2257L21.7539 15.8709H17.6556V15.0645V14.2581H21.7539L21.7541 9.90301L23.153 11.2686Z"
  }))))))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b51c8cddc05c8e72971b"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjkwMjY0YmM0ODBmOWMxN2ZlYjI1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQTtBQUVBO0FBSU8sU0FBU0ksR0FBVCxHQUE0QjtBQUMvQixrQkFBc0JILCtDQUFRLENBQUMsRUFBRCxDQUE5QjtBQUFBO0FBQUEsTUFBT0ksR0FBUDtBQUFBLE1BQVlDLE1BQVo7O0FBQ0EsbUJBQThCTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUEsbUJBQThCUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9RLFFBQVA7QUFBQSxNQUFpQkMsU0FBakI7O0FBSitCLFdBU2hCQyxTQVRnQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSwwTUFTL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ1FDLE1BQU0sQ0FBQ0MsUUFBUCxJQUFtQixJQUQzQjtBQUFBO0FBQUE7QUFBQTs7QUFFUUQsY0FBQUEsTUFBTSxDQUFDRSxRQUFQLENBQWdCQyxjQUFoQixDQUErQixhQUEvQixFQUE4Q0MsS0FBOUMsQ0FBb0RDLE9BQXBELEdBQThELE1BQTlEO0FBQ0FMLGNBQUFBLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsY0FBaEIsQ0FBK0IsVUFBL0IsRUFBMkNDLEtBQTNDLENBQWlEQyxPQUFqRCxHQUEyRCxNQUEzRDtBQUNBTCxjQUFBQSxNQUFNLENBQUNFLFFBQVAsQ0FBZ0JDLGNBQWhCLENBQStCLGFBQS9CLEVBQThDQyxLQUE5QyxDQUFvREMsT0FBcEQsR0FBOEQsRUFBOUQ7QUFKUjs7QUFBQTtBQUFBLG9CQU9RTCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JLLGVBQWhCLElBQW1DLElBQW5DLElBQTJDTixNQUFNLENBQUNPLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLG1CQUE1QixLQUFvRCxNQVB2RztBQUFBO0FBQUE7QUFB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QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDLFdBQWhEO0FBQTRELFVBQU0sRUFBRSxFQUFwRTtBQUF3RSxTQUFLLEVBQUUsRUFBL0U7QUFBbUYsU0FBSyxFQUFFO0FBQUVDLE1BQUFBLElBQUksRUFBRTtBQUFSO0FBQTFGLGtCQUNJO0FBQ0ksWUFBUSxFQUFDLFNBRGI7QUFFSSxZQUFRLEVBQUMsU0FGYjtBQUdJLEtBQUMsRUFBQztBQUhOLElBREosQ0FESixDQURKLENBVkosQ0FESixDQURKLENBcEJKLENBSEosQ0FESixDQURKO0FBdURIOzs7Ozs7OztVQy9JRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9jb21wb25lbnRzL2xheW91dC9OYXYvaW5kZXgudHN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7Q29udGVudExvYWRlcn0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9Db250ZW50TG9hZGVyJ1xuaW1wb3J0IHsgdXNlSW50bCB9IGZyb20gJ3JlYWN0LWludGwnXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEJ1dHRvbiwgR3JpZCwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBOYXYoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IFthY2MsIHNldEFjY10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW0JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgW2lzU2lnbmVkLCBzZXRTaWduZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hJbmZvKCkge1xuICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtID09IG51bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpdGhvdXRTaWduXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpdGhTaWduXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RhbGxNZXRhXCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzICE9IG51bGwgJiYgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQ29ubmVjdGVkTWV0YUNlbG9cIikgPT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IFdlYjMgPSByZXF1aXJlKFwid2ViM1wiKVxuICAgICAgICAgICAgY29uc3QgQ29udHJhY3RLaXQgPSByZXF1aXJlKCdAY2Vsby9jb250cmFjdGtpdCcpXG4gICAgICAgICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKVxuICAgICAgICAgICAgY29uc3Qga2l0ID0gQ29udHJhY3RLaXQubmV3S2l0RnJvbVdlYjMod2ViMylcbiAgICAgICAgICAgIGxldCBjRVVSdG9rZW4gPSBhd2FpdCBraXQuY29udHJhY3RzLmdldFN0YWJsZVRva2VuKCdjRVVSJylcblxuICAgICAgICAgICAgbGV0IGNFVVJCYWxhbmNlID0gYXdhaXQgY0VVUnRva2VuLmJhbGFuY2VPZih3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzKVxuXG4gICAgICAgICAgICBsZXQgc3ViYmluZyA9IDEwO1xuXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA1MDApe1xuICAgICAgICAgICAgICAgICBzdWJiaW5nID0gMjA7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgc2V0QWNjKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgc3ViYmluZykgKyBcIi4uLlwiKTtcblxuICAgICAgICAgICAgc2V0QmFsYW5jZShjRVVSQmFsYW5jZSAvIDEwMDAwMDAwMDAwMDAwMDAwMDAgKyBcIiBjRVVSXCIpO1xuICAgICAgICAgICAgc2V0U2lnbmVkKHRydWUpO1xuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpdGhvdXRTaWduXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRoU2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFNpZ25lZChmYWxzZSk7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRob3V0U2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpdGhTaWduXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBmZXRjaEluZm8oKTtcbiAgICAgICAgfSwgMTAwMClcblxuICAgIH0sIFtdKTtcbiAgICBmdW5jdGlvbiBOYXZCdXR0b25zKCk6IEpTWC5FbGVtZW50IHtcblxuICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvZG9uYXRpb25cIiBpZD1cImRvbmF0aW9uYnRuTmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIERvbmF0aW9uXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9DcmVhdGVFdmVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIEV2ZW50c1xuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvPilcbiAgICB9XG4gICAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgXG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Rpc0Nvbm5lY3RDZWxvKCkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiLCBcIlwiKVxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUeXBlXCIsXCJcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9XCIvXCJcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1haW4tbmF2XCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPE5hdkJ1dHRvbnMgLz5cblxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J05hdiB3YWxsZXRzdGF0dXMnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSd3aXRob3V0U2lnbicgY2xhc3NOYW1lPVwid2FsbGV0c1wiPlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0byA9IFwiL2xvZ2luP1svXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+d2luZG93LmxvY2F0aW9uLmhyZWY9XCIvbG9naW4/W1wiK3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZStcIl1cIn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBhcmlhLWRpc2FibGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0naW5zdGFsbE1ldGEnIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19IGNsYXNzTmFtZT1cIndhbGxldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG8gPSBcImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL21ldGFtYXNrL25rYmloZmJlb2dhZWFvZWhsZWZua29kYmVmZ3Bna25uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgd2luZG93Lm9wZW4oXCJodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9tZXRhbWFzay9ua2JpaGZiZW9nYWVhb2VobGVmbmtvZGJlZmdwZ2tublwiLCBcIl9ibGFua1wiKSB9fSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGFyaWEtZGlzYWJsZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0YWxsIE1ldGFtYXNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIndpdGhTaWduXCIgY2xhc3NOYW1lPVwid2FsbGV0c1wiIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRcIiBzdHlsZT17eyBoZWlnaHQ6IDQ4LCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldF9fd3JhcHBlclwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0X19pbmZvXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRfX2FkZHJlc3NcIiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGxldHRlclNwYWNpbmc6IFwiMC41cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldF9fYmFsYW5jZVwiIHN0eWxlPXt7IGNvbG9yOiBcInJnYigyMzYgMTkwIDMzIC8gNTAlKVwiLCBmb250U2l6ZTogMTIsIGxldHRlclNwYWNpbmc6IFwiMC42cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGlja0Rpc0Nvbm5lY3RDZWxvfSBjbGFzc05hbWU9XCJidG4gYnRuLWxvZ291dFwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGhlaWdodD17MzJ9IHdpZHRoPXszMn0gc3R5bGU9e3sgZmlsbDogXCJyZ2IoMTk3LCAyMjgsIDI0MylcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xOC40NzUzIDE4LjI5MDNIMTkuMjk1SDIwLjExNDZWMjEuNTE2MlYyMy45MzU1SDE1LjE5NjZMMTUuMTk2NyAyN0wxMy4wNDkyIDI2LjI3OTlMOC4xMTYzMyAyNC42NjJDNy40NDU5IDI0LjQzMyA3IDI0LjI3ODIgNyAyNC4yNzgyVjdIOC42MzkzOEM4LjY2MTk2IDcgOC42ODM3OCA3LjAwNDU5IDguNzA1NTggNy4wMDkxOUM4LjcyMjQ4IDcuMDEyNzUgOC43MzkzNiA3LjAxNjMgOC43NTY1OSA3LjAxNzcyQzguNzY5MjkgNy4wMTYwNSA4Ljc4MTI1IDcuMDEyNjcgOC43OTMxNSA3LjAwOTMxQzguODA5NjggNy4wMDQ2NCA4LjgyNjEgNyA4Ljg0NDI0IDdIMTcuNjU1NkgyMC4xMTQ2VjExLjgzODdIMTkuMjk1SDE4LjQ3NTNMMTguNDc1NCA4LjYxMjY3TDE3LjY1NTYgOC42MTI4MUgxMy44Mzc2SDExLjkxOEwxNS4xOTY2IDkuNDE5MzZWMjIuMzIyNkgxOC40NzUzVjIxLjUxNjJWMTguMjkwM1pNMjMuMTUzIDExLjI2ODZMMjcgMTUuMDY0NEMyNyAxNS4wNjQ0IDI2Ljc1MjIgMTUuMzE5NCAyNi40MzE4IDE1LjYzNDZMMjMuMTUzIDE4Ljg2MDVMMjEuNzU0MSAyMC4yMjU3TDIxLjc1MzkgMTUuODcwOUgxNy42NTU2VjE1LjA2NDVWMTQuMjU4MUgyMS43NTM5TDIxLjc1NDEgOS45MDMwMUwyMy4xNTMgMTEuMjY4NlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgKVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImI1MWM4Y2RkYzA1YzhlNzI5NzFiXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJOYXYiLCJhY2MiLCJzZXRBY2MiLCJCYWxhbmNlIiwic2V0QmFsYW5jZSIsImlzU2lnbmVkIiwic2V0U2lnbmVkIiwiZmV0Y2hJbmZvIiwid2luZG93IiwiZXRoZXJldW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwic2VsZWN0ZWRBZGRyZXNzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIldlYjMiLCJyZXF1aXJlIiwiQ29udHJhY3RLaXQiLCJ3ZWIzIiwia2l0IiwibmV3S2l0RnJvbVdlYjMiLCJjb250cmFjdHMiLCJnZXRTdGFibGVUb2tlbiIsImNFVVJ0b2tlbiIsImJhbGFuY2VPZiIsImNFVVJCYWxhbmNlIiwic3ViYmluZyIsImlubmVyV2lkdGgiLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImVycm9yIiwic2V0SW50ZXJ2YWwiLCJOYXZCdXR0b25zIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93Iiwib25DbGlja0Rpc0Nvbm5lY3RDZWxvIiwic2V0SXRlbSIsImxvY2F0aW9uIiwiaHJlZiIsInBhdGhuYW1lIiwib3BlbiIsImhlaWdodCIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJjb2xvciIsInBhZGRpbmciLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==