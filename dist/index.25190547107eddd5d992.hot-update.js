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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return window.location.href = "/login?[" + window.location.pathname + "]";
    },
    className: "btn btn-secondary",
    "aria-disabled": "false"
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    id: "installMeta",
    style: {
      display: "none"
    },
    className: "wallets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "wallet"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    onClick: function onClick() {
      window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn", "_blank");
    },
    className: "btn btn-secondary",
    "aria-disabled": "false"
  }, "Install Metamask"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
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
/******/ 	__webpack_require__.h = function() { return "375c702c5acb7a7c02dc"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjI1MTkwNTQ3MTA3ZWRkZDVkOTkyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQTtBQUVBO0FBSU8sU0FBU0ksR0FBVCxHQUE0QjtBQUMvQixrQkFBc0JILCtDQUFRLENBQUMsRUFBRCxDQUE5QjtBQUFBO0FBQUEsTUFBT0ksR0FBUDtBQUFBLE1BQVlDLE1BQVo7O0FBQ0EsbUJBQThCTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUEsbUJBQThCUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9RLFFBQVA7QUFBQSxNQUFpQkMsU0FBakI7O0FBSitCLFdBU2hCQyxTQVRnQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSwwTUFTL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ1FDLE1BQU0sQ0FBQ0MsUUFBUCxJQUFtQixJQUQzQjtBQUFBO0FBQUE7QUFBQTs7QUFFUUQsY0FBQUEsTUFBTSxDQUFDRSxRQUFQLENBQWdCQyxjQUFoQixDQUErQixhQUEvQixFQUE4Q0MsS0FBOUMsQ0FBb0RDLE9BQXBELEdBQThELE1BQTlEO0FBQ0FMLGNBQUFBLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsY0FBaEIsQ0FBK0IsVUFBL0IsRUFBMkNDLEtBQTNDLENBQWlEQyxPQUFqRCxHQUEyRCxNQUEzRDtBQUNBTCxjQUFBQSxNQUFNLENBQUNFLFFBQVAsQ0FBZ0JDLGNBQWhCLENBQStCLGFBQS9CLEVBQThDQyxLQUE5QyxDQUFvREMsT0FBcEQsR0FBOEQsRUFBOUQ7QUFKUjs7QUFBQTtBQUFBLG9CQU9RTCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JLLGVBQWhCLElBQW1DLElBQW5DLElBQTJDTixNQUFNLENBQUNPLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLG1CQUE1QixLQUFvRCxNQVB2RztBQUFBO0FBQUE7QUFB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O0FBQW1GLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxJQUFJLEVBQUU7QUFBUjtBQUExRixrQkFDSTtBQUNJLFlBQVEsRUFBQyxTQURiO0FBRUksWUFBUSxFQUFDLFNBRmI7QUFHSSxLQUFDLEVBQUM7QUFITixJQURKLENBREosQ0FESixDQVZKLENBREosQ0FESixDQWhCSixDQUhKLENBREosQ0FESjtBQW1ESDs7Ozs7Ozs7VUMzSUQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTmF2L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQge0NvbnRlbnRMb2FkZXJ9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vQ29udGVudExvYWRlcidcbmltcG9ydCB7IHVzZUludGwgfSBmcm9tICdyZWFjdC1pbnRsJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuXG5leHBvcnQgZnVuY3Rpb24gTmF2KCk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBbYWNjLCBzZXRBY2NdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtCYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IFtpc1NpZ25lZCwgc2V0U2lnbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoSW5mbygpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSA9PSBudWxsKSB7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRob3V0U2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRoU2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnN0YWxsTWV0YVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyAhPSBudWxsICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkNvbm5lY3RlZE1ldGFDZWxvXCIpID09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBXZWIzID0gcmVxdWlyZShcIndlYjNcIilcbiAgICAgICAgICAgIGNvbnN0IENvbnRyYWN0S2l0ID0gcmVxdWlyZSgnQGNlbG8vY29udHJhY3RraXQnKVxuICAgICAgICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSlcbiAgICAgICAgICAgIGNvbnN0IGtpdCA9IENvbnRyYWN0S2l0Lm5ld0tpdEZyb21XZWIzKHdlYjMpXG4gICAgICAgICAgICBsZXQgY0VVUnRva2VuID0gYXdhaXQga2l0LmNvbnRyYWN0cy5nZXRTdGFibGVUb2tlbignY0VVUicpXG5cbiAgICAgICAgICAgIGxldCBjRVVSQmFsYW5jZSA9IGF3YWl0IGNFVVJ0b2tlbi5iYWxhbmNlT2Yod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcylcblxuICAgICAgICAgICAgbGV0IHN1YmJpbmcgPSAxMDtcblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNTAwKXtcbiAgICAgICAgICAgICAgICAgc3ViYmluZyA9IDIwO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IHNldEFjYyh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIHN1YmJpbmcpICsgXCIuLi5cIik7XG5cbiAgICAgICAgICAgIHNldEJhbGFuY2UoY0VVUkJhbGFuY2UgLyAxMDAwMDAwMDAwMDAwMDAwMDAwICsgXCIgY0VVUlwiKTtcbiAgICAgICAgICAgIHNldFNpZ25lZCh0cnVlKTtcbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRob3V0U2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2l0aFNpZ25cIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTaWduZWQoZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2l0aG91dFNpZ25cIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRoU2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgZmV0Y2hJbmZvKCk7XG4gICAgICAgIH0sIDEwMDApXG5cbiAgICB9LCBbXSk7XG4gICAgZnVuY3Rpb24gTmF2QnV0dG9ucygpOiBKU1guRWxlbWVudCB7XG5cbiAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2RvbmF0aW9uXCIgaWQ9XCJkb25hdGlvbmJ0bk5hdlwiPlxuICAgICAgICAgICAgICAgICAgICBEb25hdGlvblxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvQ3JlYXRlRXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBFdmVudHNcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8Lz4pXG4gICAgfVxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tEaXNDb25uZWN0Q2VsbygpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ29ubmVjdGVkTWV0YUNlbG9cIiwgXCJcIilcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVHlwZVwiLFwiXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiL1wiXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYWluLW5hdlwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxOYXZCdXR0b25zIC8+XG5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdOYXYgd2FsbGV0c3RhdHVzJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nd2l0aG91dFNpZ24nIGNsYXNzTmFtZT1cIndhbGxldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCk9PndpbmRvdy5sb2NhdGlvbi5ocmVmPVwiL2xvZ2luP1tcIit3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUrXCJdXCJ9IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgYXJpYS1kaXNhYmxlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2luc3RhbGxNZXRhJyBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fSBjbGFzc05hbWU9XCJ3YWxsZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgd2luZG93Lm9wZW4oXCJodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9tZXRhbWFzay9ua2JpaGZiZW9nYWVhb2VobGVmbmtvZGJlZmdwZ2tublwiLCBcIl9ibGFua1wiKSB9fSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGFyaWEtZGlzYWJsZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0YWxsIE1ldGFtYXNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIndpdGhTaWduXCIgY2xhc3NOYW1lPVwid2FsbGV0c1wiIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRcIiBzdHlsZT17eyBoZWlnaHQ6IDQ4LCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldF9fd3JhcHBlclwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0X19pbmZvXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRfX2FkZHJlc3NcIiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGxldHRlclNwYWNpbmc6IFwiMC41cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldF9fYmFsYW5jZVwiIHN0eWxlPXt7IGNvbG9yOiBcInJnYigyMzYgMTkwIDMzIC8gNTAlKVwiLCBmb250U2l6ZTogMTIsIGxldHRlclNwYWNpbmc6IFwiMC42cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGlja0Rpc0Nvbm5lY3RDZWxvfSBjbGFzc05hbWU9XCJidG4gYnRuLWxvZ291dFwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGhlaWdodD17MzJ9IHdpZHRoPXszMn0gc3R5bGU9e3sgZmlsbDogXCJyZ2IoMTk3LCAyMjgsIDI0MylcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xOC40NzUzIDE4LjI5MDNIMTkuMjk1SDIwLjExNDZWMjEuNTE2MlYyMy45MzU1SDE1LjE5NjZMMTUuMTk2NyAyN0wxMy4wNDkyIDI2LjI3OTlMOC4xMTYzMyAyNC42NjJDNy40NDU5IDI0LjQzMyA3IDI0LjI3ODIgNyAyNC4yNzgyVjdIOC42MzkzOEM4LjY2MTk2IDcgOC42ODM3OCA3LjAwNDU5IDguNzA1NTggNy4wMDkxOUM4LjcyMjQ4IDcuMDEyNzUgOC43MzkzNiA3LjAxNjMgOC43NTY1OSA3LjAxNzcyQzguNzY5MjkgNy4wMTYwNSA4Ljc4MTI1IDcuMDEyNjcgOC43OTMxNSA3LjAwOTMxQzguODA5NjggNy4wMDQ2NCA4LjgyNjEgNyA4Ljg0NDI0IDdIMTcuNjU1NkgyMC4xMTQ2VjExLjgzODdIMTkuMjk1SDE4LjQ3NTNMMTguNDc1NCA4LjYxMjY3TDE3LjY1NTYgOC42MTI4MUgxMy44Mzc2SDExLjkxOEwxNS4xOTY2IDkuNDE5MzZWMjIuMzIyNkgxOC40NzUzVjIxLjUxNjJWMTguMjkwM1pNMjMuMTUzIDExLjI2ODZMMjcgMTUuMDY0NEMyNyAxNS4wNjQ0IDI2Ljc1MjIgMTUuMzE5NCAyNi40MzE4IDE1LjYzNDZMMjMuMTUzIDE4Ljg2MDVMMjEuNzU0MSAyMC4yMjU3TDIxLjc1MzkgMTUuODcwOUgxNy42NTU2VjE1LjA2NDVWMTQuMjU4MUgyMS43NTM5TDIxLjc1NDEgOS45MDMwMUwyMy4xNTMgMTEuMjY4NlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgKVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjM3NWM3MDJjNWFjYjdhN2MwMmRjXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJOYXYiLCJhY2MiLCJzZXRBY2MiLCJCYWxhbmNlIiwic2V0QmFsYW5jZSIsImlzU2lnbmVkIiwic2V0U2lnbmVkIiwiZmV0Y2hJbmZvIiwid2luZG93IiwiZXRoZXJldW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwic2VsZWN0ZWRBZGRyZXNzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIldlYjMiLCJyZXF1aXJlIiwiQ29udHJhY3RLaXQiLCJ3ZWIzIiwia2l0IiwibmV3S2l0RnJvbVdlYjMiLCJjb250cmFjdHMiLCJnZXRTdGFibGVUb2tlbiIsImNFVVJ0b2tlbiIsImJhbGFuY2VPZiIsImNFVVJCYWxhbmNlIiwic3ViYmluZyIsImlubmVyV2lkdGgiLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImVycm9yIiwic2V0SW50ZXJ2YWwiLCJOYXZCdXR0b25zIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93Iiwib25DbGlja0Rpc0Nvbm5lY3RDZWxvIiwic2V0SXRlbSIsImxvY2F0aW9uIiwiaHJlZiIsInBhdGhuYW1lIiwib3BlbiIsImhlaWdodCIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJjb2xvciIsInBhZGRpbmciLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==