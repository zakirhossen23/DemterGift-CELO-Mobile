"use strict";
self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./node_modules/@ethersproject/base64/lib.esm/base64.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ethersproject/base64/lib.esm/base64.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": function() { return /* binding */ decode; },
/* harmony export */   "encode": function() { return /* binding */ encode; }
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");


function decode(textData) {
    textData = atob(textData);
    const data = [];
    for (let i = 0; i < textData.length; i++) {
        data.push(textData.charCodeAt(i));
    }
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(data);
}
function encode(data) {
    data = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(data);
    let textData = "";
    for (let i = 0; i < data.length; i++) {
        textData += String.fromCharCode(data[i]);
    }
    return btoa(textData);
}
//# sourceMappingURL=base64.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/basex/lib.esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@ethersproject/basex/lib.esm/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseX": function() { return /* binding */ BaseX; },
/* harmony export */   "Base32": function() { return /* binding */ Base32; },
/* harmony export */   "Base58": function() { return /* binding */ Base58; }
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/properties */ "./node_modules/@ethersproject/properties/lib.esm/index.js");
/**
 * var basex = require("base-x");
 *
 * This implementation is heavily based on base-x. The main reason to
 * deviate was to prevent the dependency of Buffer.
 *
 * Contributors:
 *
 * base-x encoding
 * Forked from https://github.com/cryptocoinjs/bs58
 * Originally written by Mike Hearn for BitcoinJ
 * Copyright (c) 2011 Google Inc
 * Ported to JavaScript by Stefan Thomas
 * Merged Buffer refactorings from base58-native by Stephen Pair
 * Copyright (c) 2013 BitPay Inc
 *
 * The MIT License (MIT)
 *
 * Copyright base-x contributors (c) 2016
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 */


class BaseX {
    constructor(alphabet) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__.defineReadOnly)(this, "alphabet", alphabet);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__.defineReadOnly)(this, "base", alphabet.length);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__.defineReadOnly)(this, "_alphabetMap", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__.defineReadOnly)(this, "_leader", alphabet.charAt(0));
        // pre-compute lookup table
        for (let i = 0; i < alphabet.length; i++) {
            this._alphabetMap[alphabet.charAt(i)] = i;
        }
    }
    encode(value) {
        let source = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.arrayify)(value);
        if (source.length === 0) {
            return "";
        }
        let digits = [0];
        for (let i = 0; i < source.length; ++i) {
            let carry = source[i];
            for (let j = 0; j < digits.length; ++j) {
                carry += digits[j] << 8;
                digits[j] = carry % this.base;
                carry = (carry / this.base) | 0;
            }
            while (carry > 0) {
                digits.push(carry % this.base);
                carry = (carry / this.base) | 0;
            }
        }
        let string = "";
        // deal with leading zeros
        for (let k = 0; source[k] === 0 && k < source.length - 1; ++k) {
            string += this._leader;
        }
        // convert digits to a string
        for (let q = digits.length - 1; q >= 0; --q) {
            string += this.alphabet[digits[q]];
        }
        return string;
    }
    decode(value) {
        if (typeof (value) !== "string") {
            throw new TypeError("Expected String");
        }
        let bytes = [];
        if (value.length === 0) {
            return new Uint8Array(bytes);
        }
        bytes.push(0);
        for (let i = 0; i < value.length; i++) {
            let byte = this._alphabetMap[value[i]];
            if (byte === undefined) {
                throw new Error("Non-base" + this.base + " character");
            }
            let carry = byte;
            for (let j = 0; j < bytes.length; ++j) {
                carry += bytes[j] * this.base;
                bytes[j] = carry & 0xff;
                carry >>= 8;
            }
            while (carry > 0) {
                bytes.push(carry & 0xff);
                carry >>= 8;
            }
        }
        // deal with leading zeros
        for (let k = 0; value[k] === this._leader && k < value.length - 1; ++k) {
            bytes.push(0);
        }
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.arrayify)(new Uint8Array(bytes.reverse()));
    }
}
const Base32 = new BaseX("abcdefghijklmnopqrstuvwxyz234567");
const Base58 = new BaseX("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");

//console.log(Base58.decode("Qmd2V777o5XvJbYMeMb8k2nU5f8d3ciUQ5YpYuWhzv8iDj"))
//console.log(Base58.encode(Base58.decode("Qmd2V777o5XvJbYMeMb8k2nU5f8d3ciUQ5YpYuWhzv8iDj")))
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/constants/lib.esm/addresses.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ethersproject/constants/lib.esm/addresses.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressZero": function() { return /* binding */ AddressZero; }
/* harmony export */ });
const AddressZero = "0x0000000000000000000000000000000000000000";
//# sourceMappingURL=addresses.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/constants/lib.esm/hashes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ethersproject/constants/lib.esm/hashes.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HashZero": function() { return /* binding */ HashZero; }
/* harmony export */ });
const HashZero = "0x0000000000000000000000000000000000000000000000000000000000000000";
//# sourceMappingURL=hashes.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/hash/lib.esm/_version.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ethersproject/hash/lib.esm/_version.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": function() { return /* binding */ version; }
/* harmony export */ });
const version = "hash/5.5.0";
//# sourceMappingURL=_version.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/hash/lib.esm/namehash.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ethersproject/hash/lib.esm/namehash.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidName": function() { return /* binding */ isValidName; },
/* harmony export */   "namehash": function() { return /* binding */ namehash; }
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/strings */ "./node_modules/@ethersproject/strings/lib.esm/idna.js");
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/strings */ "./node_modules/@ethersproject/strings/lib.esm/utf8.js");
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/keccak256 */ "./node_modules/@ethersproject/keccak256/lib.esm/index.js");
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ "./node_modules/@ethersproject/hash/lib.esm/_version.js");





const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);
const Zeros = new Uint8Array(32);
Zeros.fill(0);
const Partition = new RegExp("^((.*)\\.)?([^.]+)$");
function isValidName(name) {
    try {
        const comps = name.split(".");
        for (let i = 0; i < comps.length; i++) {
            if ((0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_2__.nameprep)(comps[i]).length === 0) {
                throw new Error("empty");
            }
        }
        return true;
    }
    catch (error) { }
    return false;
}
function namehash(name) {
    /* istanbul ignore if */
    if (typeof (name) !== "string") {
        logger.throwArgumentError("invalid ENS name; not a string", "name", name);
    }
    let current = name;
    let result = Zeros;
    while (current.length) {
        const partition = current.match(Partition);
        if (partition == null || partition[2] === "") {
            logger.throwArgumentError("invalid ENS address; missing component", "name", name);
        }
        const label = (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_3__.toUtf8Bytes)((0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_2__.nameprep)(partition[3]));
        result = (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_4__.keccak256)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__.concat)([result, (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_4__.keccak256)(label)]));
        current = partition[2] || "";
    }
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__.hexlify)(result);
}
//# sourceMappingURL=namehash.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/hash/lib.esm/typed-data.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ethersproject/hash/lib.esm/typed-data.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypedDataEncoder": function() { return /* binding */ TypedDataEncoder; }
/* harmony export */ });
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/address */ "./node_modules/@ethersproject/address/lib.esm/index.js");
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/bignumber */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/keccak256 */ "./node_modules/@ethersproject/keccak256/lib.esm/index.js");
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/properties */ "./node_modules/@ethersproject/properties/lib.esm/index.js");
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ "./node_modules/@ethersproject/hash/lib.esm/_version.js");
/* harmony import */ var _id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./id */ "./node_modules/@ethersproject/hash/lib.esm/id.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);

const padding = new Uint8Array(32);
padding.fill(0);
const NegativeOne = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__.BigNumber.from(-1);
const Zero = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__.BigNumber.from(0);
const One = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__.BigNumber.from(1);
const MaxUint256 = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__.BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function hexPadRight(value) {
    const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(value);
    const padOffset = bytes.length % 32;
    if (padOffset) {
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexConcat)([bytes, padding.slice(padOffset)]);
    }
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexlify)(bytes);
}
const hexTrue = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexZeroPad)(One.toHexString(), 32);
const hexFalse = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexZeroPad)(Zero.toHexString(), 32);
const domainFieldTypes = {
    name: "string",
    version: "string",
    chainId: "uint256",
    verifyingContract: "address",
    salt: "bytes32"
};
const domainFieldNames = [
    "name", "version", "chainId", "verifyingContract", "salt"
];
function checkString(key) {
    return function (value) {
        if (typeof (value) !== "string") {
            logger.throwArgumentError(`invalid domain value for ${JSON.stringify(key)}`, `domain.${key}`, value);
        }
        return value;
    };
}
const domainChecks = {
    name: checkString("name"),
    version: checkString("version"),
    chainId: function (value) {
        try {
            return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__.BigNumber.from(value).toString();
        }
        catch (error) { }
        return logger.throwArgumentError(`invalid domain value for "chainId"`, "domain.chainId", value);
    },
    verifyingContract: function (value) {
        try {
            return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_4__.getAddress)(value).toLowerCase();
        }
        catch (error) { }
        return logger.throwArgumentError(`invalid domain value "verifyingContract"`, "domain.verifyingContract", value);
    },
    salt: function (value) {
        try {
            const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(value);
            if (bytes.length !== 32) {
                throw new Error("bad length");
            }
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexlify)(bytes);
        }
        catch (error) { }
        return logger.throwArgumentError(`invalid domain value "salt"`, "domain.salt", value);
    }
};
function getBaseEncoder(type) {
    // intXX and uintXX
    {
        const match = type.match(/^(u?)int(\d*)$/);
        if (match) {
            const signed = (match[1] === "");
            const width = parseInt(match[2] || "256");
            if (width % 8 !== 0 || width > 256 || (match[2] && match[2] !== String(width))) {
                logger.throwArgumentError("invalid numeric width", "type", type);
            }
            const boundsUpper = MaxUint256.mask(signed ? (width - 1) : width);
            const boundsLower = signed ? boundsUpper.add(One).mul(NegativeOne) : Zero;
            return function (value) {
                const v = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__.BigNumber.from(value);
                if (v.lt(boundsLower) || v.gt(boundsUpper)) {
                    logger.throwArgumentError(`value out-of-bounds for ${type}`, "value", value);
                }
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexZeroPad)(v.toTwos(256).toHexString(), 32);
            };
        }
    }
    // bytesXX
    {
        const match = type.match(/^bytes(\d+)$/);
        if (match) {
            const width = parseInt(match[1]);
            if (width === 0 || width > 32 || match[1] !== String(width)) {
                logger.throwArgumentError("invalid bytes width", "type", type);
            }
            return function (value) {
                const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(value);
                if (bytes.length !== width) {
                    logger.throwArgumentError(`invalid length for ${type}`, "value", value);
                }
                return hexPadRight(value);
            };
        }
    }
    switch (type) {
        case "address": return function (value) {
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexZeroPad)((0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_4__.getAddress)(value), 32);
        };
        case "bool": return function (value) {
            return ((!value) ? hexFalse : hexTrue);
        };
        case "bytes": return function (value) {
            return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_5__.keccak256)(value);
        };
        case "string": return function (value) {
            return (0,_id__WEBPACK_IMPORTED_MODULE_6__.id)(value);
        };
    }
    return null;
}
function encodeType(name, fields) {
    return `${name}(${fields.map(({ name, type }) => (type + " " + name)).join(",")})`;
}
class TypedDataEncoder {
    constructor(types) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__.defineReadOnly)(this, "types", Object.freeze((0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__.deepCopy)(types)));
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__.defineReadOnly)(this, "_encoderCache", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__.defineReadOnly)(this, "_types", {});
        // Link struct types to their direct child structs
        const links = {};
        // Link structs to structs which contain them as a child
        const parents = {};
        // Link all subtypes within a given struct
        const subtypes = {};
        Object.keys(types).forEach((type) => {
            links[type] = {};
            parents[type] = [];
            subtypes[type] = {};
        });
        for (const name in types) {
            const uniqueNames = {};
            types[name].forEach((field) => {
                // Check each field has a unique name
                if (uniqueNames[field.name]) {
                    logger.throwArgumentError(`duplicate variable name ${JSON.stringify(field.name)} in ${JSON.stringify(name)}`, "types", types);
                }
                uniqueNames[field.name] = true;
                // Get the base type (drop any array specifiers)
                const baseType = field.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                if (baseType === name) {
                    logger.throwArgumentError(`circular type reference to ${JSON.stringify(baseType)}`, "types", types);
                }
                // Is this a base encoding type?
                const encoder = getBaseEncoder(baseType);
                if (encoder) {
                    return;
                }
                if (!parents[baseType]) {
                    logger.throwArgumentError(`unknown type ${JSON.stringify(baseType)}`, "types", types);
                }
                // Add linkage
                parents[baseType].push(name);
                links[name][baseType] = true;
            });
        }
        // Deduce the primary type
        const primaryTypes = Object.keys(parents).filter((n) => (parents[n].length === 0));
        if (primaryTypes.length === 0) {
            logger.throwArgumentError("missing primary type", "types", types);
        }
        else if (primaryTypes.length > 1) {
            logger.throwArgumentError(`ambiguous primary types or unused types: ${primaryTypes.map((t) => (JSON.stringify(t))).join(", ")}`, "types", types);
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__.defineReadOnly)(this, "primaryType", primaryTypes[0]);
        // Check for circular type references
        function checkCircular(type, found) {
            if (found[type]) {
                logger.throwArgumentError(`circular type reference to ${JSON.stringify(type)}`, "types", types);
            }
            found[type] = true;
            Object.keys(links[type]).forEach((child) => {
                if (!parents[child]) {
                    return;
                }
                // Recursively check children
                checkCircular(child, found);
                // Mark all ancestors as having this decendant
                Object.keys(found).forEach((subtype) => {
                    subtypes[subtype][child] = true;
                });
            });
            delete found[type];
        }
        checkCircular(this.primaryType, {});
        // Compute each fully describe type
        for (const name in subtypes) {
            const st = Object.keys(subtypes[name]);
            st.sort();
            this._types[name] = encodeType(name, types[name]) + st.map((t) => encodeType(t, types[t])).join("");
        }
    }
    getEncoder(type) {
        let encoder = this._encoderCache[type];
        if (!encoder) {
            encoder = this._encoderCache[type] = this._getEncoder(type);
        }
        return encoder;
    }
    _getEncoder(type) {
        // Basic encoder type (address, bool, uint256, etc)
        {
            const encoder = getBaseEncoder(type);
            if (encoder) {
                return encoder;
            }
        }
        // Array
        const match = type.match(/^(.*)(\x5b(\d*)\x5d)$/);
        if (match) {
            const subtype = match[1];
            const subEncoder = this.getEncoder(subtype);
            const length = parseInt(match[3]);
            return (value) => {
                if (length >= 0 && value.length !== length) {
                    logger.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", value);
                }
                let result = value.map(subEncoder);
                if (this._types[subtype]) {
                    result = result.map(_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_5__.keccak256);
                }
                return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_5__.keccak256)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexConcat)(result));
            };
        }
        // Struct
        const fields = this.types[type];
        if (fields) {
            const encodedType = (0,_id__WEBPACK_IMPORTED_MODULE_6__.id)(this._types[type]);
            return (value) => {
                const values = fields.map(({ name, type }) => {
                    const result = this.getEncoder(type)(value[name]);
                    if (this._types[type]) {
                        return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_5__.keccak256)(result);
                    }
                    return result;
                });
                values.unshift(encodedType);
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexConcat)(values);
            };
        }
        return logger.throwArgumentError(`unknown type: ${type}`, "type", type);
    }
    encodeType(name) {
        const result = this._types[name];
        if (!result) {
            logger.throwArgumentError(`unknown type: ${JSON.stringify(name)}`, "name", name);
        }
        return result;
    }
    encodeData(type, value) {
        return this.getEncoder(type)(value);
    }
    hashStruct(name, value) {
        return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_5__.keccak256)(this.encodeData(name, value));
    }
    encode(value) {
        return this.encodeData(this.primaryType, value);
    }
    hash(value) {
        return this.hashStruct(this.primaryType, value);
    }
    _visit(type, value, callback) {
        // Basic encoder type (address, bool, uint256, etc)
        {
            const encoder = getBaseEncoder(type);
            if (encoder) {
                return callback(type, value);
            }
        }
        // Array
        const match = type.match(/^(.*)(\x5b(\d*)\x5d)$/);
        if (match) {
            const subtype = match[1];
            const length = parseInt(match[3]);
            if (length >= 0 && value.length !== length) {
                logger.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", value);
            }
            return value.map((v) => this._visit(subtype, v, callback));
        }
        // Struct
        const fields = this.types[type];
        if (fields) {
            return fields.reduce((accum, { name, type }) => {
                accum[name] = this._visit(type, value[name], callback);
                return accum;
            }, {});
        }
        return logger.throwArgumentError(`unknown type: ${type}`, "type", type);
    }
    visit(value, callback) {
        return this._visit(this.primaryType, value, callback);
    }
    static from(types) {
        return new TypedDataEncoder(types);
    }
    static getPrimaryType(types) {
        return TypedDataEncoder.from(types).primaryType;
    }
    static hashStruct(name, types, value) {
        return TypedDataEncoder.from(types).hashStruct(name, value);
    }
    static hashDomain(domain) {
        const domainFields = [];
        for (const name in domain) {
            const type = domainFieldTypes[name];
            if (!type) {
                logger.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(name)}`, "domain", domain);
            }
            domainFields.push({ name, type });
        }
        domainFields.sort((a, b) => {
            return domainFieldNames.indexOf(a.name) - domainFieldNames.indexOf(b.name);
        });
        return TypedDataEncoder.hashStruct("EIP712Domain", { EIP712Domain: domainFields }, domain);
    }
    static encode(domain, types, value) {
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexConcat)([
            "0x1901",
            TypedDataEncoder.hashDomain(domain),
            TypedDataEncoder.from(types).hash(value)
        ]);
    }
    static hash(domain, types, value) {
        return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_5__.keccak256)(TypedDataEncoder.encode(domain, types, value));
    }
    // Replaces all address types with ENS names with their looked up address
    static resolveNames(domain, types, value, resolveName) {
        return __awaiter(this, void 0, void 0, function* () {
            // Make a copy to isolate it from the object passed in
            domain = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__.shallowCopy)(domain);
            // Look up all ENS names
            const ensCache = {};
            // Do we need to look up the domain's verifyingContract?
            if (domain.verifyingContract && !(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.isHexString)(domain.verifyingContract, 20)) {
                ensCache[domain.verifyingContract] = "0x";
            }
            // We are going to use the encoder to visit all the base values
            const encoder = TypedDataEncoder.from(types);
            // Get a list of all the addresses
            encoder.visit(value, (type, value) => {
                if (type === "address" && !(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.isHexString)(value, 20)) {
                    ensCache[value] = "0x";
                }
                return value;
            });
            // Lookup each name
            for (const name in ensCache) {
                ensCache[name] = yield resolveName(name);
            }
            // Replace the domain verifyingContract if needed
            if (domain.verifyingContract && ensCache[domain.verifyingContract]) {
                domain.verifyingContract = ensCache[domain.verifyingContract];
            }
            // Replace all ENS names with their address
            value = encoder.visit(value, (type, value) => {
                if (type === "address" && ensCache[value]) {
                    return ensCache[value];
                }
                return value;
            });
            return { domain, value };
        });
    }
    static getPayload(domain, types, value) {
        // Validate the domain fields
        TypedDataEncoder.hashDomain(domain);
        // Derive the EIP712Domain Struct reference type
        const domainValues = {};
        const domainTypes = [];
        domainFieldNames.forEach((name) => {
            const value = domain[name];
            if (value == null) {
                return;
            }
            domainValues[name] = domainChecks[name](value);
            domainTypes.push({ name, type: domainFieldTypes[name] });
        });
        const encoder = TypedDataEncoder.from(types);
        const typesWithDomain = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_7__.shallowCopy)(types);
        if (typesWithDomain.EIP712Domain) {
            logger.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", types);
        }
        else {
            typesWithDomain.EIP712Domain = domainTypes;
        }
        // Validate the data structures and types
        encoder.encode(value);
        return {
            types: typesWithDomain,
            domain: domainValues,
            primaryType: encoder.primaryType,
            message: encoder.visit(value, (type, value) => {
                // bytes
                if (type.match(/^bytes(\d*)/)) {
                    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexlify)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(value));
                }
                // uint or int
                if (type.match(/^u?int/)) {
                    return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__.BigNumber.from(value).toString();
                }
                switch (type) {
                    case "address":
                        return value.toLowerCase();
                    case "bool":
                        return !!value;
                    case "string":
                        if (typeof (value) !== "string") {
                            logger.throwArgumentError(`invalid string`, "value", value);
                        }
                        return value;
                }
                return logger.throwArgumentError("unsupported type", "type", type);
            })
        };
    }
}
//# sourceMappingURL=typed-data.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/networks/lib.esm/_version.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ethersproject/networks/lib.esm/_version.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": function() { return /* binding */ version; }
/* harmony export */ });
const version = "networks/5.5.2";
//# sourceMappingURL=_version.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/networks/lib.esm/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ethersproject/networks/lib.esm/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNetwork": function() { return /* binding */ getNetwork; }
/* harmony export */ });
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ "./node_modules/@ethersproject/networks/lib.esm/_version.js");



const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);
;
function isRenetworkable(value) {
    return (value && typeof (value.renetwork) === "function");
}
function ethDefaultProvider(network) {
    const func = function (providers, options) {
        if (options == null) {
            options = {};
        }
        const providerList = [];
        if (providers.InfuraProvider) {
            try {
                providerList.push(new providers.InfuraProvider(network, options.infura));
            }
            catch (error) { }
        }
        if (providers.EtherscanProvider) {
            try {
                providerList.push(new providers.EtherscanProvider(network, options.etherscan));
            }
            catch (error) { }
        }
        if (providers.AlchemyProvider) {
            try {
                providerList.push(new providers.AlchemyProvider(network, options.alchemy));
            }
            catch (error) { }
        }
        if (providers.PocketProvider) {
            // These networks are currently faulty on Pocket as their
            // network does not handle the Berlin hardfork, which is
            // live on these ones.
            // @TODO: This goes away once Pocket has upgraded their nodes
            const skip = ["goerli", "ropsten", "rinkeby"];
            try {
                const provider = new providers.PocketProvider(network);
                if (provider.network && skip.indexOf(provider.network.name) === -1) {
                    providerList.push(provider);
                }
            }
            catch (error) { }
        }
        if (providers.CloudflareProvider) {
            try {
                providerList.push(new providers.CloudflareProvider(network));
            }
            catch (error) { }
        }
        if (providerList.length === 0) {
            return null;
        }
        if (providers.FallbackProvider) {
            let quorum = 1;
            if (options.quorum != null) {
                quorum = options.quorum;
            }
            else if (network === "homestead") {
                quorum = 2;
            }
            return new providers.FallbackProvider(providerList, quorum);
        }
        return providerList[0];
    };
    func.renetwork = function (network) {
        return ethDefaultProvider(network);
    };
    return func;
}
function etcDefaultProvider(url, network) {
    const func = function (providers, options) {
        if (providers.JsonRpcProvider) {
            return new providers.JsonRpcProvider(url, network);
        }
        return null;
    };
    func.renetwork = function (network) {
        return etcDefaultProvider(url, network);
    };
    return func;
}
const homestead = {
    chainId: 1,
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    name: "homestead",
    _defaultProvider: ethDefaultProvider("homestead")
};
const ropsten = {
    chainId: 3,
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    name: "ropsten",
    _defaultProvider: ethDefaultProvider("ropsten")
};
const classicMordor = {
    chainId: 63,
    name: "classicMordor",
    _defaultProvider: etcDefaultProvider("https://www.ethercluster.com/mordor", "classicMordor")
};
// See: https://chainlist.org
const networks = {
    unspecified: { chainId: 0, name: "unspecified" },
    homestead: homestead,
    mainnet: homestead,
    morden: { chainId: 2, name: "morden" },
    ropsten: ropsten,
    testnet: ropsten,
    rinkeby: {
        chainId: 4,
        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        name: "rinkeby",
        _defaultProvider: ethDefaultProvider("rinkeby")
    },
    kovan: {
        chainId: 42,
        name: "kovan",
        _defaultProvider: ethDefaultProvider("kovan")
    },
    goerli: {
        chainId: 5,
        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        name: "goerli",
        _defaultProvider: ethDefaultProvider("goerli")
    },
    kintsugi: { chainId: 1337702, name: "kintsugi" },
    // ETC (See: #351)
    classic: {
        chainId: 61,
        name: "classic",
        _defaultProvider: etcDefaultProvider("https:/\/www.ethercluster.com/etc", "classic")
    },
    classicMorden: { chainId: 62, name: "classicMorden" },
    classicMordor: classicMordor,
    classicTestnet: classicMordor,
    classicKotti: {
        chainId: 6,
        name: "classicKotti",
        _defaultProvider: etcDefaultProvider("https:/\/www.ethercluster.com/kotti", "classicKotti")
    },
    xdai: { chainId: 100, name: "xdai" },
    matic: { chainId: 137, name: "matic" },
    maticmum: { chainId: 80001, name: "maticmum" },
    optimism: { chainId: 10, name: "optimism" },
    "optimism-kovan": { chainId: 69, name: "optimism-kovan" },
    "optimism-goerli": { chainId: 420, name: "optimism-goerli" },
    arbitrum: { chainId: 42161, name: "arbitrum" },
    "arbitrum-rinkeby": { chainId: 421611, name: "arbitrum-rinkeby" },
    bnb: { chainId: 56, name: "bnb" },
    bnbt: { chainId: 97, name: "bnbt" },
};
/**
 *  getNetwork
 *
 *  Converts a named common networks or chain ID (network ID) to a Network
 *  and verifies a network is a valid Network..
 */
function getNetwork(network) {
    // No network (null)
    if (network == null) {
        return null;
    }
    if (typeof (network) === "number") {
        for (const name in networks) {
            const standard = networks[name];
            if (standard.chainId === network) {
                return {
                    name: standard.name,
                    chainId: standard.chainId,
                    ensAddress: (standard.ensAddress || null),
                    _defaultProvider: (standard._defaultProvider || null)
                };
            }
        }
        return {
            chainId: network,
            name: "unknown"
        };
    }
    if (typeof (network) === "string") {
        const standard = networks[network];
        if (standard == null) {
            return null;
        }
        return {
            name: standard.name,
            chainId: standard.chainId,
            ensAddress: standard.ensAddress,
            _defaultProvider: (standard._defaultProvider || null)
        };
    }
    const standard = networks[network.name];
    // Not a standard network; check that it is a valid network in general
    if (!standard) {
        if (typeof (network.chainId) !== "number") {
            logger.throwArgumentError("invalid network chainId", "network", network);
        }
        return network;
    }
    // Make sure the chainId matches the expected network chainId (or is 0; disable EIP-155)
    if (network.chainId !== 0 && network.chainId !== standard.chainId) {
        logger.throwArgumentError("network chainId mismatch", "network", network);
    }
    // @TODO: In the next major version add an attach function to a defaultProvider
    // class and move the _defaultProvider internal to this file (extend Network)
    let defaultProvider = network._defaultProvider || null;
    if (defaultProvider == null && standard._defaultProvider) {
        if (isRenetworkable(standard._defaultProvider)) {
            defaultProvider = standard._defaultProvider.renetwork(network);
        }
        else {
            defaultProvider = standard._defaultProvider;
        }
    }
    // Standard Network (allow overriding the ENS address)
    return {
        name: network.name,
        chainId: standard.chainId,
        ensAddress: (network.ensAddress || standard.ensAddress || null),
        _defaultProvider: defaultProvider
    };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/providers/lib.esm/_version.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ethersproject/providers/lib.esm/_version.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": function() { return /* binding */ version; }
/* harmony export */ });
const version = "providers/5.5.3";
//# sourceMappingURL=_version.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/providers/lib.esm/base-provider.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ethersproject/providers/lib.esm/base-provider.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Event": function() { return /* binding */ Event; },
/* harmony export */   "Resolver": function() { return /* binding */ Resolver; },
/* harmony export */   "BaseProvider": function() { return /* binding */ BaseProvider; }
/* harmony export */ });
/* harmony import */ var _ethersproject_abstract_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/abstract-provider */ "./node_modules/@ethersproject/abstract-provider/lib.esm/index.js");
/* harmony import */ var _ethersproject_basex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/basex */ "./node_modules/@ethersproject/basex/lib.esm/index.js");
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/bignumber */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ethersproject/constants */ "./node_modules/@ethersproject/constants/lib.esm/hashes.js");
/* harmony import */ var _ethersproject_hash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ethersproject/hash */ "./node_modules/@ethersproject/hash/lib.esm/namehash.js");
/* harmony import */ var _ethersproject_networks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ethersproject/networks */ "./node_modules/@ethersproject/networks/lib.esm/index.js");
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/properties */ "./node_modules/@ethersproject/properties/lib.esm/index.js");
/* harmony import */ var _ethersproject_sha2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ethersproject/sha2 */ "./node_modules/@ethersproject/sha2/lib.esm/sha2.js");
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ethersproject/strings */ "./node_modules/@ethersproject/strings/lib.esm/utf8.js");
/* harmony import */ var _ethersproject_web__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ethersproject/web */ "./node_modules/@ethersproject/web/lib.esm/index.js");
/* harmony import */ var bech32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bech32 */ "./node_modules/bech32/index.js");
/* harmony import */ var bech32__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bech32__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version */ "./node_modules/@ethersproject/providers/lib.esm/_version.js");
/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formatter */ "./node_modules/@ethersproject/providers/lib.esm/formatter.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger(_version__WEBPACK_IMPORTED_MODULE_2__.version);

//////////////////////////////
// Event Serializeing
function checkTopic(topic) {
    if (topic == null) {
        return "null";
    }
    if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexDataLength)(topic) !== 32) {
        logger.throwArgumentError("invalid topic", "topic", topic);
    }
    return topic.toLowerCase();
}
function serializeTopics(topics) {
    // Remove trailing null AND-topics; they are redundant
    topics = topics.slice();
    while (topics.length > 0 && topics[topics.length - 1] == null) {
        topics.pop();
    }
    return topics.map((topic) => {
        if (Array.isArray(topic)) {
            // Only track unique OR-topics
            const unique = {};
            topic.forEach((topic) => {
                unique[checkTopic(topic)] = true;
            });
            // The order of OR-topics does not matter
            const sorted = Object.keys(unique);
            sorted.sort();
            return sorted.join("|");
        }
        else {
            return checkTopic(topic);
        }
    }).join("&");
}
function deserializeTopics(data) {
    if (data === "") {
        return [];
    }
    return data.split(/&/g).map((topic) => {
        if (topic === "") {
            return [];
        }
        const comps = topic.split("|").map((topic) => {
            return ((topic === "null") ? null : topic);
        });
        return ((comps.length === 1) ? comps[0] : comps);
    });
}
function getEventTag(eventName) {
    if (typeof (eventName) === "string") {
        eventName = eventName.toLowerCase();
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexDataLength)(eventName) === 32) {
            return "tx:" + eventName;
        }
        if (eventName.indexOf(":") === -1) {
            return eventName;
        }
    }
    else if (Array.isArray(eventName)) {
        return "filter:*:" + serializeTopics(eventName);
    }
    else if (_ethersproject_abstract_provider__WEBPACK_IMPORTED_MODULE_4__.ForkEvent.isForkEvent(eventName)) {
        logger.warn("not implemented");
        throw new Error("not implemented");
    }
    else if (eventName && typeof (eventName) === "object") {
        return "filter:" + (eventName.address || "*") + ":" + serializeTopics(eventName.topics || []);
    }
    throw new Error("invalid event - " + eventName);
}
//////////////////////////////
// Helper Object
function getTime() {
    return (new Date()).getTime();
}
function stall(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}
//////////////////////////////
// Provider Object
/**
 *  EventType
 *   - "block"
 *   - "poll"
 *   - "didPoll"
 *   - "pending"
 *   - "error"
 *   - "network"
 *   - filter
 *   - topics array
 *   - transaction hash
 */
const PollableEvents = ["block", "network", "pending", "poll"];
class Event {
    constructor(tag, listener, once) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.defineReadOnly)(this, "tag", tag);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.defineReadOnly)(this, "listener", listener);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.defineReadOnly)(this, "once", once);
    }
    get event() {
        switch (this.type) {
            case "tx":
                return this.hash;
            case "filter":
                return this.filter;
        }
        return this.tag;
    }
    get type() {
        return this.tag.split(":")[0];
    }
    get hash() {
        const comps = this.tag.split(":");
        if (comps[0] !== "tx") {
            return null;
        }
        return comps[1];
    }
    get filter() {
        const comps = this.tag.split(":");
        if (comps[0] !== "filter") {
            return null;
        }
        const address = comps[1];
        const topics = deserializeTopics(comps[2]);
        const filter = {};
        if (topics.length > 0) {
            filter.topics = topics;
        }
        if (address && address !== "*") {
            filter.address = address;
        }
        return filter;
    }
    pollable() {
        return (this.tag.indexOf(":") >= 0 || PollableEvents.indexOf(this.tag) >= 0);
    }
}
;
// https://github.com/satoshilabs/slips/blob/master/slip-0044.md
const coinInfos = {
    "0": { symbol: "btc", p2pkh: 0x00, p2sh: 0x05, prefix: "bc" },
    "2": { symbol: "ltc", p2pkh: 0x30, p2sh: 0x32, prefix: "ltc" },
    "3": { symbol: "doge", p2pkh: 0x1e, p2sh: 0x16 },
    "60": { symbol: "eth", ilk: "eth" },
    "61": { symbol: "etc", ilk: "eth" },
    "700": { symbol: "xdai", ilk: "eth" },
};
function bytes32ify(value) {
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexZeroPad)(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(value).toHexString(), 32);
}
// Compute the Base58Check encoded data (checksum is first 4 bytes of sha256d)
function base58Encode(data) {
    return _ethersproject_basex__WEBPACK_IMPORTED_MODULE_7__.Base58.encode((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)([data, (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexDataSlice)((0,_ethersproject_sha2__WEBPACK_IMPORTED_MODULE_8__.sha256)((0,_ethersproject_sha2__WEBPACK_IMPORTED_MODULE_8__.sha256)(data)), 0, 4)]));
}
const matcherIpfs = new RegExp("^(ipfs):/\/(.*)$", "i");
const matchers = [
    new RegExp("^(https):/\/(.*)$", "i"),
    new RegExp("^(data):(.*)$", "i"),
    matcherIpfs,
    new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i"),
];
function _parseString(result) {
    try {
        return (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_9__.toUtf8String)(_parseBytes(result));
    }
    catch (error) { }
    return null;
}
function _parseBytes(result) {
    if (result === "0x") {
        return null;
    }
    const offset = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexDataSlice)(result, 0, 32)).toNumber();
    const length = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexDataSlice)(result, offset, offset + 32)).toNumber();
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexDataSlice)(result, offset + 32, offset + 32 + length);
}
// Trim off the ipfs:// prefix and return the default gateway URL
function getIpfsLink(link) {
    if (link.match(/^ipfs:\/\/ipfs\//i)) {
        link = link.substring(12);
    }
    else if (link.match(/^ipfs:\/\//i)) {
        link = link.substring(7);
    }
    else {
        logger.throwArgumentError("unsupported IPFS format", "link", link);
    }
    return `https:/\/gateway.ipfs.io/ipfs/${link}`;
}
class Resolver {
    // The resolvedAddress is only for creating a ReverseLookup resolver
    constructor(provider, address, name, resolvedAddress) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.defineReadOnly)(this, "provider", provider);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.defineReadOnly)(this, "name", name);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.defineReadOnly)(this, "address", provider.formatter.address(address));
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.defineReadOnly)(this, "_resolvedAddress", resolvedAddress);
    }
    _fetchBytes(selector, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            // e.g. keccak256("addr(bytes32,uint256)")
            const tx = {
                to: this.address,
                data: (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexConcat)([selector, (0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_10__.namehash)(this.name), (parameters || "0x")])
            };
            try {
                return _parseBytes(yield this.provider.call(tx));
            }
            catch (error) {
                if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.CALL_EXCEPTION) {
                    return null;
                }
                return null;
            }
        });
    }
    _getAddress(coinType, hexBytes) {
        const coinInfo = coinInfos[String(coinType)];
        if (coinInfo == null) {
            logger.throwError(`unsupported coin type: ${coinType}`, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: `getAddress(${coinType})`
            });
        }
        if (coinInfo.ilk === "eth") {
            return this.provider.formatter.address(hexBytes);
        }
        const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(hexBytes);
        // P2PKH: OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG
        if (coinInfo.p2pkh != null) {
            const p2pkh = hexBytes.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
            if (p2pkh) {
                const length = parseInt(p2pkh[1], 16);
                if (p2pkh[2].length === length * 2 && length >= 1 && length <= 75) {
                    return base58Encode((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)([[coinInfo.p2pkh], ("0x" + p2pkh[2])]));
                }
            }
        }
        // P2SH: OP_HASH160 <scriptHash> OP_EQUAL
        if (coinInfo.p2sh != null) {
            const p2sh = hexBytes.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
            if (p2sh) {
                const length = parseInt(p2sh[1], 16);
                if (p2sh[2].length === length * 2 && length >= 1 && length <= 75) {
                    return base58Encode((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)([[coinInfo.p2sh], ("0x" + p2sh[2])]));
                }
            }
        }
        // Bech32
        if (coinInfo.prefix != null) {
            const length = bytes[1];
            // https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki#witness-program
            let version = bytes[0];
            if (version === 0x00) {
                if (length !== 20 && length !== 32) {
                    version = -1;
                }
            }
            else {
                version = -1;
            }
            if (version >= 0 && bytes.length === 2 + length && length >= 1 && length <= 75) {
                const words = bech32__WEBPACK_IMPORTED_MODULE_0___default().toWords(bytes.slice(2));
                words.unshift(version);
                return bech32__WEBPACK_IMPORTED_MODULE_0___default().encode(coinInfo.prefix, words);
            }
        }
        return null;
    }
    getAddress(coinType) {
        return __awaiter(this, void 0, void 0, function* () {
            if (coinType == null) {
                coinType = 60;
            }
            // If Ethereum, use the standard `addr(bytes32)`
            if (coinType === 60) {
                try {
                    // keccak256("addr(bytes32)")
                    const transaction = {
                        to: this.address,
                        data: ("0x3b3b57de" + (0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_10__.namehash)(this.name).substring(2))
                    };
                    const hexBytes = yield this.provider.call(transaction);
                    // No address
                    if (hexBytes === "0x" || hexBytes === _ethersproject_constants__WEBPACK_IMPORTED_MODULE_11__.HashZero) {
                        return null;
                    }
                    return this.provider.formatter.callAddress(hexBytes);
                }
                catch (error) {
                    if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.CALL_EXCEPTION) {
                        return null;
                    }
                    throw error;
                }
            }
            // keccak256("addr(bytes32,uint256")
            const hexBytes = yield this._fetchBytes("0xf1cb7e06", bytes32ify(coinType));
            // No address
            if (hexBytes == null || hexBytes === "0x") {
                return null;
            }
            // Compute the address
            const address = this._getAddress(coinType, hexBytes);
            if (address == null) {
                logger.throwError(`invalid or unsupported coin data`, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: `getAddress(${coinType})`,
                    coinType: coinType,
                    data: hexBytes
                });
            }
            return address;
        });
    }
    getAvatar() {
        return __awaiter(this, void 0, void 0, function* () {
            const linkage = [{ type: "name", content: this.name }];
            try {
                // test data for ricmoo.eth
                //const avatar = "eip155:1/erc721:0x265385c7f4132228A0d54EB1A9e7460b91c0cC68/29233";
                const avatar = yield this.getText("avatar");
                if (avatar == null) {
                    return null;
                }
                for (let i = 0; i < matchers.length; i++) {
                    const match = avatar.match(matchers[i]);
                    if (match == null) {
                        continue;
                    }
                    const scheme = match[1].toLowerCase();
                    switch (scheme) {
                        case "https":
                            linkage.push({ type: "url", content: avatar });
                            return { linkage, url: avatar };
                        case "data":
                            linkage.push({ type: "data", content: avatar });
                            return { linkage, url: avatar };
                        case "ipfs":
                            linkage.push({ type: "ipfs", content: avatar });
                            return { linkage, url: getIpfsLink(avatar) };
                        case "erc721":
                        case "erc1155": {
                            // Depending on the ERC type, use tokenURI(uint256) or url(uint256)
                            const selector = (scheme === "erc721") ? "0xc87b56dd" : "0x0e89341c";
                            linkage.push({ type: scheme, content: avatar });
                            // The owner of this name
                            const owner = (this._resolvedAddress || (yield this.getAddress()));
                            const comps = (match[2] || "").split("/");
                            if (comps.length !== 2) {
                                return null;
                            }
                            const addr = yield this.provider.formatter.address(comps[0]);
                            const tokenId = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexZeroPad)(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(comps[1]).toHexString(), 32);
                            // Check that this account owns the token
                            if (scheme === "erc721") {
                                // ownerOf(uint256 tokenId)
                                const tokenOwner = this.provider.formatter.callAddress(yield this.provider.call({
                                    to: addr, data: (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexConcat)(["0x6352211e", tokenId])
                                }));
                                if (owner !== tokenOwner) {
                                    return null;
                                }
                                linkage.push({ type: "owner", content: tokenOwner });
                            }
                            else if (scheme === "erc1155") {
                                // balanceOf(address owner, uint256 tokenId)
                                const balance = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(yield this.provider.call({
                                    to: addr, data: (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexConcat)(["0x00fdd58e", (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexZeroPad)(owner, 32), tokenId])
                                }));
                                if (balance.isZero()) {
                                    return null;
                                }
                                linkage.push({ type: "balance", content: balance.toString() });
                            }
                            // Call the token contract for the metadata URL
                            const tx = {
                                to: this.provider.formatter.address(comps[0]),
                                data: (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexConcat)([selector, tokenId])
                            };
                            let metadataUrl = _parseString(yield this.provider.call(tx));
                            if (metadataUrl == null) {
                                return null;
                            }
                            linkage.push({ type: "metadata-url-base", content: metadataUrl });
                            // ERC-1155 allows a generic {id} in the URL
                            if (scheme === "erc1155") {
                                metadataUrl = metadataUrl.replace("{id}", tokenId.substring(2));
                                linkage.push({ type: "metadata-url-expanded", content: metadataUrl });
                            }
                            // Transform IPFS metadata links
                            if (metadataUrl.match(/^ipfs:/i)) {
                                metadataUrl = getIpfsLink(metadataUrl);
                            }
                            linkage.push({ type: "metadata-url", content: metadataUrl });
                            // Get the token metadata
                            const metadata = yield (0,_ethersproject_web__WEBPACK_IMPORTED_MODULE_12__.fetchJson)(metadataUrl);
                            if (!metadata) {
                                return null;
                            }
                            linkage.push({ type: "metadata", content: JSON.stringify(metadata) });
                            // Pull the image URL out
                            let imageUrl = metadata.image;
                            if (typeof (imageUrl) !== "string") {
                                return null;
                            }
                            if (imageUrl.match(/^(https:\/\/|data:)/i)) {
                                // Allow
                            }
                            else {
                                // Transform IPFS link to gateway
                                const ipfs = imageUrl.match(matcherIpfs);
                                if (ipfs == null) {
                                    return null;
                                }
                                linkage.push({ type: "url-ipfs", content: imageUrl });
                                imageUrl = getIpfsLink(imageUrl);
                            }
                            linkage.push({ type: "url", content: imageUrl });
                            return { linkage, url: imageUrl };
                        }
                    }
                }
            }
            catch (error) { }
            return null;
        });
    }
    getContentHash() {
        return __awaiter(this, void 0, void 0, function* () {
            // keccak256("contenthash()")
            const hexBytes = yield this._fetchBytes("0xbc1c58d1");
            // No contenthash
            if (hexBytes == null || hexBytes === "0x") {
                return null;
            }
            // IPFS (CID: 1, Type: DAG-PB)
            const ipfs = hexBytes.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
            if (ipfs) {
                const length = parseInt(ipfs[3], 16);
                if (ipfs[4].length === length * 2) {
                    return "ipfs:/\/" + _ethersproject_basex__WEBPACK_IMPORTED_MODULE_7__.Base58.encode("0x" + ipfs[1]);
                }
            }
            // Swarm (CID: 1, Type: swarm-manifest; hash/length hard-coded to keccak256/32)
            const swarm = hexBytes.match(/^0xe40101fa011b20([0-9a-f]*)$/);
            if (swarm) {
                if (swarm[1].length === (32 * 2)) {
                    return "bzz:/\/" + swarm[1];
                }
            }
            return logger.throwError(`invalid or unsupported content hash data`, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "getContentHash()",
                data: hexBytes
            });
        });
    }
    getText(key) {
        return __awaiter(this, void 0, void 0, function* () {
            // The key encoded as parameter to fetchBytes
            let keyBytes = (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_9__.toUtf8Bytes)(key);
            // The nodehash consumes the first slot, so the string pointer targets
            // offset 64, with the length at offset 64 and data starting at offset 96
            keyBytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)([bytes32ify(64), bytes32ify(keyBytes.length), keyBytes]);
            // Pad to word-size (32 bytes)
            if ((keyBytes.length % 32) !== 0) {
                keyBytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)([keyBytes, (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexZeroPad)("0x", 32 - (key.length % 32))]);
            }
            const hexBytes = yield this._fetchBytes("0x59d1d43c", (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexlify)(keyBytes));
            if (hexBytes == null || hexBytes === "0x") {
                return null;
            }
            return (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_9__.toUtf8String)(hexBytes);
        });
    }
}
let defaultFormatter = null;
let nextPollId = 1;
class BaseProvider extends _ethersproject_abstract_provider__WEBPACK_IMPORTED_MODULE_4__.Provider {
    /**
     *  ready
     *
     *  A Promise<Network> that resolves only once the provider is ready.
     *
     *  Sub-classes that call the super with a network without a chainId
     *  MUST set this. Standard named networks have a known chainId.
     *
     */
    constructor(network) {
        logger.checkNew(new.target, _ethersproject_abstract_provider__WEBPACK_IMPORTED_MODULE_4__.Provider);
        super();
        // Events being listened to
        this._events = [];
        this._emitted = { block: -2 };
        this.formatter = new.target.getFormatter();
        // If network is any, this Provider allows the underlying
        // network to change dynamically, and we auto-detect the
        // current network
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.defineReadOnly)(this, "anyNetwork", (network === "any"));
        if (this.anyNetwork) {
            network = this.detectNetwork();
        }
        if (network instanceof Promise) {
            this._networkPromise = network;
            // Squash any "unhandled promise" errors; that do not need to be handled
            network.catch((error) => { });
            // Trigger initial network setting (async)
            this._ready().catch((error) => { });
        }
        else {
            const knownNetwork = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.getStatic)(new.target, "getNetwork")(network);
            if (knownNetwork) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.defineReadOnly)(this, "_network", knownNetwork);
                this.emit("network", knownNetwork, null);
            }
            else {
                logger.throwArgumentError("invalid network", "network", network);
            }
        }
        this._maxInternalBlockNumber = -1024;
        this._lastBlockNumber = -2;
        this._pollingInterval = 4000;
        this._fastQueryDate = 0;
    }
    _ready() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._network == null) {
                let network = null;
                if (this._networkPromise) {
                    try {
                        network = yield this._networkPromise;
                    }
                    catch (error) { }
                }
                // Try the Provider's network detection (this MUST throw if it cannot)
                if (network == null) {
                    network = yield this.detectNetwork();
                }
                // This should never happen; every Provider sub-class should have
                // suggested a network by here (or have thrown).
                if (!network) {
                    logger.throwError("no network detected", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.UNKNOWN_ERROR, {});
                }
                // Possible this call stacked so do not call defineReadOnly again
                if (this._network == null) {
                    if (this.anyNetwork) {
                        this._network = network;
                    }
                    else {
                        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.defineReadOnly)(this, "_network", network);
                    }
                    this.emit("network", network, null);
                }
            }
            return this._network;
        });
    }
    // This will always return the most recently established network.
    // For "any", this can change (a "network" event is emitted before
    // any change is reflected); otherwise this cannot change
    get ready() {
        return (0,_ethersproject_web__WEBPACK_IMPORTED_MODULE_12__.poll)(() => {
            return this._ready().then((network) => {
                return network;
            }, (error) => {
                // If the network isn't running yet, we will wait
                if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.NETWORK_ERROR && error.event === "noNetwork") {
                    return undefined;
                }
                throw error;
            });
        });
    }
    // @TODO: Remove this and just create a singleton formatter
    static getFormatter() {
        if (defaultFormatter == null) {
            defaultFormatter = new _formatter__WEBPACK_IMPORTED_MODULE_13__.Formatter();
        }
        return defaultFormatter;
    }
    // @TODO: Remove this and just use getNetwork
    static getNetwork(network) {
        return (0,_ethersproject_networks__WEBPACK_IMPORTED_MODULE_14__.getNetwork)((network == null) ? "homestead" : network);
    }
    // Fetches the blockNumber, but will reuse any result that is less
    // than maxAge old or has been requested since the last request
    _getInternalBlockNumber(maxAge) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._ready();
            // Allowing stale data up to maxAge old
            if (maxAge > 0) {
                // While there are pending internal block requests...
                while (this._internalBlockNumber) {
                    // ..."remember" which fetch we started with
                    const internalBlockNumber = this._internalBlockNumber;
                    try {
                        // Check the result is not too stale
                        const result = yield internalBlockNumber;
                        if ((getTime() - result.respTime) <= maxAge) {
                            return result.blockNumber;
                        }
                        // Too old; fetch a new value
                        break;
                    }
                    catch (error) {
                        // The fetch rejected; if we are the first to get the
                        // rejection, drop through so we replace it with a new
                        // fetch; all others blocked will then get that fetch
                        // which won't match the one they "remembered" and loop
                        if (this._internalBlockNumber === internalBlockNumber) {
                            break;
                        }
                    }
                }
            }
            const reqTime = getTime();
            const checkInternalBlockNumber = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.resolveProperties)({
                blockNumber: this.perform("getBlockNumber", {}),
                networkError: this.getNetwork().then((network) => (null), (error) => (error))
            }).then(({ blockNumber, networkError }) => {
                if (networkError) {
                    // Unremember this bad internal block number
                    if (this._internalBlockNumber === checkInternalBlockNumber) {
                        this._internalBlockNumber = null;
                    }
                    throw networkError;
                }
                const respTime = getTime();
                blockNumber = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(blockNumber).toNumber();
                if (blockNumber < this._maxInternalBlockNumber) {
                    blockNumber = this._maxInternalBlockNumber;
                }
                this._maxInternalBlockNumber = blockNumber;
                this._setFastBlockNumber(blockNumber); // @TODO: Still need this?
                return { blockNumber, reqTime, respTime };
            });
            this._internalBlockNumber = checkInternalBlockNumber;
            // Swallow unhandled exceptions; if needed they are handled else where
            checkInternalBlockNumber.catch((error) => {
                // Don't null the dead (rejected) fetch, if it has already been updated
                if (this._internalBlockNumber === checkInternalBlockNumber) {
                    this._internalBlockNumber = null;
                }
            });
            return (yield checkInternalBlockNumber).blockNumber;
        });
    }
    poll() {
        return __awaiter(this, void 0, void 0, function* () {
            const pollId = nextPollId++;
            // Track all running promises, so we can trigger a post-poll once they are complete
            const runners = [];
            let blockNumber = null;
            try {
                blockNumber = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2);
            }
            catch (error) {
                this.emit("error", error);
                return;
            }
            this._setFastBlockNumber(blockNumber);
            // Emit a poll event after we have the latest (fast) block number
            this.emit("poll", pollId, blockNumber);
            // If the block has not changed, meh.
            if (blockNumber === this._lastBlockNumber) {
                this.emit("didPoll", pollId);
                return;
            }
            // First polling cycle, trigger a "block" events
            if (this._emitted.block === -2) {
                this._emitted.block = blockNumber - 1;
            }
            if (Math.abs((this._emitted.block) - blockNumber) > 1000) {
                logger.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${blockNumber})`);
                this.emit("error", logger.makeError("network block skew detected", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.NETWORK_ERROR, {
                    blockNumber: blockNumber,
                    event: "blockSkew",
                    previousBlockNumber: this._emitted.block
                }));
                this.emit("block", blockNumber);
            }
            else {
                // Notify all listener for each block that has passed
                for (let i = this._emitted.block + 1; i <= blockNumber; i++) {
                    this.emit("block", i);
                }
            }
            // The emitted block was updated, check for obsolete events
            if (this._emitted.block !== blockNumber) {
                this._emitted.block = blockNumber;
                Object.keys(this._emitted).forEach((key) => {
                    // The block event does not expire
                    if (key === "block") {
                        return;
                    }
                    // The block we were at when we emitted this event
                    const eventBlockNumber = this._emitted[key];
                    // We cannot garbage collect pending transactions or blocks here
                    // They should be garbage collected by the Provider when setting
                    // "pending" events
                    if (eventBlockNumber === "pending") {
                        return;
                    }
                    // Evict any transaction hashes or block hashes over 12 blocks
                    // old, since they should not return null anyways
                    if (blockNumber - eventBlockNumber > 12) {
                        delete this._emitted[key];
                    }
                });
            }
            // First polling cycle
            if (this._lastBlockNumber === -2) {
                this._lastBlockNumber = blockNumber - 1;
            }
            // Find all transaction hashes we are waiting on
            this._events.forEach((event) => {
                switch (event.type) {
                    case "tx": {
                        const hash = event.hash;
                        let runner = this.getTransactionReceipt(hash).then((receipt) => {
                            if (!receipt || receipt.blockNumber == null) {
                                return null;
                            }
                            this._emitted["t:" + hash] = receipt.blockNumber;
                            this.emit(hash, receipt);
                            return null;
                        }).catch((error) => { this.emit("error", error); });
                        runners.push(runner);
                        break;
                    }
                    case "filter": {
                        const filter = event.filter;
                        filter.fromBlock = this._lastBlockNumber + 1;
                        filter.toBlock = blockNumber;
                        const runner = this.getLogs(filter).then((logs) => {
                            if (logs.length === 0) {
                                return;
                            }
                            logs.forEach((log) => {
                                this._emitted["b:" + log.blockHash] = log.blockNumber;
                                this._emitted["t:" + log.transactionHash] = log.blockNumber;
                                this.emit(filter, log);
                            });
                        }).catch((error) => { this.emit("error", error); });
                        runners.push(runner);
                        break;
                    }
                }
            });
            this._lastBlockNumber = blockNumber;
            // Once all events for this loop have been processed, emit "didPoll"
            Promise.all(runners).then(() => {
                this.emit("didPoll", pollId);
            }).catch((error) => { this.emit("error", error); });
            return;
        });
    }
    // Deprecated; do not use this
    resetEventsBlock(blockNumber) {
        this._lastBlockNumber = blockNumber - 1;
        if (this.polling) {
            this.poll();
        }
    }
    get network() {
        return this._network;
    }
    // This method should query the network if the underlying network
    // can change, such as when connected to a JSON-RPC backend
    detectNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            return logger.throwError("provider does not support network detection", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "provider.detectNetwork"
            });
        });
    }
    getNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const network = yield this._ready();
            // Make sure we are still connected to the same network; this is
            // only an external call for backends which can have the underlying
            // network change spontaneously
            const currentNetwork = yield this.detectNetwork();
            if (network.chainId !== currentNetwork.chainId) {
                // We are allowing network changes, things can get complex fast;
                // make sure you know what you are doing if you use "any"
                if (this.anyNetwork) {
                    this._network = currentNetwork;
                    // Reset all internal block number guards and caches
                    this._lastBlockNumber = -2;
                    this._fastBlockNumber = null;
                    this._fastBlockNumberPromise = null;
                    this._fastQueryDate = 0;
                    this._emitted.block = -2;
                    this._maxInternalBlockNumber = -1024;
                    this._internalBlockNumber = null;
                    // The "network" event MUST happen before this method resolves
                    // so any events have a chance to unregister, so we stall an
                    // additional event loop before returning from /this/ call
                    this.emit("network", currentNetwork, network);
                    yield stall(0);
                    return this._network;
                }
                const error = logger.makeError("underlying network changed", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.NETWORK_ERROR, {
                    event: "changed",
                    network: network,
                    detectedNetwork: currentNetwork
                });
                this.emit("error", error);
                throw error;
            }
            return network;
        });
    }
    get blockNumber() {
        this._getInternalBlockNumber(100 + this.pollingInterval / 2).then((blockNumber) => {
            this._setFastBlockNumber(blockNumber);
        }, (error) => { });
        return (this._fastBlockNumber != null) ? this._fastBlockNumber : -1;
    }
    get polling() {
        return (this._poller != null);
    }
    set polling(value) {
        if (value && !this._poller) {
            this._poller = setInterval(() => { this.poll(); }, this.pollingInterval);
            if (!this._bootstrapPoll) {
                this._bootstrapPoll = setTimeout(() => {
                    this.poll();
                    // We block additional polls until the polling interval
                    // is done, to prevent overwhelming the poll function
                    this._bootstrapPoll = setTimeout(() => {
                        // If polling was disabled, something may require a poke
                        // since starting the bootstrap poll and it was disabled
                        if (!this._poller) {
                            this.poll();
                        }
                        // Clear out the bootstrap so we can do another
                        this._bootstrapPoll = null;
                    }, this.pollingInterval);
                }, 0);
            }
        }
        else if (!value && this._poller) {
            clearInterval(this._poller);
            this._poller = null;
        }
    }
    get pollingInterval() {
        return this._pollingInterval;
    }
    set pollingInterval(value) {
        if (typeof (value) !== "number" || value <= 0 || parseInt(String(value)) != value) {
            throw new Error("invalid polling interval");
        }
        this._pollingInterval = value;
        if (this._poller) {
            clearInterval(this._poller);
            this._poller = setInterval(() => { this.poll(); }, this._pollingInterval);
        }
    }
    _getFastBlockNumber() {
        const now = getTime();
        // Stale block number, request a newer value
        if ((now - this._fastQueryDate) > 2 * this._pollingInterval) {
            this._fastQueryDate = now;
            this._fastBlockNumberPromise = this.getBlockNumber().then((blockNumber) => {
                if (this._fastBlockNumber == null || blockNumber > this._fastBlockNumber) {
                    this._fastBlockNumber = blockNumber;
                }
                return this._fastBlockNumber;
            });
        }
        return this._fastBlockNumberPromise;
    }
    _setFastBlockNumber(blockNumber) {
        // Older block, maybe a stale request
        if (this._fastBlockNumber != null && blockNumber < this._fastBlockNumber) {
            return;
        }
        // Update the time we updated the blocknumber
        this._fastQueryDate = getTime();
        // Newer block number, use  it
        if (this._fastBlockNumber == null || blockNumber > this._fastBlockNumber) {
            this._fastBlockNumber = blockNumber;
            this._fastBlockNumberPromise = Promise.resolve(blockNumber);
        }
    }
    waitForTransaction(transactionHash, confirmations, timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._waitForTransaction(transactionHash, (confirmations == null) ? 1 : confirmations, timeout || 0, null);
        });
    }
    _waitForTransaction(transactionHash, confirmations, timeout, replaceable) {
        return __awaiter(this, void 0, void 0, function* () {
            const receipt = yield this.getTransactionReceipt(transactionHash);
            // Receipt is already good
            if ((receipt ? receipt.confirmations : 0) >= confirmations) {
                return receipt;
            }
            // Poll until the receipt is good...
            return new Promise((resolve, reject) => {
                const cancelFuncs = [];
                let done = false;
                const alreadyDone = function () {
                    if (done) {
                        return true;
                    }
                    done = true;
                    cancelFuncs.forEach((func) => { func(); });
                    return false;
                };
                const minedHandler = (receipt) => {
                    if (receipt.confirmations < confirmations) {
                        return;
                    }
                    if (alreadyDone()) {
                        return;
                    }
                    resolve(receipt);
                };
                this.on(transactionHash, minedHandler);
                cancelFuncs.push(() => { this.removeListener(transactionHash, minedHandler); });
                if (replaceable) {
                    let lastBlockNumber = replaceable.startBlock;
                    let scannedBlock = null;
                    const replaceHandler = (blockNumber) => __awaiter(this, void 0, void 0, function* () {
                        if (done) {
                            return;
                        }
                        // Wait 1 second; this is only used in the case of a fault, so
                        // we will trade off a little bit of latency for more consistent
                        // results and fewer JSON-RPC calls
                        yield stall(1000);
                        this.getTransactionCount(replaceable.from).then((nonce) => __awaiter(this, void 0, void 0, function* () {
                            if (done) {
                                return;
                            }
                            if (nonce <= replaceable.nonce) {
                                lastBlockNumber = blockNumber;
                            }
                            else {
                                // First check if the transaction was mined
                                {
                                    const mined = yield this.getTransaction(transactionHash);
                                    if (mined && mined.blockNumber != null) {
                                        return;
                                    }
                                }
                                // First time scanning. We start a little earlier for some
                                // wiggle room here to handle the eventually consistent nature
                                // of blockchain (e.g. the getTransactionCount was for a
                                // different block)
                                if (scannedBlock == null) {
                                    scannedBlock = lastBlockNumber - 3;
                                    if (scannedBlock < replaceable.startBlock) {
                                        scannedBlock = replaceable.startBlock;
                                    }
                                }
                                while (scannedBlock <= blockNumber) {
                                    if (done) {
                                        return;
                                    }
                                    const block = yield this.getBlockWithTransactions(scannedBlock);
                                    for (let ti = 0; ti < block.transactions.length; ti++) {
                                        const tx = block.transactions[ti];
                                        // Successfully mined!
                                        if (tx.hash === transactionHash) {
                                            return;
                                        }
                                        // Matches our transaction from and nonce; its a replacement
                                        if (tx.from === replaceable.from && tx.nonce === replaceable.nonce) {
                                            if (done) {
                                                return;
                                            }
                                            // Get the receipt of the replacement
                                            const receipt = yield this.waitForTransaction(tx.hash, confirmations);
                                            // Already resolved or rejected (prolly a timeout)
                                            if (alreadyDone()) {
                                                return;
                                            }
                                            // The reason we were replaced
                                            let reason = "replaced";
                                            if (tx.data === replaceable.data && tx.to === replaceable.to && tx.value.eq(replaceable.value)) {
                                                reason = "repriced";
                                            }
                                            else if (tx.data === "0x" && tx.from === tx.to && tx.value.isZero()) {
                                                reason = "cancelled";
                                            }
                                            // Explain why we were replaced
                                            reject(logger.makeError("transaction was replaced", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.TRANSACTION_REPLACED, {
                                                cancelled: (reason === "replaced" || reason === "cancelled"),
                                                reason,
                                                replacement: this._wrapTransaction(tx),
                                                hash: transactionHash,
                                                receipt
                                            }));
                                            return;
                                        }
                                    }
                                    scannedBlock++;
                                }
                            }
                            if (done) {
                                return;
                            }
                            this.once("block", replaceHandler);
                        }), (error) => {
                            if (done) {
                                return;
                            }
                            this.once("block", replaceHandler);
                        });
                    });
                    if (done) {
                        return;
                    }
                    this.once("block", replaceHandler);
                    cancelFuncs.push(() => {
                        this.removeListener("block", replaceHandler);
                    });
                }
                if (typeof (timeout) === "number" && timeout > 0) {
                    const timer = setTimeout(() => {
                        if (alreadyDone()) {
                            return;
                        }
                        reject(logger.makeError("timeout exceeded", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.TIMEOUT, { timeout: timeout }));
                    }, timeout);
                    if (timer.unref) {
                        timer.unref();
                    }
                    cancelFuncs.push(() => { clearTimeout(timer); });
                }
            });
        });
    }
    getBlockNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._getInternalBlockNumber(0);
        });
    }
    getGasPrice() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const result = yield this.perform("getGasPrice", {});
            try {
                return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(result);
            }
            catch (error) {
                return logger.throwError("bad result from backend", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.SERVER_ERROR, {
                    method: "getGasPrice",
                    result, error
                });
            }
        });
    }
    getBalance(addressOrName, blockTag) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const params = yield (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.resolveProperties)({
                address: this._getAddress(addressOrName),
                blockTag: this._getBlockTag(blockTag)
            });
            const result = yield this.perform("getBalance", params);
            try {
                return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(result);
            }
            catch (error) {
                return logger.throwError("bad result from backend", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.SERVER_ERROR, {
                    method: "getBalance",
                    params, result, error
                });
            }
        });
    }
    getTransactionCount(addressOrName, blockTag) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const params = yield (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.resolveProperties)({
                address: this._getAddress(addressOrName),
                blockTag: this._getBlockTag(blockTag)
            });
            const result = yield this.perform("getTransactionCount", params);
            try {
                return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(result).toNumber();
            }
            catch (error) {
                return logger.throwError("bad result from backend", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.SERVER_ERROR, {
                    method: "getTransactionCount",
                    params, result, error
                });
            }
        });
    }
    getCode(addressOrName, blockTag) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const params = yield (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.resolveProperties)({
                address: this._getAddress(addressOrName),
                blockTag: this._getBlockTag(blockTag)
            });
            const result = yield this.perform("getCode", params);
            try {
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexlify)(result);
            }
            catch (error) {
                return logger.throwError("bad result from backend", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.SERVER_ERROR, {
                    method: "getCode",
                    params, result, error
                });
            }
        });
    }
    getStorageAt(addressOrName, position, blockTag) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const params = yield (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.resolveProperties)({
                address: this._getAddress(addressOrName),
                blockTag: this._getBlockTag(blockTag),
                position: Promise.resolve(position).then((p) => (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexValue)(p))
            });
            const result = yield this.perform("getStorageAt", params);
            try {
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexlify)(result);
            }
            catch (error) {
                return logger.throwError("bad result from backend", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.SERVER_ERROR, {
                    method: "getStorageAt",
                    params, result, error
                });
            }
        });
    }
    // This should be called by any subclass wrapping a TransactionResponse
    _wrapTransaction(tx, hash, startBlock) {
        if (hash != null && (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexDataLength)(hash) !== 32) {
            throw new Error("invalid response - sendTransaction");
        }
        const result = tx;
        // Check the hash we expect is the same as the hash the server reported
        if (hash != null && tx.hash !== hash) {
            logger.throwError("Transaction hash mismatch from Provider.sendTransaction.", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.UNKNOWN_ERROR, { expectedHash: tx.hash, returnedHash: hash });
        }
        result.wait = (confirms, timeout) => __awaiter(this, void 0, void 0, function* () {
            if (confirms == null) {
                confirms = 1;
            }
            if (timeout == null) {
                timeout = 0;
            }
            // Get the details to detect replacement
            let replacement = undefined;
            if (confirms !== 0 && startBlock != null) {
                replacement = {
                    data: tx.data,
                    from: tx.from,
                    nonce: tx.nonce,
                    to: tx.to,
                    value: tx.value,
                    startBlock
                };
            }
            const receipt = yield this._waitForTransaction(tx.hash, confirms, timeout, replacement);
            if (receipt == null && confirms === 0) {
                return null;
            }
            // No longer pending, allow the polling loop to garbage collect this
            this._emitted["t:" + tx.hash] = receipt.blockNumber;
            if (receipt.status === 0) {
                logger.throwError("transaction failed", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.CALL_EXCEPTION, {
                    transactionHash: tx.hash,
                    transaction: tx,
                    receipt: receipt
                });
            }
            return receipt;
        });
        return result;
    }
    sendTransaction(signedTransaction) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const hexTx = yield Promise.resolve(signedTransaction).then(t => (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexlify)(t));
            const tx = this.formatter.transaction(signedTransaction);
            if (tx.confirmations == null) {
                tx.confirmations = 0;
            }
            const blockNumber = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
            try {
                const hash = yield this.perform("sendTransaction", { signedTransaction: hexTx });
                return this._wrapTransaction(tx, hash, blockNumber);
            }
            catch (error) {
                error.transaction = tx;
                error.transactionHash = tx.hash;
                throw error;
            }
        });
    }
    _getTransactionRequest(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const values = yield transaction;
            const tx = {};
            ["from", "to"].forEach((key) => {
                if (values[key] == null) {
                    return;
                }
                tx[key] = Promise.resolve(values[key]).then((v) => (v ? this._getAddress(v) : null));
            });
            ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach((key) => {
                if (values[key] == null) {
                    return;
                }
                tx[key] = Promise.resolve(values[key]).then((v) => (v ? _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(v) : null));
            });
            ["type"].forEach((key) => {
                if (values[key] == null) {
                    return;
                }
                tx[key] = Promise.resolve(values[key]).then((v) => ((v != null) ? v : null));
            });
            if (values.accessList) {
                tx.accessList = this.formatter.accessList(values.accessList);
            }
            ["data"].forEach((key) => {
                if (values[key] == null) {
                    return;
                }
                tx[key] = Promise.resolve(values[key]).then((v) => (v ? (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexlify)(v) : null));
            });
            return this.formatter.transactionRequest(yield (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.resolveProperties)(tx));
        });
    }
    _getFilter(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            filter = yield filter;
            const result = {};
            if (filter.address != null) {
                result.address = this._getAddress(filter.address);
            }
            ["blockHash", "topics"].forEach((key) => {
                if (filter[key] == null) {
                    return;
                }
                result[key] = filter[key];
            });
            ["fromBlock", "toBlock"].forEach((key) => {
                if (filter[key] == null) {
                    return;
                }
                result[key] = this._getBlockTag(filter[key]);
            });
            return this.formatter.filter(yield (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.resolveProperties)(result));
        });
    }
    call(transaction, blockTag) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const params = yield (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.resolveProperties)({
                transaction: this._getTransactionRequest(transaction),
                blockTag: this._getBlockTag(blockTag)
            });
            const result = yield this.perform("call", params);
            try {
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexlify)(result);
            }
            catch (error) {
                return logger.throwError("bad result from backend", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.SERVER_ERROR, {
                    method: "call",
                    params, result, error
                });
            }
        });
    }
    estimateGas(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const params = yield (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.resolveProperties)({
                transaction: this._getTransactionRequest(transaction)
            });
            const result = yield this.perform("estimateGas", params);
            try {
                return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(result);
            }
            catch (error) {
                return logger.throwError("bad result from backend", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.SERVER_ERROR, {
                    method: "estimateGas",
                    params, result, error
                });
            }
        });
    }
    _getAddress(addressOrName) {
        return __awaiter(this, void 0, void 0, function* () {
            addressOrName = yield addressOrName;
            if (typeof (addressOrName) !== "string") {
                logger.throwArgumentError("invalid address or ENS name", "name", addressOrName);
            }
            const address = yield this.resolveName(addressOrName);
            if (address == null) {
                logger.throwError("ENS name not configured", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: `resolveName(${JSON.stringify(addressOrName)})`
                });
            }
            return address;
        });
    }
    _getBlock(blockHashOrBlockTag, includeTransactions) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNetwork();
            blockHashOrBlockTag = yield blockHashOrBlockTag;
            // If blockTag is a number (not "latest", etc), this is the block number
            let blockNumber = -128;
            const params = {
                includeTransactions: !!includeTransactions
            };
            if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.isHexString)(blockHashOrBlockTag, 32)) {
                params.blockHash = blockHashOrBlockTag;
            }
            else {
                try {
                    params.blockTag = yield this._getBlockTag(blockHashOrBlockTag);
                    if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.isHexString)(params.blockTag)) {
                        blockNumber = parseInt(params.blockTag.substring(2), 16);
                    }
                }
                catch (error) {
                    logger.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", blockHashOrBlockTag);
                }
            }
            return (0,_ethersproject_web__WEBPACK_IMPORTED_MODULE_12__.poll)(() => __awaiter(this, void 0, void 0, function* () {
                const block = yield this.perform("getBlock", params);
                // Block was not found
                if (block == null) {
                    // For blockhashes, if we didn't say it existed, that blockhash may
                    // not exist. If we did see it though, perhaps from a log, we know
                    // it exists, and this node is just not caught up yet.
                    if (params.blockHash != null) {
                        if (this._emitted["b:" + params.blockHash] == null) {
                            return null;
                        }
                    }
                    // For block tags, if we are asking for a future block, we return null
                    if (params.blockTag != null) {
                        if (blockNumber > this._emitted.block) {
                            return null;
                        }
                    }
                    // Retry on the next block
                    return undefined;
                }
                // Add transactions
                if (includeTransactions) {
                    let blockNumber = null;
                    for (let i = 0; i < block.transactions.length; i++) {
                        const tx = block.transactions[i];
                        if (tx.blockNumber == null) {
                            tx.confirmations = 0;
                        }
                        else if (tx.confirmations == null) {
                            if (blockNumber == null) {
                                blockNumber = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                            }
                            // Add the confirmations using the fast block number (pessimistic)
                            let confirmations = (blockNumber - tx.blockNumber) + 1;
                            if (confirmations <= 0) {
                                confirmations = 1;
                            }
                            tx.confirmations = confirmations;
                        }
                    }
                    const blockWithTxs = this.formatter.blockWithTransactions(block);
                    blockWithTxs.transactions = blockWithTxs.transactions.map((tx) => this._wrapTransaction(tx));
                    return blockWithTxs;
                }
                return this.formatter.block(block);
            }), { oncePoll: this });
        });
    }
    getBlock(blockHashOrBlockTag) {
        return (this._getBlock(blockHashOrBlockTag, false));
    }
    getBlockWithTransactions(blockHashOrBlockTag) {
        return (this._getBlock(blockHashOrBlockTag, true));
    }
    getTransaction(transactionHash) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNetwork();
            transactionHash = yield transactionHash;
            const params = { transactionHash: this.formatter.hash(transactionHash, true) };
            return (0,_ethersproject_web__WEBPACK_IMPORTED_MODULE_12__.poll)(() => __awaiter(this, void 0, void 0, function* () {
                const result = yield this.perform("getTransaction", params);
                if (result == null) {
                    if (this._emitted["t:" + transactionHash] == null) {
                        return null;
                    }
                    return undefined;
                }
                const tx = this.formatter.transactionResponse(result);
                if (tx.blockNumber == null) {
                    tx.confirmations = 0;
                }
                else if (tx.confirmations == null) {
                    const blockNumber = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                    // Add the confirmations using the fast block number (pessimistic)
                    let confirmations = (blockNumber - tx.blockNumber) + 1;
                    if (confirmations <= 0) {
                        confirmations = 1;
                    }
                    tx.confirmations = confirmations;
                }
                return this._wrapTransaction(tx);
            }), { oncePoll: this });
        });
    }
    getTransactionReceipt(transactionHash) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNetwork();
            transactionHash = yield transactionHash;
            const params = { transactionHash: this.formatter.hash(transactionHash, true) };
            return (0,_ethersproject_web__WEBPACK_IMPORTED_MODULE_12__.poll)(() => __awaiter(this, void 0, void 0, function* () {
                const result = yield this.perform("getTransactionReceipt", params);
                if (result == null) {
                    if (this._emitted["t:" + transactionHash] == null) {
                        return null;
                    }
                    return undefined;
                }
                // "geth-etc" returns receipts before they are ready
                if (result.blockHash == null) {
                    return undefined;
                }
                const receipt = this.formatter.receipt(result);
                if (receipt.blockNumber == null) {
                    receipt.confirmations = 0;
                }
                else if (receipt.confirmations == null) {
                    const blockNumber = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                    // Add the confirmations using the fast block number (pessimistic)
                    let confirmations = (blockNumber - receipt.blockNumber) + 1;
                    if (confirmations <= 0) {
                        confirmations = 1;
                    }
                    receipt.confirmations = confirmations;
                }
                return receipt;
            }), { oncePoll: this });
        });
    }
    getLogs(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const params = yield (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_5__.resolveProperties)({ filter: this._getFilter(filter) });
            const logs = yield this.perform("getLogs", params);
            logs.forEach((log) => {
                if (log.removed == null) {
                    log.removed = false;
                }
            });
            return _formatter__WEBPACK_IMPORTED_MODULE_13__.Formatter.arrayOf(this.formatter.filterLog.bind(this.formatter))(logs);
        });
    }
    getEtherPrice() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getNetwork();
            return this.perform("getEtherPrice", {});
        });
    }
    _getBlockTag(blockTag) {
        return __awaiter(this, void 0, void 0, function* () {
            blockTag = yield blockTag;
            if (typeof (blockTag) === "number" && blockTag < 0) {
                if (blockTag % 1) {
                    logger.throwArgumentError("invalid BlockTag", "blockTag", blockTag);
                }
                let blockNumber = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                blockNumber += blockTag;
                if (blockNumber < 0) {
                    blockNumber = 0;
                }
                return this.formatter.blockTag(blockNumber);
            }
            return this.formatter.blockTag(blockTag);
        });
    }
    getResolver(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const address = yield this._getResolver(name);
                if (address == null) {
                    return null;
                }
                return new Resolver(this, address, name);
            }
            catch (error) {
                if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.CALL_EXCEPTION) {
                    return null;
                }
                throw error;
            }
        });
    }
    _getResolver(name) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get the resolver from the blockchain
            const network = yield this.getNetwork();
            // No ENS...
            if (!network.ensAddress) {
                logger.throwError("network does not support ENS", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.UNSUPPORTED_OPERATION, { operation: "ENS", network: network.name });
            }
            // keccak256("resolver(bytes32)")
            const transaction = {
                to: network.ensAddress,
                data: ("0x0178b8bf" + (0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_10__.namehash)(name).substring(2))
            };
            try {
                return this.formatter.callAddress(yield this.call(transaction));
            }
            catch (error) {
                if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.CALL_EXCEPTION) {
                    return null;
                }
                throw error;
            }
        });
    }
    resolveName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            name = yield name;
            // If it is already an address, nothing to resolve
            try {
                return Promise.resolve(this.formatter.address(name));
            }
            catch (error) {
                // If is is a hexstring, the address is bad (See #694)
                if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.isHexString)(name)) {
                    throw error;
                }
            }
            if (typeof (name) !== "string") {
                logger.throwArgumentError("invalid ENS name", "name", name);
            }
            // Get the addr from the resovler
            const resolver = yield this.getResolver(name);
            if (!resolver) {
                return null;
            }
            return yield resolver.getAddress();
        });
    }
    lookupAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            address = yield address;
            address = this.formatter.address(address);
            const reverseName = address.substring(2).toLowerCase() + ".addr.reverse";
            const resolverAddress = yield this._getResolver(reverseName);
            if (!resolverAddress) {
                return null;
            }
            // keccak("name(bytes32)")
            let bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(yield this.call({
                to: resolverAddress,
                data: ("0x691f3431" + (0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_10__.namehash)(reverseName).substring(2))
            }));
            // Strip off the dynamic string pointer (0x20)
            if (bytes.length < 32 || !_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(bytes.slice(0, 32)).eq(32)) {
                return null;
            }
            bytes = bytes.slice(32);
            // Not a length-prefixed string
            if (bytes.length < 32) {
                return null;
            }
            // Get the length of the string (from the length-prefix)
            const length = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(bytes.slice(0, 32)).toNumber();
            bytes = bytes.slice(32);
            // Length longer than available data
            if (length > bytes.length) {
                return null;
            }
            const name = (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_9__.toUtf8String)(bytes.slice(0, length));
            // Make sure the reverse record matches the foward record
            const addr = yield this.resolveName(name);
            if (addr != address) {
                return null;
            }
            return name;
        });
    }
    getAvatar(nameOrAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            let resolver = null;
            if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.isHexString)(nameOrAddress)) {
                // Address; reverse lookup
                const address = this.formatter.address(nameOrAddress);
                const reverseName = address.substring(2).toLowerCase() + ".addr.reverse";
                const resolverAddress = yield this._getResolver(reverseName);
                if (!resolverAddress) {
                    return null;
                }
                resolver = new Resolver(this, resolverAddress, "_", address);
            }
            else {
                // ENS name; forward lookup
                resolver = yield this.getResolver(nameOrAddress);
                if (!resolver) {
                    return null;
                }
            }
            const avatar = yield resolver.getAvatar();
            if (avatar == null) {
                return null;
            }
            return avatar.url;
        });
    }
    perform(method, params) {
        return logger.throwError(method + " not implemented", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.NOT_IMPLEMENTED, { operation: method });
    }
    _startEvent(event) {
        this.polling = (this._events.filter((e) => e.pollable()).length > 0);
    }
    _stopEvent(event) {
        this.polling = (this._events.filter((e) => e.pollable()).length > 0);
    }
    _addEventListener(eventName, listener, once) {
        const event = new Event(getEventTag(eventName), listener, once);
        this._events.push(event);
        this._startEvent(event);
        return this;
    }
    on(eventName, listener) {
        return this._addEventListener(eventName, listener, false);
    }
    once(eventName, listener) {
        return this._addEventListener(eventName, listener, true);
    }
    emit(eventName, ...args) {
        let result = false;
        let stopped = [];
        let eventTag = getEventTag(eventName);
        this._events = this._events.filter((event) => {
            if (event.tag !== eventTag) {
                return true;
            }
            setTimeout(() => {
                event.listener.apply(this, args);
            }, 0);
            result = true;
            if (event.once) {
                stopped.push(event);
                return false;
            }
            return true;
        });
        stopped.forEach((event) => { this._stopEvent(event); });
        return result;
    }
    listenerCount(eventName) {
        if (!eventName) {
            return this._events.length;
        }
        let eventTag = getEventTag(eventName);
        return this._events.filter((event) => {
            return (event.tag === eventTag);
        }).length;
    }
    listeners(eventName) {
        if (eventName == null) {
            return this._events.map((event) => event.listener);
        }
        let eventTag = getEventTag(eventName);
        return this._events
            .filter((event) => (event.tag === eventTag))
            .map((event) => event.listener);
    }
    off(eventName, listener) {
        if (listener == null) {
            return this.removeAllListeners(eventName);
        }
        const stopped = [];
        let found = false;
        let eventTag = getEventTag(eventName);
        this._events = this._events.filter((event) => {
            if (event.tag !== eventTag || event.listener != listener) {
                return true;
            }
            if (found) {
                return true;
            }
            found = true;
            stopped.push(event);
            return false;
        });
        stopped.forEach((event) => { this._stopEvent(event); });
        return this;
    }
    removeAllListeners(eventName) {
        let stopped = [];
        if (eventName == null) {
            stopped = this._events;
            this._events = [];
        }
        else {
            const eventTag = getEventTag(eventName);
            this._events = this._events.filter((event) => {
                if (event.tag !== eventTag) {
                    return true;
                }
                stopped.push(event);
                return false;
            });
        }
        stopped.forEach((event) => { this._stopEvent(event); });
        return this;
    }
}
//# sourceMappingURL=base-provider.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/providers/lib.esm/formatter.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ethersproject/providers/lib.esm/formatter.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Formatter": function() { return /* binding */ Formatter; },
/* harmony export */   "isCommunityResourcable": function() { return /* binding */ isCommunityResourcable; },
/* harmony export */   "isCommunityResource": function() { return /* binding */ isCommunityResource; },
/* harmony export */   "showThrottleMessage": function() { return /* binding */ showThrottleMessage; }
/* harmony export */ });
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/address */ "./node_modules/@ethersproject/address/lib.esm/index.js");
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/bignumber */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/constants */ "./node_modules/@ethersproject/constants/lib.esm/addresses.js");
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/properties */ "./node_modules/@ethersproject/properties/lib.esm/index.js");
/* harmony import */ var _ethersproject_transactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/transactions */ "./node_modules/@ethersproject/transactions/lib.esm/index.js");
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ "./node_modules/@ethersproject/providers/lib.esm/_version.js");









const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);
class Formatter {
    constructor() {
        logger.checkNew(new.target, Formatter);
        this.formats = this.getDefaultFormats();
    }
    getDefaultFormats() {
        const formats = ({});
        const address = this.address.bind(this);
        const bigNumber = this.bigNumber.bind(this);
        const blockTag = this.blockTag.bind(this);
        const data = this.data.bind(this);
        const hash = this.hash.bind(this);
        const hex = this.hex.bind(this);
        const number = this.number.bind(this);
        const type = this.type.bind(this);
        const strictData = (v) => { return this.data(v, true); };
        formats.transaction = {
            hash: hash,
            type: type,
            accessList: Formatter.allowNull(this.accessList.bind(this), null),
            blockHash: Formatter.allowNull(hash, null),
            blockNumber: Formatter.allowNull(number, null),
            transactionIndex: Formatter.allowNull(number, null),
            confirmations: Formatter.allowNull(number, null),
            from: address,
            // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas)
            // must be set
            gasPrice: Formatter.allowNull(bigNumber),
            maxPriorityFeePerGas: Formatter.allowNull(bigNumber),
            maxFeePerGas: Formatter.allowNull(bigNumber),
            gasLimit: bigNumber,
            to: Formatter.allowNull(address, null),
            value: bigNumber,
            nonce: number,
            data: data,
            r: Formatter.allowNull(this.uint256),
            s: Formatter.allowNull(this.uint256),
            v: Formatter.allowNull(number),
            creates: Formatter.allowNull(address, null),
            raw: Formatter.allowNull(data),
        };
        formats.transactionRequest = {
            from: Formatter.allowNull(address),
            nonce: Formatter.allowNull(number),
            gasLimit: Formatter.allowNull(bigNumber),
            gasPrice: Formatter.allowNull(bigNumber),
            maxPriorityFeePerGas: Formatter.allowNull(bigNumber),
            maxFeePerGas: Formatter.allowNull(bigNumber),
            to: Formatter.allowNull(address),
            value: Formatter.allowNull(bigNumber),
            data: Formatter.allowNull(strictData),
            type: Formatter.allowNull(number),
            accessList: Formatter.allowNull(this.accessList.bind(this), null),
        };
        formats.receiptLog = {
            transactionIndex: number,
            blockNumber: number,
            transactionHash: hash,
            address: address,
            topics: Formatter.arrayOf(hash),
            data: data,
            logIndex: number,
            blockHash: hash,
        };
        formats.receipt = {
            to: Formatter.allowNull(this.address, null),
            from: Formatter.allowNull(this.address, null),
            contractAddress: Formatter.allowNull(address, null),
            transactionIndex: number,
            // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
            root: Formatter.allowNull(hex),
            gasUsed: bigNumber,
            logsBloom: Formatter.allowNull(data),
            blockHash: hash,
            transactionHash: hash,
            logs: Formatter.arrayOf(this.receiptLog.bind(this)),
            blockNumber: number,
            confirmations: Formatter.allowNull(number, null),
            cumulativeGasUsed: bigNumber,
            effectiveGasPrice: Formatter.allowNull(bigNumber),
            status: Formatter.allowNull(number),
            type: type
        };
        formats.block = {
            hash: hash,
            parentHash: hash,
            number: number,
            timestamp: number,
            nonce: Formatter.allowNull(hex),
            difficulty: this.difficulty.bind(this),
            gasLimit: bigNumber,
            gasUsed: bigNumber,
            miner: address,
            extraData: data,
            transactions: Formatter.allowNull(Formatter.arrayOf(hash)),
            baseFeePerGas: Formatter.allowNull(bigNumber)
        };
        formats.blockWithTransactions = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.shallowCopy)(formats.block);
        formats.blockWithTransactions.transactions = Formatter.allowNull(Formatter.arrayOf(this.transactionResponse.bind(this)));
        formats.filter = {
            fromBlock: Formatter.allowNull(blockTag, undefined),
            toBlock: Formatter.allowNull(blockTag, undefined),
            blockHash: Formatter.allowNull(hash, undefined),
            address: Formatter.allowNull(address, undefined),
            topics: Formatter.allowNull(this.topics.bind(this), undefined),
        };
        formats.filterLog = {
            blockNumber: Formatter.allowNull(number),
            blockHash: Formatter.allowNull(hash),
            transactionIndex: number,
            removed: Formatter.allowNull(this.boolean.bind(this)),
            address: address,
            data: Formatter.allowFalsish(data, "0x"),
            topics: Formatter.arrayOf(hash),
            transactionHash: hash,
            logIndex: number,
        };
        return formats;
    }
    accessList(accessList) {
        return (0,_ethersproject_transactions__WEBPACK_IMPORTED_MODULE_3__.accessListify)(accessList || []);
    }
    // Requires a BigNumberish that is within the IEEE754 safe integer range; returns a number
    // Strict! Used on input.
    number(number) {
        if (number === "0x") {
            return 0;
        }
        return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(number).toNumber();
    }
    type(number) {
        if (number === "0x" || number == null) {
            return 0;
        }
        return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(number).toNumber();
    }
    // Strict! Used on input.
    bigNumber(value) {
        return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(value);
    }
    // Requires a boolean, "true" or  "false"; returns a boolean
    boolean(value) {
        if (typeof (value) === "boolean") {
            return value;
        }
        if (typeof (value) === "string") {
            value = value.toLowerCase();
            if (value === "true") {
                return true;
            }
            if (value === "false") {
                return false;
            }
        }
        throw new Error("invalid boolean - " + value);
    }
    hex(value, strict) {
        if (typeof (value) === "string") {
            if (!strict && value.substring(0, 2) !== "0x") {
                value = "0x" + value;
            }
            if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__.isHexString)(value)) {
                return value.toLowerCase();
            }
        }
        return logger.throwArgumentError("invalid hash", "value", value);
    }
    data(value, strict) {
        const result = this.hex(value, strict);
        if ((result.length % 2) !== 0) {
            throw new Error("invalid data; odd-length - " + value);
        }
        return result;
    }
    // Requires an address
    // Strict! Used on input.
    address(value) {
        return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_6__.getAddress)(value);
    }
    callAddress(value) {
        if (!(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__.isHexString)(value, 32)) {
            return null;
        }
        const address = (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_6__.getAddress)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__.hexDataSlice)(value, 12));
        return (address === _ethersproject_constants__WEBPACK_IMPORTED_MODULE_7__.AddressZero) ? null : address;
    }
    contractAddress(value) {
        return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_6__.getContractAddress)(value);
    }
    // Strict! Used on input.
    blockTag(blockTag) {
        if (blockTag == null) {
            return "latest";
        }
        if (blockTag === "earliest") {
            return "0x0";
        }
        if (blockTag === "latest" || blockTag === "pending") {
            return blockTag;
        }
        if (typeof (blockTag) === "number" || (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__.isHexString)(blockTag)) {
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__.hexValue)(blockTag);
        }
        throw new Error("invalid blockTag");
    }
    // Requires a hash, optionally requires 0x prefix; returns prefixed lowercase hash.
    hash(value, strict) {
        const result = this.hex(value, strict);
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__.hexDataLength)(result) !== 32) {
            return logger.throwArgumentError("invalid hash", "value", value);
        }
        return result;
    }
    // Returns the difficulty as a number, or if too large (i.e. PoA network) null
    difficulty(value) {
        if (value == null) {
            return null;
        }
        const v = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(value);
        try {
            return v.toNumber();
        }
        catch (error) { }
        return null;
    }
    uint256(value) {
        if (!(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__.isHexString)(value)) {
            throw new Error("invalid uint256");
        }
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__.hexZeroPad)(value, 32);
    }
    _block(value, format) {
        if (value.author != null && value.miner == null) {
            value.miner = value.author;
        }
        // The difficulty may need to come from _difficulty in recursed blocks
        const difficulty = (value._difficulty != null) ? value._difficulty : value.difficulty;
        const result = Formatter.check(format, value);
        result._difficulty = ((difficulty == null) ? null : _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(difficulty));
        return result;
    }
    block(value) {
        return this._block(value, this.formats.block);
    }
    blockWithTransactions(value) {
        return this._block(value, this.formats.blockWithTransactions);
    }
    // Strict! Used on input.
    transactionRequest(value) {
        return Formatter.check(this.formats.transactionRequest, value);
    }
    transactionResponse(transaction) {
        // Rename gas to gasLimit
        if (transaction.gas != null && transaction.gasLimit == null) {
            transaction.gasLimit = transaction.gas;
        }
        // Some clients (TestRPC) do strange things like return 0x0 for the
        // 0 address; correct this to be a real address
        if (transaction.to && _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(transaction.to).isZero()) {
            transaction.to = "0x0000000000000000000000000000000000000000";
        }
        // Rename input to data
        if (transaction.input != null && transaction.data == null) {
            transaction.data = transaction.input;
        }
        // If to and creates are empty, populate the creates from the transaction
        if (transaction.to == null && transaction.creates == null) {
            transaction.creates = this.contractAddress(transaction);
        }
        if ((transaction.type === 1 || transaction.type === 2) && transaction.accessList == null) {
            transaction.accessList = [];
        }
        const result = Formatter.check(this.formats.transaction, transaction);
        if (transaction.chainId != null) {
            let chainId = transaction.chainId;
            if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__.isHexString)(chainId)) {
                chainId = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(chainId).toNumber();
            }
            result.chainId = chainId;
        }
        else {
            let chainId = transaction.networkId;
            // geth-etc returns chainId
            if (chainId == null && result.v == null) {
                chainId = transaction.chainId;
            }
            if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_5__.isHexString)(chainId)) {
                chainId = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(chainId).toNumber();
            }
            if (typeof (chainId) !== "number" && result.v != null) {
                chainId = (result.v - 35) / 2;
                if (chainId < 0) {
                    chainId = 0;
                }
                chainId = parseInt(chainId);
            }
            if (typeof (chainId) !== "number") {
                chainId = 0;
            }
            result.chainId = chainId;
        }
        // 0x0000... should actually be null
        if (result.blockHash && result.blockHash.replace(/0/g, "") === "x") {
            result.blockHash = null;
        }
        return result;
    }
    transaction(value) {
        return (0,_ethersproject_transactions__WEBPACK_IMPORTED_MODULE_3__.parse)(value);
    }
    receiptLog(value) {
        return Formatter.check(this.formats.receiptLog, value);
    }
    receipt(value) {
        const result = Formatter.check(this.formats.receipt, value);
        // RSK incorrectly implemented EIP-658, so we munge things a bit here for it
        if (result.root != null) {
            if (result.root.length <= 4) {
                // Could be 0x00, 0x0, 0x01 or 0x1
                const value = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(result.root).toNumber();
                if (value === 0 || value === 1) {
                    // Make sure if both are specified, they match
                    if (result.status != null && (result.status !== value)) {
                        logger.throwArgumentError("alt-root-status/status mismatch", "value", { root: result.root, status: result.status });
                    }
                    result.status = value;
                    delete result.root;
                }
                else {
                    logger.throwArgumentError("invalid alt-root-status", "value.root", result.root);
                }
            }
            else if (result.root.length !== 66) {
                // Must be a valid bytes32
                logger.throwArgumentError("invalid root hash", "value.root", result.root);
            }
        }
        if (result.status != null) {
            result.byzantium = true;
        }
        return result;
    }
    topics(value) {
        if (Array.isArray(value)) {
            return value.map((v) => this.topics(v));
        }
        else if (value != null) {
            return this.hash(value, true);
        }
        return null;
    }
    filter(value) {
        return Formatter.check(this.formats.filter, value);
    }
    filterLog(value) {
        return Formatter.check(this.formats.filterLog, value);
    }
    static check(format, object) {
        const result = {};
        for (const key in format) {
            try {
                const value = format[key](object[key]);
                if (value !== undefined) {
                    result[key] = value;
                }
            }
            catch (error) {
                error.checkKey = key;
                error.checkValue = object[key];
                throw error;
            }
        }
        return result;
    }
    // if value is null-ish, nullValue is returned
    static allowNull(format, nullValue) {
        return (function (value) {
            if (value == null) {
                return nullValue;
            }
            return format(value);
        });
    }
    // If value is false-ish, replaceValue is returned
    static allowFalsish(format, replaceValue) {
        return (function (value) {
            if (!value) {
                return replaceValue;
            }
            return format(value);
        });
    }
    // Requires an Array satisfying check
    static arrayOf(format) {
        return (function (array) {
            if (!Array.isArray(array)) {
                throw new Error("not an array");
            }
            const result = [];
            array.forEach(function (value) {
                result.push(format(value));
            });
            return result;
        });
    }
}
function isCommunityResourcable(value) {
    return (value && typeof (value.isCommunityResource) === "function");
}
function isCommunityResource(value) {
    return (isCommunityResourcable(value) && value.isCommunityResource());
}
// Show the throttle message only once
let throttleMessage = false;
function showThrottleMessage() {
    if (throttleMessage) {
        return;
    }
    throttleMessage = true;
    console.log("========= NOTICE =========");
    console.log("Request-Rate Exceeded  (this message will not be repeated)");
    console.log("");
    console.log("The default API keys for each service are provided as a highly-throttled,");
    console.log("community resource for low-traffic projects and early prototyping.");
    console.log("");
    console.log("While your application will continue to function, we highly recommended");
    console.log("signing up for your own API keys to improve performance, increase your");
    console.log("request rate/limit and enable other perks, such as metrics and advanced APIs.");
    console.log("");
    console.log("For more details: https:/\/docs.ethers.io/api-keys/");
    console.log("==========================");
}
//# sourceMappingURL=formatter.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/providers/lib.esm/json-rpc-provider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ethersproject/providers/lib.esm/json-rpc-provider.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonRpcSigner": function() { return /* binding */ JsonRpcSigner; },
/* harmony export */   "JsonRpcProvider": function() { return /* binding */ JsonRpcProvider; }
/* harmony export */ });
/* harmony import */ var _ethersproject_abstract_signer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/abstract-signer */ "./node_modules/@ethersproject/abstract-signer/lib.esm/index.js");
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ethersproject/bignumber */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _ethersproject_hash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/hash */ "./node_modules/@ethersproject/hash/lib.esm/typed-data.js");
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/properties */ "./node_modules/@ethersproject/properties/lib.esm/index.js");
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/strings */ "./node_modules/@ethersproject/strings/lib.esm/utf8.js");
/* harmony import */ var _ethersproject_transactions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ethersproject/transactions */ "./node_modules/@ethersproject/transactions/lib.esm/index.js");
/* harmony import */ var _ethersproject_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/web */ "./node_modules/@ethersproject/web/lib.esm/index.js");
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ "./node_modules/@ethersproject/providers/lib.esm/_version.js");
/* harmony import */ var _base_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base-provider */ "./node_modules/@ethersproject/providers/lib.esm/base-provider.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);

const errorGas = ["call", "estimateGas"];
function checkError(method, error, params) {
    // Undo the "convenience" some nodes are attempting to prevent backwards
    // incompatibility; maybe for v6 consider forwarding reverts as errors
    if (method === "call" && error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.SERVER_ERROR) {
        const e = error.error;
        if (e && e.message.match("reverted") && (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.isHexString)(e.data)) {
            return e.data;
        }
        logger.throwError("missing revert data in call exception", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.CALL_EXCEPTION, {
            error, data: "0x"
        });
    }
    let message = error.message;
    if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.SERVER_ERROR && error.error && typeof (error.error.message) === "string") {
        message = error.error.message;
    }
    else if (typeof (error.body) === "string") {
        message = error.body;
    }
    else if (typeof (error.responseText) === "string") {
        message = error.responseText;
    }
    message = (message || "").toLowerCase();
    const transaction = params.transaction || params.signedTransaction;
    // "insufficient funds for gas * price + value + cost(data)"
    if (message.match(/insufficient funds|base fee exceeds gas limit/)) {
        logger.throwError("insufficient funds for intrinsic transaction cost", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INSUFFICIENT_FUNDS, {
            error, method, transaction
        });
    }
    // "nonce too low"
    if (message.match(/nonce too low/)) {
        logger.throwError("nonce has already been used", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.NONCE_EXPIRED, {
            error, method, transaction
        });
    }
    // "replacement transaction underpriced"
    if (message.match(/replacement transaction underpriced/)) {
        logger.throwError("replacement fee too low", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.REPLACEMENT_UNDERPRICED, {
            error, method, transaction
        });
    }
    // "replacement transaction underpriced"
    if (message.match(/only replay-protected/)) {
        logger.throwError("legacy pre-eip-155 transactions not supported", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
            error, method, transaction
        });
    }
    if (errorGas.indexOf(method) >= 0 && message.match(/gas required exceeds allowance|always failing transaction|execution reverted/)) {
        logger.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
            error, method, transaction
        });
    }
    throw error;
}
function timer(timeout) {
    return new Promise(function (resolve) {
        setTimeout(resolve, timeout);
    });
}
function getResult(payload) {
    if (payload.error) {
        // @TODO: not any
        const error = new Error(payload.error.message);
        error.code = payload.error.code;
        error.data = payload.error.data;
        throw error;
    }
    return payload.result;
}
function getLowerCase(value) {
    if (value) {
        return value.toLowerCase();
    }
    return value;
}
const _constructorGuard = {};
class JsonRpcSigner extends _ethersproject_abstract_signer__WEBPACK_IMPORTED_MODULE_3__.Signer {
    constructor(constructorGuard, provider, addressOrIndex) {
        logger.checkNew(new.target, JsonRpcSigner);
        super();
        if (constructorGuard !== _constructorGuard) {
            throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.defineReadOnly)(this, "provider", provider);
        if (addressOrIndex == null) {
            addressOrIndex = 0;
        }
        if (typeof (addressOrIndex) === "string") {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.defineReadOnly)(this, "_address", this.provider.formatter.address(addressOrIndex));
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.defineReadOnly)(this, "_index", null);
        }
        else if (typeof (addressOrIndex) === "number") {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.defineReadOnly)(this, "_index", addressOrIndex);
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.defineReadOnly)(this, "_address", null);
        }
        else {
            logger.throwArgumentError("invalid address or index", "addressOrIndex", addressOrIndex);
        }
    }
    connect(provider) {
        return logger.throwError("cannot alter JSON-RPC Signer connection", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "connect"
        });
    }
    connectUnchecked() {
        return new UncheckedJsonRpcSigner(_constructorGuard, this.provider, this._address || this._index);
    }
    getAddress() {
        if (this._address) {
            return Promise.resolve(this._address);
        }
        return this.provider.send("eth_accounts", []).then((accounts) => {
            if (accounts.length <= this._index) {
                logger.throwError("unknown account #" + this._index, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "getAddress"
                });
            }
            return this.provider.formatter.address(accounts[this._index]);
        });
    }
    sendUncheckedTransaction(transaction) {
        transaction = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.shallowCopy)(transaction);
        const fromAddress = this.getAddress().then((address) => {
            if (address) {
                address = address.toLowerCase();
            }
            return address;
        });
        // The JSON-RPC for eth_sendTransaction uses 90000 gas; if the user
        // wishes to use this, it is easy to specify explicitly, otherwise
        // we look it up for them.
        if (transaction.gasLimit == null) {
            const estimate = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.shallowCopy)(transaction);
            estimate.from = fromAddress;
            transaction.gasLimit = this.provider.estimateGas(estimate);
        }
        if (transaction.to != null) {
            transaction.to = Promise.resolve(transaction.to).then((to) => __awaiter(this, void 0, void 0, function* () {
                if (to == null) {
                    return null;
                }
                const address = yield this.provider.resolveName(to);
                if (address == null) {
                    logger.throwArgumentError("provided ENS name resolves to null", "tx.to", to);
                }
                return address;
            }));
        }
        return (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.resolveProperties)({
            tx: (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.resolveProperties)(transaction),
            sender: fromAddress
        }).then(({ tx, sender }) => {
            if (tx.from != null) {
                if (tx.from.toLowerCase() !== sender) {
                    logger.throwArgumentError("from address mismatch", "transaction", transaction);
                }
            }
            else {
                tx.from = sender;
            }
            const hexTx = this.provider.constructor.hexlifyTransaction(tx, { from: true });
            return this.provider.send("eth_sendTransaction", [hexTx]).then((hash) => {
                return hash;
            }, (error) => {
                return checkError("sendTransaction", error, hexTx);
            });
        });
    }
    signTransaction(transaction) {
        return logger.throwError("signing transactions is unsupported", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "signTransaction"
        });
    }
    sendTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            // This cannot be mined any earlier than any recent block
            const blockNumber = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval);
            // Send the transaction
            const hash = yield this.sendUncheckedTransaction(transaction);
            try {
                // Unfortunately, JSON-RPC only provides and opaque transaction hash
                // for a response, and we need the actual transaction, so we poll
                // for it; it should show up very quickly
                return yield (0,_ethersproject_web__WEBPACK_IMPORTED_MODULE_5__.poll)(() => __awaiter(this, void 0, void 0, function* () {
                    const tx = yield this.provider.getTransaction(hash);
                    if (tx === null) {
                        return undefined;
                    }
                    return this.provider._wrapTransaction(tx, hash, blockNumber);
                }), { oncePoll: this.provider });
            }
            catch (error) {
                error.transactionHash = hash;
                throw error;
            }
        });
    }
    signMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = ((typeof (message) === "string") ? (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_6__.toUtf8Bytes)(message) : message);
            const address = yield this.getAddress();
            return yield this.provider.send("personal_sign", [(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.hexlify)(data), address.toLowerCase()]);
        });
    }
    _legacySignMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = ((typeof (message) === "string") ? (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_6__.toUtf8Bytes)(message) : message);
            const address = yield this.getAddress();
            // https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign
            return yield this.provider.send("eth_sign", [address.toLowerCase(), (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.hexlify)(data)]);
        });
    }
    _signTypedData(domain, types, value) {
        return __awaiter(this, void 0, void 0, function* () {
            // Populate any ENS names (in-place)
            const populated = yield _ethersproject_hash__WEBPACK_IMPORTED_MODULE_7__.TypedDataEncoder.resolveNames(domain, types, value, (name) => {
                return this.provider.resolveName(name);
            });
            const address = yield this.getAddress();
            return yield this.provider.send("eth_signTypedData_v4", [
                address.toLowerCase(),
                JSON.stringify(_ethersproject_hash__WEBPACK_IMPORTED_MODULE_7__.TypedDataEncoder.getPayload(populated.domain, types, populated.value))
            ]);
        });
    }
    unlock(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = this.provider;
            const address = yield this.getAddress();
            return provider.send("personal_unlockAccount", [address.toLowerCase(), password, null]);
        });
    }
}
class UncheckedJsonRpcSigner extends JsonRpcSigner {
    sendTransaction(transaction) {
        return this.sendUncheckedTransaction(transaction).then((hash) => {
            return {
                hash: hash,
                nonce: null,
                gasLimit: null,
                gasPrice: null,
                data: null,
                value: null,
                chainId: null,
                confirmations: 0,
                from: null,
                wait: (confirmations) => { return this.provider.waitForTransaction(hash, confirmations); }
            };
        });
    }
}
const allowedTransactionKeys = {
    chainId: true, data: true, gasLimit: true, gasPrice: true, nonce: true, to: true, value: true,
    type: true, accessList: true,
    maxFeePerGas: true, maxPriorityFeePerGas: true
};
class JsonRpcProvider extends _base_provider__WEBPACK_IMPORTED_MODULE_8__.BaseProvider {
    constructor(url, network) {
        logger.checkNew(new.target, JsonRpcProvider);
        let networkOrReady = network;
        // The network is unknown, query the JSON-RPC for it
        if (networkOrReady == null) {
            networkOrReady = new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.detectNetwork().then((network) => {
                        resolve(network);
                    }, (error) => {
                        reject(error);
                    });
                }, 0);
            });
        }
        super(networkOrReady);
        // Default URL
        if (!url) {
            url = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.getStatic)(this.constructor, "defaultUrl")();
        }
        if (typeof (url) === "string") {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.defineReadOnly)(this, "connection", Object.freeze({
                url: url
            }));
        }
        else {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.defineReadOnly)(this, "connection", Object.freeze((0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.shallowCopy)(url)));
        }
        this._nextId = 42;
    }
    get _cache() {
        if (this._eventLoopCache == null) {
            this._eventLoopCache = {};
        }
        return this._eventLoopCache;
    }
    static defaultUrl() {
        return "http:/\/localhost:8545";
    }
    detectNetwork() {
        if (!this._cache["detectNetwork"]) {
            this._cache["detectNetwork"] = this._uncachedDetectNetwork();
            // Clear this cache at the beginning of the next event loop
            setTimeout(() => {
                this._cache["detectNetwork"] = null;
            }, 0);
        }
        return this._cache["detectNetwork"];
    }
    _uncachedDetectNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            yield timer(0);
            let chainId = null;
            try {
                chainId = yield this.send("eth_chainId", []);
            }
            catch (error) {
                try {
                    chainId = yield this.send("net_version", []);
                }
                catch (error) { }
            }
            if (chainId != null) {
                const getNetwork = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.getStatic)(this.constructor, "getNetwork");
                try {
                    return getNetwork(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_9__.BigNumber.from(chainId).toNumber());
                }
                catch (error) {
                    return logger.throwError("could not detect network", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.NETWORK_ERROR, {
                        chainId: chainId,
                        event: "invalidNetwork",
                        serverError: error
                    });
                }
            }
            return logger.throwError("could not detect network", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.NETWORK_ERROR, {
                event: "noNetwork"
            });
        });
    }
    getSigner(addressOrIndex) {
        return new JsonRpcSigner(_constructorGuard, this, addressOrIndex);
    }
    getUncheckedSigner(addressOrIndex) {
        return this.getSigner(addressOrIndex).connectUnchecked();
    }
    listAccounts() {
        return this.send("eth_accounts", []).then((accounts) => {
            return accounts.map((a) => this.formatter.address(a));
        });
    }
    send(method, params) {
        const request = {
            method: method,
            params: params,
            id: (this._nextId++),
            jsonrpc: "2.0"
        };
        this.emit("debug", {
            action: "request",
            request: (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.deepCopy)(request),
            provider: this
        });
        // We can expand this in the future to any call, but for now these
        // are the biggest wins and do not require any serializing parameters.
        const cache = (["eth_chainId", "eth_blockNumber"].indexOf(method) >= 0);
        if (cache && this._cache[method]) {
            return this._cache[method];
        }
        const result = (0,_ethersproject_web__WEBPACK_IMPORTED_MODULE_5__.fetchJson)(this.connection, JSON.stringify(request), getResult).then((result) => {
            this.emit("debug", {
                action: "response",
                request: request,
                response: result,
                provider: this
            });
            return result;
        }, (error) => {
            this.emit("debug", {
                action: "response",
                error: error,
                request: request,
                provider: this
            });
            throw error;
        });
        // Cache the fetch, but clear it on the next event loop
        if (cache) {
            this._cache[method] = result;
            setTimeout(() => {
                this._cache[method] = null;
            }, 0);
        }
        return result;
    }
    prepareRequest(method, params) {
        switch (method) {
            case "getBlockNumber":
                return ["eth_blockNumber", []];
            case "getGasPrice":
                return ["eth_gasPrice", []];
            case "getBalance":
                return ["eth_getBalance", [getLowerCase(params.address), params.blockTag]];
            case "getTransactionCount":
                return ["eth_getTransactionCount", [getLowerCase(params.address), params.blockTag]];
            case "getCode":
                return ["eth_getCode", [getLowerCase(params.address), params.blockTag]];
            case "getStorageAt":
                return ["eth_getStorageAt", [getLowerCase(params.address), params.position, params.blockTag]];
            case "sendTransaction":
                return ["eth_sendRawTransaction", [params.signedTransaction]];
            case "getBlock":
                if (params.blockTag) {
                    return ["eth_getBlockByNumber", [params.blockTag, !!params.includeTransactions]];
                }
                else if (params.blockHash) {
                    return ["eth_getBlockByHash", [params.blockHash, !!params.includeTransactions]];
                }
                return null;
            case "getTransaction":
                return ["eth_getTransactionByHash", [params.transactionHash]];
            case "getTransactionReceipt":
                return ["eth_getTransactionReceipt", [params.transactionHash]];
            case "call": {
                const hexlifyTransaction = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.getStatic)(this.constructor, "hexlifyTransaction");
                return ["eth_call", [hexlifyTransaction(params.transaction, { from: true }), params.blockTag]];
            }
            case "estimateGas": {
                const hexlifyTransaction = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.getStatic)(this.constructor, "hexlifyTransaction");
                return ["eth_estimateGas", [hexlifyTransaction(params.transaction, { from: true })]];
            }
            case "getLogs":
                if (params.filter && params.filter.address != null) {
                    params.filter.address = getLowerCase(params.filter.address);
                }
                return ["eth_getLogs", [params.filter]];
            default:
                break;
        }
        return null;
    }
    perform(method, params) {
        return __awaiter(this, void 0, void 0, function* () {
            // Legacy networks do not like the type field being passed along (which
            // is fair), so we delete type if it is 0 and a non-EIP-1559 network
            if (method === "call" || method === "estimateGas") {
                const tx = params.transaction;
                if (tx && tx.type != null && _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_9__.BigNumber.from(tx.type).isZero()) {
                    // If there are no EIP-1559 properties, it might be non-EIP-a559
                    if (tx.maxFeePerGas == null && tx.maxPriorityFeePerGas == null) {
                        const feeData = yield this.getFeeData();
                        if (feeData.maxFeePerGas == null && feeData.maxPriorityFeePerGas == null) {
                            // Network doesn't know about EIP-1559 (and hence type)
                            params = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.shallowCopy)(params);
                            params.transaction = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.shallowCopy)(tx);
                            delete params.transaction.type;
                        }
                    }
                }
            }
            const args = this.prepareRequest(method, params);
            if (args == null) {
                logger.throwError(method + " not implemented", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.NOT_IMPLEMENTED, { operation: method });
            }
            try {
                return yield this.send(args[0], args[1]);
            }
            catch (error) {
                return checkError(method, error, params);
            }
        });
    }
    _startEvent(event) {
        if (event.tag === "pending") {
            this._startPending();
        }
        super._startEvent(event);
    }
    _startPending() {
        if (this._pendingFilter != null) {
            return;
        }
        const self = this;
        const pendingFilter = this.send("eth_newPendingTransactionFilter", []);
        this._pendingFilter = pendingFilter;
        pendingFilter.then(function (filterId) {
            function poll() {
                self.send("eth_getFilterChanges", [filterId]).then(function (hashes) {
                    if (self._pendingFilter != pendingFilter) {
                        return null;
                    }
                    let seq = Promise.resolve();
                    hashes.forEach(function (hash) {
                        // @TODO: This should be garbage collected at some point... How? When?
                        self._emitted["t:" + hash.toLowerCase()] = "pending";
                        seq = seq.then(function () {
                            return self.getTransaction(hash).then(function (tx) {
                                self.emit("pending", tx);
                                return null;
                            });
                        });
                    });
                    return seq.then(function () {
                        return timer(1000);
                    });
                }).then(function () {
                    if (self._pendingFilter != pendingFilter) {
                        self.send("eth_uninstallFilter", [filterId]);
                        return;
                    }
                    setTimeout(function () { poll(); }, 0);
                    return null;
                }).catch((error) => { });
            }
            poll();
            return filterId;
        }).catch((error) => { });
    }
    _stopEvent(event) {
        if (event.tag === "pending" && this.listenerCount("pending") === 0) {
            this._pendingFilter = null;
        }
        super._stopEvent(event);
    }
    // Convert an ethers.js transaction into a JSON-RPC transaction
    //  - gasLimit => gas
    //  - All values hexlified
    //  - All numeric values zero-striped
    //  - All addresses are lowercased
    // NOTE: This allows a TransactionRequest, but all values should be resolved
    //       before this is called
    // @TODO: This will likely be removed in future versions and prepareRequest
    //        will be the preferred method for this.
    static hexlifyTransaction(transaction, allowExtra) {
        // Check only allowed properties are given
        const allowed = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.shallowCopy)(allowedTransactionKeys);
        if (allowExtra) {
            for (const key in allowExtra) {
                if (allowExtra[key]) {
                    allowed[key] = true;
                }
            }
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_4__.checkProperties)(transaction, allowed);
        const result = {};
        // Some nodes (INFURA ropsten; INFURA mainnet is fine) do not like leading zeros.
        ["gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(function (key) {
            if (transaction[key] == null) {
                return;
            }
            const value = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.hexValue)(transaction[key]);
            if (key === "gasLimit") {
                key = "gas";
            }
            result[key] = value;
        });
        ["from", "to", "data"].forEach(function (key) {
            if (transaction[key] == null) {
                return;
            }
            result[key] = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.hexlify)(transaction[key]);
        });
        if (transaction.accessList) {
            result["accessList"] = (0,_ethersproject_transactions__WEBPACK_IMPORTED_MODULE_10__.accessListify)(transaction.accessList);
        }
        return result;
    }
}
//# sourceMappingURL=json-rpc-provider.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/providers/lib.esm/web3-provider.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ethersproject/providers/lib.esm/web3-provider.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Web3Provider": function() { return /* binding */ Web3Provider; }
/* harmony export */ });
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/properties */ "./node_modules/@ethersproject/properties/lib.esm/index.js");
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ "./node_modules/@ethersproject/providers/lib.esm/_version.js");
/* harmony import */ var _json_rpc_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json-rpc-provider */ "./node_modules/@ethersproject/providers/lib.esm/json-rpc-provider.js");




const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);

let _nextId = 1;
function buildWeb3LegacyFetcher(provider, sendFunc) {
    const fetcher = "Web3LegacyFetcher";
    return function (method, params) {
        const request = {
            method: method,
            params: params,
            id: (_nextId++),
            jsonrpc: "2.0"
        };
        return new Promise((resolve, reject) => {
            this.emit("debug", {
                action: "request",
                fetcher,
                request: (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(request),
                provider: this
            });
            sendFunc(request, (error, response) => {
                if (error) {
                    this.emit("debug", {
                        action: "response",
                        fetcher,
                        error,
                        request,
                        provider: this
                    });
                    return reject(error);
                }
                this.emit("debug", {
                    action: "response",
                    fetcher,
                    request,
                    response,
                    provider: this
                });
                if (response.error) {
                    const error = new Error(response.error.message);
                    error.code = response.error.code;
                    error.data = response.error.data;
                    return reject(error);
                }
                resolve(response.result);
            });
        });
    };
}
function buildEip1193Fetcher(provider) {
    return function (method, params) {
        if (params == null) {
            params = [];
        }
        const request = { method, params };
        this.emit("debug", {
            action: "request",
            fetcher: "Eip1193Fetcher",
            request: (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.deepCopy)(request),
            provider: this
        });
        return provider.request(request).then((response) => {
            this.emit("debug", {
                action: "response",
                fetcher: "Eip1193Fetcher",
                request,
                response,
                provider: this
            });
            return response;
        }, (error) => {
            this.emit("debug", {
                action: "response",
                fetcher: "Eip1193Fetcher",
                request,
                error,
                provider: this
            });
            throw error;
        });
    };
}
class Web3Provider extends _json_rpc_provider__WEBPACK_IMPORTED_MODULE_3__.JsonRpcProvider {
    constructor(provider, network) {
        logger.checkNew(new.target, Web3Provider);
        if (provider == null) {
            logger.throwArgumentError("missing provider", "provider", provider);
        }
        let path = null;
        let jsonRpcFetchFunc = null;
        let subprovider = null;
        if (typeof (provider) === "function") {
            path = "unknown:";
            jsonRpcFetchFunc = provider;
        }
        else {
            path = provider.host || provider.path || "";
            if (!path && provider.isMetaMask) {
                path = "metamask";
            }
            subprovider = provider;
            if (provider.request) {
                if (path === "") {
                    path = "eip-1193:";
                }
                jsonRpcFetchFunc = buildEip1193Fetcher(provider);
            }
            else if (provider.sendAsync) {
                jsonRpcFetchFunc = buildWeb3LegacyFetcher(provider, provider.sendAsync.bind(provider));
            }
            else if (provider.send) {
                jsonRpcFetchFunc = buildWeb3LegacyFetcher(provider, provider.send.bind(provider));
            }
            else {
                logger.throwArgumentError("unsupported provider", "provider", provider);
            }
            if (!path) {
                path = "unknown:";
            }
        }
        super(path, network);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "jsonRpcFetchFunc", jsonRpcFetchFunc);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "provider", subprovider);
    }
    send(method, params) {
        return this.jsonRpcFetchFunc(method, params);
    }
}
//# sourceMappingURL=web3-provider.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/sha2/lib.esm/_version.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ethersproject/sha2/lib.esm/_version.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": function() { return /* binding */ version; }
/* harmony export */ });
const version = "sha2/5.5.0";
//# sourceMappingURL=_version.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/sha2/lib.esm/sha2.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ethersproject/sha2/lib.esm/sha2.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ripemd160": function() { return /* binding */ ripemd160; },
/* harmony export */   "sha256": function() { return /* binding */ sha256; },
/* harmony export */   "sha512": function() { return /* binding */ sha512; },
/* harmony export */   "computeHmac": function() { return /* binding */ computeHmac; }
/* harmony export */ });
/* harmony import */ var hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hash.js */ "./node_modules/hash.js/lib/hash.js");
/* harmony import */ var hash_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hash_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./node_modules/@ethersproject/sha2/lib.esm/types.js");
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version */ "./node_modules/@ethersproject/sha2/lib.esm/_version.js");


//const _ripemd160 = _hash.ripemd160;




const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger(_version__WEBPACK_IMPORTED_MODULE_2__.version);
function ripemd160(data) {
    return "0x" + (hash_js__WEBPACK_IMPORTED_MODULE_0___default().ripemd160().update((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(data)).digest("hex"));
}
function sha256(data) {
    return "0x" + (hash_js__WEBPACK_IMPORTED_MODULE_0___default().sha256().update((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(data)).digest("hex"));
}
function sha512(data) {
    return "0x" + (hash_js__WEBPACK_IMPORTED_MODULE_0___default().sha512().update((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(data)).digest("hex"));
}
function computeHmac(algorithm, key, data) {
    if (!_types__WEBPACK_IMPORTED_MODULE_4__.SupportedAlgorithm[algorithm]) {
        logger.throwError("unsupported algorithm " + algorithm, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "hmac",
            algorithm: algorithm
        });
    }
    return "0x" + hash_js__WEBPACK_IMPORTED_MODULE_0___default().hmac((hash_js__WEBPACK_IMPORTED_MODULE_0___default())[algorithm], (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(key)).update((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(data)).digest("hex");
}
//# sourceMappingURL=sha2.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/sha2/lib.esm/types.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ethersproject/sha2/lib.esm/types.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportedAlgorithm": function() { return /* binding */ SupportedAlgorithm; }
/* harmony export */ });
var SupportedAlgorithm;
(function (SupportedAlgorithm) {
    SupportedAlgorithm["sha256"] = "sha256";
    SupportedAlgorithm["sha512"] = "sha512";
})(SupportedAlgorithm || (SupportedAlgorithm = {}));
;
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/strings/lib.esm/idna.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ethersproject/strings/lib.esm/idna.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_nameprepTableA1": function() { return /* binding */ _nameprepTableA1; },
/* harmony export */   "_nameprepTableB2": function() { return /* binding */ _nameprepTableB2; },
/* harmony export */   "_nameprepTableC": function() { return /* binding */ _nameprepTableC; },
/* harmony export */   "nameprep": function() { return /* binding */ nameprep; }
/* harmony export */ });
/* harmony import */ var _utf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utf8 */ "./node_modules/@ethersproject/strings/lib.esm/utf8.js");


function bytes2(data) {
    if ((data.length % 4) !== 0) {
        throw new Error("bad data");
    }
    let result = [];
    for (let i = 0; i < data.length; i += 4) {
        result.push(parseInt(data.substring(i, i + 4), 16));
    }
    return result;
}
function createTable(data, func) {
    if (!func) {
        func = function (value) { return [parseInt(value, 16)]; };
    }
    let lo = 0;
    let result = {};
    data.split(",").forEach((pair) => {
        let comps = pair.split(":");
        lo += parseInt(comps[0], 16);
        result[lo] = func(comps[1]);
    });
    return result;
}
function createRangeTable(data) {
    let hi = 0;
    return data.split(",").map((v) => {
        let comps = v.split("-");
        if (comps.length === 1) {
            comps[1] = "0";
        }
        else if (comps[1] === "") {
            comps[1] = "1";
        }
        let lo = hi + parseInt(comps[0], 16);
        hi = parseInt(comps[1], 16);
        return { l: lo, h: hi };
    });
}
function matchMap(value, ranges) {
    let lo = 0;
    for (let i = 0; i < ranges.length; i++) {
        let range = ranges[i];
        lo += range.l;
        if (value >= lo && value <= lo + range.h && ((value - lo) % (range.d || 1)) === 0) {
            if (range.e && range.e.indexOf(value - lo) !== -1) {
                continue;
            }
            return range;
        }
    }
    return null;
}
const Table_A_1_ranges = createRangeTable("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d");
// @TODO: Make this relative...
const Table_B_1_flags = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((v) => parseInt(v, 16));
const Table_B_2_ranges = [
    { h: 25, s: 32, l: 65 },
    { h: 30, s: 32, e: [23], l: 127 },
    { h: 54, s: 1, e: [48], l: 64, d: 2 },
    { h: 14, s: 1, l: 57, d: 2 },
    { h: 44, s: 1, l: 17, d: 2 },
    { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
    { h: 16, s: 1, l: 68, d: 2 },
    { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
    { h: 26, s: 32, e: [17], l: 435 },
    { h: 22, s: 1, l: 71, d: 2 },
    { h: 15, s: 80, l: 40 },
    { h: 31, s: 32, l: 16 },
    { h: 32, s: 1, l: 80, d: 2 },
    { h: 52, s: 1, l: 42, d: 2 },
    { h: 12, s: 1, l: 55, d: 2 },
    { h: 40, s: 1, e: [38], l: 15, d: 2 },
    { h: 14, s: 1, l: 48, d: 2 },
    { h: 37, s: 48, l: 49 },
    { h: 148, s: 1, l: 6351, d: 2 },
    { h: 88, s: 1, l: 160, d: 2 },
    { h: 15, s: 16, l: 704 },
    { h: 25, s: 26, l: 854 },
    { h: 25, s: 32, l: 55915 },
    { h: 37, s: 40, l: 1247 },
    { h: 25, s: -119711, l: 53248 },
    { h: 25, s: -119763, l: 52 },
    { h: 25, s: -119815, l: 52 },
    { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
    { h: 25, s: -119919, l: 52 },
    { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
    { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
    { h: 25, s: -120075, l: 52 },
    { h: 25, s: -120127, l: 52 },
    { h: 25, s: -120179, l: 52 },
    { h: 25, s: -120231, l: 52 },
    { h: 25, s: -120283, l: 52 },
    { h: 25, s: -120335, l: 52 },
    { h: 24, s: -119543, e: [17], l: 56 },
    { h: 24, s: -119601, e: [17], l: 58 },
    { h: 24, s: -119659, e: [17], l: 58 },
    { h: 24, s: -119717, e: [17], l: 58 },
    { h: 24, s: -119775, e: [17], l: 58 }
];
const Table_B_2_lut_abs = createTable("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3");
const Table_B_2_lut_rel = createTable("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7");
const Table_B_2_complex = createTable("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", bytes2);
const Table_C_ranges = createRangeTable("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
function flatten(values) {
    return values.reduce((accum, value) => {
        value.forEach((value) => { accum.push(value); });
        return accum;
    }, []);
}
function _nameprepTableA1(codepoint) {
    return !!matchMap(codepoint, Table_A_1_ranges);
}
function _nameprepTableB2(codepoint) {
    let range = matchMap(codepoint, Table_B_2_ranges);
    if (range) {
        return [codepoint + range.s];
    }
    let codes = Table_B_2_lut_abs[codepoint];
    if (codes) {
        return codes;
    }
    let shift = Table_B_2_lut_rel[codepoint];
    if (shift) {
        return [codepoint + shift[0]];
    }
    let complex = Table_B_2_complex[codepoint];
    if (complex) {
        return complex;
    }
    return null;
}
function _nameprepTableC(codepoint) {
    return !!matchMap(codepoint, Table_C_ranges);
}
function nameprep(value) {
    // This allows platforms with incomplete normalize to bypass
    // it for very basic names which the built-in toLowerCase
    // will certainly handle correctly
    if (value.match(/^[a-z0-9-]*$/i) && value.length <= 59) {
        return value.toLowerCase();
    }
    // Get the code points (keeping the current normalization)
    let codes = (0,_utf8__WEBPACK_IMPORTED_MODULE_0__.toUtf8CodePoints)(value);
    codes = flatten(codes.map((code) => {
        // Substitute Table B.1 (Maps to Nothing)
        if (Table_B_1_flags.indexOf(code) >= 0) {
            return [];
        }
        if (code >= 0xfe00 && code <= 0xfe0f) {
            return [];
        }
        // Substitute Table B.2 (Case Folding)
        let codesTableB2 = _nameprepTableB2(code);
        if (codesTableB2) {
            return codesTableB2;
        }
        // No Substitution
        return [code];
    }));
    // Normalize using form KC
    codes = (0,_utf8__WEBPACK_IMPORTED_MODULE_0__.toUtf8CodePoints)((0,_utf8__WEBPACK_IMPORTED_MODULE_0__._toUtf8String)(codes), _utf8__WEBPACK_IMPORTED_MODULE_0__.UnicodeNormalizationForm.NFKC);
    // Prohibit Tables C.1.2, C.2.2, C.3, C.4, C.5, C.6, C.7, C.8, C.9
    codes.forEach((code) => {
        if (_nameprepTableC(code)) {
            throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
        }
    });
    // Prohibit Unassigned Code Points (Table A.1)
    codes.forEach((code) => {
        if (_nameprepTableA1(code)) {
            throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
        }
    });
    // IDNA extras
    let name = (0,_utf8__WEBPACK_IMPORTED_MODULE_0__._toUtf8String)(codes);
    // IDNA: 4.2.3.1
    if (name.substring(0, 1) === "-" || name.substring(2, 4) === "--" || name.substring(name.length - 1) === "-") {
        throw new Error("invalid hyphen");
    }
    // IDNA: 4.2.4
    if (name.length > 63) {
        throw new Error("too long");
    }
    return name;
}
//# sourceMappingURL=idna.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/web/lib.esm/_version.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ethersproject/web/lib.esm/_version.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": function() { return /* binding */ version; }
/* harmony export */ });
const version = "web/5.5.1";
//# sourceMappingURL=_version.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/web/lib.esm/geturl.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ethersproject/web/lib.esm/geturl.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUrl": function() { return /* binding */ getUrl; }
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function getUrl(href, options) {
    return __awaiter(this, void 0, void 0, function* () {
        if (options == null) {
            options = {};
        }
        const request = {
            method: (options.method || "GET"),
            headers: (options.headers || {}),
            body: (options.body || undefined),
        };
        if (options.skipFetchSetup !== true) {
            request.mode = "cors"; // no-cors, cors, *same-origin
            request.cache = "no-cache"; // *default, no-cache, reload, force-cache, only-if-cached
            request.credentials = "same-origin"; // include, *same-origin, omit
            request.redirect = "follow"; // manual, *follow, error
            request.referrer = "client"; // no-referrer, *client
        }
        ;
        const response = yield fetch(href, request);
        const body = yield response.arrayBuffer();
        const headers = {};
        if (response.headers.forEach) {
            response.headers.forEach((value, key) => {
                headers[key.toLowerCase()] = value;
            });
        }
        else {
            ((response.headers).keys)().forEach((key) => {
                headers[key.toLowerCase()] = response.headers.get(key);
            });
        }
        return {
            headers: headers,
            statusCode: response.status,
            statusMessage: response.statusText,
            body: (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(new Uint8Array(body)),
        };
    });
}
//# sourceMappingURL=geturl.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/web/lib.esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ethersproject/web/lib.esm/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_fetchData": function() { return /* binding */ _fetchData; },
/* harmony export */   "fetchJson": function() { return /* binding */ fetchJson; },
/* harmony export */   "poll": function() { return /* binding */ poll; }
/* harmony export */ });
/* harmony import */ var _ethersproject_base64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/base64 */ "./node_modules/@ethersproject/base64/lib.esm/base64.js");
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/properties */ "./node_modules/@ethersproject/properties/lib.esm/index.js");
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/strings */ "./node_modules/@ethersproject/strings/lib.esm/utf8.js");
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ "./node_modules/@ethersproject/web/lib.esm/_version.js");
/* harmony import */ var _geturl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geturl */ "./node_modules/@ethersproject/web/lib.esm/geturl.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);

function staller(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}
function bodyify(value, type) {
    if (value == null) {
        return null;
    }
    if (typeof (value) === "string") {
        return value;
    }
    if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.isBytesLike)(value)) {
        if (type && (type.split("/")[0] === "text" || type.split(";")[0].trim() === "application/json")) {
            try {
                return (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_3__.toUtf8String)(value);
            }
            catch (error) { }
            ;
        }
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.hexlify)(value);
    }
    return value;
}
// This API is still a work in progress; the future changes will likely be:
// - ConnectionInfo => FetchDataRequest<T = any>
// - FetchDataRequest.body? = string | Uint8Array | { contentType: string, data: string | Uint8Array }
//   - If string => text/plain, Uint8Array => application/octet-stream (if content-type unspecified)
// - FetchDataRequest.processFunc = (body: Uint8Array, response: FetchDataResponse) => T
// For this reason, it should be considered internal until the API is finalized
function _fetchData(connection, body, processFunc) {
    // How many times to retry in the event of a throttle
    const attemptLimit = (typeof (connection) === "object" && connection.throttleLimit != null) ? connection.throttleLimit : 12;
    logger.assertArgument((attemptLimit > 0 && (attemptLimit % 1) === 0), "invalid connection throttle limit", "connection.throttleLimit", attemptLimit);
    const throttleCallback = ((typeof (connection) === "object") ? connection.throttleCallback : null);
    const throttleSlotInterval = ((typeof (connection) === "object" && typeof (connection.throttleSlotInterval) === "number") ? connection.throttleSlotInterval : 100);
    logger.assertArgument((throttleSlotInterval > 0 && (throttleSlotInterval % 1) === 0), "invalid connection throttle slot interval", "connection.throttleSlotInterval", throttleSlotInterval);
    const headers = {};
    let url = null;
    // @TODO: Allow ConnectionInfo to override some of these values
    const options = {
        method: "GET",
    };
    let allow304 = false;
    let timeout = 2 * 60 * 1000;
    if (typeof (connection) === "string") {
        url = connection;
    }
    else if (typeof (connection) === "object") {
        if (connection == null || connection.url == null) {
            logger.throwArgumentError("missing URL", "connection.url", connection);
        }
        url = connection.url;
        if (typeof (connection.timeout) === "number" && connection.timeout > 0) {
            timeout = connection.timeout;
        }
        if (connection.headers) {
            for (const key in connection.headers) {
                headers[key.toLowerCase()] = { key: key, value: String(connection.headers[key]) };
                if (["if-none-match", "if-modified-since"].indexOf(key.toLowerCase()) >= 0) {
                    allow304 = true;
                }
            }
        }
        options.allowGzip = !!connection.allowGzip;
        if (connection.user != null && connection.password != null) {
            if (url.substring(0, 6) !== "https:" && connection.allowInsecureAuthentication !== true) {
                logger.throwError("basic authentication requires a secure https url", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, { argument: "url", url: url, user: connection.user, password: "[REDACTED]" });
            }
            const authorization = connection.user + ":" + connection.password;
            headers["authorization"] = {
                key: "Authorization",
                value: "Basic " + (0,_ethersproject_base64__WEBPACK_IMPORTED_MODULE_4__.encode)((0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_3__.toUtf8Bytes)(authorization))
            };
        }
    }
    const reData = new RegExp("^data:([a-z0-9-]+/[a-z0-9-]+);base64,(.*)$", "i");
    const dataMatch = ((url) ? url.match(reData) : null);
    if (dataMatch) {
        try {
            const response = {
                statusCode: 200,
                statusMessage: "OK",
                headers: { "content-type": dataMatch[1] },
                body: (0,_ethersproject_base64__WEBPACK_IMPORTED_MODULE_4__.decode)(dataMatch[2])
            };
            let result = response.body;
            if (processFunc) {
                result = processFunc(response.body, response);
            }
            return Promise.resolve(result);
        }
        catch (error) {
            logger.throwError("processing response error", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.SERVER_ERROR, {
                body: bodyify(dataMatch[1], dataMatch[2]),
                error: error,
                requestBody: null,
                requestMethod: "GET",
                url: url
            });
        }
    }
    if (body) {
        options.method = "POST";
        options.body = body;
        if (headers["content-type"] == null) {
            headers["content-type"] = { key: "Content-Type", value: "application/octet-stream" };
        }
        if (headers["content-length"] == null) {
            headers["content-length"] = { key: "Content-Length", value: String(body.length) };
        }
    }
    const flatHeaders = {};
    Object.keys(headers).forEach((key) => {
        const header = headers[key];
        flatHeaders[header.key] = header.value;
    });
    options.headers = flatHeaders;
    const runningTimeout = (function () {
        let timer = null;
        const promise = new Promise(function (resolve, reject) {
            if (timeout) {
                timer = setTimeout(() => {
                    if (timer == null) {
                        return;
                    }
                    timer = null;
                    reject(logger.makeError("timeout", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.TIMEOUT, {
                        requestBody: bodyify(options.body, flatHeaders["content-type"]),
                        requestMethod: options.method,
                        timeout: timeout,
                        url: url
                    }));
                }, timeout);
            }
        });
        const cancel = function () {
            if (timer == null) {
                return;
            }
            clearTimeout(timer);
            timer = null;
        };
        return { promise, cancel };
    })();
    const runningFetch = (function () {
        return __awaiter(this, void 0, void 0, function* () {
            for (let attempt = 0; attempt < attemptLimit; attempt++) {
                let response = null;
                try {
                    response = yield (0,_geturl__WEBPACK_IMPORTED_MODULE_5__.getUrl)(url, options);
                    if (attempt < attemptLimit) {
                        if (response.statusCode === 301 || response.statusCode === 302) {
                            // Redirection; for now we only support absolute locataions
                            const location = response.headers.location || "";
                            if (options.method === "GET" && location.match(/^https:/)) {
                                url = response.headers.location;
                                continue;
                            }
                        }
                        else if (response.statusCode === 429) {
                            // Exponential back-off throttling
                            let tryAgain = true;
                            if (throttleCallback) {
                                tryAgain = yield throttleCallback(attempt, url);
                            }
                            if (tryAgain) {
                                let stall = 0;
                                const retryAfter = response.headers["retry-after"];
                                if (typeof (retryAfter) === "string" && retryAfter.match(/^[1-9][0-9]*$/)) {
                                    stall = parseInt(retryAfter) * 1000;
                                }
                                else {
                                    stall = throttleSlotInterval * parseInt(String(Math.random() * Math.pow(2, attempt)));
                                }
                                //console.log("Stalling 429");
                                yield staller(stall);
                                continue;
                            }
                        }
                    }
                }
                catch (error) {
                    response = error.response;
                    if (response == null) {
                        runningTimeout.cancel();
                        logger.throwError("missing response", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.SERVER_ERROR, {
                            requestBody: bodyify(options.body, flatHeaders["content-type"]),
                            requestMethod: options.method,
                            serverError: error,
                            url: url
                        });
                    }
                }
                let body = response.body;
                if (allow304 && response.statusCode === 304) {
                    body = null;
                }
                else if (response.statusCode < 200 || response.statusCode >= 300) {
                    runningTimeout.cancel();
                    logger.throwError("bad response", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.SERVER_ERROR, {
                        status: response.statusCode,
                        headers: response.headers,
                        body: bodyify(body, ((response.headers) ? response.headers["content-type"] : null)),
                        requestBody: bodyify(options.body, flatHeaders["content-type"]),
                        requestMethod: options.method,
                        url: url
                    });
                }
                if (processFunc) {
                    try {
                        const result = yield processFunc(body, response);
                        runningTimeout.cancel();
                        return result;
                    }
                    catch (error) {
                        // Allow the processFunc to trigger a throttle
                        if (error.throttleRetry && attempt < attemptLimit) {
                            let tryAgain = true;
                            if (throttleCallback) {
                                tryAgain = yield throttleCallback(attempt, url);
                            }
                            if (tryAgain) {
                                const timeout = throttleSlotInterval * parseInt(String(Math.random() * Math.pow(2, attempt)));
                                //console.log("Stalling callback");
                                yield staller(timeout);
                                continue;
                            }
                        }
                        runningTimeout.cancel();
                        logger.throwError("processing response error", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.SERVER_ERROR, {
                            body: bodyify(body, ((response.headers) ? response.headers["content-type"] : null)),
                            error: error,
                            requestBody: bodyify(options.body, flatHeaders["content-type"]),
                            requestMethod: options.method,
                            url: url
                        });
                    }
                }
                runningTimeout.cancel();
                // If we had a processFunc, it either returned a T or threw above.
                // The "body" is now a Uint8Array.
                return body;
            }
            return logger.throwError("failed response", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.SERVER_ERROR, {
                requestBody: bodyify(options.body, flatHeaders["content-type"]),
                requestMethod: options.method,
                url: url
            });
        });
    })();
    return Promise.race([runningTimeout.promise, runningFetch]);
}
function fetchJson(connection, json, processFunc) {
    let processJsonFunc = (value, response) => {
        let result = null;
        if (value != null) {
            try {
                result = JSON.parse((0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_3__.toUtf8String)(value));
            }
            catch (error) {
                logger.throwError("invalid JSON", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.SERVER_ERROR, {
                    body: value,
                    error: error
                });
            }
        }
        if (processFunc) {
            result = processFunc(result, response);
        }
        return result;
    };
    // If we have json to send, we must
    // - add content-type of application/json (unless already overridden)
    // - convert the json to bytes
    let body = null;
    if (json != null) {
        body = (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_3__.toUtf8Bytes)(json);
        // Create a connection with the content-type set for JSON
        const updated = (typeof (connection) === "string") ? ({ url: connection }) : (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_6__.shallowCopy)(connection);
        if (updated.headers) {
            const hasContentType = (Object.keys(updated.headers).filter((k) => (k.toLowerCase() === "content-type")).length) !== 0;
            if (!hasContentType) {
                updated.headers = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_6__.shallowCopy)(updated.headers);
                updated.headers["content-type"] = "application/json";
            }
        }
        else {
            updated.headers = { "content-type": "application/json" };
        }
        connection = updated;
    }
    return _fetchData(connection, body, processJsonFunc);
}
function poll(func, options) {
    if (!options) {
        options = {};
    }
    options = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_6__.shallowCopy)(options);
    if (options.floor == null) {
        options.floor = 0;
    }
    if (options.ceiling == null) {
        options.ceiling = 10000;
    }
    if (options.interval == null) {
        options.interval = 250;
    }
    return new Promise(function (resolve, reject) {
        let timer = null;
        let done = false;
        // Returns true if cancel was successful. Unsuccessful cancel means we're already done.
        const cancel = () => {
            if (done) {
                return false;
            }
            done = true;
            if (timer) {
                clearTimeout(timer);
            }
            return true;
        };
        if (options.timeout) {
            timer = setTimeout(() => {
                if (cancel()) {
                    reject(new Error("timeout"));
                }
            }, options.timeout);
        }
        const retryLimit = options.retryLimit;
        let attempt = 0;
        function check() {
            return func().then(function (result) {
                // If we have a result, or are allowed null then we're done
                if (result !== undefined) {
                    if (cancel()) {
                        resolve(result);
                    }
                }
                else if (options.oncePoll) {
                    options.oncePoll.once("poll", check);
                }
                else if (options.onceBlock) {
                    options.onceBlock.once("block", check);
                    // Otherwise, exponential back-off (up to 10s) our next request
                }
                else if (!done) {
                    attempt++;
                    if (attempt > retryLimit) {
                        if (cancel()) {
                            reject(new Error("retry limit reached"));
                        }
                        return;
                    }
                    let timeout = options.interval * parseInt(String(Math.random() * Math.pow(2, attempt)));
                    if (timeout < options.floor) {
                        timeout = options.floor;
                    }
                    if (timeout > options.ceiling) {
                        timeout = options.ceiling;
                    }
                    setTimeout(check, timeout);
                }
                return null;
            }, function (error) {
                if (cancel()) {
                    reject(error);
                }
            });
        }
        check();
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./services/useContract.js":
/*!*********************************!*\
  !*** ./services/useContract.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useContract; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/providers/lib.esm/web3-provider.js");
/* harmony import */ var _ERC721Singleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ERC721Singleton */ "./services/ERC721Singleton.js");






function useContract(contractName) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    contract: null,
    signerAddress: null
  }),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      contractInstance = _useState2[0],
      setContractInstance = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var provider, signer, contract;
        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.Web3Provider(window.ethereum);
                signer = provider.getSigner();
                contract = {
                  contract: null,
                  signerAddress: null
                }; // Sets a single instance of a specific contract per application
                // Useful for switching across multiple contracts in a single application

                _context.t0 = contractName;
                _context.next = _context.t0 === 'ERC721' ? 7 : 9;
                break;

              case 7:
                contract.contract = (0,_ERC721Singleton__WEBPACK_IMPORTED_MODULE_4__["default"])(signer);
                return _context.abrupt("break", 11);

              case 9:
                console.log('Invalid contract');
                return _context.abrupt("break", 11);

              case 11:
                _context.next = 13;
                return signer.getAddress();

              case 13:
                contract.signerAddress = _context.sent;
                setContractInstance(contract);
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t1 = _context["catch"](0);
                console.error(_context.t1);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 17]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
    window.ethereum.on('accountsChanged', fetchData);
    window.ethereum.on('chainChanged', fetchData);
    return function () {
      window.ethereum.removeListener('accountsChanged', fetchData);
      window.ethereum.removeListener('chainChanged', fetchData);
    };
  }, []);
  return contractInstance;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8e6799a9c098fb747d7d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmNiZWY3MmVlYjExYWJiOTU4M2I2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWE7QUFDbUM7QUFDekM7QUFDUDtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0EsV0FBVyw4REFBUTtBQUNuQjtBQUNPO0FBQ1AsV0FBVyw4REFBUTtBQUNuQjtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dEO0FBQ1c7QUFDcEQ7QUFDUDtBQUNBLFFBQVEseUVBQWM7QUFDdEIsUUFBUSx5RUFBYztBQUN0QixRQUFRLHlFQUFjLHlCQUF5QjtBQUMvQyxRQUFRLHlFQUFjO0FBQ3RCO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4REFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMENBQTBDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QVAsQ0FBZ0JPLEVBQWhCLENBQW1CLGlCQUFuQixFQUFzQ1osU0FBdEM7QUFDQUksSUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCTyxFQUFoQixDQUFtQixjQUFuQixFQUFtQ1osU0FBbkM7QUFFQSxXQUFPLFlBQU07QUFDWkksTUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCUSxjQUFoQixDQUErQixpQkFBL0IsRUFBa0RiLFNBQWxEO0FBQ0FJLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQlEsY0FBaEIsQ0FBK0IsY0FBL0IsRUFBK0NiLFNBQS9DO0FBQ0EsS0FIRDtBQUlBLEdBbkNRLEVBbUNOLEVBbkNNLENBQVQ7QUFxQ0EsU0FBT0YsZ0JBQVA7QUFDQTs7Ozs7Ozs7VUNqREQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3QvYmFzZTY0L2xpYi5lc20vYmFzZTY0LmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2Jhc2V4L2xpYi5lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3QvY29uc3RhbnRzL2xpYi5lc20vYWRkcmVzc2VzLmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2NvbnN0YW50cy9saWIuZXNtL2hhc2hlcy5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC9oYXNoL2xpYi5lc20vX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3QvaGFzaC9saWIuZXNtL25hbWVoYXNoLmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2hhc2gvbGliLmVzbS90eXBlZC1kYXRhLmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L25ldHdvcmtzL2xpYi5lc20vX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3QvbmV0d29ya3MvbGliLmVzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC9wcm92aWRlcnMvbGliLmVzbS9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC9wcm92aWRlcnMvbGliLmVzbS9iYXNlLXByb3ZpZGVyLmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L3Byb3ZpZGVycy9saWIuZXNtL2Zvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC9wcm92aWRlcnMvbGliLmVzbS9qc29uLXJwYy1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC9wcm92aWRlcnMvbGliLmVzbS93ZWIzLXByb3ZpZGVyLmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L3NoYTIvbGliLmVzbS9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC9zaGEyL2xpYi5lc20vc2hhMi5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC9zaGEyL2xpYi5lc20vdHlwZXMuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3Qvc3RyaW5ncy9saWIuZXNtL2lkbmEuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3Qvd2ViL2xpYi5lc20vX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3Qvd2ViL2xpYi5lc20vZ2V0dXJsLmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L3dlYi9saWIuZXNtL2luZGV4LmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vc2VydmljZXMvdXNlQ29udHJhY3QuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHsgYXJyYXlpZnkgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYnl0ZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGUodGV4dERhdGEpIHtcbiAgICB0ZXh0RGF0YSA9IGF0b2IodGV4dERhdGEpO1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRhdGEucHVzaCh0ZXh0RGF0YS5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5aWZ5KGRhdGEpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZShkYXRhKSB7XG4gICAgZGF0YSA9IGFycmF5aWZ5KGRhdGEpO1xuICAgIGxldCB0ZXh0RGF0YSA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRleHREYXRhICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGF0YVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBidG9hKHRleHREYXRhKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2U2NC5qcy5tYXAiLCIvKipcbiAqIHZhciBiYXNleCA9IHJlcXVpcmUoXCJiYXNlLXhcIik7XG4gKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBoZWF2aWx5IGJhc2VkIG9uIGJhc2UteC4gVGhlIG1haW4gcmVhc29uIHRvXG4gKiBkZXZpYXRlIHdhcyB0byBwcmV2ZW50IHRoZSBkZXBlbmRlbmN5IG9mIEJ1ZmZlci5cbiAqXG4gKiBDb250cmlidXRvcnM6XG4gKlxuICogYmFzZS14IGVuY29kaW5nXG4gKiBGb3JrZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vY3J5cHRvY29pbmpzL2JzNThcbiAqIE9yaWdpbmFsbHkgd3JpdHRlbiBieSBNaWtlIEhlYXJuIGZvciBCaXRjb2luSlxuICogQ29weXJpZ2h0IChjKSAyMDExIEdvb2dsZSBJbmNcbiAqIFBvcnRlZCB0byBKYXZhU2NyaXB0IGJ5IFN0ZWZhbiBUaG9tYXNcbiAqIE1lcmdlZCBCdWZmZXIgcmVmYWN0b3JpbmdzIGZyb20gYmFzZTU4LW5hdGl2ZSBieSBTdGVwaGVuIFBhaXJcbiAqIENvcHlyaWdodCAoYykgMjAxMyBCaXRQYXkgSW5jXG4gKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IGJhc2UteCBjb250cmlidXRvcnMgKGMpIDIwMTZcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKi9cbmltcG9ydCB7IGFycmF5aWZ5IH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2J5dGVzXCI7XG5pbXBvcnQgeyBkZWZpbmVSZWFkT25seSB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm9wZXJ0aWVzXCI7XG5leHBvcnQgY2xhc3MgQmFzZVgge1xuICAgIGNvbnN0cnVjdG9yKGFscGhhYmV0KSB7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiYWxwaGFiZXRcIiwgYWxwaGFiZXQpO1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcImJhc2VcIiwgYWxwaGFiZXQubGVuZ3RoKTtcbiAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJfYWxwaGFiZXRNYXBcIiwge30pO1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcIl9sZWFkZXJcIiwgYWxwaGFiZXQuY2hhckF0KDApKTtcbiAgICAgICAgLy8gcHJlLWNvbXB1dGUgbG9va3VwIHRhYmxlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxwaGFiZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2FscGhhYmV0TWFwW2FscGhhYmV0LmNoYXJBdChpKV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVuY29kZSh2YWx1ZSkge1xuICAgICAgICBsZXQgc291cmNlID0gYXJyYXlpZnkodmFsdWUpO1xuICAgICAgICBpZiAoc291cmNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRpZ2l0cyA9IFswXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBjYXJyeSA9IHNvdXJjZVtpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGlnaXRzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICAgICAgY2FycnkgKz0gZGlnaXRzW2pdIDw8IDg7XG4gICAgICAgICAgICAgICAgZGlnaXRzW2pdID0gY2FycnkgJSB0aGlzLmJhc2U7XG4gICAgICAgICAgICAgICAgY2FycnkgPSAoY2FycnkgLyB0aGlzLmJhc2UpIHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChjYXJyeSA+IDApIHtcbiAgICAgICAgICAgICAgICBkaWdpdHMucHVzaChjYXJyeSAlIHRoaXMuYmFzZSk7XG4gICAgICAgICAgICAgICAgY2FycnkgPSAoY2FycnkgLyB0aGlzLmJhc2UpIHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc3RyaW5nID0gXCJcIjtcbiAgICAgICAgLy8gZGVhbCB3aXRoIGxlYWRpbmcgemVyb3NcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IHNvdXJjZVtrXSA9PT0gMCAmJiBrIDwgc291cmNlLmxlbmd0aCAtIDE7ICsraykge1xuICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuX2xlYWRlcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb252ZXJ0IGRpZ2l0cyB0byBhIHN0cmluZ1xuICAgICAgICBmb3IgKGxldCBxID0gZGlnaXRzLmxlbmd0aCAtIDE7IHEgPj0gMDsgLS1xKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5hbHBoYWJldFtkaWdpdHNbcV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuICAgIGRlY29kZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mICh2YWx1ZSkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBTdHJpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJ5dGVzID0gW107XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShieXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgYnl0ZXMucHVzaCgwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJ5dGUgPSB0aGlzLl9hbHBoYWJldE1hcFt2YWx1ZVtpXV07XG4gICAgICAgICAgICBpZiAoYnl0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm9uLWJhc2VcIiArIHRoaXMuYmFzZSArIFwiIGNoYXJhY3RlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjYXJyeSA9IGJ5dGU7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJ5dGVzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICAgICAgY2FycnkgKz0gYnl0ZXNbal0gKiB0aGlzLmJhc2U7XG4gICAgICAgICAgICAgICAgYnl0ZXNbal0gPSBjYXJyeSAmIDB4ZmY7XG4gICAgICAgICAgICAgICAgY2FycnkgPj49IDg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoY2FycnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgYnl0ZXMucHVzaChjYXJyeSAmIDB4ZmYpO1xuICAgICAgICAgICAgICAgIGNhcnJ5ID4+PSA4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGRlYWwgd2l0aCBsZWFkaW5nIHplcm9zXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyB2YWx1ZVtrXSA9PT0gdGhpcy5fbGVhZGVyICYmIGsgPCB2YWx1ZS5sZW5ndGggLSAxOyArK2spIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5aWZ5KG5ldyBVaW50OEFycmF5KGJ5dGVzLnJldmVyc2UoKSkpO1xuICAgIH1cbn1cbmNvbnN0IEJhc2UzMiA9IG5ldyBCYXNlWChcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MjM0NTY3XCIpO1xuY29uc3QgQmFzZTU4ID0gbmV3IEJhc2VYKFwiMTIzNDU2Nzg5QUJDREVGR0hKS0xNTlBRUlNUVVZXWFlaYWJjZGVmZ2hpamttbm9wcXJzdHV2d3h5elwiKTtcbmV4cG9ydCB7IEJhc2UzMiwgQmFzZTU4IH07XG4vL2NvbnNvbGUubG9nKEJhc2U1OC5kZWNvZGUoXCJRbWQyVjc3N281WHZKYllNZU1iOGsyblU1ZjhkM2NpVVE1WXBZdVdoenY4aURqXCIpKVxuLy9jb25zb2xlLmxvZyhCYXNlNTguZW5jb2RlKEJhc2U1OC5kZWNvZGUoXCJRbWQyVjc3N281WHZKYllNZU1iOGsyblU1ZjhkM2NpVVE1WXBZdVdoenY4aURqXCIpKSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBjb25zdCBBZGRyZXNzWmVybyA9IFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGRyZXNzZXMuanMubWFwIiwiZXhwb3J0IGNvbnN0IEhhc2haZXJvID0gXCIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhhc2hlcy5qcy5tYXAiLCJleHBvcnQgY29uc3QgdmVyc2lvbiA9IFwiaGFzaC81LjUuMFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X3ZlcnNpb24uanMubWFwIiwiaW1wb3J0IHsgY29uY2F0LCBoZXhsaWZ5IH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2J5dGVzXCI7XG5pbXBvcnQgeyBuYW1lcHJlcCwgdG9VdGY4Qnl0ZXMgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3Qvc3RyaW5nc1wiO1xuaW1wb3J0IHsga2VjY2FrMjU2IH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2tlY2NhazI1NlwiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2xvZ2dlclwiO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gXCIuL192ZXJzaW9uXCI7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKHZlcnNpb24pO1xuY29uc3QgWmVyb3MgPSBuZXcgVWludDhBcnJheSgzMik7XG5aZXJvcy5maWxsKDApO1xuY29uc3QgUGFydGl0aW9uID0gbmV3IFJlZ0V4cChcIl4oKC4qKVxcXFwuKT8oW14uXSspJFwiKTtcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkTmFtZShuYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29tcHMgPSBuYW1lLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5hbWVwcmVwKGNvbXBzW2ldKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbXB0eVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gbmFtZWhhc2gobmFtZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0eXBlb2YgKG5hbWUpICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJpbnZhbGlkIEVOUyBuYW1lOyBub3QgYSBzdHJpbmdcIiwgXCJuYW1lXCIsIG5hbWUpO1xuICAgIH1cbiAgICBsZXQgY3VycmVudCA9IG5hbWU7XG4gICAgbGV0IHJlc3VsdCA9IFplcm9zO1xuICAgIHdoaWxlIChjdXJyZW50Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBwYXJ0aXRpb24gPSBjdXJyZW50Lm1hdGNoKFBhcnRpdGlvbik7XG4gICAgICAgIGlmIChwYXJ0aXRpb24gPT0gbnVsbCB8fCBwYXJ0aXRpb25bMl0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJpbnZhbGlkIEVOUyBhZGRyZXNzOyBtaXNzaW5nIGNvbXBvbmVudFwiLCBcIm5hbWVcIiwgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGFiZWwgPSB0b1V0ZjhCeXRlcyhuYW1lcHJlcChwYXJ0aXRpb25bM10pKTtcbiAgICAgICAgcmVzdWx0ID0ga2VjY2FrMjU2KGNvbmNhdChbcmVzdWx0LCBrZWNjYWsyNTYobGFiZWwpXSkpO1xuICAgICAgICBjdXJyZW50ID0gcGFydGl0aW9uWzJdIHx8IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBoZXhsaWZ5KHJlc3VsdCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1uYW1laGFzaC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldEFkZHJlc3MgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYWRkcmVzc1wiO1xuaW1wb3J0IHsgQmlnTnVtYmVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2JpZ251bWJlclwiO1xuaW1wb3J0IHsgYXJyYXlpZnksIGhleENvbmNhdCwgaGV4bGlmeSwgaGV4WmVyb1BhZCwgaXNIZXhTdHJpbmcgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYnl0ZXNcIjtcbmltcG9ydCB7IGtlY2NhazI1NiB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9rZWNjYWsyNTZcIjtcbmltcG9ydCB7IGRlZXBDb3B5LCBkZWZpbmVSZWFkT25seSwgc2hhbGxvd0NvcHkgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2xvZ2dlclwiO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gXCIuL192ZXJzaW9uXCI7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKHZlcnNpb24pO1xuaW1wb3J0IHsgaWQgfSBmcm9tIFwiLi9pZFwiO1xuY29uc3QgcGFkZGluZyA9IG5ldyBVaW50OEFycmF5KDMyKTtcbnBhZGRpbmcuZmlsbCgwKTtcbmNvbnN0IE5lZ2F0aXZlT25lID0gQmlnTnVtYmVyLmZyb20oLTEpO1xuY29uc3QgWmVybyA9IEJpZ051bWJlci5mcm9tKDApO1xuY29uc3QgT25lID0gQmlnTnVtYmVyLmZyb20oMSk7XG5jb25zdCBNYXhVaW50MjU2ID0gQmlnTnVtYmVyLmZyb20oXCIweGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZcIik7XG5mdW5jdGlvbiBoZXhQYWRSaWdodCh2YWx1ZSkge1xuICAgIGNvbnN0IGJ5dGVzID0gYXJyYXlpZnkodmFsdWUpO1xuICAgIGNvbnN0IHBhZE9mZnNldCA9IGJ5dGVzLmxlbmd0aCAlIDMyO1xuICAgIGlmIChwYWRPZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGhleENvbmNhdChbYnl0ZXMsIHBhZGRpbmcuc2xpY2UocGFkT2Zmc2V0KV0pO1xuICAgIH1cbiAgICByZXR1cm4gaGV4bGlmeShieXRlcyk7XG59XG5jb25zdCBoZXhUcnVlID0gaGV4WmVyb1BhZChPbmUudG9IZXhTdHJpbmcoKSwgMzIpO1xuY29uc3QgaGV4RmFsc2UgPSBoZXhaZXJvUGFkKFplcm8udG9IZXhTdHJpbmcoKSwgMzIpO1xuY29uc3QgZG9tYWluRmllbGRUeXBlcyA9IHtcbiAgICBuYW1lOiBcInN0cmluZ1wiLFxuICAgIHZlcnNpb246IFwic3RyaW5nXCIsXG4gICAgY2hhaW5JZDogXCJ1aW50MjU2XCIsXG4gICAgdmVyaWZ5aW5nQ29udHJhY3Q6IFwiYWRkcmVzc1wiLFxuICAgIHNhbHQ6IFwiYnl0ZXMzMlwiXG59O1xuY29uc3QgZG9tYWluRmllbGROYW1lcyA9IFtcbiAgICBcIm5hbWVcIiwgXCJ2ZXJzaW9uXCIsIFwiY2hhaW5JZFwiLCBcInZlcmlmeWluZ0NvbnRyYWN0XCIsIFwic2FsdFwiXG5dO1xuZnVuY3Rpb24gY2hlY2tTdHJpbmcoa2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mICh2YWx1ZSkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoYGludmFsaWQgZG9tYWluIHZhbHVlIGZvciAke0pTT04uc3RyaW5naWZ5KGtleSl9YCwgYGRvbWFpbi4ke2tleX1gLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG59XG5jb25zdCBkb21haW5DaGVja3MgPSB7XG4gICAgbmFtZTogY2hlY2tTdHJpbmcoXCJuYW1lXCIpLFxuICAgIHZlcnNpb246IGNoZWNrU3RyaW5nKFwidmVyc2lvblwiKSxcbiAgICBjaGFpbklkOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBCaWdOdW1iZXIuZnJvbSh2YWx1ZSkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHsgfVxuICAgICAgICByZXR1cm4gbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihgaW52YWxpZCBkb21haW4gdmFsdWUgZm9yIFwiY2hhaW5JZFwiYCwgXCJkb21haW4uY2hhaW5JZFwiLCB2YWx1ZSk7XG4gICAgfSxcbiAgICB2ZXJpZnlpbmdDb250cmFjdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QWRkcmVzcyh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHsgfVxuICAgICAgICByZXR1cm4gbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihgaW52YWxpZCBkb21haW4gdmFsdWUgXCJ2ZXJpZnlpbmdDb250cmFjdFwiYCwgXCJkb21haW4udmVyaWZ5aW5nQ29udHJhY3RcIiwgdmFsdWUpO1xuICAgIH0sXG4gICAgc2FsdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBieXRlcyA9IGFycmF5aWZ5KHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChieXRlcy5sZW5ndGggIT09IDMyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFkIGxlbmd0aFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoZXhsaWZ5KGJ5dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHsgfVxuICAgICAgICByZXR1cm4gbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihgaW52YWxpZCBkb21haW4gdmFsdWUgXCJzYWx0XCJgLCBcImRvbWFpbi5zYWx0XCIsIHZhbHVlKTtcbiAgICB9XG59O1xuZnVuY3Rpb24gZ2V0QmFzZUVuY29kZXIodHlwZSkge1xuICAgIC8vIGludFhYIGFuZCB1aW50WFhcbiAgICB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gdHlwZS5tYXRjaCgvXih1PylpbnQoXFxkKikkLyk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgY29uc3Qgc2lnbmVkID0gKG1hdGNoWzFdID09PSBcIlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gcGFyc2VJbnQobWF0Y2hbMl0gfHwgXCIyNTZcIik7XG4gICAgICAgICAgICBpZiAod2lkdGggJSA4ICE9PSAwIHx8IHdpZHRoID4gMjU2IHx8IChtYXRjaFsyXSAmJiBtYXRjaFsyXSAhPT0gU3RyaW5nKHdpZHRoKSkpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBudW1lcmljIHdpZHRoXCIsIFwidHlwZVwiLCB0eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJvdW5kc1VwcGVyID0gTWF4VWludDI1Ni5tYXNrKHNpZ25lZCA/ICh3aWR0aCAtIDEpIDogd2lkdGgpO1xuICAgICAgICAgICAgY29uc3QgYm91bmRzTG93ZXIgPSBzaWduZWQgPyBib3VuZHNVcHBlci5hZGQoT25lKS5tdWwoTmVnYXRpdmVPbmUpIDogWmVybztcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gQmlnTnVtYmVyLmZyb20odmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh2Lmx0KGJvdW5kc0xvd2VyKSB8fCB2Lmd0KGJvdW5kc1VwcGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKGB2YWx1ZSBvdXQtb2YtYm91bmRzIGZvciAke3R5cGV9YCwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoZXhaZXJvUGFkKHYudG9Ud29zKDI1NikudG9IZXhTdHJpbmcoKSwgMzIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBieXRlc1hYXG4gICAge1xuICAgICAgICBjb25zdCBtYXRjaCA9IHR5cGUubWF0Y2goL15ieXRlcyhcXGQrKSQvKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHBhcnNlSW50KG1hdGNoWzFdKTtcbiAgICAgICAgICAgIGlmICh3aWR0aCA9PT0gMCB8fCB3aWR0aCA+IDMyIHx8IG1hdGNoWzFdICE9PSBTdHJpbmcod2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgYnl0ZXMgd2lkdGhcIiwgXCJ0eXBlXCIsIHR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gYXJyYXlpZnkodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChieXRlcy5sZW5ndGggIT09IHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoYGludmFsaWQgbGVuZ3RoIGZvciAke3R5cGV9YCwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoZXhQYWRSaWdodCh2YWx1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwiYWRkcmVzc1wiOiByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gaGV4WmVyb1BhZChnZXRBZGRyZXNzKHZhbHVlKSwgMzIpO1xuICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiYm9vbFwiOiByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gKCghdmFsdWUpID8gaGV4RmFsc2UgOiBoZXhUcnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcImJ5dGVzXCI6IHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBrZWNjYWsyNTYodmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBpZCh2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gZW5jb2RlVHlwZShuYW1lLCBmaWVsZHMpIHtcbiAgICByZXR1cm4gYCR7bmFtZX0oJHtmaWVsZHMubWFwKCh7IG5hbWUsIHR5cGUgfSkgPT4gKHR5cGUgKyBcIiBcIiArIG5hbWUpKS5qb2luKFwiLFwiKX0pYDtcbn1cbmV4cG9ydCBjbGFzcyBUeXBlZERhdGFFbmNvZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlcykge1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcInR5cGVzXCIsIE9iamVjdC5mcmVlemUoZGVlcENvcHkodHlwZXMpKSk7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiX2VuY29kZXJDYWNoZVwiLCB7fSk7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiX3R5cGVzXCIsIHt9KTtcbiAgICAgICAgLy8gTGluayBzdHJ1Y3QgdHlwZXMgdG8gdGhlaXIgZGlyZWN0IGNoaWxkIHN0cnVjdHNcbiAgICAgICAgY29uc3QgbGlua3MgPSB7fTtcbiAgICAgICAgLy8gTGluayBzdHJ1Y3RzIHRvIHN0cnVjdHMgd2hpY2ggY29udGFpbiB0aGVtIGFzIGEgY2hpbGRcbiAgICAgICAgY29uc3QgcGFyZW50cyA9IHt9O1xuICAgICAgICAvLyBMaW5rIGFsbCBzdWJ0eXBlcyB3aXRoaW4gYSBnaXZlbiBzdHJ1Y3RcbiAgICAgICAgY29uc3Qgc3VidHlwZXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModHlwZXMpLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgICAgIGxpbmtzW3R5cGVdID0ge307XG4gICAgICAgICAgICBwYXJlbnRzW3R5cGVdID0gW107XG4gICAgICAgICAgICBzdWJ0eXBlc1t0eXBlXSA9IHt9O1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHR5cGVzKSB7XG4gICAgICAgICAgICBjb25zdCB1bmlxdWVOYW1lcyA9IHt9O1xuICAgICAgICAgICAgdHlwZXNbbmFtZV0uZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBlYWNoIGZpZWxkIGhhcyBhIHVuaXF1ZSBuYW1lXG4gICAgICAgICAgICAgICAgaWYgKHVuaXF1ZU5hbWVzW2ZpZWxkLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoYGR1cGxpY2F0ZSB2YXJpYWJsZSBuYW1lICR7SlNPTi5zdHJpbmdpZnkoZmllbGQubmFtZSl9IGluICR7SlNPTi5zdHJpbmdpZnkobmFtZSl9YCwgXCJ0eXBlc1wiLCB0eXBlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVuaXF1ZU5hbWVzW2ZpZWxkLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGJhc2UgdHlwZSAoZHJvcCBhbnkgYXJyYXkgc3BlY2lmaWVycylcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlVHlwZSA9IGZpZWxkLnR5cGUubWF0Y2goL14oW15cXHg1Yl0qKShcXHg1YnwkKS8pWzFdO1xuICAgICAgICAgICAgICAgIGlmIChiYXNlVHlwZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKGBjaXJjdWxhciB0eXBlIHJlZmVyZW5jZSB0byAke0pTT04uc3RyaW5naWZ5KGJhc2VUeXBlKX1gLCBcInR5cGVzXCIsIHR5cGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSXMgdGhpcyBhIGJhc2UgZW5jb2RpbmcgdHlwZT9cbiAgICAgICAgICAgICAgICBjb25zdCBlbmNvZGVyID0gZ2V0QmFzZUVuY29kZXIoYmFzZVR5cGUpO1xuICAgICAgICAgICAgICAgIGlmIChlbmNvZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRzW2Jhc2VUeXBlXSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKGB1bmtub3duIHR5cGUgJHtKU09OLnN0cmluZ2lmeShiYXNlVHlwZSl9YCwgXCJ0eXBlc1wiLCB0eXBlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCBsaW5rYWdlXG4gICAgICAgICAgICAgICAgcGFyZW50c1tiYXNlVHlwZV0ucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICBsaW5rc1tuYW1lXVtiYXNlVHlwZV0gPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGVkdWNlIHRoZSBwcmltYXJ5IHR5cGVcbiAgICAgICAgY29uc3QgcHJpbWFyeVR5cGVzID0gT2JqZWN0LmtleXMocGFyZW50cykuZmlsdGVyKChuKSA9PiAocGFyZW50c1tuXS5sZW5ndGggPT09IDApKTtcbiAgICAgICAgaWYgKHByaW1hcnlUeXBlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJtaXNzaW5nIHByaW1hcnkgdHlwZVwiLCBcInR5cGVzXCIsIHR5cGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcmltYXJ5VHlwZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihgYW1iaWd1b3VzIHByaW1hcnkgdHlwZXMgb3IgdW51c2VkIHR5cGVzOiAke3ByaW1hcnlUeXBlcy5tYXAoKHQpID0+IChKU09OLnN0cmluZ2lmeSh0KSkpLmpvaW4oXCIsIFwiKX1gLCBcInR5cGVzXCIsIHR5cGVzKTtcbiAgICAgICAgfVxuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcInByaW1hcnlUeXBlXCIsIHByaW1hcnlUeXBlc1swXSk7XG4gICAgICAgIC8vIENoZWNrIGZvciBjaXJjdWxhciB0eXBlIHJlZmVyZW5jZXNcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tDaXJjdWxhcih0eXBlLCBmb3VuZCkge1xuICAgICAgICAgICAgaWYgKGZvdW5kW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihgY2lyY3VsYXIgdHlwZSByZWZlcmVuY2UgdG8gJHtKU09OLnN0cmluZ2lmeSh0eXBlKX1gLCBcInR5cGVzXCIsIHR5cGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvdW5kW3R5cGVdID0gdHJ1ZTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpbmtzW3R5cGVdKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcGFyZW50c1tjaGlsZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZWN1cnNpdmVseSBjaGVjayBjaGlsZHJlblxuICAgICAgICAgICAgICAgIGNoZWNrQ2lyY3VsYXIoY2hpbGQsIGZvdW5kKTtcbiAgICAgICAgICAgICAgICAvLyBNYXJrIGFsbCBhbmNlc3RvcnMgYXMgaGF2aW5nIHRoaXMgZGVjZW5kYW50XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZm91bmQpLmZvckVhY2goKHN1YnR5cGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3VidHlwZXNbc3VidHlwZV1bY2hpbGRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsZXRlIGZvdW5kW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrQ2lyY3VsYXIodGhpcy5wcmltYXJ5VHlwZSwge30pO1xuICAgICAgICAvLyBDb21wdXRlIGVhY2ggZnVsbHkgZGVzY3JpYmUgdHlwZVxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gc3VidHlwZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0ID0gT2JqZWN0LmtleXMoc3VidHlwZXNbbmFtZV0pO1xuICAgICAgICAgICAgc3Quc29ydCgpO1xuICAgICAgICAgICAgdGhpcy5fdHlwZXNbbmFtZV0gPSBlbmNvZGVUeXBlKG5hbWUsIHR5cGVzW25hbWVdKSArIHN0Lm1hcCgodCkgPT4gZW5jb2RlVHlwZSh0LCB0eXBlc1t0XSkpLmpvaW4oXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RW5jb2Rlcih0eXBlKSB7XG4gICAgICAgIGxldCBlbmNvZGVyID0gdGhpcy5fZW5jb2RlckNhY2hlW3R5cGVdO1xuICAgICAgICBpZiAoIWVuY29kZXIpIHtcbiAgICAgICAgICAgIGVuY29kZXIgPSB0aGlzLl9lbmNvZGVyQ2FjaGVbdHlwZV0gPSB0aGlzLl9nZXRFbmNvZGVyKHR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbmNvZGVyO1xuICAgIH1cbiAgICBfZ2V0RW5jb2Rlcih0eXBlKSB7XG4gICAgICAgIC8vIEJhc2ljIGVuY29kZXIgdHlwZSAoYWRkcmVzcywgYm9vbCwgdWludDI1NiwgZXRjKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBlbmNvZGVyID0gZ2V0QmFzZUVuY29kZXIodHlwZSk7XG4gICAgICAgICAgICBpZiAoZW5jb2Rlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEFycmF5XG4gICAgICAgIGNvbnN0IG1hdGNoID0gdHlwZS5tYXRjaCgvXiguKikoXFx4NWIoXFxkKilcXHg1ZCkkLyk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgY29uc3Qgc3VidHlwZSA9IG1hdGNoWzFdO1xuICAgICAgICAgICAgY29uc3Qgc3ViRW5jb2RlciA9IHRoaXMuZ2V0RW5jb2RlcihzdWJ0eXBlKTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHBhcnNlSW50KG1hdGNoWzNdKTtcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoID49IDAgJiYgdmFsdWUubGVuZ3RoICE9PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImFycmF5IGxlbmd0aCBtaXNtYXRjaDsgZXhwZWN0ZWQgbGVuZ3RoICR7IGFycmF5TGVuZ3RoIH1cIiwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWx1ZS5tYXAoc3ViRW5jb2Rlcik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3R5cGVzW3N1YnR5cGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoa2VjY2FrMjU2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtlY2NhazI1NihoZXhDb25jYXQocmVzdWx0KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIFN0cnVjdFxuICAgICAgICBjb25zdCBmaWVsZHMgPSB0aGlzLnR5cGVzW3R5cGVdO1xuICAgICAgICBpZiAoZmllbGRzKSB7XG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkVHlwZSA9IGlkKHRoaXMuX3R5cGVzW3R5cGVdKTtcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBmaWVsZHMubWFwKCh7IG5hbWUsIHR5cGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEVuY29kZXIodHlwZSkodmFsdWVbbmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdHlwZXNbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZWNjYWsyNTYocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhbHVlcy51bnNoaWZ0KGVuY29kZWRUeXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGV4Q29uY2F0KHZhbHVlcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKGB1bmtub3duIHR5cGU6ICR7dHlwZX1gLCBcInR5cGVcIiwgdHlwZSk7XG4gICAgfVxuICAgIGVuY29kZVR5cGUobmFtZSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl90eXBlc1tuYW1lXTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoYHVua25vd24gdHlwZTogJHtKU09OLnN0cmluZ2lmeShuYW1lKX1gLCBcIm5hbWVcIiwgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZW5jb2RlRGF0YSh0eXBlLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbmNvZGVyKHR5cGUpKHZhbHVlKTtcbiAgICB9XG4gICAgaGFzaFN0cnVjdChuYW1lLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4ga2VjY2FrMjU2KHRoaXMuZW5jb2RlRGF0YShuYW1lLCB2YWx1ZSkpO1xuICAgIH1cbiAgICBlbmNvZGUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlRGF0YSh0aGlzLnByaW1hcnlUeXBlLCB2YWx1ZSk7XG4gICAgfVxuICAgIGhhc2godmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzaFN0cnVjdCh0aGlzLnByaW1hcnlUeXBlLCB2YWx1ZSk7XG4gICAgfVxuICAgIF92aXNpdCh0eXBlLCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICAgICAgLy8gQmFzaWMgZW5jb2RlciB0eXBlIChhZGRyZXNzLCBib29sLCB1aW50MjU2LCBldGMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGVuY29kZXIgPSBnZXRCYXNlRW5jb2Rlcih0eXBlKTtcbiAgICAgICAgICAgIGlmIChlbmNvZGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHR5cGUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBcnJheVxuICAgICAgICBjb25zdCBtYXRjaCA9IHR5cGUubWF0Y2goL14oLiopKFxceDViKFxcZCopXFx4NWQpJC8pO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnR5cGUgPSBtYXRjaFsxXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHBhcnNlSW50KG1hdGNoWzNdKTtcbiAgICAgICAgICAgIGlmIChsZW5ndGggPj0gMCAmJiB2YWx1ZS5sZW5ndGggIT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJhcnJheSBsZW5ndGggbWlzbWF0Y2g7IGV4cGVjdGVkIGxlbmd0aCAkeyBhcnJheUxlbmd0aCB9XCIsIFwidmFsdWVcIiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLm1hcCgodikgPT4gdGhpcy5fdmlzaXQoc3VidHlwZSwgdiwgY2FsbGJhY2spKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdHJ1Y3RcbiAgICAgICAgY29uc3QgZmllbGRzID0gdGhpcy50eXBlc1t0eXBlXTtcbiAgICAgICAgaWYgKGZpZWxkcykge1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoKGFjY3VtLCB7IG5hbWUsIHR5cGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGFjY3VtW25hbWVdID0gdGhpcy5fdmlzaXQodHlwZSwgdmFsdWVbbmFtZV0sIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW07XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoYHVua25vd24gdHlwZTogJHt0eXBlfWAsIFwidHlwZVwiLCB0eXBlKTtcbiAgICB9XG4gICAgdmlzaXQodmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aXNpdCh0aGlzLnByaW1hcnlUeXBlLCB2YWx1ZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbSh0eXBlcykge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVkRGF0YUVuY29kZXIodHlwZXMpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0UHJpbWFyeVR5cGUodHlwZXMpIHtcbiAgICAgICAgcmV0dXJuIFR5cGVkRGF0YUVuY29kZXIuZnJvbSh0eXBlcykucHJpbWFyeVR5cGU7XG4gICAgfVxuICAgIHN0YXRpYyBoYXNoU3RydWN0KG5hbWUsIHR5cGVzLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gVHlwZWREYXRhRW5jb2Rlci5mcm9tKHR5cGVzKS5oYXNoU3RydWN0KG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgc3RhdGljIGhhc2hEb21haW4oZG9tYWluKSB7XG4gICAgICAgIGNvbnN0IGRvbWFpbkZpZWxkcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZG9tYWluKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZG9tYWluRmllbGRUeXBlc1tuYW1lXTtcbiAgICAgICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoYGludmFsaWQgdHlwZWQtZGF0YSBkb21haW4ga2V5OiAke0pTT04uc3RyaW5naWZ5KG5hbWUpfWAsIFwiZG9tYWluXCIsIGRvbWFpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb21haW5GaWVsZHMucHVzaCh7IG5hbWUsIHR5cGUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZG9tYWluRmllbGRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkb21haW5GaWVsZE5hbWVzLmluZGV4T2YoYS5uYW1lKSAtIGRvbWFpbkZpZWxkTmFtZXMuaW5kZXhPZihiLm5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFR5cGVkRGF0YUVuY29kZXIuaGFzaFN0cnVjdChcIkVJUDcxMkRvbWFpblwiLCB7IEVJUDcxMkRvbWFpbjogZG9tYWluRmllbGRzIH0sIGRvbWFpbik7XG4gICAgfVxuICAgIHN0YXRpYyBlbmNvZGUoZG9tYWluLCB0eXBlcywgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGhleENvbmNhdChbXG4gICAgICAgICAgICBcIjB4MTkwMVwiLFxuICAgICAgICAgICAgVHlwZWREYXRhRW5jb2Rlci5oYXNoRG9tYWluKGRvbWFpbiksXG4gICAgICAgICAgICBUeXBlZERhdGFFbmNvZGVyLmZyb20odHlwZXMpLmhhc2godmFsdWUpXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBzdGF0aWMgaGFzaChkb21haW4sIHR5cGVzLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4ga2VjY2FrMjU2KFR5cGVkRGF0YUVuY29kZXIuZW5jb2RlKGRvbWFpbiwgdHlwZXMsIHZhbHVlKSk7XG4gICAgfVxuICAgIC8vIFJlcGxhY2VzIGFsbCBhZGRyZXNzIHR5cGVzIHdpdGggRU5TIG5hbWVzIHdpdGggdGhlaXIgbG9va2VkIHVwIGFkZHJlc3NcbiAgICBzdGF0aWMgcmVzb2x2ZU5hbWVzKGRvbWFpbiwgdHlwZXMsIHZhbHVlLCByZXNvbHZlTmFtZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gTWFrZSBhIGNvcHkgdG8gaXNvbGF0ZSBpdCBmcm9tIHRoZSBvYmplY3QgcGFzc2VkIGluXG4gICAgICAgICAgICBkb21haW4gPSBzaGFsbG93Q29weShkb21haW4pO1xuICAgICAgICAgICAgLy8gTG9vayB1cCBhbGwgRU5TIG5hbWVzXG4gICAgICAgICAgICBjb25zdCBlbnNDYWNoZSA9IHt9O1xuICAgICAgICAgICAgLy8gRG8gd2UgbmVlZCB0byBsb29rIHVwIHRoZSBkb21haW4ncyB2ZXJpZnlpbmdDb250cmFjdD9cbiAgICAgICAgICAgIGlmIChkb21haW4udmVyaWZ5aW5nQ29udHJhY3QgJiYgIWlzSGV4U3RyaW5nKGRvbWFpbi52ZXJpZnlpbmdDb250cmFjdCwgMjApKSB7XG4gICAgICAgICAgICAgICAgZW5zQ2FjaGVbZG9tYWluLnZlcmlmeWluZ0NvbnRyYWN0XSA9IFwiMHhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIGFyZSBnb2luZyB0byB1c2UgdGhlIGVuY29kZXIgdG8gdmlzaXQgYWxsIHRoZSBiYXNlIHZhbHVlc1xuICAgICAgICAgICAgY29uc3QgZW5jb2RlciA9IFR5cGVkRGF0YUVuY29kZXIuZnJvbSh0eXBlcyk7XG4gICAgICAgICAgICAvLyBHZXQgYSBsaXN0IG9mIGFsbCB0aGUgYWRkcmVzc2VzXG4gICAgICAgICAgICBlbmNvZGVyLnZpc2l0KHZhbHVlLCAodHlwZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJhZGRyZXNzXCIgJiYgIWlzSGV4U3RyaW5nKHZhbHVlLCAyMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5zQ2FjaGVbdmFsdWVdID0gXCIweFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIExvb2t1cCBlYWNoIG5hbWVcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBlbnNDYWNoZSkge1xuICAgICAgICAgICAgICAgIGVuc0NhY2hlW25hbWVdID0geWllbGQgcmVzb2x2ZU5hbWUobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBkb21haW4gdmVyaWZ5aW5nQ29udHJhY3QgaWYgbmVlZGVkXG4gICAgICAgICAgICBpZiAoZG9tYWluLnZlcmlmeWluZ0NvbnRyYWN0ICYmIGVuc0NhY2hlW2RvbWFpbi52ZXJpZnlpbmdDb250cmFjdF0pIHtcbiAgICAgICAgICAgICAgICBkb21haW4udmVyaWZ5aW5nQ29udHJhY3QgPSBlbnNDYWNoZVtkb21haW4udmVyaWZ5aW5nQ29udHJhY3RdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVwbGFjZSBhbGwgRU5TIG5hbWVzIHdpdGggdGhlaXIgYWRkcmVzc1xuICAgICAgICAgICAgdmFsdWUgPSBlbmNvZGVyLnZpc2l0KHZhbHVlLCAodHlwZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJhZGRyZXNzXCIgJiYgZW5zQ2FjaGVbdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbnNDYWNoZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHsgZG9tYWluLCB2YWx1ZSB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldFBheWxvYWQoZG9tYWluLCB0eXBlcywgdmFsdWUpIHtcbiAgICAgICAgLy8gVmFsaWRhdGUgdGhlIGRvbWFpbiBmaWVsZHNcbiAgICAgICAgVHlwZWREYXRhRW5jb2Rlci5oYXNoRG9tYWluKGRvbWFpbik7XG4gICAgICAgIC8vIERlcml2ZSB0aGUgRUlQNzEyRG9tYWluIFN0cnVjdCByZWZlcmVuY2UgdHlwZVxuICAgICAgICBjb25zdCBkb21haW5WYWx1ZXMgPSB7fTtcbiAgICAgICAgY29uc3QgZG9tYWluVHlwZXMgPSBbXTtcbiAgICAgICAgZG9tYWluRmllbGROYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRvbWFpbltuYW1lXTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9tYWluVmFsdWVzW25hbWVdID0gZG9tYWluQ2hlY2tzW25hbWVdKHZhbHVlKTtcbiAgICAgICAgICAgIGRvbWFpblR5cGVzLnB1c2goeyBuYW1lLCB0eXBlOiBkb21haW5GaWVsZFR5cGVzW25hbWVdIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZW5jb2RlciA9IFR5cGVkRGF0YUVuY29kZXIuZnJvbSh0eXBlcyk7XG4gICAgICAgIGNvbnN0IHR5cGVzV2l0aERvbWFpbiA9IHNoYWxsb3dDb3B5KHR5cGVzKTtcbiAgICAgICAgaWYgKHR5cGVzV2l0aERvbWFpbi5FSVA3MTJEb21haW4pIHtcbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJ0eXBlcyBtdXN0IG5vdCBjb250YWluIEVJUDcxMkRvbWFpbiB0eXBlXCIsIFwidHlwZXMuRUlQNzEyRG9tYWluXCIsIHR5cGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHR5cGVzV2l0aERvbWFpbi5FSVA3MTJEb21haW4gPSBkb21haW5UeXBlcztcbiAgICAgICAgfVxuICAgICAgICAvLyBWYWxpZGF0ZSB0aGUgZGF0YSBzdHJ1Y3R1cmVzIGFuZCB0eXBlc1xuICAgICAgICBlbmNvZGVyLmVuY29kZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlczogdHlwZXNXaXRoRG9tYWluLFxuICAgICAgICAgICAgZG9tYWluOiBkb21haW5WYWx1ZXMsXG4gICAgICAgICAgICBwcmltYXJ5VHlwZTogZW5jb2Rlci5wcmltYXJ5VHlwZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVuY29kZXIudmlzaXQodmFsdWUsICh0eXBlLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGJ5dGVzXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUubWF0Y2goL15ieXRlcyhcXGQqKS8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoZXhsaWZ5KGFycmF5aWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHVpbnQgb3IgaW50XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUubWF0Y2goL151P2ludC8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBCaWdOdW1iZXIuZnJvbSh2YWx1ZSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhZGRyZXNzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJvb2xcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhIXZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh2YWx1ZSkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKGBpbnZhbGlkIHN0cmluZ2AsIFwidmFsdWVcIiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcInVuc3VwcG9ydGVkIHR5cGVcIiwgXCJ0eXBlXCIsIHR5cGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlZC1kYXRhLmpzLm1hcCIsImV4cG9ydCBjb25zdCB2ZXJzaW9uID0gXCJuZXR3b3Jrcy81LjUuMlwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X3ZlcnNpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvbG9nZ2VyXCI7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcIi4vX3ZlcnNpb25cIjtcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIodmVyc2lvbik7XG47XG5mdW5jdGlvbiBpc1JlbmV0d29ya2FibGUodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiAodmFsdWUucmVuZXR3b3JrKSA9PT0gXCJmdW5jdGlvblwiKTtcbn1cbmZ1bmN0aW9uIGV0aERlZmF1bHRQcm92aWRlcihuZXR3b3JrKSB7XG4gICAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uIChwcm92aWRlcnMsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyTGlzdCA9IFtdO1xuICAgICAgICBpZiAocHJvdmlkZXJzLkluZnVyYVByb3ZpZGVyKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHByb3ZpZGVyTGlzdC5wdXNoKG5ldyBwcm92aWRlcnMuSW5mdXJhUHJvdmlkZXIobmV0d29yaywgb3B0aW9ucy5pbmZ1cmEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikgeyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3ZpZGVycy5FdGhlcnNjYW5Qcm92aWRlcikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwcm92aWRlckxpc3QucHVzaChuZXcgcHJvdmlkZXJzLkV0aGVyc2NhblByb3ZpZGVyKG5ldHdvcmssIG9wdGlvbnMuZXRoZXJzY2FuKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm92aWRlcnMuQWxjaGVteVByb3ZpZGVyKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHByb3ZpZGVyTGlzdC5wdXNoKG5ldyBwcm92aWRlcnMuQWxjaGVteVByb3ZpZGVyKG5ldHdvcmssIG9wdGlvbnMuYWxjaGVteSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvdmlkZXJzLlBvY2tldFByb3ZpZGVyKSB7XG4gICAgICAgICAgICAvLyBUaGVzZSBuZXR3b3JrcyBhcmUgY3VycmVudGx5IGZhdWx0eSBvbiBQb2NrZXQgYXMgdGhlaXJcbiAgICAgICAgICAgIC8vIG5ldHdvcmsgZG9lcyBub3QgaGFuZGxlIHRoZSBCZXJsaW4gaGFyZGZvcmssIHdoaWNoIGlzXG4gICAgICAgICAgICAvLyBsaXZlIG9uIHRoZXNlIG9uZXMuXG4gICAgICAgICAgICAvLyBAVE9ETzogVGhpcyBnb2VzIGF3YXkgb25jZSBQb2NrZXQgaGFzIHVwZ3JhZGVkIHRoZWlyIG5vZGVzXG4gICAgICAgICAgICBjb25zdCBza2lwID0gW1wiZ29lcmxpXCIsIFwicm9wc3RlblwiLCBcInJpbmtlYnlcIl07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5Qb2NrZXRQcm92aWRlcihuZXR3b3JrKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXIubmV0d29yayAmJiBza2lwLmluZGV4T2YocHJvdmlkZXIubmV0d29yay5uYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJMaXN0LnB1c2gocHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikgeyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3ZpZGVycy5DbG91ZGZsYXJlUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcHJvdmlkZXJMaXN0LnB1c2gobmV3IHByb3ZpZGVycy5DbG91ZGZsYXJlUHJvdmlkZXIobmV0d29yaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvdmlkZXJMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3ZpZGVycy5GYWxsYmFja1Byb3ZpZGVyKSB7XG4gICAgICAgICAgICBsZXQgcXVvcnVtID0gMTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnF1b3J1bSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcXVvcnVtID0gb3B0aW9ucy5xdW9ydW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZXR3b3JrID09PSBcImhvbWVzdGVhZFwiKSB7XG4gICAgICAgICAgICAgICAgcXVvcnVtID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgcHJvdmlkZXJzLkZhbGxiYWNrUHJvdmlkZXIocHJvdmlkZXJMaXN0LCBxdW9ydW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm92aWRlckxpc3RbMF07XG4gICAgfTtcbiAgICBmdW5jLnJlbmV0d29yayA9IGZ1bmN0aW9uIChuZXR3b3JrKSB7XG4gICAgICAgIHJldHVybiBldGhEZWZhdWx0UHJvdmlkZXIobmV0d29yayk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuYztcbn1cbmZ1bmN0aW9uIGV0Y0RlZmF1bHRQcm92aWRlcih1cmwsIG5ldHdvcmspIHtcbiAgICBjb25zdCBmdW5jID0gZnVuY3Rpb24gKHByb3ZpZGVycywgb3B0aW9ucykge1xuICAgICAgICBpZiAocHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBwcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKHVybCwgbmV0d29yayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBmdW5jLnJlbmV0d29yayA9IGZ1bmN0aW9uIChuZXR3b3JrKSB7XG4gICAgICAgIHJldHVybiBldGNEZWZhdWx0UHJvdmlkZXIodXJsLCBuZXR3b3JrKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jO1xufVxuY29uc3QgaG9tZXN0ZWFkID0ge1xuICAgIGNoYWluSWQ6IDEsXG4gICAgZW5zQWRkcmVzczogXCIweDAwMDAwMDAwMDAwQzJFMDc0ZUM2OUEwZEZiMjk5N0JBNkM3ZDJlMWVcIixcbiAgICBuYW1lOiBcImhvbWVzdGVhZFwiLFxuICAgIF9kZWZhdWx0UHJvdmlkZXI6IGV0aERlZmF1bHRQcm92aWRlcihcImhvbWVzdGVhZFwiKVxufTtcbmNvbnN0IHJvcHN0ZW4gPSB7XG4gICAgY2hhaW5JZDogMyxcbiAgICBlbnNBZGRyZXNzOiBcIjB4MDAwMDAwMDAwMDBDMkUwNzRlQzY5QTBkRmIyOTk3QkE2QzdkMmUxZVwiLFxuICAgIG5hbWU6IFwicm9wc3RlblwiLFxuICAgIF9kZWZhdWx0UHJvdmlkZXI6IGV0aERlZmF1bHRQcm92aWRlcihcInJvcHN0ZW5cIilcbn07XG5jb25zdCBjbGFzc2ljTW9yZG9yID0ge1xuICAgIGNoYWluSWQ6IDYzLFxuICAgIG5hbWU6IFwiY2xhc3NpY01vcmRvclwiLFxuICAgIF9kZWZhdWx0UHJvdmlkZXI6IGV0Y0RlZmF1bHRQcm92aWRlcihcImh0dHBzOi8vd3d3LmV0aGVyY2x1c3Rlci5jb20vbW9yZG9yXCIsIFwiY2xhc3NpY01vcmRvclwiKVxufTtcbi8vIFNlZTogaHR0cHM6Ly9jaGFpbmxpc3Qub3JnXG5jb25zdCBuZXR3b3JrcyA9IHtcbiAgICB1bnNwZWNpZmllZDogeyBjaGFpbklkOiAwLCBuYW1lOiBcInVuc3BlY2lmaWVkXCIgfSxcbiAgICBob21lc3RlYWQ6IGhvbWVzdGVhZCxcbiAgICBtYWlubmV0OiBob21lc3RlYWQsXG4gICAgbW9yZGVuOiB7IGNoYWluSWQ6IDIsIG5hbWU6IFwibW9yZGVuXCIgfSxcbiAgICByb3BzdGVuOiByb3BzdGVuLFxuICAgIHRlc3RuZXQ6IHJvcHN0ZW4sXG4gICAgcmlua2VieToge1xuICAgICAgICBjaGFpbklkOiA0LFxuICAgICAgICBlbnNBZGRyZXNzOiBcIjB4MDAwMDAwMDAwMDBDMkUwNzRlQzY5QTBkRmIyOTk3QkE2QzdkMmUxZVwiLFxuICAgICAgICBuYW1lOiBcInJpbmtlYnlcIixcbiAgICAgICAgX2RlZmF1bHRQcm92aWRlcjogZXRoRGVmYXVsdFByb3ZpZGVyKFwicmlua2VieVwiKVxuICAgIH0sXG4gICAga292YW46IHtcbiAgICAgICAgY2hhaW5JZDogNDIsXG4gICAgICAgIG5hbWU6IFwia292YW5cIixcbiAgICAgICAgX2RlZmF1bHRQcm92aWRlcjogZXRoRGVmYXVsdFByb3ZpZGVyKFwia292YW5cIilcbiAgICB9LFxuICAgIGdvZXJsaToge1xuICAgICAgICBjaGFpbklkOiA1LFxuICAgICAgICBlbnNBZGRyZXNzOiBcIjB4MDAwMDAwMDAwMDBDMkUwNzRlQzY5QTBkRmIyOTk3QkE2QzdkMmUxZVwiLFxuICAgICAgICBuYW1lOiBcImdvZXJsaVwiLFxuICAgICAgICBfZGVmYXVsdFByb3ZpZGVyOiBldGhEZWZhdWx0UHJvdmlkZXIoXCJnb2VybGlcIilcbiAgICB9LFxuICAgIGtpbnRzdWdpOiB7IGNoYWluSWQ6IDEzMzc3MDIsIG5hbWU6IFwia2ludHN1Z2lcIiB9LFxuICAgIC8vIEVUQyAoU2VlOiAjMzUxKVxuICAgIGNsYXNzaWM6IHtcbiAgICAgICAgY2hhaW5JZDogNjEsXG4gICAgICAgIG5hbWU6IFwiY2xhc3NpY1wiLFxuICAgICAgICBfZGVmYXVsdFByb3ZpZGVyOiBldGNEZWZhdWx0UHJvdmlkZXIoXCJodHRwczovXFwvd3d3LmV0aGVyY2x1c3Rlci5jb20vZXRjXCIsIFwiY2xhc3NpY1wiKVxuICAgIH0sXG4gICAgY2xhc3NpY01vcmRlbjogeyBjaGFpbklkOiA2MiwgbmFtZTogXCJjbGFzc2ljTW9yZGVuXCIgfSxcbiAgICBjbGFzc2ljTW9yZG9yOiBjbGFzc2ljTW9yZG9yLFxuICAgIGNsYXNzaWNUZXN0bmV0OiBjbGFzc2ljTW9yZG9yLFxuICAgIGNsYXNzaWNLb3R0aToge1xuICAgICAgICBjaGFpbklkOiA2LFxuICAgICAgICBuYW1lOiBcImNsYXNzaWNLb3R0aVwiLFxuICAgICAgICBfZGVmYXVsdFByb3ZpZGVyOiBldGNEZWZhdWx0UHJvdmlkZXIoXCJodHRwczovXFwvd3d3LmV0aGVyY2x1c3Rlci5jb20va290dGlcIiwgXCJjbGFzc2ljS290dGlcIilcbiAgICB9LFxuICAgIHhkYWk6IHsgY2hhaW5JZDogMTAwLCBuYW1lOiBcInhkYWlcIiB9LFxuICAgIG1hdGljOiB7IGNoYWluSWQ6IDEzNywgbmFtZTogXCJtYXRpY1wiIH0sXG4gICAgbWF0aWNtdW06IHsgY2hhaW5JZDogODAwMDEsIG5hbWU6IFwibWF0aWNtdW1cIiB9LFxuICAgIG9wdGltaXNtOiB7IGNoYWluSWQ6IDEwLCBuYW1lOiBcIm9wdGltaXNtXCIgfSxcbiAgICBcIm9wdGltaXNtLWtvdmFuXCI6IHsgY2hhaW5JZDogNjksIG5hbWU6IFwib3B0aW1pc20ta292YW5cIiB9LFxuICAgIFwib3B0aW1pc20tZ29lcmxpXCI6IHsgY2hhaW5JZDogNDIwLCBuYW1lOiBcIm9wdGltaXNtLWdvZXJsaVwiIH0sXG4gICAgYXJiaXRydW06IHsgY2hhaW5JZDogNDIxNjEsIG5hbWU6IFwiYXJiaXRydW1cIiB9LFxuICAgIFwiYXJiaXRydW0tcmlua2VieVwiOiB7IGNoYWluSWQ6IDQyMTYxMSwgbmFtZTogXCJhcmJpdHJ1bS1yaW5rZWJ5XCIgfSxcbiAgICBibmI6IHsgY2hhaW5JZDogNTYsIG5hbWU6IFwiYm5iXCIgfSxcbiAgICBibmJ0OiB7IGNoYWluSWQ6IDk3LCBuYW1lOiBcImJuYnRcIiB9LFxufTtcbi8qKlxuICogIGdldE5ldHdvcmtcbiAqXG4gKiAgQ29udmVydHMgYSBuYW1lZCBjb21tb24gbmV0d29ya3Mgb3IgY2hhaW4gSUQgKG5ldHdvcmsgSUQpIHRvIGEgTmV0d29ya1xuICogIGFuZCB2ZXJpZmllcyBhIG5ldHdvcmsgaXMgYSB2YWxpZCBOZXR3b3JrLi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5ldHdvcmsobmV0d29yaykge1xuICAgIC8vIE5vIG5ldHdvcmsgKG51bGwpXG4gICAgaWYgKG5ldHdvcmsgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiAobmV0d29yaykgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIG5ldHdvcmtzKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFuZGFyZCA9IG5ldHdvcmtzW25hbWVdO1xuICAgICAgICAgICAgaWYgKHN0YW5kYXJkLmNoYWluSWQgPT09IG5ldHdvcmspIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBzdGFuZGFyZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBjaGFpbklkOiBzdGFuZGFyZC5jaGFpbklkLFxuICAgICAgICAgICAgICAgICAgICBlbnNBZGRyZXNzOiAoc3RhbmRhcmQuZW5zQWRkcmVzcyB8fCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgX2RlZmF1bHRQcm92aWRlcjogKHN0YW5kYXJkLl9kZWZhdWx0UHJvdmlkZXIgfHwgbnVsbClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGFpbklkOiBuZXR3b3JrLFxuICAgICAgICAgICAgbmFtZTogXCJ1bmtub3duXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiAobmV0d29yaykgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc3RhbmRhcmQgPSBuZXR3b3Jrc1tuZXR3b3JrXTtcbiAgICAgICAgaWYgKHN0YW5kYXJkID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBzdGFuZGFyZC5uYW1lLFxuICAgICAgICAgICAgY2hhaW5JZDogc3RhbmRhcmQuY2hhaW5JZCxcbiAgICAgICAgICAgIGVuc0FkZHJlc3M6IHN0YW5kYXJkLmVuc0FkZHJlc3MsXG4gICAgICAgICAgICBfZGVmYXVsdFByb3ZpZGVyOiAoc3RhbmRhcmQuX2RlZmF1bHRQcm92aWRlciB8fCBudWxsKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBzdGFuZGFyZCA9IG5ldHdvcmtzW25ldHdvcmsubmFtZV07XG4gICAgLy8gTm90IGEgc3RhbmRhcmQgbmV0d29yazsgY2hlY2sgdGhhdCBpdCBpcyBhIHZhbGlkIG5ldHdvcmsgaW4gZ2VuZXJhbFxuICAgIGlmICghc3RhbmRhcmQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAobmV0d29yay5jaGFpbklkKSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgbmV0d29yayBjaGFpbklkXCIsIFwibmV0d29ya1wiLCBuZXR3b3JrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV0d29yaztcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBjaGFpbklkIG1hdGNoZXMgdGhlIGV4cGVjdGVkIG5ldHdvcmsgY2hhaW5JZCAob3IgaXMgMDsgZGlzYWJsZSBFSVAtMTU1KVxuICAgIGlmIChuZXR3b3JrLmNoYWluSWQgIT09IDAgJiYgbmV0d29yay5jaGFpbklkICE9PSBzdGFuZGFyZC5jaGFpbklkKSB7XG4gICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJuZXR3b3JrIGNoYWluSWQgbWlzbWF0Y2hcIiwgXCJuZXR3b3JrXCIsIG5ldHdvcmspO1xuICAgIH1cbiAgICAvLyBAVE9ETzogSW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBhZGQgYW4gYXR0YWNoIGZ1bmN0aW9uIHRvIGEgZGVmYXVsdFByb3ZpZGVyXG4gICAgLy8gY2xhc3MgYW5kIG1vdmUgdGhlIF9kZWZhdWx0UHJvdmlkZXIgaW50ZXJuYWwgdG8gdGhpcyBmaWxlIChleHRlbmQgTmV0d29yaylcbiAgICBsZXQgZGVmYXVsdFByb3ZpZGVyID0gbmV0d29yay5fZGVmYXVsdFByb3ZpZGVyIHx8IG51bGw7XG4gICAgaWYgKGRlZmF1bHRQcm92aWRlciA9PSBudWxsICYmIHN0YW5kYXJkLl9kZWZhdWx0UHJvdmlkZXIpIHtcbiAgICAgICAgaWYgKGlzUmVuZXR3b3JrYWJsZShzdGFuZGFyZC5fZGVmYXVsdFByb3ZpZGVyKSkge1xuICAgICAgICAgICAgZGVmYXVsdFByb3ZpZGVyID0gc3RhbmRhcmQuX2RlZmF1bHRQcm92aWRlci5yZW5ldHdvcmsobmV0d29yayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWZhdWx0UHJvdmlkZXIgPSBzdGFuZGFyZC5fZGVmYXVsdFByb3ZpZGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFN0YW5kYXJkIE5ldHdvcmsgKGFsbG93IG92ZXJyaWRpbmcgdGhlIEVOUyBhZGRyZXNzKVxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG5ldHdvcmsubmFtZSxcbiAgICAgICAgY2hhaW5JZDogc3RhbmRhcmQuY2hhaW5JZCxcbiAgICAgICAgZW5zQWRkcmVzczogKG5ldHdvcmsuZW5zQWRkcmVzcyB8fCBzdGFuZGFyZC5lbnNBZGRyZXNzIHx8IG51bGwpLFxuICAgICAgICBfZGVmYXVsdFByb3ZpZGVyOiBkZWZhdWx0UHJvdmlkZXJcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IGNvbnN0IHZlcnNpb24gPSBcInByb3ZpZGVycy81LjUuM1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X3ZlcnNpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEZvcmtFdmVudCwgUHJvdmlkZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYWJzdHJhY3QtcHJvdmlkZXJcIjtcbmltcG9ydCB7IEJhc2U1OCB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9iYXNleFwiO1xuaW1wb3J0IHsgQmlnTnVtYmVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2JpZ251bWJlclwiO1xuaW1wb3J0IHsgYXJyYXlpZnksIGNvbmNhdCwgaGV4Q29uY2F0LCBoZXhEYXRhTGVuZ3RoLCBoZXhEYXRhU2xpY2UsIGhleGxpZnksIGhleFZhbHVlLCBoZXhaZXJvUGFkLCBpc0hleFN0cmluZyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9ieXRlc1wiO1xuaW1wb3J0IHsgSGFzaFplcm8gfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBuYW1laGFzaCB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9oYXNoXCI7XG5pbXBvcnQgeyBnZXROZXR3b3JrIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L25ldHdvcmtzXCI7XG5pbXBvcnQgeyBkZWZpbmVSZWFkT25seSwgZ2V0U3RhdGljLCByZXNvbHZlUHJvcGVydGllcyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBzaGEyNTYgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3Qvc2hhMlwiO1xuaW1wb3J0IHsgdG9VdGY4Qnl0ZXMsIHRvVXRmOFN0cmluZyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9zdHJpbmdzXCI7XG5pbXBvcnQgeyBmZXRjaEpzb24sIHBvbGwgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3Qvd2ViXCI7XG5pbXBvcnQgYmVjaDMyIGZyb20gXCJiZWNoMzJcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9sb2dnZXJcIjtcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tIFwiLi9fdmVyc2lvblwiO1xuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcih2ZXJzaW9uKTtcbmltcG9ydCB7IEZvcm1hdHRlciB9IGZyb20gXCIuL2Zvcm1hdHRlclwiO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBFdmVudCBTZXJpYWxpemVpbmdcbmZ1bmN0aW9uIGNoZWNrVG9waWModG9waWMpIHtcbiAgICBpZiAodG9waWMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gXCJudWxsXCI7XG4gICAgfVxuICAgIGlmIChoZXhEYXRhTGVuZ3RoKHRvcGljKSAhPT0gMzIpIHtcbiAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgdG9waWNcIiwgXCJ0b3BpY1wiLCB0b3BpYyk7XG4gICAgfVxuICAgIHJldHVybiB0b3BpYy50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc2VyaWFsaXplVG9waWNzKHRvcGljcykge1xuICAgIC8vIFJlbW92ZSB0cmFpbGluZyBudWxsIEFORC10b3BpY3M7IHRoZXkgYXJlIHJlZHVuZGFudFxuICAgIHRvcGljcyA9IHRvcGljcy5zbGljZSgpO1xuICAgIHdoaWxlICh0b3BpY3MubGVuZ3RoID4gMCAmJiB0b3BpY3NbdG9waWNzLmxlbmd0aCAtIDFdID09IG51bGwpIHtcbiAgICAgICAgdG9waWNzLnBvcCgpO1xuICAgIH1cbiAgICByZXR1cm4gdG9waWNzLm1hcCgodG9waWMpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodG9waWMpKSB7XG4gICAgICAgICAgICAvLyBPbmx5IHRyYWNrIHVuaXF1ZSBPUi10b3BpY3NcbiAgICAgICAgICAgIGNvbnN0IHVuaXF1ZSA9IHt9O1xuICAgICAgICAgICAgdG9waWMuZm9yRWFjaCgodG9waWMpID0+IHtcbiAgICAgICAgICAgICAgICB1bmlxdWVbY2hlY2tUb3BpYyh0b3BpYyldID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gVGhlIG9yZGVyIG9mIE9SLXRvcGljcyBkb2VzIG5vdCBtYXR0ZXJcbiAgICAgICAgICAgIGNvbnN0IHNvcnRlZCA9IE9iamVjdC5rZXlzKHVuaXF1ZSk7XG4gICAgICAgICAgICBzb3J0ZWQuc29ydCgpO1xuICAgICAgICAgICAgcmV0dXJuIHNvcnRlZC5qb2luKFwifFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVja1RvcGljKHRvcGljKTtcbiAgICAgICAgfVxuICAgIH0pLmpvaW4oXCImXCIpO1xufVxuZnVuY3Rpb24gZGVzZXJpYWxpemVUb3BpY3MoZGF0YSkge1xuICAgIGlmIChkYXRhID09PSBcIlwiKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEuc3BsaXQoLyYvZykubWFwKCh0b3BpYykgPT4ge1xuICAgICAgICBpZiAodG9waWMgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wcyA9IHRvcGljLnNwbGl0KFwifFwiKS5tYXAoKHRvcGljKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKCh0b3BpYyA9PT0gXCJudWxsXCIpID8gbnVsbCA6IHRvcGljKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoKGNvbXBzLmxlbmd0aCA9PT0gMSkgPyBjb21wc1swXSA6IGNvbXBzKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldEV2ZW50VGFnKGV2ZW50TmFtZSkge1xuICAgIGlmICh0eXBlb2YgKGV2ZW50TmFtZSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZXZlbnROYW1lID0gZXZlbnROYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChoZXhEYXRhTGVuZ3RoKGV2ZW50TmFtZSkgPT09IDMyKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0eDpcIiArIGV2ZW50TmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lLmluZGV4T2YoXCI6XCIpID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50TmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGV2ZW50TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIFwiZmlsdGVyOio6XCIgKyBzZXJpYWxpemVUb3BpY3MoZXZlbnROYW1lKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoRm9ya0V2ZW50LmlzRm9ya0V2ZW50KGV2ZW50TmFtZSkpIHtcbiAgICAgICAgbG9nZ2VyLndhcm4oXCJub3QgaW1wbGVtZW50ZWRcIik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vdCBpbXBsZW1lbnRlZFwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnROYW1lICYmIHR5cGVvZiAoZXZlbnROYW1lKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gXCJmaWx0ZXI6XCIgKyAoZXZlbnROYW1lLmFkZHJlc3MgfHwgXCIqXCIpICsgXCI6XCIgKyBzZXJpYWxpemVUb3BpY3MoZXZlbnROYW1lLnRvcGljcyB8fCBbXSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgZXZlbnQgLSBcIiArIGV2ZW50TmFtZSk7XG59XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEhlbHBlciBPYmplY3RcbmZ1bmN0aW9uIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG59XG5mdW5jdGlvbiBzdGFsbChkdXJhdGlvbikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIGR1cmF0aW9uKTtcbiAgICB9KTtcbn1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUHJvdmlkZXIgT2JqZWN0XG4vKipcbiAqICBFdmVudFR5cGVcbiAqICAgLSBcImJsb2NrXCJcbiAqICAgLSBcInBvbGxcIlxuICogICAtIFwiZGlkUG9sbFwiXG4gKiAgIC0gXCJwZW5kaW5nXCJcbiAqICAgLSBcImVycm9yXCJcbiAqICAgLSBcIm5ldHdvcmtcIlxuICogICAtIGZpbHRlclxuICogICAtIHRvcGljcyBhcnJheVxuICogICAtIHRyYW5zYWN0aW9uIGhhc2hcbiAqL1xuY29uc3QgUG9sbGFibGVFdmVudHMgPSBbXCJibG9ja1wiLCBcIm5ldHdvcmtcIiwgXCJwZW5kaW5nXCIsIFwicG9sbFwiXTtcbmV4cG9ydCBjbGFzcyBFdmVudCB7XG4gICAgY29uc3RydWN0b3IodGFnLCBsaXN0ZW5lciwgb25jZSkge1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcInRhZ1wiLCB0YWcpO1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcImxpc3RlbmVyXCIsIGxpc3RlbmVyKTtcbiAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJvbmNlXCIsIG9uY2UpO1xuICAgIH1cbiAgICBnZXQgZXZlbnQoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwidHhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYXNoO1xuICAgICAgICAgICAgY2FzZSBcImZpbHRlclwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50YWc7XG4gICAgfVxuICAgIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YWcuc3BsaXQoXCI6XCIpWzBdO1xuICAgIH1cbiAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgY29uc3QgY29tcHMgPSB0aGlzLnRhZy5zcGxpdChcIjpcIik7XG4gICAgICAgIGlmIChjb21wc1swXSAhPT0gXCJ0eFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcHNbMV07XG4gICAgfVxuICAgIGdldCBmaWx0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy50YWcuc3BsaXQoXCI6XCIpO1xuICAgICAgICBpZiAoY29tcHNbMF0gIT09IFwiZmlsdGVyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBjb21wc1sxXTtcbiAgICAgICAgY29uc3QgdG9waWNzID0gZGVzZXJpYWxpemVUb3BpY3MoY29tcHNbMl0pO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSB7fTtcbiAgICAgICAgaWYgKHRvcGljcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWx0ZXIudG9waWNzID0gdG9waWNzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhZGRyZXNzICYmIGFkZHJlc3MgIT09IFwiKlwiKSB7XG4gICAgICAgICAgICBmaWx0ZXIuYWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcbiAgICB9XG4gICAgcG9sbGFibGUoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50YWcuaW5kZXhPZihcIjpcIikgPj0gMCB8fCBQb2xsYWJsZUV2ZW50cy5pbmRleE9mKHRoaXMudGFnKSA+PSAwKTtcbiAgICB9XG59XG47XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc2F0b3NoaWxhYnMvc2xpcHMvYmxvYi9tYXN0ZXIvc2xpcC0wMDQ0Lm1kXG5jb25zdCBjb2luSW5mb3MgPSB7XG4gICAgXCIwXCI6IHsgc3ltYm9sOiBcImJ0Y1wiLCBwMnBraDogMHgwMCwgcDJzaDogMHgwNSwgcHJlZml4OiBcImJjXCIgfSxcbiAgICBcIjJcIjogeyBzeW1ib2w6IFwibHRjXCIsIHAycGtoOiAweDMwLCBwMnNoOiAweDMyLCBwcmVmaXg6IFwibHRjXCIgfSxcbiAgICBcIjNcIjogeyBzeW1ib2w6IFwiZG9nZVwiLCBwMnBraDogMHgxZSwgcDJzaDogMHgxNiB9LFxuICAgIFwiNjBcIjogeyBzeW1ib2w6IFwiZXRoXCIsIGlsazogXCJldGhcIiB9LFxuICAgIFwiNjFcIjogeyBzeW1ib2w6IFwiZXRjXCIsIGlsazogXCJldGhcIiB9LFxuICAgIFwiNzAwXCI6IHsgc3ltYm9sOiBcInhkYWlcIiwgaWxrOiBcImV0aFwiIH0sXG59O1xuZnVuY3Rpb24gYnl0ZXMzMmlmeSh2YWx1ZSkge1xuICAgIHJldHVybiBoZXhaZXJvUGFkKEJpZ051bWJlci5mcm9tKHZhbHVlKS50b0hleFN0cmluZygpLCAzMik7XG59XG4vLyBDb21wdXRlIHRoZSBCYXNlNThDaGVjayBlbmNvZGVkIGRhdGEgKGNoZWNrc3VtIGlzIGZpcnN0IDQgYnl0ZXMgb2Ygc2hhMjU2ZClcbmZ1bmN0aW9uIGJhc2U1OEVuY29kZShkYXRhKSB7XG4gICAgcmV0dXJuIEJhc2U1OC5lbmNvZGUoY29uY2F0KFtkYXRhLCBoZXhEYXRhU2xpY2Uoc2hhMjU2KHNoYTI1NihkYXRhKSksIDAsIDQpXSkpO1xufVxuY29uc3QgbWF0Y2hlcklwZnMgPSBuZXcgUmVnRXhwKFwiXihpcGZzKTovXFwvKC4qKSRcIiwgXCJpXCIpO1xuY29uc3QgbWF0Y2hlcnMgPSBbXG4gICAgbmV3IFJlZ0V4cChcIl4oaHR0cHMpOi9cXC8oLiopJFwiLCBcImlcIiksXG4gICAgbmV3IFJlZ0V4cChcIl4oZGF0YSk6KC4qKSRcIiwgXCJpXCIpLFxuICAgIG1hdGNoZXJJcGZzLFxuICAgIG5ldyBSZWdFeHAoXCJeZWlwMTU1OlswLTldKy8oZXJjWzAtOV0rKTooLiopJFwiLCBcImlcIiksXG5dO1xuZnVuY3Rpb24gX3BhcnNlU3RyaW5nKHJlc3VsdCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0b1V0ZjhTdHJpbmcoX3BhcnNlQnl0ZXMocmVzdWx0KSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBfcGFyc2VCeXRlcyhyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0ID09PSBcIjB4XCIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG9mZnNldCA9IEJpZ051bWJlci5mcm9tKGhleERhdGFTbGljZShyZXN1bHQsIDAsIDMyKSkudG9OdW1iZXIoKTtcbiAgICBjb25zdCBsZW5ndGggPSBCaWdOdW1iZXIuZnJvbShoZXhEYXRhU2xpY2UocmVzdWx0LCBvZmZzZXQsIG9mZnNldCArIDMyKSkudG9OdW1iZXIoKTtcbiAgICByZXR1cm4gaGV4RGF0YVNsaWNlKHJlc3VsdCwgb2Zmc2V0ICsgMzIsIG9mZnNldCArIDMyICsgbGVuZ3RoKTtcbn1cbi8vIFRyaW0gb2ZmIHRoZSBpcGZzOi8vIHByZWZpeCBhbmQgcmV0dXJuIHRoZSBkZWZhdWx0IGdhdGV3YXkgVVJMXG5mdW5jdGlvbiBnZXRJcGZzTGluayhsaW5rKSB7XG4gICAgaWYgKGxpbmsubWF0Y2goL15pcGZzOlxcL1xcL2lwZnNcXC8vaSkpIHtcbiAgICAgICAgbGluayA9IGxpbmsuc3Vic3RyaW5nKDEyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobGluay5tYXRjaCgvXmlwZnM6XFwvXFwvL2kpKSB7XG4gICAgICAgIGxpbmsgPSBsaW5rLnN1YnN0cmluZyg3KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJ1bnN1cHBvcnRlZCBJUEZTIGZvcm1hdFwiLCBcImxpbmtcIiwgbGluayk7XG4gICAgfVxuICAgIHJldHVybiBgaHR0cHM6L1xcL2dhdGV3YXkuaXBmcy5pby9pcGZzLyR7bGlua31gO1xufVxuZXhwb3J0IGNsYXNzIFJlc29sdmVyIHtcbiAgICAvLyBUaGUgcmVzb2x2ZWRBZGRyZXNzIGlzIG9ubHkgZm9yIGNyZWF0aW5nIGEgUmV2ZXJzZUxvb2t1cCByZXNvbHZlclxuICAgIGNvbnN0cnVjdG9yKHByb3ZpZGVyLCBhZGRyZXNzLCBuYW1lLCByZXNvbHZlZEFkZHJlc3MpIHtcbiAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJwcm92aWRlclwiLCBwcm92aWRlcik7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwibmFtZVwiLCBuYW1lKTtcbiAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJhZGRyZXNzXCIsIHByb3ZpZGVyLmZvcm1hdHRlci5hZGRyZXNzKGFkZHJlc3MpKTtcbiAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJfcmVzb2x2ZWRBZGRyZXNzXCIsIHJlc29sdmVkQWRkcmVzcyk7XG4gICAgfVxuICAgIF9mZXRjaEJ5dGVzKHNlbGVjdG9yLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBlLmcuIGtlY2NhazI1NihcImFkZHIoYnl0ZXMzMix1aW50MjU2KVwiKVxuICAgICAgICAgICAgY29uc3QgdHggPSB7XG4gICAgICAgICAgICAgICAgdG86IHRoaXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBkYXRhOiBoZXhDb25jYXQoW3NlbGVjdG9yLCBuYW1laGFzaCh0aGlzLm5hbWUpLCAocGFyYW1ldGVycyB8fCBcIjB4XCIpXSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcGFyc2VCeXRlcyh5aWVsZCB0aGlzLnByb3ZpZGVyLmNhbGwodHgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSBMb2dnZXIuZXJyb3JzLkNBTExfRVhDRVBUSU9OKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRBZGRyZXNzKGNvaW5UeXBlLCBoZXhCeXRlcykge1xuICAgICAgICBjb25zdCBjb2luSW5mbyA9IGNvaW5JbmZvc1tTdHJpbmcoY29pblR5cGUpXTtcbiAgICAgICAgaWYgKGNvaW5JbmZvID09IG51bGwpIHtcbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKGB1bnN1cHBvcnRlZCBjb2luIHR5cGU6ICR7Y29pblR5cGV9YCwgTG9nZ2VyLmVycm9ycy5VTlNVUFBPUlRFRF9PUEVSQVRJT04sIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IGBnZXRBZGRyZXNzKCR7Y29pblR5cGV9KWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2luSW5mby5pbGsgPT09IFwiZXRoXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVyLmZvcm1hdHRlci5hZGRyZXNzKGhleEJ5dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBieXRlcyA9IGFycmF5aWZ5KGhleEJ5dGVzKTtcbiAgICAgICAgLy8gUDJQS0g6IE9QX0RVUCBPUF9IQVNIMTYwIDxwdWJLZXlIYXNoPiBPUF9FUVVBTFZFUklGWSBPUF9DSEVDS1NJR1xuICAgICAgICBpZiAoY29pbkluZm8ucDJwa2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcDJwa2ggPSBoZXhCeXRlcy5tYXRjaCgvXjB4NzZhOShbMC05YS1mXVswLTlhLWZdKShbMC05YS1mXSopODhhYyQvKTtcbiAgICAgICAgICAgIGlmIChwMnBraCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHBhcnNlSW50KHAycGtoWzFdLCAxNik7XG4gICAgICAgICAgICAgICAgaWYgKHAycGtoWzJdLmxlbmd0aCA9PT0gbGVuZ3RoICogMiAmJiBsZW5ndGggPj0gMSAmJiBsZW5ndGggPD0gNzUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhc2U1OEVuY29kZShjb25jYXQoW1tjb2luSW5mby5wMnBraF0sIChcIjB4XCIgKyBwMnBraFsyXSldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFAyU0g6IE9QX0hBU0gxNjAgPHNjcmlwdEhhc2g+IE9QX0VRVUFMXG4gICAgICAgIGlmIChjb2luSW5mby5wMnNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHAyc2ggPSBoZXhCeXRlcy5tYXRjaCgvXjB4YTkoWzAtOWEtZl1bMC05YS1mXSkoWzAtOWEtZl0qKTg3JC8pO1xuICAgICAgICAgICAgaWYgKHAyc2gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBwYXJzZUludChwMnNoWzFdLCAxNik7XG4gICAgICAgICAgICAgICAgaWYgKHAyc2hbMl0ubGVuZ3RoID09PSBsZW5ndGggKiAyICYmIGxlbmd0aCA+PSAxICYmIGxlbmd0aCA8PSA3NSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFzZTU4RW5jb2RlKGNvbmNhdChbW2NvaW5JbmZvLnAyc2hdLCAoXCIweFwiICsgcDJzaFsyXSldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEJlY2gzMlxuICAgICAgICBpZiAoY29pbkluZm8ucHJlZml4ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGJ5dGVzWzFdO1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JpdGNvaW4vYmlwcy9ibG9iL21hc3Rlci9iaXAtMDE0MS5tZWRpYXdpa2kjd2l0bmVzcy1wcm9ncmFtXG4gICAgICAgICAgICBsZXQgdmVyc2lvbiA9IGJ5dGVzWzBdO1xuICAgICAgICAgICAgaWYgKHZlcnNpb24gPT09IDB4MDApIHtcbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoICE9PSAyMCAmJiBsZW5ndGggIT09IDMyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmVyc2lvbiA+PSAwICYmIGJ5dGVzLmxlbmd0aCA9PT0gMiArIGxlbmd0aCAmJiBsZW5ndGggPj0gMSAmJiBsZW5ndGggPD0gNzUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3b3JkcyA9IGJlY2gzMi50b1dvcmRzKGJ5dGVzLnNsaWNlKDIpKTtcbiAgICAgICAgICAgICAgICB3b3Jkcy51bnNoaWZ0KHZlcnNpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiBiZWNoMzIuZW5jb2RlKGNvaW5JbmZvLnByZWZpeCwgd29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBnZXRBZGRyZXNzKGNvaW5UeXBlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoY29pblR5cGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvaW5UeXBlID0gNjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBFdGhlcmV1bSwgdXNlIHRoZSBzdGFuZGFyZCBgYWRkcihieXRlczMyKWBcbiAgICAgICAgICAgIGlmIChjb2luVHlwZSA9PT0gNjApIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBrZWNjYWsyNTYoXCJhZGRyKGJ5dGVzMzIpXCIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG86IHRoaXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IChcIjB4M2IzYjU3ZGVcIiArIG5hbWVoYXNoKHRoaXMubmFtZSkuc3Vic3RyaW5nKDIpKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZXhCeXRlcyA9IHlpZWxkIHRoaXMucHJvdmlkZXIuY2FsbCh0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhleEJ5dGVzID09PSBcIjB4XCIgfHwgaGV4Qnl0ZXMgPT09IEhhc2haZXJvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlci5mb3JtYXR0ZXIuY2FsbEFkZHJlc3MoaGV4Qnl0ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IExvZ2dlci5lcnJvcnMuQ0FMTF9FWENFUFRJT04pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGtlY2NhazI1NihcImFkZHIoYnl0ZXMzMix1aW50MjU2XCIpXG4gICAgICAgICAgICBjb25zdCBoZXhCeXRlcyA9IHlpZWxkIHRoaXMuX2ZldGNoQnl0ZXMoXCIweGYxY2I3ZTA2XCIsIGJ5dGVzMzJpZnkoY29pblR5cGUpKTtcbiAgICAgICAgICAgIC8vIE5vIGFkZHJlc3NcbiAgICAgICAgICAgIGlmIChoZXhCeXRlcyA9PSBudWxsIHx8IGhleEJ5dGVzID09PSBcIjB4XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIGFkZHJlc3NcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSB0aGlzLl9nZXRBZGRyZXNzKGNvaW5UeXBlLCBoZXhCeXRlcyk7XG4gICAgICAgICAgICBpZiAoYWRkcmVzcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoYGludmFsaWQgb3IgdW5zdXBwb3J0ZWQgY29pbiBkYXRhYCwgTG9nZ2VyLmVycm9ycy5VTlNVUFBPUlRFRF9PUEVSQVRJT04sIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBgZ2V0QWRkcmVzcygke2NvaW5UeXBlfSlgLFxuICAgICAgICAgICAgICAgICAgICBjb2luVHlwZTogY29pblR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGhleEJ5dGVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWRkcmVzcztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEF2YXRhcigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmthZ2UgPSBbeyB0eXBlOiBcIm5hbWVcIiwgY29udGVudDogdGhpcy5uYW1lIH1dO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyB0ZXN0IGRhdGEgZm9yIHJpY21vby5ldGhcbiAgICAgICAgICAgICAgICAvL2NvbnN0IGF2YXRhciA9IFwiZWlwMTU1OjEvZXJjNzIxOjB4MjY1Mzg1YzdmNDEzMjIyOEEwZDU0RUIxQTllNzQ2MGI5MWMwY0M2OC8yOTIzM1wiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF2YXRhciA9IHlpZWxkIHRoaXMuZ2V0VGV4dChcImF2YXRhclwiKTtcbiAgICAgICAgICAgICAgICBpZiAoYXZhdGFyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBhdmF0YXIubWF0Y2gobWF0Y2hlcnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NoZW1lID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzY2hlbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJodHRwc1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmthZ2UucHVzaCh7IHR5cGU6IFwidXJsXCIsIGNvbnRlbnQ6IGF2YXRhciB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBsaW5rYWdlLCB1cmw6IGF2YXRhciB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRhdGFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rYWdlLnB1c2goeyB0eXBlOiBcImRhdGFcIiwgY29udGVudDogYXZhdGFyIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGxpbmthZ2UsIHVybDogYXZhdGFyIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaXBmc1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmthZ2UucHVzaCh7IHR5cGU6IFwiaXBmc1wiLCBjb250ZW50OiBhdmF0YXIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbGlua2FnZSwgdXJsOiBnZXRJcGZzTGluayhhdmF0YXIpIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZXJjNzIxXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZXJjMTE1NVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVwZW5kaW5nIG9uIHRoZSBFUkMgdHlwZSwgdXNlIHRva2VuVVJJKHVpbnQyNTYpIG9yIHVybCh1aW50MjU2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gKHNjaGVtZSA9PT0gXCJlcmM3MjFcIikgPyBcIjB4Yzg3YjU2ZGRcIiA6IFwiMHgwZTg5MzQxY1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmthZ2UucHVzaCh7IHR5cGU6IHNjaGVtZSwgY29udGVudDogYXZhdGFyIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBvd25lciBvZiB0aGlzIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvd25lciA9ICh0aGlzLl9yZXNvbHZlZEFkZHJlc3MgfHwgKHlpZWxkIHRoaXMuZ2V0QWRkcmVzcygpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHMgPSAobWF0Y2hbMl0gfHwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wcy5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZHIgPSB5aWVsZCB0aGlzLnByb3ZpZGVyLmZvcm1hdHRlci5hZGRyZXNzKGNvbXBzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbklkID0gaGV4WmVyb1BhZChCaWdOdW1iZXIuZnJvbShjb21wc1sxXSkudG9IZXhTdHJpbmcoKSwgMzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgdGhpcyBhY2NvdW50IG93bnMgdGhlIHRva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVtZSA9PT0gXCJlcmM3MjFcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvd25lck9mKHVpbnQyNTYgdG9rZW5JZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9rZW5Pd25lciA9IHRoaXMucHJvdmlkZXIuZm9ybWF0dGVyLmNhbGxBZGRyZXNzKHlpZWxkIHRoaXMucHJvdmlkZXIuY2FsbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogYWRkciwgZGF0YTogaGV4Q29uY2F0KFtcIjB4NjM1MjIxMWVcIiwgdG9rZW5JZF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG93bmVyICE9PSB0b2tlbk93bmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rYWdlLnB1c2goeyB0eXBlOiBcIm93bmVyXCIsIGNvbnRlbnQ6IHRva2VuT3duZXIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNjaGVtZSA9PT0gXCJlcmMxMTU1XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFsYW5jZU9mKGFkZHJlc3Mgb3duZXIsIHVpbnQyNTYgdG9rZW5JZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFsYW5jZSA9IEJpZ051bWJlci5mcm9tKHlpZWxkIHRoaXMucHJvdmlkZXIuY2FsbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogYWRkciwgZGF0YTogaGV4Q29uY2F0KFtcIjB4MDBmZGQ1OGVcIiwgaGV4WmVyb1BhZChvd25lciwgMzIpLCB0b2tlbklkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFsYW5jZS5pc1plcm8oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua2FnZS5wdXNoKHsgdHlwZTogXCJiYWxhbmNlXCIsIGNvbnRlbnQ6IGJhbGFuY2UudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgdG9rZW4gY29udHJhY3QgZm9yIHRoZSBtZXRhZGF0YSBVUkxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHRoaXMucHJvdmlkZXIuZm9ybWF0dGVyLmFkZHJlc3MoY29tcHNbMF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBoZXhDb25jYXQoW3NlbGVjdG9yLCB0b2tlbklkXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXRhZGF0YVVybCA9IF9wYXJzZVN0cmluZyh5aWVsZCB0aGlzLnByb3ZpZGVyLmNhbGwodHgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWV0YWRhdGFVcmwgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua2FnZS5wdXNoKHsgdHlwZTogXCJtZXRhZGF0YS11cmwtYmFzZVwiLCBjb250ZW50OiBtZXRhZGF0YVVybCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFUkMtMTE1NSBhbGxvd3MgYSBnZW5lcmljIHtpZH0gaW4gdGhlIFVSTFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY2hlbWUgPT09IFwiZXJjMTE1NVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhVXJsID0gbWV0YWRhdGFVcmwucmVwbGFjZShcIntpZH1cIiwgdG9rZW5JZC5zdWJzdHJpbmcoMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rYWdlLnB1c2goeyB0eXBlOiBcIm1ldGFkYXRhLXVybC1leHBhbmRlZFwiLCBjb250ZW50OiBtZXRhZGF0YVVybCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJhbnNmb3JtIElQRlMgbWV0YWRhdGEgbGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWV0YWRhdGFVcmwubWF0Y2goL15pcGZzOi9pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YVVybCA9IGdldElwZnNMaW5rKG1ldGFkYXRhVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua2FnZS5wdXNoKHsgdHlwZTogXCJtZXRhZGF0YS11cmxcIiwgY29udGVudDogbWV0YWRhdGFVcmwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSB0b2tlbiBtZXRhZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0geWllbGQgZmV0Y2hKc29uKG1ldGFkYXRhVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rYWdlLnB1c2goeyB0eXBlOiBcIm1ldGFkYXRhXCIsIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KG1ldGFkYXRhKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQdWxsIHRoZSBpbWFnZSBVUkwgb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlVXJsID0gbWV0YWRhdGEuaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoaW1hZ2VVcmwpICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VVcmwubWF0Y2goL14oaHR0cHM6XFwvXFwvfGRhdGE6KS9pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJhbnNmb3JtIElQRlMgbGluayB0byBnYXRld2F5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlwZnMgPSBpbWFnZVVybC5tYXRjaChtYXRjaGVySXBmcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpcGZzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmthZ2UucHVzaCh7IHR5cGU6IFwidXJsLWlwZnNcIiwgY29udGVudDogaW1hZ2VVcmwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsID0gZ2V0SXBmc0xpbmsoaW1hZ2VVcmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rYWdlLnB1c2goeyB0eXBlOiBcInVybFwiLCBjb250ZW50OiBpbWFnZVVybCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBsaW5rYWdlLCB1cmw6IGltYWdlVXJsIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHsgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDb250ZW50SGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIC8vIGtlY2NhazI1NihcImNvbnRlbnRoYXNoKClcIilcbiAgICAgICAgICAgIGNvbnN0IGhleEJ5dGVzID0geWllbGQgdGhpcy5fZmV0Y2hCeXRlcyhcIjB4YmMxYzU4ZDFcIik7XG4gICAgICAgICAgICAvLyBObyBjb250ZW50aGFzaFxuICAgICAgICAgICAgaWYgKGhleEJ5dGVzID09IG51bGwgfHwgaGV4Qnl0ZXMgPT09IFwiMHhcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSVBGUyAoQ0lEOiAxLCBUeXBlOiBEQUctUEIpXG4gICAgICAgICAgICBjb25zdCBpcGZzID0gaGV4Qnl0ZXMubWF0Y2goL14weGUzMDEwMTcwKChbMC05YS1mXVswLTlhLWZdKShbMC05YS1mXVswLTlhLWZdKShbMC05YS1mXSopKSQvKTtcbiAgICAgICAgICAgIGlmIChpcGZzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gcGFyc2VJbnQoaXBmc1szXSwgMTYpO1xuICAgICAgICAgICAgICAgIGlmIChpcGZzWzRdLmxlbmd0aCA9PT0gbGVuZ3RoICogMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJpcGZzOi9cXC9cIiArIEJhc2U1OC5lbmNvZGUoXCIweFwiICsgaXBmc1sxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3dhcm0gKENJRDogMSwgVHlwZTogc3dhcm0tbWFuaWZlc3Q7IGhhc2gvbGVuZ3RoIGhhcmQtY29kZWQgdG8ga2VjY2FrMjU2LzMyKVxuICAgICAgICAgICAgY29uc3Qgc3dhcm0gPSBoZXhCeXRlcy5tYXRjaCgvXjB4ZTQwMTAxZmEwMTFiMjAoWzAtOWEtZl0qKSQvKTtcbiAgICAgICAgICAgIGlmIChzd2FybSkge1xuICAgICAgICAgICAgICAgIGlmIChzd2FybVsxXS5sZW5ndGggPT09ICgzMiAqIDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImJ6ejovXFwvXCIgKyBzd2FybVsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbG9nZ2VyLnRocm93RXJyb3IoYGludmFsaWQgb3IgdW5zdXBwb3J0ZWQgY29udGVudCBoYXNoIGRhdGFgLCBMb2dnZXIuZXJyb3JzLlVOU1VQUE9SVEVEX09QRVJBVElPTiwge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogXCJnZXRDb250ZW50SGFzaCgpXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogaGV4Qnl0ZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0VGV4dChrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIC8vIFRoZSBrZXkgZW5jb2RlZCBhcyBwYXJhbWV0ZXIgdG8gZmV0Y2hCeXRlc1xuICAgICAgICAgICAgbGV0IGtleUJ5dGVzID0gdG9VdGY4Qnl0ZXMoa2V5KTtcbiAgICAgICAgICAgIC8vIFRoZSBub2RlaGFzaCBjb25zdW1lcyB0aGUgZmlyc3Qgc2xvdCwgc28gdGhlIHN0cmluZyBwb2ludGVyIHRhcmdldHNcbiAgICAgICAgICAgIC8vIG9mZnNldCA2NCwgd2l0aCB0aGUgbGVuZ3RoIGF0IG9mZnNldCA2NCBhbmQgZGF0YSBzdGFydGluZyBhdCBvZmZzZXQgOTZcbiAgICAgICAgICAgIGtleUJ5dGVzID0gY29uY2F0KFtieXRlczMyaWZ5KDY0KSwgYnl0ZXMzMmlmeShrZXlCeXRlcy5sZW5ndGgpLCBrZXlCeXRlc10pO1xuICAgICAgICAgICAgLy8gUGFkIHRvIHdvcmQtc2l6ZSAoMzIgYnl0ZXMpXG4gICAgICAgICAgICBpZiAoKGtleUJ5dGVzLmxlbmd0aCAlIDMyKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGtleUJ5dGVzID0gY29uY2F0KFtrZXlCeXRlcywgaGV4WmVyb1BhZChcIjB4XCIsIDMyIC0gKGtleS5sZW5ndGggJSAzMikpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoZXhCeXRlcyA9IHlpZWxkIHRoaXMuX2ZldGNoQnl0ZXMoXCIweDU5ZDFkNDNjXCIsIGhleGxpZnkoa2V5Qnl0ZXMpKTtcbiAgICAgICAgICAgIGlmIChoZXhCeXRlcyA9PSBudWxsIHx8IGhleEJ5dGVzID09PSBcIjB4XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b1V0ZjhTdHJpbmcoaGV4Qnl0ZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5sZXQgZGVmYXVsdEZvcm1hdHRlciA9IG51bGw7XG5sZXQgbmV4dFBvbGxJZCA9IDE7XG5leHBvcnQgY2xhc3MgQmFzZVByb3ZpZGVyIGV4dGVuZHMgUHJvdmlkZXIge1xuICAgIC8qKlxuICAgICAqICByZWFkeVxuICAgICAqXG4gICAgICogIEEgUHJvbWlzZTxOZXR3b3JrPiB0aGF0IHJlc29sdmVzIG9ubHkgb25jZSB0aGUgcHJvdmlkZXIgaXMgcmVhZHkuXG4gICAgICpcbiAgICAgKiAgU3ViLWNsYXNzZXMgdGhhdCBjYWxsIHRoZSBzdXBlciB3aXRoIGEgbmV0d29yayB3aXRob3V0IGEgY2hhaW5JZFxuICAgICAqICBNVVNUIHNldCB0aGlzLiBTdGFuZGFyZCBuYW1lZCBuZXR3b3JrcyBoYXZlIGEga25vd24gY2hhaW5JZC5cbiAgICAgKlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5ldHdvcmspIHtcbiAgICAgICAgbG9nZ2VyLmNoZWNrTmV3KG5ldy50YXJnZXQsIFByb3ZpZGVyKTtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy8gRXZlbnRzIGJlaW5nIGxpc3RlbmVkIHRvXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLl9lbWl0dGVkID0geyBibG9jazogLTIgfTtcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXIgPSBuZXcudGFyZ2V0LmdldEZvcm1hdHRlcigpO1xuICAgICAgICAvLyBJZiBuZXR3b3JrIGlzIGFueSwgdGhpcyBQcm92aWRlciBhbGxvd3MgdGhlIHVuZGVybHlpbmdcbiAgICAgICAgLy8gbmV0d29yayB0byBjaGFuZ2UgZHluYW1pY2FsbHksIGFuZCB3ZSBhdXRvLWRldGVjdCB0aGVcbiAgICAgICAgLy8gY3VycmVudCBuZXR3b3JrXG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiYW55TmV0d29ya1wiLCAobmV0d29yayA9PT0gXCJhbnlcIikpO1xuICAgICAgICBpZiAodGhpcy5hbnlOZXR3b3JrKSB7XG4gICAgICAgICAgICBuZXR3b3JrID0gdGhpcy5kZXRlY3ROZXR3b3JrKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ldHdvcmsgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9uZXR3b3JrUHJvbWlzZSA9IG5ldHdvcms7XG4gICAgICAgICAgICAvLyBTcXVhc2ggYW55IFwidW5oYW5kbGVkIHByb21pc2VcIiBlcnJvcnM7IHRoYXQgZG8gbm90IG5lZWQgdG8gYmUgaGFuZGxlZFxuICAgICAgICAgICAgbmV0d29yay5jYXRjaCgoZXJyb3IpID0+IHsgfSk7XG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGluaXRpYWwgbmV0d29yayBzZXR0aW5nIChhc3luYylcbiAgICAgICAgICAgIHRoaXMuX3JlYWR5KCkuY2F0Y2goKGVycm9yKSA9PiB7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qga25vd25OZXR3b3JrID0gZ2V0U3RhdGljKG5ldy50YXJnZXQsIFwiZ2V0TmV0d29ya1wiKShuZXR3b3JrKTtcbiAgICAgICAgICAgIGlmIChrbm93bk5ldHdvcmspIHtcbiAgICAgICAgICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcIl9uZXR3b3JrXCIsIGtub3duTmV0d29yayk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwibmV0d29ya1wiLCBrbm93bk5ldHdvcmssIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgbmV0d29ya1wiLCBcIm5ldHdvcmtcIiwgbmV0d29yayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWF4SW50ZXJuYWxCbG9ja051bWJlciA9IC0xMDI0O1xuICAgICAgICB0aGlzLl9sYXN0QmxvY2tOdW1iZXIgPSAtMjtcbiAgICAgICAgdGhpcy5fcG9sbGluZ0ludGVydmFsID0gNDAwMDtcbiAgICAgICAgdGhpcy5fZmFzdFF1ZXJ5RGF0ZSA9IDA7XG4gICAgfVxuICAgIF9yZWFkeSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9uZXR3b3JrID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV0d29yayA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX25ldHdvcmtQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrID0geWllbGQgdGhpcy5fbmV0d29ya1Byb21pc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVHJ5IHRoZSBQcm92aWRlcidzIG5ldHdvcmsgZGV0ZWN0aW9uICh0aGlzIE1VU1QgdGhyb3cgaWYgaXQgY2Fubm90KVxuICAgICAgICAgICAgICAgIGlmIChuZXR3b3JrID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV0d29yayA9IHlpZWxkIHRoaXMuZGV0ZWN0TmV0d29yaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW47IGV2ZXJ5IFByb3ZpZGVyIHN1Yi1jbGFzcyBzaG91bGQgaGF2ZVxuICAgICAgICAgICAgICAgIC8vIHN1Z2dlc3RlZCBhIG5ldHdvcmsgYnkgaGVyZSAob3IgaGF2ZSB0aHJvd24pLlxuICAgICAgICAgICAgICAgIGlmICghbmV0d29yaykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihcIm5vIG5ldHdvcmsgZGV0ZWN0ZWRcIiwgTG9nZ2VyLmVycm9ycy5VTktOT1dOX0VSUk9SLCB7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFBvc3NpYmxlIHRoaXMgY2FsbCBzdGFja2VkIHNvIGRvIG5vdCBjYWxsIGRlZmluZVJlYWRPbmx5IGFnYWluXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX25ldHdvcmsgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbnlOZXR3b3JrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9uZXR3b3JrID0gbmV0d29yaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiX25ldHdvcmtcIiwgbmV0d29yayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwibmV0d29ya1wiLCBuZXR3b3JrLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmV0d29yaztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCBhbHdheXMgcmV0dXJuIHRoZSBtb3N0IHJlY2VudGx5IGVzdGFibGlzaGVkIG5ldHdvcmsuXG4gICAgLy8gRm9yIFwiYW55XCIsIHRoaXMgY2FuIGNoYW5nZSAoYSBcIm5ldHdvcmtcIiBldmVudCBpcyBlbWl0dGVkIGJlZm9yZVxuICAgIC8vIGFueSBjaGFuZ2UgaXMgcmVmbGVjdGVkKTsgb3RoZXJ3aXNlIHRoaXMgY2Fubm90IGNoYW5nZVxuICAgIGdldCByZWFkeSgpIHtcbiAgICAgICAgcmV0dXJuIHBvbGwoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWR5KCkudGhlbigobmV0d29yaykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXR3b3JrO1xuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIG5ldHdvcmsgaXNuJ3QgcnVubmluZyB5ZXQsIHdlIHdpbGwgd2FpdFxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSBMb2dnZXIuZXJyb3JzLk5FVFdPUktfRVJST1IgJiYgZXJyb3IuZXZlbnQgPT09IFwibm9OZXR3b3JrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEBUT0RPOiBSZW1vdmUgdGhpcyBhbmQganVzdCBjcmVhdGUgYSBzaW5nbGV0b24gZm9ybWF0dGVyXG4gICAgc3RhdGljIGdldEZvcm1hdHRlcigpIHtcbiAgICAgICAgaWYgKGRlZmF1bHRGb3JtYXR0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgZGVmYXVsdEZvcm1hdHRlciA9IG5ldyBGb3JtYXR0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmYXVsdEZvcm1hdHRlcjtcbiAgICB9XG4gICAgLy8gQFRPRE86IFJlbW92ZSB0aGlzIGFuZCBqdXN0IHVzZSBnZXROZXR3b3JrXG4gICAgc3RhdGljIGdldE5ldHdvcmsobmV0d29yaykge1xuICAgICAgICByZXR1cm4gZ2V0TmV0d29yaygobmV0d29yayA9PSBudWxsKSA/IFwiaG9tZXN0ZWFkXCIgOiBuZXR3b3JrKTtcbiAgICB9XG4gICAgLy8gRmV0Y2hlcyB0aGUgYmxvY2tOdW1iZXIsIGJ1dCB3aWxsIHJldXNlIGFueSByZXN1bHQgdGhhdCBpcyBsZXNzXG4gICAgLy8gdGhhbiBtYXhBZ2Ugb2xkIG9yIGhhcyBiZWVuIHJlcXVlc3RlZCBzaW5jZSB0aGUgbGFzdCByZXF1ZXN0XG4gICAgX2dldEludGVybmFsQmxvY2tOdW1iZXIobWF4QWdlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCB0aGlzLl9yZWFkeSgpO1xuICAgICAgICAgICAgLy8gQWxsb3dpbmcgc3RhbGUgZGF0YSB1cCB0byBtYXhBZ2Ugb2xkXG4gICAgICAgICAgICBpZiAobWF4QWdlID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIFdoaWxlIHRoZXJlIGFyZSBwZW5kaW5nIGludGVybmFsIGJsb2NrIHJlcXVlc3RzLi4uXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuX2ludGVybmFsQmxvY2tOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gLi4uXCJyZW1lbWJlclwiIHdoaWNoIGZldGNoIHdlIHN0YXJ0ZWQgd2l0aFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnRlcm5hbEJsb2NrTnVtYmVyID0gdGhpcy5faW50ZXJuYWxCbG9ja051bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRoZSByZXN1bHQgaXMgbm90IHRvbyBzdGFsZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgaW50ZXJuYWxCbG9ja051bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZ2V0VGltZSgpIC0gcmVzdWx0LnJlc3BUaW1lKSA8PSBtYXhBZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmJsb2NrTnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG9vIG9sZDsgZmV0Y2ggYSBuZXcgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGZldGNoIHJlamVjdGVkOyBpZiB3ZSBhcmUgdGhlIGZpcnN0IHRvIGdldCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlamVjdGlvbiwgZHJvcCB0aHJvdWdoIHNvIHdlIHJlcGxhY2UgaXQgd2l0aCBhIG5ld1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmV0Y2g7IGFsbCBvdGhlcnMgYmxvY2tlZCB3aWxsIHRoZW4gZ2V0IHRoYXQgZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoaWNoIHdvbid0IG1hdGNoIHRoZSBvbmUgdGhleSBcInJlbWVtYmVyZWRcIiBhbmQgbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2ludGVybmFsQmxvY2tOdW1iZXIgPT09IGludGVybmFsQmxvY2tOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcVRpbWUgPSBnZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBjaGVja0ludGVybmFsQmxvY2tOdW1iZXIgPSByZXNvbHZlUHJvcGVydGllcyh7XG4gICAgICAgICAgICAgICAgYmxvY2tOdW1iZXI6IHRoaXMucGVyZm9ybShcImdldEJsb2NrTnVtYmVyXCIsIHt9KSxcbiAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3I6IHRoaXMuZ2V0TmV0d29yaygpLnRoZW4oKG5ldHdvcmspID0+IChudWxsKSwgKGVycm9yKSA9PiAoZXJyb3IpKVxuICAgICAgICAgICAgfSkudGhlbigoeyBibG9ja051bWJlciwgbmV0d29ya0Vycm9yIH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVucmVtZW1iZXIgdGhpcyBiYWQgaW50ZXJuYWwgYmxvY2sgbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pbnRlcm5hbEJsb2NrTnVtYmVyID09PSBjaGVja0ludGVybmFsQmxvY2tOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludGVybmFsQmxvY2tOdW1iZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldHdvcmtFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcFRpbWUgPSBnZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgYmxvY2tOdW1iZXIgPSBCaWdOdW1iZXIuZnJvbShibG9ja051bWJlcikudG9OdW1iZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tOdW1iZXIgPCB0aGlzLl9tYXhJbnRlcm5hbEJsb2NrTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrTnVtYmVyID0gdGhpcy5fbWF4SW50ZXJuYWxCbG9ja051bWJlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fbWF4SW50ZXJuYWxCbG9ja051bWJlciA9IGJsb2NrTnVtYmVyO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldEZhc3RCbG9ja051bWJlcihibG9ja051bWJlcik7IC8vIEBUT0RPOiBTdGlsbCBuZWVkIHRoaXM/XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgYmxvY2tOdW1iZXIsIHJlcVRpbWUsIHJlc3BUaW1lIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVybmFsQmxvY2tOdW1iZXIgPSBjaGVja0ludGVybmFsQmxvY2tOdW1iZXI7XG4gICAgICAgICAgICAvLyBTd2FsbG93IHVuaGFuZGxlZCBleGNlcHRpb25zOyBpZiBuZWVkZWQgdGhleSBhcmUgaGFuZGxlZCBlbHNlIHdoZXJlXG4gICAgICAgICAgICBjaGVja0ludGVybmFsQmxvY2tOdW1iZXIuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgbnVsbCB0aGUgZGVhZCAocmVqZWN0ZWQpIGZldGNoLCBpZiBpdCBoYXMgYWxyZWFkeSBiZWVuIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faW50ZXJuYWxCbG9ja051bWJlciA9PT0gY2hlY2tJbnRlcm5hbEJsb2NrTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludGVybmFsQmxvY2tOdW1iZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICh5aWVsZCBjaGVja0ludGVybmFsQmxvY2tOdW1iZXIpLmJsb2NrTnVtYmVyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcG9sbCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvbGxJZCA9IG5leHRQb2xsSWQrKztcbiAgICAgICAgICAgIC8vIFRyYWNrIGFsbCBydW5uaW5nIHByb21pc2VzLCBzbyB3ZSBjYW4gdHJpZ2dlciBhIHBvc3QtcG9sbCBvbmNlIHRoZXkgYXJlIGNvbXBsZXRlXG4gICAgICAgICAgICBjb25zdCBydW5uZXJzID0gW107XG4gICAgICAgICAgICBsZXQgYmxvY2tOdW1iZXIgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBibG9ja051bWJlciA9IHlpZWxkIHRoaXMuX2dldEludGVybmFsQmxvY2tOdW1iZXIoMTAwICsgdGhpcy5wb2xsaW5nSW50ZXJ2YWwgLyAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zZXRGYXN0QmxvY2tOdW1iZXIoYmxvY2tOdW1iZXIpO1xuICAgICAgICAgICAgLy8gRW1pdCBhIHBvbGwgZXZlbnQgYWZ0ZXIgd2UgaGF2ZSB0aGUgbGF0ZXN0IChmYXN0KSBibG9jayBudW1iZXJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInBvbGxcIiwgcG9sbElkLCBibG9ja051bWJlcik7XG4gICAgICAgICAgICAvLyBJZiB0aGUgYmxvY2sgaGFzIG5vdCBjaGFuZ2VkLCBtZWguXG4gICAgICAgICAgICBpZiAoYmxvY2tOdW1iZXIgPT09IHRoaXMuX2xhc3RCbG9ja051bWJlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImRpZFBvbGxcIiwgcG9sbElkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJzdCBwb2xsaW5nIGN5Y2xlLCB0cmlnZ2VyIGEgXCJibG9ja1wiIGV2ZW50c1xuICAgICAgICAgICAgaWYgKHRoaXMuX2VtaXR0ZWQuYmxvY2sgPT09IC0yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZW1pdHRlZC5ibG9jayA9IGJsb2NrTnVtYmVyIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChNYXRoLmFicygodGhpcy5fZW1pdHRlZC5ibG9jaykgLSBibG9ja051bWJlcikgPiAxMDAwKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYG5ldHdvcmsgYmxvY2sgc2tldyBkZXRlY3RlZDsgc2tpcHBpbmcgYmxvY2sgZXZlbnRzIChlbWl0dGVkPSR7dGhpcy5fZW1pdHRlZC5ibG9ja30gYmxvY2tOdW1iZXIke2Jsb2NrTnVtYmVyfSlgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBsb2dnZXIubWFrZUVycm9yKFwibmV0d29yayBibG9jayBza2V3IGRldGVjdGVkXCIsIExvZ2dlci5lcnJvcnMuTkVUV09SS19FUlJPUiwge1xuICAgICAgICAgICAgICAgICAgICBibG9ja051bWJlcjogYmxvY2tOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBcImJsb2NrU2tld1wiLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0Jsb2NrTnVtYmVyOiB0aGlzLl9lbWl0dGVkLmJsb2NrXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImJsb2NrXCIsIGJsb2NrTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vdGlmeSBhbGwgbGlzdGVuZXIgZm9yIGVhY2ggYmxvY2sgdGhhdCBoYXMgcGFzc2VkXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX2VtaXR0ZWQuYmxvY2sgKyAxOyBpIDw9IGJsb2NrTnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiYmxvY2tcIiwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhlIGVtaXR0ZWQgYmxvY2sgd2FzIHVwZGF0ZWQsIGNoZWNrIGZvciBvYnNvbGV0ZSBldmVudHNcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbWl0dGVkLmJsb2NrICE9PSBibG9ja051bWJlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2VtaXR0ZWQuYmxvY2sgPSBibG9ja051bWJlcjtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9lbWl0dGVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGJsb2NrIGV2ZW50IGRvZXMgbm90IGV4cGlyZVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYmxvY2sgd2Ugd2VyZSBhdCB3aGVuIHdlIGVtaXR0ZWQgdGhpcyBldmVudFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudEJsb2NrTnVtYmVyID0gdGhpcy5fZW1pdHRlZFtrZXldO1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBjYW5ub3QgZ2FyYmFnZSBjb2xsZWN0IHBlbmRpbmcgdHJhbnNhY3Rpb25zIG9yIGJsb2NrcyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZXkgc2hvdWxkIGJlIGdhcmJhZ2UgY29sbGVjdGVkIGJ5IHRoZSBQcm92aWRlciB3aGVuIHNldHRpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gXCJwZW5kaW5nXCIgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudEJsb2NrTnVtYmVyID09PSBcInBlbmRpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEV2aWN0IGFueSB0cmFuc2FjdGlvbiBoYXNoZXMgb3IgYmxvY2sgaGFzaGVzIG92ZXIgMTIgYmxvY2tzXG4gICAgICAgICAgICAgICAgICAgIC8vIG9sZCwgc2luY2UgdGhleSBzaG91bGQgbm90IHJldHVybiBudWxsIGFueXdheXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrTnVtYmVyIC0gZXZlbnRCbG9ja051bWJlciA+IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fZW1pdHRlZFtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJzdCBwb2xsaW5nIGN5Y2xlXG4gICAgICAgICAgICBpZiAodGhpcy5fbGFzdEJsb2NrTnVtYmVyID09PSAtMikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RCbG9ja051bWJlciA9IGJsb2NrTnVtYmVyIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpbmQgYWxsIHRyYW5zYWN0aW9uIGhhc2hlcyB3ZSBhcmUgd2FpdGluZyBvblxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0eFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNoID0gZXZlbnQuaGFzaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBydW5uZXIgPSB0aGlzLmdldFRyYW5zYWN0aW9uUmVjZWlwdChoYXNoKS50aGVuKChyZWNlaXB0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWNlaXB0IHx8IHJlY2VpcHQuYmxvY2tOdW1iZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW1pdHRlZFtcInQ6XCIgKyBoYXNoXSA9IHJlY2VpcHQuYmxvY2tOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KGhhc2gsIHJlY2VpcHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7IHRoaXMuZW1pdChcImVycm9yXCIsIGVycm9yKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uZXJzLnB1c2gocnVubmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmaWx0ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gZXZlbnQuZmlsdGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLmZyb21CbG9jayA9IHRoaXMuX2xhc3RCbG9ja051bWJlciArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIudG9CbG9jayA9IGJsb2NrTnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcnVubmVyID0gdGhpcy5nZXRMb2dzKGZpbHRlcikudGhlbigobG9ncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ3MuZm9yRWFjaCgobG9nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2VtaXR0ZWRbXCJiOlwiICsgbG9nLmJsb2NrSGFzaF0gPSBsb2cuYmxvY2tOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2VtaXR0ZWRbXCJ0OlwiICsgbG9nLnRyYW5zYWN0aW9uSGFzaF0gPSBsb2cuYmxvY2tOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChmaWx0ZXIsIGxvZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHsgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyb3IpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5lcnMucHVzaChydW5uZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RCbG9ja051bWJlciA9IGJsb2NrTnVtYmVyO1xuICAgICAgICAgICAgLy8gT25jZSBhbGwgZXZlbnRzIGZvciB0aGlzIGxvb3AgaGF2ZSBiZWVuIHByb2Nlc3NlZCwgZW1pdCBcImRpZFBvbGxcIlxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocnVubmVycykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiZGlkUG9sbFwiLCBwb2xsSWQpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7IHRoaXMuZW1pdChcImVycm9yXCIsIGVycm9yKTsgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBEZXByZWNhdGVkOyBkbyBub3QgdXNlIHRoaXNcbiAgICByZXNldEV2ZW50c0Jsb2NrKGJsb2NrTnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2xhc3RCbG9ja051bWJlciA9IGJsb2NrTnVtYmVyIC0gMTtcbiAgICAgICAgaWYgKHRoaXMucG9sbGluZykge1xuICAgICAgICAgICAgdGhpcy5wb2xsKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IG5ldHdvcmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uZXR3b3JrO1xuICAgIH1cbiAgICAvLyBUaGlzIG1ldGhvZCBzaG91bGQgcXVlcnkgdGhlIG5ldHdvcmsgaWYgdGhlIHVuZGVybHlpbmcgbmV0d29ya1xuICAgIC8vIGNhbiBjaGFuZ2UsIHN1Y2ggYXMgd2hlbiBjb25uZWN0ZWQgdG8gYSBKU09OLVJQQyBiYWNrZW5kXG4gICAgZGV0ZWN0TmV0d29yaygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2dnZXIudGhyb3dFcnJvcihcInByb3ZpZGVyIGRvZXMgbm90IHN1cHBvcnQgbmV0d29yayBkZXRlY3Rpb25cIiwgTG9nZ2VyLmVycm9ycy5VTlNVUFBPUlRFRF9PUEVSQVRJT04sIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFwicHJvdmlkZXIuZGV0ZWN0TmV0d29ya1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldE5ldHdvcmsoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXR3b3JrID0geWllbGQgdGhpcy5fcmVhZHkoKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBhcmUgc3RpbGwgY29ubmVjdGVkIHRvIHRoZSBzYW1lIG5ldHdvcms7IHRoaXMgaXNcbiAgICAgICAgICAgIC8vIG9ubHkgYW4gZXh0ZXJuYWwgY2FsbCBmb3IgYmFja2VuZHMgd2hpY2ggY2FuIGhhdmUgdGhlIHVuZGVybHlpbmdcbiAgICAgICAgICAgIC8vIG5ldHdvcmsgY2hhbmdlIHNwb250YW5lb3VzbHlcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnROZXR3b3JrID0geWllbGQgdGhpcy5kZXRlY3ROZXR3b3JrKCk7XG4gICAgICAgICAgICBpZiAobmV0d29yay5jaGFpbklkICE9PSBjdXJyZW50TmV0d29yay5jaGFpbklkKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlIGFsbG93aW5nIG5ldHdvcmsgY2hhbmdlcywgdGhpbmdzIGNhbiBnZXQgY29tcGxleCBmYXN0O1xuICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcgaWYgeW91IHVzZSBcImFueVwiXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW55TmV0d29yaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9uZXR3b3JrID0gY3VycmVudE5ldHdvcms7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IGFsbCBpbnRlcm5hbCBibG9jayBudW1iZXIgZ3VhcmRzIGFuZCBjYWNoZXNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdEJsb2NrTnVtYmVyID0gLTI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Zhc3RCbG9ja051bWJlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Zhc3RCbG9ja051bWJlclByb21pc2UgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYXN0UXVlcnlEYXRlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW1pdHRlZC5ibG9jayA9IC0yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXhJbnRlcm5hbEJsb2NrTnVtYmVyID0gLTEwMjQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludGVybmFsQmxvY2tOdW1iZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgXCJuZXR3b3JrXCIgZXZlbnQgTVVTVCBoYXBwZW4gYmVmb3JlIHRoaXMgbWV0aG9kIHJlc29sdmVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIGFueSBldmVudHMgaGF2ZSBhIGNoYW5jZSB0byB1bnJlZ2lzdGVyLCBzbyB3ZSBzdGFsbCBhblxuICAgICAgICAgICAgICAgICAgICAvLyBhZGRpdGlvbmFsIGV2ZW50IGxvb3AgYmVmb3JlIHJldHVybmluZyBmcm9tIC90aGlzLyBjYWxsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcIm5ldHdvcmtcIiwgY3VycmVudE5ldHdvcmssIG5ldHdvcmspO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzdGFsbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25ldHdvcms7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbG9nZ2VyLm1ha2VFcnJvcihcInVuZGVybHlpbmcgbmV0d29yayBjaGFuZ2VkXCIsIExvZ2dlci5lcnJvcnMuTkVUV09SS19FUlJPUiwge1xuICAgICAgICAgICAgICAgICAgICBldmVudDogXCJjaGFuZ2VkXCIsXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcms6IG5ldHdvcmssXG4gICAgICAgICAgICAgICAgICAgIGRldGVjdGVkTmV0d29yazogY3VycmVudE5ldHdvcmtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV0d29yaztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBibG9ja051bWJlcigpIHtcbiAgICAgICAgdGhpcy5fZ2V0SW50ZXJuYWxCbG9ja051bWJlcigxMDAgKyB0aGlzLnBvbGxpbmdJbnRlcnZhbCAvIDIpLnRoZW4oKGJsb2NrTnVtYmVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zZXRGYXN0QmxvY2tOdW1iZXIoYmxvY2tOdW1iZXIpO1xuICAgICAgICB9LCAoZXJyb3IpID0+IHsgfSk7XG4gICAgICAgIHJldHVybiAodGhpcy5fZmFzdEJsb2NrTnVtYmVyICE9IG51bGwpID8gdGhpcy5fZmFzdEJsb2NrTnVtYmVyIDogLTE7XG4gICAgfVxuICAgIGdldCBwb2xsaW5nKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3BvbGxlciAhPSBudWxsKTtcbiAgICB9XG4gICAgc2V0IHBvbGxpbmcodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmICF0aGlzLl9wb2xsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3BvbGxlciA9IHNldEludGVydmFsKCgpID0+IHsgdGhpcy5wb2xsKCk7IH0sIHRoaXMucG9sbGluZ0ludGVydmFsKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fYm9vdHN0cmFwUG9sbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jvb3RzdHJhcFBvbGwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2xsKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGJsb2NrIGFkZGl0aW9uYWwgcG9sbHMgdW50aWwgdGhlIHBvbGxpbmcgaW50ZXJ2YWxcbiAgICAgICAgICAgICAgICAgICAgLy8gaXMgZG9uZSwgdG8gcHJldmVudCBvdmVyd2hlbG1pbmcgdGhlIHBvbGwgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYm9vdHN0cmFwUG9sbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgcG9sbGluZyB3YXMgZGlzYWJsZWQsIHNvbWV0aGluZyBtYXkgcmVxdWlyZSBhIHBva2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIHN0YXJ0aW5nIHRoZSBib290c3RyYXAgcG9sbCBhbmQgaXQgd2FzIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3BvbGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9sbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBib290c3RyYXAgc28gd2UgY2FuIGRvIGFub3RoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jvb3RzdHJhcFBvbGwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnBvbGxpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXZhbHVlICYmIHRoaXMuX3BvbGxlcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9wb2xsZXIpO1xuICAgICAgICAgICAgdGhpcy5fcG9sbGVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgcG9sbGluZ0ludGVydmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9sbGluZ0ludGVydmFsO1xuICAgIH1cbiAgICBzZXQgcG9sbGluZ0ludGVydmFsKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKHZhbHVlKSAhPT0gXCJudW1iZXJcIiB8fCB2YWx1ZSA8PSAwIHx8IHBhcnNlSW50KFN0cmluZyh2YWx1ZSkpICE9IHZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIHBvbGxpbmcgaW50ZXJ2YWxcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcG9sbGluZ0ludGVydmFsID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLl9wb2xsZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fcG9sbGVyKTtcbiAgICAgICAgICAgIHRoaXMuX3BvbGxlciA9IHNldEludGVydmFsKCgpID0+IHsgdGhpcy5wb2xsKCk7IH0sIHRoaXMuX3BvbGxpbmdJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2dldEZhc3RCbG9ja051bWJlcigpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gZ2V0VGltZSgpO1xuICAgICAgICAvLyBTdGFsZSBibG9jayBudW1iZXIsIHJlcXVlc3QgYSBuZXdlciB2YWx1ZVxuICAgICAgICBpZiAoKG5vdyAtIHRoaXMuX2Zhc3RRdWVyeURhdGUpID4gMiAqIHRoaXMuX3BvbGxpbmdJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5fZmFzdFF1ZXJ5RGF0ZSA9IG5vdztcbiAgICAgICAgICAgIHRoaXMuX2Zhc3RCbG9ja051bWJlclByb21pc2UgPSB0aGlzLmdldEJsb2NrTnVtYmVyKCkudGhlbigoYmxvY2tOdW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZmFzdEJsb2NrTnVtYmVyID09IG51bGwgfHwgYmxvY2tOdW1iZXIgPiB0aGlzLl9mYXN0QmxvY2tOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmFzdEJsb2NrTnVtYmVyID0gYmxvY2tOdW1iZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9mYXN0QmxvY2tOdW1iZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZmFzdEJsb2NrTnVtYmVyUHJvbWlzZTtcbiAgICB9XG4gICAgX3NldEZhc3RCbG9ja051bWJlcihibG9ja051bWJlcikge1xuICAgICAgICAvLyBPbGRlciBibG9jaywgbWF5YmUgYSBzdGFsZSByZXF1ZXN0XG4gICAgICAgIGlmICh0aGlzLl9mYXN0QmxvY2tOdW1iZXIgIT0gbnVsbCAmJiBibG9ja051bWJlciA8IHRoaXMuX2Zhc3RCbG9ja051bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdGltZSB3ZSB1cGRhdGVkIHRoZSBibG9ja251bWJlclxuICAgICAgICB0aGlzLl9mYXN0UXVlcnlEYXRlID0gZ2V0VGltZSgpO1xuICAgICAgICAvLyBOZXdlciBibG9jayBudW1iZXIsIHVzZSAgaXRcbiAgICAgICAgaWYgKHRoaXMuX2Zhc3RCbG9ja051bWJlciA9PSBudWxsIHx8IGJsb2NrTnVtYmVyID4gdGhpcy5fZmFzdEJsb2NrTnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9mYXN0QmxvY2tOdW1iZXIgPSBibG9ja051bWJlcjtcbiAgICAgICAgICAgIHRoaXMuX2Zhc3RCbG9ja051bWJlclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoYmxvY2tOdW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdhaXRGb3JUcmFuc2FjdGlvbih0cmFuc2FjdGlvbkhhc2gsIGNvbmZpcm1hdGlvbnMsIHRpbWVvdXQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93YWl0Rm9yVHJhbnNhY3Rpb24odHJhbnNhY3Rpb25IYXNoLCAoY29uZmlybWF0aW9ucyA9PSBudWxsKSA/IDEgOiBjb25maXJtYXRpb25zLCB0aW1lb3V0IHx8IDAsIG51bGwpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3dhaXRGb3JUcmFuc2FjdGlvbih0cmFuc2FjdGlvbkhhc2gsIGNvbmZpcm1hdGlvbnMsIHRpbWVvdXQsIHJlcGxhY2VhYmxlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCByZWNlaXB0ID0geWllbGQgdGhpcy5nZXRUcmFuc2FjdGlvblJlY2VpcHQodHJhbnNhY3Rpb25IYXNoKTtcbiAgICAgICAgICAgIC8vIFJlY2VpcHQgaXMgYWxyZWFkeSBnb29kXG4gICAgICAgICAgICBpZiAoKHJlY2VpcHQgPyByZWNlaXB0LmNvbmZpcm1hdGlvbnMgOiAwKSA+PSBjb25maXJtYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpcHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQb2xsIHVudGlsIHRoZSByZWNlaXB0IGlzIGdvb2QuLi5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsRnVuY3MgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFscmVhZHlEb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEZ1bmNzLmZvckVhY2goKGZ1bmMpID0+IHsgZnVuYygpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgbWluZWRIYW5kbGVyID0gKHJlY2VpcHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY2VpcHQuY29uZmlybWF0aW9ucyA8IGNvbmZpcm1hdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxyZWFkeURvbmUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVjZWlwdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uKHRyYW5zYWN0aW9uSGFzaCwgbWluZWRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBjYW5jZWxGdW5jcy5wdXNoKCgpID0+IHsgdGhpcy5yZW1vdmVMaXN0ZW5lcih0cmFuc2FjdGlvbkhhc2gsIG1pbmVkSGFuZGxlcik7IH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdEJsb2NrTnVtYmVyID0gcmVwbGFjZWFibGUuc3RhcnRCbG9jaztcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYW5uZWRCbG9jayA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VIYW5kbGVyID0gKGJsb2NrTnVtYmVyKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdhaXQgMSBzZWNvbmQ7IHRoaXMgaXMgb25seSB1c2VkIGluIHRoZSBjYXNlIG9mIGEgZmF1bHQsIHNvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIHRyYWRlIG9mZiBhIGxpdHRsZSBiaXQgb2YgbGF0ZW5jeSBmb3IgbW9yZSBjb25zaXN0ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXN1bHRzIGFuZCBmZXdlciBKU09OLVJQQyBjYWxsc1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgc3RhbGwoMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFRyYW5zYWN0aW9uQ291bnQocmVwbGFjZWFibGUuZnJvbSkudGhlbigobm9uY2UpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub25jZSA8PSByZXBsYWNlYWJsZS5ub25jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0QmxvY2tOdW1iZXIgPSBibG9ja051bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoZSB0cmFuc2FjdGlvbiB3YXMgbWluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluZWQgPSB5aWVsZCB0aGlzLmdldFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uSGFzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWluZWQgJiYgbWluZWQuYmxvY2tOdW1iZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJzdCB0aW1lIHNjYW5uaW5nLiBXZSBzdGFydCBhIGxpdHRsZSBlYXJsaWVyIGZvciBzb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZ2dsZSByb29tIGhlcmUgdG8gaGFuZGxlIHRoZSBldmVudHVhbGx5IGNvbnNpc3RlbnQgbmF0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIGJsb2NrY2hhaW4gKGUuZy4gdGhlIGdldFRyYW5zYWN0aW9uQ291bnQgd2FzIGZvciBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpZmZlcmVudCBibG9jaylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjYW5uZWRCbG9jayA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FubmVkQmxvY2sgPSBsYXN0QmxvY2tOdW1iZXIgLSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjYW5uZWRCbG9jayA8IHJlcGxhY2VhYmxlLnN0YXJ0QmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FubmVkQmxvY2sgPSByZXBsYWNlYWJsZS5zdGFydEJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzY2FubmVkQmxvY2sgPD0gYmxvY2tOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB5aWVsZCB0aGlzLmdldEJsb2NrV2l0aFRyYW5zYWN0aW9ucyhzY2FubmVkQmxvY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdGkgPSAwOyB0aSA8IGJsb2NrLnRyYW5zYWN0aW9ucy5sZW5ndGg7IHRpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eCA9IGJsb2NrLnRyYW5zYWN0aW9uc1t0aV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VjY2Vzc2Z1bGx5IG1pbmVkIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eC5oYXNoID09PSB0cmFuc2FjdGlvbkhhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNYXRjaGVzIG91ciB0cmFuc2FjdGlvbiBmcm9tIGFuZCBub25jZTsgaXRzIGEgcmVwbGFjZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHguZnJvbSA9PT0gcmVwbGFjZWFibGUuZnJvbSAmJiB0eC5ub25jZSA9PT0gcmVwbGFjZWFibGUubm9uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHJlY2VpcHQgb2YgdGhlIHJlcGxhY2VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2VpcHQgPSB5aWVsZCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih0eC5oYXNoLCBjb25maXJtYXRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxyZWFkeSByZXNvbHZlZCBvciByZWplY3RlZCAocHJvbGx5IGEgdGltZW91dClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFscmVhZHlEb25lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcmVhc29uIHdlIHdlcmUgcmVwbGFjZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlYXNvbiA9IFwicmVwbGFjZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR4LmRhdGEgPT09IHJlcGxhY2VhYmxlLmRhdGEgJiYgdHgudG8gPT09IHJlcGxhY2VhYmxlLnRvICYmIHR4LnZhbHVlLmVxKHJlcGxhY2VhYmxlLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uID0gXCJyZXByaWNlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR4LmRhdGEgPT09IFwiMHhcIiAmJiB0eC5mcm9tID09PSB0eC50byAmJiB0eC52YWx1ZS5pc1plcm8oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uID0gXCJjYW5jZWxsZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHBsYWluIHdoeSB3ZSB3ZXJlIHJlcGxhY2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChsb2dnZXIubWFrZUVycm9yKFwidHJhbnNhY3Rpb24gd2FzIHJlcGxhY2VkXCIsIExvZ2dlci5lcnJvcnMuVFJBTlNBQ1RJT05fUkVQTEFDRUQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZDogKHJlYXNvbiA9PT0gXCJyZXBsYWNlZFwiIHx8IHJlYXNvbiA9PT0gXCJjYW5jZWxsZWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlbWVudDogdGhpcy5fd3JhcFRyYW5zYWN0aW9uKHR4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IHRyYW5zYWN0aW9uSGFzaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nhbm5lZEJsb2NrKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uY2UoXCJibG9ja1wiLCByZXBsYWNlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uY2UoXCJibG9ja1wiLCByZXBsYWNlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmNlKFwiYmxvY2tcIiwgcmVwbGFjZUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxGdW5jcy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoXCJibG9ja1wiLCByZXBsYWNlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aW1lb3V0KSA9PT0gXCJudW1iZXJcIiAmJiB0aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFscmVhZHlEb25lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobG9nZ2VyLm1ha2VFcnJvcihcInRpbWVvdXQgZXhjZWVkZWRcIiwgTG9nZ2VyLmVycm9ycy5USU1FT1VULCB7IHRpbWVvdXQ6IHRpbWVvdXQgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVyLnVucmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lci51bnJlZigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEZ1bmNzLnB1c2goKCkgPT4geyBjbGVhclRpbWVvdXQodGltZXIpOyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEJsb2NrTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEludGVybmFsQmxvY2tOdW1iZXIoMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRHYXNQcmljZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHlpZWxkIHRoaXMuZ2V0TmV0d29yaygpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgdGhpcy5wZXJmb3JtKFwiZ2V0R2FzUHJpY2VcIiwge30pO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQmlnTnVtYmVyLmZyb20ocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2dnZXIudGhyb3dFcnJvcihcImJhZCByZXN1bHQgZnJvbSBiYWNrZW5kXCIsIExvZ2dlci5lcnJvcnMuU0VSVkVSX0VSUk9SLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJnZXRHYXNQcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQsIGVycm9yXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRCYWxhbmNlKGFkZHJlc3NPck5hbWUsIGJsb2NrVGFnKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCB0aGlzLmdldE5ldHdvcmsoKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHlpZWxkIHJlc29sdmVQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLl9nZXRBZGRyZXNzKGFkZHJlc3NPck5hbWUpLFxuICAgICAgICAgICAgICAgIGJsb2NrVGFnOiB0aGlzLl9nZXRCbG9ja1RhZyhibG9ja1RhZylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgdGhpcy5wZXJmb3JtKFwiZ2V0QmFsYW5jZVwiLCBwYXJhbXMpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQmlnTnVtYmVyLmZyb20ocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2dnZXIudGhyb3dFcnJvcihcImJhZCByZXN1bHQgZnJvbSBiYWNrZW5kXCIsIExvZ2dlci5lcnJvcnMuU0VSVkVSX0VSUk9SLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJnZXRCYWxhbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcywgcmVzdWx0LCBlcnJvclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0VHJhbnNhY3Rpb25Db3VudChhZGRyZXNzT3JOYW1lLCBibG9ja1RhZykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5nZXROZXR3b3JrKCk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB5aWVsZCByZXNvbHZlUHJvcGVydGllcyh7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5fZ2V0QWRkcmVzcyhhZGRyZXNzT3JOYW1lKSxcbiAgICAgICAgICAgICAgICBibG9ja1RhZzogdGhpcy5fZ2V0QmxvY2tUYWcoYmxvY2tUYWcpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHRoaXMucGVyZm9ybShcImdldFRyYW5zYWN0aW9uQ291bnRcIiwgcGFyYW1zKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJpZ051bWJlci5mcm9tKHJlc3VsdCkudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2dnZXIudGhyb3dFcnJvcihcImJhZCByZXN1bHQgZnJvbSBiYWNrZW5kXCIsIExvZ2dlci5lcnJvcnMuU0VSVkVSX0VSUk9SLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJnZXRUcmFuc2FjdGlvbkNvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcywgcmVzdWx0LCBlcnJvclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q29kZShhZGRyZXNzT3JOYW1lLCBibG9ja1RhZykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5nZXROZXR3b3JrKCk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB5aWVsZCByZXNvbHZlUHJvcGVydGllcyh7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5fZ2V0QWRkcmVzcyhhZGRyZXNzT3JOYW1lKSxcbiAgICAgICAgICAgICAgICBibG9ja1RhZzogdGhpcy5fZ2V0QmxvY2tUYWcoYmxvY2tUYWcpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHRoaXMucGVyZm9ybShcImdldENvZGVcIiwgcGFyYW1zKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhleGxpZnkocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2dnZXIudGhyb3dFcnJvcihcImJhZCByZXN1bHQgZnJvbSBiYWNrZW5kXCIsIExvZ2dlci5lcnJvcnMuU0VSVkVSX0VSUk9SLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJnZXRDb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcywgcmVzdWx0LCBlcnJvclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0U3RvcmFnZUF0KGFkZHJlc3NPck5hbWUsIHBvc2l0aW9uLCBibG9ja1RhZykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5nZXROZXR3b3JrKCk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB5aWVsZCByZXNvbHZlUHJvcGVydGllcyh7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5fZ2V0QWRkcmVzcyhhZGRyZXNzT3JOYW1lKSxcbiAgICAgICAgICAgICAgICBibG9ja1RhZzogdGhpcy5fZ2V0QmxvY2tUYWcoYmxvY2tUYWcpLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBQcm9taXNlLnJlc29sdmUocG9zaXRpb24pLnRoZW4oKHApID0+IGhleFZhbHVlKHApKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCB0aGlzLnBlcmZvcm0oXCJnZXRTdG9yYWdlQXRcIiwgcGFyYW1zKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhleGxpZnkocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2dnZXIudGhyb3dFcnJvcihcImJhZCByZXN1bHQgZnJvbSBiYWNrZW5kXCIsIExvZ2dlci5lcnJvcnMuU0VSVkVSX0VSUk9SLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJnZXRTdG9yYWdlQXRcIixcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLCByZXN1bHQsIGVycm9yXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBUaGlzIHNob3VsZCBiZSBjYWxsZWQgYnkgYW55IHN1YmNsYXNzIHdyYXBwaW5nIGEgVHJhbnNhY3Rpb25SZXNwb25zZVxuICAgIF93cmFwVHJhbnNhY3Rpb24odHgsIGhhc2gsIHN0YXJ0QmxvY2spIHtcbiAgICAgICAgaWYgKGhhc2ggIT0gbnVsbCAmJiBoZXhEYXRhTGVuZ3RoKGhhc2gpICE9PSAzMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCByZXNwb25zZSAtIHNlbmRUcmFuc2FjdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB0eDtcbiAgICAgICAgLy8gQ2hlY2sgdGhlIGhhc2ggd2UgZXhwZWN0IGlzIHRoZSBzYW1lIGFzIHRoZSBoYXNoIHRoZSBzZXJ2ZXIgcmVwb3J0ZWRcbiAgICAgICAgaWYgKGhhc2ggIT0gbnVsbCAmJiB0eC5oYXNoICE9PSBoYXNoKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihcIlRyYW5zYWN0aW9uIGhhc2ggbWlzbWF0Y2ggZnJvbSBQcm92aWRlci5zZW5kVHJhbnNhY3Rpb24uXCIsIExvZ2dlci5lcnJvcnMuVU5LTk9XTl9FUlJPUiwgeyBleHBlY3RlZEhhc2g6IHR4Lmhhc2gsIHJldHVybmVkSGFzaDogaGFzaCB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQud2FpdCA9IChjb25maXJtcywgdGltZW91dCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm1zID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25maXJtcyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGltZW91dCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBHZXQgdGhlIGRldGFpbHMgdG8gZGV0ZWN0IHJlcGxhY2VtZW50XG4gICAgICAgICAgICBsZXQgcmVwbGFjZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoY29uZmlybXMgIT09IDAgJiYgc3RhcnRCbG9jayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHR4LmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGZyb206IHR4LmZyb20sXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0eC5ub25jZSxcbiAgICAgICAgICAgICAgICAgICAgdG86IHR4LnRvLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QmxvY2tcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjZWlwdCA9IHlpZWxkIHRoaXMuX3dhaXRGb3JUcmFuc2FjdGlvbih0eC5oYXNoLCBjb25maXJtcywgdGltZW91dCwgcmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgaWYgKHJlY2VpcHQgPT0gbnVsbCAmJiBjb25maXJtcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm8gbG9uZ2VyIHBlbmRpbmcsIGFsbG93IHRoZSBwb2xsaW5nIGxvb3AgdG8gZ2FyYmFnZSBjb2xsZWN0IHRoaXNcbiAgICAgICAgICAgIHRoaXMuX2VtaXR0ZWRbXCJ0OlwiICsgdHguaGFzaF0gPSByZWNlaXB0LmJsb2NrTnVtYmVyO1xuICAgICAgICAgICAgaWYgKHJlY2VpcHQuc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoXCJ0cmFuc2FjdGlvbiBmYWlsZWRcIiwgTG9nZ2VyLmVycm9ycy5DQUxMX0VYQ0VQVElPTiwge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbkhhc2g6IHR4Lmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uOiB0eCxcbiAgICAgICAgICAgICAgICAgICAgcmVjZWlwdDogcmVjZWlwdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlY2VpcHQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBzZW5kVHJhbnNhY3Rpb24oc2lnbmVkVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHlpZWxkIHRoaXMuZ2V0TmV0d29yaygpO1xuICAgICAgICAgICAgY29uc3QgaGV4VHggPSB5aWVsZCBQcm9taXNlLnJlc29sdmUoc2lnbmVkVHJhbnNhY3Rpb24pLnRoZW4odCA9PiBoZXhsaWZ5KHQpKTtcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gdGhpcy5mb3JtYXR0ZXIudHJhbnNhY3Rpb24oc2lnbmVkVHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgaWYgKHR4LmNvbmZpcm1hdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHR4LmNvbmZpcm1hdGlvbnMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYmxvY2tOdW1iZXIgPSB5aWVsZCB0aGlzLl9nZXRJbnRlcm5hbEJsb2NrTnVtYmVyKDEwMCArIDIgKiB0aGlzLnBvbGxpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc2ggPSB5aWVsZCB0aGlzLnBlcmZvcm0oXCJzZW5kVHJhbnNhY3Rpb25cIiwgeyBzaWduZWRUcmFuc2FjdGlvbjogaGV4VHggfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dyYXBUcmFuc2FjdGlvbih0eCwgaGFzaCwgYmxvY2tOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IudHJhbnNhY3Rpb24gPSB0eDtcbiAgICAgICAgICAgICAgICBlcnJvci50cmFuc2FjdGlvbkhhc2ggPSB0eC5oYXNoO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFRyYW5zYWN0aW9uUmVxdWVzdCh0cmFuc2FjdGlvbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0geWllbGQgdHJhbnNhY3Rpb247XG4gICAgICAgICAgICBjb25zdCB0eCA9IHt9O1xuICAgICAgICAgICAgW1wiZnJvbVwiLCBcInRvXCJdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHhba2V5XSA9IFByb21pc2UucmVzb2x2ZSh2YWx1ZXNba2V5XSkudGhlbigodikgPT4gKHYgPyB0aGlzLl9nZXRBZGRyZXNzKHYpIDogbnVsbCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBbXCJnYXNMaW1pdFwiLCBcImdhc1ByaWNlXCIsIFwibWF4RmVlUGVyR2FzXCIsIFwibWF4UHJpb3JpdHlGZWVQZXJHYXNcIiwgXCJ2YWx1ZVwiXS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHR4W2tleV0gPSBQcm9taXNlLnJlc29sdmUodmFsdWVzW2tleV0pLnRoZW4oKHYpID0+ICh2ID8gQmlnTnVtYmVyLmZyb20odikgOiBudWxsKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFtcInR5cGVcIl0uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlc1trZXldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0eFtrZXldID0gUHJvbWlzZS5yZXNvbHZlKHZhbHVlc1trZXldKS50aGVuKCh2KSA9PiAoKHYgIT0gbnVsbCkgPyB2IDogbnVsbCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmFjY2Vzc0xpc3QpIHtcbiAgICAgICAgICAgICAgICB0eC5hY2Nlc3NMaXN0ID0gdGhpcy5mb3JtYXR0ZXIuYWNjZXNzTGlzdCh2YWx1ZXMuYWNjZXNzTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbXCJkYXRhXCJdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHhba2V5XSA9IFByb21pc2UucmVzb2x2ZSh2YWx1ZXNba2V5XSkudGhlbigodikgPT4gKHYgPyBoZXhsaWZ5KHYpIDogbnVsbCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZXIudHJhbnNhY3Rpb25SZXF1ZXN0KHlpZWxkIHJlc29sdmVQcm9wZXJ0aWVzKHR4KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0RmlsdGVyKGZpbHRlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgZmlsdGVyID0geWllbGQgZmlsdGVyO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgICAgICBpZiAoZmlsdGVyLmFkZHJlc3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5hZGRyZXNzID0gdGhpcy5fZ2V0QWRkcmVzcyhmaWx0ZXIuYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbXCJibG9ja0hhc2hcIiwgXCJ0b3BpY3NcIl0uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlcltrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IGZpbHRlcltrZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBbXCJmcm9tQmxvY2tcIiwgXCJ0b0Jsb2NrXCJdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB0aGlzLl9nZXRCbG9ja1RhZyhmaWx0ZXJba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlci5maWx0ZXIoeWllbGQgcmVzb2x2ZVByb3BlcnRpZXMocmVzdWx0KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYWxsKHRyYW5zYWN0aW9uLCBibG9ja1RhZykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5nZXROZXR3b3JrKCk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB5aWVsZCByZXNvbHZlUHJvcGVydGllcyh7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb246IHRoaXMuX2dldFRyYW5zYWN0aW9uUmVxdWVzdCh0cmFuc2FjdGlvbiksXG4gICAgICAgICAgICAgICAgYmxvY2tUYWc6IHRoaXMuX2dldEJsb2NrVGFnKGJsb2NrVGFnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCB0aGlzLnBlcmZvcm0oXCJjYWxsXCIsIHBhcmFtcyk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoZXhsaWZ5KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9nZ2VyLnRocm93RXJyb3IoXCJiYWQgcmVzdWx0IGZyb20gYmFja2VuZFwiLCBMb2dnZXIuZXJyb3JzLlNFUlZFUl9FUlJPUiwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiY2FsbFwiLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMsIHJlc3VsdCwgZXJyb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVzdGltYXRlR2FzKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCB0aGlzLmdldE5ldHdvcmsoKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHlpZWxkIHJlc29sdmVQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbjogdGhpcy5fZ2V0VHJhbnNhY3Rpb25SZXF1ZXN0KHRyYW5zYWN0aW9uKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCB0aGlzLnBlcmZvcm0oXCJlc3RpbWF0ZUdhc1wiLCBwYXJhbXMpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQmlnTnVtYmVyLmZyb20ocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2dnZXIudGhyb3dFcnJvcihcImJhZCByZXN1bHQgZnJvbSBiYWNrZW5kXCIsIExvZ2dlci5lcnJvcnMuU0VSVkVSX0VSUk9SLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJlc3RpbWF0ZUdhc1wiLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMsIHJlc3VsdCwgZXJyb3JcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRBZGRyZXNzKGFkZHJlc3NPck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGFkZHJlc3NPck5hbWUgPSB5aWVsZCBhZGRyZXNzT3JOYW1lO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAoYWRkcmVzc09yTmFtZSkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBhZGRyZXNzIG9yIEVOUyBuYW1lXCIsIFwibmFtZVwiLCBhZGRyZXNzT3JOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSB5aWVsZCB0aGlzLnJlc29sdmVOYW1lKGFkZHJlc3NPck5hbWUpO1xuICAgICAgICAgICAgaWYgKGFkZHJlc3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwiRU5TIG5hbWUgbm90IGNvbmZpZ3VyZWRcIiwgTG9nZ2VyLmVycm9ycy5VTlNVUFBPUlRFRF9PUEVSQVRJT04sIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBgcmVzb2x2ZU5hbWUoJHtKU09OLnN0cmluZ2lmeShhZGRyZXNzT3JOYW1lKX0pYFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFkZHJlc3M7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0QmxvY2soYmxvY2tIYXNoT3JCbG9ja1RhZywgaW5jbHVkZVRyYW5zYWN0aW9ucykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5nZXROZXR3b3JrKCk7XG4gICAgICAgICAgICBibG9ja0hhc2hPckJsb2NrVGFnID0geWllbGQgYmxvY2tIYXNoT3JCbG9ja1RhZztcbiAgICAgICAgICAgIC8vIElmIGJsb2NrVGFnIGlzIGEgbnVtYmVyIChub3QgXCJsYXRlc3RcIiwgZXRjKSwgdGhpcyBpcyB0aGUgYmxvY2sgbnVtYmVyXG4gICAgICAgICAgICBsZXQgYmxvY2tOdW1iZXIgPSAtMTI4O1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGluY2x1ZGVUcmFuc2FjdGlvbnM6ICEhaW5jbHVkZVRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpc0hleFN0cmluZyhibG9ja0hhc2hPckJsb2NrVGFnLCAzMikpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuYmxvY2tIYXNoID0gYmxvY2tIYXNoT3JCbG9ja1RhZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5ibG9ja1RhZyA9IHlpZWxkIHRoaXMuX2dldEJsb2NrVGFnKGJsb2NrSGFzaE9yQmxvY2tUYWcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNIZXhTdHJpbmcocGFyYW1zLmJsb2NrVGFnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tOdW1iZXIgPSBwYXJzZUludChwYXJhbXMuYmxvY2tUYWcuc3Vic3RyaW5nKDIpLCAxNik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJpbnZhbGlkIGJsb2NrIGhhc2ggb3IgYmxvY2sgdGFnXCIsIFwiYmxvY2tIYXNoT3JCbG9ja1RhZ1wiLCBibG9ja0hhc2hPckJsb2NrVGFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcG9sbCgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSB5aWVsZCB0aGlzLnBlcmZvcm0oXCJnZXRCbG9ja1wiLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIC8vIEJsb2NrIHdhcyBub3QgZm91bmRcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2sgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgYmxvY2toYXNoZXMsIGlmIHdlIGRpZG4ndCBzYXkgaXQgZXhpc3RlZCwgdGhhdCBibG9ja2hhc2ggbWF5XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdCBleGlzdC4gSWYgd2UgZGlkIHNlZSBpdCB0aG91Z2gsIHBlcmhhcHMgZnJvbSBhIGxvZywgd2Uga25vd1xuICAgICAgICAgICAgICAgICAgICAvLyBpdCBleGlzdHMsIGFuZCB0aGlzIG5vZGUgaXMganVzdCBub3QgY2F1Z2h0IHVwIHlldC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5ibG9ja0hhc2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2VtaXR0ZWRbXCJiOlwiICsgcGFyYW1zLmJsb2NrSGFzaF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBibG9jayB0YWdzLCBpZiB3ZSBhcmUgYXNraW5nIGZvciBhIGZ1dHVyZSBibG9jaywgd2UgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5ibG9ja1RhZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tOdW1iZXIgPiB0aGlzLl9lbWl0dGVkLmJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gUmV0cnkgb24gdGhlIG5leHQgYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlVHJhbnNhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBibG9ja051bWJlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eCA9IGJsb2NrLnRyYW5zYWN0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eC5ibG9ja051bWJlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHguY29uZmlybWF0aW9ucyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eC5jb25maXJtYXRpb25zID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tOdW1iZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja051bWJlciA9IHlpZWxkIHRoaXMuX2dldEludGVybmFsQmxvY2tOdW1iZXIoMTAwICsgMiAqIHRoaXMucG9sbGluZ0ludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBjb25maXJtYXRpb25zIHVzaW5nIHRoZSBmYXN0IGJsb2NrIG51bWJlciAocGVzc2ltaXN0aWMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmZpcm1hdGlvbnMgPSAoYmxvY2tOdW1iZXIgLSB0eC5ibG9ja051bWJlcikgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maXJtYXRpb25zIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWF0aW9ucyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4LmNvbmZpcm1hdGlvbnMgPSBjb25maXJtYXRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrV2l0aFR4cyA9IHRoaXMuZm9ybWF0dGVyLmJsb2NrV2l0aFRyYW5zYWN0aW9ucyhibG9jayk7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrV2l0aFR4cy50cmFuc2FjdGlvbnMgPSBibG9ja1dpdGhUeHMudHJhbnNhY3Rpb25zLm1hcCgodHgpID0+IHRoaXMuX3dyYXBUcmFuc2FjdGlvbih0eCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2tXaXRoVHhzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZXIuYmxvY2soYmxvY2spO1xuICAgICAgICAgICAgfSksIHsgb25jZVBvbGw6IHRoaXMgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRCbG9jayhibG9ja0hhc2hPckJsb2NrVGFnKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fZ2V0QmxvY2soYmxvY2tIYXNoT3JCbG9ja1RhZywgZmFsc2UpKTtcbiAgICB9XG4gICAgZ2V0QmxvY2tXaXRoVHJhbnNhY3Rpb25zKGJsb2NrSGFzaE9yQmxvY2tUYWcpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9nZXRCbG9jayhibG9ja0hhc2hPckJsb2NrVGFnLCB0cnVlKSk7XG4gICAgfVxuICAgIGdldFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uSGFzaCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5nZXROZXR3b3JrKCk7XG4gICAgICAgICAgICB0cmFuc2FjdGlvbkhhc2ggPSB5aWVsZCB0cmFuc2FjdGlvbkhhc2g7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHRyYW5zYWN0aW9uSGFzaDogdGhpcy5mb3JtYXR0ZXIuaGFzaCh0cmFuc2FjdGlvbkhhc2gsIHRydWUpIH07XG4gICAgICAgICAgICByZXR1cm4gcG9sbCgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgdGhpcy5wZXJmb3JtKFwiZ2V0VHJhbnNhY3Rpb25cIiwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2VtaXR0ZWRbXCJ0OlwiICsgdHJhbnNhY3Rpb25IYXNoXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0eCA9IHRoaXMuZm9ybWF0dGVyLnRyYW5zYWN0aW9uUmVzcG9uc2UocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAodHguYmxvY2tOdW1iZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0eC5jb25maXJtYXRpb25zID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHguY29uZmlybWF0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrTnVtYmVyID0geWllbGQgdGhpcy5fZ2V0SW50ZXJuYWxCbG9ja051bWJlcigxMDAgKyAyICogdGhpcy5wb2xsaW5nSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNvbmZpcm1hdGlvbnMgdXNpbmcgdGhlIGZhc3QgYmxvY2sgbnVtYmVyIChwZXNzaW1pc3RpYylcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmZpcm1hdGlvbnMgPSAoYmxvY2tOdW1iZXIgLSB0eC5ibG9ja051bWJlcikgKyAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlybWF0aW9ucyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXRpb25zID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0eC5jb25maXJtYXRpb25zID0gY29uZmlybWF0aW9ucztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dyYXBUcmFuc2FjdGlvbih0eCk7XG4gICAgICAgICAgICB9KSwgeyBvbmNlUG9sbDogdGhpcyB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFRyYW5zYWN0aW9uUmVjZWlwdCh0cmFuc2FjdGlvbkhhc2gpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHlpZWxkIHRoaXMuZ2V0TmV0d29yaygpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb25IYXNoID0geWllbGQgdHJhbnNhY3Rpb25IYXNoO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0geyB0cmFuc2FjdGlvbkhhc2g6IHRoaXMuZm9ybWF0dGVyLmhhc2godHJhbnNhY3Rpb25IYXNoLCB0cnVlKSB9O1xuICAgICAgICAgICAgcmV0dXJuIHBvbGwoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHRoaXMucGVyZm9ybShcImdldFRyYW5zYWN0aW9uUmVjZWlwdFwiLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZW1pdHRlZFtcInQ6XCIgKyB0cmFuc2FjdGlvbkhhc2hdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFwiZ2V0aC1ldGNcIiByZXR1cm5zIHJlY2VpcHRzIGJlZm9yZSB0aGV5IGFyZSByZWFkeVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuYmxvY2tIYXNoID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjZWlwdCA9IHRoaXMuZm9ybWF0dGVyLnJlY2VpcHQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVjZWlwdC5ibG9ja051bWJlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlY2VpcHQuY29uZmlybWF0aW9ucyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlY2VpcHQuY29uZmlybWF0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrTnVtYmVyID0geWllbGQgdGhpcy5fZ2V0SW50ZXJuYWxCbG9ja051bWJlcigxMDAgKyAyICogdGhpcy5wb2xsaW5nSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGNvbmZpcm1hdGlvbnMgdXNpbmcgdGhlIGZhc3QgYmxvY2sgbnVtYmVyIChwZXNzaW1pc3RpYylcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmZpcm1hdGlvbnMgPSAoYmxvY2tOdW1iZXIgLSByZWNlaXB0LmJsb2NrTnVtYmVyKSArIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maXJtYXRpb25zIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbnMgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlY2VpcHQuY29uZmlybWF0aW9ucyA9IGNvbmZpcm1hdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZWNlaXB0O1xuICAgICAgICAgICAgfSksIHsgb25jZVBvbGw6IHRoaXMgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRMb2dzKGZpbHRlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5nZXROZXR3b3JrKCk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB5aWVsZCByZXNvbHZlUHJvcGVydGllcyh7IGZpbHRlcjogdGhpcy5fZ2V0RmlsdGVyKGZpbHRlcikgfSk7XG4gICAgICAgICAgICBjb25zdCBsb2dzID0geWllbGQgdGhpcy5wZXJmb3JtKFwiZ2V0TG9nc1wiLCBwYXJhbXMpO1xuICAgICAgICAgICAgbG9ncy5mb3JFYWNoKChsb2cpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobG9nLnJlbW92ZWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsb2cucmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIEZvcm1hdHRlci5hcnJheU9mKHRoaXMuZm9ybWF0dGVyLmZpbHRlckxvZy5iaW5kKHRoaXMuZm9ybWF0dGVyKSkobG9ncyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRFdGhlclByaWNlKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5nZXROZXR3b3JrKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZXJmb3JtKFwiZ2V0RXRoZXJQcmljZVwiLCB7fSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0QmxvY2tUYWcoYmxvY2tUYWcpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGJsb2NrVGFnID0geWllbGQgYmxvY2tUYWc7XG4gICAgICAgICAgICBpZiAodHlwZW9mIChibG9ja1RhZykgPT09IFwibnVtYmVyXCIgJiYgYmxvY2tUYWcgPCAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrVGFnICUgMSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBCbG9ja1RhZ1wiLCBcImJsb2NrVGFnXCIsIGJsb2NrVGFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGJsb2NrTnVtYmVyID0geWllbGQgdGhpcy5fZ2V0SW50ZXJuYWxCbG9ja051bWJlcigxMDAgKyAyICogdGhpcy5wb2xsaW5nSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIGJsb2NrTnVtYmVyICs9IGJsb2NrVGFnO1xuICAgICAgICAgICAgICAgIGlmIChibG9ja051bWJlciA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tOdW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZXIuYmxvY2tUYWcoYmxvY2tOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVyLmJsb2NrVGFnKGJsb2NrVGFnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFJlc29sdmVyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9IHlpZWxkIHRoaXMuX2dldFJlc29sdmVyKG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVzb2x2ZXIodGhpcywgYWRkcmVzcywgbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gTG9nZ2VyLmVycm9ycy5DQUxMX0VYQ0VQVElPTikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0UmVzb2x2ZXIobmFtZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSByZXNvbHZlciBmcm9tIHRoZSBibG9ja2NoYWluXG4gICAgICAgICAgICBjb25zdCBuZXR3b3JrID0geWllbGQgdGhpcy5nZXROZXR3b3JrKCk7XG4gICAgICAgICAgICAvLyBObyBFTlMuLi5cbiAgICAgICAgICAgIGlmICghbmV0d29yay5lbnNBZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoXCJuZXR3b3JrIGRvZXMgbm90IHN1cHBvcnQgRU5TXCIsIExvZ2dlci5lcnJvcnMuVU5TVVBQT1JURURfT1BFUkFUSU9OLCB7IG9wZXJhdGlvbjogXCJFTlNcIiwgbmV0d29yazogbmV0d29yay5uYW1lIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8ga2VjY2FrMjU2KFwicmVzb2x2ZXIoYnl0ZXMzMilcIilcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgIHRvOiBuZXR3b3JrLmVuc0FkZHJlc3MsXG4gICAgICAgICAgICAgICAgZGF0YTogKFwiMHgwMTc4YjhiZlwiICsgbmFtZWhhc2gobmFtZSkuc3Vic3RyaW5nKDIpKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVyLmNhbGxBZGRyZXNzKHlpZWxkIHRoaXMuY2FsbCh0cmFuc2FjdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IExvZ2dlci5lcnJvcnMuQ0FMTF9FWENFUFRJT04pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVzb2x2ZU5hbWUobmFtZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbmFtZSA9IHlpZWxkIG5hbWU7XG4gICAgICAgICAgICAvLyBJZiBpdCBpcyBhbHJlYWR5IGFuIGFkZHJlc3MsIG5vdGhpbmcgdG8gcmVzb2x2ZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZm9ybWF0dGVyLmFkZHJlc3MobmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgaXMgaXMgYSBoZXhzdHJpbmcsIHRoZSBhZGRyZXNzIGlzIGJhZCAoU2VlICM2OTQpXG4gICAgICAgICAgICAgICAgaWYgKGlzSGV4U3RyaW5nKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKG5hbWUpICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgRU5TIG5hbWVcIiwgXCJuYW1lXCIsIG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gR2V0IHRoZSBhZGRyIGZyb20gdGhlIHJlc292bGVyXG4gICAgICAgICAgICBjb25zdCByZXNvbHZlciA9IHlpZWxkIHRoaXMuZ2V0UmVzb2x2ZXIobmFtZSk7XG4gICAgICAgICAgICBpZiAoIXJlc29sdmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geWllbGQgcmVzb2x2ZXIuZ2V0QWRkcmVzcygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9va3VwQWRkcmVzcyhhZGRyZXNzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBhZGRyZXNzID0geWllbGQgYWRkcmVzcztcbiAgICAgICAgICAgIGFkZHJlc3MgPSB0aGlzLmZvcm1hdHRlci5hZGRyZXNzKGFkZHJlc3MpO1xuICAgICAgICAgICAgY29uc3QgcmV2ZXJzZU5hbWUgPSBhZGRyZXNzLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpICsgXCIuYWRkci5yZXZlcnNlXCI7XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlckFkZHJlc3MgPSB5aWVsZCB0aGlzLl9nZXRSZXNvbHZlcihyZXZlcnNlTmFtZSk7XG4gICAgICAgICAgICBpZiAoIXJlc29sdmVyQWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8ga2VjY2FrKFwibmFtZShieXRlczMyKVwiKVxuICAgICAgICAgICAgbGV0IGJ5dGVzID0gYXJyYXlpZnkoeWllbGQgdGhpcy5jYWxsKHtcbiAgICAgICAgICAgICAgICB0bzogcmVzb2x2ZXJBZGRyZXNzLFxuICAgICAgICAgICAgICAgIGRhdGE6IChcIjB4NjkxZjM0MzFcIiArIG5hbWVoYXNoKHJldmVyc2VOYW1lKS5zdWJzdHJpbmcoMikpXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAvLyBTdHJpcCBvZmYgdGhlIGR5bmFtaWMgc3RyaW5nIHBvaW50ZXIgKDB4MjApXG4gICAgICAgICAgICBpZiAoYnl0ZXMubGVuZ3RoIDwgMzIgfHwgIUJpZ051bWJlci5mcm9tKGJ5dGVzLnNsaWNlKDAsIDMyKSkuZXEoMzIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBieXRlcyA9IGJ5dGVzLnNsaWNlKDMyKTtcbiAgICAgICAgICAgIC8vIE5vdCBhIGxlbmd0aC1wcmVmaXhlZCBzdHJpbmdcbiAgICAgICAgICAgIGlmIChieXRlcy5sZW5ndGggPCAzMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gR2V0IHRoZSBsZW5ndGggb2YgdGhlIHN0cmluZyAoZnJvbSB0aGUgbGVuZ3RoLXByZWZpeClcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IEJpZ051bWJlci5mcm9tKGJ5dGVzLnNsaWNlKDAsIDMyKSkudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIGJ5dGVzID0gYnl0ZXMuc2xpY2UoMzIpO1xuICAgICAgICAgICAgLy8gTGVuZ3RoIGxvbmdlciB0aGFuIGF2YWlsYWJsZSBkYXRhXG4gICAgICAgICAgICBpZiAobGVuZ3RoID4gYnl0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdG9VdGY4U3RyaW5nKGJ5dGVzLnNsaWNlKDAsIGxlbmd0aCkpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSByZXZlcnNlIHJlY29yZCBtYXRjaGVzIHRoZSBmb3dhcmQgcmVjb3JkXG4gICAgICAgICAgICBjb25zdCBhZGRyID0geWllbGQgdGhpcy5yZXNvbHZlTmFtZShuYW1lKTtcbiAgICAgICAgICAgIGlmIChhZGRyICE9IGFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0QXZhdGFyKG5hbWVPckFkZHJlc3MpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCByZXNvbHZlciA9IG51bGw7XG4gICAgICAgICAgICBpZiAoaXNIZXhTdHJpbmcobmFtZU9yQWRkcmVzcykpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGRyZXNzOyByZXZlcnNlIGxvb2t1cFxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSB0aGlzLmZvcm1hdHRlci5hZGRyZXNzKG5hbWVPckFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJldmVyc2VOYW1lID0gYWRkcmVzcy5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKSArIFwiLmFkZHIucmV2ZXJzZVwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc29sdmVyQWRkcmVzcyA9IHlpZWxkIHRoaXMuX2dldFJlc29sdmVyKHJldmVyc2VOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc29sdmVyQWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIodGhpcywgcmVzb2x2ZXJBZGRyZXNzLCBcIl9cIiwgYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFTlMgbmFtZTsgZm9yd2FyZCBsb29rdXBcbiAgICAgICAgICAgICAgICByZXNvbHZlciA9IHlpZWxkIHRoaXMuZ2V0UmVzb2x2ZXIobmFtZU9yQWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhdmF0YXIgPSB5aWVsZCByZXNvbHZlci5nZXRBdmF0YXIoKTtcbiAgICAgICAgICAgIGlmIChhdmF0YXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGF2YXRhci51cmw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwZXJmb3JtKG1ldGhvZCwgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBsb2dnZXIudGhyb3dFcnJvcihtZXRob2QgKyBcIiBub3QgaW1wbGVtZW50ZWRcIiwgTG9nZ2VyLmVycm9ycy5OT1RfSU1QTEVNRU5URUQsIHsgb3BlcmF0aW9uOiBtZXRob2QgfSk7XG4gICAgfVxuICAgIF9zdGFydEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHRoaXMucG9sbGluZyA9ICh0aGlzLl9ldmVudHMuZmlsdGVyKChlKSA9PiBlLnBvbGxhYmxlKCkpLmxlbmd0aCA+IDApO1xuICAgIH1cbiAgICBfc3RvcEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHRoaXMucG9sbGluZyA9ICh0aGlzLl9ldmVudHMuZmlsdGVyKChlKSA9PiBlLnBvbGxhYmxlKCkpLmxlbmd0aCA+IDApO1xuICAgIH1cbiAgICBfYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBvbmNlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KGdldEV2ZW50VGFnKGV2ZW50TmFtZSksIGxpc3RlbmVyLCBvbmNlKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICB0aGlzLl9zdGFydEV2ZW50KGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgIH1cbiAgICBvbmNlKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfVxuICAgIGVtaXQoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHN0b3BwZWQgPSBbXTtcbiAgICAgICAgbGV0IGV2ZW50VGFnID0gZ2V0RXZlbnRUYWcoZXZlbnROYW1lKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YWcgIT09IGV2ZW50VGFnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5saXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChldmVudC5vbmNlKSB7XG4gICAgICAgICAgICAgICAgc3RvcHBlZC5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0b3BwZWQuZm9yRWFjaCgoZXZlbnQpID0+IHsgdGhpcy5fc3RvcEV2ZW50KGV2ZW50KTsgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGxpc3RlbmVyQ291bnQoZXZlbnROYW1lKSB7XG4gICAgICAgIGlmICghZXZlbnROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXZlbnRUYWcgPSBnZXRFdmVudFRhZyhldmVudE5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoZXZlbnQudGFnID09PSBldmVudFRhZyk7XG4gICAgICAgIH0pLmxlbmd0aDtcbiAgICB9XG4gICAgbGlzdGVuZXJzKGV2ZW50TmFtZSkge1xuICAgICAgICBpZiAoZXZlbnROYW1lID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudHMubWFwKChldmVudCkgPT4gZXZlbnQubGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBldmVudFRhZyA9IGdldEV2ZW50VGFnKGV2ZW50TmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudHNcbiAgICAgICAgICAgIC5maWx0ZXIoKGV2ZW50KSA9PiAoZXZlbnQudGFnID09PSBldmVudFRhZykpXG4gICAgICAgICAgICAubWFwKChldmVudCkgPT4gZXZlbnQubGlzdGVuZXIpO1xuICAgIH1cbiAgICBvZmYoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RvcHBlZCA9IFtdO1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGV2ZW50VGFnID0gZ2V0RXZlbnRUYWcoZXZlbnROYW1lKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YWcgIT09IGV2ZW50VGFnIHx8IGV2ZW50Lmxpc3RlbmVyICE9IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0b3BwZWQucHVzaChldmVudCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBzdG9wcGVkLmZvckVhY2goKGV2ZW50KSA9PiB7IHRoaXMuX3N0b3BFdmVudChldmVudCk7IH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50TmFtZSkge1xuICAgICAgICBsZXQgc3RvcHBlZCA9IFtdO1xuICAgICAgICBpZiAoZXZlbnROYW1lID09IG51bGwpIHtcbiAgICAgICAgICAgIHN0b3BwZWQgPSB0aGlzLl9ldmVudHM7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50VGFnID0gZ2V0RXZlbnRUYWcoZXZlbnROYW1lKTtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cy5maWx0ZXIoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhZyAhPT0gZXZlbnRUYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0b3BwZWQucHVzaChldmVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RvcHBlZC5mb3JFYWNoKChldmVudCkgPT4geyB0aGlzLl9zdG9wRXZlbnQoZXZlbnQpOyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZS1wcm92aWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IGdldEFkZHJlc3MsIGdldENvbnRyYWN0QWRkcmVzcyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9hZGRyZXNzXCI7XG5pbXBvcnQgeyBCaWdOdW1iZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYmlnbnVtYmVyXCI7XG5pbXBvcnQgeyBoZXhEYXRhTGVuZ3RoLCBoZXhEYXRhU2xpY2UsIGhleFZhbHVlLCBoZXhaZXJvUGFkLCBpc0hleFN0cmluZyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9ieXRlc1wiO1xuaW1wb3J0IHsgQWRkcmVzc1plcm8gfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzaGFsbG93Q29weSB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBhY2Nlc3NMaXN0aWZ5LCBwYXJzZSBhcyBwYXJzZVRyYW5zYWN0aW9uIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3RyYW5zYWN0aW9uc1wiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2xvZ2dlclwiO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gXCIuL192ZXJzaW9uXCI7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKHZlcnNpb24pO1xuZXhwb3J0IGNsYXNzIEZvcm1hdHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxvZ2dlci5jaGVja05ldyhuZXcudGFyZ2V0LCBGb3JtYXR0ZXIpO1xuICAgICAgICB0aGlzLmZvcm1hdHMgPSB0aGlzLmdldERlZmF1bHRGb3JtYXRzKCk7XG4gICAgfVxuICAgIGdldERlZmF1bHRGb3JtYXRzKCkge1xuICAgICAgICBjb25zdCBmb3JtYXRzID0gKHt9KTtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IHRoaXMuYWRkcmVzcy5iaW5kKHRoaXMpO1xuICAgICAgICBjb25zdCBiaWdOdW1iZXIgPSB0aGlzLmJpZ051bWJlci5iaW5kKHRoaXMpO1xuICAgICAgICBjb25zdCBibG9ja1RhZyA9IHRoaXMuYmxvY2tUYWcuYmluZCh0aGlzKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5iaW5kKHRoaXMpO1xuICAgICAgICBjb25zdCBoYXNoID0gdGhpcy5oYXNoLmJpbmQodGhpcyk7XG4gICAgICAgIGNvbnN0IGhleCA9IHRoaXMuaGV4LmJpbmQodGhpcyk7XG4gICAgICAgIGNvbnN0IG51bWJlciA9IHRoaXMubnVtYmVyLmJpbmQodGhpcyk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGUuYmluZCh0aGlzKTtcbiAgICAgICAgY29uc3Qgc3RyaWN0RGF0YSA9ICh2KSA9PiB7IHJldHVybiB0aGlzLmRhdGEodiwgdHJ1ZSk7IH07XG4gICAgICAgIGZvcm1hdHMudHJhbnNhY3Rpb24gPSB7XG4gICAgICAgICAgICBoYXNoOiBoYXNoLFxuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIGFjY2Vzc0xpc3Q6IEZvcm1hdHRlci5hbGxvd051bGwodGhpcy5hY2Nlc3NMaXN0LmJpbmQodGhpcyksIG51bGwpLFxuICAgICAgICAgICAgYmxvY2tIYXNoOiBGb3JtYXR0ZXIuYWxsb3dOdWxsKGhhc2gsIG51bGwpLFxuICAgICAgICAgICAgYmxvY2tOdW1iZXI6IEZvcm1hdHRlci5hbGxvd051bGwobnVtYmVyLCBudWxsKSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uSW5kZXg6IEZvcm1hdHRlci5hbGxvd051bGwobnVtYmVyLCBudWxsKSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbnM6IEZvcm1hdHRlci5hbGxvd051bGwobnVtYmVyLCBudWxsKSxcbiAgICAgICAgICAgIGZyb206IGFkZHJlc3MsXG4gICAgICAgICAgICAvLyBlaXRoZXIgKGdhc1ByaWNlKSBvciAobWF4UHJpb3JpdHlGZWVQZXJHYXMgKyBtYXhGZWVQZXJHYXMpXG4gICAgICAgICAgICAvLyBtdXN0IGJlIHNldFxuICAgICAgICAgICAgZ2FzUHJpY2U6IEZvcm1hdHRlci5hbGxvd051bGwoYmlnTnVtYmVyKSxcbiAgICAgICAgICAgIG1heFByaW9yaXR5RmVlUGVyR2FzOiBGb3JtYXR0ZXIuYWxsb3dOdWxsKGJpZ051bWJlciksXG4gICAgICAgICAgICBtYXhGZWVQZXJHYXM6IEZvcm1hdHRlci5hbGxvd051bGwoYmlnTnVtYmVyKSxcbiAgICAgICAgICAgIGdhc0xpbWl0OiBiaWdOdW1iZXIsXG4gICAgICAgICAgICB0bzogRm9ybWF0dGVyLmFsbG93TnVsbChhZGRyZXNzLCBudWxsKSxcbiAgICAgICAgICAgIHZhbHVlOiBiaWdOdW1iZXIsXG4gICAgICAgICAgICBub25jZTogbnVtYmVyLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIHI6IEZvcm1hdHRlci5hbGxvd051bGwodGhpcy51aW50MjU2KSxcbiAgICAgICAgICAgIHM6IEZvcm1hdHRlci5hbGxvd051bGwodGhpcy51aW50MjU2KSxcbiAgICAgICAgICAgIHY6IEZvcm1hdHRlci5hbGxvd051bGwobnVtYmVyKSxcbiAgICAgICAgICAgIGNyZWF0ZXM6IEZvcm1hdHRlci5hbGxvd051bGwoYWRkcmVzcywgbnVsbCksXG4gICAgICAgICAgICByYXc6IEZvcm1hdHRlci5hbGxvd051bGwoZGF0YSksXG4gICAgICAgIH07XG4gICAgICAgIGZvcm1hdHMudHJhbnNhY3Rpb25SZXF1ZXN0ID0ge1xuICAgICAgICAgICAgZnJvbTogRm9ybWF0dGVyLmFsbG93TnVsbChhZGRyZXNzKSxcbiAgICAgICAgICAgIG5vbmNlOiBGb3JtYXR0ZXIuYWxsb3dOdWxsKG51bWJlciksXG4gICAgICAgICAgICBnYXNMaW1pdDogRm9ybWF0dGVyLmFsbG93TnVsbChiaWdOdW1iZXIpLFxuICAgICAgICAgICAgZ2FzUHJpY2U6IEZvcm1hdHRlci5hbGxvd051bGwoYmlnTnVtYmVyKSxcbiAgICAgICAgICAgIG1heFByaW9yaXR5RmVlUGVyR2FzOiBGb3JtYXR0ZXIuYWxsb3dOdWxsKGJpZ051bWJlciksXG4gICAgICAgICAgICBtYXhGZWVQZXJHYXM6IEZvcm1hdHRlci5hbGxvd051bGwoYmlnTnVtYmVyKSxcbiAgICAgICAgICAgIHRvOiBGb3JtYXR0ZXIuYWxsb3dOdWxsKGFkZHJlc3MpLFxuICAgICAgICAgICAgdmFsdWU6IEZvcm1hdHRlci5hbGxvd051bGwoYmlnTnVtYmVyKSxcbiAgICAgICAgICAgIGRhdGE6IEZvcm1hdHRlci5hbGxvd051bGwoc3RyaWN0RGF0YSksXG4gICAgICAgICAgICB0eXBlOiBGb3JtYXR0ZXIuYWxsb3dOdWxsKG51bWJlciksXG4gICAgICAgICAgICBhY2Nlc3NMaXN0OiBGb3JtYXR0ZXIuYWxsb3dOdWxsKHRoaXMuYWNjZXNzTGlzdC5iaW5kKHRoaXMpLCBudWxsKSxcbiAgICAgICAgfTtcbiAgICAgICAgZm9ybWF0cy5yZWNlaXB0TG9nID0ge1xuICAgICAgICAgICAgdHJhbnNhY3Rpb25JbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgYmxvY2tOdW1iZXI6IG51bWJlcixcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uSGFzaDogaGFzaCxcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICB0b3BpY3M6IEZvcm1hdHRlci5hcnJheU9mKGhhc2gpLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIGxvZ0luZGV4OiBudW1iZXIsXG4gICAgICAgICAgICBibG9ja0hhc2g6IGhhc2gsXG4gICAgICAgIH07XG4gICAgICAgIGZvcm1hdHMucmVjZWlwdCA9IHtcbiAgICAgICAgICAgIHRvOiBGb3JtYXR0ZXIuYWxsb3dOdWxsKHRoaXMuYWRkcmVzcywgbnVsbCksXG4gICAgICAgICAgICBmcm9tOiBGb3JtYXR0ZXIuYWxsb3dOdWxsKHRoaXMuYWRkcmVzcywgbnVsbCksXG4gICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IEZvcm1hdHRlci5hbGxvd051bGwoYWRkcmVzcywgbnVsbCksXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkluZGV4OiBudW1iZXIsXG4gICAgICAgICAgICAvLyBzaG91bGQgYmUgYWxsb3dOdWxsKGhhc2gpLCBidXQgYnJva2VuLUVJUC02NTggc3VwcG9ydCBpcyBoYW5kbGVkIGluIHJlY2VpcHRcbiAgICAgICAgICAgIHJvb3Q6IEZvcm1hdHRlci5hbGxvd051bGwoaGV4KSxcbiAgICAgICAgICAgIGdhc1VzZWQ6IGJpZ051bWJlcixcbiAgICAgICAgICAgIGxvZ3NCbG9vbTogRm9ybWF0dGVyLmFsbG93TnVsbChkYXRhKSxcbiAgICAgICAgICAgIGJsb2NrSGFzaDogaGFzaCxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uSGFzaDogaGFzaCxcbiAgICAgICAgICAgIGxvZ3M6IEZvcm1hdHRlci5hcnJheU9mKHRoaXMucmVjZWlwdExvZy5iaW5kKHRoaXMpKSxcbiAgICAgICAgICAgIGJsb2NrTnVtYmVyOiBudW1iZXIsXG4gICAgICAgICAgICBjb25maXJtYXRpb25zOiBGb3JtYXR0ZXIuYWxsb3dOdWxsKG51bWJlciwgbnVsbCksXG4gICAgICAgICAgICBjdW11bGF0aXZlR2FzVXNlZDogYmlnTnVtYmVyLFxuICAgICAgICAgICAgZWZmZWN0aXZlR2FzUHJpY2U6IEZvcm1hdHRlci5hbGxvd051bGwoYmlnTnVtYmVyKSxcbiAgICAgICAgICAgIHN0YXR1czogRm9ybWF0dGVyLmFsbG93TnVsbChudW1iZXIpLFxuICAgICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICB9O1xuICAgICAgICBmb3JtYXRzLmJsb2NrID0ge1xuICAgICAgICAgICAgaGFzaDogaGFzaCxcbiAgICAgICAgICAgIHBhcmVudEhhc2g6IGhhc2gsXG4gICAgICAgICAgICBudW1iZXI6IG51bWJlcixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbnVtYmVyLFxuICAgICAgICAgICAgbm9uY2U6IEZvcm1hdHRlci5hbGxvd051bGwoaGV4KSxcbiAgICAgICAgICAgIGRpZmZpY3VsdHk6IHRoaXMuZGlmZmljdWx0eS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZ2FzTGltaXQ6IGJpZ051bWJlcixcbiAgICAgICAgICAgIGdhc1VzZWQ6IGJpZ051bWJlcixcbiAgICAgICAgICAgIG1pbmVyOiBhZGRyZXNzLFxuICAgICAgICAgICAgZXh0cmFEYXRhOiBkYXRhLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25zOiBGb3JtYXR0ZXIuYWxsb3dOdWxsKEZvcm1hdHRlci5hcnJheU9mKGhhc2gpKSxcbiAgICAgICAgICAgIGJhc2VGZWVQZXJHYXM6IEZvcm1hdHRlci5hbGxvd051bGwoYmlnTnVtYmVyKVxuICAgICAgICB9O1xuICAgICAgICBmb3JtYXRzLmJsb2NrV2l0aFRyYW5zYWN0aW9ucyA9IHNoYWxsb3dDb3B5KGZvcm1hdHMuYmxvY2spO1xuICAgICAgICBmb3JtYXRzLmJsb2NrV2l0aFRyYW5zYWN0aW9ucy50cmFuc2FjdGlvbnMgPSBGb3JtYXR0ZXIuYWxsb3dOdWxsKEZvcm1hdHRlci5hcnJheU9mKHRoaXMudHJhbnNhY3Rpb25SZXNwb25zZS5iaW5kKHRoaXMpKSk7XG4gICAgICAgIGZvcm1hdHMuZmlsdGVyID0ge1xuICAgICAgICAgICAgZnJvbUJsb2NrOiBGb3JtYXR0ZXIuYWxsb3dOdWxsKGJsb2NrVGFnLCB1bmRlZmluZWQpLFxuICAgICAgICAgICAgdG9CbG9jazogRm9ybWF0dGVyLmFsbG93TnVsbChibG9ja1RhZywgdW5kZWZpbmVkKSxcbiAgICAgICAgICAgIGJsb2NrSGFzaDogRm9ybWF0dGVyLmFsbG93TnVsbChoYXNoLCB1bmRlZmluZWQpLFxuICAgICAgICAgICAgYWRkcmVzczogRm9ybWF0dGVyLmFsbG93TnVsbChhZGRyZXNzLCB1bmRlZmluZWQpLFxuICAgICAgICAgICAgdG9waWNzOiBGb3JtYXR0ZXIuYWxsb3dOdWxsKHRoaXMudG9waWNzLmJpbmQodGhpcyksIHVuZGVmaW5lZCksXG4gICAgICAgIH07XG4gICAgICAgIGZvcm1hdHMuZmlsdGVyTG9nID0ge1xuICAgICAgICAgICAgYmxvY2tOdW1iZXI6IEZvcm1hdHRlci5hbGxvd051bGwobnVtYmVyKSxcbiAgICAgICAgICAgIGJsb2NrSGFzaDogRm9ybWF0dGVyLmFsbG93TnVsbChoYXNoKSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uSW5kZXg6IG51bWJlcixcbiAgICAgICAgICAgIHJlbW92ZWQ6IEZvcm1hdHRlci5hbGxvd051bGwodGhpcy5ib29sZWFuLmJpbmQodGhpcykpLFxuICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgIGRhdGE6IEZvcm1hdHRlci5hbGxvd0ZhbHNpc2goZGF0YSwgXCIweFwiKSxcbiAgICAgICAgICAgIHRvcGljczogRm9ybWF0dGVyLmFycmF5T2YoaGFzaCksXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkhhc2g6IGhhc2gsXG4gICAgICAgICAgICBsb2dJbmRleDogbnVtYmVyLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZm9ybWF0cztcbiAgICB9XG4gICAgYWNjZXNzTGlzdChhY2Nlc3NMaXN0KSB7XG4gICAgICAgIHJldHVybiBhY2Nlc3NMaXN0aWZ5KGFjY2Vzc0xpc3QgfHwgW10pO1xuICAgIH1cbiAgICAvLyBSZXF1aXJlcyBhIEJpZ051bWJlcmlzaCB0aGF0IGlzIHdpdGhpbiB0aGUgSUVFRTc1NCBzYWZlIGludGVnZXIgcmFuZ2U7IHJldHVybnMgYSBudW1iZXJcbiAgICAvLyBTdHJpY3QhIFVzZWQgb24gaW5wdXQuXG4gICAgbnVtYmVyKG51bWJlcikge1xuICAgICAgICBpZiAobnVtYmVyID09PSBcIjB4XCIpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCaWdOdW1iZXIuZnJvbShudW1iZXIpLnRvTnVtYmVyKCk7XG4gICAgfVxuICAgIHR5cGUobnVtYmVyKSB7XG4gICAgICAgIGlmIChudW1iZXIgPT09IFwiMHhcIiB8fCBudW1iZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJpZ051bWJlci5mcm9tKG51bWJlcikudG9OdW1iZXIoKTtcbiAgICB9XG4gICAgLy8gU3RyaWN0ISBVc2VkIG9uIGlucHV0LlxuICAgIGJpZ051bWJlcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gQmlnTnVtYmVyLmZyb20odmFsdWUpO1xuICAgIH1cbiAgICAvLyBSZXF1aXJlcyBhIGJvb2xlYW4sIFwidHJ1ZVwiIG9yICBcImZhbHNlXCI7IHJldHVybnMgYSBib29sZWFuXG4gICAgYm9vbGVhbih2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mICh2YWx1ZSkgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAodmFsdWUpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGJvb2xlYW4gLSBcIiArIHZhbHVlKTtcbiAgICB9XG4gICAgaGV4KHZhbHVlLCBzdHJpY3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAodmFsdWUpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBpZiAoIXN0cmljdCAmJiB2YWx1ZS5zdWJzdHJpbmcoMCwgMikgIT09IFwiMHhcIikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gXCIweFwiICsgdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNIZXhTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJpbnZhbGlkIGhhc2hcIiwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgfVxuICAgIGRhdGEodmFsdWUsIHN0cmljdCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmhleCh2YWx1ZSwgc3RyaWN0KTtcbiAgICAgICAgaWYgKChyZXN1bHQubGVuZ3RoICUgMikgIT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgZGF0YTsgb2RkLWxlbmd0aCAtIFwiICsgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8vIFJlcXVpcmVzIGFuIGFkZHJlc3NcbiAgICAvLyBTdHJpY3QhIFVzZWQgb24gaW5wdXQuXG4gICAgYWRkcmVzcyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZ2V0QWRkcmVzcyh2YWx1ZSk7XG4gICAgfVxuICAgIGNhbGxBZGRyZXNzKHZhbHVlKSB7XG4gICAgICAgIGlmICghaXNIZXhTdHJpbmcodmFsdWUsIDMyKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGdldEFkZHJlc3MoaGV4RGF0YVNsaWNlKHZhbHVlLCAxMikpO1xuICAgICAgICByZXR1cm4gKGFkZHJlc3MgPT09IEFkZHJlc3NaZXJvKSA/IG51bGwgOiBhZGRyZXNzO1xuICAgIH1cbiAgICBjb250cmFjdEFkZHJlc3ModmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdldENvbnRyYWN0QWRkcmVzcyh2YWx1ZSk7XG4gICAgfVxuICAgIC8vIFN0cmljdCEgVXNlZCBvbiBpbnB1dC5cbiAgICBibG9ja1RhZyhibG9ja1RhZykge1xuICAgICAgICBpZiAoYmxvY2tUYWcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwibGF0ZXN0XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJsb2NrVGFnID09PSBcImVhcmxpZXN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIjB4MFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChibG9ja1RhZyA9PT0gXCJsYXRlc3RcIiB8fCBibG9ja1RhZyA9PT0gXCJwZW5kaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBibG9ja1RhZztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIChibG9ja1RhZykgPT09IFwibnVtYmVyXCIgfHwgaXNIZXhTdHJpbmcoYmxvY2tUYWcpKSB7XG4gICAgICAgICAgICByZXR1cm4gaGV4VmFsdWUoYmxvY2tUYWcpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgYmxvY2tUYWdcIik7XG4gICAgfVxuICAgIC8vIFJlcXVpcmVzIGEgaGFzaCwgb3B0aW9uYWxseSByZXF1aXJlcyAweCBwcmVmaXg7IHJldHVybnMgcHJlZml4ZWQgbG93ZXJjYXNlIGhhc2guXG4gICAgaGFzaCh2YWx1ZSwgc3RyaWN0KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaGV4KHZhbHVlLCBzdHJpY3QpO1xuICAgICAgICBpZiAoaGV4RGF0YUxlbmd0aChyZXN1bHQpICE9PSAzMikge1xuICAgICAgICAgICAgcmV0dXJuIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJpbnZhbGlkIGhhc2hcIiwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gUmV0dXJucyB0aGUgZGlmZmljdWx0eSBhcyBhIG51bWJlciwgb3IgaWYgdG9vIGxhcmdlIChpLmUuIFBvQSBuZXR3b3JrKSBudWxsXG4gICAgZGlmZmljdWx0eSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdiA9IEJpZ051bWJlci5mcm9tKHZhbHVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB2LnRvTnVtYmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7IH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHVpbnQyNTYodmFsdWUpIHtcbiAgICAgICAgaWYgKCFpc0hleFN0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgdWludDI1NlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGV4WmVyb1BhZCh2YWx1ZSwgMzIpO1xuICAgIH1cbiAgICBfYmxvY2sodmFsdWUsIGZvcm1hdCkge1xuICAgICAgICBpZiAodmFsdWUuYXV0aG9yICE9IG51bGwgJiYgdmFsdWUubWluZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWUubWluZXIgPSB2YWx1ZS5hdXRob3I7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIGRpZmZpY3VsdHkgbWF5IG5lZWQgdG8gY29tZSBmcm9tIF9kaWZmaWN1bHR5IGluIHJlY3Vyc2VkIGJsb2Nrc1xuICAgICAgICBjb25zdCBkaWZmaWN1bHR5ID0gKHZhbHVlLl9kaWZmaWN1bHR5ICE9IG51bGwpID8gdmFsdWUuX2RpZmZpY3VsdHkgOiB2YWx1ZS5kaWZmaWN1bHR5O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBGb3JtYXR0ZXIuY2hlY2soZm9ybWF0LCB2YWx1ZSk7XG4gICAgICAgIHJlc3VsdC5fZGlmZmljdWx0eSA9ICgoZGlmZmljdWx0eSA9PSBudWxsKSA/IG51bGwgOiBCaWdOdW1iZXIuZnJvbShkaWZmaWN1bHR5KSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGJsb2NrKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ibG9jayh2YWx1ZSwgdGhpcy5mb3JtYXRzLmJsb2NrKTtcbiAgICB9XG4gICAgYmxvY2tXaXRoVHJhbnNhY3Rpb25zKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ibG9jayh2YWx1ZSwgdGhpcy5mb3JtYXRzLmJsb2NrV2l0aFRyYW5zYWN0aW9ucyk7XG4gICAgfVxuICAgIC8vIFN0cmljdCEgVXNlZCBvbiBpbnB1dC5cbiAgICB0cmFuc2FjdGlvblJlcXVlc3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEZvcm1hdHRlci5jaGVjayh0aGlzLmZvcm1hdHMudHJhbnNhY3Rpb25SZXF1ZXN0LCB2YWx1ZSk7XG4gICAgfVxuICAgIHRyYW5zYWN0aW9uUmVzcG9uc2UodHJhbnNhY3Rpb24pIHtcbiAgICAgICAgLy8gUmVuYW1lIGdhcyB0byBnYXNMaW1pdFxuICAgICAgICBpZiAodHJhbnNhY3Rpb24uZ2FzICE9IG51bGwgJiYgdHJhbnNhY3Rpb24uZ2FzTGltaXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24uZ2FzTGltaXQgPSB0cmFuc2FjdGlvbi5nYXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU29tZSBjbGllbnRzIChUZXN0UlBDKSBkbyBzdHJhbmdlIHRoaW5ncyBsaWtlIHJldHVybiAweDAgZm9yIHRoZVxuICAgICAgICAvLyAwIGFkZHJlc3M7IGNvcnJlY3QgdGhpcyB0byBiZSBhIHJlYWwgYWRkcmVzc1xuICAgICAgICBpZiAodHJhbnNhY3Rpb24udG8gJiYgQmlnTnVtYmVyLmZyb20odHJhbnNhY3Rpb24udG8pLmlzWmVybygpKSB7XG4gICAgICAgICAgICB0cmFuc2FjdGlvbi50byA9IFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVuYW1lIGlucHV0IHRvIGRhdGFcbiAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmlucHV0ICE9IG51bGwgJiYgdHJhbnNhY3Rpb24uZGF0YSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5kYXRhID0gdHJhbnNhY3Rpb24uaW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdG8gYW5kIGNyZWF0ZXMgYXJlIGVtcHR5LCBwb3B1bGF0ZSB0aGUgY3JlYXRlcyBmcm9tIHRoZSB0cmFuc2FjdGlvblxuICAgICAgICBpZiAodHJhbnNhY3Rpb24udG8gPT0gbnVsbCAmJiB0cmFuc2FjdGlvbi5jcmVhdGVzID09IG51bGwpIHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmNyZWF0ZXMgPSB0aGlzLmNvbnRyYWN0QWRkcmVzcyh0cmFuc2FjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0cmFuc2FjdGlvbi50eXBlID09PSAxIHx8IHRyYW5zYWN0aW9uLnR5cGUgPT09IDIpICYmIHRyYW5zYWN0aW9uLmFjY2Vzc0xpc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24uYWNjZXNzTGlzdCA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IEZvcm1hdHRlci5jaGVjayh0aGlzLmZvcm1hdHMudHJhbnNhY3Rpb24sIHRyYW5zYWN0aW9uKTtcbiAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmNoYWluSWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IGNoYWluSWQgPSB0cmFuc2FjdGlvbi5jaGFpbklkO1xuICAgICAgICAgICAgaWYgKGlzSGV4U3RyaW5nKGNoYWluSWQpKSB7XG4gICAgICAgICAgICAgICAgY2hhaW5JZCA9IEJpZ051bWJlci5mcm9tKGNoYWluSWQpLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuY2hhaW5JZCA9IGNoYWluSWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgY2hhaW5JZCA9IHRyYW5zYWN0aW9uLm5ldHdvcmtJZDtcbiAgICAgICAgICAgIC8vIGdldGgtZXRjIHJldHVybnMgY2hhaW5JZFxuICAgICAgICAgICAgaWYgKGNoYWluSWQgPT0gbnVsbCAmJiByZXN1bHQudiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2hhaW5JZCA9IHRyYW5zYWN0aW9uLmNoYWluSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNIZXhTdHJpbmcoY2hhaW5JZCkpIHtcbiAgICAgICAgICAgICAgICBjaGFpbklkID0gQmlnTnVtYmVyLmZyb20oY2hhaW5JZCkudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGNoYWluSWQpICE9PSBcIm51bWJlclwiICYmIHJlc3VsdC52ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjaGFpbklkID0gKHJlc3VsdC52IC0gMzUpIC8gMjtcbiAgICAgICAgICAgICAgICBpZiAoY2hhaW5JZCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhaW5JZCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoYWluSWQgPSBwYXJzZUludChjaGFpbklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGNoYWluSWQpICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgY2hhaW5JZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQuY2hhaW5JZCA9IGNoYWluSWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMHgwMDAwLi4uIHNob3VsZCBhY3R1YWxseSBiZSBudWxsXG4gICAgICAgIGlmIChyZXN1bHQuYmxvY2tIYXNoICYmIHJlc3VsdC5ibG9ja0hhc2gucmVwbGFjZSgvMC9nLCBcIlwiKSA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIHJlc3VsdC5ibG9ja0hhc2ggPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHRyYW5zYWN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVRyYW5zYWN0aW9uKHZhbHVlKTtcbiAgICB9XG4gICAgcmVjZWlwdExvZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gRm9ybWF0dGVyLmNoZWNrKHRoaXMuZm9ybWF0cy5yZWNlaXB0TG9nLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJlY2VpcHQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gRm9ybWF0dGVyLmNoZWNrKHRoaXMuZm9ybWF0cy5yZWNlaXB0LCB2YWx1ZSk7XG4gICAgICAgIC8vIFJTSyBpbmNvcnJlY3RseSBpbXBsZW1lbnRlZCBFSVAtNjU4LCBzbyB3ZSBtdW5nZSB0aGluZ3MgYSBiaXQgaGVyZSBmb3IgaXRcbiAgICAgICAgaWYgKHJlc3VsdC5yb290ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQucm9vdC5sZW5ndGggPD0gNCkge1xuICAgICAgICAgICAgICAgIC8vIENvdWxkIGJlIDB4MDAsIDB4MCwgMHgwMSBvciAweDFcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IEJpZ051bWJlci5mcm9tKHJlc3VsdC5yb290KS50b051bWJlcigpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMCB8fCB2YWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgaWYgYm90aCBhcmUgc3BlY2lmaWVkLCB0aGV5IG1hdGNoXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzICE9IG51bGwgJiYgKHJlc3VsdC5zdGF0dXMgIT09IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImFsdC1yb290LXN0YXR1cy9zdGF0dXMgbWlzbWF0Y2hcIiwgXCJ2YWx1ZVwiLCB7IHJvb3Q6IHJlc3VsdC5yb290LCBzdGF0dXM6IHJlc3VsdC5zdGF0dXMgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0LnJvb3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBhbHQtcm9vdC1zdGF0dXNcIiwgXCJ2YWx1ZS5yb290XCIsIHJlc3VsdC5yb290KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQucm9vdC5sZW5ndGggIT09IDY2KSB7XG4gICAgICAgICAgICAgICAgLy8gTXVzdCBiZSBhIHZhbGlkIGJ5dGVzMzJcbiAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCByb290IGhhc2hcIiwgXCJ2YWx1ZS5yb290XCIsIHJlc3VsdC5yb290KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXN1bHQuYnl6YW50aXVtID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICB0b3BpY3ModmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubWFwKCh2KSA9PiB0aGlzLnRvcGljcyh2KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFzaCh2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZpbHRlcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gRm9ybWF0dGVyLmNoZWNrKHRoaXMuZm9ybWF0cy5maWx0ZXIsIHZhbHVlKTtcbiAgICB9XG4gICAgZmlsdGVyTG9nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBGb3JtYXR0ZXIuY2hlY2sodGhpcy5mb3JtYXRzLmZpbHRlckxvZywgdmFsdWUpO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2soZm9ybWF0LCBvYmplY3QpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZvcm1hdCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvcm1hdFtrZXldKG9iamVjdFtrZXldKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yLmNoZWNrS2V5ID0ga2V5O1xuICAgICAgICAgICAgICAgIGVycm9yLmNoZWNrVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvLyBpZiB2YWx1ZSBpcyBudWxsLWlzaCwgbnVsbFZhbHVlIGlzIHJldHVybmVkXG4gICAgc3RhdGljIGFsbG93TnVsbChmb3JtYXQsIG51bGxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBJZiB2YWx1ZSBpcyBmYWxzZS1pc2gsIHJlcGxhY2VWYWx1ZSBpcyByZXR1cm5lZFxuICAgIHN0YXRpYyBhbGxvd0ZhbHNpc2goZm9ybWF0LCByZXBsYWNlVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBSZXF1aXJlcyBhbiBBcnJheSBzYXRpc2Z5aW5nIGNoZWNrXG4gICAgc3RhdGljIGFycmF5T2YoZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm90IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZvcm1hdCh2YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNDb21tdW5pdHlSZXNvdXJjYWJsZSh2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgJiYgdHlwZW9mICh2YWx1ZS5pc0NvbW11bml0eVJlc291cmNlKSA9PT0gXCJmdW5jdGlvblwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW11bml0eVJlc291cmNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIChpc0NvbW11bml0eVJlc291cmNhYmxlKHZhbHVlKSAmJiB2YWx1ZS5pc0NvbW11bml0eVJlc291cmNlKCkpO1xufVxuLy8gU2hvdyB0aGUgdGhyb3R0bGUgbWVzc2FnZSBvbmx5IG9uY2VcbmxldCB0aHJvdHRsZU1lc3NhZ2UgPSBmYWxzZTtcbmV4cG9ydCBmdW5jdGlvbiBzaG93VGhyb3R0bGVNZXNzYWdlKCkge1xuICAgIGlmICh0aHJvdHRsZU1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aHJvdHRsZU1lc3NhZ2UgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09IE5PVElDRSA9PT09PT09PT1cIik7XG4gICAgY29uc29sZS5sb2coXCJSZXF1ZXN0LVJhdGUgRXhjZWVkZWQgICh0aGlzIG1lc3NhZ2Ugd2lsbCBub3QgYmUgcmVwZWF0ZWQpXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiVGhlIGRlZmF1bHQgQVBJIGtleXMgZm9yIGVhY2ggc2VydmljZSBhcmUgcHJvdmlkZWQgYXMgYSBoaWdobHktdGhyb3R0bGVkLFwiKTtcbiAgICBjb25zb2xlLmxvZyhcImNvbW11bml0eSByZXNvdXJjZSBmb3IgbG93LXRyYWZmaWMgcHJvamVjdHMgYW5kIGVhcmx5IHByb3RvdHlwaW5nLlwiKTtcbiAgICBjb25zb2xlLmxvZyhcIlwiKTtcbiAgICBjb25zb2xlLmxvZyhcIldoaWxlIHlvdXIgYXBwbGljYXRpb24gd2lsbCBjb250aW51ZSB0byBmdW5jdGlvbiwgd2UgaGlnaGx5IHJlY29tbWVuZGVkXCIpO1xuICAgIGNvbnNvbGUubG9nKFwic2lnbmluZyB1cCBmb3IgeW91ciBvd24gQVBJIGtleXMgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZSwgaW5jcmVhc2UgeW91clwiKTtcbiAgICBjb25zb2xlLmxvZyhcInJlcXVlc3QgcmF0ZS9saW1pdCBhbmQgZW5hYmxlIG90aGVyIHBlcmtzLCBzdWNoIGFzIG1ldHJpY3MgYW5kIGFkdmFuY2VkIEFQSXMuXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiRm9yIG1vcmUgZGV0YWlsczogaHR0cHM6L1xcL2RvY3MuZXRoZXJzLmlvL2FwaS1rZXlzL1wiKTtcbiAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09XCIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBTaWduZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYWJzdHJhY3Qtc2lnbmVyXCI7XG5pbXBvcnQgeyBCaWdOdW1iZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYmlnbnVtYmVyXCI7XG5pbXBvcnQgeyBoZXhsaWZ5LCBoZXhWYWx1ZSwgaXNIZXhTdHJpbmcgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYnl0ZXNcIjtcbmltcG9ydCB7IF9UeXBlZERhdGFFbmNvZGVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2hhc2hcIjtcbmltcG9ydCB7IGNoZWNrUHJvcGVydGllcywgZGVlcENvcHksIGRlZmluZVJlYWRPbmx5LCBnZXRTdGF0aWMsIHJlc29sdmVQcm9wZXJ0aWVzLCBzaGFsbG93Q29weSB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyB0b1V0ZjhCeXRlcyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9zdHJpbmdzXCI7XG5pbXBvcnQgeyBhY2Nlc3NMaXN0aWZ5IH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3RyYW5zYWN0aW9uc1wiO1xuaW1wb3J0IHsgZmV0Y2hKc29uLCBwb2xsIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3dlYlwiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2xvZ2dlclwiO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gXCIuL192ZXJzaW9uXCI7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKHZlcnNpb24pO1xuaW1wb3J0IHsgQmFzZVByb3ZpZGVyIH0gZnJvbSBcIi4vYmFzZS1wcm92aWRlclwiO1xuY29uc3QgZXJyb3JHYXMgPSBbXCJjYWxsXCIsIFwiZXN0aW1hdGVHYXNcIl07XG5mdW5jdGlvbiBjaGVja0Vycm9yKG1ldGhvZCwgZXJyb3IsIHBhcmFtcykge1xuICAgIC8vIFVuZG8gdGhlIFwiY29udmVuaWVuY2VcIiBzb21lIG5vZGVzIGFyZSBhdHRlbXB0aW5nIHRvIHByZXZlbnQgYmFja3dhcmRzXG4gICAgLy8gaW5jb21wYXRpYmlsaXR5OyBtYXliZSBmb3IgdjYgY29uc2lkZXIgZm9yd2FyZGluZyByZXZlcnRzIGFzIGVycm9yc1xuICAgIGlmIChtZXRob2QgPT09IFwiY2FsbFwiICYmIGVycm9yLmNvZGUgPT09IExvZ2dlci5lcnJvcnMuU0VSVkVSX0VSUk9SKSB7XG4gICAgICAgIGNvbnN0IGUgPSBlcnJvci5lcnJvcjtcbiAgICAgICAgaWYgKGUgJiYgZS5tZXNzYWdlLm1hdGNoKFwicmV2ZXJ0ZWRcIikgJiYgaXNIZXhTdHJpbmcoZS5kYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIGUuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihcIm1pc3NpbmcgcmV2ZXJ0IGRhdGEgaW4gY2FsbCBleGNlcHRpb25cIiwgTG9nZ2VyLmVycm9ycy5DQUxMX0VYQ0VQVElPTiwge1xuICAgICAgICAgICAgZXJyb3IsIGRhdGE6IFwiMHhcIlxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgIGlmIChlcnJvci5jb2RlID09PSBMb2dnZXIuZXJyb3JzLlNFUlZFUl9FUlJPUiAmJiBlcnJvci5lcnJvciAmJiB0eXBlb2YgKGVycm9yLmVycm9yLm1lc3NhZ2UpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBlcnJvci5lcnJvci5tZXNzYWdlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgKGVycm9yLmJvZHkpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBlcnJvci5ib2R5O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgKGVycm9yLnJlc3BvbnNlVGV4dCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlVGV4dDtcbiAgICB9XG4gICAgbWVzc2FnZSA9IChtZXNzYWdlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBwYXJhbXMudHJhbnNhY3Rpb24gfHwgcGFyYW1zLnNpZ25lZFRyYW5zYWN0aW9uO1xuICAgIC8vIFwiaW5zdWZmaWNpZW50IGZ1bmRzIGZvciBnYXMgKiBwcmljZSArIHZhbHVlICsgY29zdChkYXRhKVwiXG4gICAgaWYgKG1lc3NhZ2UubWF0Y2goL2luc3VmZmljaWVudCBmdW5kc3xiYXNlIGZlZSBleGNlZWRzIGdhcyBsaW1pdC8pKSB7XG4gICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwiaW5zdWZmaWNpZW50IGZ1bmRzIGZvciBpbnRyaW5zaWMgdHJhbnNhY3Rpb24gY29zdFwiLCBMb2dnZXIuZXJyb3JzLklOU1VGRklDSUVOVF9GVU5EUywge1xuICAgICAgICAgICAgZXJyb3IsIG1ldGhvZCwgdHJhbnNhY3Rpb25cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFwibm9uY2UgdG9vIGxvd1wiXG4gICAgaWYgKG1lc3NhZ2UubWF0Y2goL25vbmNlIHRvbyBsb3cvKSkge1xuICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihcIm5vbmNlIGhhcyBhbHJlYWR5IGJlZW4gdXNlZFwiLCBMb2dnZXIuZXJyb3JzLk5PTkNFX0VYUElSRUQsIHtcbiAgICAgICAgICAgIGVycm9yLCBtZXRob2QsIHRyYW5zYWN0aW9uXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBcInJlcGxhY2VtZW50IHRyYW5zYWN0aW9uIHVuZGVycHJpY2VkXCJcbiAgICBpZiAobWVzc2FnZS5tYXRjaCgvcmVwbGFjZW1lbnQgdHJhbnNhY3Rpb24gdW5kZXJwcmljZWQvKSkge1xuICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihcInJlcGxhY2VtZW50IGZlZSB0b28gbG93XCIsIExvZ2dlci5lcnJvcnMuUkVQTEFDRU1FTlRfVU5ERVJQUklDRUQsIHtcbiAgICAgICAgICAgIGVycm9yLCBtZXRob2QsIHRyYW5zYWN0aW9uXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBcInJlcGxhY2VtZW50IHRyYW5zYWN0aW9uIHVuZGVycHJpY2VkXCJcbiAgICBpZiAobWVzc2FnZS5tYXRjaCgvb25seSByZXBsYXktcHJvdGVjdGVkLykpIHtcbiAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoXCJsZWdhY3kgcHJlLWVpcC0xNTUgdHJhbnNhY3Rpb25zIG5vdCBzdXBwb3J0ZWRcIiwgTG9nZ2VyLmVycm9ycy5VTlNVUFBPUlRFRF9PUEVSQVRJT04sIHtcbiAgICAgICAgICAgIGVycm9yLCBtZXRob2QsIHRyYW5zYWN0aW9uXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZXJyb3JHYXMuaW5kZXhPZihtZXRob2QpID49IDAgJiYgbWVzc2FnZS5tYXRjaCgvZ2FzIHJlcXVpcmVkIGV4Y2VlZHMgYWxsb3dhbmNlfGFsd2F5cyBmYWlsaW5nIHRyYW5zYWN0aW9ufGV4ZWN1dGlvbiByZXZlcnRlZC8pKSB7XG4gICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwiY2Fubm90IGVzdGltYXRlIGdhczsgdHJhbnNhY3Rpb24gbWF5IGZhaWwgb3IgbWF5IHJlcXVpcmUgbWFudWFsIGdhcyBsaW1pdFwiLCBMb2dnZXIuZXJyb3JzLlVOUFJFRElDVEFCTEVfR0FTX0xJTUlULCB7XG4gICAgICAgICAgICBlcnJvciwgbWV0aG9kLCB0cmFuc2FjdGlvblxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG59XG5mdW5jdGlvbiB0aW1lcih0aW1lb3V0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZW91dCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRSZXN1bHQocGF5bG9hZCkge1xuICAgIGlmIChwYXlsb2FkLmVycm9yKSB7XG4gICAgICAgIC8vIEBUT0RPOiBub3QgYW55XG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHBheWxvYWQuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIGVycm9yLmNvZGUgPSBwYXlsb2FkLmVycm9yLmNvZGU7XG4gICAgICAgIGVycm9yLmRhdGEgPSBwYXlsb2FkLmVycm9yLmRhdGE7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICByZXR1cm4gcGF5bG9hZC5yZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRMb3dlckNhc2UodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmNvbnN0IF9jb25zdHJ1Y3Rvckd1YXJkID0ge307XG5leHBvcnQgY2xhc3MgSnNvblJwY1NpZ25lciBleHRlbmRzIFNpZ25lciB7XG4gICAgY29uc3RydWN0b3IoY29uc3RydWN0b3JHdWFyZCwgcHJvdmlkZXIsIGFkZHJlc3NPckluZGV4KSB7XG4gICAgICAgIGxvZ2dlci5jaGVja05ldyhuZXcudGFyZ2V0LCBKc29uUnBjU2lnbmVyKTtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yR3VhcmQgIT09IF9jb25zdHJ1Y3Rvckd1YXJkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkbyBub3QgY2FsbCB0aGUgSnNvblJwY1NpZ25lciBjb25zdHJ1Y3RvciBkaXJlY3RseTsgdXNlIHByb3ZpZGVyLmdldFNpZ25lclwiKTtcbiAgICAgICAgfVxuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcInByb3ZpZGVyXCIsIHByb3ZpZGVyKTtcbiAgICAgICAgaWYgKGFkZHJlc3NPckluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgIGFkZHJlc3NPckluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIChhZGRyZXNzT3JJbmRleCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiX2FkZHJlc3NcIiwgdGhpcy5wcm92aWRlci5mb3JtYXR0ZXIuYWRkcmVzcyhhZGRyZXNzT3JJbmRleCkpO1xuICAgICAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJfaW5kZXhcIiwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIChhZGRyZXNzT3JJbmRleCkgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiX2luZGV4XCIsIGFkZHJlc3NPckluZGV4KTtcbiAgICAgICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiX2FkZHJlc3NcIiwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBhZGRyZXNzIG9yIGluZGV4XCIsIFwiYWRkcmVzc09ySW5kZXhcIiwgYWRkcmVzc09ySW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbm5lY3QocHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIGxvZ2dlci50aHJvd0Vycm9yKFwiY2Fubm90IGFsdGVyIEpTT04tUlBDIFNpZ25lciBjb25uZWN0aW9uXCIsIExvZ2dlci5lcnJvcnMuVU5TVVBQT1JURURfT1BFUkFUSU9OLCB7XG4gICAgICAgICAgICBvcGVyYXRpb246IFwiY29ubmVjdFwiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0VW5jaGVja2VkKCkge1xuICAgICAgICByZXR1cm4gbmV3IFVuY2hlY2tlZEpzb25ScGNTaWduZXIoX2NvbnN0cnVjdG9yR3VhcmQsIHRoaXMucHJvdmlkZXIsIHRoaXMuX2FkZHJlc3MgfHwgdGhpcy5faW5kZXgpO1xuICAgIH1cbiAgICBnZXRBZGRyZXNzKCkge1xuICAgICAgICBpZiAodGhpcy5fYWRkcmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9hZGRyZXNzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlci5zZW5kKFwiZXRoX2FjY291bnRzXCIsIFtdKS50aGVuKChhY2NvdW50cykgPT4ge1xuICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA8PSB0aGlzLl9pbmRleCkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwidW5rbm93biBhY2NvdW50ICNcIiArIHRoaXMuX2luZGV4LCBMb2dnZXIuZXJyb3JzLlVOU1VQUE9SVEVEX09QRVJBVElPTiwge1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IFwiZ2V0QWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlci5mb3JtYXR0ZXIuYWRkcmVzcyhhY2NvdW50c1t0aGlzLl9pbmRleF0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2VuZFVuY2hlY2tlZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgIHRyYW5zYWN0aW9uID0gc2hhbGxvd0NvcHkodHJhbnNhY3Rpb24pO1xuICAgICAgICBjb25zdCBmcm9tQWRkcmVzcyA9IHRoaXMuZ2V0QWRkcmVzcygpLnRoZW4oKGFkZHJlc3MpID0+IHtcbiAgICAgICAgICAgIGlmIChhZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3MudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZGRyZXNzO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhlIEpTT04tUlBDIGZvciBldGhfc2VuZFRyYW5zYWN0aW9uIHVzZXMgOTAwMDAgZ2FzOyBpZiB0aGUgdXNlclxuICAgICAgICAvLyB3aXNoZXMgdG8gdXNlIHRoaXMsIGl0IGlzIGVhc3kgdG8gc3BlY2lmeSBleHBsaWNpdGx5LCBvdGhlcndpc2VcbiAgICAgICAgLy8gd2UgbG9vayBpdCB1cCBmb3IgdGhlbS5cbiAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmdhc0xpbWl0ID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGVzdGltYXRlID0gc2hhbGxvd0NvcHkodHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgZXN0aW1hdGUuZnJvbSA9IGZyb21BZGRyZXNzO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24uZ2FzTGltaXQgPSB0aGlzLnByb3ZpZGVyLmVzdGltYXRlR2FzKGVzdGltYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhbnNhY3Rpb24udG8gIT0gbnVsbCkge1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24udG8gPSBQcm9taXNlLnJlc29sdmUodHJhbnNhY3Rpb24udG8pLnRoZW4oKHRvKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSB5aWVsZCB0aGlzLnByb3ZpZGVyLnJlc29sdmVOYW1lKHRvKTtcbiAgICAgICAgICAgICAgICBpZiAoYWRkcmVzcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJwcm92aWRlZCBFTlMgbmFtZSByZXNvbHZlcyB0byBudWxsXCIsIFwidHgudG9cIiwgdG8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkcmVzcztcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb3BlcnRpZXMoe1xuICAgICAgICAgICAgdHg6IHJlc29sdmVQcm9wZXJ0aWVzKHRyYW5zYWN0aW9uKSxcbiAgICAgICAgICAgIHNlbmRlcjogZnJvbUFkZHJlc3NcbiAgICAgICAgfSkudGhlbigoeyB0eCwgc2VuZGVyIH0pID0+IHtcbiAgICAgICAgICAgIGlmICh0eC5mcm9tICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodHguZnJvbS50b0xvd2VyQ2FzZSgpICE9PSBzZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImZyb20gYWRkcmVzcyBtaXNtYXRjaFwiLCBcInRyYW5zYWN0aW9uXCIsIHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0eC5mcm9tID0gc2VuZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGV4VHggPSB0aGlzLnByb3ZpZGVyLmNvbnN0cnVjdG9yLmhleGxpZnlUcmFuc2FjdGlvbih0eCwgeyBmcm9tOiB0cnVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvdmlkZXIuc2VuZChcImV0aF9zZW5kVHJhbnNhY3Rpb25cIiwgW2hleFR4XSkudGhlbigoaGFzaCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYXNoO1xuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrRXJyb3IoXCJzZW5kVHJhbnNhY3Rpb25cIiwgZXJyb3IsIGhleFR4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnblRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBsb2dnZXIudGhyb3dFcnJvcihcInNpZ25pbmcgdHJhbnNhY3Rpb25zIGlzIHVuc3VwcG9ydGVkXCIsIExvZ2dlci5lcnJvcnMuVU5TVVBQT1JURURfT1BFUkFUSU9OLCB7XG4gICAgICAgICAgICBvcGVyYXRpb246IFwic2lnblRyYW5zYWN0aW9uXCJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNlbmRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gVGhpcyBjYW5ub3QgYmUgbWluZWQgYW55IGVhcmxpZXIgdGhhbiBhbnkgcmVjZW50IGJsb2NrXG4gICAgICAgICAgICBjb25zdCBibG9ja051bWJlciA9IHlpZWxkIHRoaXMucHJvdmlkZXIuX2dldEludGVybmFsQmxvY2tOdW1iZXIoMTAwICsgMiAqIHRoaXMucHJvdmlkZXIucG9sbGluZ0ludGVydmFsKTtcbiAgICAgICAgICAgIC8vIFNlbmQgdGhlIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICBjb25zdCBoYXNoID0geWllbGQgdGhpcy5zZW5kVW5jaGVja2VkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBVbmZvcnR1bmF0ZWx5LCBKU09OLVJQQyBvbmx5IHByb3ZpZGVzIGFuZCBvcGFxdWUgdHJhbnNhY3Rpb24gaGFzaFxuICAgICAgICAgICAgICAgIC8vIGZvciBhIHJlc3BvbnNlLCBhbmQgd2UgbmVlZCB0aGUgYWN0dWFsIHRyYW5zYWN0aW9uLCBzbyB3ZSBwb2xsXG4gICAgICAgICAgICAgICAgLy8gZm9yIGl0OyBpdCBzaG91bGQgc2hvdyB1cCB2ZXJ5IHF1aWNrbHlcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgcG9sbCgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR4ID0geWllbGQgdGhpcy5wcm92aWRlci5nZXRUcmFuc2FjdGlvbihoYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR4ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVyLl93cmFwVHJhbnNhY3Rpb24odHgsIGhhc2gsIGJsb2NrTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9KSwgeyBvbmNlUG9sbDogdGhpcy5wcm92aWRlciB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yLnRyYW5zYWN0aW9uSGFzaCA9IGhhc2g7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaWduTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gKCh0eXBlb2YgKG1lc3NhZ2UpID09PSBcInN0cmluZ1wiKSA/IHRvVXRmOEJ5dGVzKG1lc3NhZ2UpIDogbWVzc2FnZSk7XG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0geWllbGQgdGhpcy5nZXRBZGRyZXNzKCk7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgdGhpcy5wcm92aWRlci5zZW5kKFwicGVyc29uYWxfc2lnblwiLCBbaGV4bGlmeShkYXRhKSwgYWRkcmVzcy50b0xvd2VyQ2FzZSgpXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfbGVnYWN5U2lnbk1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9ICgodHlwZW9mIChtZXNzYWdlKSA9PT0gXCJzdHJpbmdcIikgPyB0b1V0ZjhCeXRlcyhtZXNzYWdlKSA6IG1lc3NhZ2UpO1xuICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9IHlpZWxkIHRoaXMuZ2V0QWRkcmVzcygpO1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2V0aGVyZXVtL3dpa2kvd2lraS9KU09OLVJQQyNldGhfc2lnblxuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHRoaXMucHJvdmlkZXIuc2VuZChcImV0aF9zaWduXCIsIFthZGRyZXNzLnRvTG93ZXJDYXNlKCksIGhleGxpZnkoZGF0YSldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zaWduVHlwZWREYXRhKGRvbWFpbiwgdHlwZXMsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSBhbnkgRU5TIG5hbWVzIChpbi1wbGFjZSlcbiAgICAgICAgICAgIGNvbnN0IHBvcHVsYXRlZCA9IHlpZWxkIF9UeXBlZERhdGFFbmNvZGVyLnJlc29sdmVOYW1lcyhkb21haW4sIHR5cGVzLCB2YWx1ZSwgKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlci5yZXNvbHZlTmFtZShuYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9IHlpZWxkIHRoaXMuZ2V0QWRkcmVzcygpO1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHRoaXMucHJvdmlkZXIuc2VuZChcImV0aF9zaWduVHlwZWREYXRhX3Y0XCIsIFtcbiAgICAgICAgICAgICAgICBhZGRyZXNzLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoX1R5cGVkRGF0YUVuY29kZXIuZ2V0UGF5bG9hZChwb3B1bGF0ZWQuZG9tYWluLCB0eXBlcywgcG9wdWxhdGVkLnZhbHVlKSlcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdW5sb2NrKHBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IHRoaXMucHJvdmlkZXI7XG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0geWllbGQgdGhpcy5nZXRBZGRyZXNzKCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvdmlkZXIuc2VuZChcInBlcnNvbmFsX3VubG9ja0FjY291bnRcIiwgW2FkZHJlc3MudG9Mb3dlckNhc2UoKSwgcGFzc3dvcmQsIG51bGxdKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY2xhc3MgVW5jaGVja2VkSnNvblJwY1NpZ25lciBleHRlbmRzIEpzb25ScGNTaWduZXIge1xuICAgIHNlbmRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kVW5jaGVja2VkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pLnRoZW4oKGhhc2gpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGFzaDogaGFzaCxcbiAgICAgICAgICAgICAgICBub25jZTogbnVsbCxcbiAgICAgICAgICAgICAgICBnYXNMaW1pdDogbnVsbCxcbiAgICAgICAgICAgICAgICBnYXNQcmljZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgIGNoYWluSWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY29uZmlybWF0aW9uczogMCxcbiAgICAgICAgICAgICAgICBmcm9tOiBudWxsLFxuICAgICAgICAgICAgICAgIHdhaXQ6IChjb25maXJtYXRpb25zKSA9PiB7IHJldHVybiB0aGlzLnByb3ZpZGVyLndhaXRGb3JUcmFuc2FjdGlvbihoYXNoLCBjb25maXJtYXRpb25zKTsgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY29uc3QgYWxsb3dlZFRyYW5zYWN0aW9uS2V5cyA9IHtcbiAgICBjaGFpbklkOiB0cnVlLCBkYXRhOiB0cnVlLCBnYXNMaW1pdDogdHJ1ZSwgZ2FzUHJpY2U6IHRydWUsIG5vbmNlOiB0cnVlLCB0bzogdHJ1ZSwgdmFsdWU6IHRydWUsXG4gICAgdHlwZTogdHJ1ZSwgYWNjZXNzTGlzdDogdHJ1ZSxcbiAgICBtYXhGZWVQZXJHYXM6IHRydWUsIG1heFByaW9yaXR5RmVlUGVyR2FzOiB0cnVlXG59O1xuZXhwb3J0IGNsYXNzIEpzb25ScGNQcm92aWRlciBleHRlbmRzIEJhc2VQcm92aWRlciB7XG4gICAgY29uc3RydWN0b3IodXJsLCBuZXR3b3JrKSB7XG4gICAgICAgIGxvZ2dlci5jaGVja05ldyhuZXcudGFyZ2V0LCBKc29uUnBjUHJvdmlkZXIpO1xuICAgICAgICBsZXQgbmV0d29ya09yUmVhZHkgPSBuZXR3b3JrO1xuICAgICAgICAvLyBUaGUgbmV0d29yayBpcyB1bmtub3duLCBxdWVyeSB0aGUgSlNPTi1SUEMgZm9yIGl0XG4gICAgICAgIGlmIChuZXR3b3JrT3JSZWFkeSA9PSBudWxsKSB7XG4gICAgICAgICAgICBuZXR3b3JrT3JSZWFkeSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRlY3ROZXR3b3JrKCkudGhlbigobmV0d29yaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXR3b3JrKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKG5ldHdvcmtPclJlYWR5KTtcbiAgICAgICAgLy8gRGVmYXVsdCBVUkxcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIHVybCA9IGdldFN0YXRpYyh0aGlzLmNvbnN0cnVjdG9yLCBcImRlZmF1bHRVcmxcIikoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mICh1cmwpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcImNvbm5lY3Rpb25cIiwgT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiY29ubmVjdGlvblwiLCBPYmplY3QuZnJlZXplKHNoYWxsb3dDb3B5KHVybCkpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9uZXh0SWQgPSA0MjtcbiAgICB9XG4gICAgZ2V0IF9jYWNoZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50TG9vcENhY2hlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TG9vcENhY2hlID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50TG9vcENhY2hlO1xuICAgIH1cbiAgICBzdGF0aWMgZGVmYXVsdFVybCgpIHtcbiAgICAgICAgcmV0dXJuIFwiaHR0cDovXFwvbG9jYWxob3N0Ojg1NDVcIjtcbiAgICB9XG4gICAgZGV0ZWN0TmV0d29yaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZVtcImRldGVjdE5ldHdvcmtcIl0pIHtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlW1wiZGV0ZWN0TmV0d29ya1wiXSA9IHRoaXMuX3VuY2FjaGVkRGV0ZWN0TmV0d29yaygpO1xuICAgICAgICAgICAgLy8gQ2xlYXIgdGhpcyBjYWNoZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBuZXh0IGV2ZW50IGxvb3BcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlW1wiZGV0ZWN0TmV0d29ya1wiXSA9IG51bGw7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVbXCJkZXRlY3ROZXR3b3JrXCJdO1xuICAgIH1cbiAgICBfdW5jYWNoZWREZXRlY3ROZXR3b3JrKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgdGltZXIoMCk7XG4gICAgICAgICAgICBsZXQgY2hhaW5JZCA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNoYWluSWQgPSB5aWVsZCB0aGlzLnNlbmQoXCJldGhfY2hhaW5JZFwiLCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjaGFpbklkID0geWllbGQgdGhpcy5zZW5kKFwibmV0X3ZlcnNpb25cIiwgW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYWluSWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdldE5ldHdvcmsgPSBnZXRTdGF0aWModGhpcy5jb25zdHJ1Y3RvciwgXCJnZXROZXR3b3JrXCIpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXROZXR3b3JrKEJpZ051bWJlci5mcm9tKGNoYWluSWQpLnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvZ2dlci50aHJvd0Vycm9yKFwiY291bGQgbm90IGRldGVjdCBuZXR3b3JrXCIsIExvZ2dlci5lcnJvcnMuTkVUV09SS19FUlJPUiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogY2hhaW5JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBcImludmFsaWROZXR3b3JrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJFcnJvcjogZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxvZ2dlci50aHJvd0Vycm9yKFwiY291bGQgbm90IGRldGVjdCBuZXR3b3JrXCIsIExvZ2dlci5lcnJvcnMuTkVUV09SS19FUlJPUiwge1xuICAgICAgICAgICAgICAgIGV2ZW50OiBcIm5vTmV0d29ya1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFNpZ25lcihhZGRyZXNzT3JJbmRleCkge1xuICAgICAgICByZXR1cm4gbmV3IEpzb25ScGNTaWduZXIoX2NvbnN0cnVjdG9yR3VhcmQsIHRoaXMsIGFkZHJlc3NPckluZGV4KTtcbiAgICB9XG4gICAgZ2V0VW5jaGVja2VkU2lnbmVyKGFkZHJlc3NPckluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFNpZ25lcihhZGRyZXNzT3JJbmRleCkuY29ubmVjdFVuY2hlY2tlZCgpO1xuICAgIH1cbiAgICBsaXN0QWNjb3VudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQoXCJldGhfYWNjb3VudHNcIiwgW10pLnRoZW4oKGFjY291bnRzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWNjb3VudHMubWFwKChhKSA9PiB0aGlzLmZvcm1hdHRlci5hZGRyZXNzKGEpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNlbmQobWV0aG9kLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgICBpZDogKHRoaXMuX25leHRJZCsrKSxcbiAgICAgICAgICAgIGpzb25ycGM6IFwiMi4wXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZGVidWdcIiwge1xuICAgICAgICAgICAgYWN0aW9uOiBcInJlcXVlc3RcIixcbiAgICAgICAgICAgIHJlcXVlc3Q6IGRlZXBDb3B5KHJlcXVlc3QpLFxuICAgICAgICAgICAgcHJvdmlkZXI6IHRoaXNcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFdlIGNhbiBleHBhbmQgdGhpcyBpbiB0aGUgZnV0dXJlIHRvIGFueSBjYWxsLCBidXQgZm9yIG5vdyB0aGVzZVxuICAgICAgICAvLyBhcmUgdGhlIGJpZ2dlc3Qgd2lucyBhbmQgZG8gbm90IHJlcXVpcmUgYW55IHNlcmlhbGl6aW5nIHBhcmFtZXRlcnMuXG4gICAgICAgIGNvbnN0IGNhY2hlID0gKFtcImV0aF9jaGFpbklkXCIsIFwiZXRoX2Jsb2NrTnVtYmVyXCJdLmluZGV4T2YobWV0aG9kKSA+PSAwKTtcbiAgICAgICAgaWYgKGNhY2hlICYmIHRoaXMuX2NhY2hlW21ldGhvZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZVttZXRob2RdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZldGNoSnNvbih0aGlzLmNvbm5lY3Rpb24sIEpTT04uc3RyaW5naWZ5KHJlcXVlc3QpLCBnZXRSZXN1bHQpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiZGVidWdcIiwge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJyZXNwb25zZVwiLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICBwcm92aWRlcjogdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImRlYnVnXCIsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwicmVzcG9uc2VcIixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgICAgICAgICBwcm92aWRlcjogdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIENhY2hlIHRoZSBmZXRjaCwgYnV0IGNsZWFyIGl0IG9uIHRoZSBuZXh0IGV2ZW50IGxvb3BcbiAgICAgICAgaWYgKGNhY2hlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZVttZXRob2RdID0gcmVzdWx0O1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVbbWV0aG9kXSA9IG51bGw7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcmVwYXJlUmVxdWVzdChtZXRob2QsIHBhcmFtcykge1xuICAgICAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICAgICAgY2FzZSBcImdldEJsb2NrTnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcImV0aF9ibG9ja051bWJlclwiLCBbXV07XG4gICAgICAgICAgICBjYXNlIFwiZ2V0R2FzUHJpY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gW1wiZXRoX2dhc1ByaWNlXCIsIFtdXTtcbiAgICAgICAgICAgIGNhc2UgXCJnZXRCYWxhbmNlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcImV0aF9nZXRCYWxhbmNlXCIsIFtnZXRMb3dlckNhc2UocGFyYW1zLmFkZHJlc3MpLCBwYXJhbXMuYmxvY2tUYWddXTtcbiAgICAgICAgICAgIGNhc2UgXCJnZXRUcmFuc2FjdGlvbkNvdW50XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcImV0aF9nZXRUcmFuc2FjdGlvbkNvdW50XCIsIFtnZXRMb3dlckNhc2UocGFyYW1zLmFkZHJlc3MpLCBwYXJhbXMuYmxvY2tUYWddXTtcbiAgICAgICAgICAgIGNhc2UgXCJnZXRDb2RlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcImV0aF9nZXRDb2RlXCIsIFtnZXRMb3dlckNhc2UocGFyYW1zLmFkZHJlc3MpLCBwYXJhbXMuYmxvY2tUYWddXTtcbiAgICAgICAgICAgIGNhc2UgXCJnZXRTdG9yYWdlQXRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gW1wiZXRoX2dldFN0b3JhZ2VBdFwiLCBbZ2V0TG93ZXJDYXNlKHBhcmFtcy5hZGRyZXNzKSwgcGFyYW1zLnBvc2l0aW9uLCBwYXJhbXMuYmxvY2tUYWddXTtcbiAgICAgICAgICAgIGNhc2UgXCJzZW5kVHJhbnNhY3Rpb25cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gW1wiZXRoX3NlbmRSYXdUcmFuc2FjdGlvblwiLCBbcGFyYW1zLnNpZ25lZFRyYW5zYWN0aW9uXV07XG4gICAgICAgICAgICBjYXNlIFwiZ2V0QmxvY2tcIjpcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmJsb2NrVGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXCJldGhfZ2V0QmxvY2tCeU51bWJlclwiLCBbcGFyYW1zLmJsb2NrVGFnLCAhIXBhcmFtcy5pbmNsdWRlVHJhbnNhY3Rpb25zXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmFtcy5ibG9ja0hhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcImV0aF9nZXRCbG9ja0J5SGFzaFwiLCBbcGFyYW1zLmJsb2NrSGFzaCwgISFwYXJhbXMuaW5jbHVkZVRyYW5zYWN0aW9uc11dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNhc2UgXCJnZXRUcmFuc2FjdGlvblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBbXCJldGhfZ2V0VHJhbnNhY3Rpb25CeUhhc2hcIiwgW3BhcmFtcy50cmFuc2FjdGlvbkhhc2hdXTtcbiAgICAgICAgICAgIGNhc2UgXCJnZXRUcmFuc2FjdGlvblJlY2VpcHRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gW1wiZXRoX2dldFRyYW5zYWN0aW9uUmVjZWlwdFwiLCBbcGFyYW1zLnRyYW5zYWN0aW9uSGFzaF1dO1xuICAgICAgICAgICAgY2FzZSBcImNhbGxcIjoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhleGxpZnlUcmFuc2FjdGlvbiA9IGdldFN0YXRpYyh0aGlzLmNvbnN0cnVjdG9yLCBcImhleGxpZnlUcmFuc2FjdGlvblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1wiZXRoX2NhbGxcIiwgW2hleGxpZnlUcmFuc2FjdGlvbihwYXJhbXMudHJhbnNhY3Rpb24sIHsgZnJvbTogdHJ1ZSB9KSwgcGFyYW1zLmJsb2NrVGFnXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiZXN0aW1hdGVHYXNcIjoge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhleGxpZnlUcmFuc2FjdGlvbiA9IGdldFN0YXRpYyh0aGlzLmNvbnN0cnVjdG9yLCBcImhleGxpZnlUcmFuc2FjdGlvblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1wiZXRoX2VzdGltYXRlR2FzXCIsIFtoZXhsaWZ5VHJhbnNhY3Rpb24ocGFyYW1zLnRyYW5zYWN0aW9uLCB7IGZyb206IHRydWUgfSldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJnZXRMb2dzXCI6XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5maWx0ZXIgJiYgcGFyYW1zLmZpbHRlci5hZGRyZXNzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmZpbHRlci5hZGRyZXNzID0gZ2V0TG93ZXJDYXNlKHBhcmFtcy5maWx0ZXIuYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbXCJldGhfZ2V0TG9nc1wiLCBbcGFyYW1zLmZpbHRlcl1dO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcGVyZm9ybShtZXRob2QsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gTGVnYWN5IG5ldHdvcmtzIGRvIG5vdCBsaWtlIHRoZSB0eXBlIGZpZWxkIGJlaW5nIHBhc3NlZCBhbG9uZyAod2hpY2hcbiAgICAgICAgICAgIC8vIGlzIGZhaXIpLCBzbyB3ZSBkZWxldGUgdHlwZSBpZiBpdCBpcyAwIGFuZCBhIG5vbi1FSVAtMTU1OSBuZXR3b3JrXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcImNhbGxcIiB8fCBtZXRob2QgPT09IFwiZXN0aW1hdGVHYXNcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHR4ID0gcGFyYW1zLnRyYW5zYWN0aW9uO1xuICAgICAgICAgICAgICAgIGlmICh0eCAmJiB0eC50eXBlICE9IG51bGwgJiYgQmlnTnVtYmVyLmZyb20odHgudHlwZSkuaXNaZXJvKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIEVJUC0xNTU5IHByb3BlcnRpZXMsIGl0IG1pZ2h0IGJlIG5vbi1FSVAtYTU1OVxuICAgICAgICAgICAgICAgICAgICBpZiAodHgubWF4RmVlUGVyR2FzID09IG51bGwgJiYgdHgubWF4UHJpb3JpdHlGZWVQZXJHYXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmVlRGF0YSA9IHlpZWxkIHRoaXMuZ2V0RmVlRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlZURhdGEubWF4RmVlUGVyR2FzID09IG51bGwgJiYgZmVlRGF0YS5tYXhQcmlvcml0eUZlZVBlckdhcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmV0d29yayBkb2Vzbid0IGtub3cgYWJvdXQgRUlQLTE1NTkgKGFuZCBoZW5jZSB0eXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHNoYWxsb3dDb3B5KHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnRyYW5zYWN0aW9uID0gc2hhbGxvd0NvcHkodHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXMudHJhbnNhY3Rpb24udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLnByZXBhcmVSZXF1ZXN0KG1ldGhvZCwgcGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChhcmdzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihtZXRob2QgKyBcIiBub3QgaW1wbGVtZW50ZWRcIiwgTG9nZ2VyLmVycm9ycy5OT1RfSU1QTEVNRU5URUQsIHsgb3BlcmF0aW9uOiBtZXRob2QgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCB0aGlzLnNlbmQoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tFcnJvcihtZXRob2QsIGVycm9yLCBwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3N0YXJ0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhZyA9PT0gXCJwZW5kaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0UGVuZGluZygpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLl9zdGFydEV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgX3N0YXJ0UGVuZGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3BlbmRpbmdGaWx0ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBwZW5kaW5nRmlsdGVyID0gdGhpcy5zZW5kKFwiZXRoX25ld1BlbmRpbmdUcmFuc2FjdGlvbkZpbHRlclwiLCBbXSk7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdGaWx0ZXIgPSBwZW5kaW5nRmlsdGVyO1xuICAgICAgICBwZW5kaW5nRmlsdGVyLnRoZW4oZnVuY3Rpb24gKGZpbHRlcklkKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBwb2xsKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2VuZChcImV0aF9nZXRGaWx0ZXJDaGFuZ2VzXCIsIFtmaWx0ZXJJZF0pLnRoZW4oZnVuY3Rpb24gKGhhc2hlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5fcGVuZGluZ0ZpbHRlciAhPSBwZW5kaW5nRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VxID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGhhc2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChoYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAVE9ETzogVGhpcyBzaG91bGQgYmUgZ2FyYmFnZSBjb2xsZWN0ZWQgYXQgc29tZSBwb2ludC4uLiBIb3c/IFdoZW4/XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9lbWl0dGVkW1widDpcIiArIGhhc2gudG9Mb3dlckNhc2UoKV0gPSBcInBlbmRpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcSA9IHNlcS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5nZXRUcmFuc2FjdGlvbihoYXNoKS50aGVuKGZ1bmN0aW9uICh0eCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmVtaXQoXCJwZW5kaW5nXCIsIHR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXEudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZXIoMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5fcGVuZGluZ0ZpbHRlciAhPSBwZW5kaW5nRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbmQoXCJldGhfdW5pbnN0YWxsRmlsdGVyXCIsIFtmaWx0ZXJJZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBwb2xsKCk7IH0sIDApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2xsKCk7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVySWQ7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4geyB9KTtcbiAgICB9XG4gICAgX3N0b3BFdmVudChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFnID09PSBcInBlbmRpbmdcIiAmJiB0aGlzLmxpc3RlbmVyQ291bnQoXCJwZW5kaW5nXCIpID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nRmlsdGVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5fc3RvcEV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgLy8gQ29udmVydCBhbiBldGhlcnMuanMgdHJhbnNhY3Rpb24gaW50byBhIEpTT04tUlBDIHRyYW5zYWN0aW9uXG4gICAgLy8gIC0gZ2FzTGltaXQgPT4gZ2FzXG4gICAgLy8gIC0gQWxsIHZhbHVlcyBoZXhsaWZpZWRcbiAgICAvLyAgLSBBbGwgbnVtZXJpYyB2YWx1ZXMgemVyby1zdHJpcGVkXG4gICAgLy8gIC0gQWxsIGFkZHJlc3NlcyBhcmUgbG93ZXJjYXNlZFxuICAgIC8vIE5PVEU6IFRoaXMgYWxsb3dzIGEgVHJhbnNhY3Rpb25SZXF1ZXN0LCBidXQgYWxsIHZhbHVlcyBzaG91bGQgYmUgcmVzb2x2ZWRcbiAgICAvLyAgICAgICBiZWZvcmUgdGhpcyBpcyBjYWxsZWRcbiAgICAvLyBAVE9ETzogVGhpcyB3aWxsIGxpa2VseSBiZSByZW1vdmVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBhbmQgcHJlcGFyZVJlcXVlc3RcbiAgICAvLyAgICAgICAgd2lsbCBiZSB0aGUgcHJlZmVycmVkIG1ldGhvZCBmb3IgdGhpcy5cbiAgICBzdGF0aWMgaGV4bGlmeVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBhbGxvd0V4dHJhKSB7XG4gICAgICAgIC8vIENoZWNrIG9ubHkgYWxsb3dlZCBwcm9wZXJ0aWVzIGFyZSBnaXZlblxuICAgICAgICBjb25zdCBhbGxvd2VkID0gc2hhbGxvd0NvcHkoYWxsb3dlZFRyYW5zYWN0aW9uS2V5cyk7XG4gICAgICAgIGlmIChhbGxvd0V4dHJhKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBhbGxvd0V4dHJhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFsbG93RXh0cmFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBhbGxvd2VkW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGVja1Byb3BlcnRpZXModHJhbnNhY3Rpb24sIGFsbG93ZWQpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgLy8gU29tZSBub2RlcyAoSU5GVVJBIHJvcHN0ZW47IElORlVSQSBtYWlubmV0IGlzIGZpbmUpIGRvIG5vdCBsaWtlIGxlYWRpbmcgemVyb3MuXG4gICAgICAgIFtcImdhc0xpbWl0XCIsIFwiZ2FzUHJpY2VcIiwgXCJ0eXBlXCIsIFwibWF4RmVlUGVyR2FzXCIsIFwibWF4UHJpb3JpdHlGZWVQZXJHYXNcIiwgXCJub25jZVwiLCBcInZhbHVlXCJdLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uW2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaGV4VmFsdWUodHJhbnNhY3Rpb25ba2V5XSk7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcImdhc0xpbWl0XCIpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBcImdhc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIFtcImZyb21cIiwgXCJ0b1wiLCBcImRhdGFcIl0uZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAodHJhbnNhY3Rpb25ba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBoZXhsaWZ5KHRyYW5zYWN0aW9uW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmFjY2Vzc0xpc3QpIHtcbiAgICAgICAgICAgIHJlc3VsdFtcImFjY2Vzc0xpc3RcIl0gPSBhY2Nlc3NMaXN0aWZ5KHRyYW5zYWN0aW9uLmFjY2Vzc0xpc3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anNvbi1ycGMtcHJvdmlkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgeyBkZWVwQ29weSwgZGVmaW5lUmVhZE9ubHkgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2xvZ2dlclwiO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gXCIuL192ZXJzaW9uXCI7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKHZlcnNpb24pO1xuaW1wb3J0IHsgSnNvblJwY1Byb3ZpZGVyIH0gZnJvbSBcIi4vanNvbi1ycGMtcHJvdmlkZXJcIjtcbmxldCBfbmV4dElkID0gMTtcbmZ1bmN0aW9uIGJ1aWxkV2ViM0xlZ2FjeUZldGNoZXIocHJvdmlkZXIsIHNlbmRGdW5jKSB7XG4gICAgY29uc3QgZmV0Y2hlciA9IFwiV2ViM0xlZ2FjeUZldGNoZXJcIjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1ldGhvZCwgcGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgaWQ6IChfbmV4dElkKyspLFxuICAgICAgICAgICAganNvbnJwYzogXCIyLjBcIlxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiZGVidWdcIiwge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJyZXF1ZXN0XCIsXG4gICAgICAgICAgICAgICAgZmV0Y2hlcixcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiBkZWVwQ29weShyZXF1ZXN0KSxcbiAgICAgICAgICAgICAgICBwcm92aWRlcjogdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZW5kRnVuYyhyZXF1ZXN0LCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImRlYnVnXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJyZXNwb25zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiB0aGlzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiZGVidWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwicmVzcG9uc2VcIixcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hlcixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiB0aGlzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5jb2RlID0gcmVzcG9uc2UuZXJyb3IuY29kZTtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuZGF0YSA9IHJlc3BvbnNlLmVycm9yLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLnJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGJ1aWxkRWlwMTE5M0ZldGNoZXIocHJvdmlkZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1ldGhvZCwgcGFyYW1zKSB7XG4gICAgICAgIGlmIChwYXJhbXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcGFyYW1zID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHsgbWV0aG9kLCBwYXJhbXMgfTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZGVidWdcIiwge1xuICAgICAgICAgICAgYWN0aW9uOiBcInJlcXVlc3RcIixcbiAgICAgICAgICAgIGZldGNoZXI6IFwiRWlwMTE5M0ZldGNoZXJcIixcbiAgICAgICAgICAgIHJlcXVlc3Q6IGRlZXBDb3B5KHJlcXVlc3QpLFxuICAgICAgICAgICAgcHJvdmlkZXI6IHRoaXNcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm92aWRlci5yZXF1ZXN0KHJlcXVlc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJkZWJ1Z1wiLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInJlc3BvbnNlXCIsXG4gICAgICAgICAgICAgICAgZmV0Y2hlcjogXCJFaXAxMTkzRmV0Y2hlclwiLFxuICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXI6IHRoaXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImRlYnVnXCIsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwicmVzcG9uc2VcIixcbiAgICAgICAgICAgICAgICBmZXRjaGVyOiBcIkVpcDExOTNGZXRjaGVyXCIsXG4gICAgICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICBwcm92aWRlcjogdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydCBjbGFzcyBXZWIzUHJvdmlkZXIgZXh0ZW5kcyBKc29uUnBjUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKHByb3ZpZGVyLCBuZXR3b3JrKSB7XG4gICAgICAgIGxvZ2dlci5jaGVja05ldyhuZXcudGFyZ2V0LCBXZWIzUHJvdmlkZXIpO1xuICAgICAgICBpZiAocHJvdmlkZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcIm1pc3NpbmcgcHJvdmlkZXJcIiwgXCJwcm92aWRlclwiLCBwcm92aWRlcik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhdGggPSBudWxsO1xuICAgICAgICBsZXQganNvblJwY0ZldGNoRnVuYyA9IG51bGw7XG4gICAgICAgIGxldCBzdWJwcm92aWRlciA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgKHByb3ZpZGVyKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBwYXRoID0gXCJ1bmtub3duOlwiO1xuICAgICAgICAgICAganNvblJwY0ZldGNoRnVuYyA9IHByb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGF0aCA9IHByb3ZpZGVyLmhvc3QgfHwgcHJvdmlkZXIucGF0aCB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKCFwYXRoICYmIHByb3ZpZGVyLmlzTWV0YU1hc2spIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJtZXRhbWFza1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VicHJvdmlkZXIgPSBwcm92aWRlcjtcbiAgICAgICAgICAgIGlmIChwcm92aWRlci5yZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGggPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IFwiZWlwLTExOTM6XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGpzb25ScGNGZXRjaEZ1bmMgPSBidWlsZEVpcDExOTNGZXRjaGVyKHByb3ZpZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3ZpZGVyLnNlbmRBc3luYykge1xuICAgICAgICAgICAgICAgIGpzb25ScGNGZXRjaEZ1bmMgPSBidWlsZFdlYjNMZWdhY3lGZXRjaGVyKHByb3ZpZGVyLCBwcm92aWRlci5zZW5kQXN5bmMuYmluZChwcm92aWRlcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvdmlkZXIuc2VuZCkge1xuICAgICAgICAgICAgICAgIGpzb25ScGNGZXRjaEZ1bmMgPSBidWlsZFdlYjNMZWdhY3lGZXRjaGVyKHByb3ZpZGVyLCBwcm92aWRlci5zZW5kLmJpbmQocHJvdmlkZXIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJ1bnN1cHBvcnRlZCBwcm92aWRlclwiLCBcInByb3ZpZGVyXCIsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgICAgIHBhdGggPSBcInVua25vd246XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIocGF0aCwgbmV0d29yayk7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwianNvblJwY0ZldGNoRnVuY1wiLCBqc29uUnBjRmV0Y2hGdW5jKTtcbiAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJwcm92aWRlclwiLCBzdWJwcm92aWRlcik7XG4gICAgfVxuICAgIHNlbmQobWV0aG9kLCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuanNvblJwY0ZldGNoRnVuYyhtZXRob2QsIHBhcmFtcyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2ViMy1wcm92aWRlci5qcy5tYXAiLCJleHBvcnQgY29uc3QgdmVyc2lvbiA9IFwic2hhMi81LjUuMFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X3ZlcnNpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgaGFzaCBmcm9tIFwiaGFzaC5qc1wiO1xuLy9jb25zdCBfcmlwZW1kMTYwID0gX2hhc2gucmlwZW1kMTYwO1xuaW1wb3J0IHsgYXJyYXlpZnkgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYnl0ZXNcIjtcbmltcG9ydCB7IFN1cHBvcnRlZEFsZ29yaXRobSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvbG9nZ2VyXCI7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcIi4vX3ZlcnNpb25cIjtcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIodmVyc2lvbik7XG5leHBvcnQgZnVuY3Rpb24gcmlwZW1kMTYwKGRhdGEpIHtcbiAgICByZXR1cm4gXCIweFwiICsgKGhhc2gucmlwZW1kMTYwKCkudXBkYXRlKGFycmF5aWZ5KGRhdGEpKS5kaWdlc3QoXCJoZXhcIikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNoYTI1NihkYXRhKSB7XG4gICAgcmV0dXJuIFwiMHhcIiArIChoYXNoLnNoYTI1NigpLnVwZGF0ZShhcnJheWlmeShkYXRhKSkuZGlnZXN0KFwiaGV4XCIpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaGE1MTIoZGF0YSkge1xuICAgIHJldHVybiBcIjB4XCIgKyAoaGFzaC5zaGE1MTIoKS51cGRhdGUoYXJyYXlpZnkoZGF0YSkpLmRpZ2VzdChcImhleFwiKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUhtYWMoYWxnb3JpdGhtLCBrZXksIGRhdGEpIHtcbiAgICBpZiAoIVN1cHBvcnRlZEFsZ29yaXRobVthbGdvcml0aG1dKSB7XG4gICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwidW5zdXBwb3J0ZWQgYWxnb3JpdGhtIFwiICsgYWxnb3JpdGhtLCBMb2dnZXIuZXJyb3JzLlVOU1VQUE9SVEVEX09QRVJBVElPTiwge1xuICAgICAgICAgICAgb3BlcmF0aW9uOiBcImhtYWNcIixcbiAgICAgICAgICAgIGFsZ29yaXRobTogYWxnb3JpdGhtXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gXCIweFwiICsgaGFzaC5obWFjKGhhc2hbYWxnb3JpdGhtXSwgYXJyYXlpZnkoa2V5KSkudXBkYXRlKGFycmF5aWZ5KGRhdGEpKS5kaWdlc3QoXCJoZXhcIik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaGEyLmpzLm1hcCIsImV4cG9ydCB2YXIgU3VwcG9ydGVkQWxnb3JpdGhtO1xuKGZ1bmN0aW9uIChTdXBwb3J0ZWRBbGdvcml0aG0pIHtcbiAgICBTdXBwb3J0ZWRBbGdvcml0aG1bXCJzaGEyNTZcIl0gPSBcInNoYTI1NlwiO1xuICAgIFN1cHBvcnRlZEFsZ29yaXRobVtcInNoYTUxMlwiXSA9IFwic2hhNTEyXCI7XG59KShTdXBwb3J0ZWRBbGdvcml0aG0gfHwgKFN1cHBvcnRlZEFsZ29yaXRobSA9IHt9KSk7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IHRvVXRmOENvZGVQb2ludHMsIF90b1V0ZjhTdHJpbmcsIFVuaWNvZGVOb3JtYWxpemF0aW9uRm9ybSB9IGZyb20gXCIuL3V0ZjhcIjtcbmZ1bmN0aW9uIGJ5dGVzMihkYXRhKSB7XG4gICAgaWYgKChkYXRhLmxlbmd0aCAlIDQpICE9PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImJhZCBkYXRhXCIpO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlSW50KGRhdGEuc3Vic3RyaW5nKGksIGkgKyA0KSwgMTYpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlKGRhdGEsIGZ1bmMpIHtcbiAgICBpZiAoIWZ1bmMpIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gW3BhcnNlSW50KHZhbHVlLCAxNildOyB9O1xuICAgIH1cbiAgICBsZXQgbG8gPSAwO1xuICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICBkYXRhLnNwbGl0KFwiLFwiKS5mb3JFYWNoKChwYWlyKSA9PiB7XG4gICAgICAgIGxldCBjb21wcyA9IHBhaXIuc3BsaXQoXCI6XCIpO1xuICAgICAgICBsbyArPSBwYXJzZUludChjb21wc1swXSwgMTYpO1xuICAgICAgICByZXN1bHRbbG9dID0gZnVuYyhjb21wc1sxXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJhbmdlVGFibGUoZGF0YSkge1xuICAgIGxldCBoaSA9IDA7XG4gICAgcmV0dXJuIGRhdGEuc3BsaXQoXCIsXCIpLm1hcCgodikgPT4ge1xuICAgICAgICBsZXQgY29tcHMgPSB2LnNwbGl0KFwiLVwiKTtcbiAgICAgICAgaWYgKGNvbXBzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY29tcHNbMV0gPSBcIjBcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wc1sxXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgY29tcHNbMV0gPSBcIjFcIjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbG8gPSBoaSArIHBhcnNlSW50KGNvbXBzWzBdLCAxNik7XG4gICAgICAgIGhpID0gcGFyc2VJbnQoY29tcHNbMV0sIDE2KTtcbiAgICAgICAgcmV0dXJuIHsgbDogbG8sIGg6IGhpIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBtYXRjaE1hcCh2YWx1ZSwgcmFuZ2VzKSB7XG4gICAgbGV0IGxvID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcmFuZ2UgPSByYW5nZXNbaV07XG4gICAgICAgIGxvICs9IHJhbmdlLmw7XG4gICAgICAgIGlmICh2YWx1ZSA+PSBsbyAmJiB2YWx1ZSA8PSBsbyArIHJhbmdlLmggJiYgKCh2YWx1ZSAtIGxvKSAlIChyYW5nZS5kIHx8IDEpKSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHJhbmdlLmUgJiYgcmFuZ2UuZS5pbmRleE9mKHZhbHVlIC0gbG8pICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJhbmdlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuY29uc3QgVGFibGVfQV8xX3JhbmdlcyA9IGNyZWF0ZVJhbmdlVGFibGUoXCIyMjEsMTMtMWIsNWYtLDQwLTEwLDUxLWYsMTEtMywzLTMsMi0yLDItNCw4LDIsMTUsMmQsMjgtOCw4OCw0OCwyNy0sMy01LDExLTIwLDI3LSw4LDI4LDMtNSwxMiwxOCxiLWEsMWMtNCw2LTE2LDItZCwyLTIsMiwxYi00LDE3LTksOGYtLDEwLGYsMWYtMiwxYy0zNCwzMy0xNGUsNCwzNi0sMTMtLDYtMiwxYS1mLDQsOS0sMy0sMTcsOCwyLTIsNS0sMiw4LSwzLSw0LTgsMi0zLDMsNi0sMTYtNiwyLSw3LTMsMy0sMTcsOCwzLDMsMy0sMiw2LTMsMy0sNC1hLDUsMi02LDEwLWIsNCw4LDIsNCwxNyw4LDMsNi0sYiw0LDQtLDItZSwyLTQsYi0xMCw0LDktLDMtLDE3LDgsMy0sNS0sOS0yLDMtLDQtNywzLTMsMyw0LTMsYy0xMCwzLDctMiw0LDUtMiwzLDIsMy0yLDMtMiw0LTIsOSw0LTMsNi0yLDQsNS04LDItZSxkLWQsNCw5LDQsMTgsYiw2LTMsOCw0LDUtNiwzLTgsMy0zLGItMTEsMyw5LDQsMTgsYiw2LTMsOCw0LDUtNiwzLTYsMiwzLTMsYi0xMSwzLDksNCwxOCwxMS0zLDctLDQsNS04LDItNywzLTMsYi0xMSwzLDEzLTIsMTksYSwyLSw4LTIsMi0zLDcsMiw5LTExLDQtYiwzYi0zLDFlLTI0LDMsMi0sMywyLSwyLTUsNSw4LDQsMiwyLSwzLGUsNC0sNiwyLDctLGItLDMtMjEsNDksMjMtNSwxYy0zLDksMjUsMTAtLDItMmYsMjMsNiwzLDgtMiw1LTUsMWItNDUsMjctOSwyYS0sMi0zLDViLTQsNDUtNCw1My01LDgsNDAsMiw1LSw4LDIsNS0sMjgsMiw1LSwyMCwyLDUtLDgsMiw1LSw4LDgsMTgsMjAsMiw1LSw4LDI4LDE0LTUsMWQtMjIsNTYtYiwyNzctOCwxZS0yLDUyLWUsZSw4LWEsMTgtOCwxNS1iLGUsNCwzLWIsNWUtMixiLTE1LDEwLGItNSw1OS03LDJiLTU1NSw5ZC0zLDViLTUsMTctLDctLDI3LSw3LSw5LDIsMiwyLDIwLSwzNiwxMCxmLSw3LDE0LSw0LGEsNTQtMywyLTYsNi01LDktLDFjLTEwLDEzLTFkLDFjLTE0LDNjLSwxMC02LDMyLWIsMjQwLTMwLDI4LTE4LGMtMTQsYTAsMTE1LSwzLDY2LSxiLTc2LDUsNS0sMWQsMjQsMiw1LTIsMiw4LSwzNS0yLDE5LGYtMTAsMWQtMywzMTEtMzdmLDFiLDVhLWIsZDctMTksZC0zLDQxLDU3LSw2OC00LDI5LTMsNWYsMjktMzcsMmUtMiwyNS1jLDJjLTIsNGUtMywzMCw3OC0zLDY0LSwyMCwxOWI3LTQ5LDUxYTctNTksNDhlLTIsMzgtNzM4LDJiYTUtNWIsMjIyZi0sM2MtOTQsOC1iLDYtNCwxYiw2LDIsMywzLDZkLTIwLDE2ZS1mLDQxLSwzNy03LDJlLTIsMTEtZiw1LWIsMTgtLGIsMTQsNS0zLDYsODgtLDIsYmYtMiw3LSw3LSw3LSw0LTIsOCw4LTksOC0yZmYsMjAsNS1iLDFjLWI0LDI3LSwyNy1jYmIxLGY3LTksMjgtMixiNS0yMjEsNTYsNDgsMy0sMi0sMy0sNSxkLDIsNSwzLDQyLDUtLDksOCwxZCw1LDYsMi0yLDgsMTUzLTMsMTIzLTMsMzMtMjdmZCxhNmRhLTUxMjgsMjFmLTVkZiwzLWZmZmQsMy1mZmZkLDMtZmZmZCwzLWZmZmQsMy1mZmZkLDMtZmZmZCwzLWZmZmQsMy1mZmZkLDMtZmZmZCwzLWZmZmQsMy1mZmZkLDMsMi0xZCw2MS1mZjdkXCIpO1xuLy8gQFRPRE86IE1ha2UgdGhpcyByZWxhdGl2ZS4uLlxuY29uc3QgVGFibGVfQl8xX2ZsYWdzID0gXCJhZCwzNGYsMTgwNiwxODBiLDE4MGMsMTgwZCwyMDBiLDIwMGMsMjAwZCwyMDYwLGZlZmZcIi5zcGxpdChcIixcIikubWFwKCh2KSA9PiBwYXJzZUludCh2LCAxNikpO1xuY29uc3QgVGFibGVfQl8yX3JhbmdlcyA9IFtcbiAgICB7IGg6IDI1LCBzOiAzMiwgbDogNjUgfSxcbiAgICB7IGg6IDMwLCBzOiAzMiwgZTogWzIzXSwgbDogMTI3IH0sXG4gICAgeyBoOiA1NCwgczogMSwgZTogWzQ4XSwgbDogNjQsIGQ6IDIgfSxcbiAgICB7IGg6IDE0LCBzOiAxLCBsOiA1NywgZDogMiB9LFxuICAgIHsgaDogNDQsIHM6IDEsIGw6IDE3LCBkOiAyIH0sXG4gICAgeyBoOiAxMCwgczogMSwgZTogWzIsIDYsIDhdLCBsOiA2MSwgZDogMiB9LFxuICAgIHsgaDogMTYsIHM6IDEsIGw6IDY4LCBkOiAyIH0sXG4gICAgeyBoOiA4NCwgczogMSwgZTogWzE4LCAyNCwgNjZdLCBsOiAxOSwgZDogMiB9LFxuICAgIHsgaDogMjYsIHM6IDMyLCBlOiBbMTddLCBsOiA0MzUgfSxcbiAgICB7IGg6IDIyLCBzOiAxLCBsOiA3MSwgZDogMiB9LFxuICAgIHsgaDogMTUsIHM6IDgwLCBsOiA0MCB9LFxuICAgIHsgaDogMzEsIHM6IDMyLCBsOiAxNiB9LFxuICAgIHsgaDogMzIsIHM6IDEsIGw6IDgwLCBkOiAyIH0sXG4gICAgeyBoOiA1MiwgczogMSwgbDogNDIsIGQ6IDIgfSxcbiAgICB7IGg6IDEyLCBzOiAxLCBsOiA1NSwgZDogMiB9LFxuICAgIHsgaDogNDAsIHM6IDEsIGU6IFszOF0sIGw6IDE1LCBkOiAyIH0sXG4gICAgeyBoOiAxNCwgczogMSwgbDogNDgsIGQ6IDIgfSxcbiAgICB7IGg6IDM3LCBzOiA0OCwgbDogNDkgfSxcbiAgICB7IGg6IDE0OCwgczogMSwgbDogNjM1MSwgZDogMiB9LFxuICAgIHsgaDogODgsIHM6IDEsIGw6IDE2MCwgZDogMiB9LFxuICAgIHsgaDogMTUsIHM6IDE2LCBsOiA3MDQgfSxcbiAgICB7IGg6IDI1LCBzOiAyNiwgbDogODU0IH0sXG4gICAgeyBoOiAyNSwgczogMzIsIGw6IDU1OTE1IH0sXG4gICAgeyBoOiAzNywgczogNDAsIGw6IDEyNDcgfSxcbiAgICB7IGg6IDI1LCBzOiAtMTE5NzExLCBsOiA1MzI0OCB9LFxuICAgIHsgaDogMjUsIHM6IC0xMTk3NjMsIGw6IDUyIH0sXG4gICAgeyBoOiAyNSwgczogLTExOTgxNSwgbDogNTIgfSxcbiAgICB7IGg6IDI1LCBzOiAtMTE5ODY3LCBlOiBbMSwgNCwgNSwgNywgOCwgMTEsIDEyLCAxN10sIGw6IDUyIH0sXG4gICAgeyBoOiAyNSwgczogLTExOTkxOSwgbDogNTIgfSxcbiAgICB7IGg6IDI0LCBzOiAtMTE5OTcxLCBlOiBbMiwgNywgOCwgMTddLCBsOiA1MiB9LFxuICAgIHsgaDogMjQsIHM6IC0xMjAwMjMsIGU6IFsyLCA3LCAxMywgMTUsIDE2LCAxN10sIGw6IDUyIH0sXG4gICAgeyBoOiAyNSwgczogLTEyMDA3NSwgbDogNTIgfSxcbiAgICB7IGg6IDI1LCBzOiAtMTIwMTI3LCBsOiA1MiB9LFxuICAgIHsgaDogMjUsIHM6IC0xMjAxNzksIGw6IDUyIH0sXG4gICAgeyBoOiAyNSwgczogLTEyMDIzMSwgbDogNTIgfSxcbiAgICB7IGg6IDI1LCBzOiAtMTIwMjgzLCBsOiA1MiB9LFxuICAgIHsgaDogMjUsIHM6IC0xMjAzMzUsIGw6IDUyIH0sXG4gICAgeyBoOiAyNCwgczogLTExOTU0MywgZTogWzE3XSwgbDogNTYgfSxcbiAgICB7IGg6IDI0LCBzOiAtMTE5NjAxLCBlOiBbMTddLCBsOiA1OCB9LFxuICAgIHsgaDogMjQsIHM6IC0xMTk2NTksIGU6IFsxN10sIGw6IDU4IH0sXG4gICAgeyBoOiAyNCwgczogLTExOTcxNywgZTogWzE3XSwgbDogNTggfSxcbiAgICB7IGg6IDI0LCBzOiAtMTE5Nzc1LCBlOiBbMTddLCBsOiA1OCB9XG5dO1xuY29uc3QgVGFibGVfQl8yX2x1dF9hYnMgPSBjcmVhdGVUYWJsZShcImI1OjNiYyxjMzpmZiw3OjczLDI6MjUzLDU6MjU0LDM6MjU2LDE6MjU3LDU6MjU5LDE6MjViLDM6MjYwLDE6MjYzLDI6MjY5LDE6MjY4LDU6MjZmLDE6MjcyLDI6Mjc1LDc6MjgwLDM6MjgzLDU6Mjg4LDM6MjhhLDE6MjhiLDU6MjkyLDNmOjE5NSwxOjFiZiwyOToxOWUsMTI1OjNiOSw4YjozYjIsMTozYjgsMTozYzUsMzozYzYsMTozYzAsMWE6M2JhLDE6M2MxLDE6M2MzLDI6M2I4LDE6M2I1LDFiYzk6M2I5LDFjOjFmNzYsMToxZjc3LGY6MWY3YSwxOjFmN2IsZDoxZjc4LDE6MWY3OSwxOjFmN2MsMToxZjdkLDEwNzo2Myw1OjI1Yiw0OjY4LDE6NjgsMTo2OCwzOjY5LDE6NjksMTo2YywzOjZlLDQ6NzAsMTo3MSwxOjcyLDE6NzIsMTo3Miw3OjdhLDI6M2M5LDI6N2EsMjo2YiwxOmU1LDE6NjIsMTo2MywzOjY1LDE6NjYsMjo2ZCxiOjNiMywxOjNjMCw2OjY0LDFiNTc0OjNiOCwxYTozYzMsMjA6M2I4LDFhOjNjMywyMDozYjgsMWE6M2MzLDIwOjNiOCwxYTozYzMsMjA6M2I4LDFhOjNjM1wiKTtcbmNvbnN0IFRhYmxlX0JfMl9sdXRfcmVsID0gY3JlYXRlVGFibGUoXCIxNzk6MSwyOjEsMjoxLDU6MSwyOjEsYTo0ZixhOjEsODoxLDI6MSwyOjEsMzoxLDU6MSwzOjEsNDoxLDI6MSwzOjEsNDoxLDg6MiwxOjEsMjoyLDE6MSwyOjIsMjc6MiwxOTU6MjYsMjoyNSwxOjI1LDE6MjUsMjo0MCwyOjNmLDE6M2YsMzM6MSwxMTotNiwxOi05LDFhYzc6LTNhLDZkOi04LDE6LTgsMTotOCwxOi04LDE6LTgsMTotOCwxOi04LDE6LTgsOTotOCwxOi04LDE6LTgsMTotOCwxOi04LDE6LTgsYjotOCwxOi04LDE6LTgsMTotOCwxOi04LDE6LTgsMTotOCwxOi04LDk6LTgsMTotOCwxOi04LDE6LTgsMTotOCwxOi04LDE6LTgsMTotOCw5Oi04LDE6LTgsMTotOCwxOi04LDE6LTgsMTotOCxjOi04LDI6LTgsMjotOCwyOi04LDk6LTgsMTotOCwxOi04LDE6LTgsMTotOCwxOi04LDE6LTgsMTotOCw0OTotOCwxOi04LDE6LTRhLDE6LTRhLGQ6LTU2LDE6LTU2LDE6LTU2LDE6LTU2LGQ6LTgsMTotOCxmOi04LDE6LTgsMzotN1wiKTtcbmNvbnN0IFRhYmxlX0JfMl9jb21wbGV4ID0gY3JlYXRlVGFibGUoXCJkZjowMDczMDA3Myw1MTowMDY5MDMwNywxOTowMkJDMDA2RSxhNzowMDZBMDMwQywxOGE6MDAyMDAzQjksMTY6MDNCOTAzMDgwMzAxLDIwOjAzQzUwMzA4MDMwMSwxZDc6MDU2NTA1ODIsMTkwZjowMDY4MDMzMSwxOjAwNzQwMzA4LDE6MDA3NzAzMEEsMTowMDc5MDMwQSwxOjAwNjEwMkJFLGI2OjAzQzUwMzEzLDI6MDNDNTAzMTMwMzAwLDI6MDNDNTAzMTMwMzAxLDI6MDNDNTAzMTMwMzQyLDJhOjFGMDAwM0I5LDE6MUYwMTAzQjksMToxRjAyMDNCOSwxOjFGMDMwM0I5LDE6MUYwNDAzQjksMToxRjA1MDNCOSwxOjFGMDYwM0I5LDE6MUYwNzAzQjksMToxRjAwMDNCOSwxOjFGMDEwM0I5LDE6MUYwMjAzQjksMToxRjAzMDNCOSwxOjFGMDQwM0I5LDE6MUYwNTAzQjksMToxRjA2MDNCOSwxOjFGMDcwM0I5LDE6MUYyMDAzQjksMToxRjIxMDNCOSwxOjFGMjIwM0I5LDE6MUYyMzAzQjksMToxRjI0MDNCOSwxOjFGMjUwM0I5LDE6MUYyNjAzQjksMToxRjI3MDNCOSwxOjFGMjAwM0I5LDE6MUYyMTAzQjksMToxRjIyMDNCOSwxOjFGMjMwM0I5LDE6MUYyNDAzQjksMToxRjI1MDNCOSwxOjFGMjYwM0I5LDE6MUYyNzAzQjksMToxRjYwMDNCOSwxOjFGNjEwM0I5LDE6MUY2MjAzQjksMToxRjYzMDNCOSwxOjFGNjQwM0I5LDE6MUY2NTAzQjksMToxRjY2MDNCOSwxOjFGNjcwM0I5LDE6MUY2MDAzQjksMToxRjYxMDNCOSwxOjFGNjIwM0I5LDE6MUY2MzAzQjksMToxRjY0MDNCOSwxOjFGNjUwM0I5LDE6MUY2NjAzQjksMToxRjY3MDNCOSwzOjFGNzAwM0I5LDE6MDNCMTAzQjksMTowM0FDMDNCOSwyOjAzQjEwMzQyLDE6MDNCMTAzNDIwM0I5LDU6MDNCMTAzQjksNjoxRjc0MDNCOSwxOjAzQjcwM0I5LDE6MDNBRTAzQjksMjowM0I3MDM0MiwxOjAzQjcwMzQyMDNCOSw1OjAzQjcwM0I5LDY6MDNCOTAzMDgwMzAwLDE6MDNCOTAzMDgwMzAxLDM6MDNCOTAzNDIsMTowM0I5MDMwODAzNDIsYjowM0M1MDMwODAzMDAsMTowM0M1MDMwODAzMDEsMTowM0MxMDMxMywyOjAzQzUwMzQyLDE6MDNDNTAzMDgwMzQyLGI6MUY3QzAzQjksMTowM0M5MDNCOSwxOjAzQ0UwM0I5LDI6MDNDOTAzNDIsMTowM0M5MDM0MjAzQjksNTowM0M5MDNCOSxhYzowMDcyMDA3Myw1YjowMEIwMDA2Myw2OjAwQjAwMDY2LGQ6MDA2RTAwNkYsYTowMDczMDA2RCwxOjAwNzQwMDY1MDA2QywxOjAwNzQwMDZELDEyNGY6MDA2ODAwNzAwMDYxLDI6MDA2MTAwNzUsMjowMDZGMDA3NixiOjAwNzAwMDYxLDE6MDA2RTAwNjEsMTowM0JDMDA2MSwxOjAwNkQwMDYxLDE6MDA2QjAwNjEsMTowMDZCMDA2MiwxOjAwNkQwMDYyLDE6MDA2NzAwNjIsMzowMDcwMDA2NiwxOjAwNkUwMDY2LDE6MDNCQzAwNjYsNDowMDY4MDA3QSwxOjAwNkIwMDY4MDA3QSwxOjAwNkQwMDY4MDA3QSwxOjAwNjcwMDY4MDA3QSwxOjAwNzQwMDY4MDA3QSwxNTowMDcwMDA2MSwxOjAwNkIwMDcwMDA2MSwxOjAwNkQwMDcwMDA2MSwxOjAwNjcwMDcwMDA2MSw4OjAwNzAwMDc2LDE6MDA2RTAwNzYsMTowM0JDMDA3NiwxOjAwNkQwMDc2LDE6MDA2QjAwNzYsMTowMDZEMDA3NiwxOjAwNzAwMDc3LDE6MDA2RTAwNzcsMTowM0JDMDA3NywxOjAwNkQwMDc3LDE6MDA2QjAwNzcsMTowMDZEMDA3NywxOjAwNkIwM0M5LDE6MDA2RDAzQzksMjowMDYyMDA3MSwzOjAwNjMyMjE1MDA2QjAwNjcsMTowMDYzMDA2RjAwMkUsMTowMDY0MDA2MiwxOjAwNjcwMDc5LDI6MDA2ODAwNzAsMjowMDZCMDA2QiwxOjAwNkIwMDZELDk6MDA3MDAwNjgsMjowMDcwMDA3MDAwNkQsMTowMDcwMDA3MiwyOjAwNzMwMDc2LDE6MDA3NzAwNjIsYzcyMzowMDY2MDA2NiwxOjAwNjYwMDY5LDE6MDA2NjAwNkMsMTowMDY2MDA2NjAwNjksMTowMDY2MDA2NjAwNkMsMTowMDczMDA3NCwxOjAwNzMwMDc0LGQ6MDU3NDA1NzYsMTowNTc0MDU2NSwxOjA1NzQwNTZCLDE6MDU3RTA1NzYsMTowNTc0MDU2RFwiLCBieXRlczIpO1xuY29uc3QgVGFibGVfQ19yYW5nZXMgPSBjcmVhdGVSYW5nZVRhYmxlKFwiODAtMjAsMmEwLSwzOWMsMzIsZjcxLDE4ZSw3ZjItZiwxOS03LDMwLTQsNy01LGY4MS1iLDUsYTgwMC0yMGZmLDRkMS0xZiwxMTAsZmEtNixkMTc0LTcsMmU4NC0sZmZmZi0sZmZmZi0sZmZmZi0sZmZmZi0sZmZmZi0sZmZmZi0sZmZmZi0sZmZmZi0sZmZmZi0sZmZmZi0sZmZmZi0sZmZmZi0sMiwxZi01ZixmZjdmLTIwMDAxXCIpO1xuZnVuY3Rpb24gZmxhdHRlbih2YWx1ZXMpIHtcbiAgICByZXR1cm4gdmFsdWVzLnJlZHVjZSgoYWNjdW0sIHZhbHVlKSA9PiB7XG4gICAgICAgIHZhbHVlLmZvckVhY2goKHZhbHVlKSA9PiB7IGFjY3VtLnB1c2godmFsdWUpOyB9KTtcbiAgICAgICAgcmV0dXJuIGFjY3VtO1xuICAgIH0sIFtdKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBfbmFtZXByZXBUYWJsZUExKGNvZGVwb2ludCkge1xuICAgIHJldHVybiAhIW1hdGNoTWFwKGNvZGVwb2ludCwgVGFibGVfQV8xX3Jhbmdlcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gX25hbWVwcmVwVGFibGVCMihjb2RlcG9pbnQpIHtcbiAgICBsZXQgcmFuZ2UgPSBtYXRjaE1hcChjb2RlcG9pbnQsIFRhYmxlX0JfMl9yYW5nZXMpO1xuICAgIGlmIChyYW5nZSkge1xuICAgICAgICByZXR1cm4gW2NvZGVwb2ludCArIHJhbmdlLnNdO1xuICAgIH1cbiAgICBsZXQgY29kZXMgPSBUYWJsZV9CXzJfbHV0X2Fic1tjb2RlcG9pbnRdO1xuICAgIGlmIChjb2Rlcykge1xuICAgICAgICByZXR1cm4gY29kZXM7XG4gICAgfVxuICAgIGxldCBzaGlmdCA9IFRhYmxlX0JfMl9sdXRfcmVsW2NvZGVwb2ludF07XG4gICAgaWYgKHNoaWZ0KSB7XG4gICAgICAgIHJldHVybiBbY29kZXBvaW50ICsgc2hpZnRbMF1dO1xuICAgIH1cbiAgICBsZXQgY29tcGxleCA9IFRhYmxlX0JfMl9jb21wbGV4W2NvZGVwb2ludF07XG4gICAgaWYgKGNvbXBsZXgpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXg7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIF9uYW1lcHJlcFRhYmxlQyhjb2RlcG9pbnQpIHtcbiAgICByZXR1cm4gISFtYXRjaE1hcChjb2RlcG9pbnQsIFRhYmxlX0NfcmFuZ2VzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBuYW1lcHJlcCh2YWx1ZSkge1xuICAgIC8vIFRoaXMgYWxsb3dzIHBsYXRmb3JtcyB3aXRoIGluY29tcGxldGUgbm9ybWFsaXplIHRvIGJ5cGFzc1xuICAgIC8vIGl0IGZvciB2ZXJ5IGJhc2ljIG5hbWVzIHdoaWNoIHRoZSBidWlsdC1pbiB0b0xvd2VyQ2FzZVxuICAgIC8vIHdpbGwgY2VydGFpbmx5IGhhbmRsZSBjb3JyZWN0bHlcbiAgICBpZiAodmFsdWUubWF0Y2goL15bYS16MC05LV0qJC9pKSAmJiB2YWx1ZS5sZW5ndGggPD0gNTkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIC8vIEdldCB0aGUgY29kZSBwb2ludHMgKGtlZXBpbmcgdGhlIGN1cnJlbnQgbm9ybWFsaXphdGlvbilcbiAgICBsZXQgY29kZXMgPSB0b1V0ZjhDb2RlUG9pbnRzKHZhbHVlKTtcbiAgICBjb2RlcyA9IGZsYXR0ZW4oY29kZXMubWFwKChjb2RlKSA9PiB7XG4gICAgICAgIC8vIFN1YnN0aXR1dGUgVGFibGUgQi4xIChNYXBzIHRvIE5vdGhpbmcpXG4gICAgICAgIGlmIChUYWJsZV9CXzFfZmxhZ3MuaW5kZXhPZihjb2RlKSA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPj0gMHhmZTAwICYmIGNvZGUgPD0gMHhmZTBmKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3Vic3RpdHV0ZSBUYWJsZSBCLjIgKENhc2UgRm9sZGluZylcbiAgICAgICAgbGV0IGNvZGVzVGFibGVCMiA9IF9uYW1lcHJlcFRhYmxlQjIoY29kZSk7XG4gICAgICAgIGlmIChjb2Rlc1RhYmxlQjIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2Rlc1RhYmxlQjI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm8gU3Vic3RpdHV0aW9uXG4gICAgICAgIHJldHVybiBbY29kZV07XG4gICAgfSkpO1xuICAgIC8vIE5vcm1hbGl6ZSB1c2luZyBmb3JtIEtDXG4gICAgY29kZXMgPSB0b1V0ZjhDb2RlUG9pbnRzKF90b1V0ZjhTdHJpbmcoY29kZXMpLCBVbmljb2RlTm9ybWFsaXphdGlvbkZvcm0uTkZLQyk7XG4gICAgLy8gUHJvaGliaXQgVGFibGVzIEMuMS4yLCBDLjIuMiwgQy4zLCBDLjQsIEMuNSwgQy42LCBDLjcsIEMuOCwgQy45XG4gICAgY29kZXMuZm9yRWFjaCgoY29kZSkgPT4ge1xuICAgICAgICBpZiAoX25hbWVwcmVwVGFibGVDKGNvZGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTVFJJTkdQUkVQX0NPTlRBSU5TX1BST0hJQklURURcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBQcm9oaWJpdCBVbmFzc2lnbmVkIENvZGUgUG9pbnRzIChUYWJsZSBBLjEpXG4gICAgY29kZXMuZm9yRWFjaCgoY29kZSkgPT4ge1xuICAgICAgICBpZiAoX25hbWVwcmVwVGFibGVBMShjb2RlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU1RSSU5HUFJFUF9DT05UQUlOU19VTkFTU0lHTkVEXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gSUROQSBleHRyYXNcbiAgICBsZXQgbmFtZSA9IF90b1V0ZjhTdHJpbmcoY29kZXMpO1xuICAgIC8vIElETkE6IDQuMi4zLjFcbiAgICBpZiAobmFtZS5zdWJzdHJpbmcoMCwgMSkgPT09IFwiLVwiIHx8IG5hbWUuc3Vic3RyaW5nKDIsIDQpID09PSBcIi0tXCIgfHwgbmFtZS5zdWJzdHJpbmcobmFtZS5sZW5ndGggLSAxKSA9PT0gXCItXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBoeXBoZW5cIik7XG4gICAgfVxuICAgIC8vIElETkE6IDQuMi40XG4gICAgaWYgKG5hbWUubGVuZ3RoID4gNjMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidG9vIGxvbmdcIik7XG4gICAgfVxuICAgIHJldHVybiBuYW1lO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWRuYS5qcy5tYXAiLCJleHBvcnQgY29uc3QgdmVyc2lvbiA9IFwid2ViLzUuNS4xXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fdmVyc2lvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgYXJyYXlpZnkgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYnl0ZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmwoaHJlZiwgb3B0aW9ucykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAob3B0aW9ucy5tZXRob2QgfHwgXCJHRVRcIiksXG4gICAgICAgICAgICBoZWFkZXJzOiAob3B0aW9ucy5oZWFkZXJzIHx8IHt9KSxcbiAgICAgICAgICAgIGJvZHk6IChvcHRpb25zLmJvZHkgfHwgdW5kZWZpbmVkKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2tpcEZldGNoU2V0dXAgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHJlcXVlc3QubW9kZSA9IFwiY29yc1wiOyAvLyBuby1jb3JzLCBjb3JzLCAqc2FtZS1vcmlnaW5cbiAgICAgICAgICAgIHJlcXVlc3QuY2FjaGUgPSBcIm5vLWNhY2hlXCI7IC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICAgICAgICAgIHJlcXVlc3QuY3JlZGVudGlhbHMgPSBcInNhbWUtb3JpZ2luXCI7IC8vIGluY2x1ZGUsICpzYW1lLW9yaWdpbiwgb21pdFxuICAgICAgICAgICAgcmVxdWVzdC5yZWRpcmVjdCA9IFwiZm9sbG93XCI7IC8vIG1hbnVhbCwgKmZvbGxvdywgZXJyb3JcbiAgICAgICAgICAgIHJlcXVlc3QucmVmZXJyZXIgPSBcImNsaWVudFwiOyAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChocmVmLCByZXF1ZXN0KTtcbiAgICAgICAgY29uc3QgYm9keSA9IHlpZWxkIHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmhlYWRlcnMuZm9yRWFjaCkge1xuICAgICAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyc1trZXkudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKChyZXNwb25zZS5oZWFkZXJzKS5rZXlzKSgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnNba2V5LnRvTG93ZXJDYXNlKCldID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoa2V5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgc3RhdHVzQ29kZTogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgc3RhdHVzTWVzc2FnZTogcmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgIGJvZHk6IGFycmF5aWZ5KG5ldyBVaW50OEFycmF5KGJvZHkpKSxcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdldHVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZGVjb2RlIGFzIGJhc2U2NERlY29kZSwgZW5jb2RlIGFzIGJhc2U2NEVuY29kZSB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9iYXNlNjRcIjtcbmltcG9ydCB7IGhleGxpZnksIGlzQnl0ZXNMaWtlIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2J5dGVzXCI7XG5pbXBvcnQgeyBzaGFsbG93Q29weSB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyB0b1V0ZjhCeXRlcywgdG9VdGY4U3RyaW5nIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3N0cmluZ3NcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9sb2dnZXJcIjtcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tIFwiLi9fdmVyc2lvblwiO1xuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcih2ZXJzaW9uKTtcbmltcG9ydCB7IGdldFVybCB9IGZyb20gXCIuL2dldHVybFwiO1xuZnVuY3Rpb24gc3RhbGxlcihkdXJhdGlvbikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIGR1cmF0aW9uKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGJvZHlpZnkodmFsdWUsIHR5cGUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiAodmFsdWUpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGlzQnl0ZXNMaWtlKHZhbHVlKSkge1xuICAgICAgICBpZiAodHlwZSAmJiAodHlwZS5zcGxpdChcIi9cIilbMF0gPT09IFwidGV4dFwiIHx8IHR5cGUuc3BsaXQoXCI7XCIpWzBdLnRyaW0oKSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b1V0ZjhTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7IH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGV4bGlmeSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8vIFRoaXMgQVBJIGlzIHN0aWxsIGEgd29yayBpbiBwcm9ncmVzczsgdGhlIGZ1dHVyZSBjaGFuZ2VzIHdpbGwgbGlrZWx5IGJlOlxuLy8gLSBDb25uZWN0aW9uSW5mbyA9PiBGZXRjaERhdGFSZXF1ZXN0PFQgPSBhbnk+XG4vLyAtIEZldGNoRGF0YVJlcXVlc3QuYm9keT8gPSBzdHJpbmcgfCBVaW50OEFycmF5IHwgeyBjb250ZW50VHlwZTogc3RyaW5nLCBkYXRhOiBzdHJpbmcgfCBVaW50OEFycmF5IH1cbi8vICAgLSBJZiBzdHJpbmcgPT4gdGV4dC9wbGFpbiwgVWludDhBcnJheSA9PiBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0gKGlmIGNvbnRlbnQtdHlwZSB1bnNwZWNpZmllZClcbi8vIC0gRmV0Y2hEYXRhUmVxdWVzdC5wcm9jZXNzRnVuYyA9IChib2R5OiBVaW50OEFycmF5LCByZXNwb25zZTogRmV0Y2hEYXRhUmVzcG9uc2UpID0+IFRcbi8vIEZvciB0aGlzIHJlYXNvbiwgaXQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgaW50ZXJuYWwgdW50aWwgdGhlIEFQSSBpcyBmaW5hbGl6ZWRcbmV4cG9ydCBmdW5jdGlvbiBfZmV0Y2hEYXRhKGNvbm5lY3Rpb24sIGJvZHksIHByb2Nlc3NGdW5jKSB7XG4gICAgLy8gSG93IG1hbnkgdGltZXMgdG8gcmV0cnkgaW4gdGhlIGV2ZW50IG9mIGEgdGhyb3R0bGVcbiAgICBjb25zdCBhdHRlbXB0TGltaXQgPSAodHlwZW9mIChjb25uZWN0aW9uKSA9PT0gXCJvYmplY3RcIiAmJiBjb25uZWN0aW9uLnRocm90dGxlTGltaXQgIT0gbnVsbCkgPyBjb25uZWN0aW9uLnRocm90dGxlTGltaXQgOiAxMjtcbiAgICBsb2dnZXIuYXNzZXJ0QXJndW1lbnQoKGF0dGVtcHRMaW1pdCA+IDAgJiYgKGF0dGVtcHRMaW1pdCAlIDEpID09PSAwKSwgXCJpbnZhbGlkIGNvbm5lY3Rpb24gdGhyb3R0bGUgbGltaXRcIiwgXCJjb25uZWN0aW9uLnRocm90dGxlTGltaXRcIiwgYXR0ZW1wdExpbWl0KTtcbiAgICBjb25zdCB0aHJvdHRsZUNhbGxiYWNrID0gKCh0eXBlb2YgKGNvbm5lY3Rpb24pID09PSBcIm9iamVjdFwiKSA/IGNvbm5lY3Rpb24udGhyb3R0bGVDYWxsYmFjayA6IG51bGwpO1xuICAgIGNvbnN0IHRocm90dGxlU2xvdEludGVydmFsID0gKCh0eXBlb2YgKGNvbm5lY3Rpb24pID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiAoY29ubmVjdGlvbi50aHJvdHRsZVNsb3RJbnRlcnZhbCkgPT09IFwibnVtYmVyXCIpID8gY29ubmVjdGlvbi50aHJvdHRsZVNsb3RJbnRlcnZhbCA6IDEwMCk7XG4gICAgbG9nZ2VyLmFzc2VydEFyZ3VtZW50KCh0aHJvdHRsZVNsb3RJbnRlcnZhbCA+IDAgJiYgKHRocm90dGxlU2xvdEludGVydmFsICUgMSkgPT09IDApLCBcImludmFsaWQgY29ubmVjdGlvbiB0aHJvdHRsZSBzbG90IGludGVydmFsXCIsIFwiY29ubmVjdGlvbi50aHJvdHRsZVNsb3RJbnRlcnZhbFwiLCB0aHJvdHRsZVNsb3RJbnRlcnZhbCk7XG4gICAgY29uc3QgaGVhZGVycyA9IHt9O1xuICAgIGxldCB1cmwgPSBudWxsO1xuICAgIC8vIEBUT0RPOiBBbGxvdyBDb25uZWN0aW9uSW5mbyB0byBvdmVycmlkZSBzb21lIG9mIHRoZXNlIHZhbHVlc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9O1xuICAgIGxldCBhbGxvdzMwNCA9IGZhbHNlO1xuICAgIGxldCB0aW1lb3V0ID0gMiAqIDYwICogMTAwMDtcbiAgICBpZiAodHlwZW9mIChjb25uZWN0aW9uKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB1cmwgPSBjb25uZWN0aW9uO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgKGNvbm5lY3Rpb24pID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmIChjb25uZWN0aW9uID09IG51bGwgfHwgY29ubmVjdGlvbi51cmwgPT0gbnVsbCkge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcIm1pc3NpbmcgVVJMXCIsIFwiY29ubmVjdGlvbi51cmxcIiwgY29ubmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdXJsID0gY29ubmVjdGlvbi51cmw7XG4gICAgICAgIGlmICh0eXBlb2YgKGNvbm5lY3Rpb24udGltZW91dCkgPT09IFwibnVtYmVyXCIgJiYgY29ubmVjdGlvbi50aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgdGltZW91dCA9IGNvbm5lY3Rpb24udGltZW91dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29ubmVjdGlvbi5oZWFkZXJzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb25uZWN0aW9uLmhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzW2tleS50b0xvd2VyQ2FzZSgpXSA9IHsga2V5OiBrZXksIHZhbHVlOiBTdHJpbmcoY29ubmVjdGlvbi5oZWFkZXJzW2tleV0pIH07XG4gICAgICAgICAgICAgICAgaWYgKFtcImlmLW5vbmUtbWF0Y2hcIiwgXCJpZi1tb2RpZmllZC1zaW5jZVwiXS5pbmRleE9mKGtleS50b0xvd2VyQ2FzZSgpKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbG93MzA0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5hbGxvd0d6aXAgPSAhIWNvbm5lY3Rpb24uYWxsb3dHemlwO1xuICAgICAgICBpZiAoY29ubmVjdGlvbi51c2VyICE9IG51bGwgJiYgY29ubmVjdGlvbi5wYXNzd29yZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodXJsLnN1YnN0cmluZygwLCA2KSAhPT0gXCJodHRwczpcIiAmJiBjb25uZWN0aW9uLmFsbG93SW5zZWN1cmVBdXRoZW50aWNhdGlvbiAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwiYmFzaWMgYXV0aGVudGljYXRpb24gcmVxdWlyZXMgYSBzZWN1cmUgaHR0cHMgdXJsXCIsIExvZ2dlci5lcnJvcnMuSU5WQUxJRF9BUkdVTUVOVCwgeyBhcmd1bWVudDogXCJ1cmxcIiwgdXJsOiB1cmwsIHVzZXI6IGNvbm5lY3Rpb24udXNlciwgcGFzc3dvcmQ6IFwiW1JFREFDVEVEXVwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYXV0aG9yaXphdGlvbiA9IGNvbm5lY3Rpb24udXNlciArIFwiOlwiICsgY29ubmVjdGlvbi5wYXNzd29yZDtcbiAgICAgICAgICAgIGhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdID0ge1xuICAgICAgICAgICAgICAgIGtleTogXCJBdXRob3JpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiQmFzaWMgXCIgKyBiYXNlNjRFbmNvZGUodG9VdGY4Qnl0ZXMoYXV0aG9yaXphdGlvbikpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlRGF0YSA9IG5ldyBSZWdFeHAoXCJeZGF0YTooW2EtejAtOS1dKy9bYS16MC05LV0rKTtiYXNlNjQsKC4qKSRcIiwgXCJpXCIpO1xuICAgIGNvbnN0IGRhdGFNYXRjaCA9ICgodXJsKSA/IHVybC5tYXRjaChyZURhdGEpIDogbnVsbCk7XG4gICAgaWYgKGRhdGFNYXRjaCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgICAgICAgIHN0YXR1c01lc3NhZ2U6IFwiT0tcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiY29udGVudC10eXBlXCI6IGRhdGFNYXRjaFsxXSB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IGJhc2U2NERlY29kZShkYXRhTWF0Y2hbMl0pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3BvbnNlLmJvZHk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzc0Z1bmMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwcm9jZXNzRnVuYyhyZXNwb25zZS5ib2R5LCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihcInByb2Nlc3NpbmcgcmVzcG9uc2UgZXJyb3JcIiwgTG9nZ2VyLmVycm9ycy5TRVJWRVJfRVJST1IsIHtcbiAgICAgICAgICAgICAgICBib2R5OiBib2R5aWZ5KGRhdGFNYXRjaFsxXSwgZGF0YU1hdGNoWzJdKSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgcmVxdWVzdEJvZHk6IG51bGwsXG4gICAgICAgICAgICAgICAgcmVxdWVzdE1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJvZHkpIHtcbiAgICAgICAgb3B0aW9ucy5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gYm9keTtcbiAgICAgICAgaWYgKGhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gPT0gbnVsbCkge1xuICAgICAgICAgICAgaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSA9IHsga2V5OiBcIkNvbnRlbnQtVHlwZVwiLCB2YWx1ZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWFkZXJzW1wiY29udGVudC1sZW5ndGhcIl0gPT0gbnVsbCkge1xuICAgICAgICAgICAgaGVhZGVyc1tcImNvbnRlbnQtbGVuZ3RoXCJdID0geyBrZXk6IFwiQ29udGVudC1MZW5ndGhcIiwgdmFsdWU6IFN0cmluZyhib2R5Lmxlbmd0aCkgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBmbGF0SGVhZGVycyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBoZWFkZXJzW2tleV07XG4gICAgICAgIGZsYXRIZWFkZXJzW2hlYWRlci5rZXldID0gaGVhZGVyLnZhbHVlO1xuICAgIH0pO1xuICAgIG9wdGlvbnMuaGVhZGVycyA9IGZsYXRIZWFkZXJzO1xuICAgIGNvbnN0IHJ1bm5pbmdUaW1lb3V0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHRpbWVyID0gbnVsbDtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChsb2dnZXIubWFrZUVycm9yKFwidGltZW91dFwiLCBMb2dnZXIuZXJyb3JzLlRJTUVPVVQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RCb2R5OiBib2R5aWZ5KG9wdGlvbnMuYm9keSwgZmxhdEhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdE1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiB0aW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRpbWVyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBwcm9taXNlLCBjYW5jZWwgfTtcbiAgICB9KSgpO1xuICAgIGNvbnN0IHJ1bm5pbmdGZXRjaCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBhdHRlbXB0ID0gMDsgYXR0ZW1wdCA8IGF0dGVtcHRMaW1pdDsgYXR0ZW1wdCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHlpZWxkIGdldFVybCh1cmwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA8IGF0dGVtcHRMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDMwMSB8fCByZXNwb25zZS5zdGF0dXNDb2RlID09PSAzMDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdGlvbjsgZm9yIG5vdyB3ZSBvbmx5IHN1cHBvcnQgYWJzb2x1dGUgbG9jYXRhaW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gcmVzcG9uc2UuaGVhZGVycy5sb2NhdGlvbiB8fCBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm1ldGhvZCA9PT0gXCJHRVRcIiAmJiBsb2NhdGlvbi5tYXRjaCgvXmh0dHBzOi8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHJlc3BvbnNlLmhlYWRlcnMubG9jYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDQyOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4cG9uZW50aWFsIGJhY2stb2ZmIHRocm90dGxpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJ5QWdhaW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aHJvdHRsZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeUFnYWluID0geWllbGQgdGhyb3R0bGVDYWxsYmFjayhhdHRlbXB0LCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJ5QWdhaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YWxsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0cnlBZnRlciA9IHJlc3BvbnNlLmhlYWRlcnNbXCJyZXRyeS1hZnRlclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAocmV0cnlBZnRlcikgPT09IFwic3RyaW5nXCIgJiYgcmV0cnlBZnRlci5tYXRjaCgvXlsxLTldWzAtOV0qJC8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFsbCA9IHBhcnNlSW50KHJldHJ5QWZ0ZXIpICogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWxsID0gdGhyb3R0bGVTbG90SW50ZXJ2YWwgKiBwYXJzZUludChTdHJpbmcoTWF0aC5yYW5kb20oKSAqIE1hdGgucG93KDIsIGF0dGVtcHQpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlN0YWxsaW5nIDQyOVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgc3RhbGxlcihzdGFsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdUaW1lb3V0LmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoXCJtaXNzaW5nIHJlc3BvbnNlXCIsIExvZ2dlci5lcnJvcnMuU0VSVkVSX0VSUk9SLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEJvZHk6IGJvZHlpZnkob3B0aW9ucy5ib2R5LCBmbGF0SGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdE1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgYm9keSA9IHJlc3BvbnNlLmJvZHk7XG4gICAgICAgICAgICAgICAgaWYgKGFsbG93MzA0ICYmIHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDMwNCkge1xuICAgICAgICAgICAgICAgICAgICBib2R5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA8IDIwMCB8fCByZXNwb25zZS5zdGF0dXNDb2RlID49IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nVGltZW91dC5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoXCJiYWQgcmVzcG9uc2VcIiwgTG9nZ2VyLmVycm9ycy5TRVJWRVJfRVJST1IsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzQ29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBib2R5aWZ5KGJvZHksICgocmVzcG9uc2UuaGVhZGVycykgPyByZXNwb25zZS5oZWFkZXJzW1wiY29udGVudC10eXBlXCJdIDogbnVsbCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEJvZHk6IGJvZHlpZnkob3B0aW9ucy5ib2R5LCBmbGF0SGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0TWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzc0Z1bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHByb2Nlc3NGdW5jKGJvZHksIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdUaW1lb3V0LmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbG93IHRoZSBwcm9jZXNzRnVuYyB0byB0cmlnZ2VyIGEgdGhyb3R0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci50aHJvdHRsZVJldHJ5ICYmIGF0dGVtcHQgPCBhdHRlbXB0TGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJ5QWdhaW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aHJvdHRsZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeUFnYWluID0geWllbGQgdGhyb3R0bGVDYWxsYmFjayhhdHRlbXB0LCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJ5QWdhaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IHRocm90dGxlU2xvdEludGVydmFsICogcGFyc2VJbnQoU3RyaW5nKE1hdGgucmFuZG9tKCkgKiBNYXRoLnBvdygyLCBhdHRlbXB0KSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiU3RhbGxpbmcgY2FsbGJhY2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHN0YWxsZXIodGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdUaW1lb3V0LmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoXCJwcm9jZXNzaW5nIHJlc3BvbnNlIGVycm9yXCIsIExvZ2dlci5lcnJvcnMuU0VSVkVSX0VSUk9SLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keWlmeShib2R5LCAoKHJlc3BvbnNlLmhlYWRlcnMpID8gcmVzcG9uc2UuaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSA6IG51bGwpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEJvZHk6IGJvZHlpZnkob3B0aW9ucy5ib2R5LCBmbGF0SGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdE1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJ1bm5pbmdUaW1lb3V0LmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhZCBhIHByb2Nlc3NGdW5jLCBpdCBlaXRoZXIgcmV0dXJuZWQgYSBUIG9yIHRocmV3IGFib3ZlLlxuICAgICAgICAgICAgICAgIC8vIFRoZSBcImJvZHlcIiBpcyBub3cgYSBVaW50OEFycmF5LlxuICAgICAgICAgICAgICAgIHJldHVybiBib2R5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxvZ2dlci50aHJvd0Vycm9yKFwiZmFpbGVkIHJlc3BvbnNlXCIsIExvZ2dlci5lcnJvcnMuU0VSVkVSX0VSUk9SLCB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEJvZHk6IGJvZHlpZnkob3B0aW9ucy5ib2R5LCBmbGF0SGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSksXG4gICAgICAgICAgICAgICAgcmVxdWVzdE1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuICAgIHJldHVybiBQcm9taXNlLnJhY2UoW3J1bm5pbmdUaW1lb3V0LnByb21pc2UsIHJ1bm5pbmdGZXRjaF0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoSnNvbihjb25uZWN0aW9uLCBqc29uLCBwcm9jZXNzRnVuYykge1xuICAgIGxldCBwcm9jZXNzSnNvbkZ1bmMgPSAodmFsdWUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHRvVXRmOFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoXCJpbnZhbGlkIEpTT05cIiwgTG9nZ2VyLmVycm9ycy5TRVJWRVJfRVJST1IsIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzRnVuYykge1xuICAgICAgICAgICAgcmVzdWx0ID0gcHJvY2Vzc0Z1bmMocmVzdWx0LCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIC8vIElmIHdlIGhhdmUganNvbiB0byBzZW5kLCB3ZSBtdXN0XG4gICAgLy8gLSBhZGQgY29udGVudC10eXBlIG9mIGFwcGxpY2F0aW9uL2pzb24gKHVubGVzcyBhbHJlYWR5IG92ZXJyaWRkZW4pXG4gICAgLy8gLSBjb252ZXJ0IHRoZSBqc29uIHRvIGJ5dGVzXG4gICAgbGV0IGJvZHkgPSBudWxsO1xuICAgIGlmIChqc29uICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IHRvVXRmOEJ5dGVzKGpzb24pO1xuICAgICAgICAvLyBDcmVhdGUgYSBjb25uZWN0aW9uIHdpdGggdGhlIGNvbnRlbnQtdHlwZSBzZXQgZm9yIEpTT05cbiAgICAgICAgY29uc3QgdXBkYXRlZCA9ICh0eXBlb2YgKGNvbm5lY3Rpb24pID09PSBcInN0cmluZ1wiKSA/ICh7IHVybDogY29ubmVjdGlvbiB9KSA6IHNoYWxsb3dDb3B5KGNvbm5lY3Rpb24pO1xuICAgICAgICBpZiAodXBkYXRlZC5oZWFkZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBoYXNDb250ZW50VHlwZSA9IChPYmplY3Qua2V5cyh1cGRhdGVkLmhlYWRlcnMpLmZpbHRlcigoaykgPT4gKGsudG9Mb3dlckNhc2UoKSA9PT0gXCJjb250ZW50LXR5cGVcIikpLmxlbmd0aCkgIT09IDA7XG4gICAgICAgICAgICBpZiAoIWhhc0NvbnRlbnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZC5oZWFkZXJzID0gc2hhbGxvd0NvcHkodXBkYXRlZC5oZWFkZXJzKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVkLmhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVwZGF0ZWQuaGVhZGVycyA9IHsgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0aW9uID0gdXBkYXRlZDtcbiAgICB9XG4gICAgcmV0dXJuIF9mZXRjaERhdGEoY29ubmVjdGlvbiwgYm9keSwgcHJvY2Vzc0pzb25GdW5jKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb2xsKGZ1bmMsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBvcHRpb25zID0gc2hhbGxvd0NvcHkob3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMuZmxvb3IgPT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zLmZsb29yID0gMDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuY2VpbGluZyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuY2VpbGluZyA9IDEwMDAwO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5pbnRlcnZhbCA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuaW50ZXJ2YWwgPSAyNTA7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxldCB0aW1lciA9IG51bGw7XG4gICAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICAgIC8vIFJldHVybnMgdHJ1ZSBpZiBjYW5jZWwgd2FzIHN1Y2Nlc3NmdWwuIFVuc3VjY2Vzc2Z1bCBjYW5jZWwgbWVhbnMgd2UncmUgYWxyZWFkeSBkb25lLlxuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0KSB7XG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjYW5jZWwoKSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwidGltZW91dFwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgb3B0aW9ucy50aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXRyeUxpbWl0ID0gb3B0aW9ucy5yZXRyeUxpbWl0O1xuICAgICAgICBsZXQgYXR0ZW1wdCA9IDA7XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmMoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVzdWx0LCBvciBhcmUgYWxsb3dlZCBudWxsIHRoZW4gd2UncmUgZG9uZVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FuY2VsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLm9uY2VQb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25jZVBvbGwub25jZShcInBvbGxcIiwgY2hlY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLm9uY2VCbG9jaykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uY2VCbG9jay5vbmNlKFwiYmxvY2tcIiwgY2hlY2spO1xuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGV4cG9uZW50aWFsIGJhY2stb2ZmICh1cCB0byAxMHMpIG91ciBuZXh0IHJlcXVlc3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA+IHJldHJ5TGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW5jZWwoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJyZXRyeSBsaW1pdCByZWFjaGVkXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZW91dCA9IG9wdGlvbnMuaW50ZXJ2YWwgKiBwYXJzZUludChTdHJpbmcoTWF0aC5yYW5kb20oKSAqIE1hdGgucG93KDIsIGF0dGVtcHQpKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0IDwgb3B0aW9ucy5mbG9vcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IG9wdGlvbnMuZmxvb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQgPiBvcHRpb25zLmNlaWxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBvcHRpb25zLmNlaWxpbmc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjaGVjaywgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2soKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuXG5pbXBvcnQgRVJDNzIxU2luZ2xldG9uIGZyb20gJy4vRVJDNzIxU2luZ2xldG9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ29udHJhY3QoY29udHJhY3ROYW1lKSB7XG5cdGNvbnN0IFtjb250cmFjdEluc3RhbmNlLCBzZXRDb250cmFjdEluc3RhbmNlXSA9IHVzZVN0YXRlKHtcblx0XHRjb250cmFjdDogbnVsbCxcblx0XHRzaWduZXJBZGRyZXNzOiBudWxsLFxuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG5cdFx0XHRcdGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuXHRcdFx0XHRjb25zdCBjb250cmFjdCA9IHsgY29udHJhY3Q6IG51bGwsIHNpZ25lckFkZHJlc3M6IG51bGwgfTtcblxuXHRcdFx0XHQvLyBTZXRzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgc3BlY2lmaWMgY29udHJhY3QgcGVyIGFwcGxpY2F0aW9uXG5cdFx0XHRcdC8vIFVzZWZ1bCBmb3Igc3dpdGNoaW5nIGFjcm9zcyBtdWx0aXBsZSBjb250cmFjdHMgaW4gYSBzaW5nbGUgYXBwbGljYXRpb25cblx0XHRcdFx0c3dpdGNoIChjb250cmFjdE5hbWUpIHtcblx0XHRcdFx0XHRjYXNlICdFUkM3MjEnOlxuXHRcdFx0XHRcdFx0Y29udHJhY3QuY29udHJhY3QgPSBFUkM3MjFTaW5nbGV0b24oc2lnbmVyKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnSW52YWxpZCBjb250cmFjdCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb250cmFjdC5zaWduZXJBZGRyZXNzID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKTtcblxuXHRcdFx0XHRzZXRDb250cmFjdEluc3RhbmNlKGNvbnRyYWN0KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRmZXRjaERhdGEoKTtcblxuXHRcdHdpbmRvdy5ldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgZmV0Y2hEYXRhKTtcblx0XHR3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIGZldGNoRGF0YSk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LmV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdhY2NvdW50c0NoYW5nZWQnLCBmZXRjaERhdGEpO1xuXHRcdFx0d2luZG93LmV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdjaGFpbkNoYW5nZWQnLCBmZXRjaERhdGEpO1xuXHRcdH07XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gY29udHJhY3RJbnN0YW5jZTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI4ZTY3OTlhOWMwOThmYjc0N2Q3ZFwiOyB9Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiRVJDNzIxU2luZ2xldG9uIiwidXNlQ29udHJhY3QiLCJjb250cmFjdE5hbWUiLCJjb250cmFjdCIsInNpZ25lckFkZHJlc3MiLCJjb250cmFjdEluc3RhbmNlIiwic2V0Q29udHJhY3RJbnN0YW5jZSIsImZldGNoRGF0YSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0QWRkcmVzcyIsImVycm9yIiwib24iLCJyZW1vdmVMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=