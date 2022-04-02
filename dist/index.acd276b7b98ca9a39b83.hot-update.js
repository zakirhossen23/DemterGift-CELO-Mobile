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



function Home() {
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
              statusp = document.getElementById("CNTbutton");
              statusp.innerHTML = "CO";
              _context.next = 4;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 4:
              result = _context.sent;
              result;
              _context.prev = 6;
              _context.next = 9;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0xaef3'
                }] //44787

              });

            case 9:
              getacc = _context.sent;
              getacc;
              _context.next = 24;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](6);

              if (!(_context.t0.code === 4902)) {
                _context.next = 24;
                break;
              }

              _context.prev = 16;
              _context.next = 19;
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

            case 19:
              _context.next = 24;
              break;

            case 21:
              _context.prev = 21;
              _context.t1 = _context["catch"](16);
              // handle "add" error
              console.log(_context.t1);

            case 24:
              statusp.innerHTML = "Connected Successfully!";

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 13], [16, 21]]);
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
/******/ 	__webpack_require__.h = function() { return "e834e74f2f7bd960ca15"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmFjZDI3NmI3Yjk4Y2E5YTM5YjgzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR2UsU0FBU0MsSUFBVCxHQUFnQjtBQUFBLFdBRVpDLE9BRlk7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BRTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxjQUFBQSxPQURSLEdBQ21CQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FEbkI7QUFFSUYsY0FBQUEsT0FBTyxDQUFDRyxTQUFSLEdBQWtCLElBQWxCO0FBRko7QUFBQSxxQkFHdUJDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFBRUMsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQXhCLENBSHZCOztBQUFBO0FBR1FDLGNBQUFBLE1BSFI7QUFJSUEsY0FBQUEsTUFBTTtBQUpWO0FBQUE7QUFBQSxxQkFNNkJKLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFDekNDLGdCQUFBQSxNQUFNLEVBQUUsNEJBRGlDO0FBRXpDRSxnQkFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUFELENBRmlDLENBRVA7O0FBRk8sZUFBeEIsQ0FON0I7O0FBQUE7QUFNY0MsY0FBQUEsTUFOZDtBQVVRQSxjQUFBQSxNQUFNO0FBVmQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBYVksWUFBWUMsSUFBWixLQUFxQixJQWJqQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBZXNCUixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCO0FBQzFCQyxnQkFBQUEsTUFBTSxFQUFFLHlCQURrQjtBQUUxQkUsZ0JBQUFBLE1BQU0sRUFBRSxDQUNKO0FBQ0lDLGtCQUFBQSxPQUFPLEVBQUUsUUFEYjtBQUN1QjtBQUNuQkcsa0JBQUFBLFNBQVMsRUFBRSx3QkFGZjtBQUdJQyxrQkFBQUEsY0FBYyxFQUFFO0FBQ1pDLG9CQUFBQSxJQUFJLEVBQUUsTUFETTtBQUVaQyxvQkFBQUEsTUFBTSxFQUFFLE1BRkk7QUFHWkMsb0JBQUFBLFFBQVEsRUFBRTtBQUhFLG1CQUhwQjtBQVFJQyxrQkFBQUEsT0FBTyxFQUFFLENBQUMsMENBQUQ7QUFSYixpQkFESTtBQUZrQixlQUF4QixDQWZ0Qjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBK0JnQjtBQUNBQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBaENoQjtBQXFDSXBCLGNBQUFBLE9BQU8sQ0FBQ0csU0FBUixHQUFvQix5QkFBcEI7O0FBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRjJCO0FBQUE7QUFBQTs7QUEwQzNCLHNCQUFRLGlIQUNKO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsU0FBSyxFQUFFO0FBQUVrQixNQUFBQSxjQUFjLEVBQUUsUUFBbEI7QUFBNEJDLE1BQUFBLFVBQVUsRUFBRTtBQUF4QztBQUFoQyxrQkFDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLFNBQUssRUFBRTtBQUFFQSxNQUFBQSxVQUFVLEVBQUUsU0FBZDtBQUF5QkMsTUFBQUEsS0FBSyxFQUFFLE1BQWhDO0FBQXdDQyxNQUFBQSxPQUFPLEVBQUU7QUFBakQ7QUFBNUIsa0JBQ0k7QUFBSyxPQUFHLEVBQUMsMENBQVQ7QUFBb0QsU0FBSyxFQUFFO0FBQUVELE1BQUFBLEtBQUssRUFBRTtBQUFUO0FBQTNELElBREosQ0FESixlQUlJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUVELE1BQUFBLFVBQVUsRUFBRSxTQUFkO0FBQXlCQyxNQUFBQSxLQUFLLEVBQUUsTUFBaEM7QUFBd0NDLE1BQUFBLE9BQU8sRUFBRSxNQUFqRDtBQUF5REMsTUFBQUEsTUFBTSxFQUFFO0FBQWpFO0FBQTVCLGtCQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUVGLE1BQUFBLEtBQUssRUFBRTtBQUFUO0FBQTVCLGtCQUNRO0FBQUssV0FBTyxFQUFFeEIsT0FBZDtBQUF3QixTQUFLLEVBQUU7QUFBRTJCLE1BQUFBLE1BQU0sRUFBRTtBQUFWO0FBQS9CLGtCQUNJO0FBQUssV0FBTyxFQUFFM0IsT0FBZDtBQUF3QixhQUFTLEVBQUMsNkJBQWxDO0FBQWdFLFNBQUssRUFBRTtBQUF2RSxrQkFDSTtBQUFLLE1BQUUsRUFBQyxXQUFSO0FBQW9CLFdBQU8sRUFBRUEsT0FBN0I7QUFBdUMsYUFBUyxFQUFDLFdBQWpEO0FBQTZELFNBQUssRUFBRTtBQUFFNEIsTUFBQUEsUUFBUSxFQUFFO0FBQVo7QUFBcEUsOEJBREosQ0FESixDQURSLENBREosQ0FKSixDQURJLENBQVI7QUFvQkg7Ozs7Ozs7O1VDakVELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL0hvbWUvbW9iaWxlLnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBDb25uZWN0KCkge1xyXG4gICAgICAgIHZhciBzdGF0dXNwID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ05UYnV0dG9uXCIpKVxyXG4gICAgICAgIHN0YXR1c3AuaW5uZXJIVE1MPVwiQ09cIlxyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgIHJlc3VsdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBnZXRhY2MgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFt7IGNoYWluSWQ6ICcweGFlZjMnLCB9XSwgLy80NDc4N1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZ2V0YWNjO1xyXG4gICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxyXG4gICAgICAgICAgICBpZiAoc3dpdGNoRXJyb3IuY29kZSA9PT0gNDkwMikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9hZGRFdGhlcmV1bUNoYWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogJzB4YWVmMycsIC8vNDQ3ODdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbk5hbWU6ICdBbGZham9yZXMgQ2VsbyBUZXN0bmV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ1VTRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ0NVU0QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNVcmxzOiBbJ2h0dHBzOi8vYWxmYWpvcmVzLWZvcm5vLmNlbG8tdGVzdG5ldC5vcmcnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChhZGRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBcImFkZFwiIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBvdGhlciBcInN3aXRjaFwiIGVycm9yc1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0dXNwLmlubmVySFRNTCA9IFwiQ29ubmVjdGVkIFN1Y2Nlc3NmdWxseSFcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCIgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGJhY2tncm91bmQ6IFwiIzBlMWYyYVwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzBlMWYyYVwiLCB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kucG9zdGltZy5jYy9Mc3hyYnowMi9Mb2dvLTIucG5nXCIgc3R5bGU9e3sgd2lkdGg6IFwiNzR2d1wiIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzBlMWYyYVwiLCB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHdpZHRoOiBcIjg4dndcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtDb25uZWN0fSAgc3R5bGU9e3sgaGVpZ2h0OiBcIjE1dndcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17Q29ubmVjdH0gIGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IHllbGxvd2J1dHRvblwiIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nQ05UYnV0dG9uJyBvbkNsaWNrPXtDb25uZWN0fSAgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgZm9udFNpemU6IDIzIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT05ORUNUIFRPIENFTE8gV0FMTEVUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImU4MzRlNzRmMmY3YmQ5NjBjYTE1XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJIb21lIiwiQ29ubmVjdCIsInN0YXR1c3AiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicmVzdWx0IiwicGFyYW1zIiwiY2hhaW5JZCIsImdldGFjYyIsImNvZGUiLCJjaGFpbk5hbWUiLCJuYXRpdmVDdXJyZW5jeSIsIm5hbWUiLCJzeW1ib2wiLCJkZWNpbWFscyIsInJwY1VybHMiLCJjb25zb2xlIiwibG9nIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJkaXNwbGF5IiwibWFyZ2luIiwiaGVpZ2h0IiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9