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
    }, "$", listItem.Goalusd, " (", listItem.Goal, " cEUR)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation event-BTN-container"
    }, window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.NavLink, {
      to: "/login?[/donation]"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation event-BTN card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation event-btn-text card-body",
      style: {
        height: "100%"
      }
    }, "Login")))) : window.localStorage.getItem('Type') == "user" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation event-BTN card",
      eventid: listItem.eventId,
      date: listItem.Date,
      eventtitle: listItem.Title,
      onClick: activateCreateNFTModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      eventid: listItem.eventId,
      date: listItem.Date,
      eventtitle: listItem.Title,
      className: "donation event-btn-text card-body",
      style: {
        height: "100%"
      }
    }, "Donate NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.NavLink, {
      to: "/donation/auction?[".concat(listItem.eventId, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation event-BTN card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation event-btn-text card-body",
      style: {
        height: "100%"
      }
    }, "Go to auction")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.NavLink, {
      to: "/donation/auction?[".concat(listItem.eventId, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation event-BTN card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "donation event-btn-text card-body",
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "70972db001e8d1bfda23"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjIzZDhkZDk3MzVjZTdmODlmMjk0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU2EsUUFBVCxHQUFvQjtBQUMvQixrQkFBd0NaLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT2EsZUFBUDtBQUFBLE1BQXdCQyxZQUF4Qjs7QUFDQSxxQkFBb0NMLGlFQUFXLENBQUMsUUFBRCxDQUEvQztBQUFBLE1BQVFNLFFBQVIsZ0JBQVFBLFFBQVI7QUFBQSxNQUFrQkMsYUFBbEIsZ0JBQWtCQSxhQUFsQjs7QUFDQSxtQkFBd0JoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9pQixJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBa0NsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU9tQixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFzQ3BCLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBO0FBQUEsTUFBT3FCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQWdDdEIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPdUIsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxvQkFBd0N4QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU95QixZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG9CQUEwQzFCLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBTzJCLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG9CQUE4QzVCLCtDQUFRLENBQUMsRUFBRCxDQUF0RDtBQUFBO0FBQUEsTUFBTzZCLGVBQVA7QUFBQSxNQUF3QkMsa0JB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S0FBMUU7QUFBaUYsZUFBUyxFQUFDLG1DQUEzRjtBQUErSCxXQUFLLEVBQUU7QUFBRVksUUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFBdEksb0JBREosQ0FEcUQsZUFNckQsaURBQUMsc0RBQUQ7QUFBUyxRQUFFLCtCQUF3QkMsUUFBUSxDQUFDZCxPQUFqQztBQUFYLG9CQUNJO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0k7QUFBSyxlQUFTLEVBQUMsbUNBQWY7QUFBbUQsV0FBSyxFQUFFO0FBQUVhLFFBQUFBLE1BQU0sRUFBRTtBQUFWO0FBQTFELHVCQURKLENBREosQ0FOcUQsQ0FBakQsZ0JBYUEsaUhBQ0osaURBQUMsc0RBQUQ7QUFBUyxRQUFFLCtCQUF3QkMsUUFBUSxDQUFDZCxPQUFqQztBQUFYLG9CQUNJO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0k7QUFBSyxlQUFTLEVBQUMsbUNBQWY7QUFBbUQsV0FBSyxFQUFFO0FBQUVhLFFBQUFBLE1BQU0sRUFBRTtBQUFWO0FBQTFELHVCQURKLENBREosQ0FESSxDQXRCWixDQVZKLENBSkosQ0FETTtBQUFBLEdBQUwsQ0FEVCxDQTVCSixlQW1GSSxpREFBQyxxRkFBRDtBQUNJLFFBQUksRUFBRWpGLGVBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFDVkMsTUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNILEtBSkw7QUFLSSxZQUFRLEVBQUVDLFFBTGQ7QUFNSSxpQkFBYSxFQUFFQyxhQU5uQjtBQU9JLFdBQU8sRUFBRU8sUUFQYjtBQVFJLFFBQUksRUFBRUUsWUFSVjtBQVNJLGlCQUFhLEVBQUVFLGFBVG5CO0FBVUksV0FBTyxFQUFFRTtBQVZiLElBbkZKLENBREo7QUFrR0g7Ozs7Ozs7O1VDdk9ELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL2RvbmF0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuaW1wb3J0IERvbmF0ZU5GVE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9IZWFkZXInXG5pbXBvcnQgJy4vZG9uYXRpb24uY3NzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbmF0aW9uKCkge1xuICAgIGNvbnN0IFtDcmVhdGVtb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbdG9rZW5OYW1lLCBzZXRUb2tlbk5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt0b2tlblN5bWJvbCwgc2V0VG9rZW5TeW1ib2xdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3RpZCwgc2V0c2VsZWN0aWRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3RlZHR5cGUsIHNldHNlbGVjdGVkdHlwZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW1NlbGVjdGVkVGl0bGUsIHNldFNlbGVjdGVkVGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtTZWxlY3RlZGVuZERhdGUsIHNldFNlbGVjdGVkZW5kRGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XG5cbiAgICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XG4gICAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbignY2hhaW5DaGFuZ2VkJywgZmV0Y2hDb250cmFjdERhdGEpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2FjY291bnRzQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcbiAgICAgICAgICAgIHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignY2hhaW5DaGFuZ2VkJywgZmV0Y2hDb250cmFjdERhdGEpO1xuICAgICAgICB9O1xuICAgIH0sIFtjb250cmFjdF0pO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcbiAgICB9LCAxMDAwKTtcblxuXG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiRGF0ZUNvdW50XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChjb250cmFjdCkge1xuICAgICAgICAgICAgICAgIHNldFRva2VuTmFtZShhd2FpdCBjb250cmFjdC5uYW1lKCkpO1xuICAgICAgICAgICAgICAgIHNldFRva2VuU3ltYm9sKGF3YWl0IGNvbnRyYWN0LnN5bWJvbCgpKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsRXZlbnQgPSBhd2FpdCBjb250cmFjdC50b3RhbEV2ZW50KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1iZXIodG90YWxFdmVudCk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGNvbnRyYWN0LmV2ZW50VVJJKGkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gbmV3IERhdGUob2JqZWN0LnByb3BlcnRpZXMuRGF0ZS5kZXNjcmlwdGlvbikuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCItXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmljZWRlczEgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHsgcHJpY2VkZXMxID0gTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24gKiAxLjEwKSB9IGNhdGNoIChleCkgeyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudElkOiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlOiBvYmplY3QucHJvcGVydGllcy5UaXRsZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlOiBvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWx1c2Q6IGZvcm1hdHRlci5mb3JtYXQocHJpY2VkZXMxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsOiBvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286IG9iamVjdC5wcm9wZXJ0aWVzLmxvZ28uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0TGlzdChhcnIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsKGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnRpZFwiKSk7XG4gICAgICAgIHNldFNlbGVjdGVkVGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnR0aXRsZVwiKSk7XG4gICAgICAgIHNldFNlbGVjdGVkZW5kRGF0ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0ZWR0eXBlKFwiTkZUXCIpO1xuXG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICBpZiAocy50b1N0cmluZygpLmluY2x1ZGVzKFwiLVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiRXhwaXJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkRvbmF0aW9uPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRG9uYXRpb25cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL0xvZ28uc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9J0RvbmF0aW9uQmFyJz5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz0nP3E9QWxsJz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsgYWN0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFsbFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1Ub2RheSc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRvZGF5XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89Jz9xPVRoaXMgTW9udGgnPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayc+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIE1vbnRoXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmV2ZW50SWR9IGNsYXNzTmFtZT1cImRvbmF0aW9uIHJvd1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9uYXRpb24gRGF0ZWNvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IG5hbWU9XCJEYXRlQ291bnRcIiBjbGFzc05hbWU9XCJkb25hdGlvbiBEYXRlY291bnRUXCIgZGF0ZT17bGlzdEl0ZW0uRGF0ZX0+e0xlZnREYXRlKGxpc3RJdGVtLkRhdGUpfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb25hdGlvbi1ldmVudGNvbmF0aW5lcicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdkb25hdGlvbiBldmVudC1pbWcnIHNyYz17bGlzdEl0ZW0ubG9nb30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9uYXRpb24gZXZlbnQtZGV0YWlscy1jb250YWluZXInID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT0nZG9uYXRpb24gZXZlbnQtZGV0YWlscy10aXRsZSc+e2xpc3RJdGVtLlRpdGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIFwid2hpdGVTcGFjZVwiOiBcInByZS13cmFwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdkb25hdGlvbiBldmVudC1nb2FsLXByaWNlJyA+R29hbDogIDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdkb25hdGlvbiBldmVudC1nb2FsLXByaWNlJyA+JHtsaXN0SXRlbS5Hb2FsdXNkfSAoe2xpc3RJdGVtLkdvYWx9IGNFVVIpPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9uYXRpb24gZXZlbnQtQlROLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvbG9naW4/Wy9kb25hdGlvbl1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9uYXRpb24gZXZlbnQtQlROIGNhcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbmF0aW9uIGV2ZW50LWJ0bi10ZXh0IGNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluayA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikgOiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJ1c2VyXCIgPyAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb25hdGlvbiBldmVudC1CVE4gY2FyZCcgZXZlbnRpZD17bGlzdEl0ZW0uZXZlbnRJZH0gZGF0ZT17bGlzdEl0ZW0uRGF0ZX0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IGRhdGU9e2xpc3RJdGVtLkRhdGV9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBjbGFzc05hbWU9XCJkb25hdGlvbiBldmVudC1idG4tdGV4dCBjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGUgTkZUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvbmF0aW9uL2F1Y3Rpb24/WyR7bGlzdEl0ZW0uZXZlbnRJZH1dYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RvbmF0aW9uIGV2ZW50LUJUTiBjYXJkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGlvbiBldmVudC1idG4tdGV4dCBjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gdG8gYXVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluayA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikgOiAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvbmF0aW9uL2F1Y3Rpb24/WyR7bGlzdEl0ZW0uZXZlbnRJZH1dYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RvbmF0aW9uIGV2ZW50LUJUTiBjYXJkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGlvbiBldmVudC1idG4tdGV4dCBjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gdG8gYXVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluayA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8RG9uYXRlTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtDcmVhdGVtb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjb250cmFjdD17Y29udHJhY3R9XG4gICAgICAgICAgICAgICAgc2VuZGVyQWRkcmVzcz17c2lnbmVyQWRkcmVzc31cbiAgICAgICAgICAgICAgICBFdmVudElEPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3RlZHR5cGV9XG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRUaXRsZT17U2VsZWN0ZWRUaXRsZX1cbiAgICAgICAgICAgICAgICBlbmRkYXRlPXtTZWxlY3RlZGVuZERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjcwOTcyZGIwMDFlOGQxYmZkYTIzXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJMaW5rIiwiUm91dGVyIiwiTmF2TGluayIsIkNhcmQiLCJDb2wiLCJSb3ciLCJ1c2VDb250cmFjdCIsIkRvbmF0ZU5GVE1vZGFsIiwiSGVhZGVyIiwiRG9uYXRpb24iLCJDcmVhdGVtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJjb250cmFjdCIsInNpZ25lckFkZHJlc3MiLCJsaXN0Iiwic2V0TGlzdCIsInRva2VuTmFtZSIsInNldFRva2VuTmFtZSIsInRva2VuU3ltYm9sIiwic2V0VG9rZW5TeW1ib2wiLCJzZWxlY3RpZCIsInNldHNlbGVjdGlkIiwic2VsZWN0ZWR0eXBlIiwic2V0c2VsZWN0ZWR0eXBlIiwiU2VsZWN0ZWRUaXRsZSIsInNldFNlbGVjdGVkVGl0bGUiLCJTZWxlY3RlZGVuZERhdGUiLCJzZXRTZWxlY3RlZGVuZERhdGUiLCJmZXRjaENvbnRyYWN0RGF0YSIsIndpbmRvdyIsImV0aGVyZXVtIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsInNldEludGVydmFsIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJhbGxEYXRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwibGVuZ3RoIiwiZGF0ZSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsIkxlZnREYXRlIiwiZXJyb3IiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwibmFtZSIsInN5bWJvbCIsInRvdGFsRXZlbnQiLCJhcnIiLCJOdW1iZXIiLCJldmVudFVSSSIsInZhbHVlIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJkIiwiaCIsIm0iLCJvYmplY3QiLCJKU09OIiwicGFyc2UiLCJjIiwiRGF0ZSIsInByb3BlcnRpZXMiLCJkZXNjcmlwdGlvbiIsImdldFRpbWUiLCJuIiwicyIsInRvU3RyaW5nIiwicHJpY2VkZXMxIiwiR29hbCIsImV4IiwicHVzaCIsImV2ZW50SWQiLCJUaXRsZSIsIkdvYWx1c2QiLCJmb3JtYXQiLCJsb2dvIiwiY29uc29sZSIsImxvZyIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsIiwiZSIsInRhcmdldCIsImRhdGV0ZXh0IiwiaGVpZ2h0IiwibGlzdEl0ZW0iLCJkaXNwbGF5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=