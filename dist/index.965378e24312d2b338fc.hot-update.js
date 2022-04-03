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
                pricedes1 = formatter.format(Number(object.properties.bid.description * 1.10));
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
    }, "$", listItem.bidpriceusd, " (", listItem.bidprice, " cEUR)")))));
  }))));
}

/***/ }),

/***/ "./src/pages/donation/auction/index.jsx":
/*!**********************************************!*\
  !*** ./src/pages/donation/auction/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ViewNFT; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var _components_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/components/modals/BidNFTModal */ "./src/components/components/modals/BidNFTModal.jsx");
/* harmony import */ var _components_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/components/modals/ViewBidNFTModal */ "./src/components/components/modals/ViewBidNFTModal.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/useContract */ "./services/useContract.js");
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/layout/Header */ "./src/components/layout/Header/index.tsx");

















function ViewNFT(user) {
  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_10__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(-1),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      eventId = _useState2[0],
      setEventId = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      tokenName = _useState6[0],
      setTokenName = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      tokenSymbol = _useState8[0],
      setTokenSymbol = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      title = _useState10[0],
      setTitle = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      goalusd = _useState12[0],
      setgoalusd = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      goal = _useState14[0],
      setgoal = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      dateleft = _useState16[0],
      setdateleft = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState18 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
      date = _useState18[0],
      setdate = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState20 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState19, 2),
      dateleftBid = _useState20[0],
      setdateleftBid = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState22 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState21, 2),
      logo = _useState22[0],
      setlogo = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState24 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState23, 2),
      selectid = _useState24[0],
      setselectid = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState26 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState25, 2),
      selecttitle = _useState26[0],
      setselecttitle = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState28 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState27, 2),
      selectedAddress = _useState28[0],
      setselectedAddress = _useState28[1];

  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState30 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState29, 2),
      selecttype = _useState30[0],
      setselecttype = _useState30[1];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState32 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState31, 2),
      selectbid = _useState32[0],
      setselectbid = _useState32[1];

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState34 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState33, 2),
      eventuri = _useState34[0],
      setEventuri = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState36 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState35, 2),
      modalShow = _useState36[0],
      setModalShow = _useState36[1];

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState38 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState37, 2),
      ViewmodalShow = _useState38[0],
      setViewModalShow = _useState38[1];

  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function LeftDate(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds";
  }

  function LeftDateBid(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + "d " + h.toString() + "h " + m.toString() + "m " + s.toString() + "s";
  }

  var regex = /\[(.*)\]/g;
  var str = decodeURIComponent(window.location.search);
  var m;
  var id = "";

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    id = m[1];
  }

  function fetchContractData() {
    return _fetchContractData.apply(this, arguments);
  }

  function _fetchContractData() {
    _fetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var value, arr, totalTokens, i, obj, _object, pricedes1, TokenId, object;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(contract && id)) {
                _context.next = 59;
                break;
              }

              setEventId(id);
              _context.next = 5;
              return contract.eventURI(id);

            case 5:
              value = _context.sent;
              arr = [];
              _context.next = 9;
              return contract.gettokenSearchEventTotal(id);

            case 9:
              totalTokens = _context.sent;
              i = 0;

            case 11:
              if (!(i < Number(10))) {
                _context.next = 37;
                break;
              }

              _context.next = 14;
              return totalTokens[i];

            case 14:
              obj = _context.sent;
              _object = {};
              _context.prev = 16;
              _context.next = 19;
              return JSON.parse(obj);

            case 19:
              _object = _context.sent;
              _context.next = 24;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](16);

            case 24:
              if (!_object.title) {
                _context.next = 34;
                break;
              }

              pricedes1 = 0;

              try {
                pricedes1 = formatter.format(Number(_object.properties.price.description * 1.10));
              } catch (ex) {}

              _context.t1 = Number;
              _context.next = 30;
              return contract.gettokenIdByUri(obj);

            case 30:
              _context.t2 = _context.sent;
              TokenId = (0, _context.t1)(_context.t2);
              console.log(TokenId);
              arr.push({
                Id: TokenId,
                name: _object.properties.name.description,
                description: _object.properties.description.description,
                Bidprice: pricedes1,
                price: Number(_object.properties.price.description),
                type: _object.properties.typeimg.description,
                image: _object.properties.image.description
              });

            case 34:
              i++;
              _context.next = 11;
              break;

            case 37:
              setList(arr);
              if (document.getElementById("Loading")) document.getElementById("Loading").style = "display:none";
              setEventuri(value);
              object = JSON.parse(value);
              setTitle(object.properties.Title.description);
              setselectedAddress(object.properties.wallet.description);
              setgoalusd(formatter.format(Number(object.properties.Goal.description * 1.10)));
              setgoal(Number(object.properties.Goal.description));
              setdateleft(LeftDate(object.properties.Date.description));
              setdate(object.properties.Date.description);
              setdateleftBid(LeftDateBid(object.properties.Date.description));
              setlogo(object.properties.logo.description);
              _context.t3 = setTokenName;
              _context.next = 52;
              return contract.name();

            case 52:
              _context.t4 = _context.sent;
              (0, _context.t3)(_context.t4);
              _context.t5 = setTokenSymbol;
              _context.next = 57;
              return contract.symbol();

            case 57:
              _context.t6 = _context.sent;
              (0, _context.t5)(_context.t6);

            case 59:
              _context.next = 64;
              break;

            case 61:
              _context.prev = 61;
              _context.t7 = _context["catch"](0);
              console.error(_context.t7);

            case 64:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 61], [16, 22]]);
    }));
    return _fetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    fetchContractData();
  }, [id, contract]);
  setInterval(function () {
    calculateTimeLeft();
  }, 1000);

  function calculateTimeLeft() {
    try {
      var allDates = document.getElementsByName("dateleft");

      for (var i = 0; i < allDates.length; i++) {
        var date = allDates[i].getAttribute("date");
        allDates[i].innerHTML = LeftDate(date);
      }

      var allDates = document.getElementsByName("date");

      for (var _i = 0; _i < allDates.length; _i++) {
        var date = allDates[_i].getAttribute("date");

        allDates[_i].innerHTML = LeftDateBid(date);
      }
    } catch (error) {}
  }

  function activateViewBidModal(e) {
    setselectid(e.target.getAttribute("tokenid"));
    setselecttitle(e.target.getAttribute("title"));
    setViewModalShow(true);
  }

  function activateBidNFTModal(e) {
    setselectid(e.target.getAttribute("tokenid"));
    setselectbid(e.target.getAttribute("highestbid"));
    console.log(selectbid);
    setselecttype("NFT");
    setModalShow(true);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(next_head__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("meta", {
    name: "description",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_layout_Header__WEBPACK_IMPORTED_MODULE_11__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "row EventContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      padding: '7px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
    src: logo,
    className: "AuctionImage"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "DetialsContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h6", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", null, "Goal: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", null, "$ ", goalusd, " (", goal, " cEUR)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", {
    name: "dateleft",
    date: date
  }, dateleft))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    id: "Loading",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h1", null, "Loading...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      padding: "2%",
      height: "100%",
      overflow: "auto"
    }
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      key: listItem.Id,
      className: "row ElementsContainer bgWhite"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        height: '32vw'
      }
    }, listItem.type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage pixel"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        height: '100%',
        padding: '5px 0px',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "DetialsContainer",
      style: {
        rowGap: "5px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h6", {
      style: {
        margin: '0'
      }
    }, listItem.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", {
      style: {
        color: "rgb(139, 139, 139)"
      }
    }, "Type: ", listItem.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "TextContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", {
      style: {
        color: "#8B8B8B"
      }
    }, listItem.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "ElementBottomContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", {
      className: "smallgrey"
    }, "Current bid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h6", {
      className: "bidprice"
    }, "$ ", listItem.Bidprice, " (", listItem.price, " cEUR)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", {
      name: "date",
      date: date,
      className: "smallgrey"
    }, dateleftBid)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "BidAllcontainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "Bidsbutton"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      tokenid: listItem.Id,
      title: listItem.name,
      onClick: activateViewBidModal,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      tokenid: listItem.Id,
      title: listItem.name,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      tokenid: listItem.Id,
      title: listItem.name,
      className: "card-body bidbuttonText"
    }, "View"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      tokenid: listItem.Id,
      highestbid: listItem.price,
      onClick: activateBidNFTModal,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      tokenid: listItem.Id,
      highestbid: listItem.price,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      tokenid: listItem.Id,
      highestbid: listItem.price,
      className: "card-body bidbuttonText"
    }, "Bid")))))))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: modalShow,
    onHide: function onHide() {
      setModalShow(false); // This is a poor implementation, better to implement an event listener

      fetchContractData();
    },
    contract: contract,
    tokenId: selectid,
    senderAddress: signerAddress,
    toAddress: selectedAddress,
    type: selecttype,
    eventId: eventId,
    Highestbid: selectbid
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: ViewmodalShow,
    onHide: function onHide() {
      setViewModalShow(false); // This is a poor implementation, better to implement an event listener

      fetchContractData();
    },
    id: selectid,
    title: selecttitle
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a168a061302524c19bd6"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4Ljk2NTM3OGUyNDMxMmQyYjMzOGZjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSWUsU0FBU2EsYUFBVCxPQUtaO0FBQUEsTUFKRkMsSUFJRSxRQUpGQSxJQUlFO0FBQUEsTUFIRkMsTUFHRSxRQUhGQSxNQUdFO0FBQUEsTUFGRkMsRUFFRSxRQUZGQSxFQUVFO0FBQUEsTUFERkMsS0FDRSxRQURGQSxLQUNFOztBQUNGLHFCQUFvQ0wsaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUU0sUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUNBLE1BQU1DLE1BQU0sR0FBR2hCLHNEQUFTLEVBQXhCOztBQUNBLGtCQUF3QkYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPbUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsV0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDckIsV0FBT0EsR0FBRyxHQUFHLEVBQU4sY0FBZUEsR0FBZixJQUF1QkEsR0FBOUI7QUFDQTs7QUFDRCxXQUFTQyxJQUFULENBQWNELEdBQWQsRUFBbUI7QUFDbEIsV0FBT0EsR0FBRyxHQUFHLEVBQU4sR0FBVyxJQUFYLEdBQWtCLElBQXpCO0FBQ0E7O0FBQ0QsTUFBTUUsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUNoREMsSUFBQUEscUJBQXFCLEVBQUUsQ0FEeUI7QUFFaERDLElBQUFBLHFCQUFxQixFQUFFO0FBRnlCLEdBQS9CLENBQWxCOztBQVhFLFdBZ0JhQyxpQkFoQmI7QUFBQTtBQUFBOztBQUFBO0FBQUEsa05BZ0JGO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFFTWIsUUFBUSxJQUFJRixFQUZsQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUd1QkUsUUFBUSxDQUFDYyxRQUFULENBQWtCaEIsRUFBbEIsQ0FIdkI7O0FBQUE7QUFHU2lCLGNBQUFBLEtBSFQ7QUFJR0MsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDTUcsY0FBQUEsR0FMVCxHQUtlLEVBTGY7QUFBQTtBQUFBLHFCQU0yQmxCLFFBQVEsQ0FBQ21CLGtCQUFULENBQTRCckIsRUFBNUIsQ0FOM0I7O0FBQUE7QUFNU3NCLGNBQUFBLFNBTlQ7QUFPR0osY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlHLFNBQVo7QUFDU0MsY0FBQUEsQ0FSWixHQVFnQixDQVJoQjs7QUFBQTtBQUFBLG9CQVFtQkEsQ0FBQyxHQUFHQyxNQUFNLENBQUMsRUFBRCxDQVI3QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQVNzQkYsU0FBUyxDQUFDQyxDQUFELENBVC9COztBQUFBO0FBU1VFLGNBQUFBLEdBVFY7QUFVVUMsY0FBQUEsTUFWVixHQVVtQixFQVZuQjtBQUFBO0FBQUE7QUFBQSxxQkFXeUJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxHQUFYLENBWHpCOztBQUFBO0FBV1VDLGNBQUFBLE1BWFY7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQVlRQSxNQUFNLENBQUN6QixLQVpmO0FBQUE7QUFBQTtBQUFBOztBQWFTNEIsY0FBQUEsU0FiVCxHQWFxQixDQWJyQjs7QUFjSyxrQkFBSTtBQUFFQSxnQkFBQUEsU0FBUyxHQUFHbkIsU0FBUyxDQUFDb0IsTUFBVixDQUFpQk4sTUFBTSxDQUFDRSxNQUFNLENBQUNLLFVBQVAsQ0FBa0JDLEdBQWxCLENBQXNCQyxXQUF0QixHQUFvQyxJQUFyQyxDQUF2QixDQUFaO0FBQWdGLGVBQXRGLENBQXVGLE9BQU9DLEVBQVAsRUFBVyxDQUFHOztBQWQxRyw2QkFlbUJWLE1BZm5CO0FBQUE7QUFBQSxxQkFlZ0N0QixRQUFRLENBQUNpQyxhQUFULENBQXVCVixHQUF2QixDQWZoQzs7QUFBQTtBQUFBO0FBZVdXLGNBQUFBLEtBZlg7QUFnQldDLGNBQUFBLFFBaEJYLEdBZ0JzQixJQUFJQyxJQUFKLENBQVNaLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQlEsSUFBbEIsQ0FBdUJOLFdBQWhDLENBaEJ0QjtBQWtCU08sY0FBQUEsV0FsQlQsa29CQWtCMEJqQyxPQUFPLENBQUM4QixRQUFRLENBQUNJLE9BQVQsRUFBRCxDQWxCakMsd0JBa0J5RGxDLE9BQU8sQ0FBQzhCLFFBQVEsQ0FBQ0ssUUFBVCxLQUFzQixDQUF2QixDQWxCaEUsd0JBa0I2Rm5DLE9BQU8sQ0FBQzhCLFFBQVEsQ0FBQ00sV0FBVCxFQUFELENBbEJwRyx3QkFrQmdJcEMsT0FBTyxDQUFDOEIsUUFBUSxDQUFDTyxRQUFULEVBQUQsQ0FsQnZJLHdCQWtCZ0tyQyxPQUFPLENBQUM4QixRQUFRLENBQUNRLFVBQVQsRUFBRCxDQWxCdkssd0JBa0JrTXRDLE9BQU8sQ0FBQzhCLFFBQVEsQ0FBQ1MsVUFBVCxFQUFELENBbEJ6TSx1QkFrQm9PckMsSUFBSSxDQUFDNEIsUUFBUSxDQUFDTyxRQUFULEVBQUQsQ0FsQnhPO0FBbUJLeEIsY0FBQUEsR0FBRyxDQUFDMkIsSUFBSixDQUFTO0FBQ1JDLGdCQUFBQSxFQUFFLEVBQUVaLEtBREk7QUFFUmEsZ0JBQUFBLElBQUksRUFBRXZCLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQm1CLFFBQWxCLENBQTJCakIsV0FGekI7QUFHUk0sZ0JBQUFBLElBQUksRUFBRUMsV0FIRTtBQUlSVyxnQkFBQUEsUUFBUSxFQUFFekIsTUFBTSxDQUFDSyxVQUFQLENBQWtCQyxHQUFsQixDQUFzQkMsV0FKeEI7QUFLUm1CLGdCQUFBQSxXQUFXLEVBQUV2QjtBQUxMLGVBQVQ7O0FBbkJMO0FBUW1DTixjQUFBQSxDQUFDLEVBUnBDO0FBQUE7QUFBQTs7QUFBQTtBQTRCR0wsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVo7QUFDQWQsY0FBQUEsT0FBTyxDQUFDYyxHQUFELENBQVA7QUFDQSxrQkFBSWlDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFKLEVBQ0NELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsS0FBbkMsR0FBMkMsY0FBM0M7O0FBQ0Qsa0JBQUlGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFKLEVBQTZDO0FBQ3hDRSxnQkFBQUEsT0FEd0MsR0FDOUJILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUQ4QjtBQUU1Q0UsZ0JBQUFBLE9BQU8sQ0FBQ0QsS0FBUixHQUFnQixlQUFoQjtBQUNDQyxnQkFBQUEsT0FBRCxDQUFVQyxZQUFWLENBQXVCLElBQXZCLEVBQTZCLEVBQTdCO0FBQ0E7O0FBcENKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF3Q0V2QyxjQUFBQSxPQUFPLENBQUN3QyxLQUFSOztBQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWhCRTtBQUFBO0FBQUE7O0FBMkRGdkUsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2Y0QixJQUFBQSxpQkFBaUI7QUFFakIsR0FIUSxFQUdOLENBQUNiLFFBQUQsQ0FITSxDQUFUO0FBS0Esc0JBQ0MsaURBQUMsOERBQUQ7QUFDQyxRQUFJLEVBQUVKLElBRFA7QUFFQyxVQUFNLEVBQUVDLE1BRlQ7QUFHQyxVQUFNLEVBQUVnQixpQkFIVDtBQUlDLHVCQUFnQiwrQkFKakI7QUFLQyxRQUFJLEVBQUMsSUFMTjtBQU1DLFlBQVE7QUFOVCxrQkFRQyxpREFBQyxxRUFBRDtBQUFjLGVBQVc7QUFBekIsa0JBQ0MsaURBQUMsb0VBQUQ7QUFBYSxNQUFFLEVBQUM7QUFBaEIsb0JBQ2FkLEtBRGIsQ0FERCxDQVJELGVBY0MsaURBQUMsbUVBQUQ7QUFBWSxhQUFTLEVBQUM7QUFBdEIsa0JBQ0M7QUFBSyxNQUFFLEVBQUMsY0FBUjtBQUF1QixTQUFLLEVBQUU7QUFBRTBELE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQTlCO0FBQW1ELGFBQVMsRUFBQztBQUE3RCxrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLGFBQVMsRUFBQztBQUFkLFlBREQsQ0FERCxlQUlDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxpQkFERCxDQUpELGVBT0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLGFBQVMsRUFBQztBQUFkLFdBREQsQ0FQRCxDQURELENBREQsT0FhUywwRkFBQXRELElBQUksTUFBSixDQUFBQSxJQUFJLEVBQUssVUFBQ3VELFFBQUQ7QUFBQSx3QkFDaEI7QUFBSyxTQUFHLEVBQUVBLFFBQVEsQ0FBQ1osRUFBbkI7QUFBdUIsZUFBUyxFQUFDO0FBQWpDLG9CQUNDO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDQztBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNDO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FBc0JZLFFBQVEsQ0FBQ3JCLElBQS9CLENBREQsQ0FERCxlQUlDO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0M7QUFBSSxlQUFTLEVBQUM7QUFBZCxPQUFzQnFCLFFBQVEsQ0FBQ1gsSUFBL0IsQ0FERCxDQUpELGVBT0M7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDQztBQUFJLGVBQVMsRUFBQztBQUFkLFlBQXVCVyxRQUFRLENBQUNSLFdBQWhDLFFBQStDUSxRQUFRLENBQUNULFFBQXhELFdBREQsQ0FQRCxDQURELENBREQsQ0FEZ0I7QUFBQSxHQUFMLENBYmIsQ0FERCxDQWRELENBREQ7QUFpREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdklEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU2EsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDbEMscUJBQW9DckUsa0VBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUU0sUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUNBLE1BQU1DLE1BQU0sR0FBR2hCLHNEQUFTLEVBQXhCOztBQUNBLGtCQUE4QkYsK0NBQVEsQ0FBQyxDQUFDLENBQUYsQ0FBdEM7QUFBQTtBQUFBLE1BQU9nRixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUF3QmpGLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBO0FBQUEsTUFBT21CLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFrQ3BCLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBO0FBQUEsTUFBT2tGLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQXNDbkYsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPb0YsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBMEJyRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQTtBQUFBLE1BQU9lLEtBQVA7QUFBQSxNQUFjdUUsUUFBZDs7QUFDQSxvQkFBOEJ0RiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU91RixPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG9CQUF3QnhGLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBO0FBQUEsTUFBT3lGLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG9CQUFnQzFGLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBO0FBQUEsTUFBTzJGLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0Esb0JBQXdCNUYsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPNkYsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0Esb0JBQXNDOUYsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPK0YsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxvQkFBd0JoRywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9pRyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxvQkFBZ0NsRywrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQTtBQUFBLE1BQU9tRyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG9CQUFzQ3BHLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBO0FBQUEsTUFBT3FHLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0Esb0JBQThDdEcsK0NBQVEsQ0FBQyxFQUFELENBQXREO0FBQUE7QUFBQSxNQUFPdUcsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0Esb0JBQW9DeEcsK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUE7QUFBQSxNQUFPeUcsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxvQkFBa0MxRywrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU8yRyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLG9CQUFnQzVHLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBO0FBQUEsTUFBTzZHLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0Esb0JBQWtDOUcsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBQUE7QUFBQSxNQUFPK0csU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxvQkFBMENoSCwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFBQTtBQUFBLE1BQU9XLGFBQVA7QUFBQSxNQUFzQnNHLGdCQUF0Qjs7QUFFQSxNQUFNekYsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUM3Q0MsSUFBQUEscUJBQXFCLEVBQUUsQ0FEc0I7QUFFN0NDLElBQUFBLHFCQUFxQixFQUFFO0FBRnNCLEdBQS9CLENBQWxCOztBQUtBLFdBQVNzRixRQUFULENBQWtCQyxRQUFsQixFQUE0QjtBQUN4QixRQUFJQyxDQUFDLEdBQUcsSUFBSWhFLElBQUosQ0FBUytELFFBQVQsRUFBbUJFLE9BQW5CLEVBQVI7QUFDQSxRQUFJQyxDQUFDLEdBQUcsSUFBSWxFLElBQUosR0FBV2lFLE9BQVgsRUFBUjtBQUNBLFFBQUlFLENBQUMsR0FBR0gsQ0FBQyxHQUFHRSxDQUFaO0FBQ0EsUUFBSUUsRUFBRSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsQ0FBQyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBWixDQUFUO0FBQ0EsUUFBSUksQ0FBQyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBWUgsQ0FBQyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBRixJQUErQixPQUFPLEVBQVAsR0FBWSxFQUEzQyxDQUFYLENBQVI7QUFDQSxRQUFJSyxDQUFDLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxDQUFDLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBRixJQUEwQixPQUFPLEVBQWpDLENBQVgsQ0FBUjtBQUNBLFFBQUlNLENBQUMsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVlILENBQUMsSUFBSSxPQUFPLEVBQVgsQ0FBRixHQUFvQixJQUEvQixDQUFSO0FBQ0EsV0FBUUMsRUFBRSxDQUFDTSxRQUFILEtBQWdCLFFBQWhCLEdBQTJCSCxDQUFDLENBQUNHLFFBQUYsRUFBM0IsR0FBMEMsU0FBMUMsR0FBc0RGLENBQUMsQ0FBQ0UsUUFBRixFQUF0RCxHQUFxRSxXQUFyRSxHQUFtRkQsQ0FBQyxDQUFDQyxRQUFGLEVBQW5GLEdBQWtHLFVBQTFHO0FBQ0g7O0FBQ0QsV0FBU0MsV0FBVCxDQUFxQlosUUFBckIsRUFBK0I7QUFDM0IsUUFBSUMsQ0FBQyxHQUFHLElBQUloRSxJQUFKLENBQVMrRCxRQUFULEVBQW1CRSxPQUFuQixFQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLElBQUlsRSxJQUFKLEdBQVdpRSxPQUFYLEVBQVI7QUFDQSxRQUFJRSxDQUFDLEdBQUdILENBQUMsR0FBR0UsQ0FBWjtBQUNBLFFBQUlFLEVBQUUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQVosQ0FBVDtBQUNBLFFBQUlJLENBQUMsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVlILENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQUYsSUFBK0IsT0FBTyxFQUFQLEdBQVksRUFBM0MsQ0FBWCxDQUFSO0FBQ0EsUUFBSUssQ0FBQyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBWUgsQ0FBQyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQUYsSUFBMEIsT0FBTyxFQUFqQyxDQUFYLENBQVI7QUFDQSxRQUFJTSxDQUFDLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxDQUFDLElBQUksT0FBTyxFQUFYLENBQUYsR0FBb0IsSUFBL0IsQ0FBUjtBQUNBLFdBQVFDLEVBQUUsQ0FBQ00sUUFBSCxLQUFnQixJQUFoQixHQUF1QkgsQ0FBQyxDQUFDRyxRQUFGLEVBQXZCLEdBQXNDLElBQXRDLEdBQTZDRixDQUFDLENBQUNFLFFBQUYsRUFBN0MsR0FBNEQsSUFBNUQsR0FBbUVELENBQUMsQ0FBQ0MsUUFBRixFQUFuRSxHQUFrRixHQUExRjtBQUNIOztBQUNELE1BQU1FLEtBQUssR0FBRyxXQUFkO0FBQ0EsTUFBTUMsR0FBRyxHQUFHQyxrQkFBa0IsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFqQixDQUE5QjtBQUNBLE1BQUlULENBQUo7QUFDQSxNQUFJOUcsRUFBRSxHQUFHLEVBQVQ7O0FBQ0EsU0FBTyxDQUFDOEcsQ0FBQyxHQUFHSSxLQUFLLENBQUNNLElBQU4sQ0FBV0wsR0FBWCxDQUFMLE1BQTBCLElBQWpDLEVBQXVDO0FBQ25DO0FBQ0EsUUFBSUwsQ0FBQyxDQUFDVyxLQUFGLEtBQVlQLEtBQUssQ0FBQ1EsU0FBdEIsRUFBaUM7QUFDN0JSLE1BQUFBLEtBQUssQ0FBQ1EsU0FBTjtBQUNIOztBQUNEMUgsSUFBQUEsRUFBRSxHQUFHOEcsQ0FBQyxDQUFDLENBQUQsQ0FBTjtBQUNIOztBQTNEaUMsV0E2RG5CL0YsaUJBN0RtQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxrTkE2RGxDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFFWWIsUUFBUSxJQUFJRixFQUZ4QjtBQUFBO0FBQUE7QUFBQTs7QUFHWW1FLGNBQUFBLFVBQVUsQ0FBQ25FLEVBQUQsQ0FBVjtBQUhaO0FBQUEscUJBSWdDRSxRQUFRLENBQUN5SCxRQUFULENBQWtCM0gsRUFBbEIsQ0FKaEM7O0FBQUE7QUFJa0JpQixjQUFBQSxLQUpsQjtBQUtrQkcsY0FBQUEsR0FMbEIsR0FLd0IsRUFMeEI7QUFBQTtBQUFBLHFCQU1zQ2xCLFFBQVEsQ0FBQzBILHdCQUFULENBQWtDNUgsRUFBbEMsQ0FOdEM7O0FBQUE7QUFNa0I2SCxjQUFBQSxXQU5sQjtBQU9xQnRHLGNBQUFBLENBUHJCLEdBT3lCLENBUHpCOztBQUFBO0FBQUEsb0JBTzRCQSxDQUFDLEdBQUdDLE1BQU0sQ0FBQyxFQUFELENBUHRDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBUWtDcUcsV0FBVyxDQUFDdEcsQ0FBRCxDQVI3Qzs7QUFBQTtBQVFzQkUsY0FBQUEsR0FSdEI7QUFVc0JDLGNBQUFBLE9BVnRCLEdBVStCLEVBVi9CO0FBQUE7QUFBQTtBQUFBLHFCQVdxQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEdBQVgsQ0FYckM7O0FBQUE7QUFXc0JDLGNBQUFBLE9BWHRCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFZb0JBLE9BQU0sQ0FBQ3pCLEtBWjNCO0FBQUE7QUFBQTtBQUFBOztBQWF3QjRCLGNBQUFBLFNBYnhCLEdBYW9DLENBYnBDOztBQWNvQixrQkFBSTtBQUFFQSxnQkFBQUEsU0FBUyxHQUFHbkIsU0FBUyxDQUFDb0IsTUFBVixDQUFpQk4sTUFBTSxDQUFDRSxPQUFNLENBQUNLLFVBQVAsQ0FBa0IrRixLQUFsQixDQUF3QjdGLFdBQXhCLEdBQXNDLElBQXZDLENBQXZCLENBQVo7QUFBa0YsZUFBeEYsQ0FBeUYsT0FBT0MsRUFBUCxFQUFXLENBQUc7O0FBZDNILDRCQWVvQ1YsTUFmcEM7QUFBQTtBQUFBLHFCQWVpRHRCLFFBQVEsQ0FBQzZILGVBQVQsQ0FBeUJ0RyxHQUF6QixDQWZqRDs7QUFBQTtBQUFBO0FBZTBCdUcsY0FBQUEsT0FmMUI7QUFnQm9COUcsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk2RyxPQUFaO0FBQ0E1RyxjQUFBQSxHQUFHLENBQUMyQixJQUFKLENBQVM7QUFDTEMsZ0JBQUFBLEVBQUUsRUFBRWdGLE9BREM7QUFFTC9FLGdCQUFBQSxJQUFJLEVBQUV2QixPQUFNLENBQUNLLFVBQVAsQ0FBa0JrQixJQUFsQixDQUF1QmhCLFdBRnhCO0FBR0xBLGdCQUFBQSxXQUFXLEVBQUVQLE9BQU0sQ0FBQ0ssVUFBUCxDQUFrQkUsV0FBbEIsQ0FBOEJBLFdBSHRDO0FBSUxnRyxnQkFBQUEsUUFBUSxFQUFFcEcsU0FKTDtBQUtMaUcsZ0JBQUFBLEtBQUssRUFBRXRHLE1BQU0sQ0FBQ0UsT0FBTSxDQUFDSyxVQUFQLENBQWtCK0YsS0FBbEIsQ0FBd0I3RixXQUF6QixDQUxSO0FBTUxpRyxnQkFBQUEsSUFBSSxFQUFFeEcsT0FBTSxDQUFDSyxVQUFQLENBQWtCb0csT0FBbEIsQ0FBMEJsRyxXQU4zQjtBQU9MbUcsZ0JBQUFBLEtBQUssRUFBRTFHLE9BQU0sQ0FBQ0ssVUFBUCxDQUFrQnFHLEtBQWxCLENBQXdCbkc7QUFQMUIsZUFBVDs7QUFqQnBCO0FBTzRDVixjQUFBQSxDQUFDLEVBUDdDO0FBQUE7QUFBQTs7QUFBQTtBQThCWWpCLGNBQUFBLE9BQU8sQ0FBQ2MsR0FBRCxDQUFQO0FBQ0Esa0JBQUlpQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBSixFQUNJRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLEtBQW5DLEdBQTJDLGNBQTNDO0FBR0p5QyxjQUFBQSxXQUFXLENBQUMvRSxLQUFELENBQVg7QUFFTVMsY0FBQUEsTUFyQ2xCLEdBcUMyQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdYLEtBQVgsQ0FyQzNCO0FBc0NZdUQsY0FBQUEsUUFBUSxDQUFDOUMsTUFBTSxDQUFDSyxVQUFQLENBQWtCc0csS0FBbEIsQ0FBd0JwRyxXQUF6QixDQUFSO0FBQ0F5RCxjQUFBQSxrQkFBa0IsQ0FBQ2hFLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQnVHLE1BQWxCLENBQXlCckcsV0FBMUIsQ0FBbEI7QUFDQXlDLGNBQUFBLFVBQVUsQ0FBQ2hFLFNBQVMsQ0FBQ29CLE1BQVYsQ0FBaUJOLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDSyxVQUFQLENBQWtCd0csSUFBbEIsQ0FBdUJ0RyxXQUF2QixHQUFxQyxJQUF0QyxDQUF2QixDQUFELENBQVY7QUFDQTJDLGNBQUFBLE9BQU8sQ0FBQ3BELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDSyxVQUFQLENBQWtCd0csSUFBbEIsQ0FBdUJ0RyxXQUF4QixDQUFQLENBQVA7QUFDQTZDLGNBQUFBLFdBQVcsQ0FBQ3NCLFFBQVEsQ0FBQzFFLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQk8sSUFBbEIsQ0FBdUJMLFdBQXhCLENBQVQsQ0FBWDtBQUNBK0MsY0FBQUEsT0FBTyxDQUFDdEQsTUFBTSxDQUFDSyxVQUFQLENBQWtCTyxJQUFsQixDQUF1QkwsV0FBeEIsQ0FBUDtBQUNBaUQsY0FBQUEsY0FBYyxDQUFDK0IsV0FBVyxDQUFDdkYsTUFBTSxDQUFDSyxVQUFQLENBQWtCTyxJQUFsQixDQUF1QkwsV0FBeEIsQ0FBWixDQUFkO0FBQ0FtRCxjQUFBQSxPQUFPLENBQUMxRCxNQUFNLENBQUNLLFVBQVAsQ0FBa0JvRCxJQUFsQixDQUF1QmxELFdBQXhCLENBQVA7QUE3Q1osNEJBOENZb0MsWUE5Q1o7QUFBQTtBQUFBLHFCQThDK0JuRSxRQUFRLENBQUMrQyxJQUFULEVBOUMvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkErQ1lzQixjQS9DWjtBQUFBO0FBQUEscUJBK0NpQ3JFLFFBQVEsQ0FBQ3NJLE1BQVQsRUEvQ2pDOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbURRdEgsY0FBQUEsT0FBTyxDQUFDd0MsS0FBUjs7QUFuRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E3RGtDO0FBQUE7QUFBQTs7QUFtSGxDdkUsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1o0QixJQUFBQSxpQkFBaUI7QUFFcEIsR0FIUSxFQUdOLENBQUNmLEVBQUQsRUFBS0UsUUFBTCxDQUhNLENBQVQ7QUFLQXVJLEVBQUFBLFdBQVcsQ0FBQyxZQUFZO0FBQ3BCQyxJQUFBQSxpQkFBaUI7QUFDcEIsR0FGVSxFQUVSLElBRlEsQ0FBWDs7QUFLQSxXQUFTQSxpQkFBVCxHQUE2QjtBQUN6QixRQUFJO0FBQ0EsVUFBSUMsUUFBUSxHQUFHdEYsUUFBUSxDQUFDdUYsaUJBQVQsQ0FBMkIsVUFBM0IsQ0FBZjs7QUFDQSxXQUFLLElBQUlySCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHb0gsUUFBUSxDQUFDRSxNQUE3QixFQUFxQ3RILENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsWUFBSXdELElBQUksR0FBSTRELFFBQVEsQ0FBQ3BILENBQUQsQ0FBVCxDQUFjdUgsWUFBZCxDQUEyQixNQUEzQixDQUFYO0FBQ0FILFFBQUFBLFFBQVEsQ0FBQ3BILENBQUQsQ0FBUixDQUFZd0gsU0FBWixHQUF3QjNDLFFBQVEsQ0FBQ3JCLElBQUQsQ0FBaEM7QUFDSDs7QUFDRCxVQUFJNEQsUUFBUSxHQUFHdEYsUUFBUSxDQUFDdUYsaUJBQVQsQ0FBMkIsTUFBM0IsQ0FBZjs7QUFDQSxXQUFLLElBQUlySCxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHb0gsUUFBUSxDQUFDRSxNQUE3QixFQUFxQ3RILEVBQUMsRUFBdEMsRUFBMEM7QUFDdEMsWUFBSXdELElBQUksR0FBSTRELFFBQVEsQ0FBQ3BILEVBQUQsQ0FBVCxDQUFjdUgsWUFBZCxDQUEyQixNQUEzQixDQUFYOztBQUNBSCxRQUFBQSxRQUFRLENBQUNwSCxFQUFELENBQVIsQ0FBWXdILFNBQVosR0FBd0I5QixXQUFXLENBQUNsQyxJQUFELENBQW5DO0FBQ0g7QUFDSixLQVhELENBV0UsT0FBT3JCLEtBQVAsRUFBYyxDQUVmO0FBRUo7O0FBRUQsV0FBU3NGLG9CQUFULENBQThCQyxDQUE5QixFQUFpQztBQUM3QjNELElBQUFBLFdBQVcsQ0FBQzJELENBQUMsQ0FBQ0MsTUFBRixDQUFTSixZQUFULENBQXNCLFNBQXRCLENBQUQsQ0FBWDtBQUNBdEQsSUFBQUEsY0FBYyxDQUFDeUQsQ0FBQyxDQUFDQyxNQUFGLENBQVNKLFlBQVQsQ0FBc0IsT0FBdEIsQ0FBRCxDQUFkO0FBRUEzQyxJQUFBQSxnQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0g7O0FBRUQsV0FBU2dELG1CQUFULENBQTZCRixDQUE3QixFQUFnQztBQUM1QjNELElBQUFBLFdBQVcsQ0FBQzJELENBQUMsQ0FBQ0MsTUFBRixDQUFTSixZQUFULENBQXNCLFNBQXRCLENBQUQsQ0FBWDtBQUNBaEQsSUFBQUEsWUFBWSxDQUFDbUQsQ0FBQyxDQUFDQyxNQUFGLENBQVNKLFlBQVQsQ0FBc0IsWUFBdEIsQ0FBRCxDQUFaO0FBQ0E1SCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTBFLFNBQVo7QUFDQUQsSUFBQUEsYUFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBTSxJQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0g7O0FBQ0Qsc0JBQ0ksaUhBQ0ksaURBQUMsaURBQUQscUJBQ0ksZ0VBQVFqRyxLQUFSLENBREosZUFFSTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBRUE7QUFBbEMsSUFGSixlQUdJO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDO0FBQXRCLElBSEosQ0FESixlQU1JLGlEQUFDLDhEQUFELE9BTkosZUFPSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUMwRCxNQUFBQSxPQUFPLEVBQUUsTUFBVjtBQUFpQnlGLE1BQUFBLEtBQUssRUFBRSxNQUF4QjtBQUErQkMsTUFBQUEsTUFBTSxFQUFFLE1BQXZDO0FBQThDQyxNQUFBQSxVQUFVLEVBQUUsUUFBMUQ7QUFBbUVDLE1BQUFBLE9BQU8sRUFBRTtBQUE1RTtBQUFaLGtCQUNJO0FBQUssT0FBRyxFQUFFcEUsSUFBVjtBQUFnQixhQUFTLEVBQUM7QUFBMUIsSUFESixlQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksNkRBQUtsRixLQUFMLENBREosZUFHSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLHNFQURKLGVBRUksbUVBQU93RSxPQUFQLFFBQWtCRSxJQUFsQixXQUZKLENBSEosZUFPSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUksUUFBSSxFQUFDLFVBQVQ7QUFBb0IsUUFBSSxFQUFFSTtBQUExQixLQUFpQ0YsUUFBakMsQ0FESixDQVBKLENBRkosQ0FESixDQVBKLGVBdUJJO0FBQUssTUFBRSxFQUFDLFNBQVI7QUFBa0IsYUFBUyxFQUFDO0FBQTVCLGtCQUNJLDBFQURKLENBdkJKLGVBMEJJO0FBQUssU0FBSyxFQUFFO0FBQUUwRSxNQUFBQSxPQUFPLEVBQUUsSUFBWDtBQUFpQkYsTUFBQUEsTUFBTSxFQUFFLE1BQXpCO0FBQWlDRyxNQUFBQSxRQUFRLEVBQUU7QUFBM0M7QUFBWixLQUNRLDBGQUFBbkosSUFBSSxNQUFKLENBQUFBLElBQUksRUFBSyxVQUFDdUQsUUFBRDtBQUFBLHdCQUNiO0FBQUssU0FBRyxFQUFFQSxRQUFRLENBQUNaLEVBQW5CO0FBQXVCLGVBQVMsRUFBQztBQUFqQyxvQkFDSTtBQUFLLFdBQUssRUFBRTtBQUFFVyxRQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFrQnlGLFFBQUFBLEtBQUssRUFBRSxNQUF6QjtBQUFnQ0MsUUFBQUEsTUFBTSxFQUFFO0FBQXhDO0FBQVosT0FDS3pGLFFBQVEsQ0FBQ3NFLElBQVQsSUFBaUIsWUFBakIsZ0JBQ0c7QUFBSyxTQUFHLEVBQUV0RSxRQUFRLENBQUN3RSxLQUFuQjtBQUEwQixlQUFTLEVBQUM7QUFBcEMsTUFESCxnQkFHRztBQUFLLFNBQUcsRUFBRXhFLFFBQVEsQ0FBQ3dFLEtBQW5CO0FBQTBCLGVBQVMsRUFBQztBQUFwQyxNQUpSLGVBT0k7QUFBSyxXQUFLLEVBQUU7QUFBQ2dCLFFBQUFBLEtBQUssRUFBRSxNQUFSO0FBQWV6RixRQUFBQSxPQUFPLEVBQUUsTUFBeEI7QUFBK0IwRixRQUFBQSxNQUFNLEVBQUUsTUFBdkM7QUFBOENFLFFBQUFBLE9BQU8sRUFBRSxTQUF2RDtBQUFpRUUsUUFBQUEsYUFBYSxFQUFFLFFBQWhGO0FBQXlGQyxRQUFBQSxjQUFjLEVBQUU7QUFBekc7QUFBWixvQkFDSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFrQyxXQUFLLEVBQUU7QUFBRUMsUUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFBekMsb0JBQ0k7QUFBSSxXQUFLLEVBQUU7QUFBQ0MsUUFBQUEsTUFBTSxFQUFFO0FBQVQ7QUFBWCxPQUEyQmhHLFFBQVEsQ0FBQ1gsSUFBcEMsQ0FESixlQUdJO0FBQUksV0FBSyxFQUFFO0FBQUU0RyxRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFYLGlCQUFtRGpHLFFBQVEsQ0FBQ3NFLElBQTVELENBSEosZUFLSTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJO0FBQUksV0FBSyxFQUFFO0FBQUUyQixRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFYLE9BQWtDakcsUUFBUSxDQUFDM0IsV0FBM0MsQ0FESixDQUxKLENBREosZUFVSTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJO0FBQUssV0FBSyxFQUFFO0FBQUUwQixRQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFrQjhGLFFBQUFBLGFBQWEsRUFBRTtBQUFqQztBQUFaLG9CQUNJO0FBQUksZUFBUyxFQUFDO0FBQWQscUJBREosZUFFSTtBQUFJLGVBQVMsRUFBQztBQUFkLGFBQTRCN0YsUUFBUSxDQUFDcUUsUUFBckMsUUFBaURyRSxRQUFRLENBQUNrRSxLQUExRCxXQUZKLGVBR0k7QUFBSSxVQUFJLEVBQUMsTUFBVDtBQUFnQixVQUFJLEVBQUUvQyxJQUF0QjtBQUE0QixlQUFTLEVBQUM7QUFBdEMsT0FBbURFLFdBQW5ELENBSEosQ0FESixlQU1JO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0k7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDSTtBQUFLLGFBQU8sRUFBRXJCLFFBQVEsQ0FBQ1osRUFBdkI7QUFBMkIsV0FBSyxFQUFFWSxRQUFRLENBQUNYLElBQTNDO0FBQWlELGFBQU8sRUFBRStGLG9CQUExRDtBQUFnRixlQUFTLEVBQUM7QUFBMUYsb0JBQ0k7QUFBSyxhQUFPLEVBQUVwRixRQUFRLENBQUNaLEVBQXZCO0FBQTJCLFdBQUssRUFBRVksUUFBUSxDQUFDWCxJQUEzQztBQUFpRCxlQUFTLEVBQUM7QUFBM0Qsb0JBQ0k7QUFBSyxhQUFPLEVBQUVXLFFBQVEsQ0FBQ1osRUFBdkI7QUFBMkIsV0FBSyxFQUFFWSxRQUFRLENBQUNYLElBQTNDO0FBQWlELGVBQVMsRUFBQztBQUEzRCxjQURKLENBREosQ0FESixlQU1JO0FBQUssYUFBTyxFQUFFVyxRQUFRLENBQUNaLEVBQXZCO0FBQTJCLGdCQUFVLEVBQUVZLFFBQVEsQ0FBQ2tFLEtBQWhEO0FBQXVELGFBQU8sRUFBRXFCLG1CQUFoRTtBQUFxRixlQUFTLEVBQUM7QUFBL0Ysb0JBQ0k7QUFBSyxhQUFPLEVBQUV2RixRQUFRLENBQUNaLEVBQXZCO0FBQTJCLGdCQUFVLEVBQUVZLFFBQVEsQ0FBQ2tFLEtBQWhEO0FBQXdELGVBQVMsRUFBQztBQUFsRSxvQkFDSTtBQUFLLGFBQU8sRUFBRWxFLFFBQVEsQ0FBQ1osRUFBdkI7QUFBMkIsZ0JBQVUsRUFBRVksUUFBUSxDQUFDa0UsS0FBaEQ7QUFBdUQsZUFBUyxFQUFDO0FBQWpFLGFBREosQ0FESixDQU5KLENBREosQ0FOSixDQVZKLENBUEosQ0FESixDQURhO0FBQUEsR0FBTCxDQURaLENBMUJKLGVBMEVJLGlEQUFDLGlGQUFEO0FBQ0ksUUFBSSxFQUFFN0IsU0FEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaLENBRFUsQ0FFVjs7QUFDQW5GLE1BQUFBLGlCQUFpQjtBQUNwQixLQU5MO0FBT0ksWUFBUSxFQUFFYixRQVBkO0FBUUksV0FBTyxFQUFFbUYsUUFSYjtBQVNJLGlCQUFhLEVBQUVsRixhQVRuQjtBQVVJLGFBQVMsRUFBRXNGLGVBVmY7QUFXSSxRQUFJLEVBQUVFLFVBWFY7QUFZSSxXQUFPLEVBQUV6QixPQVpiO0FBYUksY0FBVSxFQUFFMkI7QUFiaEIsSUExRUosZUEwRkksaURBQUMscUZBQUQ7QUFDSSxRQUFJLEVBQUVoRyxhQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQ1ZzRyxNQUFBQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCLENBRFUsQ0FFVjs7QUFDQXBGLE1BQUFBLGlCQUFpQjtBQUNwQixLQU5MO0FBT0ksTUFBRSxFQUFFc0UsUUFQUjtBQVFJLFNBQUssRUFBRUU7QUFSWCxJQTFGSixDQURKO0FBdUdIOzs7Ozs7OztVQ3JSRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL1ZpZXdCaWRORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdtb2RhbFNob3coe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdGlkLFxuXHR0aXRsZVxufSkge1xuXHRjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cblx0ZnVuY3Rpb24gYWRkWmVybyhudW0pIHtcblx0XHRyZXR1cm4gbnVtIDwgMTAgPyBgMCR7bnVtfWAgOiBudW07XG5cdH1cblx0ZnVuY3Rpb24gQW1QTShudW0pIHtcblx0XHRyZXR1cm4gbnVtIDwgMTIgPyAnQU0nIDogJ1BNJztcblx0fVxuXHRjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuXHRcdG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcblx0XHRtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG5cdH0pO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udHJhY3REYXRhKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoY29udHJhY3QgJiYgaWQpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSShpZCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHRcdFx0Y29uc3QgYXJyID0gW107XG5cdFx0XHRcdGNvbnN0IHRvdGFsQmlkcyA9IGF3YWl0IGNvbnRyYWN0LmdldEJpZHNTZWFyY2hUb2tlbihpZCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRvdGFsQmlkcyk7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgTnVtYmVyKDEwKTsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb2JqID0gYXdhaXQgdG90YWxCaWRzW2ldO1xuXHRcdFx0XHRcdGNvbnN0IG9iamVjdCA9IHt9O1xuXHRcdFx0XHRcdHRyeSB7IG9iamVjdCA9IGF3YWl0IEpTT04ucGFyc2Uob2JqKSB9IGNhdGNoIHsgfVxuXHRcdFx0XHRcdGlmIChvYmplY3QudGl0bGUpIHtcblx0XHRcdFx0XHRcdHZhciBwcmljZWRlczEgPSAwO1xuXHRcdFx0XHRcdFx0dHJ5IHsgcHJpY2VkZXMxID0gZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuYmlkLmRlc2NyaXB0aW9uICogMS4xMCkpIH0gY2F0Y2ggKGV4KSB7IH1cblx0XHRcdFx0XHRcdGNvbnN0IEJpZElkID0gTnVtYmVyKGF3YWl0IGNvbnRyYWN0LmdldEJpZElkQnlVcmkob2JqKSk7XG5cdFx0XHRcdFx0XHRjb25zdCBEYXRldGltZSA9IG5ldyBEYXRlKG9iamVjdC5wcm9wZXJ0aWVzLnRpbWUuZGVzY3JpcHRpb24pO1xuXG5cdFx0XHRcdFx0XHRsZXQgY3VycmVudGRhdGUgPSBgJHthZGRaZXJvKERhdGV0aW1lLmdldERhdGUoKSl9LyR7YWRkWmVybyhEYXRldGltZS5nZXRNb250aCgpICsgMSl9LyR7YWRkWmVybyhEYXRldGltZS5nZXRGdWxsWWVhcigpKX0gJHthZGRaZXJvKERhdGV0aW1lLmdldEhvdXJzKCkpfToke2FkZFplcm8oRGF0ZXRpbWUuZ2V0TWludXRlcygpKX06JHthZGRaZXJvKERhdGV0aW1lLmdldFNlY29uZHMoKSl9ICR7QW1QTShEYXRldGltZS5nZXRIb3VycygpKX1gXG5cdFx0XHRcdFx0XHRhcnIucHVzaCh7XG5cdFx0XHRcdFx0XHRcdElkOiBCaWRJZCxcblx0XHRcdFx0XHRcdFx0bmFtZTogb2JqZWN0LnByb3BlcnRpZXMudXNlcm5hbWUuZGVzY3JpcHRpb24sXG5cdFx0XHRcdFx0XHRcdHRpbWU6IGN1cnJlbnRkYXRlLFxuXHRcdFx0XHRcdFx0XHRiaWRwcmljZTogb2JqZWN0LnByb3BlcnRpZXMuYmlkLmRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcdFx0XHRiaWRwcmljZXVzZDogcHJpY2VkZXMxXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coYXJyKTtcblx0XHRcdFx0c2V0TGlzdChhcnIpO1xuXHRcdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpKVxuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XG5cdFx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmd0YWJsZVwiKSkge1xuXHRcdFx0XHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5ndGFibGVcIik7XG5cdFx0XHRcdFx0ZWxlbWVudC5zdHlsZSA9IFwiZGlzcGxheTpibG9ja1wiO1xuXHRcdFx0XHRcdChlbGVtZW50KS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0fVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoQ29udHJhY3REYXRhKCk7XG5cblx0fSwgW2NvbnRyYWN0XSk7XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdG9uU2hvdz17ZmV0Y2hDb250cmFjdERhdGF9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRzaXplPVwieGxcIlxuXHRcdFx0Y2VudGVyZWRcblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFZpZXcgQmlkIC0ge3RpdGxlfVxuXHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHQ8ZGl2IGlkPSdMb2FkaW5ndGFibGUnIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFibGVIZWFkZXInPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlSGVhZGVyQ29udGFpbmVyJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlaGVhZGVyRGF0ZUNvbnRhaW5lcicgPlxuXHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJoZWFkZXJcIj5EYXRlPC9oNj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFibGVoZWFkZXJVc2VyQ29udGFpbmVyXCIgPlxuXHRcdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJoZWFkZXJcIj5Vc2VyIE5hbWU8L2g2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWJsZWhlYWRlckJpZENvbnRhaW5lclwiID5cblx0XHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+QmlkPC9oNj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj4ge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e2xpc3RJdGVtLklkfSBjbGFzc05hbWU9J3RhYmxlRnVsbFJvd0NvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZVJvd0NvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlUm93Q2VsbENvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFibGVSb3dDZWxsRGF0ZUNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNyBjbGFzc05hbWU9XCJjZWxsXCI+e2xpc3RJdGVtLnRpbWV9PC9oNz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlUm93Q2VsbFVzZXJDb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDcgY2xhc3NOYW1lPVwiY2VsbFwiPntsaXN0SXRlbS5uYW1lfTwvaDc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dDZWxsQmlkQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNyBjbGFzc05hbWU9XCJjZWxsXCI+JHtsaXN0SXRlbS5iaWRwcmljZXVzZH0gKHtsaXN0SXRlbS5iaWRwcmljZX0gY0VVUik8L2g3PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+KSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IEJpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwnO1xuaW1wb3J0IFZpZXdCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL1ZpZXdCaWRORlRNb2RhbCc7XG5cbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld05GVCh1c2VyKSB7XG4gICAgY29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtldmVudElkLCBzZXRFdmVudElkXSA9IHVzZVN0YXRlKC0xKTtcbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Rva2VuTmFtZSwgc2V0VG9rZW5OYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdG9rZW5TeW1ib2wsIHNldFRva2VuU3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ29hbHVzZCwgc2V0Z29hbHVzZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvYWwsIHNldGdvYWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlbGVmdCwgc2V0ZGF0ZWxlZnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlLCBzZXRkYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZWxlZnRCaWQsIHNldGRhdGVsZWZ0QmlkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbG9nbywgc2V0bG9nb10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGlkLCBzZXRzZWxlY3RpZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdHRpdGxlLCBzZXRzZWxlY3R0aXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkQWRkcmVzcywgc2V0c2VsZWN0ZWRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0dHlwZSwgc2V0c2VsZWN0dHlwZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGJpZCwgc2V0c2VsZWN0YmlkXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IFtldmVudHVyaSwgc2V0RXZlbnR1cmldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW1ZpZXdtb2RhbFNob3csIHNldFZpZXdNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcIiBEYXlzIFwiICsgaC50b1N0cmluZygpICsgXCIgaG91cnMgXCIgKyBtLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIFwiICsgcy50b1N0cmluZygpICsgXCIgc2Vjb25kc1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gTGVmdERhdGVCaWQoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCJkIFwiICsgaC50b1N0cmluZygpICsgXCJoIFwiICsgbS50b1N0cmluZygpICsgXCJtIFwiICsgcy50b1N0cmluZygpICsgXCJzXCIpO1xuICAgIH1cbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XG4gICAgY29uc3Qgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIGxldCBtO1xuICAgIGxldCBpZCA9IFwiXCI7XG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZCA9IG1bMV07XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoY29udHJhY3QgJiYgaWQpIHtcbiAgICAgICAgICAgICAgICBzZXRFdmVudElkKGlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGNvbnRyYWN0LmV2ZW50VVJJKGlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFRva2VucyA9IGF3YWl0IGNvbnRyYWN0LmdldHRva2VuU2VhcmNoRXZlbnRUb3RhbChpZCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1iZXIoMTApOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gYXdhaXQgdG90YWxUb2tlbnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7IG9iamVjdCA9IGF3YWl0IEpTT04ucGFyc2Uob2JqKSB9IGNhdGNoIHsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpY2VkZXMxID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7IHByaWNlZGVzMSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLnByaWNlLmRlc2NyaXB0aW9uICogMS4xMCkpIH0gY2F0Y2ggKGV4KSB7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFRva2VuSWQgPSBOdW1iZXIoYXdhaXQgY29udHJhY3QuZ2V0dG9rZW5JZEJ5VXJpKG9iaikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coVG9rZW5JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSWQ6IFRva2VuSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogb2JqZWN0LnByb3BlcnRpZXMubmFtZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogb2JqZWN0LnByb3BlcnRpZXMuZGVzY3JpcHRpb24uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlkcHJpY2U6IHByaWNlZGVzMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLnByaWNlLmRlc2NyaXB0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBvYmplY3QucHJvcGVydGllcy50eXBlaW1nLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBvYmplY3QucHJvcGVydGllcy5pbWFnZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRMaXN0KGFycik7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpLnN0eWxlID0gXCJkaXNwbGF5Om5vbmVcIjtcblxuXG4gICAgICAgICAgICAgICAgc2V0RXZlbnR1cmkodmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGl0bGUob2JqZWN0LnByb3BlcnRpZXMuVGl0bGUuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIHNldHNlbGVjdGVkQWRkcmVzcyhvYmplY3QucHJvcGVydGllcy53YWxsZXQuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIHNldGdvYWx1c2QoZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuR29hbC5kZXNjcmlwdGlvbiAqIDEuMTApKSk7XG4gICAgICAgICAgICAgICAgc2V0Z29hbChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuR29hbC5kZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0KExlZnREYXRlKG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICBzZXRkYXRlKG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0QmlkKExlZnREYXRlQmlkKG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICBzZXRsb2dvKG9iamVjdC5wcm9wZXJ0aWVzLmxvZ28uZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIHNldFRva2VuTmFtZShhd2FpdCBjb250cmFjdC5uYW1lKCkpO1xuICAgICAgICAgICAgICAgIHNldFRva2VuU3ltYm9sKGF3YWl0IGNvbnRyYWN0LnN5bWJvbCgpKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcblxuICAgIH0sIFtpZCwgY29udHJhY3RdKTtcblxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcbiAgICB9LCAxMDAwKTtcblxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlQmlkKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlVmlld0JpZE1vZGFsKGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHRpdGxlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRpdGxlXCIpKTtcblxuICAgICAgICBzZXRWaWV3TW9kYWxTaG93KHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQmlkTkZUTW9kYWwoZSkge1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0YmlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhpZ2hlc3RiaWRcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RiaWQpO1xuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiTkZUXCIpO1xuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IEV2ZW50Q29udGFpbmVyXCIgPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsd2lkdGg6ICcxMDAlJyxoZWlnaHQ6ICcxMDAlJyxhbGlnbkl0ZW1zOiAnY2VudGVyJyxwYWRkaW5nOiAnN3B4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cIkF1Y3Rpb25JbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pnt0aXRsZX08L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3PkdvYWw6IDwvaDc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3PiQge2dvYWx1c2R9ICh7Z29hbH0gY0VVUik8L2g3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IG5hbWU9J2RhdGVsZWZ0JyBkYXRlPXtkYXRlfT57ZGF0ZWxlZnR9PC9oNz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIyJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvdmVyZmxvdzogXCJhdXRvXCIgfX0+XG4gICAgICAgICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPVwicm93IEVsZW1lbnRzQ29udGFpbmVyIGJnV2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsd2lkdGg6ICcxMDAlJyxoZWlnaHQ6ICczMnZ3J319PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLnR5cGUgPT0gXCJDcnlwdG9wdW5rXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmltYWdlfSBjbGFzc05hbWU9XCJBdWN0aW9uQmlkSW1hZ2UgcGl4ZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJyxkaXNwbGF5OiAnZmxleCcsaGVpZ2h0OiAnMTAwJScscGFkZGluZzogJzVweCAwcHgnLGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3sgcm93R2FwOiBcIjVweFwiIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7bWFyZ2luOiAnMCd9fT57bGlzdEl0ZW0ubmFtZX08L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTM5LCAxMzksIDEzOSlcIiB9fT5UeXBlOiB7bGlzdEl0ZW0udHlwZX08L2g3PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IHN0eWxlPXt7IGNvbG9yOiBcIiM4QjhCOEJcIiB9fT57bGlzdEl0ZW0uZGVzY3JpcHRpb259PC9oNz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0VsZW1lbnRCb3R0b21Db250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyxmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj5DdXJyZW50IGJpZDwvaDc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdiaWRwcmljZSc+JCB7bGlzdEl0ZW0uQmlkcHJpY2V9ICh7bGlzdEl0ZW0ucHJpY2V9IGNFVVIpPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBuYW1lPVwiZGF0ZVwiIGRhdGU9e2RhdGV9IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPntkYXRlbGVmdEJpZH08L2g3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZEFsbGNvbnRhaW5lcicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZHNidXR0b24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBvbkNsaWNrPXthY3RpdmF0ZVZpZXdCaWRNb2RhbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5WaWV3PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBvbkNsaWNrPXthY3RpdmF0ZUJpZE5GVE1vZGFsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSAgY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5CaWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxCaWRORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxTaG93KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtjb250cmFjdH1cbiAgICAgICAgICAgICAgICB0b2tlbklkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICBzZW5kZXJBZGRyZXNzPXtzaWduZXJBZGRyZXNzfVxuICAgICAgICAgICAgICAgIHRvQWRkcmVzcz17c2VsZWN0ZWRBZGRyZXNzfVxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdHR5cGV9XG4gICAgICAgICAgICAgICAgZXZlbnRJZD17ZXZlbnRJZH1cbiAgICAgICAgICAgICAgICBIaWdoZXN0YmlkPXtzZWxlY3RiaWR9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Vmlld0JpZE5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17Vmlld21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Vmlld01vZGFsU2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3NlbGVjdHRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJhMTY4YTA2MTMwMjUyNGMxOWJkNlwiOyB9Il0sIm5hbWVzIjpbIk1vZGFsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkZvcm0iLCJIZWFkIiwiUm93IiwiTGluayIsIkNvbCIsIkltYWdlIiwiQnV0dG9uIiwidXNlQ29udHJhY3QiLCJWaWV3bW9kYWxTaG93Iiwic2hvdyIsIm9uSGlkZSIsImlkIiwidGl0bGUiLCJjb250cmFjdCIsInNpZ25lckFkZHJlc3MiLCJyb3V0ZXIiLCJsaXN0Iiwic2V0TGlzdCIsImFkZFplcm8iLCJudW0iLCJBbVBNIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsImZldGNoQ29udHJhY3REYXRhIiwidG9rZW5VUkkiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJhcnIiLCJnZXRCaWRzU2VhcmNoVG9rZW4iLCJ0b3RhbEJpZHMiLCJpIiwiTnVtYmVyIiwib2JqIiwib2JqZWN0IiwiSlNPTiIsInBhcnNlIiwicHJpY2VkZXMxIiwiZm9ybWF0IiwicHJvcGVydGllcyIsImJpZCIsImRlc2NyaXB0aW9uIiwiZXgiLCJnZXRCaWRJZEJ5VXJpIiwiQmlkSWQiLCJEYXRldGltZSIsIkRhdGUiLCJ0aW1lIiwiY3VycmVudGRhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJwdXNoIiwiSWQiLCJuYW1lIiwidXNlcm5hbWUiLCJiaWRwcmljZSIsImJpZHByaWNldXNkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImVycm9yIiwiZGlzcGxheSIsImxpc3RJdGVtIiwiQmlkTkZUTW9kYWwiLCJWaWV3QmlkTkZUTW9kYWwiLCJIZWFkZXIiLCJWaWV3TkZUIiwidXNlciIsImV2ZW50SWQiLCJzZXRFdmVudElkIiwidG9rZW5OYW1lIiwic2V0VG9rZW5OYW1lIiwidG9rZW5TeW1ib2wiLCJzZXRUb2tlblN5bWJvbCIsInNldFRpdGxlIiwiZ29hbHVzZCIsInNldGdvYWx1c2QiLCJnb2FsIiwic2V0Z29hbCIsImRhdGVsZWZ0Iiwic2V0ZGF0ZWxlZnQiLCJkYXRlIiwic2V0ZGF0ZSIsImRhdGVsZWZ0QmlkIiwic2V0ZGF0ZWxlZnRCaWQiLCJsb2dvIiwic2V0bG9nbyIsInNlbGVjdGlkIiwic2V0c2VsZWN0aWQiLCJzZWxlY3R0aXRsZSIsInNldHNlbGVjdHRpdGxlIiwic2VsZWN0ZWRBZGRyZXNzIiwic2V0c2VsZWN0ZWRBZGRyZXNzIiwic2VsZWN0dHlwZSIsInNldHNlbGVjdHR5cGUiLCJzZWxlY3RiaWQiLCJzZXRzZWxlY3RiaWQiLCJldmVudHVyaSIsInNldEV2ZW50dXJpIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93Iiwic2V0Vmlld01vZGFsU2hvdyIsIkxlZnREYXRlIiwiZGF0ZXRleHQiLCJjIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJoIiwibSIsInMiLCJ0b1N0cmluZyIsIkxlZnREYXRlQmlkIiwicmVnZXgiLCJzdHIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsImV2ZW50VVJJIiwiZ2V0dG9rZW5TZWFyY2hFdmVudFRvdGFsIiwidG90YWxUb2tlbnMiLCJwcmljZSIsImdldHRva2VuSWRCeVVyaSIsIlRva2VuSWQiLCJCaWRwcmljZSIsInR5cGUiLCJ0eXBlaW1nIiwiaW1hZ2UiLCJUaXRsZSIsIndhbGxldCIsIkdvYWwiLCJzeW1ib2wiLCJzZXRJbnRlcnZhbCIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwiYWxsRGF0ZXMiLCJnZXRFbGVtZW50c0J5TmFtZSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFjdGl2YXRlVmlld0JpZE1vZGFsIiwiZSIsInRhcmdldCIsImFjdGl2YXRlQmlkTkZUTW9kYWwiLCJ3aWR0aCIsImhlaWdodCIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwib3ZlcmZsb3ciLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJyb3dHYXAiLCJtYXJnaW4iLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=