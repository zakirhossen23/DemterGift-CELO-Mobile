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
      src: listItem.logo
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "7b3571d0b64460587383"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmMyYWM4MzZiMGM3MGRjOGQyYmYwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU2EsUUFBVCxHQUFvQjtBQUMvQixrQkFBd0NaLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT2EsZUFBUDtBQUFBLE1BQXdCQyxZQUF4Qjs7QUFDQSxxQkFBb0NMLGlFQUFXLENBQUMsUUFBRCxDQUEvQztBQUFBLE1BQVFNLFFBQVIsZ0JBQVFBLFFBQVI7QUFBQSxNQUFrQkMsYUFBbEIsZ0JBQWtCQSxhQUFsQjs7QUFDQSxtQkFBd0JoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9pQixJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBa0NsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU9tQixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFzQ3BCLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUFBO0FBQUEsTUFBT3FCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQWdDdEIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPdUIsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxvQkFBd0N4QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU95QixZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG9CQUEwQzFCLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBTzJCLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG9CQUE4QzVCLCtDQUFRLENBQUMsRUFBRCxDQUF0RDtBQUFBO0FBQUEsTUFBTzZCLGVBQVA7QUFBQSxNQUF3QkMsa0JB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QUFDSSxRQUFJLEVBQUVqRixlQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQ1ZDLE1BQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDSCxLQUpMO0FBS0ksWUFBUSxFQUFFQyxRQUxkO0FBTUksaUJBQWEsRUFBRUMsYUFObkI7QUFPSSxXQUFPLEVBQUVPLFFBUGI7QUFRSSxRQUFJLEVBQUVFLFlBUlY7QUFTSSxpQkFBYSxFQUFFRSxhQVRuQjtBQVVJLFdBQU8sRUFBRUU7QUFWYixJQS9ESixDQURKO0FBOEVIOzs7Ozs7OztVQ25ORCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9kb25hdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmltcG9ydCBEb25hdGVORlRNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0RvbmF0ZU5GVE1vZGFsJztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyJ1xuaW1wb3J0ICcuL2RvbmF0aW9uLmNzcydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb25hdGlvbigpIHtcbiAgICBjb25zdCBbQ3JlYXRlbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Rva2VuTmFtZSwgc2V0VG9rZW5OYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdG9rZW5TeW1ib2wsIHNldFRva2VuU3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0aWQsIHNldHNlbGVjdGlkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0ZWR0eXBlLCBzZXRzZWxlY3RlZHR5cGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtTZWxlY3RlZFRpdGxlLCBzZXRTZWxlY3RlZFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbU2VsZWN0ZWRlbmREYXRlLCBzZXRTZWxlY3RlZGVuZERhdGVdID0gdXNlU3RhdGUoJycpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xuXG4gICAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgZmV0Y2hDb250cmFjdERhdGEpO1xuICAgICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdhY2NvdW50c0NoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XG4gICAgICAgICAgICB3aW5kb3cuZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2NoYWluQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcbiAgICAgICAgfTtcbiAgICB9LCBbY29udHJhY3RdKTtcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgfSwgMTAwMCk7XG5cblxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcIkRhdGVDb3VudFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICB9KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udHJhY3REYXRhKCkge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoY29udHJhY3QpIHtcbiAgICAgICAgICAgICAgICBzZXRUb2tlbk5hbWUoYXdhaXQgY29udHJhY3QubmFtZSgpKTtcbiAgICAgICAgICAgICAgICBzZXRUb2tlblN5bWJvbChhd2FpdCBjb250cmFjdC5zeW1ib2woKSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbEV2ZW50ID0gYXdhaXQgY29udHJhY3QudG90YWxFdmVudCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTnVtYmVyKHRvdGFsRXZlbnQpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBjb250cmFjdC5ldmVudFVSSShpKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMudG9TdHJpbmcoKS5pbmNsdWRlcyhcIi1cIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlZGVzMSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkgeyBwcmljZWRlczEgPSBOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuR29hbC5kZXNjcmlwdGlvbiAqIDEuMTApIH0gY2F0Y2ggKGV4KSB7IH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SWQ6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGU6IG9iamVjdC5wcm9wZXJ0aWVzLlRpdGxlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGU6IG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR29hbHVzZDogZm9ybWF0dGVyLmZvcm1hdChwcmljZWRlczEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWw6IG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzogb2JqZWN0LnByb3BlcnRpZXMubG9nby5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRMaXN0KGFycik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpLnN0eWxlID0gXCJkaXNwbGF5Om5vbmVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwoZSkge1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJldmVudGlkXCIpKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRUaXRsZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJldmVudHRpdGxlXCIpKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRlbmREYXRlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGVcIikpO1xuICAgICAgICBzZXRzZWxlY3RlZHR5cGUoXCJORlRcIik7XG5cbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIGlmIChzLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCItXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJFeHBpcmVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+RG9uYXRpb248L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJEb25hdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTG9nby5zdmdcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nRG9uYXRpb25CYXInPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1BbGwnPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayBhY3RpdmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWxsXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89Jz9xPVRvZGF5Jz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgVG9kYXlcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz0nP3E9VGhpcyBNb250aCc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgTW9udGhcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uZXZlbnRJZH0gY2xhc3NOYW1lPVwiZG9uYXRpb24gcm93XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGlvbiBEYXRlY291bnRcIiBzdHlsZT17eyB0b3A6ICcxMHB4JywgbGVmdDogJzEwcHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgbmFtZT1cIkRhdGVDb3VudFwiY2xhc3NOYW1lPVwiZG9uYXRpb24gRGF0ZWNvdW50VFwiICAgZGF0ZT17bGlzdEl0ZW0uRGF0ZX0+e0xlZnREYXRlKGxpc3RJdGVtLkRhdGUpfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb25hdGlvbi1ldmVudGNvbmF0aW5lcicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdkb25hdGlvbiBldmVudC1pbWcnIHNyYz17bGlzdEl0ZW0ubG9nb30gIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMXB4JywgZGlzcGxheTogJ2ZsZXgnLCBoZWlnaHQ6ICcxMDAlJywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHdpZHRoOiAnMTAwJScsIHJvd0dhcDogJzEwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2xpc3RJdGVtLlRpdGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIFwid2hpdGVTcGFjZVwiOiBcInByZS13cmFwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgc3R5bGU9e3sgZm9udFNpemU6ICcwLjdyZW0nIH19PkdvYWw6ICA8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7IGZvbnRTaXplOiAnMC43cmVtJyB9fT4ke2xpc3RJdGVtLkdvYWx1c2R9ICh7bGlzdEl0ZW0uR29hbH0gY0VVUik8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiA1LCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsIGFsaWduSXRlbXM6IFwiZmxleC1lbmRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZXZlbnRpZD17bGlzdEl0ZW0uZXZlbnRJZH0gZGF0ZT17bGlzdEl0ZW0uRGF0ZX0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBiYWNrZ3JvdW5kOiBcInJnYigwLCAyMjIsIDIwNSlcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBmbG9hdDogXCJyaWdodFwiLCBtYXJnaW46IDAsIHdpZHRoOiAxMTQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBkYXRlPXtsaXN0SXRlbS5EYXRlfSBldmVudHRpdGxlPXtsaXN0SXRlbS5UaXRsZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uYXRlIE5GVFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9kb25hdGlvbi9hdWN0aW9uP1ske2xpc3RJdGVtLmV2ZW50SWR9XWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIGJhY2tncm91bmQ6IFwicmdiKDAsIDIyMiwgMjA1KVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGhlaWdodDogXCIxMDAlXCIsIGZsb2F0OiBcInJpZ2h0XCIsIG1hcmdpbjogMCwgd2lkdGg6IDExNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gdG8gYXVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluayA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPERvbmF0ZU5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17Q3JlYXRlbW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY29udHJhY3Q9e2NvbnRyYWN0fVxuICAgICAgICAgICAgICAgIHNlbmRlckFkZHJlc3M9e3NpZ25lckFkZHJlc3N9XG4gICAgICAgICAgICAgICAgRXZlbnRJRD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0ZWR0eXBlfVxuICAgICAgICAgICAgICAgIFNlbGVjdGVkVGl0bGU9e1NlbGVjdGVkVGl0bGV9XG4gICAgICAgICAgICAgICAgZW5kZGF0ZT17U2VsZWN0ZWRlbmREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI3YjM1NzFkMGI2NDQ2MDU4NzM4M1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiTGluayIsIlJvdXRlciIsIk5hdkxpbmsiLCJDYXJkIiwiQ29sIiwiUm93IiwidXNlQ29udHJhY3QiLCJEb25hdGVORlRNb2RhbCIsIkhlYWRlciIsIkRvbmF0aW9uIiwiQ3JlYXRlbW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwibGlzdCIsInNldExpc3QiLCJ0b2tlbk5hbWUiLCJzZXRUb2tlbk5hbWUiLCJ0b2tlblN5bWJvbCIsInNldFRva2VuU3ltYm9sIiwic2VsZWN0aWQiLCJzZXRzZWxlY3RpZCIsInNlbGVjdGVkdHlwZSIsInNldHNlbGVjdGVkdHlwZSIsIlNlbGVjdGVkVGl0bGUiLCJzZXRTZWxlY3RlZFRpdGxlIiwiU2VsZWN0ZWRlbmREYXRlIiwic2V0U2VsZWN0ZWRlbmREYXRlIiwiZmV0Y2hDb250cmFjdERhdGEiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIm9uIiwicmVtb3ZlTGlzdGVuZXIiLCJzZXRJbnRlcnZhbCIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwiYWxsRGF0ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiaSIsImxlbmd0aCIsImRhdGUiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJMZWZ0RGF0ZSIsImVycm9yIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIm5hbWUiLCJzeW1ib2wiLCJ0b3RhbEV2ZW50IiwiYXJyIiwiTnVtYmVyIiwiZXZlbnRVUkkiLCJ2YWx1ZSIsImRhIiwiTWF0aCIsImZsb29yIiwiZCIsImgiLCJtIiwib2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiYyIsIkRhdGUiLCJwcm9wZXJ0aWVzIiwiZGVzY3JpcHRpb24iLCJnZXRUaW1lIiwibiIsInMiLCJ0b1N0cmluZyIsInByaWNlZGVzMSIsIkdvYWwiLCJleCIsInB1c2giLCJldmVudElkIiwiVGl0bGUiLCJHb2FsdXNkIiwiZm9ybWF0IiwibG9nbyIsImNvbnNvbGUiLCJsb2ciLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYWN0aXZhdGVDcmVhdGVORlRNb2RhbCIsImUiLCJ0YXJnZXQiLCJkYXRldGV4dCIsImhlaWdodCIsImxpc3RJdGVtIiwidG9wIiwibGVmdCIsInBvc2l0aW9uIiwibWFyZ2luTGVmdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJyb3dHYXAiLCJmb250U2l6ZSIsImdhcCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsImN1cnNvciIsImZsb2F0IiwibWFyZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==