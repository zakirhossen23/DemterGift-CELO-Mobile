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
      overflow: 'auto',
      height: '100%'
    }
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      key: listItem.eventId,
      className: "donation row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation Datecount",
      style: {
        top: '10px',
        left: '10px',
        position: 'absolute'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h6", {
      name: "DateCount",
      className: "donation DatecountT",
      date: listItem.Date
    }, LeftDate(listItem.Date))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation-eventconatiner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
      className: "donation event-img",
      src: listItem.logo,
      style: {
        aspectRatio: '4',
        maxWidth: '110px',
        maxHeight: '110px',
        height: '110px',
        width: '110px'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        marginLeft: '1px',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        width: '100%',
        rowGap: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h6", null, listItem.Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        display: "flex",
        "whiteSpace": "pre-wrap"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h6", {
      style: {
        fontSize: '0.7rem'
      }
    }, "Goal:  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h6", {
      style: {
        fontSize: '0.7rem'
      }
    }, "$", listItem.Goalusd, " (", listItem.Goal, " cEUR)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        display: "flex",
        gap: 5,
        justifyContent: "flex-start",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      eventid: listItem.eventId,
      date: listItem.Date,
      eventtitle: listItem.Title,
      onClick: activateCreateNFTModal,
      className: "card",
      style: {
        color: "white",
        background: "rgb(0, 222, 205)",
        textAlign: "center",
        cursor: "pointer",
        height: "100%",
        float: "right",
        margin: 0,
        width: 114
      }
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
      className: "card",
      style: {
        color: "white",
        background: "rgb(0, 222, 205)",
        textAlign: "center",
        cursor: "pointer",
        height: "100%",
        float: "right",
        margin: 0,
        width: 114
      }
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
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 766px) {\r\n    .donation.row {\r\n        height: 181px;\r\n        margin: 12px;\r\n        background: white;\r\n        color: black;\r\n        position: relative;\r\n        overflow: hidden;\r\n        padding: 0px;\r\n    }\r\n\r\n    .donation.Datecount {\r\n        top: 10px;\r\n        left: 10px;\r\n        position: absolute;\r\n    }\r\n\r\n    .donation.DatecountT {\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .donation-eventconatiner {\r\n        display: flex;\r\n        top: 41px;\r\n        position: absolute;\r\n        left: 10px;\r\n        right: 10px;\r\n    }\r\n\r\n    .donation.event-img {\r\n        aspect-ratio: 4;\r\n        max-width: 110px;\r\n        max-height: 110px;\r\n        height: 110px;\r\n        width: 110px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 500px) {\r\n    .donation.row {\r\n        height: calc(14vw*1.7);\r\n        background: white;\r\n        color: black;\r\n        position: relative;\r\n        overflow: hidden;\r\n        padding: 0;\r\n        margin: 30px 30px;\r\n        \r\n    }\r\n\r\n    .donation.Datecount {\r\n        top: 18px;\r\n        left: 25px;\r\n        position: absolute;\r\n    }\r\n\r\n    .donation.DatecountT {\r\n        font-size: calc(1vw *1.5);\r\n    }\r\n\r\n    .donation-eventconatiner {\r\n        display: flex;\r\n        top: calc(2vw*2.3);\r\n        position: absolute;\r\n        left: 25px;\r\n        right: 25px;\r\n        gap: 15px;\r\n    }\r\n\r\n    .donation.event-img {\r\n        aspect-ratio: 4 / 1;\r\n        width: calc(15vw* 1.2);\r\n        height: calc(15vw * 1.2);\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/pages/donation/donation.css"],"names":[],"mappings":"AAAA;IACI;QACI,aAAa;QACb,YAAY;QACZ,iBAAiB;QACjB,YAAY;QACZ,kBAAkB;QAClB,gBAAgB;QAChB,YAAY;IAChB;;IAEA;QACI,SAAS;QACT,UAAU;QACV,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,aAAa;QACb,SAAS;QACT,kBAAkB;QAClB,UAAU;QACV,WAAW;IACf;;IAEA;QACI,eAAe;QACf,gBAAgB;QAChB,iBAAiB;QACjB,aAAa;QACb,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,sBAAsB;QACtB,iBAAiB;QACjB,YAAY;QACZ,kBAAkB;QAClB,gBAAgB;QAChB,UAAU;QACV,iBAAiB;;IAErB;;IAEA;QACI,SAAS;QACT,UAAU;QACV,kBAAkB;IACtB;;IAEA;QACI,yBAAyB;IAC7B;;IAEA;QACI,aAAa;QACb,kBAAkB;QAClB,kBAAkB;QAClB,UAAU;QACV,WAAW;QACX,SAAS;IACb;;IAEA;QACI,mBAAmB;QACnB,sBAAsB;QACtB,wBAAwB;IAC5B;AACJ","sourcesContent":["@media only screen and (max-width: 766px) {\r\n    .donation.row {\r\n        height: 181px;\r\n        margin: 12px;\r\n        background: white;\r\n        color: black;\r\n        position: relative;\r\n        overflow: hidden;\r\n        padding: 0px;\r\n    }\r\n\r\n    .donation.Datecount {\r\n        top: 10px;\r\n        left: 10px;\r\n        position: absolute;\r\n    }\r\n\r\n    .donation.DatecountT {\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .donation-eventconatiner {\r\n        display: flex;\r\n        top: 41px;\r\n        position: absolute;\r\n        left: 10px;\r\n        right: 10px;\r\n    }\r\n\r\n    .donation.event-img {\r\n        aspect-ratio: 4;\r\n        max-width: 110px;\r\n        max-height: 110px;\r\n        height: 110px;\r\n        width: 110px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 500px) {\r\n    .donation.row {\r\n        height: calc(14vw*1.7);\r\n        background: white;\r\n        color: black;\r\n        position: relative;\r\n        overflow: hidden;\r\n        padding: 0;\r\n        margin: 30px 30px;\r\n        \r\n    }\r\n\r\n    .donation.Datecount {\r\n        top: 18px;\r\n        left: 25px;\r\n        position: absolute;\r\n    }\r\n\r\n    .donation.DatecountT {\r\n        font-size: calc(1vw *1.5);\r\n    }\r\n\r\n    .donation-eventconatiner {\r\n        display: flex;\r\n        top: calc(2vw*2.3);\r\n        position: absolute;\r\n        left: 25px;\r\n        right: 25px;\r\n        gap: 15px;\r\n    }\r\n\r\n    .donation.event-img {\r\n        aspect-ratio: 4 / 1;\r\n        width: calc(15vw* 1.2);\r\n        height: calc(15vw * 1.2);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/donation/donation.css":
/*!*****************************************!*\
  !*** ./src/pages/donation/donation.css ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./donation.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/donation/donation.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!./donation.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/donation/donation.css",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./donation.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/donation/donation.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_donation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "acae0fbb2b0b1aeb5953"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmVhNDMyNzJkOTI0Y2RlZTA3YTBkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU2EsUUFBVCxHQUFvQjtBQUMvQixrQkFBd0NaLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT2EsZUFBUDtBQUFBLE1BQXdCQyxZQUF4Qjs7QUFDQSxxQkFBb0NMLGlFQUFXLENBQUMsUUFBRCxDQUEvQztBQUFBLE1BQVFNLFFBQVIsZ0JBQVFBLFFBQVI7QUFBQSxNQUFrQkMsYUFBbEIsZ0JBQWtCQSxhQUFsQjs7QUFDQSxtQkFBd0JoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9pQixJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBa0NsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU9tQixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFzQ3BCLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBO0FBQUEsTUFBT3FCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQWdDdEIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPdUIsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxvQkFBd0N4QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU95QixZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG9CQUEwQzFCLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBTzJCLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG9CQUE4QzVCLCtDQUFRLENBQUMsRUFBRCxDQUF0RDtBQUFBO0FBQUEsTUFBTzZCLGVBQVA7QUFBQSxNQUF3QkMsa0JB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QUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUE0RztBQUM1RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHlGQUFPOzs7QUFHeEIsSUFBSSxJQUFVO0FBQ2QsT0FBTyxnR0FBYyxJQUFJLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsZ0dBQWM7QUFDdkMsb0NBQW9DLDhFQUFXLEdBQUcsZ0dBQWM7O0FBRWhFLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sOElBQStEO0FBQ3JFLE1BQU07QUFBQTtBQUNOLHNEQUFzRCw4RUFBVyxHQUFHLGdHQUFjO0FBQ2xGLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyw4RUFBVyxHQUFHLGdHQUFjOztBQUV0RSxxQkFBcUIseUZBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUc4RTtBQUM5RSxPQUFPLCtEQUFlLHlGQUFPLElBQUksZ0dBQWMsR0FBRyxnR0FBYyxZQUFZLEVBQUM7Ozs7Ozs7OztVQ25GN0UscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9zcmMvcGFnZXMvZG9uYXRpb24vaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL2RvbmF0aW9uL2RvbmF0aW9uLmNzcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9kb25hdGlvbi9kb25hdGlvbi5jc3M/OGJmMSIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuaW1wb3J0IERvbmF0ZU5GVE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9IZWFkZXInXG5pbXBvcnQgJy4vZG9uYXRpb24uY3NzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbmF0aW9uKCkge1xuICAgIGNvbnN0IFtDcmVhdGVtb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbdG9rZW5OYW1lLCBzZXRUb2tlbk5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt0b2tlblN5bWJvbCwgc2V0VG9rZW5TeW1ib2xdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3RpZCwgc2V0c2VsZWN0aWRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3RlZHR5cGUsIHNldHNlbGVjdGVkdHlwZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW1NlbGVjdGVkVGl0bGUsIHNldFNlbGVjdGVkVGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtTZWxlY3RlZGVuZERhdGUsIHNldFNlbGVjdGVkZW5kRGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XG5cbiAgICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XG4gICAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbignY2hhaW5DaGFuZ2VkJywgZmV0Y2hDb250cmFjdERhdGEpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2FjY291bnRzQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcbiAgICAgICAgICAgIHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignY2hhaW5DaGFuZ2VkJywgZmV0Y2hDb250cmFjdERhdGEpO1xuICAgICAgICB9O1xuICAgIH0sIFtjb250cmFjdF0pO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcbiAgICB9LCAxMDAwKTtcblxuXG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiRGF0ZUNvdW50XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChjb250cmFjdCkge1xuICAgICAgICAgICAgICAgIHNldFRva2VuTmFtZShhd2FpdCBjb250cmFjdC5uYW1lKCkpO1xuICAgICAgICAgICAgICAgIHNldFRva2VuU3ltYm9sKGF3YWl0IGNvbnRyYWN0LnN5bWJvbCgpKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsRXZlbnQgPSBhd2FpdCBjb250cmFjdC50b3RhbEV2ZW50KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1iZXIodG90YWxFdmVudCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGNvbnRyYWN0LmV2ZW50VVJJKGkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24pLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocy50b1N0cmluZygpLmluY2x1ZGVzKFwiLVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpY2VkZXMxID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7IHByaWNlZGVzMSA9IE51bWJlcihvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uICogMS4xMCkgfSBjYXRjaCAoZXgpIHsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRJZDogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXRsZTogb2JqZWN0LnByb3BlcnRpZXMuVGl0bGUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZTogb2JqZWN0LnByb3BlcnRpZXMuRGF0ZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsdXNkOiBmb3JtYXR0ZXIuZm9ybWF0KHByaWNlZGVzMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR29hbDogb2JqZWN0LnByb3BlcnRpZXMuR29hbC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBvYmplY3QucHJvcGVydGllcy5sb2dvLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0aXZhdGVDcmVhdGVORlRNb2RhbChlKSB7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImV2ZW50aWRcIikpO1xuICAgICAgICBzZXRTZWxlY3RlZFRpdGxlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImV2ZW50dGl0bGVcIikpO1xuICAgICAgICBzZXRTZWxlY3RlZGVuZERhdGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKSk7XG4gICAgICAgIHNldHNlbGVjdGVkdHlwZShcIk5GVFwiKTtcblxuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgaWYgKHMudG9TdHJpbmcoKS5pbmNsdWRlcyhcIi1cIikpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkV4cGlyZWRcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcIiBEYXlzIFwiICsgaC50b1N0cmluZygpICsgXCIgaG91cnMgXCIgKyBtLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIFwiICsgcy50b1N0cmluZygpICsgXCIgc2Vjb25kc1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Eb25hdGlvbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkRvbmF0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9Mb2dvLnN2Z1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPSdEb25hdGlvbkJhcic+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89Jz9xPUFsbCc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rIGFjdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbGxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz0nP3E9VG9kYXknPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayc+XG4gICAgICAgICAgICAgICAgICAgICAgICBUb2RheVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1UaGlzIE1vbnRoJz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBNb250aFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2F1dG8nLCBoZWlnaHQ6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICB7bGlzdC5tYXAoKGxpc3RJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5ldmVudElkfSBjbGFzc05hbWU9XCJkb25hdGlvbiByb3dcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbmF0aW9uIERhdGVjb3VudFwiIHN0eWxlPXt7IHRvcDogJzEwcHgnLCBsZWZ0OiAnMTBweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBuYW1lPVwiRGF0ZUNvdW50XCJjbGFzc05hbWU9XCJkb25hdGlvbiBEYXRlY291bnRUXCIgICBkYXRlPXtsaXN0SXRlbS5EYXRlfT57TGVmdERhdGUobGlzdEl0ZW0uRGF0ZSl9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RvbmF0aW9uLWV2ZW50Y29uYXRpbmVyJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2RvbmF0aW9uIGV2ZW50LWltZycgc3JjPXtsaXN0SXRlbS5sb2dvfSBzdHlsZT17eyBhc3BlY3RSYXRpbzogJzQnLCBtYXhXaWR0aDogJzExMHB4JywgbWF4SGVpZ2h0OiAnMTEwcHgnLCBoZWlnaHQ6ICcxMTBweCcsIHdpZHRoOiAnMTEwcHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMXB4JywgZGlzcGxheTogJ2ZsZXgnLCBoZWlnaHQ6ICcxMDAlJywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHdpZHRoOiAnMTAwJScsIHJvd0dhcDogJzEwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2xpc3RJdGVtLlRpdGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIFwid2hpdGVTcGFjZVwiOiBcInByZS13cmFwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgc3R5bGU9e3sgZm9udFNpemU6ICcwLjdyZW0nIH19PkdvYWw6ICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7IGZvbnRTaXplOiAnMC43cmVtJyB9fT4ke2xpc3RJdGVtLkdvYWx1c2R9ICh7bGlzdEl0ZW0uR29hbH0gY0VVUik8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiA1LCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsIGFsaWduSXRlbXM6IFwiZmxleC1lbmRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZXZlbnRpZD17bGlzdEl0ZW0uZXZlbnRJZH0gZGF0ZT17bGlzdEl0ZW0uRGF0ZX0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBiYWNrZ3JvdW5kOiBcInJnYigwLCAyMjIsIDIwNSlcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBmbG9hdDogXCJyaWdodFwiLCBtYXJnaW46IDAsIHdpZHRoOiAxMTQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBkYXRlPXtsaXN0SXRlbS5EYXRlfSBldmVudHRpdGxlPXtsaXN0SXRlbS5UaXRsZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uYXRlIE5GVFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9kb25hdGlvbi9hdWN0aW9uP1ske2xpc3RJdGVtLmV2ZW50SWR9XWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIGJhY2tncm91bmQ6IFwicmdiKDAsIDIyMiwgMjA1KVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGhlaWdodDogXCIxMDAlXCIsIGZsb2F0OiBcInJpZ2h0XCIsIG1hcmdpbjogMCwgd2lkdGg6IDExNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gdG8gYXVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluayA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPERvbmF0ZU5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17Q3JlYXRlbW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY29udHJhY3Q9e2NvbnRyYWN0fVxuICAgICAgICAgICAgICAgIHNlbmRlckFkZHJlc3M9e3NpZ25lckFkZHJlc3N9XG4gICAgICAgICAgICAgICAgRXZlbnRJRD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0ZWR0eXBlfVxuICAgICAgICAgICAgICAgIFNlbGVjdGVkVGl0bGU9e1NlbGVjdGVkVGl0bGV9XG4gICAgICAgICAgICAgICAgZW5kZGF0ZT17U2VsZWN0ZWRlbmREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xcclxcbiAgICAuZG9uYXRpb24ucm93IHtcXHJcXG4gICAgICAgIGhlaWdodDogMTgxcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDEycHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9uLkRhdGVjb3VudCB7XFxyXFxuICAgICAgICB0b3A6IDEwcHg7XFxyXFxuICAgICAgICBsZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbi5EYXRlY291bnRUIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbi1ldmVudGNvbmF0aW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgdG9wOiA0MXB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMTBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbi5ldmVudC1pbWcge1xcclxcbiAgICAgICAgYXNwZWN0LXJhdGlvOiA0O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMTBweDtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDExMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XFxyXFxuICAgIC5kb25hdGlvbi5yb3cge1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDE0dncqMS43KTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICBtYXJnaW46IDMwcHggMzBweDtcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbi5EYXRlY291bnQge1xcclxcbiAgICAgICAgdG9wOiAxOHB4O1xcclxcbiAgICAgICAgbGVmdDogMjVweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb24uRGF0ZWNvdW50VCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMXZ3ICoxLjUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbi1ldmVudGNvbmF0aW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgdG9wOiBjYWxjKDJ2dyoyLjMpO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMjVweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgZ2FwOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbi5ldmVudC1pbWcge1xcclxcbiAgICAgICAgYXNwZWN0LXJhdGlvOiA0IC8gMTtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKDE1dncqIDEuMik7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTV2dyAqIDEuMik7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL2RvbmF0aW9uL2RvbmF0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxVQUFVO1FBQ1Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLGlCQUFpQjs7SUFFckI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsVUFBVTtRQUNWLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixXQUFXO1FBQ1gsU0FBUztJQUNiOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0Qix3QkFBd0I7SUFDNUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NnB4KSB7XFxyXFxuICAgIC5kb25hdGlvbi5yb3cge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxODFweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMTJweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb24uRGF0ZWNvdW50IHtcXHJcXG4gICAgICAgIHRvcDogMTBweDtcXHJcXG4gICAgICAgIGxlZnQ6IDEwcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9uLkRhdGVjb3VudFQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9uLWV2ZW50Y29uYXRpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB0b3A6IDQxcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9uLmV2ZW50LWltZyB7XFxyXFxuICAgICAgICBhc3BlY3QtcmF0aW86IDQ7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDExMHB4O1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMTEwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDExMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgLmRvbmF0aW9uLnJvdyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTR2dyoxLjcpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIG1hcmdpbjogMzBweCAzMHB4O1xcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9uLkRhdGVjb3VudCB7XFxyXFxuICAgICAgICB0b3A6IDE4cHg7XFxyXFxuICAgICAgICBsZWZ0OiAyNXB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbi5EYXRlY291bnRUIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygxdncgKjEuNSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9uLWV2ZW50Y29uYXRpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoMnZ3KjIuMyk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiAyNXB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDI1cHg7XFxyXFxuICAgICAgICBnYXA6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9uLmV2ZW50LWltZyB7XFxyXFxuICAgICAgICBhc3BlY3QtcmF0aW86IDQgLyAxO1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMTV2dyogMS4yKTtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxNXZ3ICogMS4yKTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RvbmF0aW9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kb25hdGlvbi5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RvbmF0aW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJhY2FlMGZiYjJiMGIxYWViNTk1M1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiTGluayIsIlJvdXRlciIsIk5hdkxpbmsiLCJDYXJkIiwiQ29sIiwiUm93IiwidXNlQ29udHJhY3QiLCJEb25hdGVORlRNb2RhbCIsIkhlYWRlciIsIkRvbmF0aW9uIiwiQ3JlYXRlbW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwibGlzdCIsInNldExpc3QiLCJ0b2tlbk5hbWUiLCJzZXRUb2tlbk5hbWUiLCJ0b2tlblN5bWJvbCIsInNldFRva2VuU3ltYm9sIiwic2VsZWN0aWQiLCJzZXRzZWxlY3RpZCIsInNlbGVjdGVkdHlwZSIsInNldHNlbGVjdGVkdHlwZSIsIlNlbGVjdGVkVGl0bGUiLCJzZXRTZWxlY3RlZFRpdGxlIiwiU2VsZWN0ZWRlbmREYXRlIiwic2V0U2VsZWN0ZWRlbmREYXRlIiwiZmV0Y2hDb250cmFjdERhdGEiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIm9uIiwicmVtb3ZlTGlzdGVuZXIiLCJzZXRJbnRlcnZhbCIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwiYWxsRGF0ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiaSIsImxlbmd0aCIsImRhdGUiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJMZWZ0RGF0ZSIsImVycm9yIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIm5hbWUiLCJzeW1ib2wiLCJ0b3RhbEV2ZW50IiwiYXJyIiwiTnVtYmVyIiwiZXZlbnRVUkkiLCJ2YWx1ZSIsImRhIiwiTWF0aCIsImZsb29yIiwiZCIsImgiLCJtIiwib2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiYyIsIkRhdGUiLCJwcm9wZXJ0aWVzIiwiZGVzY3JpcHRpb24iLCJnZXRUaW1lIiwibiIsInMiLCJ0b1N0cmluZyIsInByaWNlZGVzMSIsIkdvYWwiLCJleCIsInB1c2giLCJldmVudElkIiwiVGl0bGUiLCJHb2FsdXNkIiwiZm9ybWF0IiwibG9nbyIsImNvbnNvbGUiLCJsb2ciLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYWN0aXZhdGVDcmVhdGVORlRNb2RhbCIsImUiLCJ0YXJnZXQiLCJkYXRldGV4dCIsIm92ZXJmbG93IiwiaGVpZ2h0IiwibGlzdEl0ZW0iLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJhc3BlY3RSYXRpbyIsIm1heFdpZHRoIiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJyb3dHYXAiLCJmb250U2l6ZSIsImdhcCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsImN1cnNvciIsImZsb2F0IiwibWFyZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==