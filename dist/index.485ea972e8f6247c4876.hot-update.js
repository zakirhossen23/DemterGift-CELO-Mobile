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
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
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
              return CreatePlugin(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = "http://".concat(window.location.host, "/donation/auction?[")).call(_context2, eventid, "]"));

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

  function CreateEventBTN() {
    if (window.localStorage.getItem("Type") != "manager") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(NavLink, {
        to: "/login?[/CreateEvents]"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          margin: "17px 0 0px 0px",
          width: "100%"
        }
      }, "Login as Event Manager")));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
      style: {
        margin: "17px 0 0px 0px",
        width: "100%"
      },
      onClick: createEvent
    }, "Create Event"));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(next_head__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("title", null, "Create Event"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("meta", {
    name: "description",
    content: "Create Event"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_components_layout_Header__WEBPACK_IMPORTED_MODULE_11__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    className: "row",
    style: {
      "height": "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h5", {
    style: {
      margin: '0'
    }
  }, "Generate Plugin?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(CreateEventBTN, null))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b88cbca16e48af5cab33"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjQ4NWVhOTcyZThmNjI0N2M0ODc2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU1csWUFBVCxHQUF3QjtBQUduQyxxQkFBb0NILGlFQUFXLENBQUMsUUFBRCxDQUEvQztBQUFBLE1BQVFJLFFBQVIsZ0JBQVFBLFFBQVI7QUFBQSxNQUFrQkMsYUFBbEIsZ0JBQWtCQSxhQUFsQjs7QUFFQSxzQkFBc0NOLCtFQUFZLENBQUM7QUFDL0NPLElBQUFBLFlBQVksRUFBRSxFQURpQztBQUUvQ0MsSUFBQUEsSUFBSSxFQUFFLE1BRnlDO0FBRy9DQyxJQUFBQSxXQUFXLEVBQUUsYUFIa0M7QUFJL0NDLElBQUFBLEVBQUUsRUFBRTtBQUoyQyxHQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGVBQW5COztBQU1BLHVCQUFrRFosK0VBQVksQ0FBQztBQUMzRE8sSUFBQUEsWUFBWSxFQUFFLEVBRDZDO0FBRTNEQyxJQUFBQSxJQUFJLEVBQUUsTUFGcUQ7QUFHM0RDLElBQUFBLFdBQVcsRUFBRSxtQkFIOEM7QUFJM0RDLElBQUFBLEVBQUUsRUFBRTtBQUp1RCxHQUFELENBQTlEO0FBQUE7QUFBQSxNQUFPRyxnQkFBUDtBQUFBLE1BQXlCQyxxQkFBekI7O0FBTUEsdUJBQW9DZCwrRUFBWSxDQUFDO0FBQzdDTyxJQUFBQSxZQUFZLEVBQUUsRUFEK0I7QUFFN0NDLElBQUFBLElBQUksRUFBRSxnQkFGdUM7QUFHN0NDLElBQUFBLFdBQVcsRUFBRSxpQkFIZ0M7QUFJN0NDLElBQUFBLEVBQUUsRUFBRTtBQUp5QyxHQUFELENBQWhEO0FBQUE7QUFBQSxNQUFPSyxTQUFQO0FBQUEsTUFBa0JDLGNBQWxCOztBQU1BLHVCQUFvQ2hCLCtFQUFZLENBQUM7QUFDN0NPLElBQUFBLFlB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LDBFQURKLEVBRUtqRCxjQUZMLENBZEosZUFrQkk7QUFBSyxTQUFLLEVBQUU7QUFBRWlELE1BQUFBLE1BQU0sRUFBRTtBQUFWO0FBQVosa0JBQ0ksK0VBREosRUFFS0osY0FGTCxDQWxCSixlQXVCSTtBQUFLLFNBQUssRUFBRTtBQUNSSSxNQUFBQSxNQUFNLEVBQUUsVUFEQTtBQUVSTyxNQUFBQSxPQUFPLEVBQUUsTUFGRDtBQUdSQyxNQUFBQSxZQUFZLEVBQUUsUUFITjtBQUlSQyxNQUFBQSxhQUFhLEVBQUUsS0FKUDtBQUtSQyxNQUFBQSxVQUFVLEVBQUUsUUFMSjtBQU1SQyxNQUFBQSxHQUFHLEVBQUU7QUFORztBQUFaLGtCQVFJO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsTUFBRSxFQUFDO0FBQTFCLElBUkosZUFTSTtBQUFJLFNBQUssRUFBRTtBQUFFWCxNQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUFYLHdCQVRKLENBdkJKLGVBa0NJLGlEQUFDLGNBQUQsT0FsQ0osQ0FESixDQURKLENBUEYsQ0FBRixDQURKO0FBb0RIOzs7Ozs7OztVQ25NRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9DcmVhdGVFdmVudHMvaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQnO1xuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcidcblxuaW1wb3J0ICcuL2NyZWF0ZWV2ZW50cy5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUV2ZW50cygpIHtcblxuXG4gICAgY29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuXG4gICAgY29uc3QgW0V2ZW50VGl0bGUsIEV2ZW50VGl0bGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBUaXRsZScsXG4gICAgICAgIGlkOiAnJ1xuICAgIH0pO1xuICAgIGNvbnN0IFtFdmVudERlc2NyaXB0aW9uLCBFdmVudERlc2NyaXB0aW9uSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgRGVzY3JpcHRpb24nLFxuICAgICAgICBpZDogJydcbiAgICB9KTtcbiAgICBjb25zdCBbRXZlbnREYXRlLCBFdmVudERhdGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6ICdkYXRldGltZS1sb2NhbCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgRW5kIERhdGUgJyxcbiAgICAgICAgaWQ6ICdlbmRkYXRlJyxcbiAgICB9KTtcbiAgICBjb25zdCBbRXZlbnRHb2FsLCBFdmVudEdvYWxJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBHb2FsIGluIENFTE8gRXVybyAoQ0VVUiknLFxuICAgICAgICBpZDogJ2dvYWwnLFxuICAgIH0pO1xuXG5cbiAgICBmdW5jdGlvbiBkb3dubG9hZFVSSSh1cmksIG5hbWUpIHtcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgICAgIGxpbmsuaHJlZiA9IHVyaTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIENyZWF0ZVBsdWdpbihzcmMpIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gYDxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48aWZyYW1lIHNyYz1cIiR7c3JjfVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO1wiIC8+PC9ib2R5PjwvaHRtbD5gO1xuICAgICAgICAvLyBEb3dubG9hZCBpdFxuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW291dHB1dF0pO1xuICAgICAgICBjb25zdCBmaWxlRG93bmxvYWRVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICBkb3dubG9hZFVSSShmaWxlRG93bmxvYWRVcmwsIFwiR2VuZXJhdGVkIFBsdWdpbi5odG1sXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhvdXRwdXQpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnQoKSB7XG5cblxuICAgICAgICBjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdBc3NldCBNZXRhZGF0YScsXG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBUaXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IEV2ZW50VGl0bGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IEV2ZW50RGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBEYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogRXZlbnREYXRlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgR29hbDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IEV2ZW50R29hbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbG9nbzoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IEV2ZW50TG9nb1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2FsbGV0OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogd2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHlwZWltZzoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRXZlbnRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUV2ZW50KFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgbGV0IGV2ZW50aWQgPSBhd2FpdCBjb250cmFjdC50b3RhbEV2ZW50KCk7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVnaW5cIikuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IENyZWF0ZVBsdWdpbihgaHR0cDovLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L2RvbmF0aW9uL2F1Y3Rpb24/WyR7ZXZlbnRpZH1dYCk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKCcvbG9naW4nKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgnL2RvbmF0aW9uJyk7XG4gICAgfVxuICAgIGNvbnN0IFtFdmVudExvZ28sIEV2ZW50TG9nb0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IExvZ28gTGluaycsXG4gICAgICAgIGlkOiAnbG9nbydcbiAgICB9KTtcblxuZnVuY3Rpb24gQ3JlYXRlRXZlbnRCVE4oKXtcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVHlwZVwiKSAhPSBcIm1hbmFnZXJcIikge1xuICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpbj9bL0NyZWF0ZUV2ZW50c11cIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIExvZ2luIGFzIEV2ZW50IE1hbmFnZXJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgIDwvPik7XG4gICAgfVxuICAgIHJldHVybiAoPD5cbiAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19IG9uQ2xpY2s9e2NyZWF0ZUV2ZW50fT5cbiAgICAgICAgICAgIENyZWF0ZSBFdmVudFxuICAgICAgICA8L0J1dHRvbj5cbiAgICA8Lz4pXG59XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+PD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5DcmVhdGUgRXZlbnQ8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDcmVhdGUgRXZlbnRcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IFwiaGVpZ2h0XCI6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjcmVhdGVldmVudHMgY29sJyA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLCBwYWRkaW5nOiBcIjE5cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjRweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBib3JkZXI6IFwid2hpdGUgc29saWRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjBweCAwcHggMzBweCAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Q3JlYXRlIEV2ZW50PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+RXZlbnQgVGl0bGU8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFRpdGxlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkV2ZW50IEVuZCBEYXRlPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnREYXRlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5FdmVudCBHb2FsPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRHb2FsSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5FdmVudCBMb2dvIExpbms8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudExvZ29JbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMThweCAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogJzVweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJwbHVnaW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBtYXJnaW46ICcwJyB9fT5HZW5lcmF0ZSBQbHVnaW4/PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUV2ZW50QlROLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Lz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJiODhjYmNhMTZlNDhhZjVjYWIzM1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiUm93IiwiQ29sIiwiQnV0dG9uIiwiVXNlRm9ybUlucHV0IiwidXNlQ29udHJhY3QiLCJSb3V0ZXIiLCJIZWFkZXIiLCJDcmVhdGVFdmVudHMiLCJjb250cmFjdCIsInNpZ25lckFkZHJlc3MiLCJkZWZhdWx0VmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsIkV2ZW50VGl0bGUiLCJFdmVudFRpdGxlSW5wdXQiLCJFdmVudERlc2NyaXB0aW9uIiwiRXZlbnREZXNjcmlwdGlvbklucHV0IiwiRXZlbnREYXRlIiwiRXZlbnREYXRlSW5wdXQiLCJFdmVudEdvYWwiLCJFdmVudEdvYWxJbnB1dCIsImRvd25sb2FkVVJJIiwidXJpIiwibmFtZSIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkb3dubG9hZCIsImhyZWYiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiQ3JlYXRlUGx1Z2luIiwic3JjIiwib3V0cHV0IiwiYmxvYiIsIkJsb2IiLCJmaWxlRG93bmxvYWRVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRXZlbnQiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwiVGl0bGUiLCJkZXNjcmlwdGlvbiIsIkRlc2NyaXB0aW9uIiwiRGF0ZSIsIkdvYWwiLCJsb2dvIiwiRXZlbnRMb2dvIiwid2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJzZWxlY3RlZEFkZHJlc3MiLCJ0eXBlaW1nIiwicmVzdWx0IiwidG90YWxFdmVudCIsImV2ZW50aWQiLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrZWQiLCJsb2NhdGlvbiIsImhvc3QiLCJFdmVudExvZ29JbnB1dCIsIkNyZWF0ZUV2ZW50QlROIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1hcmdpbiIsIndpZHRoIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJib3JkZXIiLCJkaXNwbGF5IiwiYWxpZ25Db250ZW50IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJnYXAiXSwic291cmNlUm9vdCI6IiJ9