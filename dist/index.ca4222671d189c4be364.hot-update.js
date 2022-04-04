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
    className: "row Auction EventContainer"
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
    className: "Auction Event-Image AuctionImage"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "DetialsContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h6", {
    className: "Auction Event-Title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", {
    className: "Auction Event-small-Text"
  }, "Goal: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", {
    className: "Auction Event-goal-price"
  }, "$ ", goalusd, " (", goal, " cEUR)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", {
    className: "Auction Event-small-Text",
    name: "dateleft",
    date: date
  }, dateleft))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    id: "Loading",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h1", null, "Loading...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "auction NFTs-container"
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      key: listItem.Id,
      className: "row auction ElementsContainer bgWhite"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "auction NFt-contain"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
      src: listItem.image,
      className: "auction AuctionBidImage"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        height: '100%',
        padding: '5px 0px',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "DetialsContainer",
      style: {
        rowGap: "5px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h6", {
      className: "Auction NFT-title"
    }, listItem.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "TextContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", {
      className: "Auction NFT-Description",
      style: {
        color: "#8B8B8B"
      }
    }, listItem.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '11px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", {
      className: "Auction Grey-text smallgrey"
    }, "Current bid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h6", {
      className: "Auction priceText bidprice"
    }, "$ ", listItem.Bidprice, " (", listItem.price, " cEUR)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h7", {
      name: "date",
      date: date,
      className: "Auction Grey-text smallgrey"
    }, dateleftBid)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "Auction ElementBottomContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
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
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 600px) {\r\n    .auction.NFTs-container {\r\n        padding: 2%;\r\n        height: 100%;\r\n    }\r\n\r\n    .auction.ElementsContainer {\r\n        height: 33vw;\r\n    }\r\n\r\n    .auction.NFt-contain {\r\n        display: flex;\r\n        width: 100%;\r\n        height: 100%;\r\n        align-items: center;\r\n    }\r\n\r\n    .auction.AuctionBidImage {\r\n        border-radius: 20px;\r\n        background: white;\r\n        width: 30vw;\r\n        height: 30vw;\r\n        aspect-ratio: 4;\r\n    }\r\n\r\n    .Auction.NFT-title {\r\n        margin: 0px;\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .Auction.NFT-Description {\r\n        font-size: 0.7rem;\r\n    }\r\n\r\n    .Auction.EventContainer {\r\n        overflow: hidden;\r\n        padding: 0;\r\n        width: 100%;\r\n        height: 40vw;\r\n        color: white;\r\n    }\r\n\r\n    .Auction.Event-Image {\r\n        border-radius: 14px;\r\n        background: white;\r\n        width: 25vw;\r\n        height: 100%;\r\n        padding: 6px;\r\n    }\r\n    .Auction.Event-Title{\r\n        font-size: 0.8rem;\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (min-width: 600px) {\r\n    .auction.NFTs-container {\r\n        padding: 0 5%;\r\n        height: 100%;\r\n    }\r\n\r\n    .auction.ElementsContainer {\r\n        height: 21vw;\r\n    }\r\n\r\n    .auction.NFt-contain {\r\n        display: flex;\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 2%;\r\n        align-items: center;\r\n    }\r\n\r\n    .auction.AuctionBidImage {\r\n        border-radius: 20px;\r\n        background: white;\r\n        height: 100%;\r\n        width: 18vw;\r\n        aspect-ratio: 4;\r\n    }\r\n\r\n    .Auction.NFT-title {\r\n        margin: 0px;\r\n        font-size: calc(1vw * 2.5);\r\n    }\r\n\r\n    .Auction.NFT-Description {\r\n        font-size: calc(1.8vw);\r\n    }\r\n\r\n    .Auction.Grey-text {\r\n        font-size: 1.4vw;\r\n    }\r\n\r\n    .Auction.priceText {\r\n        font-size: 1.8vw;\r\n    }\r\n\r\n    .Auction.EventContainer {\r\n        overflow: inherit;\r\n        padding: 0 4%;\r\n        width: 100%;\r\n        height: 22vw;\r\n        color: white;\r\n    }\r\n\r\n    .Auction.Event-Image {\r\n        border-radius: 14px;\r\n        background: white;\r\n        width: 17vw;\r\n        height: 15vw;\r\n        aspect-ratio: 4;\r\n        padding: 6px;\r\n    }\r\n    .Auction.Event-Title{\r\n        font-size: calc(2.6vw);\r\n    }\r\n    .Auction.Event-small-Text{\r\n        font-size: 1.4vw;\r\n    }\r\n    .Auction.Event-goal-price{\r\n        font-size: 2vw;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/pages/donation/auction/auction.css"],"names":[],"mappings":"AAAA;IACI;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,aAAa;QACb,WAAW;QACX,YAAY;QACZ,mBAAmB;IACvB;;IAEA;QACI,mBAAmB;QACnB,iBAAiB;QACjB,WAAW;QACX,YAAY;QACZ,eAAe;IACnB;;IAEA;QACI,WAAW;QACX,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,gBAAgB;QAChB,UAAU;QACV,WAAW;QACX,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,mBAAmB;QACnB,iBAAiB;QACjB,WAAW;QACX,YAAY;QACZ,YAAY;IAChB;IACA;QACI,iBAAiB;IACrB;AACJ;;;AAGA;IACI;QACI,aAAa;QACb,YAAY;IAChB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,aAAa;QACb,WAAW;QACX,YAAY;QACZ,WAAW;QACX,mBAAmB;IACvB;;IAEA;QACI,mBAAmB;QACnB,iBAAiB;QACjB,YAAY;QACZ,WAAW;QACX,eAAe;IACnB;;IAEA;QACI,WAAW;QACX,0BAA0B;IAC9B;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,iBAAiB;QACjB,aAAa;QACb,WAAW;QACX,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,mBAAmB;QACnB,iBAAiB;QACjB,WAAW;QACX,YAAY;QACZ,eAAe;QACf,YAAY;IAChB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,gBAAgB;IACpB;IACA;QACI,cAAc;IAClB;AACJ","sourcesContent":["@media only screen and (max-width: 600px) {\r\n    .auction.NFTs-container {\r\n        padding: 2%;\r\n        height: 100%;\r\n    }\r\n\r\n    .auction.ElementsContainer {\r\n        height: 33vw;\r\n    }\r\n\r\n    .auction.NFt-contain {\r\n        display: flex;\r\n        width: 100%;\r\n        height: 100%;\r\n        align-items: center;\r\n    }\r\n\r\n    .auction.AuctionBidImage {\r\n        border-radius: 20px;\r\n        background: white;\r\n        width: 30vw;\r\n        height: 30vw;\r\n        aspect-ratio: 4;\r\n    }\r\n\r\n    .Auction.NFT-title {\r\n        margin: 0px;\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .Auction.NFT-Description {\r\n        font-size: 0.7rem;\r\n    }\r\n\r\n    .Auction.EventContainer {\r\n        overflow: hidden;\r\n        padding: 0;\r\n        width: 100%;\r\n        height: 40vw;\r\n        color: white;\r\n    }\r\n\r\n    .Auction.Event-Image {\r\n        border-radius: 14px;\r\n        background: white;\r\n        width: 25vw;\r\n        height: 100%;\r\n        padding: 6px;\r\n    }\r\n    .Auction.Event-Title{\r\n        font-size: 0.8rem;\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (min-width: 600px) {\r\n    .auction.NFTs-container {\r\n        padding: 0 5%;\r\n        height: 100%;\r\n    }\r\n\r\n    .auction.ElementsContainer {\r\n        height: 21vw;\r\n    }\r\n\r\n    .auction.NFt-contain {\r\n        display: flex;\r\n        width: 100%;\r\n        height: 100%;\r\n        padding: 2%;\r\n        align-items: center;\r\n    }\r\n\r\n    .auction.AuctionBidImage {\r\n        border-radius: 20px;\r\n        background: white;\r\n        height: 100%;\r\n        width: 18vw;\r\n        aspect-ratio: 4;\r\n    }\r\n\r\n    .Auction.NFT-title {\r\n        margin: 0px;\r\n        font-size: calc(1vw * 2.5);\r\n    }\r\n\r\n    .Auction.NFT-Description {\r\n        font-size: calc(1.8vw);\r\n    }\r\n\r\n    .Auction.Grey-text {\r\n        font-size: 1.4vw;\r\n    }\r\n\r\n    .Auction.priceText {\r\n        font-size: 1.8vw;\r\n    }\r\n\r\n    .Auction.EventContainer {\r\n        overflow: inherit;\r\n        padding: 0 4%;\r\n        width: 100%;\r\n        height: 22vw;\r\n        color: white;\r\n    }\r\n\r\n    .Auction.Event-Image {\r\n        border-radius: 14px;\r\n        background: white;\r\n        width: 17vw;\r\n        height: 15vw;\r\n        aspect-ratio: 4;\r\n        padding: 6px;\r\n    }\r\n    .Auction.Event-Title{\r\n        font-size: calc(2.6vw);\r\n    }\r\n    .Auction.Event-small-Text{\r\n        font-size: 1.4vw;\r\n    }\r\n    .Auction.Event-goal-price{\r\n        font-size: 2vw;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ac37715dd720eb0f80bb"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmNhNDIyMjY3MWQxODljNGJlMzY0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU2UsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDckMscUJBQW9DSCxrRUFBVyxDQUFDLFFBQUQsQ0FBL0M7QUFBQSxNQUFRSSxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGFBQWxCLGdCQUFrQkEsYUFBbEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHaEIsc0RBQVMsRUFBeEI7O0FBQ0Esa0JBQThCRiwrQ0FBUSxDQUFDLENBQUMsQ0FBRixDQUF0QztBQUFBO0FBQUEsTUFBT21CLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXdCcEIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPcUIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQWtDdEIsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUE7QUFBQSxNQUFPdUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBc0N4QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU95QixXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUEwQjFCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBTzJCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG9CQUE4QjVCLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBO0FBQUEsTUFBTzZCLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0Esb0JBQXdCOUIsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPK0IsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0Esb0JBQWdDaEMsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPaUMsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxvQkFBd0JsQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9tQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxvQkFBc0NwQywrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU9xQyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG9CQUF3QnRDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBO0FBQUEsTUFBT3VDLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG9CQUFnQ3hDLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBO0FBQUEsTUFBT3lDLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0Esb0JBQXNDMUMsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPMkMsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxvQkFBOEM1QywrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU82QyxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSxvQkFBb0M5QywrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQTtBQUFBLE1BQU8rQyxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG9CQUFrQ2hELCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBO0FBQUEsTUFBT2lELFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsb0JBQWdDbEQsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPbUQsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxvQkFBa0NwRCwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU9xRCxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG9CQUEwQ3RELCtDQUFRLENBQUMsS0FBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT3VELGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDN0NDLElBQUFBLHFCQUFxQixFQUFFLENBRHNCO0FBRTdDQyxJQUFBQSxxQkFBcUIsRUFBRTtBQUZzQixHQUEvQixDQUFsQjs7QUFLQSxXQUFTQyxRQUFULENBQWtCQyxRQUFsQixFQUE0QjtBQUN4QixRQUFJQyxDQUFDLEdBQUcsSUFBSUMsSUFBSixDQUFTRixRQUFULEVBQW1CRyxPQUFuQixFQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLElBQUlGLElBQUosR0FBV0MsT0FBWCxFQUFSO0FBQ0EsUUFBSUUsQ0FBQyxHQUFHSixDQUFDLEdBQUdHLENBQVo7QUFDQSxRQUFJRSxFQUFFLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxDQUFDLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFaLENBQVQ7QUFDQSxRQUFJSSxDQUFDLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxDQUFDLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFGLElBQStCLE9BQU8sRUFBUCxHQUFZLEVBQTNDLENBQVgsQ0FBUjtBQUNBLFFBQUlLLENBQUMsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVlILENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUFGLElBQTBCLE9BQU8sRUFBakMsQ0FBWCxDQUFSO0FBQ0EsUUFBSU0sQ0FBQyxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBWUgsQ0FBQyxJQUFJLE9BQU8sRUFBWCxDQUFGLEdBQW9CLElBQS9CLENBQVI7QUFDQSxXQUFRQyxFQUFFLENBQUNNLFFBQUgsS0FBZ0IsUUFBaEIsR0FBMkJILENBQUMsQ0FBQ0csUUFBRixFQUEzQixHQUEwQyxTQUExQyxHQUFzREYsQ0FBQyxDQUFDRSxRQUFGLEVBQXRELEdBQXFFLFdBQXJFLEdBQW1GRCxDQUFDLENBQUNDLFFBQUYsRUFBbkYsR0FBa0csVUFBMUc7QUFDSDs7QUFDRCxXQUFTQyxXQUFULENBQXFCYixRQUFyQixFQUErQjtBQUMzQixRQUFJQyxDQUFDLEdBQUcsSUFBSUMsSUFBSixDQUFTRixRQUFULEVBQW1CRyxPQUFuQixFQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLElBQUlGLElBQUosR0FBV0MsT0FBWCxFQUFSO0FBQ0EsUUFBSUUsQ0FBQyxHQUFHSixDQUFDLEdBQUdHLENBQVo7QUFDQSxRQUFJRSxFQUFFLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxDQUFDLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFaLENBQVQ7QUFDQSxRQUFJSSxDQUFDLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxDQUFDLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFGLElBQStCLE9BQU8sRUFBUCxHQUFZLEVBQTNDLENBQVgsQ0FBUjtBQUNBLFFBQUlLLENBQUMsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVlILENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUFGLElBQTBCLE9BQU8sRUFBakMsQ0FBWCxDQUFSO0FBQ0EsUUFBSU0sQ0FBQyxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBWUgsQ0FBQyxJQUFJLE9BQU8sRUFBWCxDQUFGLEdBQW9CLElBQS9CLENBQVI7QUFDQSxXQUFRQyxFQUFFLENBQUNNLFFBQUgsS0FBZ0IsSUFBaEIsR0FBdUJILENBQUMsQ0FBQ0csUUFBRixFQUF2QixHQUFzQyxJQUF0QyxHQUE2Q0YsQ0FBQyxDQUFDRSxRQUFGLEVBQTdDLEdBQTRELElBQTVELEdBQW1FRCxDQUFDLENBQUNDLFFBQUYsRUFBbkUsR0FBa0YsR0FBMUY7QUFDSDs7QUFDRCxNQUFNRSxLQUFLLEdBQUcsV0FBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0Msa0JBQWtCLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBakIsQ0FBOUI7QUFDQSxNQUFJVCxDQUFKO0FBQ0EsTUFBSVUsRUFBRSxHQUFHLEVBQVQ7O0FBQ0EsU0FBTyxDQUFDVixDQUFDLEdBQUdJLEtBQUssQ0FBQ08sSUFBTixDQUFXTixHQUFYLENBQUwsTUFBMEIsSUFBakMsRUFBdUM7QUFDbkM7QUFDQSxRQUFJTCxDQUFDLENBQUNZLEtBQUYsS0FBWVIsS0FBSyxDQUFDUyxTQUF0QixFQUFpQztBQUM3QlQsTUFBQUEsS0FBSyxDQUFDUyxTQUFOO0FBQ0g7O0FBQ0RILElBQUFBLEVBQUUsR0FBR1YsQ0FBQyxDQUFDLENBQUQsQ0FBTjtBQUNIOztBQTNEb0MsV0E2RHRCYyxpQkE3RHNCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtOQTZEckM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLG9CQUVZdkUsUUFBUSxJQUFJbUUsRUFGeEI7QUFBQTtBQUFBO0FBQUE7O0FBR1kvRCxjQUFBQSxVQUFVLENBQUMrRCxFQUFELENBQVY7QUFIWjtBQUFBLHFCQUlnQ25FLFFBQVEsQ0FBQ3dFLFFBQVQsQ0FBa0JMLEVBQWxCLENBSmhDOztBQUFBO0FBSWtCTSxjQUFBQSxLQUpsQjtBQUtrQkMsY0FBQUEsR0FMbEIsR0FLd0IsRUFMeEI7QUFBQTtBQUFBLHFCQU1zQzFFLFFBQVEsQ0FBQzJFLHdCQUFULENBQWtDUixFQUFsQyxDQU50Qzs7QUFBQTtBQU1rQlMsY0FBQUEsV0FObEI7QUFPcUJDLGNBQUFBLENBUHJCLEdBT3lCLENBUHpCOztBQUFBO0FBQUEsb0JBTzRCQSxDQUFDLEdBQUdDLE1BQU0sQ0FBQyxFQUFELENBUHRDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBUWtDRixXQUFXLENBQUNDLENBQUQsQ0FSN0M7O0FBQUE7QUFRc0JFLGNBQUFBLEdBUnRCO0FBVXNCQyxjQUFBQSxPQVZ0QixHQVUrQixFQVYvQjtBQUFBO0FBQUE7QUFBQSxxQkFXcUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxHQUFYLENBWHJDOztBQUFBO0FBV3NCQyxjQUFBQSxPQVh0QjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBWW9CQSxPQUFNLENBQUNyRSxLQVozQjtBQUFBO0FBQUE7QUFBQTs7QUFhd0J3RSxjQUFBQSxTQWJ4QixHQWFvQyxDQWJwQzs7QUFjb0Isa0JBQUk7QUFBRUEsZ0JBQUFBLFNBQVMsR0FBRzFDLFNBQVMsQ0FBQzJDLE1BQVYsQ0FBaUJOLE1BQU0sQ0FBQ0UsT0FBTSxDQUFDSyxVQUFQLENBQWtCQyxLQUFsQixDQUF3QkMsV0FBeEIsR0FBc0MsSUFBdkMsQ0FBdkIsQ0FBWjtBQUFrRixlQUF4RixDQUF5RixPQUFPQyxFQUFQLEVBQVcsQ0FBRzs7QUFkM0gsNEJBZW9DVixNQWZwQztBQUFBO0FBQUEscUJBZWlEOUUsUUFBUSxDQUFDeUYsZUFBVCxDQUF5QlYsR0FBekIsQ0FmakQ7O0FBQUE7QUFBQTtBQWUwQlcsY0FBQUEsT0FmMUI7QUFnQm9CQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBaEIsY0FBQUEsR0FBRyxDQUFDbUIsSUFBSixDQUFTO0FBQ0xDLGdCQUFBQSxFQUFFLEVBQUVKLE9BREM7QUFFTEssZ0JBQUFBLElBQUksRUFBRWYsT0FBTSxDQUFDSyxVQUFQLENBQWtCVSxJQUFsQixDQUF1QlIsV0FGeEI7QUFHTEEsZ0JBQUFBLFdBQVcsRUFBRVAsT0FBTSxDQUFDSyxVQUFQLENBQWtCRSxXQUFsQixDQUE4QkEsV0FIdEM7QUFJTFMsZ0JBQUFBLFFBQVEsRUFBRWIsU0FKTDtBQUtMRyxnQkFBQUEsS0FBSyxFQUFFUixNQUFNLENBQUNFLE9BQU0sQ0FBQ0ssVUFBUCxDQUFrQkMsS0FBbEIsQ0FBd0JDLFdBQXpCLENBTFI7QUFNTFUsZ0JBQUFBLElBQUksRUFBRWpCLE9BQU0sQ0FBQ0ssVUFBUCxDQUFrQmEsT0FBbEIsQ0FBMEJYLFdBTjNCO0FBT0xZLGdCQUFBQSxLQUFLLEVBQUVuQixPQUFNLENBQUNLLFVBQVAsQ0FBa0JjLEtBQWxCLENBQXdCWjtBQVAxQixlQUFUOztBQWpCcEI7QUFPNENWLGNBQUFBLENBQUMsRUFQN0M7QUFBQTtBQUFBOztBQUFBO0FBOEJZdkUsY0FBQUEsT0FBTyxDQUFDb0UsR0FBRCxDQUFQO0FBQ0Esa0JBQUkwQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBSixFQUNJRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLEtBQW5DLEdBQTJDLGNBQTNDO0FBR0psRSxjQUFBQSxXQUFXLENBQUNxQyxLQUFELENBQVg7QUFFTU8sY0FBQUEsTUFyQ2xCLEdBcUMyQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdULEtBQVgsQ0FyQzNCO0FBc0NZN0QsY0FBQUEsUUFBUSxDQUFDb0UsTUFBTSxDQUFDSyxVQUFQLENBQWtCa0IsS0FBbEIsQ0FBd0JoQixXQUF6QixDQUFSO0FBQ0F6RCxjQUFBQSxrQkFBa0IsQ0FBQ2tELE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQm1CLE1BQWxCLENBQXlCakIsV0FBMUIsQ0FBbEI7QUFDQXpFLGNBQUFBLFVBQVUsQ0FBQzJCLFNBQVMsQ0FBQzJDLE1BQVYsQ0FBaUJOLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDSyxVQUFQLENBQWtCb0IsSUFBbEIsQ0FBdUJsQixXQUF2QixHQUFxQyxJQUF0QyxDQUF2QixDQUFELENBQVY7QUFDQXZFLGNBQUFBLE9BQU8sQ0FBQzhELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDSyxVQUFQLENBQWtCb0IsSUFBbEIsQ0FBdUJsQixXQUF4QixDQUFQLENBQVA7QUFDQXJFLGNBQUFBLFdBQVcsQ0FBQzRCLFFBQVEsQ0FBQ2tDLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQnBDLElBQWxCLENBQXVCc0MsV0FBeEIsQ0FBVCxDQUFYO0FBQ0FuRSxjQUFBQSxPQUFPLENBQUM0RCxNQUFNLENBQUNLLFVBQVAsQ0FBa0JwQyxJQUFsQixDQUF1QnNDLFdBQXhCLENBQVA7QUFDQWpFLGNBQUFBLGNBQWMsQ0FBQ3NDLFdBQVcsQ0FBQ29CLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQnBDLElBQWxCLENBQXVCc0MsV0FBeEIsQ0FBWixDQUFkO0FBQ0EvRCxjQUFBQSxPQUFPLENBQUN3RCxNQUFNLENBQUNLLFVBQVAsQ0FBa0I5RCxJQUFsQixDQUF1QmdFLFdBQXhCLENBQVA7QUE3Q1osNEJBOENZL0UsWUE5Q1o7QUFBQTtBQUFBLHFCQThDK0JSLFFBQVEsQ0FBQytGLElBQVQsRUE5Qy9COztBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQStDWXJGLGNBL0NaO0FBQUE7QUFBQSxxQkErQ2lDVixRQUFRLENBQUMwRyxNQUFULEVBL0NqQzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQW1EUWYsY0FBQUEsT0FBTyxDQUFDZ0IsS0FBUjs7QUFuRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E3RHFDO0FBQUE7QUFBQTs7QUFtSHJDMUgsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pzRixJQUFBQSxpQkFBaUI7QUFFcEIsR0FIUSxFQUdOLENBQUNKLEVBQUQsRUFBS25FLFFBQUwsQ0FITSxDQUFUO0FBS0E0RyxFQUFBQSxXQUFXLENBQUMsWUFBWTtBQUNwQkMsSUFBQUEsaUJBQWlCO0FBQ3BCLEdBRlUsRUFFUixJQUZRLENBQVg7O0FBS0EsV0FBU0EsaUJBQVQsR0FBNkI7QUFDekIsUUFBSTtBQUNBLFVBQUlDLFFBQVEsR0FBR1YsUUFBUSxDQUFDVyxpQkFBVCxDQUEyQixVQUEzQixDQUFmOztBQUNBLFdBQUssSUFBSWxDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdpQyxRQUFRLENBQUNFLE1BQTdCLEVBQXFDbkMsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxZQUFJMUQsSUFBSSxHQUFJMkYsUUFBUSxDQUFDakMsQ0FBRCxDQUFULENBQWNvQyxZQUFkLENBQTJCLE1BQTNCLENBQVg7QUFDQUgsUUFBQUEsUUFBUSxDQUFDakMsQ0FBRCxDQUFSLENBQVlxQyxTQUFaLEdBQXdCcEUsUUFBUSxDQUFDM0IsSUFBRCxDQUFoQztBQUNIOztBQUNELFVBQUkyRixRQUFRLEdBQUdWLFFBQVEsQ0FBQ1csaUJBQVQsQ0FBMkIsTUFBM0IsQ0FBZjs7QUFDQSxXQUFLLElBQUlsQyxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHaUMsUUFBUSxDQUFDRSxNQUE3QixFQUFxQ25DLEVBQUMsRUFBdEMsRUFBMEM7QUFDdEMsWUFBSTFELElBQUksR0FBSTJGLFFBQVEsQ0FBQ2pDLEVBQUQsQ0FBVCxDQUFjb0MsWUFBZCxDQUEyQixNQUEzQixDQUFYOztBQUNBSCxRQUFBQSxRQUFRLENBQUNqQyxFQUFELENBQVIsQ0FBWXFDLFNBQVosR0FBd0J0RCxXQUFXLENBQUN6QyxJQUFELENBQW5DO0FBQ0g7QUFDSixLQVhELENBV0UsT0FBT3dGLEtBQVAsRUFBYyxDQUVmO0FBRUo7O0FBRUQsV0FBU1Esb0JBQVQsQ0FBOEJDLENBQTlCLEVBQWlDO0FBQzdCMUYsSUFBQUEsV0FBVyxDQUFDMEYsQ0FBQyxDQUFDQyxNQUFGLENBQVNKLFlBQVQsQ0FBc0IsU0FBdEIsQ0FBRCxDQUFYO0FBQ0FyRixJQUFBQSxjQUFjLENBQUN3RixDQUFDLENBQUNDLE1BQUYsQ0FBU0osWUFBVCxDQUFzQixPQUF0QixDQUFELENBQWQ7QUFFQXpFLElBQUFBLGdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDSDs7QUFFRCxXQUFTOEUsbUJBQVQsQ0FBNkJGLENBQTdCLEVBQWdDO0FBQzVCMUYsSUFBQUEsV0FBVyxDQUFDMEYsQ0FBQyxDQUFDQyxNQUFGLENBQVNKLFlBQVQsQ0FBc0IsU0FBdEIsQ0FBRCxDQUFYO0FBQ0EvRSxJQUFBQSxZQUFZLENBQUNrRixDQUFDLENBQUNDLE1BQUYsQ0FBU0osWUFBVCxDQUFzQixZQUF0QixDQUFELENBQVo7QUFDQXRCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZM0QsU0FBWjtBQUNBRCxJQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0FNLElBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDSDs7QUFDRCxzQkFDSSxpSEFDSSxpREFBQyxpREFBRCxxQkFDSSxnRUFBUTNCLEtBQVIsQ0FESixlQUVJO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFQTtBQUFsQyxJQUZKLGVBR0k7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUM7QUFBdEIsSUFISixDQURKLGVBTUksaURBQUMsOERBQUQsT0FOSixlQU9JO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBQzRHLE1BQUFBLE9BQU8sRUFBRSxNQUFWO0FBQWlCQyxNQUFBQSxLQUFLLEVBQUUsTUFBeEI7QUFBK0JDLE1BQUFBLE1BQU0sRUFBRSxNQUF2QztBQUE4Q0MsTUFBQUEsVUFBVSxFQUFFLFFBQTFEO0FBQW1FQyxNQUFBQSxPQUFPLEVBQUU7QUFBNUU7QUFBWixrQkFDSTtBQUFLLE9BQUcsRUFBRXBHLElBQVY7QUFBZ0IsYUFBUyxFQUFDO0FBQTFCLElBREosZUFFSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBcUNaLEtBQXJDLENBREosZUFHSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsY0FESixlQUVJO0FBQUksYUFBUyxFQUFDO0FBQWQsV0FBNENFLE9BQTVDLFFBQXVERSxJQUF2RCxXQUZKLENBSEosZUFPSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUksYUFBUyxFQUFDLDBCQUFkO0FBQXlDLFFBQUksRUFBQyxVQUE5QztBQUF5RCxRQUFJLEVBQUVJO0FBQS9ELEtBQXNFRixRQUF0RSxDQURKLENBUEosQ0FGSixDQURKLENBUEosZUF1Qkk7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFrQixhQUFTLEVBQUM7QUFBNUIsa0JBQ0ksMEVBREosQ0F2QkosZUEwQkk7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNRLDBGQUFBWixJQUFJLE1BQUosQ0FBQUEsSUFBSSxFQUFLLFVBQUN1SCxRQUFEO0FBQUEsd0JBQ2I7QUFBSyxTQUFHLEVBQUVBLFFBQVEsQ0FBQzlCLEVBQW5CO0FBQXVCLGVBQVMsRUFBQztBQUFqQyxvQkFDSTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUVJO0FBQUssU0FBRyxFQUFFOEIsUUFBUSxDQUFDekIsS0FBbkI7QUFBMEIsZUFBUyxFQUFDO0FBQXBDLE1BRkosZUFHSTtBQUFLLFdBQUssRUFBRTtBQUFDcUIsUUFBQUEsS0FBSyxFQUFFLE1BQVI7QUFBZUQsUUFBQUEsT0FBTyxFQUFFLE1BQXhCO0FBQStCRSxRQUFBQSxNQUFNLEVBQUUsTUFBdkM7QUFBOENFLFFBQUFBLE9BQU8sRUFBRSxTQUF2RDtBQUFpRUUsUUFBQUEsUUFBUSxFQUFFLFVBQTNFO0FBQXNGQyxRQUFBQSxhQUFhLEVBQUUsUUFBckc7QUFBOEdDLFFBQUFBLGNBQWMsRUFBRTtBQUE5SDtBQUFaLG9CQUNJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQWtDLFdBQUssRUFBRTtBQUFFQyxRQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUF6QyxvQkFDSTtBQUFJLGVBQVMsRUFBQztBQUFkLE9BQW1DSixRQUFRLENBQUM3QixJQUE1QyxDQURKLGVBRUk7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDSTtBQUFJLGVBQVMsRUFBQyx5QkFBZDtBQUF3QyxXQUFLLEVBQUU7QUFBRWtDLFFBQUFBLEtBQUssRUFBRTtBQUFUO0FBQS9DLE9BQXNFTCxRQUFRLENBQUNyQyxXQUEvRSxDQURKLENBRkosQ0FESixlQU9JO0FBQUssV0FBSyxFQUFFO0FBQUVnQyxRQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFrQk8sUUFBQUEsYUFBYSxFQUFFLFFBQWpDO0FBQTJDSSxRQUFBQSxVQUFVLEVBQUU7QUFBdkQ7QUFBWixvQkFDUTtBQUFJLGVBQVMsRUFBQztBQUFkLHFCQURSLGVBRVE7QUFBSSxlQUFTLEVBQUM7QUFBZCxhQUE4Q04sUUFBUSxDQUFDNUIsUUFBdkQsUUFBbUU0QixRQUFRLENBQUN0QyxLQUE1RSxXQUZSLGVBR1E7QUFBSSxVQUFJLEVBQUMsTUFBVDtBQUFnQixVQUFJLEVBQUVuRSxJQUF0QjtBQUE0QixlQUFTLEVBQUM7QUFBdEMsT0FBcUVFLFdBQXJFLENBSFIsQ0FQSixlQVlJO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBRUk7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDSTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJO0FBQUssYUFBTyxFQUFFdUcsUUFBUSxDQUFDOUIsRUFBdkI7QUFBMkIsV0FBSyxFQUFFOEIsUUFBUSxDQUFDN0IsSUFBM0M7QUFBaUQsYUFBTyxFQUFFb0Isb0JBQTFEO0FBQWdGLGVBQVMsRUFBQztBQUExRixvQkFDSTtBQUFLLGFBQU8sRUFBRVMsUUFBUSxDQUFDOUIsRUFBdkI7QUFBMkIsV0FBSyxFQUFFOEIsUUFBUSxDQUFDN0IsSUFBM0M7QUFBaUQsZUFBUyxFQUFDO0FBQTNELG9CQUNJO0FBQUssYUFBTyxFQUFFNkIsUUFBUSxDQUFDOUIsRUFBdkI7QUFBMkIsV0FBSyxFQUFFOEIsUUFBUSxDQUFDN0IsSUFBM0M7QUFBaUQsZUFBUyxFQUFDO0FBQTNELGNBREosQ0FESixDQURKLGVBTUk7QUFBSyxhQUFPLEVBQUU2QixRQUFRLENBQUM5QixFQUF2QjtBQUEyQixnQkFBVSxFQUFFOEIsUUFBUSxDQUFDdEMsS0FBaEQ7QUFBdUQsYUFBTyxFQUFFZ0MsbUJBQWhFO0FBQXFGLGVBQVMsRUFBQztBQUEvRixvQkFDSTtBQUFLLGFBQU8sRUFBRU0sUUFBUSxDQUFDOUIsRUFBdkI7QUFBMkIsZ0JBQVUsRUFBRThCLFFBQVEsQ0FBQ3RDLEtBQWhEO0FBQXdELGVBQVMsRUFBQztBQUFsRSxvQkFDSTtBQUFLLGFBQU8sRUFBRXNDLFFBQVEsQ0FBQzlCLEVBQXZCO0FBQTJCLGdCQUFVLEVBQUU4QixRQUFRLENBQUN0QyxLQUFoRDtBQUF1RCxlQUFTLEVBQUM7QUFBakUsYUFESixDQURKLENBTkosQ0FESixDQUZKLENBWkosQ0FISixDQURKLENBRGE7QUFBQSxHQUFMLENBRFosQ0ExQkosZUFvRUksaURBQUMsaUZBQUQ7QUFDSSxRQUFJLEVBQUVqRCxTQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQ1ZDLE1BQUFBLFlBQVksQ0FBQyxLQUFELENBQVosQ0FEVSxDQUVWOztBQUNBaUMsTUFBQUEsaUJBQWlCO0FBQ3BCLEtBTkw7QUFPSSxZQUFRLEVBQUV2RSxRQVBkO0FBUUksV0FBTyxFQUFFeUIsUUFSYjtBQVNJLGlCQUFhLEVBQUV4QixhQVRuQjtBQVVJLGFBQVMsRUFBRTRCLGVBVmY7QUFXSSxRQUFJLEVBQUVFLFVBWFY7QUFZSSxXQUFPLEVBQUU1QixPQVpiO0FBYUksY0FBVSxFQUFFOEI7QUFiaEIsSUFwRUosZUFvRkksaURBQUMscUZBQUQ7QUFDSSxRQUFJLEVBQUVNLGFBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFDVkMsTUFBQUEsZ0JBQWdCLENBQUMsS0FBRCxDQUFoQixDQURVLENBRVY7O0FBQ0ErQixNQUFBQSxpQkFBaUI7QUFDcEIsS0FOTDtBQU9JLE1BQUUsRUFBRTlDLFFBUFI7QUFRSSxTQUFLLEVBQUVFO0FBUlgsSUFwRkosQ0FESjtBQWlHSDs7Ozs7Ozs7Ozs7Ozs7O0FDaFJEO0FBQytIO0FBQzdCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxxRkFBcUYsaUNBQWlDLHdCQUF3Qix5QkFBeUIsU0FBUyx3Q0FBd0MseUJBQXlCLFNBQVMsa0NBQWtDLDBCQUEwQix3QkFBd0IseUJBQXlCLGdDQUFnQyxTQUFTLHNDQUFzQyxnQ0FBZ0MsOEJBQThCLHdCQUF3Qix5QkFBeUIsNEJBQTRCLFNBQVMsZ0NBQWdDLHdCQUF3Qiw4QkFBOEIsU0FBUyxzQ0FBc0MsOEJBQThCLFNBQVMscUNBQXFDLDZCQUE2Qix1QkFBdUIsd0JBQXdCLHlCQUF5Qix5QkFBeUIsU0FBUyxrQ0FBa0MsZ0NBQWdDLDhCQUE4Qix3QkFBd0IseUJBQXlCLHlCQUF5QixTQUFTLDZCQUE2Qiw4QkFBOEIsU0FBUyxLQUFLLHVEQUF1RCxpQ0FBaUMsMEJBQTBCLHlCQUF5QixTQUFTLHdDQUF3Qyx5QkFBeUIsU0FBUyxrQ0FBa0MsMEJBQTBCLHdCQUF3Qix5QkFBeUIsd0JBQXdCLGdDQUFnQyxTQUFTLHNDQUFzQyxnQ0FBZ0MsOEJBQThCLHlCQUF5Qix3QkFBd0IsNEJBQTRCLFNBQVMsZ0NBQWdDLHdCQUF3Qix1Q0FBdUMsU0FBUyxzQ0FBc0MsbUNBQW1DLFNBQVMsZ0NBQWdDLDZCQUE2QixTQUFTLGdDQUFnQyw2QkFBNkIsU0FBUyxxQ0FBcUMsOEJBQThCLDBCQUEwQix3QkFBd0IseUJBQXlCLHlCQUF5QixTQUFTLGtDQUFrQyxnQ0FBZ0MsOEJBQThCLHdCQUF3Qix5QkFBeUIsNEJBQTRCLHlCQUF5QixTQUFTLDZCQUE2QixtQ0FBbUMsU0FBUyxrQ0FBa0MsNkJBQTZCLFNBQVMsa0NBQWtDLDJCQUEyQixTQUFTLEtBQUssT0FBTyx5R0FBeUcsS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLG9FQUFvRSxpQ0FBaUMsd0JBQXdCLHlCQUF5QixTQUFTLHdDQUF3Qyx5QkFBeUIsU0FBUyxrQ0FBa0MsMEJBQTBCLHdCQUF3Qix5QkFBeUIsZ0NBQWdDLFNBQVMsc0NBQXNDLGdDQUFnQyw4QkFBOEIsd0JBQXdCLHlCQUF5Qiw0QkFBNEIsU0FBUyxnQ0FBZ0Msd0JBQXdCLDhCQUE4QixTQUFTLHNDQUFzQyw4QkFBOEIsU0FBUyxxQ0FBcUMsNkJBQTZCLHVCQUF1Qix3QkFBd0IseUJBQXlCLHlCQUF5QixTQUFTLGtDQUFrQyxnQ0FBZ0MsOEJBQThCLHdCQUF3Qix5QkFBeUIseUJBQXlCLFNBQVMsNkJBQTZCLDhCQUE4QixTQUFTLEtBQUssdURBQXVELGlDQUFpQywwQkFBMEIseUJBQXlCLFNBQVMsd0NBQXdDLHlCQUF5QixTQUFTLGtDQUFrQywwQkFBMEIsd0JBQXdCLHlCQUF5Qix3QkFBd0IsZ0NBQWdDLFNBQVMsc0NBQXNDLGdDQUFnQyw4QkFBOEIseUJBQXlCLHdCQUF3Qiw0QkFBNEIsU0FBUyxnQ0FBZ0Msd0JBQXdCLHVDQUF1QyxTQUFTLHNDQUFzQyxtQ0FBbUMsU0FBUyxnQ0FBZ0MsNkJBQTZCLFNBQVMsZ0NBQWdDLDZCQUE2QixTQUFTLHFDQUFxQyw4QkFBOEIsMEJBQTBCLHdCQUF3Qix5QkFBeUIseUJBQXlCLFNBQVMsa0NBQWtDLGdDQUFnQyw4QkFBOEIsd0JBQXdCLHlCQUF5Qiw0QkFBNEIseUJBQXlCLFNBQVMsNkJBQTZCLG1DQUFtQyxTQUFTLGtDQUFrQyw2QkFBNkIsU0FBUyxrQ0FBa0MsMkJBQTJCLFNBQVMsS0FBSyxtQkFBbUI7QUFDbHdNO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQ1B2QyxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9kb25hdGlvbi9hdWN0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL3NyYy9wYWdlcy9kb25hdGlvbi9hdWN0aW9uL2F1Y3Rpb24uY3NzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IEJpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwnO1xuaW1wb3J0IFZpZXdCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL1ZpZXdCaWRORlRNb2RhbCc7XG5cbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcidcbmltcG9ydCAnLi9hdWN0aW9uLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXVjdGlvbk5GVCh1c2VyKSB7XG4gICAgY29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtldmVudElkLCBzZXRFdmVudElkXSA9IHVzZVN0YXRlKC0xKTtcbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Rva2VuTmFtZSwgc2V0VG9rZW5OYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdG9rZW5TeW1ib2wsIHNldFRva2VuU3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ29hbHVzZCwgc2V0Z29hbHVzZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvYWwsIHNldGdvYWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlbGVmdCwgc2V0ZGF0ZWxlZnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlLCBzZXRkYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZWxlZnRCaWQsIHNldGRhdGVsZWZ0QmlkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbG9nbywgc2V0bG9nb10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGlkLCBzZXRzZWxlY3RpZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdHRpdGxlLCBzZXRzZWxlY3R0aXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkQWRkcmVzcywgc2V0c2VsZWN0ZWRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0dHlwZSwgc2V0c2VsZWN0dHlwZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGJpZCwgc2V0c2VsZWN0YmlkXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IFtldmVudHVyaSwgc2V0RXZlbnR1cmldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW1ZpZXdtb2RhbFNob3csIHNldFZpZXdNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcIiBEYXlzIFwiICsgaC50b1N0cmluZygpICsgXCIgaG91cnMgXCIgKyBtLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIFwiICsgcy50b1N0cmluZygpICsgXCIgc2Vjb25kc1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gTGVmdERhdGVCaWQoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCJkIFwiICsgaC50b1N0cmluZygpICsgXCJoIFwiICsgbS50b1N0cmluZygpICsgXCJtIFwiICsgcy50b1N0cmluZygpICsgXCJzXCIpO1xuICAgIH1cbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XG4gICAgY29uc3Qgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIGxldCBtO1xuICAgIGxldCBpZCA9IFwiXCI7XG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZCA9IG1bMV07XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoY29udHJhY3QgJiYgaWQpIHtcbiAgICAgICAgICAgICAgICBzZXRFdmVudElkKGlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGNvbnRyYWN0LmV2ZW50VVJJKGlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFRva2VucyA9IGF3YWl0IGNvbnRyYWN0LmdldHRva2VuU2VhcmNoRXZlbnRUb3RhbChpZCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1iZXIoMTApOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gYXdhaXQgdG90YWxUb2tlbnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7IG9iamVjdCA9IGF3YWl0IEpTT04ucGFyc2Uob2JqKSB9IGNhdGNoIHsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpY2VkZXMxID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7IHByaWNlZGVzMSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLnByaWNlLmRlc2NyaXB0aW9uICogMS4xMCkpIH0gY2F0Y2ggKGV4KSB7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFRva2VuSWQgPSBOdW1iZXIoYXdhaXQgY29udHJhY3QuZ2V0dG9rZW5JZEJ5VXJpKG9iaikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coVG9rZW5JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSWQ6IFRva2VuSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogb2JqZWN0LnByb3BlcnRpZXMubmFtZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogb2JqZWN0LnByb3BlcnRpZXMuZGVzY3JpcHRpb24uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlkcHJpY2U6IHByaWNlZGVzMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLnByaWNlLmRlc2NyaXB0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBvYmplY3QucHJvcGVydGllcy50eXBlaW1nLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBvYmplY3QucHJvcGVydGllcy5pbWFnZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRMaXN0KGFycik7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpLnN0eWxlID0gXCJkaXNwbGF5Om5vbmVcIjtcblxuXG4gICAgICAgICAgICAgICAgc2V0RXZlbnR1cmkodmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGl0bGUob2JqZWN0LnByb3BlcnRpZXMuVGl0bGUuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIHNldHNlbGVjdGVkQWRkcmVzcyhvYmplY3QucHJvcGVydGllcy53YWxsZXQuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIHNldGdvYWx1c2QoZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuR29hbC5kZXNjcmlwdGlvbiAqIDEuMTApKSk7XG4gICAgICAgICAgICAgICAgc2V0Z29hbChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuR29hbC5kZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0KExlZnREYXRlKG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICBzZXRkYXRlKG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0QmlkKExlZnREYXRlQmlkKG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICBzZXRsb2dvKG9iamVjdC5wcm9wZXJ0aWVzLmxvZ28uZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIHNldFRva2VuTmFtZShhd2FpdCBjb250cmFjdC5uYW1lKCkpO1xuICAgICAgICAgICAgICAgIHNldFRva2VuU3ltYm9sKGF3YWl0IGNvbnRyYWN0LnN5bWJvbCgpKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcblxuICAgIH0sIFtpZCwgY29udHJhY3RdKTtcblxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcbiAgICB9LCAxMDAwKTtcblxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlQmlkKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlVmlld0JpZE1vZGFsKGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHRpdGxlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRpdGxlXCIpKTtcblxuICAgICAgICBzZXRWaWV3TW9kYWxTaG93KHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQmlkTkZUTW9kYWwoZSkge1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0YmlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhpZ2hlc3RiaWRcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RiaWQpO1xuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiTkZUXCIpO1xuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IEF1Y3Rpb24gRXZlbnRDb250YWluZXJcIiA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4Jyx3aWR0aDogJzEwMCUnLGhlaWdodDogJzEwMCUnLGFsaWduSXRlbXM6ICdjZW50ZXInLHBhZGRpbmc6ICc3cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiQXVjdGlvbiBFdmVudC1JbWFnZSBBdWN0aW9uSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J0F1Y3Rpb24gRXZlbnQtVGl0bGUnPnt0aXRsZX08L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IGNsYXNzTmFtZT1cIkF1Y3Rpb24gRXZlbnQtc21hbGwtVGV4dFwiPkdvYWw6IDwvaDc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IGNsYXNzTmFtZT1cIkF1Y3Rpb24gRXZlbnQtZ29hbC1wcmljZVwiPiQge2dvYWx1c2R9ICh7Z29hbH0gY0VVUik8L2g3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IGNsYXNzTmFtZT1cIkF1Y3Rpb24gRXZlbnQtc21hbGwtVGV4dFwiIG5hbWU9J2RhdGVsZWZ0JyBkYXRlPXtkYXRlfT57ZGF0ZWxlZnR9PC9oNz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdWN0aW9uIE5GVHMtY29udGFpbmVyJyA+XG4gICAgICAgICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPVwicm93IGF1Y3Rpb24gRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXVjdGlvbiBORnQtY29udGFpbicgPlxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cImF1Y3Rpb24gQXVjdGlvbkJpZEltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnLGRpc3BsYXk6ICdmbGV4JyxoZWlnaHQ6ICcxMDAlJyxwYWRkaW5nOiAnNXB4IDBweCcscG9zaXRpb246ICdyZWxhdGl2ZScsZmxleERpcmVjdGlvbjogJ2NvbHVtbicsanVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3sgcm93R2FwOiBcIjVweFwiIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT0nQXVjdGlvbiBORlQtdGl0bGUnPntsaXN0SXRlbS5uYW1lfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IGNsYXNzTmFtZT1cIkF1Y3Rpb24gTkZULURlc2NyaXB0aW9uXCIgc3R5bGU9e3sgY29sb3I6IFwiIzhCOEI4QlwiIH19PntsaXN0SXRlbS5kZXNjcmlwdGlvbn08L2g3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyxmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IGNsYXNzTmFtZT1cIkF1Y3Rpb24gR3JleS10ZXh0IHNtYWxsZ3JleVwiPkN1cnJlbnQgYmlkPC9oNz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J0F1Y3Rpb24gcHJpY2VUZXh0IGJpZHByaWNlJz4kIHtsaXN0SXRlbS5CaWRwcmljZX0gKHtsaXN0SXRlbS5wcmljZX0gY0VVUik8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IG5hbWU9XCJkYXRlXCIgZGF0ZT17ZGF0ZX0gY2xhc3NOYW1lPVwiQXVjdGlvbiBHcmV5LXRleHQgc21hbGxncmV5XCI+e2RhdGVsZWZ0QmlkfTwvaDc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdBdWN0aW9uIEVsZW1lbnRCb3R0b21Db250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZEFsbGNvbnRhaW5lcicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZHNidXR0b24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBvbkNsaWNrPXthY3RpdmF0ZVZpZXdCaWRNb2RhbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5WaWV3PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBvbkNsaWNrPXthY3RpdmF0ZUJpZE5GVE1vZGFsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSAgY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5CaWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxCaWRORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxTaG93KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtjb250cmFjdH1cbiAgICAgICAgICAgICAgICB0b2tlbklkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICBzZW5kZXJBZGRyZXNzPXtzaWduZXJBZGRyZXNzfVxuICAgICAgICAgICAgICAgIHRvQWRkcmVzcz17c2VsZWN0ZWRBZGRyZXNzfVxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdHR5cGV9XG4gICAgICAgICAgICAgICAgZXZlbnRJZD17ZXZlbnRJZH1cbiAgICAgICAgICAgICAgICBIaWdoZXN0YmlkPXtzZWxlY3RiaWR9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Vmlld0JpZE5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17Vmlld21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Vmlld01vZGFsU2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3NlbGVjdHRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuYXVjdGlvbi5ORlRzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXVjdGlvbi5FbGVtZW50c0NvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMzdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmF1Y3Rpb24uTkZ0LWNvbnRhaW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXVjdGlvbi5BdWN0aW9uQmlkSW1hZ2Uge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDMwdnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwdnc7XFxyXFxuICAgICAgICBhc3BlY3QtcmF0aW86IDQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uTkZULXRpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uTkZULURlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5BdWN0aW9uLkV2ZW50Q29udGFpbmVyIHtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwdnc7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uRXZlbnQtSW1hZ2Uge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDI1dnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLkF1Y3Rpb24uRXZlbnQtVGl0bGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5hdWN0aW9uLk5GVHMtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgNSU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmF1Y3Rpb24uRWxlbWVudHNDb250YWluZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMXZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hdWN0aW9uLk5GdC1jb250YWluIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXVjdGlvbi5BdWN0aW9uQmlkSW1hZ2Uge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDE4dnc7XFxyXFxuICAgICAgICBhc3BlY3QtcmF0aW86IDQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uTkZULXRpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDF2dyAqIDIuNSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uTkZULURlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjh2dyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uR3JleS10ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24ucHJpY2VUZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uRXZlbnRDb250YWluZXIge1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGluaGVyaXQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDQlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIydnc7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uRXZlbnQtSW1hZ2Uge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDE3dnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1dnc7XFxyXFxuICAgICAgICBhc3BlY3QtcmF0aW86IDQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLkF1Y3Rpb24uRXZlbnQtVGl0bGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMi42dncpO1xcclxcbiAgICB9XFxyXFxuICAgIC5BdWN0aW9uLkV2ZW50LXNtYWxsLVRleHR7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNHZ3O1xcclxcbiAgICB9XFxyXFxuICAgIC5BdWN0aW9uLkV2ZW50LWdvYWwtcHJpY2V7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJ2dztcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9hdWN0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtJQUNoQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7OztBQUdBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsV0FBVztRQUNYLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuYXVjdGlvbi5ORlRzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXVjdGlvbi5FbGVtZW50c0NvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMzdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmF1Y3Rpb24uTkZ0LWNvbnRhaW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXVjdGlvbi5BdWN0aW9uQmlkSW1hZ2Uge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDMwdnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwdnc7XFxyXFxuICAgICAgICBhc3BlY3QtcmF0aW86IDQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uTkZULXRpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uTkZULURlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5BdWN0aW9uLkV2ZW50Q29udGFpbmVyIHtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwdnc7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uRXZlbnQtSW1hZ2Uge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDI1dnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLkF1Y3Rpb24uRXZlbnQtVGl0bGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5hdWN0aW9uLk5GVHMtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgNSU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmF1Y3Rpb24uRWxlbWVudHNDb250YWluZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMXZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hdWN0aW9uLk5GdC1jb250YWluIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXVjdGlvbi5BdWN0aW9uQmlkSW1hZ2Uge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDE4dnc7XFxyXFxuICAgICAgICBhc3BlY3QtcmF0aW86IDQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uTkZULXRpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDF2dyAqIDIuNSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uTkZULURlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjh2dyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uR3JleS10ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24ucHJpY2VUZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS44dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uRXZlbnRDb250YWluZXIge1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGluaGVyaXQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDQlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIydnc7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkF1Y3Rpb24uRXZlbnQtSW1hZ2Uge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDE3dnc7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1dnc7XFxyXFxuICAgICAgICBhc3BlY3QtcmF0aW86IDQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLkF1Y3Rpb24uRXZlbnQtVGl0bGV7XFxyXFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMi42dncpO1xcclxcbiAgICB9XFxyXFxuICAgIC5BdWN0aW9uLkV2ZW50LXNtYWxsLVRleHR7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNHZ3O1xcclxcbiAgICB9XFxyXFxuICAgIC5BdWN0aW9uLkV2ZW50LWdvYWwtcHJpY2V7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJ2dztcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImFjMzc3MTVkZDcyMGViMGY4MGJiXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkZvcm0iLCJIZWFkIiwiUm93IiwiTGluayIsIkNvbCIsIkltYWdlIiwiQnV0dG9uIiwiQmlkTkZUTW9kYWwiLCJWaWV3QmlkTkZUTW9kYWwiLCJ1c2VDb250cmFjdCIsIkhlYWRlciIsIkF1Y3Rpb25ORlQiLCJ1c2VyIiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwicm91dGVyIiwiZXZlbnRJZCIsInNldEV2ZW50SWQiLCJsaXN0Iiwic2V0TGlzdCIsInRva2VuTmFtZSIsInNldFRva2VuTmFtZSIsInRva2VuU3ltYm9sIiwic2V0VG9rZW5TeW1ib2wiLCJ0aXRsZSIsInNldFRpdGxlIiwiZ29hbHVzZCIsInNldGdvYWx1c2QiLCJnb2FsIiwic2V0Z29hbCIsImRhdGVsZWZ0Iiwic2V0ZGF0ZWxlZnQiLCJkYXRlIiwic2V0ZGF0ZSIsImRhdGVsZWZ0QmlkIiwic2V0ZGF0ZWxlZnRCaWQiLCJsb2dvIiwic2V0bG9nbyIsInNlbGVjdGlkIiwic2V0c2VsZWN0aWQiLCJzZWxlY3R0aXRsZSIsInNldHNlbGVjdHRpdGxlIiwic2VsZWN0ZWRBZGRyZXNzIiwic2V0c2VsZWN0ZWRBZGRyZXNzIiwic2VsZWN0dHlwZSIsInNldHNlbGVjdHR5cGUiLCJzZWxlY3RiaWQiLCJzZXRzZWxlY3RiaWQiLCJldmVudHVyaSIsInNldEV2ZW50dXJpIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiVmlld21vZGFsU2hvdyIsInNldFZpZXdNb2RhbFNob3ciLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiTGVmdERhdGUiLCJkYXRldGV4dCIsImMiLCJEYXRlIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJoIiwibSIsInMiLCJ0b1N0cmluZyIsIkxlZnREYXRlQmlkIiwicmVnZXgiLCJzdHIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImlkIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwiZmV0Y2hDb250cmFjdERhdGEiLCJldmVudFVSSSIsInZhbHVlIiwiYXJyIiwiZ2V0dG9rZW5TZWFyY2hFdmVudFRvdGFsIiwidG90YWxUb2tlbnMiLCJpIiwiTnVtYmVyIiwib2JqIiwib2JqZWN0IiwiSlNPTiIsInBhcnNlIiwicHJpY2VkZXMxIiwiZm9ybWF0IiwicHJvcGVydGllcyIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJleCIsImdldHRva2VuSWRCeVVyaSIsIlRva2VuSWQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIklkIiwibmFtZSIsIkJpZHByaWNlIiwidHlwZSIsInR5cGVpbWciLCJpbWFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIlRpdGxlIiwid2FsbGV0IiwiR29hbCIsInN5bWJvbCIsImVycm9yIiwic2V0SW50ZXJ2YWwiLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhY3RpdmF0ZVZpZXdCaWRNb2RhbCIsImUiLCJ0YXJnZXQiLCJhY3RpdmF0ZUJpZE5GVE1vZGFsIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJsaXN0SXRlbSIsInBvc2l0aW9uIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50Iiwicm93R2FwIiwiY29sb3IiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==