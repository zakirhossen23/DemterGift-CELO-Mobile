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
      var Web3, ContractKit, web3, kit, cEURtoken, cEURBalance;
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
                _context2.next = 23;
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
              _context2.next = 18;
              return setAcc(window.ethereum.selectedAddress.toString().substring(0, 10) + "...");

            case 18:
              setBalance(cEURBalance / 1000000000000000000 + " cEUR");
              setSigned(true);

              try {
                window.document.getElementById("withoutSign").style.display = "none";
                window.document.getElementById("withSign").style.display = "";
              } catch (error) {}

              _context2.next = 27;
              break;

            case 23:
              setSigned(false);
              window.document.getElementById("withoutSign").style.display = "";
              window.document.getElementById("withSign").style.display = "none";

              try {
                window.document.getElementById("withoutSign").style.display = "none";
                window.document.getElementById("withSign").style.display = "";
              } catch (error) {}

            case 27:
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
      setModalShow = _useState8[1]; //Celo


  function onClickConnectCelo() {
    return _onClickConnectCelo.apply(this, arguments);
  }

  function _onClickConnectCelo() {
    _onClickConnectCelo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var result, getacc;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 2:
              result = _context3.sent;
              result;
              _context3.prev = 4;
              _context3.next = 7;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0xaef3'
                }] //44787

              });

            case 7:
              getacc = _context3.sent;
              getacc;
              _context3.next = 22;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](4);

              if (!(_context3.t0.code === 4902)) {
                _context3.next = 22;
                break;
              }

              _context3.prev = 14;
              _context3.next = 17;
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
              _context3.next = 22;
              break;

            case 19:
              _context3.prev = 19;
              _context3.t1 = _context3["catch"](14);
              // handle "add" error
              console.log(_context3.t1);

            case 22:
              window.localStorage.setItem("ConnectedMetaCelo", "true");

            case 23:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[4, 11], [14, 19]]);
    }));
    return _onClickConnectCelo.apply(this, arguments);
  }

  function onClickDisConnectCelo() {
    return _onClickDisConnectCelo.apply(this, arguments);
  }

  function _onClickDisConnectCelo() {
    _onClickDisConnectCelo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              window.localStorage.setItem("ConnectedMetaCelo", "");
              window.location.href = "/";

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
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
    onClick: onClickConnectCelo,
    className: "btn btn-secondary",
    "aria-disabled": "false"
  }, "Connect to a wallet"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/layout/Nav/index.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/layout/Nav/index.scss ***!
  \***************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wallets {\n  align-items: center;\n  display: flex;\n  position: sticky;\n}\n\n.Nav.walletstatus {\n  position: absolute;\n  right: 10px;\n}\n\n.main-nav {\n  width: 86%;\n}\n.main-nav ul {\n  align-items: center;\n  display: flex;\n}\n.main-nav ul li {\n  margin-right: 6px;\n}\n.main-nav ul li a {\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: 0.25px;\n  opacity: 0.48;\n}\n.main-nav ul li a:hover, .main-nav ul li a.active {\n  opacity: 1;\n  text-decoration: none;\n}\n@media only screen and (max-width: 500px) {\n  .main-nav ul {\n    align-items: center;\n    display: flex;\n    justify-content: space-evenly;\n  }\n  .main-nav ul li {\n    margin-right: 6px;\n  }\n  .main-nav ul li:last-child {\n    margin-right: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/layout/Nav/index.scss"],"names":[],"mappings":"AACA;EACI,mBAAA;EACA,aAAA;EACA,gBAAA;AAAJ;;AAEA;EACI,kBAAA;EACA,WAAA;AACJ;;AAEA;EACI,UAAA;AACJ;AAAI;EACI,mBAAA;EACA,aAAA;AAER;AADQ;EACI,iBAAA;AAGZ;AAFY;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,sBAAA;EACA,aAAA;AAIhB;AAFgB;EAEI,UAAA;EACA,qBAAA;AAGpB;AAGI;EACI;IACI,mBAAA;IACA,aAAA;IACA,6BAAA;EADV;EAGU;IACI,iBAAA;EADd;EAGc;IACI,eAAA;EADlB;AACF","sourcesContent":["\n.wallets {\n    align-items: center;\n    display: flex;\n    position: sticky;\n}\n.Nav.walletstatus{\n    position: absolute;\n    right: 10px;\n}\n\n.main-nav {\n    width: 86%;\n    ul {\n        align-items: center;\n        display: flex;\n        li {\n            margin-right: 6px;\n            a {\n                color: #ffffff;\n                font-size: 16px;\n                font-weight: 500;\n                letter-spacing: 0.25px;\n                opacity: 0.48;\n\n                &:hover,\n                &.active {\n                    opacity: 1;\n                    text-decoration: none;\n                }\n            }\n        }\n    }\n\n    @media only screen and (max-width: 500px) {\n        ul {\n            align-items: center;\n            display: flex;\n            justify-content: space-evenly;\n    \n            li {\n                margin-right: 6px;\n\n                &:last-child {\n                    margin-right: 0;\n                }\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "587cb61a575540569c8d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjhmOWNmMmFkMGNiNDQwNGMxMGQwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQTtBQUVBO0FBSU8sU0FBU0ksR0FBVCxHQUE0QjtBQUMvQixrQkFBc0JILCtDQUFRLENBQUMsRUFBRCxDQUE5QjtBQUFBO0FBQUEsTUFBT0ksR0FBUDtBQUFBLE1BQVlDLE1BQVo7O0FBQ0EsbUJBQThCTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUEsbUJBQThCUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9RLFFBQVA7QUFBQSxNQUFpQkMsU0FBakI7O0FBSitCLFdBU2hCQyxTQVRnQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSwwTUFTL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ1FDLE1BQU0sQ0FBQ0MsUUFBUCxJQUFtQixJQUQzQjtBQUFBO0FBQUE7QUFBQTs7QUFFUUQsY0FBQUEsTUFBTSxDQUFDRSxRQUFQLENBQWdCQyxjQUFoQixDQUErQixhQUEvQixFQUE4Q0MsS0FBOUMsQ0FBb0RDLE9BQXBELEdBQThELE1BQTlEO0FBQ0FMLGNBQUFBLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsY0FBaEIsQ0FBK0IsVUFBL0IsRUFBMkNDLEtBQTNDLENBQWlEQyxPQUFqRCxHQUEyRCxNQUEzRDtBQUNBTCxjQUFBQSxNQUFNLENBQUNFLFFBQVAsQ0FBZ0JDLGNBQWhCLENBQStCLGFBQS9CLEVBQThDQyxLQUE5QyxDQUFvREMsT0FBcEQsR0FBOEQsRUFBOUQ7QUFKUjs7QUFBQTtBQUFBLG9CQU9RTCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JLLGVBQWhCLElBQW1DLElBQW5DLElBQTJDTixNQUFNLENBQUNPLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLG1CQUE1QixLQUFvRCxNQVB2RztBQUFBO0FBQUE7QUFB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R0FBRyxvQkFBb0IseUJBQXlCLGtCQUFrQixHQUFHLGVBQWUsaUJBQWlCLFVBQVUsOEJBQThCLHdCQUF3QixjQUFjLGdDQUFnQyxpQkFBaUIsaUNBQWlDLGtDQUFrQyxtQ0FBbUMseUNBQXlDLGdDQUFnQyx3REFBd0QsaUNBQWlDLDRDQUE0QyxtQkFBbUIsZUFBZSxXQUFXLE9BQU8sbURBQW1ELGNBQWMsa0NBQWtDLDRCQUE0Qiw0Q0FBNEMsd0JBQXdCLG9DQUFvQyxrQ0FBa0Msc0NBQXNDLG1CQUFtQixlQUFlLFdBQVcsT0FBTyxHQUFHLHFCQUFxQjtBQUMvd0U7QUFDQSwrREFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDUHZDLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L05hdi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTmF2L2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHtDb250ZW50TG9hZGVyfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL0NvbnRlbnRMb2FkZXInXG5pbXBvcnQgeyB1c2VJbnRsIH0gZnJvbSAncmVhY3QtaW50bCdcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgQnV0dG9uLCBHcmlkLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgJy4vaW5kZXguc2NzcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuZXhwb3J0IGZ1bmN0aW9uIE5hdigpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgW2FjYywgc2V0QWNjXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbQmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBbaXNTaWduZWQsIHNldFNpZ25lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEluZm8oKSB7XG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0gPT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2l0aG91dFNpZ25cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2l0aFNpZ25cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zdGFsbE1ldGFcIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MgIT0gbnVsbCAmJiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiKSA9PSBcInRydWVcIikge1xuICAgICAgICAgICAgY29uc3QgV2ViMyA9IHJlcXVpcmUoXCJ3ZWIzXCIpXG4gICAgICAgICAgICBjb25zdCBDb250cmFjdEtpdCA9IHJlcXVpcmUoJ0BjZWxvL2NvbnRyYWN0a2l0JylcbiAgICAgICAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pXG4gICAgICAgICAgICBjb25zdCBraXQgPSBDb250cmFjdEtpdC5uZXdLaXRGcm9tV2ViMyh3ZWIzKVxuICAgICAgICAgICAgbGV0IGNFVVJ0b2tlbiA9IGF3YWl0IGtpdC5jb250cmFjdHMuZ2V0U3RhYmxlVG9rZW4oJ2NFVVInKVxuXG4gICAgICAgICAgICBsZXQgY0VVUkJhbGFuY2UgPSBhd2FpdCBjRVVSdG9rZW4uYmFsYW5jZU9mKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MpXG5cblxuICAgICAgICAgICAgYXdhaXQgc2V0QWNjKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApICsgXCIuLi5cIik7XG5cbiAgICAgICAgICAgIHNldEJhbGFuY2UoY0VVUkJhbGFuY2UgLyAxMDAwMDAwMDAwMDAwMDAwMDAwICsgXCIgY0VVUlwiKTtcbiAgICAgICAgICAgIHNldFNpZ25lZCh0cnVlKTtcbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRob3V0U2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2l0aFNpZ25cIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTaWduZWQoZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2l0aG91dFNpZ25cIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRoU2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2l0aG91dFNpZ25cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpdGhTaWduXCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IGZldGNoSW5mbygpO1xuICAgICAgICB9LCAxMDAwKVxuXG4gICAgfSwgW10pO1xuICAgIGZ1bmN0aW9uIE5hdkJ1dHRvbnMoKTogSlNYLkVsZW1lbnQge1xuXG4gICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9kb25hdGlvblwiIGlkPVwiZG9uYXRpb25idG5OYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgRG9uYXRpb25cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL0NyZWF0ZUV2ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgRXZlbnRzXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC8+KVxuICAgIH1cbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy9DZWxvXG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3RDZWxvKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgICAgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZ2V0YWNjID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFt7IGNoYWluSWQ6ICcweGFlZjMnLCB9XSwgLy80NDc4N1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRhY2M7XG4gICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxuICAgICAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICcweGFlZjMnLCAvLzQ0Nzg3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluTmFtZTogJ0FsZmFqb3JlcyBDZWxvIFRlc3RuZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0NFVVInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnQ0VVUicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY1VybHM6IFsnaHR0cHM6Ly9hbGZham9yZXMtZm9ybm8uY2Vsby10ZXN0bmV0Lm9yZyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChhZGRFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgXCJhZGRcIiBlcnJvclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFuZGxlIG90aGVyIFwic3dpdGNoXCIgZXJyb3JzXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ29ubmVjdGVkTWV0YUNlbG9cIiwgXCJ0cnVlXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Rpc0Nvbm5lY3RDZWxvKCkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiLCBcIlwiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cIi9cIlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8TmF2QnV0dG9ucyAvPlxuXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nTmF2IHdhbGxldHN0YXR1cyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3dpdGhvdXRTaWduJyBjbGFzc05hbWU9XCJ3YWxsZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0Q2Vsb30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBhcmlhLWRpc2FibGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCB0byBhIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdpbnN0YWxsTWV0YScgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0gY2xhc3NOYW1lPVwid2FsbGV0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvbWV0YW1hc2svbmtiaWhmYmVvZ2FlYW9laGxlZm5rb2RiZWZncGdrbm5cIiwgXCJfYmxhbmtcIikgfX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBhcmlhLWRpc2FibGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zdGFsbCBNZXRhbWFza1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3aXRoU2lnblwiIGNsYXNzTmFtZT1cIndhbGxldHNcIiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0XCIgc3R5bGU9e3sgaGVpZ2h0OiA0OCwgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRfX3dyYXBwZXJcIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldF9faW5mb1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0X19hZGRyZXNzXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBsZXR0ZXJTcGFjaW5nOiBcIjAuNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRfX2JhbGFuY2VcIiBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMjM2IDE5MCAzMyAvIDUwJSlcIiwgZm9udFNpemU6IDEyLCBsZXR0ZXJTcGFjaW5nOiBcIjAuNnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xpY2tEaXNDb25uZWN0Q2Vsb30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1sb2dvdXRcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBoZWlnaHQ9ezMyfSB3aWR0aD17MzJ9IHN0eWxlPXt7IGZpbGw6IFwicmdiKDE5NywgMjI4LCAyNDMpXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTguNDc1MyAxOC4yOTAzSDE5LjI5NUgyMC4xMTQ2VjIxLjUxNjJWMjMuOTM1NUgxNS4xOTY2TDE1LjE5NjcgMjdMMTMuMDQ5MiAyNi4yNzk5TDguMTE2MzMgMjQuNjYyQzcuNDQ1OSAyNC40MzMgNyAyNC4yNzgyIDcgMjQuMjc4MlY3SDguNjM5MzhDOC42NjE5NiA3IDguNjgzNzggNy4wMDQ1OSA4LjcwNTU4IDcuMDA5MTlDOC43MjI0OCA3LjAxMjc1IDguNzM5MzYgNy4wMTYzIDguNzU2NTkgNy4wMTc3MkM4Ljc2OTI5IDcuMDE2MDUgOC43ODEyNSA3LjAxMjY3IDguNzkzMTUgNy4wMDkzMUM4LjgwOTY4IDcuMDA0NjQgOC44MjYxIDcgOC44NDQyNCA3SDE3LjY1NTZIMjAuMTE0NlYxMS44Mzg3SDE5LjI5NUgxOC40NzUzTDE4LjQ3NTQgOC42MTI2N0wxNy42NTU2IDguNjEyODFIMTMuODM3NkgxMS45MThMMTUuMTk2NiA5LjQxOTM2VjIyLjMyMjZIMTguNDc1M1YyMS41MTYyVjE4LjI5MDNaTTIzLjE1MyAxMS4yNjg2TDI3IDE1LjA2NDRDMjcgMTUuMDY0NCAyNi43NTIyIDE1LjMxOTQgMjYuNDMxOCAxNS42MzQ2TDIzLjE1MyAxOC44NjA1TDIxLjc1NDEgMjAuMjI1N0wyMS43NTM5IDE1Ljg3MDlIMTcuNjU1NlYxNS4wNjQ1VjE0LjI1ODFIMjEuNzUzOUwyMS43NTQxIDkuOTAzMDFMMjMuMTUzIDExLjI2ODZaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgIClcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLndhbGxldHMge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbn1cXG5cXG4uTmF2LndhbGxldHN0YXR1cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG59XFxuXFxuLm1haW4tbmF2IHtcXG4gIHdpZHRoOiA4NiU7XFxufVxcbi5tYWluLW5hdiB1bCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm1haW4tbmF2IHVsIGxpIHtcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbn1cXG4ubWFpbi1uYXYgdWwgbGkgYSB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xcbiAgb3BhY2l0eTogMC40ODtcXG59XFxuLm1haW4tbmF2IHVsIGxpIGE6aG92ZXIsIC5tYWluLW5hdiB1bCBsaSBhLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAubWFpbi1uYXYgdWwge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG4gIC5tYWluLW5hdiB1bCBsaSB7XFxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xcbiAgfVxcbiAgLm1haW4tbmF2IHVsIGxpOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2xheW91dC9OYXYvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjtBQUFJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FBRVI7QUFEUTtFQUNJLGlCQUFBO0FBR1o7QUFGWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFJaEI7QUFGZ0I7RUFFSSxVQUFBO0VBQ0EscUJBQUE7QUFHcEI7QUFHSTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7RUFEVjtFQUdVO0lBQ0ksaUJBQUE7RUFEZDtFQUdjO0lBQ0ksZUFBQTtFQURsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi53YWxsZXRzIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG59XFxuLk5hdi53YWxsZXRzdGF0dXN7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5tYWluLW5hdiB7XFxuICAgIHdpZHRoOiA4NiU7XFxuICAgIHVsIHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgbGkge1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xcbiAgICAgICAgICAgIGEge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ4O1xcblxcbiAgICAgICAgICAgICAgICAmOmhvdmVyLFxcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgICAgIHVsIHtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIFxcbiAgICAgICAgICAgIGxpIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuXFxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI1ODdjYjYxYTU3NTU0MDU2OWM4ZFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZMaW5rIiwiTmF2IiwiYWNjIiwic2V0QWNjIiwiQmFsYW5jZSIsInNldEJhbGFuY2UiLCJpc1NpZ25lZCIsInNldFNpZ25lZCIsImZldGNoSW5mbyIsIndpbmRvdyIsImV0aGVyZXVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsInNlbGVjdGVkQWRkcmVzcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJXZWIzIiwicmVxdWlyZSIsIkNvbnRyYWN0S2l0Iiwid2ViMyIsImtpdCIsIm5ld0tpdEZyb21XZWIzIiwiY29udHJhY3RzIiwiZ2V0U3RhYmxlVG9rZW4iLCJjRVVSdG9rZW4iLCJiYWxhbmNlT2YiLCJjRVVSQmFsYW5jZSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiZXJyb3IiLCJzZXRJbnRlcnZhbCIsIk5hdkJ1dHRvbnMiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJvbkNsaWNrQ29ubmVjdENlbG8iLCJyZXF1ZXN0IiwibWV0aG9kIiwicmVzdWx0IiwicGFyYW1zIiwiY2hhaW5JZCIsImdldGFjYyIsImNvZGUiLCJjaGFpbk5hbWUiLCJuYXRpdmVDdXJyZW5jeSIsIm5hbWUiLCJzeW1ib2wiLCJkZWNpbWFscyIsInJwY1VybHMiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsIm9uQ2xpY2tEaXNDb25uZWN0Q2VsbyIsImxvY2F0aW9uIiwiaHJlZiIsIm9wZW4iLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiY29sb3IiLCJwYWRkaW5nIiwiZmlsbCJdLCJzb3VyY2VSb290IjoiIn0=