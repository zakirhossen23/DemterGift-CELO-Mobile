self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/parse-int */ "./node_modules/core-js-pure/stable/parse-int.js");

/***/ }),

/***/ "./src/components/components/modals/BidNFTModal.jsx":
/*!**********************************************************!*\
  !*** ./src/components/components/modals/BidNFTModal.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BidNFTModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _harmony_js_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @harmony-js/utils */ "./node_modules/@harmony-js/utils/dist/index.js");
/* harmony import */ var _harmony_js_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_harmony_js_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UseFormInput */ "./src/components/components/UseFormInput.jsx");











function BidNFTModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      contract = _ref.contract,
      senderAddress = _ref.senderAddress,
      tokenId = _ref.tokenId,
      eventId = _ref.eventId,
      toAddress = _ref.toAddress,
      type = _ref.type,
      Highestbid = _ref.Highestbid;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      Alert = _useState2[0],
      setAlert = _useState2[1];

  var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");

  var ContractKit = __webpack_require__(/*! @celo/contractkit */ "./node_modules/@celo/contractkit/lib/index.js");

  var web3 = new Web3(window.ethereum);
  var kit = ContractKit.newKitFromWeb3(web3);

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_7__["default"])({
    type: 'text',
    placeholder: 'Amount'
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      Amount = _UseFormInput2[0],
      AmountInput = _UseFormInput2[1];

  function activateWarningModal(TextAlert) {
    var alertELM = document.getElementById("alert");
    alertELM.style = 'contents';
    setAlert(TextAlert);
  }

  function activateWorkingModal(TextAlert) {
    var alertELM = document.getElementById("workingalert");
    alertELM.style = 'contents';
    setAlert(TextAlert);
  }

  function bidNFT() {
    return _bidNFT.apply(this, arguments);
  }

  function _bidNFT() {
    _bidNFT = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var alertELM, cEURtoken, CEURinFull, cEURtx, cEURReceipt, tokenUri, parsed, currentDate, createdObject, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(Amount) < _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(Highestbid))) {
                _context.next = 5;
                break;
              }

              activateWarningModal("Amount cannot be under ".concat(Highestbid, " CELO Euro (CEUR)"));
              return _context.abrupt("return");

            case 5:
              alertELM = document.getElementById("alert");
              alertELM.style.display = 'none';

            case 7:
              _context.prev = 7;
              activateWorkingModal("Bidding....");
              _context.next = 11;
              return kit.contracts.getStableToken('cEUR');

            case 11:
              cEURtoken = _context.sent;
              CEURinFull = (Number(Amount) * 1000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              activateWorkingModal("Please confirm....");
              _context.next = 16;
              return cEURtoken.transfer(toAddress, CEURinFull).send({
                from: senderAddress,
                gasPrice: 1000000000000,
                feeCurrency: cEURtoken.address
              });

            case 16:
              cEURtx = _context.sent;
              _context.next = 19;
              return cEURtx.waitReceipt();

            case 19:
              cEURReceipt = _context.sent;
              activateWorkingModal("Pending transactions....");
              console.log(cEURReceipt);
              activateWorkingModal("Done! Adding into CELO Network...");
              _context.next = 25;
              return contract.tokenURI(tokenId);

            case 25:
              tokenUri = _context.sent;
              _context.next = 28;
              return JSON.parse(tokenUri);

            case 28:
              parsed = _context.sent;

              if (Number(parsed['properties']['price']['description']) < Number(Amount)) {
                parsed['properties']['price']['description'] = Amount;
                parsed['properties']['higherbidadd']['description'] = senderAddress;
              }

              currentDate = new Date();
              createdObject = {
                title: 'Asset Metadata Bids',
                type: 'object',
                properties: {
                  username: {
                    type: 'string',
                    description: senderAddress
                  },
                  bid: {
                    type: 'string',
                    description: Amount
                  },
                  time: {
                    type: 'string',
                    description: currentDate
                  }
                }
              };
              activateWorkingModal("Please confirm creating Bid...");
              _context.next = 35;
              return contract.createBid(tokenId, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(createdObject), _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(parsed), eventId);

            case 35:
              result = _context.sent;
              console.log(result);
              activateWorkingModal("Success!");
              window.document.getElementsByClassName("btn-close")[0].click();
              window.location.reload();
              _context.next = 48;
              break;

            case 42:
              _context.prev = 42;
              _context.t0 = _context["catch"](7);
              activateWarningModal("Error! Please try again!");
              alertELM = document.getElementById("workingalert");
              alertELM.style.display = 'none';
              return _context.abrupt("return");

            case 48:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 42]]);
    }));
    return _bidNFT.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__["default"].Header, {
    closeButton: true
  }, type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid Cryptopunk") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    id: "alert",
    style: {
      display: 'none',
      fontSize: "30px"
    },
    className: "alert alert-danger",
    role: "alert"
  }, Alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    id: "workingalert",
    style: {
      display: 'none',
      fontSize: "30px"
    },
    className: "alert alert-success",
    role: "alert"
  }, Alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__["default"].Label, null, "Bid Amount in CELO Euro (CEUR)"), AmountInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "primary",
    onClick: bidNFT
  }, "Bid NFT")))));
}

