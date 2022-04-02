"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/pages/Home/mobile.tsx":
/*!***********************************!*\
  !*** ./src/pages/Home/mobile.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");




function Home() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();

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
              _context.prev = 0;
              statusp = document.getElementById("CNTbutton");
              statusp.innerHTML = "Connecting...";
              _context.next = 5;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 5:
              result = _context.sent;
              result;
              _context.prev = 7;
              _context.next = 10;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0xaef3'
                }] //44787

              });

            case 10:
              getacc = _context.sent;
              getacc;
              _context.next = 25;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](7);

              if (!(_context.t0.code === 4902)) {
                _context.next = 25;
                break;
              }

              _context.prev = 17;
              _context.next = 20;
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

            case 20:
              _context.next = 25;
              break;

            case 22:
              _context.prev = 22;
              _context.t1 = _context["catch"](17);
              // handle "add" error
              console.log(_context.t1);

            case 25:
              statusp.innerHTML = "Connected Successfully!";
              _context.next = 31;
              break;

            case 28:
              _context.prev = 28;
              _context.t2 = _context["catch"](0);
              return _context.abrupt("return");

            case 31:
              history.push("/welcome");

            case 32:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 28], [7, 14], [17, 22]]);
    }));
    return _Connect.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "wrapper",
    style: {
      justifyContent: "center",
      background: "#0e1f2a"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "row",
    style: {
      background: "#0e1f2a",
      width: "100%",
      display: "flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {
    src: "https://i.postimg.cc/Lsxrbz02/Logo-2.png",
    style: {
      width: "74vw"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "row",
    style: {
      background: "#0e1f2a",
      width: "100%",
      display: "flex",
      margin: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "col",
    style: {
      width: "88vw"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    onClick: Connect,
    style: {
      height: "15vw"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    onClick: Connect,
    className: "card card-body yellowbutton",
    style: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    id: "CNTbutton",
    onClick: Connect,
    className: "card-body",
    style: {
      fontSize: 23
    }
  }, "CONNECT TO CELO WALLET")))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e489795dc5a8f6b838ed"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmQ5Zjk2NDFiOGIwOTY2YzllMDM0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsU0FBU0UsSUFBVCxHQUFnQjtBQUMzQixNQUFJQyxPQUFPLEdBQUdGLDREQUFVLEVBQXhCOztBQUQyQixXQUdaRyxPQUhZO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdNQUczQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVZQyxjQUFBQSxPQUZaLEdBRXVCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FGdkI7QUFHUUYsY0FBQUEsT0FBTyxDQUFDRyxTQUFSLEdBQW9CLGVBQXBCO0FBSFI7QUFBQSxxQkFJMkJDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFBRUMsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQXhCLENBSjNCOztBQUFBO0FBSVlDLGNBQUFBLE1BSlo7QUFLUUEsY0FBQUEsTUFBTTtBQUxkO0FBQUE7QUFBQSxxQkFPaUNKLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFDekNDLGdCQUFBQSxNQUFNLEVBQUUsNEJBRGlDO0FBRXpDRSxnQkFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUFELENBRmlDLENBRVA7O0FBRk8sZUFBeEIsQ0FQakM7O0FBQUE7QUFPa0JDLGNBQUFBLE1BUGxCO0FBV1lBLGNBQUFBLE1BQU07QUFYbEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBY2dCLFlBQVlDLElBQVosS0FBcUIsSUFkckM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQWdCMEJSLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFDMUJDLGdCQUFBQSxNQUFNLEVBQUUseUJBRGtCO0FBRTFCRSxnQkFBQUEsTUFBTSxFQUFFLENBQ0o7QUFDSUMsa0JBQUFBLE9BQU8sRUFBRSxRQURiO0FBQ3VCO0FBQ25CRyxrQkFBQUEsU0FBUyxFQUFFLHdCQUZmO0FBR0lDLGtCQUFBQSxjQUFjLEVBQUU7QUFDWkMsb0JBQUFBLElBQUksRUFBRSxNQURNO0FBRVpDLG9CQUFBQSxNQUFNLEVBQUUsTUFGSTtBQUdaQyxvQkFBQUEsUUFBUSxFQUFFO0FBSEUsbUJBSHBCO0FBUUlDLGtCQUFBQSxPQUFPLEVBQUUsQ0FBQywwQ0FBRDtBQVJiLGlCQURJO0FBRmtCLGVBQXhCLENBaEIxQjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZ0NvQjtBQUNBQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBakNwQjtBQXNDUXBCLGNBQUFBLE9BQU8sQ0FBQ0csU0FBUixHQUFvQix5QkFBcEI7QUF0Q1I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQTJDSUwsY0FBQUEsT0FBTyxDQUFDdUIsSUFBUixDQUFhLFVBQWI7O0FBM0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSDJCO0FBQUE7QUFBQTs7QUFpRDNCLHNCQUFRLGlIQUNKO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsU0FBSyxFQUFFO0FBQUVDLE1BQUFBLGNBQWMsRUFBRSxRQUFsQjtBQUE0QkMsTUFBQUEsVUFBVSxFQUFFO0FBQXhDO0FBQWhDLGtCQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUVBLE1BQUFBLFVBQVUsRUFBRSxTQUFkO0FBQXlCQyxNQUFBQSxLQUFLLEVBQUUsTUFBaEM7QUFBd0NDLE1BQUFBLE9BQU8sRUFBRTtBQUFqRDtBQUE1QixrQkFDSTtBQUFLLE9BQUcsRUFBQywwQ0FBVDtBQUFvRCxTQUFLLEVBQUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBM0QsSUFESixDQURKLGVBSUk7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixTQUFLLEVBQUU7QUFBRUQsTUFBQUEsVUFBVSxFQUFFLFNBQWQ7QUFBeUJDLE1BQUFBLEtBQUssRUFBRSxNQUFoQztBQUF3Q0MsTUFBQUEsT0FBTyxFQUFFLE1BQWpEO0FBQXlEQyxNQUFBQSxNQUFNLEVBQUU7QUFBakU7QUFBNUIsa0JBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixTQUFLLEVBQUU7QUFBRUYsTUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBNUIsa0JBQ0k7QUFBSyxXQUFPLEVBQUV6QixPQUFkO0FBQXVCLFNBQUssRUFBRTtBQUFFNEIsTUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFBOUIsa0JBQ0k7QUFBSyxXQUFPLEVBQUU1QixPQUFkO0FBQXVCLGFBQVMsRUFBQyw2QkFBakM7QUFBK0QsU0FBSyxFQUFFO0FBQXRFLGtCQUNJO0FBQUssTUFBRSxFQUFDLFdBQVI7QUFBb0IsV0FBTyxFQUFFQSxPQUE3QjtBQUFzQyxhQUFTLEVBQUMsV0FBaEQ7QUFBNEQsU0FBSyxFQUFFO0FBQUU2QixNQUFBQSxRQUFRLEVBQUU7QUFBWjtBQUFuRSw4QkFESixDQURKLENBREosQ0FESixDQUpKLENBREksQ0FBUjtBQW9CSDs7Ozs7Ozs7VUN6RUQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvSG9tZS9tb2JpbGUudHN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBDb25uZWN0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNwID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ05UYnV0dG9uXCIpKVxyXG4gICAgICAgICAgICBzdGF0dXNwLmlubmVySFRNTCA9IFwiQ29ubmVjdGluZy4uLlwiXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgICAgICByZXN1bHQ7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRhY2MgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogW3sgY2hhaW5JZDogJzB4YWVmMycsIH1dLCAvLzQ0Nzg3XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGdldGFjYztcclxuICAgICAgICAgICAgfSBjYXRjaCAoc3dpdGNoRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxyXG4gICAgICAgICAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICcweGFlZjMnLCAvLzQ0Nzg3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluTmFtZTogJ0FsZmFqb3JlcyBDZWxvIFRlc3RuZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0NVU0QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnQ1VTRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY1VybHM6IFsnaHR0cHM6Ly9hbGZham9yZXMtZm9ybm8uY2Vsby10ZXN0bmV0Lm9yZyddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChhZGRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgXCJhZGRcIiBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIG90aGVyIFwic3dpdGNoXCIgZXJyb3JzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdHVzcC5pbm5lckhUTUwgPSBcIkNvbm5lY3RlZCBTdWNjZXNzZnVsbHkhXCJcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoaXN0b3J5LnB1c2goXCIvd2VsY29tZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgYmFja2dyb3VuZDogXCIjMGUxZjJhXCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjMGUxZjJhXCIsIHdpZHRoOiBcIjEwMCVcIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5wb3N0aW1nLmNjL0xzeHJiejAyL0xvZ28tMi5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCI3NHZ3XCIgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjMGUxZjJhXCIsIHdpZHRoOiBcIjEwMCVcIiwgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6IFwiODh2d1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17Q29ubmVjdH0gc3R5bGU9e3sgaGVpZ2h0OiBcIjE1dndcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtDb25uZWN0fSBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSB5ZWxsb3didXR0b25cIiBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nQ05UYnV0dG9uJyBvbkNsaWNrPXtDb25uZWN0fSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBmb250U2l6ZTogMjMgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ09OTkVDVCBUTyBDRUxPIFdBTExFVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcblxyXG4gICAgKTtcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJlNDg5Nzk1ZGM1YThmNmI4MzhlZFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlSGlzdG9yeSIsIkhvbWUiLCJoaXN0b3J5IiwiQ29ubmVjdCIsInN0YXR1c3AiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicmVzdWx0IiwicGFyYW1zIiwiY2hhaW5JZCIsImdldGFjYyIsImNvZGUiLCJjaGFpbk5hbWUiLCJuYXRpdmVDdXJyZW5jeSIsIm5hbWUiLCJzeW1ib2wiLCJkZWNpbWFscyIsInJwY1VybHMiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsIndpZHRoIiwiZGlzcGxheSIsIm1hcmdpbiIsImhlaWdodCIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==