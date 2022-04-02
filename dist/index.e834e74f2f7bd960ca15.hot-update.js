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
              statusp.innerHTML = "Connecting...";
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
/******/ 	__webpack_require__.h = function() { return "d34f5e933ab9a718ec88"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmU4MzRlNzRmMmY3YmQ5NjBjYTE1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR2UsU0FBU0MsSUFBVCxHQUFnQjtBQUFBLFdBRVpDLE9BRlk7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BRTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxjQUFBQSxPQURSLEdBQ21CQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FEbkI7QUFFSUYsY0FBQUEsT0FBTyxDQUFDRyxTQUFSLEdBQWtCLGVBQWxCO0FBRko7QUFBQSxxQkFHdUJDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFBRUMsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQXhCLENBSHZCOztBQUFBO0FBR1FDLGNBQUFBLE1BSFI7QUFJSUEsY0FBQUEsTUFBTTtBQUpWO0FBQUE7QUFBQSxxQkFNNkJKLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFDekNDLGdCQUFBQSxNQUFNLEVBQUUsNEJBRGlDO0FBRXpDRSxnQkFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUFELENBRmlDLENBRVA7O0FBRk8sZUFBeEIsQ0FON0I7O0FBQUE7QUFNY0MsY0FBQUEsTUFOZDtBQVVRQSxjQUFBQSxNQUFNO0FBVmQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBYVksWUFBWUMsSUFBWixLQUFxQixJQWJqQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBZXNCUixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCO0FBQzFCQyxnQkFBQUEsTUFBTSxFQUFFLHlCQURrQjtBQUUxQkUsZ0JBQUFBLE1BQU0sRUFBRSxDQUNKO0FBQ0lDLGtCQUFBQSxPQUFPLEVBQUUsUUFEYjtBQUN1QjtBQUNuQkcsa0JBQUFBLFNBQVMsRUFBRSx3QkFGZjtBQUdJQyxrQkFBQUEsY0FBYyxFQUFFO0FBQ1pDLG9CQUFBQSxJQUFJLEVBQUUsTUFETTtBQUVaQyxvQkFBQUEsTUFBTSxFQUFFLE1BRkk7QUFHWkMsb0JBQUFBLFFBQVEsRUFBRTtBQUhFLG1CQUhwQjtBQVFJQyxrQkFBQUEsT0FBTyxFQUFFLENBQUMsMENBQUQ7QUFSYixpQkFESTtBQUZrQixlQUF4QixDQWZ0Qjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBK0JnQjtBQUNBQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBaENoQjtBQXFDSXBCLGNBQUFBLE9BQU8sQ0FBQ0csU0FBUixHQUFvQix5QkFBcEI7O0FBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRjJCO0FBQUE7QUFBQTs7QUEwQzNCLHNCQUFRLGlIQUNKO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsU0FBSyxFQUFFO0FBQUVrQixNQUFBQSxjQUFjLEVBQUUsUUFBbEI7QUFBNEJDLE1BQUFBLFVBQVUsRUFBRTtBQUF4QztBQUFoQyxrQkFDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLFNBQUssRUFBRTtBQUFFQSxNQUFBQSxVQUFVLEVBQUUsU0FBZDtBQUF5QkMsTUFBQUEsS0FBSyxFQUFFLE1BQWhDO0FBQXdDQyxNQUFBQSxPQUFPLEVBQUU7QUFBakQ7QUFBNUIsa0JBQ0k7QUFBSyxPQUFHLEVBQUMsMENBQVQ7QUFBb0QsU0FBSyxFQUFFO0FBQUVELE1BQUFBLEtBQUssRUFBRTtBQUFUO0FBQTNELElBREosQ0FESixlQUlJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUVELE1BQUFBLFVBQVUsRUFBRSxTQUFkO0FBQXlCQyxNQUFBQSxLQUFLLEVBQUUsTUFBaEM7QUFBd0NDLE1BQUFBLE9BQU8sRUFBRSxNQUFqRDtBQUF5REMsTUFBQUEsTUFBTSxFQUFFO0FBQWpFO0FBQTVCLGtCQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUVGLE1BQUFBLEtBQUssRUFBRTtBQUFUO0FBQTVCLGtCQUNRO0FBQUssV0FBTyxFQUFFeEIsT0FBZDtBQUF3QixTQUFLLEVBQUU7QUFBRTJCLE1BQUFBLE1BQU0sRUFBRTtBQUFWO0FBQS9CLGtCQUNJO0FBQUssV0FBTyxFQUFFM0IsT0FBZDtBQUF3QixhQUFTLEVBQUMsNkJBQWxDO0FBQWdFLFNBQUssRUFBRTtBQUF2RSxrQkFDSTtBQUFLLE1BQUUsRUFBQyxXQUFSO0FBQW9CLFdBQU8sRUFBRUEsT0FBN0I7QUFBdUMsYUFBUyxFQUFDLFdBQWpEO0FBQTZELFNBQUssRUFBRTtBQUFFNEIsTUFBQUEsUUFBUSxFQUFFO0FBQVo7QUFBcEUsOEJBREosQ0FESixDQURSLENBREosQ0FKSixDQURJLENBQVI7QUFvQkg7Ozs7Ozs7O1VDakVELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL0hvbWUvbW9iaWxlLnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBDb25uZWN0KCkge1xyXG4gICAgICAgIHZhciBzdGF0dXNwID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ05UYnV0dG9uXCIpKVxyXG4gICAgICAgIHN0YXR1c3AuaW5uZXJIVE1MPVwiQ29ubmVjdGluZy4uLlwiXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XHJcbiAgICAgICAgcmVzdWx0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldGFjYyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogW3sgY2hhaW5JZDogJzB4YWVmMycsIH1dLCAvLzQ0Nzg3XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnZXRhY2M7XHJcbiAgICAgICAgfSBjYXRjaCAoc3dpdGNoRXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBlcnJvciBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBjaGFpbiBoYXMgbm90IGJlZW4gYWRkZWQgdG8gTWV0YU1hc2suXHJcbiAgICAgICAgICAgIGlmIChzd2l0Y2hFcnJvci5jb2RlID09PSA0OTAyKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkOiAnMHhhZWYzJywgLy80NDc4N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluTmFtZTogJ0FsZmFqb3JlcyBDZWxvIFRlc3RuZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZUN1cnJlbmN5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdDVVNEJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnQ1VTRCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzOiAxOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY1VybHM6IFsnaHR0cHM6Ly9hbGZham9yZXMtZm9ybm8uY2Vsby10ZXN0bmV0Lm9yZyddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGFkZEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIFwiYWRkXCIgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaGFuZGxlIG90aGVyIFwic3dpdGNoXCIgZXJyb3JzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXR1c3AuaW5uZXJIVE1MID0gXCJDb25uZWN0ZWQgU3VjY2Vzc2Z1bGx5IVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgYmFja2dyb3VuZDogXCIjMGUxZjJhXCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjMGUxZjJhXCIsIHdpZHRoOiBcIjEwMCVcIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5wb3N0aW1nLmNjL0xzeHJiejAyL0xvZ28tMi5wbmdcIiBzdHlsZT17eyB3aWR0aDogXCI3NHZ3XCIgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjMGUxZjJhXCIsIHdpZHRoOiBcIjEwMCVcIiwgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgd2lkdGg6IFwiODh2d1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e0Nvbm5lY3R9ICBzdHlsZT17eyBoZWlnaHQ6IFwiMTV2d1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtDb25uZWN0fSAgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgeWVsbG93YnV0dG9uXCIgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdDTlRidXR0b24nIG9uQ2xpY2s9e0Nvbm5lY3R9ICBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBmb250U2l6ZTogMjMgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENPTk5FQ1QgVE8gQ0VMTyBXQUxMRVRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZDM0ZjVlOTMzYWI5YTcxOGVjODhcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIkhvbWUiLCJDb25uZWN0Iiwic3RhdHVzcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJyZXN1bHQiLCJwYXJhbXMiLCJjaGFpbklkIiwiZ2V0YWNjIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImNvbnNvbGUiLCJsb2ciLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmQiLCJ3aWR0aCIsImRpc3BsYXkiLCJtYXJnaW4iLCJoZWlnaHQiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=