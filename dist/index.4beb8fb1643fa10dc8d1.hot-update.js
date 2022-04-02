"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/provider.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/Home */ "./src/pages/Home/index.tsx");
/* harmony import */ var _pages_welcome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/welcome */ "./src/pages/welcome/index.jsx");
/* harmony import */ var _pages_CreateEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/CreateEvents */ "./src/pages/CreateEvents/index.tsx");
/* harmony import */ var _pages_donation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/pages/donation */ "./src/pages/donation/index.jsx");
/* harmony import */ var _pages_donation_auction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/donation/auction */ "./src/pages/donation/auction/index.jsx");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.scss */ "./src/components/App.scss");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");








 //Toast



function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: "intl",
    locale: "en",
    defaultLocale: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/welcome"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_welcome__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/CreateEvents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_CreateEvents__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/donation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_donation__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    exact: true,
    path: "/donation/auction"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_donation_auction__WEBPACK_IMPORTED_MODULE_5__["default"], null)))))));
}

/***/ }),

/***/ "./src/pages/welcome/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/welcome/index.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");



function Home() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "wrapper",
    style: {
      justifyContent: "center",
      background: "#0e1f2a"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row",
    style: {
      background: "#0e1f2a",
      width: "100%",
      display: "flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "https://i.postimg.cc/Lsxrbz02/Logo-2.png",
    style: {
      width: "74vw"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row",
    style: {
      background: "#0e1f2a",
      width: "100%",
      display: "flex",
      margin: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col",
    style: {
      width: "88vw"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: "15vw"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card card-body yellowbutton",
    style: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "CNTbutton",
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
/******/ 	__webpack_require__.h = function() { return "922c50079443b60b4fce"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjRiZWI4ZmIxNjQzZmExMGRjOGQxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQTtBQUNBO0FBRU8sU0FBU1ksR0FBVCxHQUE0QjtBQUMvQixzQkFDSSxpREFBQyxrREFBRDtBQUNJLE9BQUcsRUFBQyxNQURSO0FBRUksVUFBTSxFQUFDLElBRlg7QUFHSSxpQkFBYSxFQUFDO0FBSGxCLGtCQU1JLGlEQUFDLDREQUFELHFCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksaURBQUMsMERBQUQ7QUFBZ0IsWUFBUSxFQUFDLFdBQXpCO0FBQXFDLGFBQVMsRUFBRSxJQUFoRDtBQUFzRCxtQkFBZSxFQUFFLEtBQXZFO0FBQThFLGVBQVcsRUFBRSxLQUEzRjtBQUFtRyxvQkFBZ0IsTUFBbkg7QUFBb0gsYUFBUyxNQUE3SDtBQUE4SCxnQkFBWTtBQUExSSxJQURKLGVBR0k7QUFBTSxhQUFTLEVBQUM7QUFBaEIsa0JBQ0ksaURBQUMscURBQUQscUJBQ0ksaURBQUMsb0RBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUM7QUFBbEIsa0JBQ0ksaURBQUMsbURBQUQsT0FESixDQURKLGVBSUksaURBQUMsb0RBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUM7QUFBbEIsa0JBQ0ksaURBQUMsc0RBQUQsT0FESixDQUpKLGVBT0ksaURBQUMsb0RBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUM7QUFBbEIsa0JBQ0ksaURBQUMsMkRBQUQsT0FESixDQVBKLGVBV0ksaURBQUMsb0RBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUM7QUFBbEIsa0JBQ0ksaURBQUMsdURBQUQsT0FESixDQVhKLGVBY0ksaURBQUMsb0RBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUM7QUFBbEIsa0JBQ0ksaURBQUMsK0RBQUQsT0FESixDQWRKLENBREosQ0FISixDQURKLENBTkosQ0FESjtBQXVDSDs7Ozs7Ozs7Ozs7Ozs7OztBQy9ERDtBQUNBO0FBQ0E7QUFFZSxTQUFTTixJQUFULEdBQWdCO0FBQzNCLE1BQUlXLE9BQU8sR0FBR0QsNERBQVUsRUFBeEI7QUFFQSxzQkFBUSxpSEFDSjtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQXlCLFNBQUssRUFBRTtBQUFFRSxNQUFBQSxjQUFjLEVBQUUsUUFBbEI7QUFBNEJDLE1BQUFBLFVBQVUsRUFBRTtBQUF4QztBQUFoQyxrQkFDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLFNBQUssRUFBRTtBQUFFQSxNQUFBQSxVQUFVLEVBQUUsU0FBZDtBQUF5QkMsTUFBQUEsS0FBSyxFQUFFLE1BQWhDO0FBQXdDQyxNQUFBQSxPQUFPLEVBQUU7QUFBakQ7QUFBNUIsa0JBQ0k7QUFBSyxPQUFHLEVBQUMsMENBQVQ7QUFBb0QsU0FBSyxFQUFFO0FBQUVELE1BQUFBLEtBQUssRUFBRTtBQUFUO0FBQTNELElBREosQ0FESixlQUlJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUVELE1BQUFBLFVBQVUsRUFBRSxTQUFkO0FBQXlCQyxNQUFBQSxLQUFLLEVBQUUsTUFBaEM7QUFBd0NDLE1BQUFBLE9BQU8sRUFBRSxNQUFqRDtBQUF5REMsTUFBQUEsTUFBTSxFQUFFO0FBQWpFO0FBQTVCLGtCQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFFO0FBQUVGLE1BQUFBLEtBQUssRUFBRTtBQUFUO0FBQTVCLGtCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVHLE1BQUFBLE1BQU0sRUFBRTtBQUFWO0FBQVosa0JBQ0k7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBNkMsU0FBSyxFQUFFO0FBQXBELGtCQUNJO0FBQUssTUFBRSxFQUFDLFdBQVI7QUFBbUIsYUFBUyxFQUFDLFdBQTdCO0FBQXlDLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxRQUFRLEVBQUU7QUFBWjtBQUFoRCw4QkFESixDQURKLENBREosQ0FESixDQUpKLENBREksQ0FBUjtBQW9CSDs7Ozs7Ozs7VUMzQkQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvY29tcG9uZW50cy9BcHAudHN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL3dlbGNvbWUvaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEludGxQcm92aWRlciB9IGZyb20gJ3JlYWN0LWludGwnXG5pbXBvcnQge1xuICAgIFJlZGlyZWN0LFxuICAgIFJvdXRlLFxuICAgIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxuICAgIFN3aXRjaCxcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9Gb290ZXInXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcidcbmltcG9ydCBIb21lIGZyb20gJ0AvcGFnZXMvSG9tZSdcbmltcG9ydCBXZWxjb21lIGZyb20gJ0AvcGFnZXMvd2VsY29tZSdcbmltcG9ydCBDcmVhdGVFdmVudHMgZnJvbSAnQC9wYWdlcy9DcmVhdGVFdmVudHMnXG5pbXBvcnQgRG9uYXRpb24gZnJvbSAnQC9wYWdlcy9kb25hdGlvbidcbmltcG9ydCBBdWN0aW9uIGZyb20gJ0AvcGFnZXMvZG9uYXRpb24vYXVjdGlvbidcblxuaW1wb3J0ICcuL0FwcC5zY3NzJ1xuLy9Ub2FzdFxuXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gQXBwKCk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SW50bFByb3ZpZGVyXG4gICAgICAgICAgICBrZXk9XCJpbnRsXCJcbiAgICAgICAgICAgIGxvY2FsZT1cImVuXCJcbiAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU9XCJlblwiXG4gICAgICAgICAgICBcbiAgICAgICAgPlxuICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCIgYXV0b0Nsb3NlPXs1MDAwfSBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfSBuZXdlc3RPblRvcD17ZmFsc2V9ICBwYXVzZU9uRm9jdXNMb3NzIGRyYWdnYWJsZSBwYXVzZU9uSG92ZXIvPlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG9tZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvd2VsY29tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2VsY29tZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvQ3JlYXRlRXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVFdmVudHMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2RvbmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb25hdGlvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9kb25hdGlvbi9hdWN0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1Y3Rpb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPiBcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICA8L0ludGxQcm92aWRlcj5cbiAgICApXG5cblxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kOiBcIiMwZTFmMmFcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiMwZTFmMmFcIiwgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvTHN4cmJ6MDIvTG9nby0yLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiBcIjc0dndcIiB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiMwZTFmMmFcIiwgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogXCI4OHZ3XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiMTV2d1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IHllbGxvd2J1dHRvblwiIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdDTlRidXR0b24nY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgZm9udFNpemU6IDIzIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENPTk5FQ1QgVE8gQ0VMTyBXQUxMRVRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiOTIyYzUwMDc5NDQzYjYwYjRmY2VcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIkludGxQcm92aWRlciIsIlJvdXRlIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlN3aXRjaCIsIkhvbWUiLCJXZWxjb21lIiwiQ3JlYXRlRXZlbnRzIiwiRG9uYXRpb24iLCJBdWN0aW9uIiwiVG9hc3RDb250YWluZXIiLCJBcHAiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJ1c2VIaXN0b3J5IiwiaGlzdG9yeSIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsIndpZHRoIiwiZGlzcGxheSIsIm1hcmdpbiIsImhlaWdodCIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==