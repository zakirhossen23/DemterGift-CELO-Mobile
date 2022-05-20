"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/components/components/modals/BidNFTModal.jsx":
/*!**********************************************************!*\
  !*** ./src/components/components/modals/BidNFTModal.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BidNFTModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _harmony_js_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @harmony-js/utils */ "./node_modules/@harmony-js/utils/dist/index.js");
/* harmony import */ var _harmony_js_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_harmony_js_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UseFormInput */ "./src/components/components/UseFormInput.jsx");










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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      Alert = _useState2[0],
      setAlert = _useState2[1];

  var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");

  var ContractKit = __webpack_require__(/*! @celo/contractkit */ "./node_modules/@celo/contractkit/lib/index.js");

  var web3 = new Web3(window.ethereum);
  var kit = ContractKit.newKitFromWeb3(web3);

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_6__["default"])({
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
              if (!(int(Amount) < int(Highestbid))) {
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
              return contract.createBid(tokenId, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(createdObject), _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(parsed), eventId);

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Header, {
    closeButton: true
  }, type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid Cryptopunk") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    id: "alert",
    style: {
      display: 'none',
      fontSize: "30px"
    },
    className: "alert alert-danger",
    role: "alert"
  }, Alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    id: "workingalert",
    style: {
      display: 'none',
      fontSize: "30px"
    },
    className: "alert alert-success",
    role: "alert"
  }, Alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__["default"].Label, null, "Bid Amount in CELO Euro (CEUR)"), AmountInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "primary",
    onClick: bidNFT
  }, "Bid NFT")))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "51d747c97dce99b6069b"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmJkYTdlMDE1NGExZDhiZTZkODM0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU1UsV0FBVCxPQVdaO0FBQUEsTUFWRkMsSUFVRSxRQVZGQSxJQVVFO0FBQUEsTUFURkMsTUFTRSxRQVRGQSxNQVNFO0FBQUEsTUFSRkMsUUFRRSxRQVJGQSxRQVFFO0FBQUEsTUFQRkMsYUFPRSxRQVBGQSxhQU9FO0FBQUEsTUFORkMsT0FNRSxRQU5GQSxPQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsU0FJRSxRQUpGQSxTQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFOztBQUNGLGtCQUEwQmxCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT21CLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFwQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdELG1CQUFPLENBQUMsd0VBQUQsQ0FBM0I7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHLElBQUlILElBQUosQ0FBU0ksTUFBTSxDQUFDQyxRQUFoQixDQUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSixXQUFXLENBQUNLLGNBQVosQ0FBMkJKLElBQTNCLENBQVo7O0FBRUEsc0JBQThCaEIseURBQVksQ0FBQztBQUMxQ1MsSUFBQUEsSUFBSSxFQUFFLE1BRG9DO0FBRTFDWSxJQUFBQSxXQUFXLEVBQUU7QUFGNkIsR0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFdBQWY7O0FBTUEsV0FBU0Msb0JBQVQsQ0FBOEJDLFNBQTlCLEVBQXlDO0FBQ3hDLFFBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9B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QkQsQ0FERDtBQXlDQTs7Ozs7Ozs7VUNySkQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IHsgZnJvbVdlaSwgVW5pdHMsIFVuaXQgfSBmcm9tICdAaGFybW9ueS1qcy91dGlscyc7XG5cbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vVXNlRm9ybUlucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlkTkZUTW9kYWwoe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdGNvbnRyYWN0LFxuXHRzZW5kZXJBZGRyZXNzLFxuXHR0b2tlbklkLFxuXHRldmVudElkLFxuXHR0b0FkZHJlc3MsXG5cdHR5cGUsXG5cdEhpZ2hlc3RiaWRcblxufSkge1xuXHRjb25zdCBbQWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlKCcnKTtcblxuXHRjb25zdCBXZWIzID0gcmVxdWlyZShcIndlYjNcIilcblx0Y29uc3QgQ29udHJhY3RLaXQgPSByZXF1aXJlKCdAY2Vsby9jb250cmFjdGtpdCcpXG5cdGNvbnN0IHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pXG5cdGNvbnN0IGtpdCA9IENvbnRyYWN0S2l0Lm5ld0tpdEZyb21XZWIzKHdlYjMpXG5cblx0Y29uc3QgW0Ftb3VudCwgQW1vdW50SW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdBbW91bnQnLFxuXHR9KTtcblxuXG5cdGZ1bmN0aW9uIGFjdGl2YXRlV2FybmluZ01vZGFsKFRleHRBbGVydCkge1xuXHRcdHZhciBhbGVydEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIik7XG5cdFx0YWxlcnRFTE0uc3R5bGUgPSAnY29udGVudHMnO1xuXHRcdHNldEFsZXJ0KFRleHRBbGVydClcblx0fVxuXHRmdW5jdGlvbiBhY3RpdmF0ZVdvcmtpbmdNb2RhbChUZXh0QWxlcnQpIHtcblx0XHR2YXIgYWxlcnRFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtpbmdhbGVydFwiKTtcblx0XHRhbGVydEVMTS5zdHlsZSA9ICdjb250ZW50cyc7XG5cdFx0c2V0QWxlcnQoVGV4dEFsZXJ0KVxuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUKCkge1xuXG5cdFx0aWYgKGludChBbW91bnQpIDwgaW50KEhpZ2hlc3RiaWQpKSB7XG5cdFx0XHRhY3RpdmF0ZVdhcm5pbmdNb2RhbChgQW1vdW50IGNhbm5vdCBiZSB1bmRlciAke0hpZ2hlc3RiaWR9IENFTE8gRXVybyAoQ0VVUilgKTtcblx0XHRcdHJldHVybjtcblx0XHR9ZWxzZXtcblx0XHRcdHZhciBhbGVydEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIik7XG5cdFx0XHRhbGVydEVMTS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1x0XHRcdFxuXHRcdH1cblx0XHR0cnlcdHtcblx0XHRcdGFjdGl2YXRlV29ya2luZ01vZGFsKFwiQmlkZGluZy4uLi5cIilcblx0XHRcdGxldCBjRVVSdG9rZW4gPSBhd2FpdCBraXQuY29udHJhY3RzLmdldFN0YWJsZVRva2VuKCdjRVVSJylcblx0XHRcdGxldCBDRVVSaW5GdWxsID0gKE51bWJlcihBbW91bnQpICogMTAwMDAwMDAwMDAwMDAwMDAwMCkudG9Mb2NhbGVTdHJpbmcoJ2Z1bGx3aWRlJywgeyB1c2VHcm91cGluZzogZmFsc2UgfSk7XG5cdFx0XHRhY3RpdmF0ZVdvcmtpbmdNb2RhbChcIlBsZWFzZSBjb25maXJtLi4uLlwiKVxuXHRcdFx0bGV0IGNFVVJ0eCA9IGF3YWl0IGNFVVJ0b2tlbi50cmFuc2Zlcih0b0FkZHJlc3MsIENFVVJpbkZ1bGwpLnNlbmQoeyAgZnJvbTogc2VuZGVyQWRkcmVzcywgZ2FzUHJpY2U6IDEwMDAwMDAwMDAwMDAsIGZlZUN1cnJlbmN5OiBjRVVSdG9rZW4uYWRkcmVzcyB9KVxuXHRcdFx0bGV0IGNFVVJSZWNlaXB0ID0gYXdhaXQgY0VVUnR4LndhaXRSZWNlaXB0KClcblx0XHRcdGFjdGl2YXRlV29ya2luZ01vZGFsKFwiUGVuZGluZyB0cmFuc2FjdGlvbnMuLi4uXCIpXG5cblx0XHRcdGNvbnNvbGUubG9nKGNFVVJSZWNlaXB0KTtcblx0XHRcdGFjdGl2YXRlV29ya2luZ01vZGFsKFwiRG9uZSEgQWRkaW5nIGludG8gQ0VMTyBOZXR3b3JrLi4uXCIpXG5cblx0XHRcdGNvbnN0IHRva2VuVXJpID0gYXdhaXQgY29udHJhY3QudG9rZW5VUkkodG9rZW5JZCk7XG5cdFx0XHR2YXIgcGFyc2VkID0gYXdhaXQgSlNPTi5wYXJzZSh0b2tlblVyaSk7XG5cdFx0XHRpZiAoTnVtYmVyKHBhcnNlZFsncHJvcGVydGllcyddWydwcmljZSddWydkZXNjcmlwdGlvbiddKSA8IE51bWJlcihBbW91bnQpKSB7XG5cdFx0XHRcdHBhcnNlZFsncHJvcGVydGllcyddWydwcmljZSddWydkZXNjcmlwdGlvbiddID0gQW1vdW50O1xuXHRcdFx0XHRwYXJzZWRbJ3Byb3BlcnRpZXMnXVsnaGlnaGVyYmlkYWRkJ11bJ2Rlc2NyaXB0aW9uJ10gPSBzZW5kZXJBZGRyZXNzO1xuXHRcblx0XHRcdH1cblx0XHRcdGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuXHRcdFx0XHR0aXRsZTogJ0Fzc2V0IE1ldGFkYXRhIEJpZHMnLFxuXHRcdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHRcdFx0cHJvcGVydGllczoge1xuXHRcdFx0XHRcdHVzZXJuYW1lOiB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBzZW5kZXJBZGRyZXNzXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRiaWQ6IHtcblx0XHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IEFtb3VudFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGltZToge1xuXHRcdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogY3VycmVudERhdGVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRhY3RpdmF0ZVdvcmtpbmdNb2RhbChcIlBsZWFzZSBjb25maXJtIGNyZWF0aW5nIEJpZC4uLlwiKVxuXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVCaWQodG9rZW5JZCwgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdCksIEpTT04uc3RyaW5naWZ5KHBhcnNlZCksIGV2ZW50SWQpO1xuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRcdGFjdGl2YXRlV29ya2luZ01vZGFsKFwiU3VjY2VzcyFcIilcblxuXHRcdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRhY3RpdmF0ZVdhcm5pbmdNb2RhbChgRXJyb3IhIFBsZWFzZSB0cnkgYWdhaW4hYCk7XG5cdFx0XHR2YXIgYWxlcnRFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtpbmdhbGVydFwiKTtcblx0XHRcdGFsZXJ0RUxNLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHRcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdGNlbnRlcmVkXG5cdFx0PlxuXHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIENyeXB0b3B1bmtcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPikgOiAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0PGRpdiBpZD0nYWxlcnQnIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJywgZm9udFNpemU6IFwiMzBweFwiIH19IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxuXHRcdFx0XHRcdFx0e0FsZXJ0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgaWQ9J3dvcmtpbmdhbGVydCcgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnLCBmb250U2l6ZTogXCIzMHB4XCIgfX0gY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiPlxuXHRcdFx0XHRcdFx0e0FsZXJ0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5CaWQgQW1vdW50IGluIENFTE8gRXVybyAoQ0VVUik8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7QW1vdW50SW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0PC9Nb2RhbD5cblxuXHQpO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjUxZDc0N2M5N2RjZTk5YjYwNjliXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsImZyb21XZWkiLCJVbml0cyIsIlVuaXQiLCJVc2VGb3JtSW5wdXQiLCJCaWRORlRNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJjb250cmFjdCIsInNlbmRlckFkZHJlc3MiLCJ0b2tlbklkIiwiZXZlbnRJZCIsInRvQWRkcmVzcyIsInR5cGUiLCJIaWdoZXN0YmlkIiwiQWxlcnQiLCJzZXRBbGVydCIsIldlYjMiLCJyZXF1aXJlIiwiQ29udHJhY3RLaXQiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJraXQiLCJuZXdLaXRGcm9tV2ViMyIsInBsYWNlaG9sZGVyIiwiQW1vdW50IiwiQW1vdW50SW5wdXQiLCJhY3RpdmF0ZVdhcm5pbmdNb2RhbCIsIlRleHRBbGVydCIsImFsZXJ0RUxNIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYWN0aXZhdGVXb3JraW5nTW9kYWwiLCJiaWRORlQiLCJpbnQiLCJkaXNwbGF5IiwiY29udHJhY3RzIiwiZ2V0U3RhYmxlVG9rZW4iLCJjRVVSdG9rZW4iLCJDRVVSaW5GdWxsIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJ1c2VHcm91cGluZyIsInRyYW5zZmVyIiwic2VuZCIsImZyb20iLCJnYXNQcmljZSIsImZlZUN1cnJlbmN5IiwiYWRkcmVzcyIsImNFVVJ0eCIsIndhaXRSZWNlaXB0IiwiY0VVUlJlY2VpcHQiLCJjb25zb2xlIiwibG9nIiwidG9rZW5VUkkiLCJ0b2tlblVyaSIsIkpTT04iLCJwYXJzZSIsInBhcnNlZCIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImNyZWF0ZWRPYmplY3QiLCJ0aXRsZSIsInByb3BlcnRpZXMiLCJ1c2VybmFtZSIsImRlc2NyaXB0aW9uIiwiYmlkIiwidGltZSIsImNyZWF0ZUJpZCIsInJlc3VsdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGljayIsImxvY2F0aW9uIiwicmVsb2FkIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9