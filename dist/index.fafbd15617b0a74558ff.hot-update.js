"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/pages/donation/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/donation/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Donation; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");
/* harmony import */ var _components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/components/modals/DonateNFTModal */ "./src/components/components/modals/DonateNFTModal.jsx");
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/layout/Header */ "./src/components/layout/Header/index.tsx");
/* harmony import */ var _donation_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./donation.css */ "./src/pages/donation/donation.css");

















function Donation() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      CreatemodalShow = _useState2[0],
      setModalShow = _useState2[1];

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_9__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      tokenName = _useState6[0],
      setTokenName = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      tokenSymbol = _useState8[0],
      setTokenSymbol = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      selectid = _useState10[0],
      setselectid = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      selectedtype = _useState12[0],
      setselectedtype = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      SelectedTitle = _useState14[0],
      setSelectedTitle = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      SelectedendDate = _useState16[0],
      setSelectedendDate = _useState16[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    fetchContractData();
    window.ethereum.on('accountsChanged', fetchContractData);
    window.ethereum.on('chainChanged', fetchContractData);
    return function () {
      window.ethereum.removeListener('accountsChanged', fetchContractData);
      window.ethereum.removeListener('chainChanged', fetchContractData);
    };
  }, [contract]);
  setInterval(function () {
    calculateTimeLeft();
  }, 1000);

  function calculateTimeLeft() {
    try {
      var allDates = document.getElementsByName("DateCount");

      for (var i = 0; i < allDates.length; i++) {
        var date = allDates[i].getAttribute("date");
        allDates[i].innerHTML = LeftDate(date);
      }
    } catch (error) {}
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
      var totalEvent, arr, i, value, da, h, m, _context2, object, c, n, d, s, pricedes1;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              if (!contract) {
                _context3.next = 41;
                break;
              }

              _context3.t0 = setTokenName;
              _context3.next = 5;
              return contract.name();

            case 5:
              _context3.t1 = _context3.sent;
              (0, _context3.t0)(_context3.t1);
              _context3.t2 = setTokenSymbol;
              _context3.next = 10;
              return contract.symbol();

            case 10:
              _context3.t3 = _context3.sent;
              (0, _context3.t2)(_context3.t3);
              _context3.next = 14;
              return contract.totalEvent();

            case 14:
              totalEvent = _context3.sent;
              arr = [];
              i = 0;

            case 17:
              if (!(i < Number(totalEvent))) {
                _context3.next = 39;
                break;
              }

              _context3.next = 20;
              return contract.eventURI(i);

            case 20:
              value = _context3.sent;
              da = Math.floor(d / (1000 * 60 * 60 * 24));
              h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
              m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));

              if (!value) {
                _context3.next = 35;
                break;
              }

              object = JSON.parse(value);
              c = new Date(object.properties.Date.description).getTime();
              n = new Date().getTime();
              d = c - n;
              s = Math.floor(d % (1000 * 60) / 1000);

              if (!_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = s.toString()).call(_context2, "-")) {
                _context3.next = 32;
                break;
              }

              return _context3.abrupt("continue", 36);

            case 32:
              pricedes1 = 0;

              try {
                pricedes1 = Number(object.properties.Goal.description * 1.10);
              } catch (ex) {}

              arr.push({
                eventId: i,
                Title: object.properties.Title.description,
                Date: object.properties.Date.description,
                Goalusd: formatter.format(pricedes1),
                Goal: object.properties.Goal.description,
                logo: object.properties.logo.description
              });

            case 35:
              console.log(value);

            case 36:
              i++;
              _context3.next = 17;
              break;

            case 39:
              setList(arr);
              document.getElementById("Loading").style = "display:none";

            case 41:
              _context3.next = 46;
              break;

            case 43:
              _context3.prev = 43;
              _context3.t4 = _context3["catch"](0);
              console.error(_context3.t4);

            case 46:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee, null, [[0, 43]]);
    }));
    return _fetchContractData.apply(this, arguments);
  }

  function activateCreateNFTModal(e) {
    setselectid(e.target.getAttribute("eventid"));
    setSelectedTitle(e.target.getAttribute("eventtitle"));
    setSelectedendDate(e.target.getAttribute("date"));
    setselectedtype("NFT");
    setModalShow(true);
  }

  function LeftDate(datetext) {
    var _context;

    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);

    if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3___default()(_context = s.toString()).call(_context, "-")) {
      return "Expired";
    }

    return da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds";
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_layout_Header__WEBPACK_IMPORTED_MODULE_11__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(next_head__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("title", null, "Donation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("meta", {
    name: "description",
    content: "Donation"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("link", {
    rel: "icon",
    href: "/Logo.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "DonationBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.NavLink, {
    to: "?q=All"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("a", {
    className: "DonationBarLink active"
  }, "All")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.NavLink, {
    to: "?q=Today"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("a", {
    className: "DonationBarLink"
  }, "Today")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.NavLink, {
    to: "?q=This Month"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("a", {
    className: "DonationBarLink"
  }, "This Month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    id: "Loading",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h1", null, "Loading...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    style: {
      height: '100%'
    }
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      key: listItem.eventId,
      className: "donation row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation Datecount"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h6", {
      name: "DateCount",
      className: "donation DatecountT",
      date: listItem.Date
    }, LeftDate(listItem.Date))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation-eventconatiner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
      className: "donation event-img",
      src: listItem.logo
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation event-details-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h6", {
      className: "donation event-details-title"
    }, listItem.Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        display: "flex",
        "whiteSpace": "pre-wrap"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h6", {
      className: "donation event-goal-price"
    }, "Goal:  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h6", {
      className: "donation event-goal-price"
    }, "$", listItem.Goalusd, " (", listItem.Goal, " cEUR)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation event-BTN-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation event-BTN card",
      eventid: listItem.eventId,
      date: listItem.Date,
      eventtitle: listItem.Title,
      onClick: activateCreateNFTModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      eventid: listItem.eventId,
      date: listItem.Date,
      eventtitle: listItem.Title,
      className: "card-body",
      style: {
        height: "100%"
      }
    }, "Donate NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.NavLink, {
      to: "/donation/auction?[".concat(listItem.eventId, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation event-BTN card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "card-body",
      style: {
        height: "100%"
      }
    }, "Go to auction")))))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: CreatemodalShow,
    onHide: function onHide() {
      setModalShow(false);
    },
    contract: contract,
    senderAddress: signerAddress,
    EventID: selectid,
    type: selectedtype,
    SelectedTitle: SelectedTitle,
    enddate: SelectedendDate
  }));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/donation/donation.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/donation/donation.css ***!
  \*******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 766px) {\r\n    .donation.row {\r\n        height: 181px;\r\n        margin: 12px;\r\n        background: white;\r\n        color: black;\r\n        position: relative;\r\n        overflow: hidden;\r\n        padding: 0px;\r\n    }\r\n\r\n    .donation.Datecount {\r\n        top: 10px;\r\n        left: 10px;\r\n        position: absolute;\r\n    }\r\n\r\n    .donation.DatecountT {\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .donation-eventconatiner {\r\n        display: flex;\r\n        top: 41px;\r\n        position: absolute;\r\n        left: 10px;\r\n        right: 10px;\r\n    }\r\n\r\n    .donation.event-img {\r\n        aspect-ratio: 4;\r\n        max-width: 110px;\r\n        max-height: 110px;\r\n        height: 110px;\r\n        width: 110px;\r\n    }\r\n    .donation.event-details-container{\r\n        margin-left: 1px;\r\n        display: flex;\r\n        height: 100%;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        row-gap: 10px;\r\n    }\r\n    .donation.event-details-title{\r\n        font-size: 0.8rem;\r\n    }\r\n    .donation.event-goal-price{\r\n        font-size: 0.7rem;\r\n    }\r\n    .donation.event-BTN{\r\n        color: white;\r\n        background: rgb(0, 222, 205);\r\n        text-align: center;\r\n        cursor: pointer;\r\n        height: 100%;\r\n        float: right;\r\n        margin: 0px;\r\n        width: 114px;\r\n    }\r\n    .donation.event-BTN-container{\r\n        display: flex;\r\n        gap: 5px;\r\n        position: absolute;\r\n        right: 20px;\r\n        bottom: 20px;\r\n        justify-content: flex-start;\r\n        align-items: flex-end;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 766px) {\r\n    .donation.row {\r\n        height: calc(14vw*1.7);\r\n        background: white;\r\n        color: black;\r\n        position: relative;\r\n        overflow: hidden;\r\n        padding: 0;\r\n        margin: 30px 30px;\r\n        \r\n    }\r\n\r\n    .donation.Datecount {\r\n        top: 18px;\r\n        left: 25px;\r\n        position: absolute;\r\n    }\r\n\r\n    .donation.DatecountT {\r\n        font-size: calc(1vw *1.5);\r\n    }\r\n\r\n    .donation-eventconatiner {\r\n        display: flex;\r\n        top: calc(2vw*2.3);\r\n        position: absolute;\r\n        left: 25px;\r\n        right: 25px;\r\n        gap: 15px;\r\n    }\r\n\r\n    .donation.event-img {\r\n        aspect-ratio: 4 / 1;\r\n        width: calc(15vw* 1.2);\r\n        height: calc(15vw * 1.2);\r\n    }\r\n    .donation.event-details-container{\r\n        margin-left: 1px;\r\n        display: flex;\r\n        height: 100%;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        row-gap: 10px;\r\n    }\r\n    .donation.event-details-title{\r\n        font-size: calc(1vw *2);\r\n    }\r\n    .donation.event-goal-price{\r\n        font-size: calc(1vw *1.5);\r\n    }\r\n    .donation.event-BTN{\r\n        color: white;\r\n        background: rgb(0, 222, 205);\r\n        text-align: center;\r\n        cursor: pointer;\r\n        height: 100%;\r\n        padding: 0;\r\n        padding-top: calc(3vw);\r\n        padding-bottom: 3vw;\r\n        float: right;\r\n        margin: 0px;\r\n        width: calc(10vw*2);\r\n    }\r\n    .donation.event-BTN-container{\r\n        display: flex;\r\n        gap: 5px;\r\n        position: absolute;\r\n        right: 20px;\r\n        bottom: 20px;\r\n        justify-content: flex-start;\r\n        align-items: flex-end;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/pages/donation/donation.css"],"names":[],"mappings":"AAAA;IACI;QACI,aAAa;QACb,YAAY;QACZ,iBAAiB;QACjB,YAAY;QACZ,kBAAkB;QAClB,gBAAgB;QAChB,YAAY;IAChB;;IAEA;QACI,SAAS;QACT,UAAU;QACV,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,aAAa;QACb,SAAS;QACT,kBAAkB;QAClB,UAAU;QACV,WAAW;IACf;;IAEA;QACI,eAAe;QACf,gBAAgB;QAChB,iBAAiB;QACjB,aAAa;QACb,YAAY;IAChB;IACA;QACI,gBAAgB;QAChB,aAAa;QACb,YAAY;QACZ,sBAAsB;QACtB,WAAW;QACX,aAAa;IACjB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,YAAY;QACZ,4BAA4B;QAC5B,kBAAkB;QAClB,eAAe;QACf,YAAY;QACZ,YAAY;QACZ,WAAW;QACX,YAAY;IAChB;IACA;QACI,aAAa;QACb,QAAQ;QACR,kBAAkB;QAClB,WAAW;QACX,YAAY;QACZ,2BAA2B;QAC3B,qBAAqB;IACzB;AACJ;;AAEA;IACI;QACI,sBAAsB;QACtB,iBAAiB;QACjB,YAAY;QACZ,kBAAkB;QAClB,gBAAgB;QAChB,UAAU;QACV,iBAAiB;;IAErB;;IAEA;QACI,SAAS;QACT,UAAU;QACV,kBAAkB;IACtB;;IAEA;QACI,yBAAyB;IAC7B;;IAEA;QACI,aAAa;QACb,kBAAkB;QAClB,kBAAkB;QAClB,UAAU;QACV,WAAW;QACX,SAAS;IACb;;IAEA;QACI,mBAAmB;QACnB,sBAAsB;QACtB,wBAAwB;IAC5B;IACA;QACI,gBAAgB;QAChB,aAAa;QACb,YAAY;QACZ,sBAAsB;QACtB,WAAW;QACX,aAAa;IACjB;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;IACA;QACI,YAAY;QACZ,4BAA4B;QAC5B,kBAAkB;QAClB,eAAe;QACf,YAAY;QACZ,UAAU;QACV,sBAAsB;QACtB,mBAAmB;QACnB,YAAY;QACZ,WAAW;QACX,mBAAmB;IACvB;IACA;QACI,aAAa;QACb,QAAQ;QACR,kBAAkB;QAClB,WAAW;QACX,YAAY;QACZ,2BAA2B;QAC3B,qBAAqB;IACzB;AACJ","sourcesContent":["@media only screen and (max-width: 766px) {\r\n    .donation.row {\r\n        height: 181px;\r\n        margin: 12px;\r\n        background: white;\r\n        color: black;\r\n        position: relative;\r\n        overflow: hidden;\r\n        padding: 0px;\r\n    }\r\n\r\n    .donation.Datecount {\r\n        top: 10px;\r\n        left: 10px;\r\n        position: absolute;\r\n    }\r\n\r\n    .donation.DatecountT {\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .donation-eventconatiner {\r\n        display: flex;\r\n        top: 41px;\r\n        position: absolute;\r\n        left: 10px;\r\n        right: 10px;\r\n    }\r\n\r\n    .donation.event-img {\r\n        aspect-ratio: 4;\r\n        max-width: 110px;\r\n        max-height: 110px;\r\n        height: 110px;\r\n        width: 110px;\r\n    }\r\n    .donation.event-details-container{\r\n        margin-left: 1px;\r\n        display: flex;\r\n        height: 100%;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        row-gap: 10px;\r\n    }\r\n    .donation.event-details-title{\r\n        font-size: 0.8rem;\r\n    }\r\n    .donation.event-goal-price{\r\n        font-size: 0.7rem;\r\n    }\r\n    .donation.event-BTN{\r\n        color: white;\r\n        background: rgb(0, 222, 205);\r\n        text-align: center;\r\n        cursor: pointer;\r\n        height: 100%;\r\n        float: right;\r\n        margin: 0px;\r\n        width: 114px;\r\n    }\r\n    .donation.event-BTN-container{\r\n        display: flex;\r\n        gap: 5px;\r\n        position: absolute;\r\n        right: 20px;\r\n        bottom: 20px;\r\n        justify-content: flex-start;\r\n        align-items: flex-end;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 766px) {\r\n    .donation.row {\r\n        height: calc(14vw*1.7);\r\n        background: white;\r\n        color: black;\r\n        position: relative;\r\n        overflow: hidden;\r\n        padding: 0;\r\n        margin: 30px 30px;\r\n        \r\n    }\r\n\r\n    .donation.Datecount {\r\n        top: 18px;\r\n        left: 25px;\r\n        position: absolute;\r\n    }\r\n\r\n    .donation.DatecountT {\r\n        font-size: calc(1vw *1.5);\r\n    }\r\n\r\n    .donation-eventconatiner {\r\n        display: flex;\r\n        top: calc(2vw*2.3);\r\n        position: absolute;\r\n        left: 25px;\r\n        right: 25px;\r\n        gap: 15px;\r\n    }\r\n\r\n    .donation.event-img {\r\n        aspect-ratio: 4 / 1;\r\n        width: calc(15vw* 1.2);\r\n        height: calc(15vw * 1.2);\r\n    }\r\n    .donation.event-details-container{\r\n        margin-left: 1px;\r\n        display: flex;\r\n        height: 100%;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        row-gap: 10px;\r\n    }\r\n    .donation.event-details-title{\r\n        font-size: calc(1vw *2);\r\n    }\r\n    .donation.event-goal-price{\r\n        font-size: calc(1vw *1.5);\r\n    }\r\n    .donation.event-BTN{\r\n        color: white;\r\n        background: rgb(0, 222, 205);\r\n        text-align: center;\r\n        cursor: pointer;\r\n        height: 100%;\r\n        padding: 0;\r\n        padding-top: calc(3vw);\r\n        padding-bottom: 3vw;\r\n        float: right;\r\n        margin: 0px;\r\n        width: calc(10vw*2);\r\n    }\r\n    .donation.event-BTN-container{\r\n        display: flex;\r\n        gap: 5px;\r\n        position: absolute;\r\n        right: 20px;\r\n        bottom: 20px;\r\n        justify-content: flex-start;\r\n        align-items: flex-end;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "24e81aa57e474944c356"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmZhZmJkMTU2MTdiMGE3NDU1OGZmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU2EsUUFBVCxHQUFvQjtBQUMvQixrQkFBd0NaLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT2EsZUFBUDtBQUFBLE1BQXdCQyxZQUF4Qjs7QUFDQSxxQkFBb0NMLGlFQUFXLENBQUMsUUFBRCxDQUEvQztBQUFBLE1BQVFNLFFBQVIsZ0JBQVFBLFFBQVI7QUFBQSxNQUFrQkMsYUFBbEIsZ0JBQWtCQSxhQUFsQjs7QUFDQSxtQkFBd0JoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9pQixJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBa0NsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU9tQixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFzQ3BCLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBO0FBQUEsTUFBT3FCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQWdDdEIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPdUIsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxvQkFBd0N4QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU95QixZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG9CQUEwQzFCLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBTzJCLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG9CQUE4QzVCLCtDQUFRLENBQUMsRUFBRCxDQUF0RDtBQUFBO0FBQUEsTUFBTzZCLGVBQVA7QUFBQSxNQUF3QkMsa0JB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LHlCQUF5Qix3Q0FBd0Msa0NBQWtDLFNBQVMsS0FBSyxtQkFBbUI7QUFDbnpRO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQ1B2QyxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9kb25hdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvZG9uYXRpb24vZG9uYXRpb24uY3NzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCc7XG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5pbXBvcnQgRG9uYXRlTkZUTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9Eb25hdGVORlRNb2RhbCc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcidcbmltcG9ydCAnLi9kb25hdGlvbi5jc3MnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9uYXRpb24oKSB7XG4gICAgY29uc3QgW0NyZWF0ZW1vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFt0b2tlbk5hbWUsIHNldFRva2VuTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Rva2VuU3ltYm9sLCBzZXRUb2tlblN5bWJvbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGlkLCBzZXRzZWxlY3RpZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkdHlwZSwgc2V0c2VsZWN0ZWR0eXBlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbU2VsZWN0ZWRUaXRsZSwgc2V0U2VsZWN0ZWRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW1NlbGVjdGVkZW5kRGF0ZSwgc2V0U2VsZWN0ZWRlbmREYXRlXSA9IHVzZVN0YXRlKCcnKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcblxuICAgICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcbiAgICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignYWNjb3VudHNDaGFuZ2VkJywgZmV0Y2hDb250cmFjdERhdGEpO1xuICAgICAgICAgICAgd2luZG93LmV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdjaGFpbkNoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XG4gICAgICAgIH07XG4gICAgfSwgW2NvbnRyYWN0XSk7XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxjdWxhdGVUaW1lTGVmdCgpO1xuICAgIH0sIDEwMDApO1xuXG5cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJEYXRlQ291bnRcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgfSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRyYWN0RGF0YSgpIHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGNvbnRyYWN0KSB7XG4gICAgICAgICAgICAgICAgc2V0VG9rZW5OYW1lKGF3YWl0IGNvbnRyYWN0Lm5hbWUoKSk7XG4gICAgICAgICAgICAgICAgc2V0VG9rZW5TeW1ib2woYXdhaXQgY29udHJhY3Quc3ltYm9sKCkpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxFdmVudCA9IGF3YWl0IGNvbnRyYWN0LnRvdGFsRXZlbnQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE51bWJlcih0b3RhbEV2ZW50KTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgY29udHJhY3QuZXZlbnRVUkkoaSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gbmV3IERhdGUob2JqZWN0LnByb3BlcnRpZXMuRGF0ZS5kZXNjcmlwdGlvbikuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCItXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmljZWRlczEgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHsgcHJpY2VkZXMxID0gTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24gKiAxLjEwKSB9IGNhdGNoIChleCkgeyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudElkOiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlOiBvYmplY3QucHJvcGVydGllcy5UaXRsZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlOiBvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWx1c2Q6IGZvcm1hdHRlci5mb3JtYXQocHJpY2VkZXMxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsOiBvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286IG9iamVjdC5wcm9wZXJ0aWVzLmxvZ28uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0TGlzdChhcnIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsKGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnRpZFwiKSk7XG4gICAgICAgIHNldFNlbGVjdGVkVGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnR0aXRsZVwiKSk7XG4gICAgICAgIHNldFNlbGVjdGVkZW5kRGF0ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0ZWR0eXBlKFwiTkZUXCIpO1xuXG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICBpZiAocy50b1N0cmluZygpLmluY2x1ZGVzKFwiLVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiRXhwaXJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkRvbmF0aW9uPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRG9uYXRpb25cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL0xvZ28uc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J0RvbmF0aW9uQmFyJz5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz0nP3E9QWxsJz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsgYWN0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFsbFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1Ub2RheSc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRvZGF5XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89Jz9xPVRoaXMgTW9udGgnPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayc+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIE1vbnRoXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmV2ZW50SWR9IGNsYXNzTmFtZT1cImRvbmF0aW9uIHJvd1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9uYXRpb24gRGF0ZWNvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IG5hbWU9XCJEYXRlQ291bnRcImNsYXNzTmFtZT1cImRvbmF0aW9uIERhdGVjb3VudFRcIiAgIGRhdGU9e2xpc3RJdGVtLkRhdGV9PntMZWZ0RGF0ZShsaXN0SXRlbS5EYXRlKX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9uYXRpb24tZXZlbnRjb25hdGluZXInID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nZG9uYXRpb24gZXZlbnQtaW1nJyBzcmM9e2xpc3RJdGVtLmxvZ299ICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb25hdGlvbiBldmVudC1kZXRhaWxzLWNvbnRhaW5lcicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdkb25hdGlvbiBldmVudC1kZXRhaWxzLXRpdGxlJz57bGlzdEl0ZW0uVGl0bGV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgXCJ3aGl0ZVNwYWNlXCI6IFwicHJlLXdyYXBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2RvbmF0aW9uIGV2ZW50LWdvYWwtcHJpY2UnID5Hb2FsOiAgPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2RvbmF0aW9uIGV2ZW50LWdvYWwtcHJpY2UnID4ke2xpc3RJdGVtLkdvYWx1c2R9ICh7bGlzdEl0ZW0uR29hbH0gY0VVUik8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPSdkb25hdGlvbiBldmVudC1CVE4tY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb25hdGlvbiBldmVudC1CVE4gY2FyZCcgZXZlbnRpZD17bGlzdEl0ZW0uZXZlbnRJZH0gZGF0ZT17bGlzdEl0ZW0uRGF0ZX0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IGRhdGU9e2xpc3RJdGVtLkRhdGV9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGUgTkZUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvbmF0aW9uL2F1Y3Rpb24/WyR7bGlzdEl0ZW0uZXZlbnRJZH1dYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RvbmF0aW9uIGV2ZW50LUJUTiBjYXJkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gdG8gYXVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluayA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPERvbmF0ZU5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17Q3JlYXRlbW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY29udHJhY3Q9e2NvbnRyYWN0fVxuICAgICAgICAgICAgICAgIHNlbmRlckFkZHJlc3M9e3NpZ25lckFkZHJlc3N9XG4gICAgICAgICAgICAgICAgRXZlbnRJRD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0ZWR0eXBlfVxuICAgICAgICAgICAgICAgIFNlbGVjdGVkVGl0bGU9e1NlbGVjdGVkVGl0bGV9XG4gICAgICAgICAgICAgICAgZW5kZGF0ZT17U2VsZWN0ZWRlbmREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xcclxcbiAgICAuZG9uYXRpb24ucm93IHtcXHJcXG4gICAgICAgIGhlaWdodDogMTgxcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDEycHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9uLkRhdGVjb3VudCB7XFxyXFxuICAgICAgICB0b3A6IDEwcHg7XFxyXFxuICAgICAgICBsZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbi5EYXRlY291bnRUIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbi1ldmVudGNvbmF0aW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgdG9wOiA0MXB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMTBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbi5ldmVudC1pbWcge1xcclxcbiAgICAgICAgYXNwZWN0LXJhdGlvOiA0O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMTBweDtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDExMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uYXRpb24uZXZlbnQtZGV0YWlscy1jb250YWluZXJ7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMXB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHJvdy1nYXA6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9uLmV2ZW50LWRldGFpbHMtdGl0bGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uYXRpb24uZXZlbnQtZ29hbC1wcmljZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5kb25hdGlvbi5ldmVudC1CVE57XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjIyLCAyMDUpO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICAgICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMTE0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9uLmV2ZW50LUJUTi1jb250YWluZXJ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICByaWdodDogMjBweDtcXHJcXG4gICAgICAgIGJvdHRvbTogMjBweDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2NnB4KSB7XFxyXFxuICAgIC5kb25hdGlvbi5yb3cge1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDE0dncqMS43KTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICBtYXJnaW46IDMwcHggMzBweDtcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbi5EYXRlY291bnQge1xcclxcbiAgICAgICAgdG9wOiAxOHB4O1xcclxcbiAgICAgICAgbGVmdDogMjVweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb24uRGF0ZWNvdW50VCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMXZ3ICoxLjUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbi1ldmVudGNvbmF0aW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgdG9wOiBjYWxjKDJ2dyoyLjMpO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMjVweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgZ2FwOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbi5ldmVudC1pbWcge1xcclxcbiAgICAgICAgYXNwZWN0LXJhdGlvOiA0IC8gMTtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKDE1dncqIDEuMik7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTV2dyAqIDEuMik7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9uLmV2ZW50LWRldGFpbHMtY29udGFpbmVye1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICByb3ctZ2FwOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5kb25hdGlvbi5ldmVudC1kZXRhaWxzLXRpdGxle1xcclxcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDF2dyAqMik7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9uLmV2ZW50LWdvYWwtcHJpY2V7XFxyXFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMXZ3ICoxLjUpO1xcclxcbiAgICB9XFxyXFxuICAgIC5kb25hdGlvbi5ldmVudC1CVE57XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjIyLCAyMDUpO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDN2dyk7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3Z3O1xcclxcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICAgICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygxMHZ3KjIpO1xcclxcbiAgICB9XFxyXFxuICAgIC5kb25hdGlvbi5ldmVudC1CVE4tY29udGFpbmVye1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICBib3R0b206IDIwcHg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL2RvbmF0aW9uL2RvbmF0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVO1FBQ1Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsV0FBVztRQUNYLGFBQWE7SUFDakI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osNEJBQTRCO1FBQzVCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsWUFBWTtRQUNaLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFFBQVE7UUFDUixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFlBQVk7UUFDWiwyQkFBMkI7UUFDM0IscUJBQXFCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLGlCQUFpQjs7SUFFckI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsVUFBVTtRQUNWLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixXQUFXO1FBQ1gsU0FBUztJQUNiOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0Qix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLFlBQVk7UUFDWiw0QkFBNEI7UUFDNUIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixZQUFZO1FBQ1osVUFBVTtRQUNWLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGFBQWE7UUFDYixRQUFRO1FBQ1Isa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO1FBQ1osMkJBQTJCO1FBQzNCLHFCQUFxQjtJQUN6QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY2cHgpIHtcXHJcXG4gICAgLmRvbmF0aW9uLnJvdyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE4MXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAxMnB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgcGFkZGluZzogMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbi5EYXRlY291bnQge1xcclxcbiAgICAgICAgdG9wOiAxMHB4O1xcclxcbiAgICAgICAgbGVmdDogMTBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb24uRGF0ZWNvdW50VCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb24tZXZlbnRjb25hdGluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHRvcDogNDFweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICByaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb24uZXZlbnQtaW1nIHtcXHJcXG4gICAgICAgIGFzcGVjdC1yYXRpbzogNDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTEwcHg7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTEwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMTEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9uLmV2ZW50LWRldGFpbHMtY29udGFpbmVye1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICByb3ctZ2FwOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5kb25hdGlvbi5ldmVudC1kZXRhaWxzLXRpdGxle1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9uLmV2ZW50LWdvYWwtcHJpY2V7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uYXRpb24uZXZlbnQtQlROe1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDIyMiwgMjA1KTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDExNHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5kb25hdGlvbi5ldmVudC1CVE4tY29udGFpbmVye1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICBib3R0b206IDIwcHg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjZweCkge1xcclxcbiAgICAuZG9uYXRpb24ucm93IHtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxNHZ3KjEuNyk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgbWFyZ2luOiAzMHB4IDMwcHg7XFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb24uRGF0ZWNvdW50IHtcXHJcXG4gICAgICAgIHRvcDogMThweDtcXHJcXG4gICAgICAgIGxlZnQ6IDI1cHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9uLkRhdGVjb3VudFQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDF2dyAqMS41KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb24tZXZlbnRjb25hdGluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHRvcDogY2FsYygydncqMi4zKTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGxlZnQ6IDI1cHg7XFxyXFxuICAgICAgICByaWdodDogMjVweDtcXHJcXG4gICAgICAgIGdhcDogMTVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb24uZXZlbnQtaW1nIHtcXHJcXG4gICAgICAgIGFzcGVjdC1yYXRpbzogNCAvIDE7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygxNXZ3KiAxLjIpO1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDE1dncgKiAxLjIpO1xcclxcbiAgICB9XFxyXFxuICAgIC5kb25hdGlvbi5ldmVudC1kZXRhaWxzLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcm93LWdhcDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uYXRpb24uZXZlbnQtZGV0YWlscy10aXRsZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygxdncgKjIpO1xcclxcbiAgICB9XFxyXFxuICAgIC5kb25hdGlvbi5ldmVudC1nb2FsLXByaWNle1xcclxcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDF2dyAqMS41KTtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uYXRpb24uZXZlbnQtQlROe1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDIyMiwgMjA1KTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYygzdncpO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDN2dztcXHJcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMTB2dyoyKTtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uYXRpb24uZXZlbnQtQlROLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBnYXA6IDVweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgYm90dG9tOiAyMHB4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMjRlODFhYTU3ZTQ3NDk0NGMzNTZcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsIkxpbmsiLCJSb3V0ZXIiLCJOYXZMaW5rIiwiQ2FyZCIsIkNvbCIsIlJvdyIsInVzZUNvbnRyYWN0IiwiRG9uYXRlTkZUTW9kYWwiLCJIZWFkZXIiLCJEb25hdGlvbiIsIkNyZWF0ZW1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsImxpc3QiLCJzZXRMaXN0IiwidG9rZW5OYW1lIiwic2V0VG9rZW5OYW1lIiwidG9rZW5TeW1ib2wiLCJzZXRUb2tlblN5bWJvbCIsInNlbGVjdGlkIiwic2V0c2VsZWN0aWQiLCJzZWxlY3RlZHR5cGUiLCJzZXRzZWxlY3RlZHR5cGUiLCJTZWxlY3RlZFRpdGxlIiwic2V0U2VsZWN0ZWRUaXRsZSIsIlNlbGVjdGVkZW5kRGF0ZSIsInNldFNlbGVjdGVkZW5kRGF0ZSIsImZldGNoQ29udHJhY3REYXRhIiwid2luZG93IiwiZXRoZXJldW0iLCJvbiIsInJlbW92ZUxpc3RlbmVyIiwic2V0SW50ZXJ2YWwiLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImkiLCJsZW5ndGgiLCJkYXRlIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiTGVmdERhdGUiLCJlcnJvciIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJuYW1lIiwic3ltYm9sIiwidG90YWxFdmVudCIsImFyciIsIk51bWJlciIsImV2ZW50VVJJIiwidmFsdWUiLCJkYSIsIk1hdGgiLCJmbG9vciIsImQiLCJoIiwibSIsIm9iamVjdCIsIkpTT04iLCJwYXJzZSIsImMiLCJEYXRlIiwicHJvcGVydGllcyIsImRlc2NyaXB0aW9uIiwiZ2V0VGltZSIsIm4iLCJzIiwidG9TdHJpbmciLCJwcmljZWRlczEiLCJHb2FsIiwiZXgiLCJwdXNoIiwiZXZlbnRJZCIsIlRpdGxlIiwiR29hbHVzZCIsImZvcm1hdCIsImxvZ28iLCJjb25zb2xlIiwibG9nIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwiLCJlIiwidGFyZ2V0IiwiZGF0ZXRleHQiLCJoZWlnaHQiLCJsaXN0SXRlbSIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9