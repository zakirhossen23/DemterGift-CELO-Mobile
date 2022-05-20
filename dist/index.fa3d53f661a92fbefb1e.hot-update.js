"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./src/pages/donation/auction/index.jsx":
/*!**********************************************!*\
  !*** ./src/pages/donation/auction/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AuctionNFT; }
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
/* harmony import */ var _auction_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auction.css */ "./src/pages/donation/auction/auction.css");


















function AuctionNFT(user) {
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
    className: "auction NFTs-container",
    style: {
      padding: "2%",
      height: "100%",
      overflow: "auto"
    }
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      key: listItem.Id,
      className: "row auction ElementsContainer bgWhite"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "auction NFt-contain",
      style: {
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: '2%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
      src: listItem.image,
      className: "auction AuctionBidImage"
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/donation/auction/auction.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/donation/auction/auction.css ***!
  \**************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n@media only screen and (max-width: 600px) {\r\n    .auction.NFTs-container{\r\n        padding: 2%;\r\n        height: 100%;\r\n    }\r\n    .auction.ElementsContainer{\r\n        width: 33vw;\r\n    }\r\n    .auction.NFt-contain{\r\n        display: flex;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    .auction.AuctionBidImage{\r\n\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (min-width: 600px) {\r\n    .auction.NFTs-container{\r\n        padding: 5%;\r\n        height: 100%;\r\n    } \r\n    .auction.ElementsContainer{\r\n        height: 21vw;\r\n    }\r\n    .auction.NFt-contain{\r\n        display: flex;\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 2%;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/pages/donation/auction/auction.css"],"names":[],"mappings":";AACA;IACI;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;QACb,WAAW;QACX,YAAY;IAChB;IACA;;IAEA;AACJ;;;AAGA;IACI;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;QACb,WAAW;QACX,YAAY;QACZ,WAAW;IACf;AACJ","sourcesContent":["\r\n@media only screen and (max-width: 600px) {\r\n    .auction.NFTs-container{\r\n        padding: 2%;\r\n        height: 100%;\r\n    }\r\n    .auction.ElementsContainer{\r\n        width: 33vw;\r\n    }\r\n    .auction.NFt-contain{\r\n        display: flex;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    .auction.AuctionBidImage{\r\n\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (min-width: 600px) {\r\n    .auction.NFTs-container{\r\n        padding: 5%;\r\n        height: 100%;\r\n    } \r\n    .auction.ElementsContainer{\r\n        height: 21vw;\r\n    }\r\n    .auction.NFt-contain{\r\n        display: flex;\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 2%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/donation/auction/auction.css":
/*!************************************************!*\
  !*** ./src/pages/donation/auction/auction.css ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./auction.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/donation/auction/auction.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!./auction.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/donation/auction/auction.css",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./auction.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/donation/auction/auction.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_auction_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9f577f11ab77cb90dd94"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmZhM2Q1M2Y2NjFhOTJmYmVmYjFlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU2UsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDckMscUJBQW9DSCxrRUFBVyxDQUFDLFFBQUQsQ0FBL0M7QUFBQSxNQUFRSSxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGFBQWxCLGdCQUFrQkEsYUFBbEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHaEIsc0RBQVMsRUFBeEI7O0FBQ0Esa0JBQThCRiwrQ0FBUSxDQUFDLENBQUMsQ0FBRixDQUF0QztBQUFBO0FBQUEsTUFBT21CLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXdCcEIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPcUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQWtDdEIsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUE7QUFBQSxNQUFPdUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBc0N4QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU95QixXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUEwQjFCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBTzJCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG9CQUE4QjVCLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBO0FBQUEsTUFBTzZCLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0Esb0JBQXdCOUIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPK0IsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0Esb0JBQWdDaEMsK0NB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QUFXLEdBQUcsK0ZBQWM7QUFDbEYsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLDZFQUFXLEdBQUcsK0ZBQWM7O0FBRXRFLHFCQUFxQix3RkFBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBR2dGO0FBQ2hGLE9BQU8sK0RBQWUsd0ZBQU8sSUFBSSwrRkFBYyxHQUFHLCtGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7O1VDbkY3RSxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9kb25hdGlvbi9hdWN0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9kb25hdGlvbi9hdWN0aW9uL2F1Y3Rpb24uY3NzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc3JjL3BhZ2VzL2RvbmF0aW9uL2F1Y3Rpb24vYXVjdGlvbi5jc3M/YjU2ZCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ltYWdlJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCBCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsJztcbmltcG9ydCBWaWV3QmlkTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9WaWV3QmlkTkZUTW9kYWwnO1xuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9IZWFkZXInXG5pbXBvcnQgJy4vYXVjdGlvbi5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1Y3Rpb25ORlQodXNlcikge1xuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbZXZlbnRJZCwgc2V0RXZlbnRJZF0gPSB1c2VTdGF0ZSgtMSk7XG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFt0b2tlbk5hbWUsIHNldFRva2VuTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Rva2VuU3ltYm9sLCBzZXRUb2tlblN5bWJvbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvYWx1c2QsIHNldGdvYWx1c2RdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtnb2FsLCBzZXRnb2FsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZWxlZnQsIHNldGRhdGVsZWZ0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZSwgc2V0ZGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2RhdGVsZWZ0QmlkLCBzZXRkYXRlbGVmdEJpZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2xvZ28sIHNldGxvZ29dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3RpZCwgc2V0c2VsZWN0aWRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3R0aXRsZSwgc2V0c2VsZWN0dGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3RlZEFkZHJlc3MsIHNldHNlbGVjdGVkQWRkcmVzc10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdHR5cGUsIHNldHNlbGVjdHR5cGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3RiaWQsIHNldHNlbGVjdGJpZF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBbZXZlbnR1cmksIHNldEV2ZW50dXJpXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtWaWV3bW9kYWxTaG93LCBzZXRWaWV3TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIExlZnREYXRlQmlkKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcbiAgICB9XG4gICAgY29uc3QgcmVnZXggPSAvXFxbKC4qKVxcXS9nO1xuICAgIGNvbnN0IHN0ciA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICBsZXQgbTtcbiAgICBsZXQgaWQgPSBcIlwiO1xuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcbiAgICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xuICAgICAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWQgPSBtWzFdO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udHJhY3REYXRhKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGNvbnRyYWN0ICYmIGlkKSB7XG4gICAgICAgICAgICAgICAgc2V0RXZlbnRJZChpZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBjb250cmFjdC5ldmVudFVSSShpZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxUb2tlbnMgPSBhd2FpdCBjb250cmFjdC5nZXR0b2tlblNlYXJjaEV2ZW50VG90YWwoaWQpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTnVtYmVyKDEwKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IGF3YWl0IHRvdGFsVG9rZW5zW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB0cnkgeyBvYmplY3QgPSBhd2FpdCBKU09OLnBhcnNlKG9iaikgfSBjYXRjaCB7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlZGVzMSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkgeyBwcmljZWRlczEgPSBmb3JtYXR0ZXIuZm9ybWF0KE51bWJlcihvYmplY3QucHJvcGVydGllcy5wcmljZS5kZXNjcmlwdGlvbiAqIDEuMTApKSB9IGNhdGNoIChleCkgeyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBUb2tlbklkID0gTnVtYmVyKGF3YWl0IGNvbnRyYWN0LmdldHRva2VuSWRCeVVyaShvYmopKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFRva2VuSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElkOiBUb2tlbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG9iamVjdC5wcm9wZXJ0aWVzLm5hbWUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG9iamVjdC5wcm9wZXJ0aWVzLmRlc2NyaXB0aW9uLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZHByaWNlOiBwcmljZWRlczEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IE51bWJlcihvYmplY3QucHJvcGVydGllcy5wcmljZS5kZXNjcmlwdGlvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogb2JqZWN0LnByb3BlcnRpZXMudHlwZWltZy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogb2JqZWN0LnByb3BlcnRpZXMuaW1hZ2UuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0TGlzdChhcnIpO1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikpXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XG5cblxuICAgICAgICAgICAgICAgIHNldEV2ZW50dXJpKHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIHNldFRpdGxlKG9iamVjdC5wcm9wZXJ0aWVzLlRpdGxlLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBzZXRzZWxlY3RlZEFkZHJlc3Mob2JqZWN0LnByb3BlcnRpZXMud2FsbGV0LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBzZXRnb2FsdXNkKGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24gKiAxLjEwKSkpO1xuICAgICAgICAgICAgICAgIHNldGdvYWwoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdChMZWZ0RGF0ZShvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgc2V0ZGF0ZShvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdEJpZChMZWZ0RGF0ZUJpZChvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgc2V0bG9nbyhvYmplY3QucHJvcGVydGllcy5sb2dvLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBzZXRUb2tlbk5hbWUoYXdhaXQgY29udHJhY3QubmFtZSgpKTtcbiAgICAgICAgICAgICAgICBzZXRUb2tlblN5bWJvbChhd2FpdCBjb250cmFjdC5zeW1ib2woKSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XG5cbiAgICB9LCBbaWQsIGNvbnRyYWN0XSk7XG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgfSwgMTAwMCk7XG5cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZUJpZChkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZVZpZXdCaWRNb2RhbChlKSB7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3R0aXRsZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKSk7XG5cbiAgICAgICAgc2V0Vmlld01vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUJpZE5GVE1vZGFsKGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdGJpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJoaWdoZXN0YmlkXCIpKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0YmlkKTtcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIk5GVFwiKTtcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBFdmVudENvbnRhaW5lclwiID5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLHdpZHRoOiAnMTAwJScsaGVpZ2h0OiAnMTAwJScsYWxpZ25JdGVtczogJ2NlbnRlcicscGFkZGluZzogJzdweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJBdWN0aW9uSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57dGl0bGV9PC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNz5Hb2FsOiA8L2g3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNz4kIHtnb2FsdXNkfSAoe2dvYWx9IGNFVVIpPC9oNz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBuYW1lPSdkYXRlbGVmdCcgZGF0ZT17ZGF0ZX0+e2RhdGVsZWZ0fTwvaDc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXVjdGlvbiBORlRzLWNvbnRhaW5lcicgc3R5bGU9e3sgcGFkZGluZzogXCIyJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBvdmVyZmxvdzogXCJhdXRvXCIgfX0+XG4gICAgICAgICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPVwicm93IGF1Y3Rpb24gRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXVjdGlvbiBORnQtY29udGFpbicgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLHdpZHRoOiAnMTAwJScsaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmc6ICcyJSd9fT5cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmltYWdlfSBjbGFzc05hbWU9XCJhdWN0aW9uIEF1Y3Rpb25CaWRJbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJyxkaXNwbGF5OiAnZmxleCcsaGVpZ2h0OiAnMTAwJScscGFkZGluZzogJzVweCAwcHgnLGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3sgcm93R2FwOiBcIjVweFwiIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7bWFyZ2luOiAnMCd9fT57bGlzdEl0ZW0ubmFtZX08L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTM5LCAxMzksIDEzOSlcIiB9fT5UeXBlOiB7bGlzdEl0ZW0udHlwZX08L2g3PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IHN0eWxlPXt7IGNvbG9yOiBcIiM4QjhCOEJcIiB9fT57bGlzdEl0ZW0uZGVzY3JpcHRpb259PC9oNz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0VsZW1lbnRCb3R0b21Db250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyxmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj5DdXJyZW50IGJpZDwvaDc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdiaWRwcmljZSc+JCB7bGlzdEl0ZW0uQmlkcHJpY2V9ICh7bGlzdEl0ZW0ucHJpY2V9IGNFVVIpPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBuYW1lPVwiZGF0ZVwiIGRhdGU9e2RhdGV9IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPntkYXRlbGVmdEJpZH08L2g3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZEFsbGNvbnRhaW5lcicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZHNidXR0b24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBvbkNsaWNrPXthY3RpdmF0ZVZpZXdCaWRNb2RhbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5WaWV3PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBvbkNsaWNrPXthY3RpdmF0ZUJpZE5GVE1vZGFsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSAgY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5CaWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxCaWRORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxTaG93KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtjb250cmFjdH1cbiAgICAgICAgICAgICAgICB0b2tlbklkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICBzZW5kZXJBZGRyZXNzPXtzaWduZXJBZGRyZXNzfVxuICAgICAgICAgICAgICAgIHRvQWRkcmVzcz17c2VsZWN0ZWRBZGRyZXNzfVxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdHR5cGV9XG4gICAgICAgICAgICAgICAgZXZlbnRJZD17ZXZlbnRJZH1cbiAgICAgICAgICAgICAgICBIaWdoZXN0YmlkPXtzZWxlY3RiaWR9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Vmlld0JpZE5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17Vmlld21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Vmlld01vZGFsU2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3NlbGVjdHRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuYXVjdGlvbi5ORlRzLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5hdWN0aW9uLkVsZW1lbnRzQ29udGFpbmVye1xcclxcbiAgICAgICAgd2lkdGg6IDMzdnc7XFxyXFxuICAgIH1cXHJcXG4gICAgLmF1Y3Rpb24uTkZ0LWNvbnRhaW57XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmF1Y3Rpb24uQXVjdGlvbkJpZEltYWdle1xcclxcblxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLmF1Y3Rpb24uTkZUcy1jb250YWluZXJ7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1JTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfSBcXHJcXG4gICAgLmF1Y3Rpb24uRWxlbWVudHNDb250YWluZXJ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIxdnc7XFxyXFxuICAgIH1cXHJcXG4gICAgLmF1Y3Rpb24uTkZ0LWNvbnRhaW57XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyJTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9hdWN0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7UUFDYixXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBOztJQUVBO0FBQ0o7OztBQUdBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCxZQUFZO1FBQ1osV0FBVztJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuYXVjdGlvbi5ORlRzLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5hdWN0aW9uLkVsZW1lbnRzQ29udGFpbmVye1xcclxcbiAgICAgICAgd2lkdGg6IDMzdnc7XFxyXFxuICAgIH1cXHJcXG4gICAgLmF1Y3Rpb24uTkZ0LWNvbnRhaW57XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmF1Y3Rpb24uQXVjdGlvbkJpZEltYWdle1xcclxcblxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLmF1Y3Rpb24uTkZUcy1jb250YWluZXJ7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1JTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfSBcXHJcXG4gICAgLmF1Y3Rpb24uRWxlbWVudHNDb250YWluZXJ7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIxdnc7XFxyXFxuICAgIH1cXHJcXG4gICAgLmF1Y3Rpb24uTkZ0LWNvbnRhaW57XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyJTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F1Y3Rpb24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F1Y3Rpb24uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hdWN0aW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI5ZjU3N2YxMWFiNzdjYjkwZGQ5NFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJGb3JtIiwiSGVhZCIsIlJvdyIsIkxpbmsiLCJDb2wiLCJJbWFnZSIsIkJ1dHRvbiIsIkJpZE5GVE1vZGFsIiwiVmlld0JpZE5GVE1vZGFsIiwidXNlQ29udHJhY3QiLCJIZWFkZXIiLCJBdWN0aW9uTkZUIiwidXNlciIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsInJvdXRlciIsImV2ZW50SWQiLCJzZXRFdmVudElkIiwibGlzdCIsInNldExpc3QiLCJ0b2tlbk5hbWUiLCJzZXRUb2tlbk5hbWUiLCJ0b2tlblN5bWJvbCIsInNldFRva2VuU3ltYm9sIiwidGl0bGUiLCJzZXRUaXRsZSIsImdvYWx1c2QiLCJzZXRnb2FsdXNkIiwiZ29hbCIsInNldGdvYWwiLCJkYXRlbGVmdCIsInNldGRhdGVsZWZ0IiwiZGF0ZSIsInNldGRhdGUiLCJkYXRlbGVmdEJpZCIsInNldGRhdGVsZWZ0QmlkIiwibG9nbyIsInNldGxvZ28iLCJzZWxlY3RpZCIsInNldHNlbGVjdGlkIiwic2VsZWN0dGl0bGUiLCJzZXRzZWxlY3R0aXRsZSIsInNlbGVjdGVkQWRkcmVzcyIsInNldHNlbGVjdGVkQWRkcmVzcyIsInNlbGVjdHR5cGUiLCJzZXRzZWxlY3R0eXBlIiwic2VsZWN0YmlkIiwic2V0c2VsZWN0YmlkIiwiZXZlbnR1cmkiLCJzZXRFdmVudHVyaSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIlZpZXdtb2RhbFNob3ciLCJzZXRWaWV3TW9kYWxTaG93IiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkxlZnREYXRlIiwiZGF0ZXRleHQiLCJjIiwiRGF0ZSIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsIm0iLCJzIiwidG9TdHJpbmciLCJMZWZ0RGF0ZUJpZCIsInJlZ2V4Iiwic3RyIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJpZCIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsImZldGNoQ29udHJhY3REYXRhIiwiZXZlbnRVUkkiLCJ2YWx1ZSIsImFyciIsImdldHRva2VuU2VhcmNoRXZlbnRUb3RhbCIsInRvdGFsVG9rZW5zIiwiaSIsIk51bWJlciIsIm9iaiIsIm9iamVjdCIsIkpTT04iLCJwYXJzZSIsInByaWNlZGVzMSIsImZvcm1hdCIsInByb3BlcnRpZXMiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiZXgiLCJnZXR0b2tlbklkQnlVcmkiLCJUb2tlbklkIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJJZCIsIm5hbWUiLCJCaWRwcmljZSIsInR5cGUiLCJ0eXBlaW1nIiwiaW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJUaXRsZSIsIndhbGxldCIsIkdvYWwiLCJzeW1ib2wiLCJlcnJvciIsInNldEludGVydmFsIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJhbGxEYXRlcyIsImdldEVsZW1lbnRzQnlOYW1lIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYWN0aXZhdGVWaWV3QmlkTW9kYWwiLCJlIiwidGFyZ2V0IiwiYWN0aXZhdGVCaWRORlRNb2RhbCIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwib3ZlcmZsb3ciLCJsaXN0SXRlbSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInJvd0dhcCIsIm1hcmdpbiIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==