/***/ }),

/***/ "./node_modules/core-js-pure/es/parse-int.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js-pure/es/parse-int.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es.parse-int */ "./node_modules/core-js-pure/modules/es.parse-int.js");
var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js-pure/internals/path.js");

module.exports = path.parseInt;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/number-parse-int.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/number-parse-int.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js-pure/internals/to-string.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js-pure/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js-pure/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/string-trim.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-trim.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js-pure/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js-pure/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/whitespaces.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/whitespaces.js ***!
  \************************************************************/
/***/ (function(module) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.parse-int.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.parse-int.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js-pure/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/core-js-pure/stable/parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/stable/parse-int.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../es/parse-int */ "./node_modules/core-js-pure/es/parse-int.js");

module.exports = parent;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "32ab4564dfa3097379c4"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjUxZDc0N2M5N2RjZTk5YjYwNjliLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw0SEFBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNVLFdBQVQsT0FXWjtBQUFBLE1BVkZDLElBVUUsUUFWRkEsSUFVRTtBQUFBLE1BVEZDLE1BU0UsUUFURkEsTUFTRTtBQUFBLE1BUkZDLFFBUUUsUUFSRkEsUUFRRTtBQUFBLE1BUEZDLGFBT0UsUUFQRkEsYUFPRTtBQUFBLE1BTkZDLE9BTUUsUUFORkEsT0FNRTtBQUFBLE1BTEZDLE9BS0UsUUFMRkEsT0FLRTtBQUFBLE1BSkZDLFNBSUUsUUFKRkEsU0FJRTtBQUFBLE1BSEZDLElBR0UsUUFIRkEsSUFHRTtBQUFBLE1BRkZDLFVBRUUsUUFGRkEsVUFFRTs7QUFDRixrQkFBMEJsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQTtBQUFBLE1BQU9tQixLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQSxNQUFNQyxJQUFJLEdBQUdDLG1CQUFPLENBQUMsOENBQUQsQ0FBcEI7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHRCxtQkFBTyxDQUFDLHdFQUFELENBQTNCOztBQUNBLE1BQU1FLElBQUksR0FBRyxJQUFJSCxJQUFKLENBQVNJLE1BQU0sQ0FBQ0MsUUFBaEIsQ0FBYjtBQUNBLE1BQU1DLEdBQUcsR0FBR0osV0FBVyxDQUFDSyxjQUFaLENBQTJCSixJQUEzQixDQUFaOztBQUVBLHNCQUE4QmhCLHlEQUFZLENBQUM7QUFDMUNTLElBQUFBLElBQUksRUFBRSxNQURvQztBQUUxQ1ksSUFBQUEsV0FBVyxFQUFFO0FBRjZCLEdBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxXQUFmOztBQU1BLFdBQVNDLG9CQUFULENBQThCQyxTQUE5QixFQUF5QztBQUN4QyxRQUFJQyxRQUFRLEdBQUdD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Q0FERCxDQWhCRCxDQUREO0FBeUNBOzs7Ozs7Ozs7O0FDckpELG1CQUFPLENBQUMsb0ZBQXlCO0FBQ2pDLFdBQVcsbUJBQU8sQ0FBQyx3RUFBbUI7O0FBRXRDOzs7Ozs7Ozs7OztBQ0hBLGFBQWEsbUJBQU8sQ0FBQyw0RUFBcUI7QUFDMUMsZUFBZSxtQkFBTyxDQUFDLGtGQUF3QjtBQUMvQyxXQUFXLGdIQUF3QztBQUNuRCxrQkFBa0IsbUJBQU8sQ0FBQyxzRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7Ozs7Ozs7Ozs7QUNkRiw2QkFBNkIsbUJBQU8sQ0FBQyxnSEFBdUM7QUFDNUUsZUFBZSxtQkFBTyxDQUFDLGtGQUF3QjtBQUMvQyxrQkFBa0IsbUJBQU8sQ0FBQyxzRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsK0NBQStDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIscUJBQXFCO0FBQzlDO0FBQ0E7QUFDQSx5QkFBeUIsb0JBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0ZBLFFBQVEsbUJBQU8sQ0FBQyw0RUFBcUI7QUFDckMsNkJBQTZCLG1CQUFPLENBQUMsZ0dBQStCOztBQUVwRTtBQUNBO0FBQ0EsSUFBSSwwREFBMEQ7QUFDOUQ7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1BELGFBQWEsbUJBQU8sQ0FBQyxvRUFBaUI7O0FBRXRDOzs7Ozs7Ozs7VUNGQSxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL3BhcnNlLWludC5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsLmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvcGFyc2UtaW50LmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvcGFyc2UtaW50LmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL3BhcnNlLWludFwiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCB7IGZyb21XZWksIFVuaXRzLCBVbml0IH0gZnJvbSAnQGhhcm1vbnktanMvdXRpbHMnO1xuXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpZE5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRjb250cmFjdCxcblx0c2VuZGVyQWRkcmVzcyxcblx0dG9rZW5JZCxcblx0ZXZlbnRJZCxcblx0dG9BZGRyZXNzLFxuXHR0eXBlLFxuXHRIaWdoZXN0YmlkXG5cbn0pIHtcblx0Y29uc3QgW0FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZSgnJyk7XG5cblx0Y29uc3QgV2ViMyA9IHJlcXVpcmUoXCJ3ZWIzXCIpXG5cdGNvbnN0IENvbnRyYWN0S2l0ID0gcmVxdWlyZSgnQGNlbG8vY29udHJhY3RraXQnKVxuXHRjb25zdCB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKVxuXHRjb25zdCBraXQgPSBDb250cmFjdEtpdC5uZXdLaXRGcm9tV2ViMyh3ZWIzKVxuXG5cdGNvbnN0IFtBbW91bnQsIEFtb3VudElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnQW1vdW50Jyxcblx0fSk7XG5cblxuXHRmdW5jdGlvbiBhY3RpdmF0ZVdhcm5pbmdNb2RhbChUZXh0QWxlcnQpIHtcblx0XHR2YXIgYWxlcnRFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpO1xuXHRcdGFsZXJ0RUxNLnN0eWxlID0gJ2NvbnRlbnRzJztcblx0XHRzZXRBbGVydChUZXh0QWxlcnQpXG5cdH1cblx0ZnVuY3Rpb24gYWN0aXZhdGVXb3JraW5nTW9kYWwoVGV4dEFsZXJ0KSB7XG5cdFx0dmFyIGFsZXJ0RUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JraW5nYWxlcnRcIik7XG5cdFx0YWxlcnRFTE0uc3R5bGUgPSAnY29udGVudHMnO1xuXHRcdHNldEFsZXJ0KFRleHRBbGVydClcblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGJpZE5GVCgpIHtcblxuXHRcdGlmIChwYXJzZUludChBbW91bnQpIDwgcGFyc2VJbnQoSGlnaGVzdGJpZCkpIHtcblx0XHRcdGFjdGl2YXRlV2FybmluZ01vZGFsKGBBbW91bnQgY2Fubm90IGJlIHVuZGVyICR7SGlnaGVzdGJpZH0gQ0VMTyBFdXJvIChDRVVSKWApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1lbHNle1xuXHRcdFx0dmFyIGFsZXJ0RUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKTtcblx0XHRcdGFsZXJ0RUxNLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHRcdFx0XG5cdFx0fVxuXHRcdHRyeVx0e1xuXHRcdFx0YWN0aXZhdGVXb3JraW5nTW9kYWwoXCJCaWRkaW5nLi4uLlwiKVxuXHRcdFx0bGV0IGNFVVJ0b2tlbiA9IGF3YWl0IGtpdC5jb250cmFjdHMuZ2V0U3RhYmxlVG9rZW4oJ2NFVVInKVxuXHRcdFx0bGV0IENFVVJpbkZ1bGwgPSAoTnVtYmVyKEFtb3VudCkgKiAxMDAwMDAwMDAwMDAwMDAwMDAwKS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblx0XHRcdGFjdGl2YXRlV29ya2luZ01vZGFsKFwiUGxlYXNlIGNvbmZpcm0uLi4uXCIpXG5cdFx0XHRsZXQgY0VVUnR4ID0gYXdhaXQgY0VVUnRva2VuLnRyYW5zZmVyKHRvQWRkcmVzcywgQ0VVUmluRnVsbCkuc2VuZCh7ICBmcm9tOiBzZW5kZXJBZGRyZXNzLCBnYXNQcmljZTogMTAwMDAwMDAwMDAwMCwgZmVlQ3VycmVuY3k6IGNFVVJ0b2tlbi5hZGRyZXNzIH0pXG5cdFx0XHRsZXQgY0VVUlJlY2VpcHQgPSBhd2FpdCBjRVVSdHgud2FpdFJlY2VpcHQoKVxuXHRcdFx0YWN0aXZhdGVXb3JraW5nTW9kYWwoXCJQZW5kaW5nIHRyYW5zYWN0aW9ucy4uLi5cIilcblxuXHRcdFx0Y29uc29sZS5sb2coY0VVUlJlY2VpcHQpO1xuXHRcdFx0YWN0aXZhdGVXb3JraW5nTW9kYWwoXCJEb25lISBBZGRpbmcgaW50byBDRUxPIE5ldHdvcmsuLi5cIilcblxuXHRcdFx0Y29uc3QgdG9rZW5VcmkgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSSh0b2tlbklkKTtcblx0XHRcdHZhciBwYXJzZWQgPSBhd2FpdCBKU09OLnBhcnNlKHRva2VuVXJpKTtcblx0XHRcdGlmIChOdW1iZXIocGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10pIDwgTnVtYmVyKEFtb3VudCkpIHtcblx0XHRcdFx0cGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10gPSBBbW91bnQ7XG5cdFx0XHRcdHBhcnNlZFsncHJvcGVydGllcyddWydoaWdoZXJiaWRhZGQnXVsnZGVzY3JpcHRpb24nXSA9IHNlbmRlckFkZHJlc3M7XG5cdFxuXHRcdFx0fVxuXHRcdFx0bGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG5cdFx0XHRcdHRpdGxlOiAnQXNzZXQgTWV0YWRhdGEgQmlkcycsXG5cdFx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdFx0dXNlcm5hbWU6IHtcblx0XHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IHNlbmRlckFkZHJlc3Ncblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGJpZDoge1xuXHRcdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogQW1vdW50XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aW1lOiB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBjdXJyZW50RGF0ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGFjdGl2YXRlV29ya2luZ01vZGFsKFwiUGxlYXNlIGNvbmZpcm0gY3JlYXRpbmcgQmlkLi4uXCIpXG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUJpZCh0b2tlbklkLCBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KSwgSlNPTi5zdHJpbmdpZnkocGFyc2VkKSwgZXZlbnRJZCk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdFx0YWN0aXZhdGVXb3JraW5nTW9kYWwoXCJTdWNjZXNzIVwiKVxuXG5cdFx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdH1jYXRjaChlKXtcblx0XHRcdGFjdGl2YXRlV2FybmluZ01vZGFsKGBFcnJvciEgUGxlYXNlIHRyeSBhZ2FpbiFgKTtcblx0XHRcdHZhciBhbGVydEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya2luZ2FsZXJ0XCIpO1xuXHRcdFx0YWxlcnRFTE0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcdFxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbFxuXHRcdFx0c2hvdz17c2hvd31cblx0XHRcdG9uSGlkZT17b25IaWRlfVxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0Y2VudGVyZWRcblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+KSA6IChcblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHQ8Rm9ybT5cblx0XHRcdFx0XHQ8ZGl2IGlkPSdhbGVydCcgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnLCBmb250U2l6ZTogXCIzMHB4XCIgfX0gY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0XHRcdFx0XHR7QWxlcnR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBpZD0nd29ya2luZ2FsZXJ0JyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScsIGZvbnRTaXplOiBcIjMwcHhcIiB9fSBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0XHRcdFx0XHR7QWxlcnR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkJpZCBBbW91bnQgaW4gQ0VMTyBFdXJvIChDRVVSKTwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtBbW91bnRJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cblx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtiaWRORlR9PlxuXHRcdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L01vZGFsLkJvZHk+XG5cblx0XHQ8L01vZGFsPlxuXG5cdCk7XG59XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnBhcnNlLWludCcpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGgucGFyc2VJbnQ7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKHRvU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gJHBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KFMpID8gMTYgOiAxMCkpO1xufSA6ICRwYXJzZUludDtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyJyArXG4gICdcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9IHBhcnNlSW50SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRJbXBsZW1lbnRhdGlvblxufSk7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vZXMvcGFyc2UtaW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjMyYWI0NTY0ZGZhMzA5NzM3OWM0XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsImZyb21XZWkiLCJVbml0cyIsIlVuaXQiLCJVc2VGb3JtSW5wdXQiLCJCaWRORlRNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJjb250cmFjdCIsInNlbmRlckFkZHJlc3MiLCJ0b2tlbklkIiwiZXZlbnRJZCIsInRvQWRkcmVzcyIsInR5cGUiLCJIaWdoZXN0YmlkIiwiQWxlcnQiLCJzZXRBbGVydCIsIldlYjMiLCJyZXF1aXJlIiwiQ29udHJhY3RLaXQiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJraXQiLCJuZXdLaXRGcm9tV2ViMyIsInBsYWNlaG9sZGVyIiwiQW1vdW50IiwiQW1vdW50SW5wdXQiLCJhY3RpdmF0ZVdhcm5pbmdNb2RhbCIsIlRleHRBbGVydCIsImFsZXJ0RUxNIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYWN0aXZhdGVXb3JraW5nTW9kYWwiLCJiaWRORlQiLCJkaXNwbGF5IiwiY29udHJhY3RzIiwiZ2V0U3RhYmxlVG9rZW4iLCJjRVVSdG9rZW4iLCJDRVVSaW5GdWxsIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJ1c2VHcm91cGluZyIsInRyYW5zZmVyIiwic2VuZCIsImZyb20iLCJnYXNQcmljZSIsImZlZUN1cnJlbmN5IiwiYWRkcmVzcyIsImNFVVJ0eCIsIndhaXRSZWNlaXB0IiwiY0VVUlJlY2VpcHQiLCJjb25zb2xlIiwibG9nIiwidG9rZW5VUkkiLCJ0b2tlblVyaSIsIkpTT04iLCJwYXJzZSIsInBhcnNlZCIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImNyZWF0ZWRPYmplY3QiLCJ0aXRsZSIsInByb3BlcnRpZXMiLCJ1c2VybmFtZSIsImRlc2NyaXB0aW9uIiwiYmlkIiwidGltZSIsImNyZWF0ZUJpZCIsInJlc3VsdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGljayIsImxvY2F0aW9uIiwicmVsb2FkIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9