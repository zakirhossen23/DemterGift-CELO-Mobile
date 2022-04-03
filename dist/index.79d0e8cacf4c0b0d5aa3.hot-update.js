"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/pages/CreateEvents/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/CreateEvents/index.tsx ***!
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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/layout/Header */ "./src/components/layout/Header/index.tsx");












function CreateEvents() {
  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_7__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var _UseFormInput = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Title',
    id: ''
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      EventTitle = _UseFormInput2[0],
      EventTitleInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Description',
    id: ''
  }),
      _UseFormInput4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput3, 2),
      EventDescription = _UseFormInput4[0],
      EventDescriptionInput = _UseFormInput4[1];

  var _UseFormInput5 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__["default"])({
    defaultValue: "",
    type: 'datetime-local',
    placeholder: 'Event End Date ',
    id: 'enddate'
  }),
      _UseFormInput6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput5, 2),
      EventDate = _UseFormInput6[0],
      EventDateInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Goal in CELO Dollar (CUSD)',
    id: 'goal'
  }),
      _UseFormInput8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput7, 2),
      EventGoal = _UseFormInput8[0],
      EventGoalInput = _UseFormInput8[1];

  function createEvent() {
    return _createEvent.apply(this, arguments);
  }

  function _createEvent() {
    _createEvent = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var createdObject, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
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
              _context.prev = 1;
              _context.next = 4;
              return contract.createEvent(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(createdObject));

            case 4:
              result = _context.sent;
              console.log(result);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              window.location.href = '/login';

            case 11:
              window.location.href = '/donation';

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));
    return _createEvent.apply(this, arguments);
  }

  var _UseFormInput9 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Logo Link',
    id: 'logo'
  }),
      _UseFormInput10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput9, 2),
      EventLogo = _UseFormInput10[0],
      EventLogoInput = _UseFormInput10[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(next_head__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("title", null, "Create Event"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("meta", {
    name: "description",
    content: "Create Event"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_layout_Header__WEBPACK_IMPORTED_MODULE_8__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__["default"], {
    style: {
      padding: "0 37%",
      "paddingTop": 0,
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      width: "500px",
      background: "transparent",
      padding: "19px",
      borderRadius: "4px",
      height: "100%",
      border: "white solid"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      margin: "0px 0px 30px 0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h1", null, "Create Event")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h6", null, "Event Title"), EventTitleInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h6", null, "Event End Date"), EventDateInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h6", null, "Event Goal"), EventGoalInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h6", null, "Event Logo Link"), EventLogoInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
/******/ 	__webpack_require__.h = function() { return "8c1ceccf0db7266696bf"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4Ljc5ZDBlOGNhY2Y0YzBiMGQ1YWEzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTUSxZQUFULEdBQXdCO0FBR25DLHFCQUFvQ0YsaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUUcsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUVBLHNCQUFzQ0wsK0VBQVksQ0FBQztBQUMvQ00sSUFBQUEsWUFBWSxFQUFFLEVBRGlDO0FBRS9DQyxJQUFBQSxJQUFJLEVBQUUsTUFGeUM7QUFHL0NDLElBQUFBLFdBQVcsRUFBRSxhQUhrQztBQUkvQ0MsSUFBQUEsRUFBRSxFQUFFO0FBSjJDLEdBQUQsQ0FBbEQ7QUFBQTtBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsZUFBbkI7O0FBTUEsdUJBQWtEWCwrRUFBWSxDQUFDO0FBQzNETSxJQUFBQSxZQUFZLEVBQUUsRUFENkM7QUFFM0RDLElBQUFBLElBQUksRUFBRSxNQUZxRDtBQUczREMsSUFBQUEsV0FBVyxFQUFFLG1CQUg4QztBQUkzREMsSUFBQUEsRUFBRSxFQUFFO0FBSnVELEdBQUQsQ0FBOUQ7QUFBQTtBQUFBLE1BQU9HLGdCQUFQO0FBQUEsTUFBeUJDLHFCQUF6Qjs7QUFNQSx1QkFBb0NiLCtFQUFZLENBQUM7QUFDN0NNLElBQUFBLFlBQVksRUFBRSxFQUQrQjtBQUU3Q0MsSUFBQUEsSUFBSSxFQUFFLGdCQUZ1QztBQUc3Q0MsSUFBQUEsV0FBVyxFQUFFLGlCQUhnQztBQUk3Q0MsSUFBQUEsRUFBRSxFQUFFO0FBSnlDLEdBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9LLFNBQVA7QUFBQSxNQUFrQkMsY0FBbEI7O0FBTUEsdUJBQW9DZiwrRUFBWSxDQUFDO0FBQzdDTSxJQUFBQSxZQUFZLEVBQUUsRUFEK0I7QUFF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QTVDO0FBQVosa0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRUEsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLE1BQUFBLFVBQVUsRUFBRSxhQUE5QjtBQUE2Q0YsTUFBQUEsT0FBTyxFQUFFLE1BQXREO0FBQThERyxNQUFBQSxZQUFZLEVBQUUsS0FBNUU7QUFBbUZDLE1BQUFBLE1BQU0sRUFBRSxNQUEzRjtBQUFtR0MsTUFBQUEsTUFBTSxFQUFFO0FBQTNHO0FBQVosa0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFBWixrQkFDSSw0RUFESixDQURKLGVBS0k7QUFBSyxTQUFLLEVBQUU7QUFBRUEsTUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFBWixrQkFDSSwyRUFESixFQUVLbkMsZUFGTCxDQUxKLGVBVUk7QUFBSyxTQUFLLEVBQUU7QUFBRW1DLE1BQUFBLE1BQU0sRUFBRTtBQUFWO0FBQVosa0JBQ0ksOEVBREosRUFFSy9CLGNBRkwsQ0FWSixlQWNJO0FBQUssU0FBSyxFQUFFO0FBQUUrQixNQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUFaLGtCQUNJLDBFQURKLEVBRUs3QixjQUZMLENBZEosZUFrQkk7QUFBSyxTQUFLLEVBQUU7QUFBRTZCLE1BQUFBLE1BQU0sRUFBRTtBQUFWO0FBQVosa0JBQ0ksK0VBREosRUFFS1AsY0FGTCxDQWxCSixlQXVCSSxpREFBQywrREFBRDtBQUFRLFNBQUssRUFBRTtBQUFFTyxNQUFBQSxNQUFNLEVBQUUsZ0JBQVY7QUFBNEJMLE1BQUFBLEtBQUssRUFBRTtBQUFuQyxLQUFmO0FBQ0ksV0FBTyxFQUFFdkI7QUFEYixvQkF2QkosQ0FESixDQURKLENBUEYsQ0FBRixDQURKO0FBNkNIOzs7Ozs7OztVQzdJRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9DcmVhdGVFdmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQnO1xuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlRXZlbnRzKCkge1xuXG5cbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG5cbiAgICBjb25zdCBbRXZlbnRUaXRsZSwgRXZlbnRUaXRsZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IFRpdGxlJyxcbiAgICAgICAgaWQ6ICcnXG4gICAgfSk7XG4gICAgY29uc3QgW0V2ZW50RGVzY3JpcHRpb24sIEV2ZW50RGVzY3JpcHRpb25JbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBEZXNjcmlwdGlvbicsXG4gICAgICAgIGlkOiAnJ1xuICAgIH0pO1xuICAgIGNvbnN0IFtFdmVudERhdGUsIEV2ZW50RGF0ZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ2RhdGV0aW1lLWxvY2FsJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBFbmQgRGF0ZSAnLFxuICAgICAgICBpZDogJ2VuZGRhdGUnLFxuICAgIH0pO1xuICAgIGNvbnN0IFtFdmVudEdvYWwsIEV2ZW50R29hbElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IEdvYWwgaW4gQ0VMTyBEb2xsYXIgKENVU0QpJyxcbiAgICAgICAgaWQ6ICdnb2FsJyxcbiAgICB9KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KCkge1xuXG5cbiAgICAgICAgY29uc3QgY3JlYXRlZE9iamVjdCA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQXNzZXQgTWV0YWRhdGEnLFxuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgVGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBFdmVudFRpdGxlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBFdmVudERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgRGF0ZToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IEV2ZW50RGF0ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIEdvYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBFdmVudEdvYWxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxvZ286IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBFdmVudExvZ29cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdhbGxldDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3NcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHR5cGVpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkV2ZW50XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVFdmVudChcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgnL2xvZ2luJyk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoJy9kb25hdGlvbicpO1xuICAgIH1cbiAgICBjb25zdCBbRXZlbnRMb2dvLCBFdmVudExvZ29JbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBMb2dvIExpbmsnLFxuICAgICAgICBpZDogJ2xvZ28nXG4gICAgfSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+PD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5DcmVhdGUgRXZlbnQ8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDcmVhdGUgRXZlbnRcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZzogXCIwIDM3JVwiLCBcInBhZGRpbmdUb3BcIjogMCwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjUwMHB4XCIsIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiwgcGFkZGluZzogXCIxOXB4XCIsIGJvcmRlclJhZGl1czogXCI0cHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYm9yZGVyOiBcIndoaXRlIHNvbGlkXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDMwcHggMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkNyZWF0ZSBFdmVudDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkV2ZW50IFRpdGxlPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRUaXRsZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5FdmVudCBFbmQgRGF0ZTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50RGF0ZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+RXZlbnQgR29hbDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50R29hbElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+RXZlbnQgTG9nbyBMaW5rPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRMb2dvSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y3JlYXRlRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICA8Lz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI4YzFjZWNjZjBkYjcyNjY2OTZiZlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsIlVzZUZvcm1JbnB1dCIsInVzZUNvbnRyYWN0IiwiSGVhZGVyIiwiQ3JlYXRlRXZlbnRzIiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwiZGVmYXVsdFZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaWQiLCJFdmVudFRpdGxlIiwiRXZlbnRUaXRsZUlucHV0IiwiRXZlbnREZXNjcmlwdGlvbiIsIkV2ZW50RGVzY3JpcHRpb25JbnB1dCIsIkV2ZW50RGF0ZSIsIkV2ZW50RGF0ZUlucHV0IiwiRXZlbnRHb2FsIiwiRXZlbnRHb2FsSW5wdXQiLCJjcmVhdGVFdmVudCIsImNyZWF0ZWRPYmplY3QiLCJ0aXRsZSIsInByb3BlcnRpZXMiLCJUaXRsZSIsImRlc2NyaXB0aW9uIiwiRGVzY3JpcHRpb24iLCJEYXRlIiwiR29hbCIsImxvZ28iLCJFdmVudExvZ28iLCJ3YWxsZXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInNlbGVjdGVkQWRkcmVzcyIsInR5cGVpbWciLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJocmVmIiwiRXZlbnRMb2dvSW5wdXQiLCJwYWRkaW5nIiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYm9yZGVyIiwibWFyZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==