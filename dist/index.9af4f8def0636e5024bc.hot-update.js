"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/pages/CreateEvents/index.jsx":
/*!******************************************!*\
  !*** ./src/pages/CreateEvents/index.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateEvents; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/url */ "./node_modules/@babel/runtime-corejs3/core-js-stable/url.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/layout/Header */ "./src/components/layout/Header/index.tsx");
/* harmony import */ var _createevents_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createevents.css */ "./src/pages/CreateEvents/createevents.css");
















function CreateEvents() {
  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_9__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var _UseFormInput = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_8__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Title',
    id: ''
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      EventTitle = _UseFormInput2[0],
      EventTitleInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_8__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Description',
    id: ''
  }),
      _UseFormInput4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput3, 2),
      EventDescription = _UseFormInput4[0],
      EventDescriptionInput = _UseFormInput4[1];

  var _UseFormInput5 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_8__["default"])({
    defaultValue: "",
    type: 'datetime-local',
    placeholder: 'Event End Date ',
    id: 'enddate'
  }),
      _UseFormInput6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput5, 2),
      EventDate = _UseFormInput6[0],
      EventDateInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_8__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Goal in CELO Euro (CEUR)',
    id: 'goal'
  }),
      _UseFormInput8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput7, 2),
      EventGoal = _UseFormInput8[0],
      EventGoalInput = _UseFormInput8[1];

  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function CreatePlugin(_x) {
    return _CreatePlugin.apply(this, arguments);
  }

  function _CreatePlugin() {
    _CreatePlugin = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(src) {
      var output, blob, fileDownloadUrl;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              output = "<html><head></head><body><iframe src=\"".concat(src, "\" style=\"width: 100%;height: 100%;\" /></body></html>"); // Download it

              blob = new Blob([output]);
              fileDownloadUrl = _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_3___default().createObjectURL(blob);
              downloadURI(fileDownloadUrl, "Generated Plugin.html");
              console.log(output);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _CreatePlugin.apply(this, arguments);
  }

  function createEvent() {
    return _createEvent.apply(this, arguments);
  }

  function _createEvent() {
    _createEvent = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var createdObject, result, eventid, _context2;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              createdObject = {
                title: 'Asset Metadata',
                type: 'object',
                properties: {
                  Title: {
                    type: 'string',
                    description: EventTitle
                  },
                  Description: {
                    type: 'string',
                    description: EventDescription
                  },
                  Date: {
                    type: 'string',
                    description: EventDate
                  },
                  Goal: {
                    type: 'string',
                    description: EventGoal
                  },
                  logo: {
                    type: 'string',
                    description: EventLogo
                  },
                  wallet: {
                    type: 'string',
                    description: window.ethereum.selectedAddress
                  },
                  typeimg: {
                    type: 'string',
                    description: "Event"
                  }
                }
              };
              _context3.prev = 1;
              _context3.next = 4;
              return contract.createEvent(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(createdObject));

            case 4:
              result = _context3.sent;
              console.log(result);
              _context3.next = 8;
              return contract.totalEvent();

            case 8:
              eventid = _context3.sent;

              if (!document.getElementById("plugin").checked) {
                _context3.next = 12;
                break;
              }

              _context3.next = 12;
              return CreatePlugin(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = "https://".concat(window.location.host, "/donation/auction?[")).call(_context2, eventid, "]"));

            case 12:
              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](1);
              window.location.href = '/login';

            case 17:
              window.location.href = '/donation';

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2, null, [[1, 14]]);
    }));
    return _createEvent.apply(this, arguments);
  }

  var _UseFormInput9 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_8__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Logo Link',
    id: 'logo'
  }),
      _UseFormInput10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput9, 2),
      EventLogo = _UseFormInput10[0],
      EventLogoInput = _UseFormInput10[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(next_head__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("title", null, "Create Event"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("meta", {
    name: "description",
    content: "Create Event"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_components_layout_Header__WEBPACK_IMPORTED_MODULE_11__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    className: "createevents col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      background: "transparent",
      padding: "19px",
      borderRadius: "4px",
      height: "100%",
      border: "white solid"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "0px 0px 30px 0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h1", null, "Create Event")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h6", null, "Event Title"), EventTitleInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h6", null, "Event End Date"), EventDateInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h6", null, "Event Goal"), EventGoalInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h6", null, "Event Logo Link"), EventLogoInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: '18px 0px',
      display: 'flex',
      alignContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("input", {
    type: "checkbox",
    id: "plugin"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", null, "Generate Plugin?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      margin: "17px 0 0px 0px",
      width: "100%"
    },
    onClick: createEvent
  }, "Create Event"))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c4abc74569daf2945d45"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjlhZjRmOGRlZjA2MzZlNTAyNGJjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNXLFlBQVQsR0FBd0I7QUFHbkMscUJBQW9DSCxpRUFBVyxDQUFDLFFBQUQsQ0FBL0M7QUFBQSxNQUFRSSxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGFBQWxCLGdCQUFrQkEsYUFBbEI7O0FBRUEsc0JBQXNDTiwrRUFBWSxDQUFDO0FBQy9DTyxJQUFBQSxZQUFZLEVBQUUsRUFEaUM7QUFFL0NDLElBQUFBLElBQUksRUFBRSxNQUZ5QztBQUcvQ0MsSUFBQUEsV0FBVyxFQUFFLGFBSGtDO0FBSS9DQyxJQUFBQSxFQUFFLEVBQUU7QUFKMkMsR0FBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxlQUFuQjs7QUFNQSx1QkFBa0RaLCtFQUFZLENBQUM7QUFDM0RPLElBQUFBLFlBQVksRUFBRSxFQUQ2QztBQUUzREMsSUFBQUEsSUFBSSxFQUFFLE1BRnFEO0FBRzNEQyxJQUFBQSxXQUFXLEVBQUUsbUJBSDhDO0FBSTNEQyxJQUFBQSxFQUFFLEVBQUU7QUFKdUQsR0FBRCxDQUE5RDtBQUFBO0FBQUEsTUFBT0csZ0JBQVA7QUFBQSxNQUF5QkMscUJBQXpCOztBQU1BLHVCQUFvQ2QsK0VBQVksQ0FBQztBQUM3Q08sSUFBQUEsWUFBWSxFQUFFLEVBRCtCO0FBRTdDQyxJQUFBQSxJQUFJLEVBQUUsZ0JBRnVDO0FBRzdDQyxJQUFBQSxXQUFXLEVBQUUsaUJBSGdDO0FBSTdDQyxJQUFBQSxFQUFFLEVBQUU7QUFKeUMsR0FBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT0ssU0FBUDtBQUFBLE1BQWtCQyxjQUFsQjs7QUFNQSx1QkFBb0NoQiwrRUFBWSxDQUFDO0FBQzdDTyxJQUFBQSxZ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bkMsS0FBZjtBQUNJLFdBQU8sRUFBRW5DO0FBRGIsb0JBbkNKLENBREosQ0FESixDQVBGLENBQUYsQ0FESjtBQXlESDs7Ozs7Ozs7VUNyTEQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvQ3JlYXRlRXZlbnRzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvVXNlRm9ybUlucHV0JztcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9IZWFkZXInXG5cbmltcG9ydCAnLi9jcmVhdGVldmVudHMuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVFdmVudHMoKSB7XG5cblxuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcblxuICAgIGNvbnN0IFtFdmVudFRpdGxlLCBFdmVudFRpdGxlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgVGl0bGUnLFxuICAgICAgICBpZDogJydcbiAgICB9KTtcbiAgICBjb25zdCBbRXZlbnREZXNjcmlwdGlvbiwgRXZlbnREZXNjcmlwdGlvbklucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IERlc2NyaXB0aW9uJyxcbiAgICAgICAgaWQ6ICcnXG4gICAgfSk7XG4gICAgY29uc3QgW0V2ZW50RGF0ZSwgRXZlbnREYXRlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAnZGF0ZXRpbWUtbG9jYWwnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IEVuZCBEYXRlICcsXG4gICAgICAgIGlkOiAnZW5kZGF0ZScsXG4gICAgfSk7XG4gICAgY29uc3QgW0V2ZW50R29hbCwgRXZlbnRHb2FsSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgR29hbCBpbiBDRUxPIEV1cm8gKENFVVIpJyxcbiAgICAgICAgaWQ6ICdnb2FsJyxcbiAgICB9KTtcblxuXG4gICAgZnVuY3Rpb24gZG93bmxvYWRVUkkodXJpLCBuYW1lKSB7XG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGxpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgICAgICBsaW5rLmhyZWYgPSB1cmk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcblxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBDcmVhdGVQbHVnaW4oc3JjKSB7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IGA8aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGlmcmFtZSBzcmM9XCIke3NyY31cIiBzdHlsZT1cIndpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtcIiAvPjwvYm9keT48L2h0bWw+YDtcbiAgICAgICAgLy8gRG93bmxvYWQgaXRcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtvdXRwdXRdKTtcbiAgICAgICAgY29uc3QgZmlsZURvd25sb2FkVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgZG93bmxvYWRVUkkoZmlsZURvd25sb2FkVXJsLCBcIkdlbmVyYXRlZCBQbHVnaW4uaHRtbFwiKTtcbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KCkge1xuXG5cbiAgICAgICAgY29uc3QgY3JlYXRlZE9iamVjdCA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQXNzZXQgTWV0YWRhdGEnLFxuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgVGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBFdmVudFRpdGxlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBFdmVudERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgRGF0ZToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IEV2ZW50RGF0ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIEdvYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBFdmVudEdvYWxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxvZ286IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBFdmVudExvZ29cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdhbGxldDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3NcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGVpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkV2ZW50XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVFdmVudChcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIGxldCBldmVudGlkID0gYXdhaXQgY29udHJhY3QudG90YWxFdmVudCgpO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1Z2luXCIpLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBDcmVhdGVQbHVnaW4oYGh0dHBzOi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vZG9uYXRpb24vYXVjdGlvbj9bJHtldmVudGlkfV1gKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoJy9sb2dpbicpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKCcvZG9uYXRpb24nKTtcbiAgICB9XG4gICAgY29uc3QgW0V2ZW50TG9nbywgRXZlbnRMb2dvSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgTG9nbyBMaW5rJyxcbiAgICAgICAgaWQ6ICdsb2dvJ1xuICAgIH0pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Pjw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3JlYXRlIEV2ZW50PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ3JlYXRlIEV2ZW50XCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY3JlYXRlZXZlbnRzIGNvbCcgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiwgcGFkZGluZzogXCIxOXB4XCIsIGJvcmRlclJhZGl1czogXCI0cHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYm9yZGVyOiBcIndoaXRlIHNvbGlkXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDMwcHggMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkNyZWF0ZSBFdmVudDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkV2ZW50IFRpdGxlPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRUaXRsZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5FdmVudCBFbmQgRGF0ZTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50RGF0ZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+RXZlbnQgR29hbDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50R29hbElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+RXZlbnQgTG9nbyBMaW5rPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRMb2dvSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzE4cHggMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6ICc1cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwicGx1Z2luXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+R2VuZXJhdGUgUGx1Z2luPzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y3JlYXRlRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICA8Lz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJjNGFiYzc0NTY5ZGFmMjk0NWQ0NVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiUm93IiwiQ29sIiwiQnV0dG9uIiwiVXNlRm9ybUlucHV0IiwidXNlQ29udHJhY3QiLCJSb3V0ZXIiLCJIZWFkZXIiLCJDcmVhdGVFdmVudHMiLCJjb250cmFjdCIsInNpZ25lckFkZHJlc3MiLCJkZWZhdWx0VmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsIkV2ZW50VGl0bGUiLCJFdmVudFRpdGxlSW5wdXQiLCJFdmVudERlc2NyaXB0aW9uIiwiRXZlbnREZXNjcmlwdGlvbklucHV0IiwiRXZlbnREYXRlIiwiRXZlbnREYXRlSW5wdXQiLCJFdmVudEdvYWwiLCJFdmVudEdvYWxJbnB1dCIsImRvd25sb2FkVVJJIiwidXJpIiwibmFtZSIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkb3dubG9hZCIsImhyZWYiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiQ3JlYXRlUGx1Z2luIiwic3JjIiwib3V0cHV0IiwiYmxvYiIsIkJsb2IiLCJmaWxlRG93bmxvYWRVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRXZlbnQiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwiVGl0bGUiLCJkZXNjcmlwdGlvbiIsIkRlc2NyaXB0aW9uIiwiRGF0ZSIsIkdvYWwiLCJsb2dvIiwiRXZlbnRMb2dvIiwid2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJzZWxlY3RlZEFkZHJlc3MiLCJ0eXBlaW1nIiwicmVzdWx0IiwidG90YWxFdmVudCIsImV2ZW50aWQiLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrZWQiLCJsb2NhdGlvbiIsImhvc3QiLCJFdmVudExvZ29JbnB1dCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsImFsaWduQ29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiZ2FwIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9