"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/components/components/modals/ViewBidNFTModal.jsx":
/*!**************************************************************!*\
  !*** ./src/components/components/modals/ViewBidNFTModal.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ViewmodalShow; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/useContract */ "./services/useContract.js");
















function ViewmodalShow(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      id = _ref.id,
      title = _ref.title;

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_9__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  function addZero(num) {
    return num < 10 ? "0".concat(num) : num;
  }

  function AmPM(num) {
    return num < 12 ? 'AM' : 'PM';
  }

  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function fetchContractData() {
    return _fetchContractData.apply(this, arguments);
  }

  function _fetchContractData() {
    _fetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var value, arr, totalBids, i, obj, object, _context, _context2, _context3, _context4, _context5, _context6, pricedes1, BidId, Datetime, currentdate, element;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;

              if (!(contract && id)) {
                _context7.next = 43;
                break;
              }

              _context7.next = 4;
              return contract.tokenURI(id);

            case 4:
              value = _context7.sent;
              console.log(value);
              arr = [];
              _context7.next = 9;
              return contract.getBidsSearchToken(id);

            case 9:
              totalBids = _context7.sent;
              console.log(totalBids);
              i = 0;

            case 12:
              if (!(i < Number(10))) {
                _context7.next = 39;
                break;
              }

              _context7.next = 15;
              return totalBids[i];

            case 15:
              obj = _context7.sent;
              object = {};
              _context7.prev = 17;
              _context7.next = 20;
              return JSON.parse(obj);

            case 20:
              object = _context7.sent;
              _context7.next = 25;
              break;

            case 23:
              _context7.prev = 23;
              _context7.t0 = _context7["catch"](17);

            case 25:
              if (!object.title) {
                _context7.next = 36;
                break;
              }

              pricedes1 = 0;

              try {
                pricedes1 = formatter.format(Number(object.properties.bid.description * 0.9972));
              } catch (ex) {}

              _context7.t1 = Number;
              _context7.next = 31;
              return contract.getBidIdByUri(obj);

            case 31:
              _context7.t2 = _context7.sent;
              BidId = (0, _context7.t1)(_context7.t2);
              Datetime = new Date(object.properties.time.description);
              currentdate = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context4 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context5 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context6 = "".concat(addZero(Datetime.getDate()), "/")).call(_context6, addZero(Datetime.getMonth() + 1), "/")).call(_context5, addZero(Datetime.getFullYear()), " ")).call(_context4, addZero(Datetime.getHours()), ":")).call(_context3, addZero(Datetime.getMinutes()), ":")).call(_context2, addZero(Datetime.getSeconds()), " ")).call(_context, AmPM(Datetime.getHours()));
              arr.push({
                Id: BidId,
                name: object.properties.username.description,
                time: currentdate,
                bidprice: object.properties.bid.description,
                bidpriceusd: pricedes1
              });

            case 36:
              i++;
              _context7.next = 12;
              break;

            case 39:
              console.log(arr);
              setList(arr);
              if (document.getElementById("Loading")) document.getElementById("Loading").style = "display:none";

              if (document.getElementById("Loadingtable")) {
                element = document.getElementById("Loadingtable");
                element.style = "display:block";
                element.setAttribute("id", "");
              }

            case 43:
              _context7.next = 48;
              break;

            case 45:
              _context7.prev = 45;
              _context7.t3 = _context7["catch"](0);
              console.error(_context7.t3);

            case 48:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee, null, [[0, 45], [17, 23]]);
    }));
    return _fetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    fetchContractData();
  }, [contract]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: show,
    onHide: onHide,
    onShow: fetchContractData,
    "aria-labelledby": "contained-modal-title-vcenter",
    size: "xl",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "View Bid - ", title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    id: "Loadingtable",
    style: {
      display: 'none'
    },
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableHeaderContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableheaderDateContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h6", {
    className: "header"
  }, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableheaderUserContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h6", {
    className: "header"
  }, "User Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableheaderBidContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h6", {
    className: "header"
  }, "Bid")))), " ", _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      key: listItem.Id,
      className: "tableFullRowContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellDateContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h7", {
      className: "cell"
    }, listItem.time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellUserContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h7", {
      className: "cell"
    }, listItem.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellBidContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h7", {
      className: "cell"
    }, "$", listItem.bidpriceusd, " (", listItem.bidprice, " cUSD)")))));
  }))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "57e37610454cfdecc83c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmQyNTcyNDgxZjBjMWE0NWVkNzkwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSWUsU0FBU2EsYUFBVCxPQUtaO0FBQUEsTUFKRkMsSUFJRSxRQUpGQSxJQUlFO0FBQUEsTUFIRkMsTUFHRSxRQUhGQSxNQUdFO0FBQUEsTUFGRkMsRUFFRSxRQUZGQSxFQUVFO0FBQUEsTUFERkMsS0FDRSxRQURGQSxLQUNFOztBQUNGLHFCQUFvQ0wsaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUU0sUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUNBLE1BQU1DLE1BQU0sR0FBR2hCLHNEQUFTLEVBQXhCOztBQUNBLGtCQUF3QkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPbUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsV0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDckIsV0FBT0EsR0FBRyxHQUFHLEVBQU4sY0FBZUEsR0FBZixJQUF1QkEsR0FBOUI7QUFDQTs7QUFDRCxXQUFTQyxJQUFULENBQWNELEdBQWQsRUFBbUI7QUFDbEIsV0FBT0EsR0FBRyxHQUFHLEVBQU4sR0FBVyxJQUFYLEdBQWtCLElBQXpCO0FBQ0E7O0FBQ0QsTUFBTUUsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUNoREMsSUFBQUEscUJBQXFCLEVBQUUsQ0FEeUI7QUFFaERDLElBQUFBLHFCQUFxQixFQUFFO0FBRnlCLEdBQS9CLENBQWxCOztBQVhFLFdBZ0JhQyxpQkFoQmI7QUFBQTtBQUFBOztBQUFBO0FBQUEsa05BZ0JGO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxv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QztBQUE3RCxrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLGFBQVMsRUFBQztBQUFkLFlBREQsQ0FERCxlQUlDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxpQkFERCxDQUpELGVBT0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLGFBQVMsRUFBQztBQUFkLFdBREQsQ0FQRCxDQURELENBREQsT0FhUywwRkFBQXRELElBQUksTUFBSixDQUFBQSxJQUFJLEVBQUssVUFBQ3VELFFBQUQ7QUFBQSx3QkFDaEI7QUFBSyxTQUFHLEVBQUVBLFFBQVEsQ0FBQ1osRUFBbkI7QUFBdUIsZUFBUyxFQUFDO0FBQWpDLG9CQUNDO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDQztBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNDO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FBc0JZLFFBQVEsQ0FBQ3JCLElBQS9CLENBREQsQ0FERCxlQUlDO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0M7QUFBSSxlQUFTLEVBQUM7QUFBZCxPQUFzQnFCLFFBQVEsQ0FBQ1gsSUFBL0IsQ0FERCxDQUpELGVBT0M7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDQztBQUFJLGVBQVMsRUFBQztBQUFkLFlBQXVCVyxRQUFRLENBQUNSLFdBQWhDLFFBQStDUSxRQUFRLENBQUNULFFBQXhELFdBREQsQ0FQRCxDQURELENBREQsQ0FEZ0I7QUFBQSxHQUFMLENBYmIsQ0FERCxDQWRELENBREQ7QUFpREE7Ozs7Ozs7O1VDdklELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvVmlld0JpZE5GVE1vZGFsLmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IEltYWdlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9JbWFnZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld21vZGFsU2hvdyh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0aWQsXG5cdHRpdGxlXG59KSB7XG5cdGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuXHRmdW5jdGlvbiBhZGRaZXJvKG51bSkge1xuXHRcdHJldHVybiBudW0gPCAxMCA/IGAwJHtudW19YCA6IG51bTtcblx0fVxuXHRmdW5jdGlvbiBBbVBNKG51bSkge1xuXHRcdHJldHVybiBudW0gPCAxMiA/ICdBTScgOiAnUE0nO1xuXHR9XG5cdGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG5cdFx0bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuXHRcdG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcblx0fSk7XG5cblx0YXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChjb250cmFjdCAmJiBpZCkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGF3YWl0IGNvbnRyYWN0LnRva2VuVVJJKGlkKTtcblx0XHRcdFx0Y29uc29sZS5sb2codmFsdWUpO1xuXHRcdFx0XHRjb25zdCBhcnIgPSBbXTtcblx0XHRcdFx0Y29uc3QgdG90YWxCaWRzID0gYXdhaXQgY29udHJhY3QuZ2V0Qmlkc1NlYXJjaFRva2VuKGlkKTtcblx0XHRcdFx0Y29uc29sZS5sb2codG90YWxCaWRzKTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBOdW1iZXIoMTApOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBvYmogPSBhd2FpdCB0b3RhbEJpZHNbaV07XG5cdFx0XHRcdFx0Y29uc3Qgb2JqZWN0ID0ge307XG5cdFx0XHRcdFx0dHJ5IHsgb2JqZWN0ID0gYXdhaXQgSlNPTi5wYXJzZShvYmopIH0gY2F0Y2ggeyB9XG5cdFx0XHRcdFx0aWYgKG9iamVjdC50aXRsZSkge1xuXHRcdFx0XHRcdFx0dmFyIHByaWNlZGVzMSA9IDA7XG5cdFx0XHRcdFx0XHR0cnkgeyBwcmljZWRlczEgPSBmb3JtYXR0ZXIuZm9ybWF0KE51bWJlcihvYmplY3QucHJvcGVydGllcy5iaWQuZGVzY3JpcHRpb24gKiAwLjk5NzIpKSB9IGNhdGNoIChleCkgeyB9XG5cdFx0XHRcdFx0XHRjb25zdCBCaWRJZCA9IE51bWJlcihhd2FpdCBjb250cmFjdC5nZXRCaWRJZEJ5VXJpKG9iaikpO1xuXHRcdFx0XHRcdFx0Y29uc3QgRGF0ZXRpbWUgPSBuZXcgRGF0ZShvYmplY3QucHJvcGVydGllcy50aW1lLmRlc2NyaXB0aW9uKTtcblxuXHRcdFx0XHRcdFx0bGV0IGN1cnJlbnRkYXRlID0gYCR7YWRkWmVybyhEYXRldGltZS5nZXREYXRlKCkpfS8ke2FkZFplcm8oRGF0ZXRpbWUuZ2V0TW9udGgoKSArIDEpfS8ke2FkZFplcm8oRGF0ZXRpbWUuZ2V0RnVsbFllYXIoKSl9ICR7YWRkWmVybyhEYXRldGltZS5nZXRIb3VycygpKX06JHthZGRaZXJvKERhdGV0aW1lLmdldE1pbnV0ZXMoKSl9OiR7YWRkWmVybyhEYXRldGltZS5nZXRTZWNvbmRzKCkpfSAke0FtUE0oRGF0ZXRpbWUuZ2V0SG91cnMoKSl9YFxuXHRcdFx0XHRcdFx0YXJyLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRJZDogQmlkSWQsXG5cdFx0XHRcdFx0XHRcdG5hbWU6IG9iamVjdC5wcm9wZXJ0aWVzLnVzZXJuYW1lLmRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcdFx0XHR0aW1lOiBjdXJyZW50ZGF0ZSxcblx0XHRcdFx0XHRcdFx0YmlkcHJpY2U6IG9iamVjdC5wcm9wZXJ0aWVzLmJpZC5kZXNjcmlwdGlvbixcblx0XHRcdFx0XHRcdFx0YmlkcHJpY2V1c2Q6IHByaWNlZGVzMVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKGFycik7XG5cdFx0XHRcdHNldExpc3QoYXJyKTtcblx0XHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xuXHRcdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5ndGFibGVcIikpIHtcblx0XHRcdFx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ3RhYmxlXCIpO1xuXHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUgPSBcImRpc3BsYXk6YmxvY2tcIjtcblx0XHRcdFx0XHQoZWxlbWVudCkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHR9XG5cdH1cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaENvbnRyYWN0RGF0YSgpO1xuXG5cdH0sIFtjb250cmFjdF0pO1xuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRvblNob3c9e2ZldGNoQ29udHJhY3REYXRhfVxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0c2l6ZT1cInhsXCJcblx0XHRcdGNlbnRlcmVkXG5cdFx0PlxuXHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRWaWV3IEJpZCAtIHt0aXRsZX1cblx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PGRpdiBpZD0nTG9hZGluZ3RhYmxlJyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gY2xhc3NOYW1lPVwiXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlSGVhZGVyJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZUhlYWRlckNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZWhlYWRlckRhdGVDb250YWluZXInID5cblx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+RGF0ZTwvaDY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYmxlaGVhZGVyVXNlckNvbnRhaW5lclwiID5cblx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+VXNlciBOYW1lPC9oNj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFibGVoZWFkZXJCaWRDb250YWluZXJcIiA+XG5cdFx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cImhlYWRlclwiPkJpZDwvaDY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+IHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcblx0XHRcdFx0XHRcdDxkaXYga2V5PXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPSd0YWJsZUZ1bGxSb3dDb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFibGVSb3dDb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZVJvd0NlbGxDb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlUm93Q2VsbERhdGVDb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDcgY2xhc3NOYW1lPVwiY2VsbFwiPntsaXN0SXRlbS50aW1lfTwvaDc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZVJvd0NlbGxVc2VyQ29udGFpbmVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGg3IGNsYXNzTmFtZT1cImNlbGxcIj57bGlzdEl0ZW0ubmFtZX08L2g3PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93Q2VsbEJpZENvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDcgY2xhc3NOYW1lPVwiY2VsbFwiPiR7bGlzdEl0ZW0uYmlkcHJpY2V1c2R9ICh7bGlzdEl0ZW0uYmlkcHJpY2V9IGNVU0QpPC9oNz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PikpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHQ8L01vZGFsPlxuXHQpO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjU3ZTM3NjEwNDU0Y2ZkZWNjODNjXCI7IH0iXSwibmFtZXMiOlsiTW9kYWwiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiRm9ybSIsIkhlYWQiLCJSb3ciLCJMaW5rIiwiQ29sIiwiSW1hZ2UiLCJCdXR0b24iLCJ1c2VDb250cmFjdCIsIlZpZXdtb2RhbFNob3ciLCJzaG93Iiwib25IaWRlIiwiaWQiLCJ0aXRsZSIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsInJvdXRlciIsImxpc3QiLCJzZXRMaXN0IiwiYWRkWmVybyIsIm51bSIsIkFtUE0iLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiZmV0Y2hDb250cmFjdERhdGEiLCJ0b2tlblVSSSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImFyciIsImdldEJpZHNTZWFyY2hUb2tlbiIsInRvdGFsQmlkcyIsImkiLCJOdW1iZXIiLCJvYmoiLCJvYmplY3QiLCJKU09OIiwicGFyc2UiLCJwcmljZWRlczEiLCJmb3JtYXQiLCJwcm9wZXJ0aWVzIiwiYmlkIiwiZGVzY3JpcHRpb24iLCJleCIsImdldEJpZElkQnlVcmkiLCJCaWRJZCIsIkRhdGV0aW1lIiwiRGF0ZSIsInRpbWUiLCJjdXJyZW50ZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsInB1c2giLCJJZCIsIm5hbWUiLCJ1c2VybmFtZSIsImJpZHByaWNlIiwiYmlkcHJpY2V1c2QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJlbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZXJyb3IiLCJkaXNwbGF5IiwibGlzdEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9