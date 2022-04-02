self["webpackHotUpdatedemetergift"]("/index",{

/***/ "./node_modules/web3-eth-accounts/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/web3-eth-accounts/lib/index.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file accounts.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var core = __webpack_require__(/*! web3-core */ "./node_modules/web3-eth-accounts/node_modules/web3-core/lib/index.js");
var Method = __webpack_require__(/*! web3-core-method */ "./node_modules/web3-eth-accounts/node_modules/web3-core-method/lib/index.js");
var Account = __webpack_require__(/*! eth-lib/lib/account */ "./node_modules/eth-lib/lib/account.js");
var cryp = (typeof __webpack_require__.g === 'undefined') ? __webpack_require__(/*! crypto-browserify */ "./node_modules/crypto-browserify/index.js") : __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js");
var scrypt = __webpack_require__(/*! scrypt-js */ "./node_modules/scrypt-js/scrypt.js");
var uuid = __webpack_require__(/*! uuid */ "./node_modules/web3-eth-accounts/node_modules/uuid/index.js");
var utils = __webpack_require__(/*! web3-utils */ "./node_modules/web3-eth-accounts/node_modules/web3-utils/lib/index.js");
var helpers = __webpack_require__(/*! web3-core-helpers */ "./node_modules/web3-eth-accounts/node_modules/web3-core-helpers/lib/index.js");
var { TransactionFactory } = __webpack_require__(/*! @ethereumjs/tx */ "./node_modules/@ethereumjs/tx/dist.browser/index.js");
var Common = __webpack_require__(/*! @ethereumjs/common */ "./node_modules/@ethereumjs/common/dist.browser/index.js")["default"];
var HardForks = __webpack_require__(/*! @ethereumjs/common */ "./node_modules/@ethereumjs/common/dist.browser/index.js").Hardfork;
var ethereumjsUtil = __webpack_require__(/*! ethereumjs-util */ "./node_modules/web3-eth-accounts/node_modules/ethereumjs-util/dist.browser/index.js");
var isNot = function (value) {
    return (typeof value === 'undefined') || value === null;
};
var isExist = function (value) {
    return (typeof value !== 'undefined') && value !== null;
};
var Accounts = function Accounts() {
    var _this = this;
    // sets _requestmanager
    core.packageInit(this, arguments);
    // remove unecessary core functions
    delete this.BatchRequest;
    delete this.extend;
    var _ethereumCall = [
        new Method({
            name: 'getNetworkId',
            call: 'net_version',
            params: 0,
            outputFormatter: parseInt
        }),
        new Method({
            name: 'getChainId',
            call: 'eth_chainId',
            params: 0,
            outputFormatter: utils.hexToNumber
        }),
        new Method({
            name: 'getGasPrice',
            call: 'eth_gasPrice',
            params: 0
        }),
        new Method({
            name: 'getTransactionCount',
            call: 'eth_getTransactionCount',
            params: 2,
            inputFormatter: [function (address) {
                    if (utils.isAddress(address)) {
                        return address;
                    }
                    else {
                        throw new Error('Address ' + address + ' is not a valid address to get the "transactionCount".');
                    }
                }, function () {
                    return 'latest';
                }]
        }),
        new Method({
            name: 'getBlockByNumber',
            call: 'eth_getBlockByNumber',
            params: 2,
            inputFormatter: [function (blockNumber) {
                    return blockNumber ? utils.toHex(blockNumber) : 'latest';
                }, function () {
                    return false;
                }]
        }),
    ];
    // attach methods to this._ethereumCall
    this._ethereumCall = {};
    _ethereumCall.forEach((method) => {
        method.attachToObject(_this._ethereumCall);
        method.setRequestManager(_this._requestManager);
    });
    this.wallet = new Wallet(this);
};
Accounts.prototype._addAccountFunctions = function (account) {
    var _this = this;
    // add sign functions
    account.signTransaction = function signTransaction(tx, callback) {
        return _this.signTransaction(tx, account.privateKey, callback);
    };
    account.sign = function sign(data) {
        return _this.sign(data, account.privateKey);
    };
    account.encrypt = function encrypt(password, options) {
        return _this.encrypt(account.privateKey, password, options);
    };
    return account;
};
Accounts.prototype.create = function create(entropy) {
    return this._addAccountFunctions(Account.create(entropy || utils.randomHex(32)));
};
Accounts.prototype.privateKeyToAccount = function privateKeyToAccount(privateKey, ignoreLength) {
    if (!privateKey.startsWith('0x')) {
        privateKey = '0x' + privateKey;
    }
    // 64 hex characters + hex-prefix
    if (!ignoreLength && privateKey.length !== 66) {
        throw new Error("Private key must be 32 bytes long");
    }
    return this._addAccountFunctions(Account.fromPrivate(privateKey));
};
Accounts.prototype.signTransaction = function signTransaction(tx, privateKey, callback) {
    var _this = this, error = false, transactionOptions = {}, hasTxSigningOptions = !!(tx && ((tx.chain && tx.hardfork) || tx.common));
    callback = callback || function () { };
    if (!tx) {
        error = new Error('No transaction object given!');
        callback(error);
        return Promise.reject(error);
    }
    if (isExist(tx.common) && isNot(tx.common.customChain)) {
        error = new Error('If tx.common is provided it must have tx.common.customChain');
        callback(error);
        return Promise.reject(error);
    }
    if (isExist(tx.common) && isNot(tx.common.customChain.chainId)) {
        error = new Error('If tx.common is provided it must have tx.common.customChain and tx.common.customChain.chainId');
        callback(error);
        return Promise.reject(error);
    }
    if (isExist(tx.common) && isExist(tx.common.customChain.chainId) && isExist(tx.chainId) && tx.chainId !== tx.common.customChain.chainId) {
        error = new Error('Chain Id doesnt match in tx.chainId tx.common.customChain.chainId');
        callback(error);
        return Promise.reject(error);
    }
    function signed(tx) {
        const error = _validateTransactionForSigning(tx);
        if (error) {
            callback(error);
            return Promise.reject(error);
        }
        try {
            var transaction = helpers.formatters.inputCallFormatter(Object.assign({}, tx));
            transaction.data = transaction.data || '0x';
            transaction.value = transaction.value || '0x';
            transaction.gasLimit = transaction.gasLimit || transaction.gas;
            if (transaction.type === '0x1' && transaction.accessList === undefined)
                transaction.accessList = [];
            // Because tx has no @ethereumjs/tx signing options we use fetched vals.
            if (!hasTxSigningOptions) {
                transactionOptions.common = Common.forCustomChain('mainnet', {
                    name: 'custom-network',
                    networkId: transaction.networkId,
                    chainId: transaction.chainId
                }, transaction.hardfork || HardForks.London);
                delete transaction.networkId;
            }
            else {
                if (transaction.common) {
                    transactionOptions.common = Common.forCustomChain(transaction.common.baseChain || 'mainnet', {
                        name: transaction.common.customChain.name || 'custom-network',
                        networkId: transaction.common.customChain.networkId,
                        chainId: transaction.common.customChain.chainId
                    }, transaction.common.hardfork || HardForks.London);
                    delete transaction.common;
                }
                if (transaction.chain) {
                    transactionOptions.chain = transaction.chain;
                    delete transaction.chain;
                }
                if (transaction.hardfork) {
                    transactionOptions.hardfork = transaction.hardfork;
                    delete transaction.hardfork;
                }
            }
            if (privateKey.startsWith('0x')) {
                privateKey = privateKey.substring(2);
            }
            var ethTx = TransactionFactory.fromTxData(transaction, transactionOptions);
            var signedTx = ethTx.sign(Buffer.from(privateKey, 'hex'));
            var validationErrors = signedTx.validate(true);
            if (validationErrors.length > 0) {
                let errorString = 'Signer Error: ';
                for (const validationError of validationErrors) {
                    errorString += `${errorString} ${validationError}.`;
                }
                throw new Error(errorString);
            }
            var rlpEncoded = signedTx.serialize().toString('hex');
            var rawTransaction = '0x' + rlpEncoded;
            var transactionHash = utils.keccak256(rawTransaction);
            var result = {
                messageHash: '0x' + Buffer.from(signedTx.getMessageToSign(true)).toString('hex'),
                v: '0x' + signedTx.v.toString('hex'),
                r: '0x' + signedTx.r.toString('hex'),
                s: '0x' + signedTx.s.toString('hex'),
                rawTransaction: rawTransaction,
                transactionHash: transactionHash
            };
            callback(null, result);
            return result;
        }
        catch (e) {
            callback(e);
            return Promise.reject(e);
        }
    }
    tx.type = _handleTxType(tx);
    // Resolve immediately if nonce, chainId, price and signing options are provided
    if (tx.nonce !== undefined &&
        tx.chainId !== undefined &&
        (tx.gasPrice !== undefined ||
            (tx.maxFeePerGas !== undefined &&
                tx.maxPriorityFeePerGas !== undefined)) &&
        hasTxSigningOptions) {
        return Promise.resolve(signed(tx));
    }
    // Otherwise, get the missing info from the Ethereum Node
    return Promise.all([
        ((isNot(tx.common) || isNot(tx.common.customChain.chainId)) ? //tx.common.customChain.chainId is not optional inside tx.common if tx.common is provided
            (isNot(tx.chainId) ? _this._ethereumCall.getChainId() : tx.chainId)
            : undefined),
        isNot(tx.nonce) ? _this._ethereumCall.getTransactionCount(_this.privateKeyToAccount(privateKey).address) : tx.nonce,
        isNot(hasTxSigningOptions) ? _this._ethereumCall.getNetworkId() : 1,
        _handleTxPricing(_this, tx)
    ]).then(function (args) {
        const [txchainId, txnonce, txnetworkId, txgasInfo] = args;
        if ((isNot(txchainId) && isNot(tx.common) && isNot(tx.common.customChain.chainId)) || isNot(txnonce) || isNot(txnetworkId) || isNot(txgasInfo)) {
            throw new Error('One of the values "chainId", "networkId", "gasPrice", or "nonce" couldn\'t be fetched: ' + JSON.stringify(args));
        }
        return signed({
            ...tx,
            ...((isNot(tx.common) || isNot(tx.common.customChain.chainId)) ? { chainId: txchainId } : {}),
            nonce: txnonce,
            networkId: txnetworkId,
            ...txgasInfo // Will either be gasPrice or maxFeePerGas and maxPriorityFeePerGas
        });
    });
};
function _validateTransactionForSigning(tx) {
    if (tx.common && (tx.chain && tx.hardfork)) {
        return new Error('Please provide the @ethereumjs/common object or the chain and hardfork property but not all together.');
    }
    if ((tx.chain && !tx.hardfork) || (tx.hardfork && !tx.chain)) {
        return new Error('When specifying chain and hardfork, both values must be defined. ' +
            'Received "chain": ' + tx.chain + ', "hardfork": ' + tx.hardfork);
    }
    if ((!tx.gas && !tx.gasLimit) &&
        (!tx.maxPriorityFeePerGas && !tx.maxFeePerGas)) {
        return new Error('"gas" is missing');
    }
    if (tx.gas && tx.gasPrice) {
        if (tx.gas < 0 || tx.gasPrice < 0) {
            return new Error('Gas or gasPrice is lower than 0');
        }
    }
    else {
        if (tx.maxPriorityFeePerGas < 0 || tx.maxFeePerGas < 0) {
            return new Error('maxPriorityFeePerGas or maxFeePerGas is lower than 0');
        }
    }
    if (tx.nonce < 0 || tx.chainId < 0) {
        return new Error('Nonce or chainId is lower than 0');
    }
    return;
}
function _handleTxType(tx) {
    // Taken from https://github.com/ethers-io/ethers.js/blob/2a7ce0e72a1e0c9469e10392b0329e75e341cf18/packages/abstract-signer/src.ts/index.ts#L215
    const hasEip1559 = (tx.maxFeePerGas !== undefined || tx.maxPriorityFeePerGas !== undefined);
    let txType;
    if (tx.type !== undefined) {
        txType = utils.toHex(tx.type);
    }
    else if (tx.type === undefined && hasEip1559) {
        txType = '0x2';
    }
    if (tx.gasPrice !== undefined && (txType === '0x2' || hasEip1559))
        throw Error("eip-1559 transactions don't support gasPrice");
    if ((txType === '0x1' || txType === '0x0') && hasEip1559)
        throw Error("pre-eip-1559 transaction don't support maxFeePerGas/maxPriorityFeePerGas");
    if (hasEip1559 ||
        ((tx.common && tx.common.hardfork && tx.common.hardfork.toLowerCase() === HardForks.London) ||
            (tx.hardfork && tx.hardfork.toLowerCase() === HardForks.London))) {
        txType = '0x2';
    }
    else if (tx.accessList ||
        ((tx.common && tx.common.hardfork && tx.common.hardfork.toLowerCase() === HardForks.Berlin) ||
            (tx.hardfork && tx.hardfork.toLowerCase() === HardForks.Berlin))) {
        txType = '0x1';
    }
    return txType;
}
function _handleTxPricing(_this, tx) {
    return new Promise((resolve, reject) => {
        try {
            if ((tx.type === undefined || tx.type < '0x2')
                && tx.gasPrice !== undefined) {
                // Legacy transaction, return provided gasPrice
                resolve({ gasPrice: tx.gasPrice });
            }
            else {
                Promise.all([
                    _this._ethereumCall.getBlockByNumber(),
                    _this._ethereumCall.getGasPrice()
                ]).then(responses => {
                    const [block, gasPrice] = responses;
                    if ((tx.type === '0x2') &&
                        block && block.baseFeePerGas) {
                        // The network supports EIP-1559
                        // Taken from https://github.com/ethers-io/ethers.js/blob/ba6854bdd5a912fe873d5da494cb5c62c190adde/packages/abstract-provider/src.ts/index.ts#L230
                        let maxPriorityFeePerGas, maxFeePerGas;
                        if (tx.gasPrice) {
                            // Using legacy gasPrice property on an eip-1559 network,
                            // so use gasPrice as both fee properties
                            maxPriorityFeePerGas = tx.gasPrice;
                            maxFeePerGas = tx.gasPrice;
                            delete tx.gasPrice;
                        }
                        else {
                            maxPriorityFeePerGas = tx.maxPriorityFeePerGas || '0x9502F900'; // 2.5 Gwei
                            maxFeePerGas = tx.maxFeePerGas ||
                                utils.toHex(utils.toBN(block.baseFeePerGas)
                                    .mul(utils.toBN(2))
                                    .add(utils.toBN(maxPriorityFeePerGas)));
                        }
                        resolve({ maxFeePerGas, maxPriorityFeePerGas });
                    }
                    else {
                        if (tx.maxPriorityFeePerGas || tx.maxFeePerGas)
                            throw Error("Network doesn't support eip-1559");
                        resolve({ gasPrice });
                    }
                });
            }
        }
        catch (error) {
            reject(error);
        }
    });
}
/* jshint ignore:start */
Accounts.prototype.recoverTransaction = function recoverTransaction(rawTx, txOptions = {}) {
    // Rely on EthereumJs/tx to determine the type of transaction
    const data = Buffer.from(rawTx.slice(2), "hex");
    const tx = TransactionFactory.fromSerializedData(data);
    //update checksum
    return utils.toChecksumAddress(tx.getSenderAddress().toString("hex"));
};
/* jshint ignore:end */
Accounts.prototype.hashMessage = function hashMessage(data) {
    var messageHex = utils.isHexStrict(data) ? data : utils.utf8ToHex(data);
    var messageBytes = utils.hexToBytes(messageHex);
    var messageBuffer = Buffer.from(messageBytes);
    var preamble = '\x19Ethereum Signed Message:\n' + messageBytes.length;
    var preambleBuffer = Buffer.from(preamble);
    var ethMessage = Buffer.concat([preambleBuffer, messageBuffer]);
    return ethereumjsUtil.bufferToHex(ethereumjsUtil.keccak256(ethMessage));
};
Accounts.prototype.sign = function sign(data, privateKey) {
    if (!privateKey.startsWith('0x')) {
        privateKey = '0x' + privateKey;
    }
    // 64 hex characters + hex-prefix
    if (privateKey.length !== 66) {
        throw new Error("Private key must be 32 bytes long");
    }
    var hash = this.hashMessage(data);
    var signature = Account.sign(hash, privateKey);
    var vrs = Account.decodeSignature(signature);
    return {
        message: data,
        messageHash: hash,
        v: vrs[0],
        r: vrs[1],
        s: vrs[2],
        signature: signature
    };
};
Accounts.prototype.recover = function recover(message, signature, preFixed) {
    var args = [].slice.apply(arguments);
    if (!!message && typeof message === 'object') {
        return this.recover(message.messageHash, Account.encodeSignature([message.v, message.r, message.s]), true);
    }
    if (!preFixed) {
        message = this.hashMessage(message);
    }
    if (args.length >= 4) {
        preFixed = args.slice(-1)[0];
        preFixed = typeof preFixed === 'boolean' ? !!preFixed : false;
        return this.recover(message, Account.encodeSignature(args.slice(1, 4)), preFixed); // v, r, s
    }
    return Account.recover(message, signature);
};
// Taken from https://github.com/ethereumjs/ethereumjs-wallet
Accounts.prototype.decrypt = function (v3Keystore, password, nonStrict) {
    /* jshint maxcomplexity: 10 */
    if (!(typeof password === 'string')) {
        throw new Error('No password given.');
    }
    var json = (!!v3Keystore && typeof v3Keystore === 'object') ? v3Keystore : JSON.parse(nonStrict ? v3Keystore.toLowerCase() : v3Keystore);
    if (json.version !== 3) {
        throw new Error('Not a valid V3 wallet');
    }
    var derivedKey;
    var kdfparams;
    if (json.crypto.kdf === 'scrypt') {
        kdfparams = json.crypto.kdfparams;
        // FIXME: support progress reporting callback
        derivedKey = scrypt.syncScrypt(Buffer.from(password), Buffer.from(kdfparams.salt, 'hex'), kdfparams.n, kdfparams.r, kdfparams.p, kdfparams.dklen);
    }
    else if (json.crypto.kdf === 'pbkdf2') {
        kdfparams = json.crypto.kdfparams;
        if (kdfparams.prf !== 'hmac-sha256') {
            throw new Error('Unsupported parameters to PBKDF2');
        }
        derivedKey = cryp.pbkdf2Sync(Buffer.from(password), Buffer.from(kdfparams.salt, 'hex'), kdfparams.c, kdfparams.dklen, 'sha256');
    }
    else {
        throw new Error('Unsupported key derivation scheme');
    }
    var ciphertext = Buffer.from(json.crypto.ciphertext, 'hex');
    var mac = utils.sha3(Buffer.from([...derivedKey.slice(16, 32), ...ciphertext])).replace('0x', '');
    if (mac !== json.crypto.mac) {
        throw new Error('Key derivation failed - possibly wrong password');
    }
    var decipher = cryp.createDecipheriv(json.crypto.cipher, derivedKey.slice(0, 16), Buffer.from(json.crypto.cipherparams.iv, 'hex'));
    var seed = '0x' + Buffer.from([...decipher.update(ciphertext), ...decipher.final()]).toString('hex');
    return this.privateKeyToAccount(seed, true);
};
Accounts.prototype.encrypt = function (privateKey, password, options) {
    /* jshint maxcomplexity: 20 */
    var account = this.privateKeyToAccount(privateKey, true);
    options = options || {};
    var salt = options.salt || cryp.randomBytes(32);
    var iv = options.iv || cryp.randomBytes(16);
    var derivedKey;
    var kdf = options.kdf || 'scrypt';
    var kdfparams = {
        dklen: options.dklen || 32,
        salt: salt.toString('hex')
    };
    if (kdf === 'pbkdf2') {
        kdfparams.c = options.c || 262144;
        kdfparams.prf = 'hmac-sha256';
        derivedKey = cryp.pbkdf2Sync(Buffer.from(password), Buffer.from(kdfparams.salt, 'hex'), kdfparams.c, kdfparams.dklen, 'sha256');
    }
    else if (kdf === 'scrypt') {
        // FIXME: support progress reporting callback
        kdfparams.n = options.n || 8192; // 2048 4096 8192 16384
        kdfparams.r = options.r || 8;
        kdfparams.p = options.p || 1;
        derivedKey = scrypt.syncScrypt(Buffer.from(password), Buffer.from(kdfparams.salt, 'hex'), kdfparams.n, kdfparams.r, kdfparams.p, kdfparams.dklen);
    }
    else {
        throw new Error('Unsupported kdf');
    }
    var cipher = cryp.createCipheriv(options.cipher || 'aes-128-ctr', derivedKey.slice(0, 16), iv);
    if (!cipher) {
        throw new Error('Unsupported cipher');
    }
    var ciphertext = Buffer.from([
        ...cipher.update(Buffer.from(account.privateKey.replace('0x', ''), 'hex')),
        ...cipher.final()
    ]);
    var mac = utils.sha3(Buffer.from([...derivedKey.slice(16, 32), ...ciphertext])).replace('0x', '');
    return {
        version: 3,
        id: uuid.v4({ random: options.uuid || cryp.randomBytes(16) }),
        address: account.address.toLowerCase().replace('0x', ''),
        crypto: {
            ciphertext: ciphertext.toString('hex'),
            cipherparams: {
                iv: iv.toString('hex')
            },
            cipher: options.cipher || 'aes-128-ctr',
            kdf: kdf,
            kdfparams: kdfparams,
            mac: mac.toString('hex')
        }
    };
};
// Note: this is trying to follow closely the specs on
// http://web3js.readthedocs.io/en/1.0/web3-eth-accounts.html
function Wallet(accounts) {
    this._accounts = accounts;
    this.length = 0;
    this.defaultKeyName = 'web3js_wallet';
}
Wallet.prototype._findSafeIndex = function (pointer) {
    pointer = pointer || 0;
    if (this.hasOwnProperty(pointer)) {
        return this._findSafeIndex(pointer + 1);
    }
    else {
        return pointer;
    }
};
Wallet.prototype._currentIndexes = function () {
    var keys = Object.keys(this);
    var indexes = keys
        .map(function (key) {
        return parseInt(key);
    })
        .filter(function (n) {
        return (n < 9e20);
    });
    return indexes;
};
Wallet.prototype.create = function (numberOfAccounts, entropy) {
    for (var i = 0; i < numberOfAccounts; ++i) {
        this.add(this._accounts.create(entropy).privateKey);
    }
    return this;
};
Wallet.prototype.add = function (account) {
    if (typeof account === 'string') {
        account = this._accounts.privateKeyToAccount(account);
    }
    if (!this[account.address]) {
        account = this._accounts.privateKeyToAccount(account.privateKey);
        account.index = this._findSafeIndex();
        this[account.index] = account;
        this[account.address] = account;
        this[account.address.toLowerCase()] = account;
        this.length++;
        return account;
    }
    else {
        return this[account.address];
    }
};
Wallet.prototype.remove = function (addressOrIndex) {
    var account = this[addressOrIndex];
    if (account && account.address) {
        // address
        this[account.address].privateKey = null;
        delete this[account.address];
        // address lowercase
        this[account.address.toLowerCase()].privateKey = null;
        delete this[account.address.toLowerCase()];
        // index
        this[account.index].privateKey = null;
        delete this[account.index];
        this.length--;
        return true;
    }
    else {
        return false;
    }
};
Wallet.prototype.clear = function () {
    var _this = this;
    var indexes = this._currentIndexes();
    indexes.forEach(function (index) {
        _this.remove(index);
    });
    return this;
};
Wallet.prototype.encrypt = function (password, options) {
    var _this = this;
    var indexes = this._currentIndexes();
    var accounts = indexes.map(function (index) {
        return _this[index].encrypt(password, options);
    });
    return accounts;
};
Wallet.prototype.decrypt = function (encryptedWallet, password) {
    var _this = this;
    encryptedWallet.forEach(function (keystore) {
        var account = _this._accounts.decrypt(keystore, password);
        if (account) {
            _this.add(account);
        }
        else {
            throw new Error('Couldn\'t decrypt accounts. Password wrong?');
        }
    });
    return this;
};
Wallet.prototype.save = function (password, keyName) {
    localStorage.setItem(keyName || this.defaultKeyName, JSON.stringify(this.encrypt(password)));
    return true;
};
Wallet.prototype.load = function (password, keyName) {
    var keystore = localStorage.getItem(keyName || this.defaultKeyName);
    if (keystore) {
        try {
            keystore = JSON.parse(keystore);
        }
        catch (e) {
        }
    }
    return this.decrypt(keystore || [], password);
};
if (!storageAvailable('localStorage')) {
    delete Wallet.prototype.save;
    delete Wallet.prototype.load;
}
/**
 * Checks whether a storage type is available or not
 * For more info on how this works, please refer to MDN documentation
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Feature-detecting_localStorage
 *
 * @method storageAvailable
 * @param {String} type the type of storage ('localStorage', 'sessionStorage')
 * @returns {Boolean} a boolean indicating whether the specified storage is available or not
 */
function storageAvailable(type) {
    var storage;
    try {
        storage = self[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e && (
        // everything except Firefox
        e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
module.exports = Accounts;


/***/ }),

/***/ "./node_modules/web3-eth-accounts/node_modules/web3-core-requestmanager/lib/givenProvider.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/web3-eth-accounts/node_modules/web3-core-requestmanager/lib/givenProvider.js ***!
  \***************************************************************************************************/
/***/ (function(module) {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file givenProvider.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var givenProvider = null;
// ADD GIVEN PROVIDER
/* jshint ignore:start */
var global = typeof globalThis === 'object' ? globalThis : undefined;
if (!global) {
    try {
        global = Function('return this')();
    }
    catch (e) {
        global = self;
    }
}
// EIP-1193: window.ethereum
if (typeof global.ethereum !== 'undefined') {
    givenProvider = global.ethereum;
    // Legacy web3.currentProvider
}
else if (typeof global.web3 !== 'undefined' && global.web3.currentProvider) {
    if (global.web3.currentProvider.sendAsync) {
        global.web3.currentProvider.send = global.web3.currentProvider.sendAsync;
        delete global.web3.currentProvider.sendAsync;
    }
    // if connection is 'ipcProviderWrapper', add subscription support
    if (!global.web3.currentProvider.on &&
        global.web3.currentProvider.connection &&
        global.web3.currentProvider.connection.constructor.name === 'ipcProviderWrapper') {
        global.web3.currentProvider.on = function (type, callback) {
            if (typeof callback !== 'function')
                throw new Error('The second parameter callback must be a function.');
            switch (type) {
                case 'data':
                    this.connection.on('data', function (data) {
                        var result = '';
                        data = data.toString();
                        try {
                            result = JSON.parse(data);
                        }
                        catch (e) {
                            return callback(new Error('Couldn\'t parse response data' + data));
                        }
                        // notification
                        if (!result.id && result.method.indexOf('_subscription') !== -1) {
                            callback(null, result);
                        }
                    });
                    break;
                default:
                    this.connection.on(type, callback);
                    break;
            }
        };
    }
    givenProvider = global.web3.currentProvider;
}
/* jshint ignore:end */
module.exports = givenProvider;


/***/ }),

/***/ "./node_modules/web3-eth-accounts/node_modules/web3-providers-ws/lib/helpers.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/web3-eth-accounts/node_modules/web3-providers-ws/lib/helpers.js ***!
  \**************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
var isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
var isRN = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var _btoa = null;
var helpers = null;
if (isNode || isRN) {
    _btoa = function (str) {
        return Buffer.from(str).toString('base64');
    };
    var url = __webpack_require__(/*! url */ "./node_modules/url/url.js");
    if (url.URL) {
        // Use the new Node 6+ API for parsing URLs that supports username/password
        var newURL = url.URL;
        helpers = function (url) {
            return new newURL(url);
        };
    }
    else {
        // Web3 supports Node.js 5, so fall back to the legacy URL API if necessary
        helpers = __webpack_require__(/*! url */ "./node_modules/url/url.js").parse;
    }
}
else {
    _btoa = btoa.bind(typeof globalThis === 'object' ? globalThis : self);
    helpers = function (url) {
        return new URL(url);
    };
}
module.exports = {
    parseURL: helpers,
    btoa: _btoa
};


/***/ }),

/***/ "./node_modules/web3-eth-ens/node_modules/web3-core-requestmanager/lib/givenProvider.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/web3-eth-ens/node_modules/web3-core-requestmanager/lib/givenProvider.js ***!
  \**********************************************************************************************/
/***/ (function(module) {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file givenProvider.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var givenProvider = null;
// ADD GIVEN PROVIDER
/* jshint ignore:start */
var global = typeof globalThis === 'object' ? globalThis : undefined;
if (!global) {
    try {
        global = Function('return this')();
    }
    catch (e) {
        global = self;
    }
}
// EIP-1193: window.ethereum
if (typeof global.ethereum !== 'undefined') {
    givenProvider = global.ethereum;
    // Legacy web3.currentProvider
}
else if (typeof global.web3 !== 'undefined' && global.web3.currentProvider) {
    if (global.web3.currentProvider.sendAsync) {
        global.web3.currentProvider.send = global.web3.currentProvider.sendAsync;
        delete global.web3.currentProvider.sendAsync;
    }
    // if connection is 'ipcProviderWrapper', add subscription support
    if (!global.web3.currentProvider.on &&
        global.web3.currentProvider.connection &&
        global.web3.currentProvider.connection.constructor.name === 'ipcProviderWrapper') {
        global.web3.currentProvider.on = function (type, callback) {
            if (typeof callback !== 'function')
                throw new Error('The second parameter callback must be a function.');
            switch (type) {
                case 'data':
                    this.connection.on('data', function (data) {
                        var result = '';
                        data = data.toString();
                        try {
                            result = JSON.parse(data);
                        }
                        catch (e) {
                            return callback(new Error('Couldn\'t parse response data' + data));
                        }
                        // notification
                        if (!result.id && result.method.indexOf('_subscription') !== -1) {
                            callback(null, result);
                        }
                    });
                    break;
                default:
                    this.connection.on(type, callback);
                    break;
            }
        };
    }
    givenProvider = global.web3.currentProvider;
}
/* jshint ignore:end */
module.exports = givenProvider;


/***/ }),

/***/ "./node_modules/web3-eth-ens/node_modules/web3-eth-abi/lib/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/web3-eth-ens/node_modules/web3-eth-abi/lib/index.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file index.js
 * @author Marek Kotewicz <marek@parity.io>
 * @author Fabian Vogelsteller <fabian@frozeman.de>
 * @date 2018
 */
var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js").Buffer;
var utils = __webpack_require__(/*! web3-utils */ "./node_modules/web3-eth-ens/node_modules/web3-utils/lib/index.js");
var EthersAbiCoder = __webpack_require__(/*! @ethersproject/abi */ "./node_modules/web3-eth-ens/node_modules/@ethersproject/abi/lib.esm/index.js").AbiCoder;
var ParamType = __webpack_require__(/*! @ethersproject/abi */ "./node_modules/web3-eth-ens/node_modules/@ethersproject/abi/lib.esm/index.js").ParamType;
var ethersAbiCoder = new EthersAbiCoder(function (type, value) {
    if (type.match(/^u?int/) && !Array.isArray(value) && (!(!!value && typeof value === 'object') || value.constructor.name !== 'BN')) {
        return value.toString();
    }
    return value;
});
// result method
function Result() {
}
/**
 * ABICoder prototype should be used to encode/decode solidity params of any type
 */
var ABICoder = function () {
};
/**
 * Encodes the function name to its ABI representation, which are the first 4 bytes of the sha3 of the function name including  types.
 *
 * @method encodeFunctionSignature
 * @param {String|Object} functionName
 * @return {String} encoded function name
 */
ABICoder.prototype.encodeFunctionSignature = function (functionName) {
    if (typeof functionName === 'function' || typeof functionName === 'object' && functionName) {
        functionName = utils._jsonInterfaceMethodToString(functionName);
    }
    return utils.sha3(functionName).slice(0, 10);
};
/**
 * Encodes the function name to its ABI representation, which are the first 4 bytes of the sha3 of the function name including  types.
 *
 * @method encodeEventSignature
 * @param {String|Object} functionName
 * @return {String} encoded function name
 */
ABICoder.prototype.encodeEventSignature = function (functionName) {
    if (typeof functionName === 'function' || typeof functionName === 'object' && functionName) {
        functionName = utils._jsonInterfaceMethodToString(functionName);
    }
    return utils.sha3(functionName);
};
/**
 * Should be used to encode plain param
 *
 * @method encodeParameter
 *
 * @param {String|Object} type
 * @param {any} param
 *
 * @return {String} encoded plain param
 */
ABICoder.prototype.encodeParameter = function (type, param) {
    return this.encodeParameters([type], [param]);
};
/**
 * Should be used to encode list of params
 *
 * @method encodeParameters
 *
 * @param {Array<String|Object>} types
 * @param {Array<any>} params
 *
 * @return {String} encoded list of params
 */
ABICoder.prototype.encodeParameters = function (types, params) {
    var self = this;
    types = self.mapTypes(types);
    params = params.map(function (param, index) {
        let type = types[index];
        if (typeof type === 'object' && type.type) {
            // We may get a named type of shape {name, type}
            type = type.type;
        }
        param = self.formatParam(type, param);
        // Format params for tuples
        if (typeof type === 'string' && type.includes('tuple')) {
            const coder = ethersAbiCoder._getCoder(ParamType.from(type));
            const modifyParams = (coder, param) => {
                if (coder.name === 'array') {
                    return param.map(p => modifyParams(ethersAbiCoder._getCoder(ParamType.from(coder.type.replace('[]', ''))), p));
                }
                coder.coders.forEach((c, i) => {
                    if (c.name === 'tuple') {
                        modifyParams(c, param[i]);
                    }
                    else {
                        param[i] = self.formatParam(c.name, param[i]);
                    }
                });
            };
            modifyParams(coder, param);
        }
        return param;
    });
    return ethersAbiCoder.encode(types, params);
};
/**
 * Map types if simplified format is used
 *
 * @method mapTypes
 * @param {Array} types
 * @return {Array}
 */
ABICoder.prototype.mapTypes = function (types) {
    var self = this;
    var mappedTypes = [];
    types.forEach(function (type) {
        // Remap `function` type params to bytes24 since Ethers does not
        // recognize former type. Solidity docs say `Function` is a bytes24
        // encoding the contract address followed by the function selector hash.
        if (typeof type === 'object' && type.type === 'function') {
            type = Object.assign({}, type, { type: "bytes24" });
        }
        if (self.isSimplifiedStructFormat(type)) {
            var structName = Object.keys(type)[0];
            mappedTypes.push(Object.assign(self.mapStructNameAndType(structName), {
                components: self.mapStructToCoderFormat(type[structName])
            }));
            return;
        }
        mappedTypes.push(type);
    });
    return mappedTypes;
};
/**
 * Check if type is simplified struct format
 *
 * @method isSimplifiedStructFormat
 * @param {string | Object} type
 * @returns {boolean}
 */
ABICoder.prototype.isSimplifiedStructFormat = function (type) {
    return typeof type === 'object' && typeof type.components === 'undefined' && typeof type.name === 'undefined';
};
/**
 * Maps the correct tuple type and name when the simplified format in encode/decodeParameter is used
 *
 * @method mapStructNameAndType
 * @param {string} structName
 * @return {{type: string, name: *}}
 */
ABICoder.prototype.mapStructNameAndType = function (structName) {
    var type = 'tuple';
    if (structName.indexOf('[]') > -1) {
        type = 'tuple[]';
        structName = structName.slice(0, -2);
    }
    return { type: type, name: structName };
};
/**
 * Maps the simplified format in to the expected format of the ABICoder
 *
 * @method mapStructToCoderFormat
 * @param {Object} struct
 * @return {Array}
 */
ABICoder.prototype.mapStructToCoderFormat = function (struct) {
    var self = this;
    var components = [];
    Object.keys(struct).forEach(function (key) {
        if (typeof struct[key] === 'object') {
            components.push(Object.assign(self.mapStructNameAndType(key), {
                components: self.mapStructToCoderFormat(struct[key])
            }));
            return;
        }
        components.push({
            name: key,
            type: struct[key]
        });
    });
    return components;
};
/**
 * Handle some formatting of params for backwards compatability with Ethers V4
 *
 * @method formatParam
 * @param {String} - type
 * @param {any} - param
 * @return {any} - The formatted param
 */
ABICoder.prototype.formatParam = function (type, param) {
    const paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
    const paramTypeBytesArray = new RegExp(/^bytes([0-9]*)\[\]$/);
    const paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
    const paramTypeNumberArray = new RegExp(/^(u?int)([0-9]*)\[\]$/);
    // Format BN to string
    if (utils.isBN(param) || utils.isBigNumber(param)) {
        return param.toString(10);
    }
    if (type.match(paramTypeBytesArray) || type.match(paramTypeNumberArray)) {
        return param.map(p => this.formatParam(type.replace('[]', ''), p));
    }
    // Format correct width for u?int[0-9]*
    let match = type.match(paramTypeNumber);
    if (match) {
        let size = parseInt(match[2] || "256");
        if (size / 8 < param.length) {
            // pad to correct bit width
            param = utils.leftPad(param, size);
        }
    }
    // Format correct length for bytes[0-9]+
    match = type.match(paramTypeBytes);
    if (match) {
        if (Buffer.isBuffer(param)) {
            param = utils.toHex(param);
        }
        // format to correct length
        let size = parseInt(match[1]);
        if (size) {
            let maxSize = size * 2;
            if (param.substring(0, 2) === '0x') {
                maxSize += 2;
            }
            if (param.length < maxSize) {
                // pad to correct length
                param = utils.rightPad(param, size * 2);
            }
        }
        // format odd-length bytes to even-length
        if (param.length % 2 === 1) {
            param = '0x0' + param.substring(2);
        }
    }
    return param;
};
/**
 * Encodes a function call from its json interface and parameters.
 *
 * @method encodeFunctionCall
 * @param {Array} jsonInterface
 * @param {Array} params
 * @return {String} The encoded ABI for this function call
 */
ABICoder.prototype.encodeFunctionCall = function (jsonInterface, params) {
    return this.encodeFunctionSignature(jsonInterface) + this.encodeParameters(jsonInterface.inputs, params).replace('0x', '');
};
/**
 * Should be used to decode bytes to plain param
 *
 * @method decodeParameter
 * @param {String} type
 * @param {String} bytes
 * @return {Object} plain param
 */
ABICoder.prototype.decodeParameter = function (type, bytes) {
    return this.decodeParameters([type], bytes)[0];
};
/**
 * Should be used to decode list of params
 *
 * @method decodeParameter
 * @param {Array} outputs
 * @param {String} bytes
 * @return {Array} array of plain params
 */
ABICoder.prototype.decodeParameters = function (outputs, bytes) {
    return this.decodeParametersWith(outputs, bytes, false);
};
/**
 * Should be used to decode list of params
 *
 * @method decodeParameter
 * @param {Array} outputs
 * @param {String} bytes
 * @param {Boolean} loose
 * @return {Array} array of plain params
 */
ABICoder.prototype.decodeParametersWith = function (outputs, bytes, loose) {
    if (outputs.length > 0 && (!bytes || bytes === '0x' || bytes === '0X')) {
        throw new Error('Returned values aren\'t valid, did it run Out of Gas? ' +
            'You might also see this error if you are not using the ' +
            'correct ABI for the contract you are retrieving data from, ' +
            'requesting data from a block number that does not exist, ' +
            'or querying a node which is not fully synced.');
    }
    var res = ethersAbiCoder.decode(this.mapTypes(outputs), '0x' + bytes.replace(/0x/i, ''), loose);
    var returnValue = new Result();
    returnValue.__length__ = 0;
    outputs.forEach(function (output, i) {
        var decodedValue = res[returnValue.__length__];
        const isStringObject = typeof output === 'object' && output.type && output.type === 'string';
        const isStringType = typeof output === 'string' && output === 'string';
        // only convert `0x` to null if it's not string value
        decodedValue = (decodedValue === '0x' && !isStringObject && !isStringType) ? null : decodedValue;
        returnValue[i] = decodedValue;
        if ((typeof output === 'function' || !!output && typeof output === 'object') && output.name) {
            returnValue[output.name] = decodedValue;
        }
        returnValue.__length__++;
    });
    return returnValue;
};
/**
 * Decodes events non- and indexed parameters.
 *
 * @method decodeLog
 * @param {Object} inputs
 * @param {String} data
 * @param {Array} topics
 * @return {Array} array of plain params
 */
ABICoder.prototype.decodeLog = function (inputs, data, topics) {
    var _this = this;
    topics = Array.isArray(topics) ? topics : [topics];
    data = data || '';
    var notIndexedInputs = [];
    var indexedParams = [];
    var topicCount = 0;
    // TODO check for anonymous logs?
    inputs.forEach(function (input, i) {
        if (input.indexed) {
            indexedParams[i] = (['bool', 'int', 'uint', 'address', 'fixed', 'ufixed'].find(function (staticType) {
                return input.type.indexOf(staticType) !== -1;
            })) ? _this.decodeParameter(input.type, topics[topicCount]) : topics[topicCount];
            topicCount++;
        }
        else {
            notIndexedInputs[i] = input;
        }
    });
    var nonIndexedData = data;
    var notIndexedParams = (nonIndexedData) ? this.decodeParametersWith(notIndexedInputs, nonIndexedData, true) : [];
    var returnValue = new Result();
    returnValue.__length__ = 0;
    inputs.forEach(function (res, i) {
        returnValue[i] = (res.type === 'string') ? '' : null;
        if (typeof notIndexedParams[i] !== 'undefined') {
            returnValue[i] = notIndexedParams[i];
        }
        if (typeof indexedParams[i] !== 'undefined') {
            returnValue[i] = indexedParams[i];
        }
        if (res.name) {
            returnValue[res.name] = returnValue[i];
        }
        returnValue.__length__++;
    });
    return returnValue;
};
var coder = new ABICoder();
module.exports = coder;


/***/ }),

/***/ "./node_modules/web3-eth-ens/node_modules/web3-providers-ws/lib/helpers.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/web3-eth-ens/node_modules/web3-providers-ws/lib/helpers.js ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
var isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
var isRN = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var _btoa = null;
var helpers = null;
if (isNode || isRN) {
    _btoa = function (str) {
        return Buffer.from(str).toString('base64');
    };
    var url = __webpack_require__(/*! url */ "./node_modules/url/url.js");
    if (url.URL) {
        // Use the new Node 6+ API for parsing URLs that supports username/password
        var newURL = url.URL;
        helpers = function (url) {
            return new newURL(url);
        };
    }
    else {
        // Web3 supports Node.js 5, so fall back to the legacy URL API if necessary
        helpers = __webpack_require__(/*! url */ "./node_modules/url/url.js").parse;
    }
}
else {
    _btoa = btoa.bind(typeof globalThis === 'object' ? globalThis : self);
    helpers = function (url) {
        return new URL(url);
    };
}
module.exports = {
    parseURL: helpers,
    btoa: _btoa
};


/***/ }),

/***/ "./node_modules/web3-eth/lib/getNetworkType.js":
/*!*****************************************************!*\
  !*** ./node_modules/web3-eth/lib/getNetworkType.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file getNetworkType.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var getNetworkType = function (callback) {
    var _this = this, id;
    return this.net.getId()
        .then(function (givenId) {
        id = givenId;
        return _this.getBlock(0);
    })
        .then(function (genesis) {
        var returnValue = 'private';
        if (genesis.hash === '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3' &&
            id === 1) {
            returnValue = 'main';
        }
        if (genesis.hash === '0x41941023680923e0fe4d74a34bdac8141f2540e3ae90623718e47d66d1ca4a2d' &&
            id === 3) {
            returnValue = 'ropsten';
        }
        if (genesis.hash === '0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e177' &&
            id === 4) {
            returnValue = 'rinkeby';
        }
        if (genesis.hash === '0xbf7e331f7f7c1dd2e05159666b3bf8bc7a8a3a9eb1d518969eab529dd9b88c1a' &&
            id === 5) {
            returnValue = 'goerli';
        }
        if (genesis.hash === '0xa3c565fc15c7478862d50ccd6561e3c06b24cc509bf388941c25ea985ce32cb9' &&
            id === 42) {
            returnValue = 'kovan';
        }
        if (typeof callback === 'function') {
            callback(null, returnValue);
        }
        return returnValue;
    })
        .catch(function (err) {
        if (typeof callback === 'function') {
            callback(err);
        }
        else {
            throw err;
        }
    });
};
module.exports = getNetworkType;


/***/ }),

/***/ "./node_modules/web3-eth/node_modules/web3-core-requestmanager/lib/givenProvider.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/web3-eth/node_modules/web3-core-requestmanager/lib/givenProvider.js ***!
  \******************************************************************************************/
/***/ (function(module) {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file givenProvider.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var givenProvider = null;
// ADD GIVEN PROVIDER
/* jshint ignore:start */
var global = typeof globalThis === 'object' ? globalThis : undefined;
if (!global) {
    try {
        global = Function('return this')();
    }
    catch (e) {
        global = self;
    }
}
// EIP-1193: window.ethereum
if (typeof global.ethereum !== 'undefined') {
    givenProvider = global.ethereum;
    // Legacy web3.currentProvider
}
else if (typeof global.web3 !== 'undefined' && global.web3.currentProvider) {
    if (global.web3.currentProvider.sendAsync) {
        global.web3.currentProvider.send = global.web3.currentProvider.sendAsync;
        delete global.web3.currentProvider.sendAsync;
    }
    // if connection is 'ipcProviderWrapper', add subscription support
    if (!global.web3.currentProvider.on &&
        global.web3.currentProvider.connection &&
        global.web3.currentProvider.connection.constructor.name === 'ipcProviderWrapper') {
        global.web3.currentProvider.on = function (type, callback) {
            if (typeof callback !== 'function')
                throw new Error('The second parameter callback must be a function.');
            switch (type) {
                case 'data':
                    this.connection.on('data', function (data) {
                        var result = '';
                        data = data.toString();
                        try {
                            result = JSON.parse(data);
                        }
                        catch (e) {
                            return callback(new Error('Couldn\'t parse response data' + data));
                        }
                        // notification
                        if (!result.id && result.method.indexOf('_subscription') !== -1) {
                            callback(null, result);
                        }
                    });
                    break;
                default:
                    this.connection.on(type, callback);
                    break;
            }
        };
    }
    givenProvider = global.web3.currentProvider;
}
/* jshint ignore:end */
module.exports = givenProvider;


/***/ }),

/***/ "./node_modules/web3-eth/node_modules/web3-eth-abi/lib/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/web3-eth/node_modules/web3-eth-abi/lib/index.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file index.js
 * @author Marek Kotewicz <marek@parity.io>
 * @author Fabian Vogelsteller <fabian@frozeman.de>
 * @date 2018
 */
var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js").Buffer;
var utils = __webpack_require__(/*! web3-utils */ "./node_modules/web3-eth/node_modules/web3-utils/lib/index.js");
var EthersAbiCoder = __webpack_require__(/*! @ethersproject/abi */ "./node_modules/web3-eth/node_modules/@ethersproject/abi/lib.esm/index.js").AbiCoder;
var ParamType = __webpack_require__(/*! @ethersproject/abi */ "./node_modules/web3-eth/node_modules/@ethersproject/abi/lib.esm/index.js").ParamType;
var ethersAbiCoder = new EthersAbiCoder(function (type, value) {
    if (type.match(/^u?int/) && !Array.isArray(value) && (!(!!value && typeof value === 'object') || value.constructor.name !== 'BN')) {
        return value.toString();
    }
    return value;
});
// result method
function Result() {
}
/**
 * ABICoder prototype should be used to encode/decode solidity params of any type
 */
var ABICoder = function () {
};
/**
 * Encodes the function name to its ABI representation, which are the first 4 bytes of the sha3 of the function name including  types.
 *
 * @method encodeFunctionSignature
 * @param {String|Object} functionName
 * @return {String} encoded function name
 */
ABICoder.prototype.encodeFunctionSignature = function (functionName) {
    if (typeof functionName === 'function' || typeof functionName === 'object' && functionName) {
        functionName = utils._jsonInterfaceMethodToString(functionName);
    }
    return utils.sha3(functionName).slice(0, 10);
};
/**
 * Encodes the function name to its ABI representation, which are the first 4 bytes of the sha3 of the function name including  types.
 *
 * @method encodeEventSignature
 * @param {String|Object} functionName
 * @return {String} encoded function name
 */
ABICoder.prototype.encodeEventSignature = function (functionName) {
    if (typeof functionName === 'function' || typeof functionName === 'object' && functionName) {
        functionName = utils._jsonInterfaceMethodToString(functionName);
    }
    return utils.sha3(functionName);
};
/**
 * Should be used to encode plain param
 *
 * @method encodeParameter
 *
 * @param {String|Object} type
 * @param {any} param
 *
 * @return {String} encoded plain param
 */
ABICoder.prototype.encodeParameter = function (type, param) {
    return this.encodeParameters([type], [param]);
};
/**
 * Should be used to encode list of params
 *
 * @method encodeParameters
 *
 * @param {Array<String|Object>} types
 * @param {Array<any>} params
 *
 * @return {String} encoded list of params
 */
ABICoder.prototype.encodeParameters = function (types, params) {
    var self = this;
    types = self.mapTypes(types);
    params = params.map(function (param, index) {
        let type = types[index];
        if (typeof type === 'object' && type.type) {
            // We may get a named type of shape {name, type}
            type = type.type;
        }
        param = self.formatParam(type, param);
        // Format params for tuples
        if (typeof type === 'string' && type.includes('tuple')) {
            const coder = ethersAbiCoder._getCoder(ParamType.from(type));
            const modifyParams = (coder, param) => {
                if (coder.name === 'array') {
                    return param.map(p => modifyParams(ethersAbiCoder._getCoder(ParamType.from(coder.type.replace('[]', ''))), p));
                }
                coder.coders.forEach((c, i) => {
                    if (c.name === 'tuple') {
                        modifyParams(c, param[i]);
                    }
                    else {
                        param[i] = self.formatParam(c.name, param[i]);
                    }
                });
            };
            modifyParams(coder, param);
        }
        return param;
    });
    return ethersAbiCoder.encode(types, params);
};
/**
 * Map types if simplified format is used
 *
 * @method mapTypes
 * @param {Array} types
 * @return {Array}
 */
ABICoder.prototype.mapTypes = function (types) {
    var self = this;
    var mappedTypes = [];
    types.forEach(function (type) {
        // Remap `function` type params to bytes24 since Ethers does not
        // recognize former type. Solidity docs say `Function` is a bytes24
        // encoding the contract address followed by the function selector hash.
        if (typeof type === 'object' && type.type === 'function') {
            type = Object.assign({}, type, { type: "bytes24" });
        }
        if (self.isSimplifiedStructFormat(type)) {
            var structName = Object.keys(type)[0];
            mappedTypes.push(Object.assign(self.mapStructNameAndType(structName), {
                components: self.mapStructToCoderFormat(type[structName])
            }));
            return;
        }
        mappedTypes.push(type);
    });
    return mappedTypes;
};
/**
 * Check if type is simplified struct format
 *
 * @method isSimplifiedStructFormat
 * @param {string | Object} type
 * @returns {boolean}
 */
ABICoder.prototype.isSimplifiedStructFormat = function (type) {
    return typeof type === 'object' && typeof type.components === 'undefined' && typeof type.name === 'undefined';
};
/**
 * Maps the correct tuple type and name when the simplified format in encode/decodeParameter is used
 *
 * @method mapStructNameAndType
 * @param {string} structName
 * @return {{type: string, name: *}}
 */
ABICoder.prototype.mapStructNameAndType = function (structName) {
    var type = 'tuple';
    if (structName.indexOf('[]') > -1) {
        type = 'tuple[]';
        structName = structName.slice(0, -2);
    }
    return { type: type, name: structName };
};
/**
 * Maps the simplified format in to the expected format of the ABICoder
 *
 * @method mapStructToCoderFormat
 * @param {Object} struct
 * @return {Array}
 */
ABICoder.prototype.mapStructToCoderFormat = function (struct) {
    var self = this;
    var components = [];
    Object.keys(struct).forEach(function (key) {
        if (typeof struct[key] === 'object') {
            components.push(Object.assign(self.mapStructNameAndType(key), {
                components: self.mapStructToCoderFormat(struct[key])
            }));
            return;
        }
        components.push({
            name: key,
            type: struct[key]
        });
    });
    return components;
};
/**
 * Handle some formatting of params for backwards compatability with Ethers V4
 *
 * @method formatParam
 * @param {String} - type
 * @param {any} - param
 * @return {any} - The formatted param
 */
ABICoder.prototype.formatParam = function (type, param) {
    const paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
    const paramTypeBytesArray = new RegExp(/^bytes([0-9]*)\[\]$/);
    const paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
    const paramTypeNumberArray = new RegExp(/^(u?int)([0-9]*)\[\]$/);
    // Format BN to string
    if (utils.isBN(param) || utils.isBigNumber(param)) {
        return param.toString(10);
    }
    if (type.match(paramTypeBytesArray) || type.match(paramTypeNumberArray)) {
        return param.map(p => this.formatParam(type.replace('[]', ''), p));
    }
    // Format correct width for u?int[0-9]*
    let match = type.match(paramTypeNumber);
    if (match) {
        let size = parseInt(match[2] || "256");
        if (size / 8 < param.length) {
            // pad to correct bit width
            param = utils.leftPad(param, size);
        }
    }
    // Format correct length for bytes[0-9]+
    match = type.match(paramTypeBytes);
    if (match) {
        if (Buffer.isBuffer(param)) {
            param = utils.toHex(param);
        }
        // format to correct length
        let size = parseInt(match[1]);
        if (size) {
            let maxSize = size * 2;
            if (param.substring(0, 2) === '0x') {
                maxSize += 2;
            }
            if (param.length < maxSize) {
                // pad to correct length
                param = utils.rightPad(param, size * 2);
            }
        }
        // format odd-length bytes to even-length
        if (param.length % 2 === 1) {
            param = '0x0' + param.substring(2);
        }
    }
    return param;
};
/**
 * Encodes a function call from its json interface and parameters.
 *
 * @method encodeFunctionCall
 * @param {Array} jsonInterface
 * @param {Array} params
 * @return {String} The encoded ABI for this function call
 */
ABICoder.prototype.encodeFunctionCall = function (jsonInterface, params) {
    return this.encodeFunctionSignature(jsonInterface) + this.encodeParameters(jsonInterface.inputs, params).replace('0x', '');
};
/**
 * Should be used to decode bytes to plain param
 *
 * @method decodeParameter
 * @param {String} type
 * @param {String} bytes
 * @return {Object} plain param
 */
ABICoder.prototype.decodeParameter = function (type, bytes) {
    return this.decodeParameters([type], bytes)[0];
};
/**
 * Should be used to decode list of params
 *
 * @method decodeParameter
 * @param {Array} outputs
 * @param {String} bytes
 * @return {Array} array of plain params
 */
ABICoder.prototype.decodeParameters = function (outputs, bytes) {
    return this.decodeParametersWith(outputs, bytes, false);
};
/**
 * Should be used to decode list of params
 *
 * @method decodeParameter
 * @param {Array} outputs
 * @param {String} bytes
 * @param {Boolean} loose
 * @return {Array} array of plain params
 */
ABICoder.prototype.decodeParametersWith = function (outputs, bytes, loose) {
    if (outputs.length > 0 && (!bytes || bytes === '0x' || bytes === '0X')) {
        throw new Error('Returned values aren\'t valid, did it run Out of Gas? ' +
            'You might also see this error if you are not using the ' +
            'correct ABI for the contract you are retrieving data from, ' +
            'requesting data from a block number that does not exist, ' +
            'or querying a node which is not fully synced.');
    }
    var res = ethersAbiCoder.decode(this.mapTypes(outputs), '0x' + bytes.replace(/0x/i, ''), loose);
    var returnValue = new Result();
    returnValue.__length__ = 0;
    outputs.forEach(function (output, i) {
        var decodedValue = res[returnValue.__length__];
        const isStringObject = typeof output === 'object' && output.type && output.type === 'string';
        const isStringType = typeof output === 'string' && output === 'string';
        // only convert `0x` to null if it's not string value
        decodedValue = (decodedValue === '0x' && !isStringObject && !isStringType) ? null : decodedValue;
        returnValue[i] = decodedValue;
        if ((typeof output === 'function' || !!output && typeof output === 'object') && output.name) {
            returnValue[output.name] = decodedValue;
        }
        returnValue.__length__++;
    });
    return returnValue;
};
/**
 * Decodes events non- and indexed parameters.
 *
 * @method decodeLog
 * @param {Object} inputs
 * @param {String} data
 * @param {Array} topics
 * @return {Array} array of plain params
 */
ABICoder.prototype.decodeLog = function (inputs, data, topics) {
    var _this = this;
    topics = Array.isArray(topics) ? topics : [topics];
    data = data || '';
    var notIndexedInputs = [];
    var indexedParams = [];
    var topicCount = 0;
    // TODO check for anonymous logs?
    inputs.forEach(function (input, i) {
        if (input.indexed) {
            indexedParams[i] = (['bool', 'int', 'uint', 'address', 'fixed', 'ufixed'].find(function (staticType) {
                return input.type.indexOf(staticType) !== -1;
            })) ? _this.decodeParameter(input.type, topics[topicCount]) : topics[topicCount];
            topicCount++;
        }
        else {
            notIndexedInputs[i] = input;
        }
    });
    var nonIndexedData = data;
    var notIndexedParams = (nonIndexedData) ? this.decodeParametersWith(notIndexedInputs, nonIndexedData, true) : [];
    var returnValue = new Result();
    returnValue.__length__ = 0;
    inputs.forEach(function (res, i) {
        returnValue[i] = (res.type === 'string') ? '' : null;
        if (typeof notIndexedParams[i] !== 'undefined') {
            returnValue[i] = notIndexedParams[i];
        }
        if (typeof indexedParams[i] !== 'undefined') {
            returnValue[i] = indexedParams[i];
        }
        if (res.name) {
            returnValue[res.name] = returnValue[i];
        }
        returnValue.__length__++;
    });
    return returnValue;
};
var coder = new ABICoder();
module.exports = coder;


/***/ }),

/***/ "./node_modules/web3-eth/node_modules/web3-providers-ws/lib/helpers.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/web3-eth/node_modules/web3-providers-ws/lib/helpers.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
var isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
var isRN = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var _btoa = null;
var helpers = null;
if (isNode || isRN) {
    _btoa = function (str) {
        return Buffer.from(str).toString('base64');
    };
    var url = __webpack_require__(/*! url */ "./node_modules/url/url.js");
    if (url.URL) {
        // Use the new Node 6+ API for parsing URLs that supports username/password
        var newURL = url.URL;
        helpers = function (url) {
            return new newURL(url);
        };
    }
    else {
        // Web3 supports Node.js 5, so fall back to the legacy URL API if necessary
        helpers = __webpack_require__(/*! url */ "./node_modules/url/url.js").parse;
    }
}
else {
    _btoa = btoa.bind(typeof globalThis === 'object' ? globalThis : self);
    helpers = function (url) {
        return new URL(url);
    };
}
module.exports = {
    parseURL: helpers,
    btoa: _btoa
};


/***/ }),

/***/ "./node_modules/web3-shh/node_modules/web3-core-requestmanager/lib/givenProvider.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/web3-shh/node_modules/web3-core-requestmanager/lib/givenProvider.js ***!
  \******************************************************************************************/
/***/ (function(module) {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file givenProvider.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var givenProvider = null;
// ADD GIVEN PROVIDER
/* jshint ignore:start */
var global = typeof globalThis === 'object' ? globalThis : undefined;
if (!global) {
    try {
        global = Function('return this')();
    }
    catch (e) {
        global = self;
    }
}
// EIP-1193: window.ethereum
if (typeof global.ethereum !== 'undefined') {
    givenProvider = global.ethereum;
    // Legacy web3.currentProvider
}
else if (typeof global.web3 !== 'undefined' && global.web3.currentProvider) {
    if (global.web3.currentProvider.sendAsync) {
        global.web3.currentProvider.send = global.web3.currentProvider.sendAsync;
        delete global.web3.currentProvider.sendAsync;
    }
    // if connection is 'ipcProviderWrapper', add subscription support
    if (!global.web3.currentProvider.on &&
        global.web3.currentProvider.connection &&
        global.web3.currentProvider.connection.constructor.name === 'ipcProviderWrapper') {
        global.web3.currentProvider.on = function (type, callback) {
            if (typeof callback !== 'function')
                throw new Error('The second parameter callback must be a function.');
            switch (type) {
                case 'data':
                    this.connection.on('data', function (data) {
                        var result = '';
                        data = data.toString();
                        try {
                            result = JSON.parse(data);
                        }
                        catch (e) {
                            return callback(new Error('Couldn\'t parse response data' + data));
                        }
                        // notification
                        if (!result.id && result.method.indexOf('_subscription') !== -1) {
                            callback(null, result);
                        }
                    });
                    break;
                default:
                    this.connection.on(type, callback);
                    break;
            }
        };
    }
    givenProvider = global.web3.currentProvider;
}
/* jshint ignore:end */
module.exports = givenProvider;


/***/ }),

/***/ "./node_modules/web3-shh/node_modules/web3-providers-ws/lib/helpers.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/web3-shh/node_modules/web3-providers-ws/lib/helpers.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
var isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
var isRN = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var _btoa = null;
var helpers = null;
if (isNode || isRN) {
    _btoa = function (str) {
        return Buffer.from(str).toString('base64');
    };
    var url = __webpack_require__(/*! url */ "./node_modules/url/url.js");
    if (url.URL) {
        // Use the new Node 6+ API for parsing URLs that supports username/password
        var newURL = url.URL;
        helpers = function (url) {
            return new newURL(url);
        };
    }
    else {
        // Web3 supports Node.js 5, so fall back to the legacy URL API if necessary
        helpers = __webpack_require__(/*! url */ "./node_modules/url/url.js").parse;
    }
}
else {
    _btoa = btoa.bind(typeof globalThis === 'object' ? globalThis : self);
    helpers = function (url) {
        return new URL(url);
    };
}
module.exports = {
    parseURL: helpers,
    btoa: _btoa
};


/***/ }),

/***/ "./node_modules/web3/node_modules/web3-core-requestmanager/lib/givenProvider.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/web3/node_modules/web3-core-requestmanager/lib/givenProvider.js ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file givenProvider.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var givenProvider = null;
// ADD GIVEN PROVIDER
/* jshint ignore:start */
var global = typeof globalThis === 'object' ? globalThis : undefined;
if (!global) {
    try {
        global = Function('return this')();
    }
    catch (e) {
        global = self;
    }
}
// EIP-1193: window.ethereum
if (typeof global.ethereum !== 'undefined') {
    givenProvider = global.ethereum;
    // Legacy web3.currentProvider
}
else if (typeof global.web3 !== 'undefined' && global.web3.currentProvider) {
    if (global.web3.currentProvider.sendAsync) {
        global.web3.currentProvider.send = global.web3.currentProvider.sendAsync;
        delete global.web3.currentProvider.sendAsync;
    }
    // if connection is 'ipcProviderWrapper', add subscription support
    if (!global.web3.currentProvider.on &&
        global.web3.currentProvider.connection &&
        global.web3.currentProvider.connection.constructor.name === 'ipcProviderWrapper') {
        global.web3.currentProvider.on = function (type, callback) {
            if (typeof callback !== 'function')
                throw new Error('The second parameter callback must be a function.');
            switch (type) {
                case 'data':
                    this.connection.on('data', function (data) {
                        var result = '';
                        data = data.toString();
                        try {
                            result = JSON.parse(data);
                        }
                        catch (e) {
                            return callback(new Error('Couldn\'t parse response data' + data));
                        }
                        // notification
                        if (!result.id && result.method.indexOf('_subscription') !== -1) {
                            callback(null, result);
                        }
                    });
                    break;
                default:
                    this.connection.on(type, callback);
                    break;
            }
        };
    }
    givenProvider = global.web3.currentProvider;
}
/* jshint ignore:end */
module.exports = givenProvider;


/***/ }),

/***/ "./node_modules/web3/node_modules/web3-providers-ws/lib/helpers.js":
/*!*************************************************************************!*\
  !*** ./node_modules/web3/node_modules/web3-providers-ws/lib/helpers.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
var isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
var isRN = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
var _btoa = null;
var helpers = null;
if (isNode || isRN) {
    _btoa = function (str) {
        return Buffer.from(str).toString('base64');
    };
    var url = __webpack_require__(/*! url */ "./node_modules/url/url.js");
    if (url.URL) {
        // Use the new Node 6+ API for parsing URLs that supports username/password
        var newURL = url.URL;
        helpers = function (url) {
            return new newURL(url);
        };
    }
    else {
        // Web3 supports Node.js 5, so fall back to the legacy URL API if necessary
        helpers = __webpack_require__(/*! url */ "./node_modules/url/url.js").parse;
    }
}
else {
    _btoa = btoa.bind(typeof globalThis === 'object' ? globalThis : self);
    helpers = function (url) {
        return new URL(url);
    };
}
module.exports = {
    parseURL: helpers,
    btoa: _btoa
};


/***/ }),

/***/ "./node_modules/web3/package.json":
/*!****************************************!*\
  !*** ./node_modules/web3/package.json ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"web3","version":"1.7.1","description":"Ethereum JavaScript API","repository":"https://github.com/ethereum/web3.js","license":"LGPL-3.0","engines":{"node":">=8.0.0"},"main":"lib/index.js","bugs":{"url":"https://github.com/ethereum/web3.js/issues"},"keywords":["Ethereum","JavaScript","API"],"author":"ethereum.org","types":"types/index.d.ts","scripts":{"compile":"tsc -b tsconfig.json","dtslint":"dtslint --localTs ../../node_modules/typescript/lib types","postinstall":"echo \\"WARNING: the web3-shh and web3-bzz api will be deprecated in the next version\\""},"authors":[{"name":"Fabian Vogelsteller","email":"fabian@ethereum.org","homepage":"http://frozeman.de"},{"name":"Marek Kotewicz","email":"marek@parity.io","url":"https://github.com/debris"},{"name":"Marian Oancea","url":"https://github.com/cubedro"},{"name":"Gav Wood","email":"g@parity.io","homepage":"http://gavwood.com"},{"name":"Jeffery Wilcke","email":"jeffrey.wilcke@ethereum.org","url":"https://github.com/obscuren"}],"dependencies":{"web3-bzz":"1.7.1","web3-core":"1.7.1","web3-eth":"1.7.1","web3-eth-personal":"1.7.1","web3-net":"1.7.1","web3-shh":"1.7.1","web3-utils":"1.7.1"},"devDependencies":{"@types/node":"^12.12.6","dtslint":"^3.4.1","typescript":"^3.9.5","web3-core-helpers":"1.7.1"},"gitHead":"75f7b803b40747095d0fd058d55a3d89367bb859"}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "415e2e02ca4c732a19bd"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjQ3ODA5NzFlMDY5YmRkZmMwMDRmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYixXQUFXLG1CQUFPLENBQUMsdUZBQVc7QUFDOUIsYUFBYSxtQkFBTyxDQUFDLHFHQUFrQjtBQUN2QyxjQUFjLG1CQUFPLENBQUMsa0VBQXFCO0FBQzNDLG1CQUFtQixxQkFBTSxvQkFBb0IsbUJBQU8sQ0FBQyxvRUFBbUIsSUFBSSxtQkFBTyxDQUFDLHlEQUFRO0FBQzVGLGFBQWEsbUJBQU8sQ0FBQyxxREFBVztBQUNoQyxXQUFXLG1CQUFPLENBQUMseUVBQU07QUFDekIsWUFBWSxtQkFBTyxDQUFDLHlGQUFZO0FBQ2hDLGNBQWMsbUJBQU8sQ0FBQyx1R0FBbUI7QUFDekMsTUFBTSxxQkFBcUIsRUFBRSxtQkFBTyxDQUFDLDJFQUFnQjtBQUNyRCxhQUFhLG1IQUFxQztBQUNsRCxnQkFBZ0IsaUhBQXNDO0FBQ3RELHFCQUFxQixtQkFBTyxDQUFDLDRHQUFpQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsYUFBYSxFQUFFLGdCQUFnQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxNQUFNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxxQkFBcUIsSUFBSTtBQUN4RztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1QkFBdUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxVQUFVO0FBQzVDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHlGQUF5RjtBQUN6RjtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsTUFBTTtBQUM5QjtBQUNBLHlCQUF5QixNQUFNO0FBQy9CLHFCQUFxQixNQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsTUFBTSxpQkFBaUIsTUFBTTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsTUFBTSxpQkFBaUIsTUFBTTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixNQUFNO0FBQzNCLHlCQUF5QixNQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixNQUFNO0FBQzVGLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsTUFBTSxpQkFBaUIsTUFBTTtBQUNsRTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLHVDQUF1QyxNQUFNLGlCQUFpQixNQUFNO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsTUFBTTtBQUMzQix5QkFBeUIsTUFBTTtBQUMvQjtBQUNBO0FBQ0EseUJBQXlCLE1BQU07QUFDL0I7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBOEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JvQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9ub2RlX21vZHVsZXMvd2ViMy1ldGgtYWNjb3VudHMvbGliL2luZGV4LmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL3dlYjMtZXRoLWFjY291bnRzL25vZGVfbW9kdWxlcy93ZWIzLWNvcmUtcmVxdWVzdG1hbmFnZXIvbGliL2dpdmVuUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9ub2RlX21vZHVsZXMvd2ViMy1ldGgtYWNjb3VudHMvbm9kZV9tb2R1bGVzL3dlYjMtcHJvdmlkZXJzLXdzL2xpYi9oZWxwZXJzLmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL3dlYjMtZXRoLWVucy9ub2RlX21vZHVsZXMvd2ViMy1jb3JlLXJlcXVlc3RtYW5hZ2VyL2xpYi9naXZlblByb3ZpZGVyLmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL3dlYjMtZXRoLWVucy9ub2RlX21vZHVsZXMvd2ViMy1ldGgtYWJpL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL25vZGVfbW9kdWxlcy93ZWIzLWV0aC1lbnMvbm9kZV9tb2R1bGVzL3dlYjMtcHJvdmlkZXJzLXdzL2xpYi9oZWxwZXJzLmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL3dlYjMtZXRoL2xpYi9nZXROZXR3b3JrVHlwZS5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL25vZGVfbW9kdWxlcy93ZWIzLWV0aC9ub2RlX21vZHVsZXMvd2ViMy1jb3JlLXJlcXVlc3RtYW5hZ2VyL2xpYi9naXZlblByb3ZpZGVyLmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL3dlYjMtZXRoL25vZGVfbW9kdWxlcy93ZWIzLWV0aC1hYmkvbGliL2luZGV4LmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL3dlYjMtZXRoL25vZGVfbW9kdWxlcy93ZWIzLXByb3ZpZGVycy13cy9saWIvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL25vZGVfbW9kdWxlcy93ZWIzLXNoaC9ub2RlX21vZHVsZXMvd2ViMy1jb3JlLXJlcXVlc3RtYW5hZ2VyL2xpYi9naXZlblByb3ZpZGVyLmpzIiwid2VicGFjazovL2RlbWV0ZXJnaWZ0Ly4vbm9kZV9tb2R1bGVzL3dlYjMtc2hoL25vZGVfbW9kdWxlcy93ZWIzLXByb3ZpZGVycy13cy9saWIvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyZ2lmdC8uL25vZGVfbW9kdWxlcy93ZWIzL25vZGVfbW9kdWxlcy93ZWIzLWNvcmUtcmVxdWVzdG1hbmFnZXIvbGliL2dpdmVuUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvLi9ub2RlX21vZHVsZXMvd2ViMy9ub2RlX21vZHVsZXMvd2ViMy1wcm92aWRlcnMtd3MvbGliL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlcmdpZnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2Ygd2ViMy5qcy5cblxuIHdlYjMuanMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuIHdlYjMuanMgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cblxuIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuIGFsb25nIHdpdGggd2ViMy5qcy4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuLyoqXG4gKiBAZmlsZSBhY2NvdW50cy5qc1xuICogQGF1dGhvciBGYWJpYW4gVm9nZWxzdGVsbGVyIDxmYWJpYW5AZXRoZXJldW0ub3JnPlxuICogQGRhdGUgMjAxN1xuICovXG4ndXNlIHN0cmljdCc7XG52YXIgY29yZSA9IHJlcXVpcmUoJ3dlYjMtY29yZScpO1xudmFyIE1ldGhvZCA9IHJlcXVpcmUoJ3dlYjMtY29yZS1tZXRob2QnKTtcbnZhciBBY2NvdW50ID0gcmVxdWlyZSgnZXRoLWxpYi9saWIvYWNjb3VudCcpO1xudmFyIGNyeXAgPSAodHlwZW9mIGdsb2JhbCA9PT0gJ3VuZGVmaW5lZCcpID8gcmVxdWlyZSgnY3J5cHRvLWJyb3dzZXJpZnknKSA6IHJlcXVpcmUoJ2NyeXB0bycpO1xudmFyIHNjcnlwdCA9IHJlcXVpcmUoJ3NjcnlwdC1qcycpO1xudmFyIHV1aWQgPSByZXF1aXJlKCd1dWlkJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCd3ZWIzLXV0aWxzJyk7XG52YXIgaGVscGVycyA9IHJlcXVpcmUoJ3dlYjMtY29yZS1oZWxwZXJzJyk7XG52YXIgeyBUcmFuc2FjdGlvbkZhY3RvcnkgfSA9IHJlcXVpcmUoJ0BldGhlcmV1bWpzL3R4Jyk7XG52YXIgQ29tbW9uID0gcmVxdWlyZSgnQGV0aGVyZXVtanMvY29tbW9uJykuZGVmYXVsdDtcbnZhciBIYXJkRm9ya3MgPSByZXF1aXJlKCdAZXRoZXJldW1qcy9jb21tb24nKS5IYXJkZm9yaztcbnZhciBldGhlcmV1bWpzVXRpbCA9IHJlcXVpcmUoJ2V0aGVyZXVtanMtdXRpbCcpO1xudmFyIGlzTm90ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB8fCB2YWx1ZSA9PT0gbnVsbDtcbn07XG52YXIgaXNFeGlzdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykgJiYgdmFsdWUgIT09IG51bGw7XG59O1xudmFyIEFjY291bnRzID0gZnVuY3Rpb24gQWNjb3VudHMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAvLyBzZXRzIF9yZXF1ZXN0bWFuYWdlclxuICAgIGNvcmUucGFja2FnZUluaXQodGhpcywgYXJndW1lbnRzKTtcbiAgICAvLyByZW1vdmUgdW5lY2Vzc2FyeSBjb3JlIGZ1bmN0aW9uc1xuICAgIGRlbGV0ZSB0aGlzLkJhdGNoUmVxdWVzdDtcbiAgICBkZWxldGUgdGhpcy5leHRlbmQ7XG4gICAgdmFyIF9ldGhlcmV1bUNhbGwgPSBbXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ2dldE5ldHdvcmtJZCcsXG4gICAgICAgICAgICBjYWxsOiAnbmV0X3ZlcnNpb24nLFxuICAgICAgICAgICAgcGFyYW1zOiAwLFxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiBwYXJzZUludFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnZ2V0Q2hhaW5JZCcsXG4gICAgICAgICAgICBjYWxsOiAnZXRoX2NoYWluSWQnLFxuICAgICAgICAgICAgcGFyYW1zOiAwLFxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiB1dGlscy5oZXhUb051bWJlclxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnZ2V0R2FzUHJpY2UnLFxuICAgICAgICAgICAgY2FsbDogJ2V0aF9nYXNQcmljZScsXG4gICAgICAgICAgICBwYXJhbXM6IDBcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ2dldFRyYW5zYWN0aW9uQ291bnQnLFxuICAgICAgICAgICAgY2FsbDogJ2V0aF9nZXRUcmFuc2FjdGlvbkNvdW50JyxcbiAgICAgICAgICAgIHBhcmFtczogMixcbiAgICAgICAgICAgIGlucHV0Rm9ybWF0dGVyOiBbZnVuY3Rpb24gKGFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzQWRkcmVzcyhhZGRyZXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FkZHJlc3MgJyArIGFkZHJlc3MgKyAnIGlzIG5vdCBhIHZhbGlkIGFkZHJlc3MgdG8gZ2V0IHRoZSBcInRyYW5zYWN0aW9uQ291bnRcIi4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdsYXRlc3QnO1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdnZXRCbG9ja0J5TnVtYmVyJyxcbiAgICAgICAgICAgIGNhbGw6ICdldGhfZ2V0QmxvY2tCeU51bWJlcicsXG4gICAgICAgICAgICBwYXJhbXM6IDIsXG4gICAgICAgICAgICBpbnB1dEZvcm1hdHRlcjogW2Z1bmN0aW9uIChibG9ja051bWJlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2tOdW1iZXIgPyB1dGlscy50b0hleChibG9ja051bWJlcikgOiAnbGF0ZXN0JztcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICB9KSxcbiAgICBdO1xuICAgIC8vIGF0dGFjaCBtZXRob2RzIHRvIHRoaXMuX2V0aGVyZXVtQ2FsbFxuICAgIHRoaXMuX2V0aGVyZXVtQ2FsbCA9IHt9O1xuICAgIF9ldGhlcmV1bUNhbGwuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgICAgIG1ldGhvZC5hdHRhY2hUb09iamVjdChfdGhpcy5fZXRoZXJldW1DYWxsKTtcbiAgICAgICAgbWV0aG9kLnNldFJlcXVlc3RNYW5hZ2VyKF90aGlzLl9yZXF1ZXN0TWFuYWdlcik7XG4gICAgfSk7XG4gICAgdGhpcy53YWxsZXQgPSBuZXcgV2FsbGV0KHRoaXMpO1xufTtcbkFjY291bnRzLnByb3RvdHlwZS5fYWRkQWNjb3VudEZ1bmN0aW9ucyA9IGZ1bmN0aW9uIChhY2NvdW50KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAvLyBhZGQgc2lnbiBmdW5jdGlvbnNcbiAgICBhY2NvdW50LnNpZ25UcmFuc2FjdGlvbiA9IGZ1bmN0aW9uIHNpZ25UcmFuc2FjdGlvbih0eCwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNpZ25UcmFuc2FjdGlvbih0eCwgYWNjb3VudC5wcml2YXRlS2V5LCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICBhY2NvdW50LnNpZ24gPSBmdW5jdGlvbiBzaWduKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNpZ24oZGF0YSwgYWNjb3VudC5wcml2YXRlS2V5KTtcbiAgICB9O1xuICAgIGFjY291bnQuZW5jcnlwdCA9IGZ1bmN0aW9uIGVuY3J5cHQocGFzc3dvcmQsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmVuY3J5cHQoYWNjb3VudC5wcml2YXRlS2V5LCBwYXNzd29yZCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICByZXR1cm4gYWNjb3VudDtcbn07XG5BY2NvdW50cy5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGVudHJvcHkpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRkQWNjb3VudEZ1bmN0aW9ucyhBY2NvdW50LmNyZWF0ZShlbnRyb3B5IHx8IHV0aWxzLnJhbmRvbUhleCgzMikpKTtcbn07XG5BY2NvdW50cy5wcm90b3R5cGUucHJpdmF0ZUtleVRvQWNjb3VudCA9IGZ1bmN0aW9uIHByaXZhdGVLZXlUb0FjY291bnQocHJpdmF0ZUtleSwgaWdub3JlTGVuZ3RoKSB7XG4gICAgaWYgKCFwcml2YXRlS2V5LnN0YXJ0c1dpdGgoJzB4JykpIHtcbiAgICAgICAgcHJpdmF0ZUtleSA9ICcweCcgKyBwcml2YXRlS2V5O1xuICAgIH1cbiAgICAvLyA2NCBoZXggY2hhcmFjdGVycyArIGhleC1wcmVmaXhcbiAgICBpZiAoIWlnbm9yZUxlbmd0aCAmJiBwcml2YXRlS2V5Lmxlbmd0aCAhPT0gNjYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJpdmF0ZSBrZXkgbXVzdCBiZSAzMiBieXRlcyBsb25nXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYWRkQWNjb3VudEZ1bmN0aW9ucyhBY2NvdW50LmZyb21Qcml2YXRlKHByaXZhdGVLZXkpKTtcbn07XG5BY2NvdW50cy5wcm90b3R5cGUuc2lnblRyYW5zYWN0aW9uID0gZnVuY3Rpb24gc2lnblRyYW5zYWN0aW9uKHR4LCBwcml2YXRlS2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsIGVycm9yID0gZmFsc2UsIHRyYW5zYWN0aW9uT3B0aW9ucyA9IHt9LCBoYXNUeFNpZ25pbmdPcHRpb25zID0gISEodHggJiYgKCh0eC5jaGFpbiAmJiB0eC5oYXJkZm9yaykgfHwgdHguY29tbW9uKSk7XG4gICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7IH07XG4gICAgaWYgKCF0eCkge1xuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcignTm8gdHJhbnNhY3Rpb24gb2JqZWN0IGdpdmVuIScpO1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICAgIGlmIChpc0V4aXN0KHR4LmNvbW1vbikgJiYgaXNOb3QodHguY29tbW9uLmN1c3RvbUNoYWluKSkge1xuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcignSWYgdHguY29tbW9uIGlzIHByb3ZpZGVkIGl0IG11c3QgaGF2ZSB0eC5jb21tb24uY3VzdG9tQ2hhaW4nKTtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgICBpZiAoaXNFeGlzdCh0eC5jb21tb24pICYmIGlzTm90KHR4LmNvbW1vbi5jdXN0b21DaGFpbi5jaGFpbklkKSkge1xuICAgICAgICBlcnJvciA9IG5ldyBFcnJvcignSWYgdHguY29tbW9uIGlzIHByb3ZpZGVkIGl0IG11c3QgaGF2ZSB0eC5jb21tb24uY3VzdG9tQ2hhaW4gYW5kIHR4LmNvbW1vbi5jdXN0b21DaGFpbi5jaGFpbklkJyk7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gICAgaWYgKGlzRXhpc3QodHguY29tbW9uKSAmJiBpc0V4aXN0KHR4LmNvbW1vbi5jdXN0b21DaGFpbi5jaGFpbklkKSAmJiBpc0V4aXN0KHR4LmNoYWluSWQpICYmIHR4LmNoYWluSWQgIT09IHR4LmNvbW1vbi5jdXN0b21DaGFpbi5jaGFpbklkKSB7XG4gICAgICAgIGVycm9yID0gbmV3IEVycm9yKCdDaGFpbiBJZCBkb2VzbnQgbWF0Y2ggaW4gdHguY2hhaW5JZCB0eC5jb21tb24uY3VzdG9tQ2hhaW4uY2hhaW5JZCcpO1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNpZ25lZCh0eCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IF92YWxpZGF0ZVRyYW5zYWN0aW9uRm9yU2lnbmluZyh0eCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHRyYW5zYWN0aW9uID0gaGVscGVycy5mb3JtYXR0ZXJzLmlucHV0Q2FsbEZvcm1hdHRlcihPYmplY3QuYXNzaWduKHt9LCB0eCkpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24uZGF0YSA9IHRyYW5zYWN0aW9uLmRhdGEgfHwgJzB4JztcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLnZhbHVlID0gdHJhbnNhY3Rpb24udmFsdWUgfHwgJzB4JztcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmdhc0xpbWl0ID0gdHJhbnNhY3Rpb24uZ2FzTGltaXQgfHwgdHJhbnNhY3Rpb24uZ2FzO1xuICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uLnR5cGUgPT09ICcweDEnICYmIHRyYW5zYWN0aW9uLmFjY2Vzc0xpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5hY2Nlc3NMaXN0ID0gW107XG4gICAgICAgICAgICAvLyBCZWNhdXNlIHR4IGhhcyBubyBAZXRoZXJldW1qcy90eCBzaWduaW5nIG9wdGlvbnMgd2UgdXNlIGZldGNoZWQgdmFscy5cbiAgICAgICAgICAgIGlmICghaGFzVHhTaWduaW5nT3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uT3B0aW9ucy5jb21tb24gPSBDb21tb24uZm9yQ3VzdG9tQ2hhaW4oJ21haW5uZXQnLCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjdXN0b20tbmV0d29yaycsXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcmtJZDogdHJhbnNhY3Rpb24ubmV0d29ya0lkLFxuICAgICAgICAgICAgICAgICAgICBjaGFpbklkOiB0cmFuc2FjdGlvbi5jaGFpbklkXG4gICAgICAgICAgICAgICAgfSwgdHJhbnNhY3Rpb24uaGFyZGZvcmsgfHwgSGFyZEZvcmtzLkxvbmRvbik7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRyYW5zYWN0aW9uLm5ldHdvcmtJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbi5jb21tb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25PcHRpb25zLmNvbW1vbiA9IENvbW1vbi5mb3JDdXN0b21DaGFpbih0cmFuc2FjdGlvbi5jb21tb24uYmFzZUNoYWluIHx8ICdtYWlubmV0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdHJhbnNhY3Rpb24uY29tbW9uLmN1c3RvbUNoYWluLm5hbWUgfHwgJ2N1c3RvbS1uZXR3b3JrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtJZDogdHJhbnNhY3Rpb24uY29tbW9uLmN1c3RvbUNoYWluLm5ldHdvcmtJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6IHRyYW5zYWN0aW9uLmNvbW1vbi5jdXN0b21DaGFpbi5jaGFpbklkXG4gICAgICAgICAgICAgICAgICAgIH0sIHRyYW5zYWN0aW9uLmNvbW1vbi5oYXJkZm9yayB8fCBIYXJkRm9ya3MuTG9uZG9uKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRyYW5zYWN0aW9uLmNvbW1vbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmNoYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uT3B0aW9ucy5jaGFpbiA9IHRyYW5zYWN0aW9uLmNoYWluO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdHJhbnNhY3Rpb24uY2hhaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbi5oYXJkZm9yaykge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbk9wdGlvbnMuaGFyZGZvcmsgPSB0cmFuc2FjdGlvbi5oYXJkZm9yaztcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRyYW5zYWN0aW9uLmhhcmRmb3JrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcml2YXRlS2V5LnN0YXJ0c1dpdGgoJzB4JykpIHtcbiAgICAgICAgICAgICAgICBwcml2YXRlS2V5ID0gcHJpdmF0ZUtleS5zdWJzdHJpbmcoMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXRoVHggPSBUcmFuc2FjdGlvbkZhY3RvcnkuZnJvbVR4RGF0YSh0cmFuc2FjdGlvbiwgdHJhbnNhY3Rpb25PcHRpb25zKTtcbiAgICAgICAgICAgIHZhciBzaWduZWRUeCA9IGV0aFR4LnNpZ24oQnVmZmVyLmZyb20ocHJpdmF0ZUtleSwgJ2hleCcpKTtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uRXJyb3JzID0gc2lnbmVkVHgudmFsaWRhdGUodHJ1ZSk7XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVycm9yU3RyaW5nID0gJ1NpZ25lciBFcnJvcjogJztcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZhbGlkYXRpb25FcnJvciBvZiB2YWxpZGF0aW9uRXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yU3RyaW5nICs9IGAke2Vycm9yU3RyaW5nfSAke3ZhbGlkYXRpb25FcnJvcn0uYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yU3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBybHBFbmNvZGVkID0gc2lnbmVkVHguc2VyaWFsaXplKCkudG9TdHJpbmcoJ2hleCcpO1xuICAgICAgICAgICAgdmFyIHJhd1RyYW5zYWN0aW9uID0gJzB4JyArIHJscEVuY29kZWQ7XG4gICAgICAgICAgICB2YXIgdHJhbnNhY3Rpb25IYXNoID0gdXRpbHMua2VjY2FrMjU2KHJhd1RyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUhhc2g6ICcweCcgKyBCdWZmZXIuZnJvbShzaWduZWRUeC5nZXRNZXNzYWdlVG9TaWduKHRydWUpKS50b1N0cmluZygnaGV4JyksXG4gICAgICAgICAgICAgICAgdjogJzB4JyArIHNpZ25lZFR4LnYudG9TdHJpbmcoJ2hleCcpLFxuICAgICAgICAgICAgICAgIHI6ICcweCcgKyBzaWduZWRUeC5yLnRvU3RyaW5nKCdoZXgnKSxcbiAgICAgICAgICAgICAgICBzOiAnMHgnICsgc2lnbmVkVHgucy50b1N0cmluZygnaGV4JyksXG4gICAgICAgICAgICAgICAgcmF3VHJhbnNhY3Rpb246IHJhd1RyYW5zYWN0aW9uLFxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uSGFzaDogdHJhbnNhY3Rpb25IYXNoXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHR4LnR5cGUgPSBfaGFuZGxlVHhUeXBlKHR4KTtcbiAgICAvLyBSZXNvbHZlIGltbWVkaWF0ZWx5IGlmIG5vbmNlLCBjaGFpbklkLCBwcmljZSBhbmQgc2lnbmluZyBvcHRpb25zIGFyZSBwcm92aWRlZFxuICAgIGlmICh0eC5ub25jZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIHR4LmNoYWluSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAodHguZ2FzUHJpY2UgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgKHR4Lm1heEZlZVBlckdhcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgdHgubWF4UHJpb3JpdHlGZWVQZXJHYXMgIT09IHVuZGVmaW5lZCkpICYmXG4gICAgICAgIGhhc1R4U2lnbmluZ09wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzaWduZWQodHgpKTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCBnZXQgdGhlIG1pc3NpbmcgaW5mbyBmcm9tIHRoZSBFdGhlcmV1bSBOb2RlXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgKChpc05vdCh0eC5jb21tb24pIHx8IGlzTm90KHR4LmNvbW1vbi5jdXN0b21DaGFpbi5jaGFpbklkKSkgPyAvL3R4LmNvbW1vbi5jdXN0b21DaGFpbi5jaGFpbklkIGlzIG5vdCBvcHRpb25hbCBpbnNpZGUgdHguY29tbW9uIGlmIHR4LmNvbW1vbiBpcyBwcm92aWRlZFxuICAgICAgICAgICAgKGlzTm90KHR4LmNoYWluSWQpID8gX3RoaXMuX2V0aGVyZXVtQ2FsbC5nZXRDaGFpbklkKCkgOiB0eC5jaGFpbklkKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQpLFxuICAgICAgICBpc05vdCh0eC5ub25jZSkgPyBfdGhpcy5fZXRoZXJldW1DYWxsLmdldFRyYW5zYWN0aW9uQ291bnQoX3RoaXMucHJpdmF0ZUtleVRvQWNjb3VudChwcml2YXRlS2V5KS5hZGRyZXNzKSA6IHR4Lm5vbmNlLFxuICAgICAgICBpc05vdChoYXNUeFNpZ25pbmdPcHRpb25zKSA/IF90aGlzLl9ldGhlcmV1bUNhbGwuZ2V0TmV0d29ya0lkKCkgOiAxLFxuICAgICAgICBfaGFuZGxlVHhQcmljaW5nKF90aGlzLCB0eClcbiAgICBdKS50aGVuKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIGNvbnN0IFt0eGNoYWluSWQsIHR4bm9uY2UsIHR4bmV0d29ya0lkLCB0eGdhc0luZm9dID0gYXJncztcbiAgICAgICAgaWYgKChpc05vdCh0eGNoYWluSWQpICYmIGlzTm90KHR4LmNvbW1vbikgJiYgaXNOb3QodHguY29tbW9uLmN1c3RvbUNoYWluLmNoYWluSWQpKSB8fCBpc05vdCh0eG5vbmNlKSB8fCBpc05vdCh0eG5ldHdvcmtJZCkgfHwgaXNOb3QodHhnYXNJbmZvKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPbmUgb2YgdGhlIHZhbHVlcyBcImNoYWluSWRcIiwgXCJuZXR3b3JrSWRcIiwgXCJnYXNQcmljZVwiLCBvciBcIm5vbmNlXCIgY291bGRuXFwndCBiZSBmZXRjaGVkOiAnICsgSlNPTi5zdHJpbmdpZnkoYXJncykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaWduZWQoe1xuICAgICAgICAgICAgLi4udHgsXG4gICAgICAgICAgICAuLi4oKGlzTm90KHR4LmNvbW1vbikgfHwgaXNOb3QodHguY29tbW9uLmN1c3RvbUNoYWluLmNoYWluSWQpKSA/IHsgY2hhaW5JZDogdHhjaGFpbklkIH0gOiB7fSksXG4gICAgICAgICAgICBub25jZTogdHhub25jZSxcbiAgICAgICAgICAgIG5ldHdvcmtJZDogdHhuZXR3b3JrSWQsXG4gICAgICAgICAgICAuLi50eGdhc0luZm8gLy8gV2lsbCBlaXRoZXIgYmUgZ2FzUHJpY2Ugb3IgbWF4RmVlUGVyR2FzIGFuZCBtYXhQcmlvcml0eUZlZVBlckdhc1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBfdmFsaWRhdGVUcmFuc2FjdGlvbkZvclNpZ25pbmcodHgpIHtcbiAgICBpZiAodHguY29tbW9uICYmICh0eC5jaGFpbiAmJiB0eC5oYXJkZm9yaykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgdGhlIEBldGhlcmV1bWpzL2NvbW1vbiBvYmplY3Qgb3IgdGhlIGNoYWluIGFuZCBoYXJkZm9yayBwcm9wZXJ0eSBidXQgbm90IGFsbCB0b2dldGhlci4nKTtcbiAgICB9XG4gICAgaWYgKCh0eC5jaGFpbiAmJiAhdHguaGFyZGZvcmspIHx8ICh0eC5oYXJkZm9yayAmJiAhdHguY2hhaW4pKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1doZW4gc3BlY2lmeWluZyBjaGFpbiBhbmQgaGFyZGZvcmssIGJvdGggdmFsdWVzIG11c3QgYmUgZGVmaW5lZC4gJyArXG4gICAgICAgICAgICAnUmVjZWl2ZWQgXCJjaGFpblwiOiAnICsgdHguY2hhaW4gKyAnLCBcImhhcmRmb3JrXCI6ICcgKyB0eC5oYXJkZm9yayk7XG4gICAgfVxuICAgIGlmICgoIXR4LmdhcyAmJiAhdHguZ2FzTGltaXQpICYmXG4gICAgICAgICghdHgubWF4UHJpb3JpdHlGZWVQZXJHYXMgJiYgIXR4Lm1heEZlZVBlckdhcykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignXCJnYXNcIiBpcyBtaXNzaW5nJyk7XG4gICAgfVxuICAgIGlmICh0eC5nYXMgJiYgdHguZ2FzUHJpY2UpIHtcbiAgICAgICAgaWYgKHR4LmdhcyA8IDAgfHwgdHguZ2FzUHJpY2UgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdHYXMgb3IgZ2FzUHJpY2UgaXMgbG93ZXIgdGhhbiAwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICh0eC5tYXhQcmlvcml0eUZlZVBlckdhcyA8IDAgfHwgdHgubWF4RmVlUGVyR2FzIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignbWF4UHJpb3JpdHlGZWVQZXJHYXMgb3IgbWF4RmVlUGVyR2FzIGlzIGxvd2VyIHRoYW4gMCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eC5ub25jZSA8IDAgfHwgdHguY2hhaW5JZCA8IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignTm9uY2Ugb3IgY2hhaW5JZCBpcyBsb3dlciB0aGFuIDAnKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gX2hhbmRsZVR4VHlwZSh0eCkge1xuICAgIC8vIFRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2V0aGVycy1pby9ldGhlcnMuanMvYmxvYi8yYTdjZTBlNzJhMWUwYzk0NjllMTAzOTJiMDMyOWU3NWUzNDFjZjE4L3BhY2thZ2VzL2Fic3RyYWN0LXNpZ25lci9zcmMudHMvaW5kZXgudHMjTDIxNVxuICAgIGNvbnN0IGhhc0VpcDE1NTkgPSAodHgubWF4RmVlUGVyR2FzICE9PSB1bmRlZmluZWQgfHwgdHgubWF4UHJpb3JpdHlGZWVQZXJHYXMgIT09IHVuZGVmaW5lZCk7XG4gICAgbGV0IHR4VHlwZTtcbiAgICBpZiAodHgudHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHR4VHlwZSA9IHV0aWxzLnRvSGV4KHR4LnR5cGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eC50eXBlID09PSB1bmRlZmluZWQgJiYgaGFzRWlwMTU1OSkge1xuICAgICAgICB0eFR5cGUgPSAnMHgyJztcbiAgICB9XG4gICAgaWYgKHR4Lmdhc1ByaWNlICE9PSB1bmRlZmluZWQgJiYgKHR4VHlwZSA9PT0gJzB4MicgfHwgaGFzRWlwMTU1OSkpXG4gICAgICAgIHRocm93IEVycm9yKFwiZWlwLTE1NTkgdHJhbnNhY3Rpb25zIGRvbid0IHN1cHBvcnQgZ2FzUHJpY2VcIik7XG4gICAgaWYgKCh0eFR5cGUgPT09ICcweDEnIHx8IHR4VHlwZSA9PT0gJzB4MCcpICYmIGhhc0VpcDE1NTkpXG4gICAgICAgIHRocm93IEVycm9yKFwicHJlLWVpcC0xNTU5IHRyYW5zYWN0aW9uIGRvbid0IHN1cHBvcnQgbWF4RmVlUGVyR2FzL21heFByaW9yaXR5RmVlUGVyR2FzXCIpO1xuICAgIGlmIChoYXNFaXAxNTU5IHx8XG4gICAgICAgICgodHguY29tbW9uICYmIHR4LmNvbW1vbi5oYXJkZm9yayAmJiB0eC5jb21tb24uaGFyZGZvcmsudG9Mb3dlckNhc2UoKSA9PT0gSGFyZEZvcmtzLkxvbmRvbikgfHxcbiAgICAgICAgICAgICh0eC5oYXJkZm9yayAmJiB0eC5oYXJkZm9yay50b0xvd2VyQ2FzZSgpID09PSBIYXJkRm9ya3MuTG9uZG9uKSkpIHtcbiAgICAgICAgdHhUeXBlID0gJzB4Mic7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR4LmFjY2Vzc0xpc3QgfHxcbiAgICAgICAgKCh0eC5jb21tb24gJiYgdHguY29tbW9uLmhhcmRmb3JrICYmIHR4LmNvbW1vbi5oYXJkZm9yay50b0xvd2VyQ2FzZSgpID09PSBIYXJkRm9ya3MuQmVybGluKSB8fFxuICAgICAgICAgICAgKHR4LmhhcmRmb3JrICYmIHR4LmhhcmRmb3JrLnRvTG93ZXJDYXNlKCkgPT09IEhhcmRGb3Jrcy5CZXJsaW4pKSkge1xuICAgICAgICB0eFR5cGUgPSAnMHgxJztcbiAgICB9XG4gICAgcmV0dXJuIHR4VHlwZTtcbn1cbmZ1bmN0aW9uIF9oYW5kbGVUeFByaWNpbmcoX3RoaXMsIHR4KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICgodHgudHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR4LnR5cGUgPCAnMHgyJylcbiAgICAgICAgICAgICAgICAmJiB0eC5nYXNQcmljZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gTGVnYWN5IHRyYW5zYWN0aW9uLCByZXR1cm4gcHJvdmlkZWQgZ2FzUHJpY2VcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgZ2FzUHJpY2U6IHR4Lmdhc1ByaWNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZXRoZXJldW1DYWxsLmdldEJsb2NrQnlOdW1iZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2V0aGVyZXVtQ2FsbC5nZXRHYXNQcmljZSgpXG4gICAgICAgICAgICAgICAgXSkudGhlbihyZXNwb25zZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBbYmxvY2ssIGdhc1ByaWNlXSA9IHJlc3BvbnNlcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0eC50eXBlID09PSAnMHgyJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrICYmIGJsb2NrLmJhc2VGZWVQZXJHYXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBuZXR3b3JrIHN1cHBvcnRzIEVJUC0xNTU5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUYWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcnMtaW8vZXRoZXJzLmpzL2Jsb2IvYmE2ODU0YmRkNWE5MTJmZTg3M2Q1ZGE0OTRjYjVjNjJjMTkwYWRkZS9wYWNrYWdlcy9hYnN0cmFjdC1wcm92aWRlci9zcmMudHMvaW5kZXgudHMjTDIzMFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1heFByaW9yaXR5RmVlUGVyR2FzLCBtYXhGZWVQZXJHYXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHguZ2FzUHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2luZyBsZWdhY3kgZ2FzUHJpY2UgcHJvcGVydHkgb24gYW4gZWlwLTE1NTkgbmV0d29yayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB1c2UgZ2FzUHJpY2UgYXMgYm90aCBmZWUgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFByaW9yaXR5RmVlUGVyR2FzID0gdHguZ2FzUHJpY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4RmVlUGVyR2FzID0gdHguZ2FzUHJpY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHR4Lmdhc1ByaWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4UHJpb3JpdHlGZWVQZXJHYXMgPSB0eC5tYXhQcmlvcml0eUZlZVBlckdhcyB8fCAnMHg5NTAyRjkwMCc7IC8vIDIuNSBHd2VpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4RmVlUGVyR2FzID0gdHgubWF4RmVlUGVyR2FzIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLnRvSGV4KHV0aWxzLnRvQk4oYmxvY2suYmFzZUZlZVBlckdhcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tdWwodXRpbHMudG9CTigyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodXRpbHMudG9CTihtYXhQcmlvcml0eUZlZVBlckdhcykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBtYXhGZWVQZXJHYXMsIG1heFByaW9yaXR5RmVlUGVyR2FzIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR4Lm1heFByaW9yaXR5RmVlUGVyR2FzIHx8IHR4Lm1heEZlZVBlckdhcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIk5ldHdvcmsgZG9lc24ndCBzdXBwb3J0IGVpcC0xNTU5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGdhc1ByaWNlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5BY2NvdW50cy5wcm90b3R5cGUucmVjb3ZlclRyYW5zYWN0aW9uID0gZnVuY3Rpb24gcmVjb3ZlclRyYW5zYWN0aW9uKHJhd1R4LCB0eE9wdGlvbnMgPSB7fSkge1xuICAgIC8vIFJlbHkgb24gRXRoZXJldW1Kcy90eCB0byBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgdHJhbnNhY3Rpb25cbiAgICBjb25zdCBkYXRhID0gQnVmZmVyLmZyb20ocmF3VHguc2xpY2UoMiksIFwiaGV4XCIpO1xuICAgIGNvbnN0IHR4ID0gVHJhbnNhY3Rpb25GYWN0b3J5LmZyb21TZXJpYWxpemVkRGF0YShkYXRhKTtcbiAgICAvL3VwZGF0ZSBjaGVja3N1bVxuICAgIHJldHVybiB1dGlscy50b0NoZWNrc3VtQWRkcmVzcyh0eC5nZXRTZW5kZXJBZGRyZXNzKCkudG9TdHJpbmcoXCJoZXhcIikpO1xufTtcbi8qIGpzaGludCBpZ25vcmU6ZW5kICovXG5BY2NvdW50cy5wcm90b3R5cGUuaGFzaE1lc3NhZ2UgPSBmdW5jdGlvbiBoYXNoTWVzc2FnZShkYXRhKSB7XG4gICAgdmFyIG1lc3NhZ2VIZXggPSB1dGlscy5pc0hleFN0cmljdChkYXRhKSA/IGRhdGEgOiB1dGlscy51dGY4VG9IZXgoZGF0YSk7XG4gICAgdmFyIG1lc3NhZ2VCeXRlcyA9IHV0aWxzLmhleFRvQnl0ZXMobWVzc2FnZUhleCk7XG4gICAgdmFyIG1lc3NhZ2VCdWZmZXIgPSBCdWZmZXIuZnJvbShtZXNzYWdlQnl0ZXMpO1xuICAgIHZhciBwcmVhbWJsZSA9ICdcXHgxOUV0aGVyZXVtIFNpZ25lZCBNZXNzYWdlOlxcbicgKyBtZXNzYWdlQnl0ZXMubGVuZ3RoO1xuICAgIHZhciBwcmVhbWJsZUJ1ZmZlciA9IEJ1ZmZlci5mcm9tKHByZWFtYmxlKTtcbiAgICB2YXIgZXRoTWVzc2FnZSA9IEJ1ZmZlci5jb25jYXQoW3ByZWFtYmxlQnVmZmVyLCBtZXNzYWdlQnVmZmVyXSk7XG4gICAgcmV0dXJuIGV0aGVyZXVtanNVdGlsLmJ1ZmZlclRvSGV4KGV0aGVyZXVtanNVdGlsLmtlY2NhazI1NihldGhNZXNzYWdlKSk7XG59O1xuQWNjb3VudHMucHJvdG90eXBlLnNpZ24gPSBmdW5jdGlvbiBzaWduKGRhdGEsIHByaXZhdGVLZXkpIHtcbiAgICBpZiAoIXByaXZhdGVLZXkuc3RhcnRzV2l0aCgnMHgnKSkge1xuICAgICAgICBwcml2YXRlS2V5ID0gJzB4JyArIHByaXZhdGVLZXk7XG4gICAgfVxuICAgIC8vIDY0IGhleCBjaGFyYWN0ZXJzICsgaGV4LXByZWZpeFxuICAgIGlmIChwcml2YXRlS2V5Lmxlbmd0aCAhPT0gNjYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJpdmF0ZSBrZXkgbXVzdCBiZSAzMiBieXRlcyBsb25nXCIpO1xuICAgIH1cbiAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaE1lc3NhZ2UoZGF0YSk7XG4gICAgdmFyIHNpZ25hdHVyZSA9IEFjY291bnQuc2lnbihoYXNoLCBwcml2YXRlS2V5KTtcbiAgICB2YXIgdnJzID0gQWNjb3VudC5kZWNvZGVTaWduYXR1cmUoc2lnbmF0dXJlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBkYXRhLFxuICAgICAgICBtZXNzYWdlSGFzaDogaGFzaCxcbiAgICAgICAgdjogdnJzWzBdLFxuICAgICAgICByOiB2cnNbMV0sXG4gICAgICAgIHM6IHZyc1syXSxcbiAgICAgICAgc2lnbmF0dXJlOiBzaWduYXR1cmVcbiAgICB9O1xufTtcbkFjY291bnRzLnByb3RvdHlwZS5yZWNvdmVyID0gZnVuY3Rpb24gcmVjb3ZlcihtZXNzYWdlLCBzaWduYXR1cmUsIHByZUZpeGVkKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5hcHBseShhcmd1bWVudHMpO1xuICAgIGlmICghIW1lc3NhZ2UgJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY292ZXIobWVzc2FnZS5tZXNzYWdlSGFzaCwgQWNjb3VudC5lbmNvZGVTaWduYXR1cmUoW21lc3NhZ2UudiwgbWVzc2FnZS5yLCBtZXNzYWdlLnNdKSwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmICghcHJlRml4ZWQpIHtcbiAgICAgICAgbWVzc2FnZSA9IHRoaXMuaGFzaE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA+PSA0KSB7XG4gICAgICAgIHByZUZpeGVkID0gYXJncy5zbGljZSgtMSlbMF07XG4gICAgICAgIHByZUZpeGVkID0gdHlwZW9mIHByZUZpeGVkID09PSAnYm9vbGVhbicgPyAhIXByZUZpeGVkIDogZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY292ZXIobWVzc2FnZSwgQWNjb3VudC5lbmNvZGVTaWduYXR1cmUoYXJncy5zbGljZSgxLCA0KSksIHByZUZpeGVkKTsgLy8gdiwgciwgc1xuICAgIH1cbiAgICByZXR1cm4gQWNjb3VudC5yZWNvdmVyKG1lc3NhZ2UsIHNpZ25hdHVyZSk7XG59O1xuLy8gVGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXRoZXJldW1qcy9ldGhlcmV1bWpzLXdhbGxldFxuQWNjb3VudHMucHJvdG90eXBlLmRlY3J5cHQgPSBmdW5jdGlvbiAodjNLZXlzdG9yZSwgcGFzc3dvcmQsIG5vblN0cmljdCkge1xuICAgIC8qIGpzaGludCBtYXhjb21wbGV4aXR5OiAxMCAqL1xuICAgIGlmICghKHR5cGVvZiBwYXNzd29yZCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcGFzc3dvcmQgZ2l2ZW4uJyk7XG4gICAgfVxuICAgIHZhciBqc29uID0gKCEhdjNLZXlzdG9yZSAmJiB0eXBlb2YgdjNLZXlzdG9yZSA9PT0gJ29iamVjdCcpID8gdjNLZXlzdG9yZSA6IEpTT04ucGFyc2Uobm9uU3RyaWN0ID8gdjNLZXlzdG9yZS50b0xvd2VyQ2FzZSgpIDogdjNLZXlzdG9yZSk7XG4gICAgaWYgKGpzb24udmVyc2lvbiAhPT0gMykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIFYzIHdhbGxldCcpO1xuICAgIH1cbiAgICB2YXIgZGVyaXZlZEtleTtcbiAgICB2YXIga2RmcGFyYW1zO1xuICAgIGlmIChqc29uLmNyeXB0by5rZGYgPT09ICdzY3J5cHQnKSB7XG4gICAgICAgIGtkZnBhcmFtcyA9IGpzb24uY3J5cHRvLmtkZnBhcmFtcztcbiAgICAgICAgLy8gRklYTUU6IHN1cHBvcnQgcHJvZ3Jlc3MgcmVwb3J0aW5nIGNhbGxiYWNrXG4gICAgICAgIGRlcml2ZWRLZXkgPSBzY3J5cHQuc3luY1NjcnlwdChCdWZmZXIuZnJvbShwYXNzd29yZCksIEJ1ZmZlci5mcm9tKGtkZnBhcmFtcy5zYWx0LCAnaGV4JyksIGtkZnBhcmFtcy5uLCBrZGZwYXJhbXMuciwga2RmcGFyYW1zLnAsIGtkZnBhcmFtcy5ka2xlbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGpzb24uY3J5cHRvLmtkZiA9PT0gJ3Bia2RmMicpIHtcbiAgICAgICAga2RmcGFyYW1zID0ganNvbi5jcnlwdG8ua2RmcGFyYW1zO1xuICAgICAgICBpZiAoa2RmcGFyYW1zLnByZiAhPT0gJ2htYWMtc2hhMjU2Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBwYXJhbWV0ZXJzIHRvIFBCS0RGMicpO1xuICAgICAgICB9XG4gICAgICAgIGRlcml2ZWRLZXkgPSBjcnlwLnBia2RmMlN5bmMoQnVmZmVyLmZyb20ocGFzc3dvcmQpLCBCdWZmZXIuZnJvbShrZGZwYXJhbXMuc2FsdCwgJ2hleCcpLCBrZGZwYXJhbXMuYywga2RmcGFyYW1zLmRrbGVuLCAnc2hhMjU2Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGtleSBkZXJpdmF0aW9uIHNjaGVtZScpO1xuICAgIH1cbiAgICB2YXIgY2lwaGVydGV4dCA9IEJ1ZmZlci5mcm9tKGpzb24uY3J5cHRvLmNpcGhlcnRleHQsICdoZXgnKTtcbiAgICB2YXIgbWFjID0gdXRpbHMuc2hhMyhCdWZmZXIuZnJvbShbLi4uZGVyaXZlZEtleS5zbGljZSgxNiwgMzIpLCAuLi5jaXBoZXJ0ZXh0XSkpLnJlcGxhY2UoJzB4JywgJycpO1xuICAgIGlmIChtYWMgIT09IGpzb24uY3J5cHRvLm1hYykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0tleSBkZXJpdmF0aW9uIGZhaWxlZCAtIHBvc3NpYmx5IHdyb25nIHBhc3N3b3JkJyk7XG4gICAgfVxuICAgIHZhciBkZWNpcGhlciA9IGNyeXAuY3JlYXRlRGVjaXBoZXJpdihqc29uLmNyeXB0by5jaXBoZXIsIGRlcml2ZWRLZXkuc2xpY2UoMCwgMTYpLCBCdWZmZXIuZnJvbShqc29uLmNyeXB0by5jaXBoZXJwYXJhbXMuaXYsICdoZXgnKSk7XG4gICAgdmFyIHNlZWQgPSAnMHgnICsgQnVmZmVyLmZyb20oWy4uLmRlY2lwaGVyLnVwZGF0ZShjaXBoZXJ0ZXh0KSwgLi4uZGVjaXBoZXIuZmluYWwoKV0pLnRvU3RyaW5nKCdoZXgnKTtcbiAgICByZXR1cm4gdGhpcy5wcml2YXRlS2V5VG9BY2NvdW50KHNlZWQsIHRydWUpO1xufTtcbkFjY291bnRzLnByb3RvdHlwZS5lbmNyeXB0ID0gZnVuY3Rpb24gKHByaXZhdGVLZXksIHBhc3N3b3JkLCBvcHRpb25zKSB7XG4gICAgLyoganNoaW50IG1heGNvbXBsZXhpdHk6IDIwICovXG4gICAgdmFyIGFjY291bnQgPSB0aGlzLnByaXZhdGVLZXlUb0FjY291bnQocHJpdmF0ZUtleSwgdHJ1ZSk7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIHNhbHQgPSBvcHRpb25zLnNhbHQgfHwgY3J5cC5yYW5kb21CeXRlcygzMik7XG4gICAgdmFyIGl2ID0gb3B0aW9ucy5pdiB8fCBjcnlwLnJhbmRvbUJ5dGVzKDE2KTtcbiAgICB2YXIgZGVyaXZlZEtleTtcbiAgICB2YXIga2RmID0gb3B0aW9ucy5rZGYgfHwgJ3NjcnlwdCc7XG4gICAgdmFyIGtkZnBhcmFtcyA9IHtcbiAgICAgICAgZGtsZW46IG9wdGlvbnMuZGtsZW4gfHwgMzIsXG4gICAgICAgIHNhbHQ6IHNhbHQudG9TdHJpbmcoJ2hleCcpXG4gICAgfTtcbiAgICBpZiAoa2RmID09PSAncGJrZGYyJykge1xuICAgICAgICBrZGZwYXJhbXMuYyA9IG9wdGlvbnMuYyB8fCAyNjIxNDQ7XG4gICAgICAgIGtkZnBhcmFtcy5wcmYgPSAnaG1hYy1zaGEyNTYnO1xuICAgICAgICBkZXJpdmVkS2V5ID0gY3J5cC5wYmtkZjJTeW5jKEJ1ZmZlci5mcm9tKHBhc3N3b3JkKSwgQnVmZmVyLmZyb20oa2RmcGFyYW1zLnNhbHQsICdoZXgnKSwga2RmcGFyYW1zLmMsIGtkZnBhcmFtcy5ka2xlbiwgJ3NoYTI1NicpO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZGYgPT09ICdzY3J5cHQnKSB7XG4gICAgICAgIC8vIEZJWE1FOiBzdXBwb3J0IHByb2dyZXNzIHJlcG9ydGluZyBjYWxsYmFja1xuICAgICAgICBrZGZwYXJhbXMubiA9IG9wdGlvbnMubiB8fCA4MTkyOyAvLyAyMDQ4IDQwOTYgODE5MiAxNjM4NFxuICAgICAgICBrZGZwYXJhbXMuciA9IG9wdGlvbnMuciB8fCA4O1xuICAgICAgICBrZGZwYXJhbXMucCA9IG9wdGlvbnMucCB8fCAxO1xuICAgICAgICBkZXJpdmVkS2V5ID0gc2NyeXB0LnN5bmNTY3J5cHQoQnVmZmVyLmZyb20ocGFzc3dvcmQpLCBCdWZmZXIuZnJvbShrZGZwYXJhbXMuc2FsdCwgJ2hleCcpLCBrZGZwYXJhbXMubiwga2RmcGFyYW1zLnIsIGtkZnBhcmFtcy5wLCBrZGZwYXJhbXMuZGtsZW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBrZGYnKTtcbiAgICB9XG4gICAgdmFyIGNpcGhlciA9IGNyeXAuY3JlYXRlQ2lwaGVyaXYob3B0aW9ucy5jaXBoZXIgfHwgJ2Flcy0xMjgtY3RyJywgZGVyaXZlZEtleS5zbGljZSgwLCAxNiksIGl2KTtcbiAgICBpZiAoIWNpcGhlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGNpcGhlcicpO1xuICAgIH1cbiAgICB2YXIgY2lwaGVydGV4dCA9IEJ1ZmZlci5mcm9tKFtcbiAgICAgICAgLi4uY2lwaGVyLnVwZGF0ZShCdWZmZXIuZnJvbShhY2NvdW50LnByaXZhdGVLZXkucmVwbGFjZSgnMHgnLCAnJyksICdoZXgnKSksXG4gICAgICAgIC4uLmNpcGhlci5maW5hbCgpXG4gICAgXSk7XG4gICAgdmFyIG1hYyA9IHV0aWxzLnNoYTMoQnVmZmVyLmZyb20oWy4uLmRlcml2ZWRLZXkuc2xpY2UoMTYsIDMyKSwgLi4uY2lwaGVydGV4dF0pKS5yZXBsYWNlKCcweCcsICcnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB2ZXJzaW9uOiAzLFxuICAgICAgICBpZDogdXVpZC52NCh7IHJhbmRvbTogb3B0aW9ucy51dWlkIHx8IGNyeXAucmFuZG9tQnl0ZXMoMTYpIH0pLFxuICAgICAgICBhZGRyZXNzOiBhY2NvdW50LmFkZHJlc3MudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCcweCcsICcnKSxcbiAgICAgICAgY3J5cHRvOiB7XG4gICAgICAgICAgICBjaXBoZXJ0ZXh0OiBjaXBoZXJ0ZXh0LnRvU3RyaW5nKCdoZXgnKSxcbiAgICAgICAgICAgIGNpcGhlcnBhcmFtczoge1xuICAgICAgICAgICAgICAgIGl2OiBpdi50b1N0cmluZygnaGV4JylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaXBoZXI6IG9wdGlvbnMuY2lwaGVyIHx8ICdhZXMtMTI4LWN0cicsXG4gICAgICAgICAgICBrZGY6IGtkZixcbiAgICAgICAgICAgIGtkZnBhcmFtczoga2RmcGFyYW1zLFxuICAgICAgICAgICAgbWFjOiBtYWMudG9TdHJpbmcoJ2hleCcpXG4gICAgICAgIH1cbiAgICB9O1xufTtcbi8vIE5vdGU6IHRoaXMgaXMgdHJ5aW5nIHRvIGZvbGxvdyBjbG9zZWx5IHRoZSBzcGVjcyBvblxuLy8gaHR0cDovL3dlYjNqcy5yZWFkdGhlZG9jcy5pby9lbi8xLjAvd2ViMy1ldGgtYWNjb3VudHMuaHRtbFxuZnVuY3Rpb24gV2FsbGV0KGFjY291bnRzKSB7XG4gICAgdGhpcy5fYWNjb3VudHMgPSBhY2NvdW50cztcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5kZWZhdWx0S2V5TmFtZSA9ICd3ZWIzanNfd2FsbGV0Jztcbn1cbldhbGxldC5wcm90b3R5cGUuX2ZpbmRTYWZlSW5kZXggPSBmdW5jdGlvbiAocG9pbnRlcikge1xuICAgIHBvaW50ZXIgPSBwb2ludGVyIHx8IDA7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocG9pbnRlcikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbmRTYWZlSW5kZXgocG9pbnRlciArIDEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXI7XG4gICAgfVxufTtcbldhbGxldC5wcm90b3R5cGUuX2N1cnJlbnRJbmRleGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgdmFyIGluZGV4ZXMgPSBrZXlzXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoa2V5KTtcbiAgICB9KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiAobiA8IDllMjApO1xuICAgIH0pO1xuICAgIHJldHVybiBpbmRleGVzO1xufTtcbldhbGxldC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKG51bWJlck9mQWNjb3VudHMsIGVudHJvcHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQWNjb3VudHM7ICsraSkge1xuICAgICAgICB0aGlzLmFkZCh0aGlzLl9hY2NvdW50cy5jcmVhdGUoZW50cm9weSkucHJpdmF0ZUtleSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufTtcbldhbGxldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGFjY291bnQpIHtcbiAgICBpZiAodHlwZW9mIGFjY291bnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGFjY291bnQgPSB0aGlzLl9hY2NvdW50cy5wcml2YXRlS2V5VG9BY2NvdW50KGFjY291bnQpO1xuICAgIH1cbiAgICBpZiAoIXRoaXNbYWNjb3VudC5hZGRyZXNzXSkge1xuICAgICAgICBhY2NvdW50ID0gdGhpcy5fYWNjb3VudHMucHJpdmF0ZUtleVRvQWNjb3VudChhY2NvdW50LnByaXZhdGVLZXkpO1xuICAgICAgICBhY2NvdW50LmluZGV4ID0gdGhpcy5fZmluZFNhZmVJbmRleCgpO1xuICAgICAgICB0aGlzW2FjY291bnQuaW5kZXhdID0gYWNjb3VudDtcbiAgICAgICAgdGhpc1thY2NvdW50LmFkZHJlc3NdID0gYWNjb3VudDtcbiAgICAgICAgdGhpc1thY2NvdW50LmFkZHJlc3MudG9Mb3dlckNhc2UoKV0gPSBhY2NvdW50O1xuICAgICAgICB0aGlzLmxlbmd0aCsrO1xuICAgICAgICByZXR1cm4gYWNjb3VudDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzW2FjY291bnQuYWRkcmVzc107XG4gICAgfVxufTtcbldhbGxldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGFkZHJlc3NPckluZGV4KSB7XG4gICAgdmFyIGFjY291bnQgPSB0aGlzW2FkZHJlc3NPckluZGV4XTtcbiAgICBpZiAoYWNjb3VudCAmJiBhY2NvdW50LmFkZHJlc3MpIHtcbiAgICAgICAgLy8gYWRkcmVzc1xuICAgICAgICB0aGlzW2FjY291bnQuYWRkcmVzc10ucHJpdmF0ZUtleSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzW2FjY291bnQuYWRkcmVzc107XG4gICAgICAgIC8vIGFkZHJlc3MgbG93ZXJjYXNlXG4gICAgICAgIHRoaXNbYWNjb3VudC5hZGRyZXNzLnRvTG93ZXJDYXNlKCldLnByaXZhdGVLZXkgPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpc1thY2NvdW50LmFkZHJlc3MudG9Mb3dlckNhc2UoKV07XG4gICAgICAgIC8vIGluZGV4XG4gICAgICAgIHRoaXNbYWNjb3VudC5pbmRleF0ucHJpdmF0ZUtleSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzW2FjY291bnQuaW5kZXhdO1xuICAgICAgICB0aGlzLmxlbmd0aC0tO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuV2FsbGV0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBpbmRleGVzID0gdGhpcy5fY3VycmVudEluZGV4ZXMoKTtcbiAgICBpbmRleGVzLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIF90aGlzLnJlbW92ZShpbmRleCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuV2FsbGV0LnByb3RvdHlwZS5lbmNyeXB0ID0gZnVuY3Rpb24gKHBhc3N3b3JkLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgaW5kZXhlcyA9IHRoaXMuX2N1cnJlbnRJbmRleGVzKCk7XG4gICAgdmFyIGFjY291bnRzID0gaW5kZXhlcy5tYXAoZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfdGhpc1tpbmRleF0uZW5jcnlwdChwYXNzd29yZCwgb3B0aW9ucyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjY291bnRzO1xufTtcbldhbGxldC5wcm90b3R5cGUuZGVjcnlwdCA9IGZ1bmN0aW9uIChlbmNyeXB0ZWRXYWxsZXQsIHBhc3N3b3JkKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBlbmNyeXB0ZWRXYWxsZXQuZm9yRWFjaChmdW5jdGlvbiAoa2V5c3RvcmUpIHtcbiAgICAgICAgdmFyIGFjY291bnQgPSBfdGhpcy5fYWNjb3VudHMuZGVjcnlwdChrZXlzdG9yZSwgcGFzc3dvcmQpO1xuICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgX3RoaXMuYWRkKGFjY291bnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZG5cXCd0IGRlY3J5cHQgYWNjb3VudHMuIFBhc3N3b3JkIHdyb25nPycpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuV2FsbGV0LnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKHBhc3N3b3JkLCBrZXlOYW1lKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5TmFtZSB8fCB0aGlzLmRlZmF1bHRLZXlOYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmVuY3J5cHQocGFzc3dvcmQpKSk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuV2FsbGV0LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKHBhc3N3b3JkLCBrZXlOYW1lKSB7XG4gICAgdmFyIGtleXN0b3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5TmFtZSB8fCB0aGlzLmRlZmF1bHRLZXlOYW1lKTtcbiAgICBpZiAoa2V5c3RvcmUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGtleXN0b3JlID0gSlNPTi5wYXJzZShrZXlzdG9yZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kZWNyeXB0KGtleXN0b3JlIHx8IFtdLCBwYXNzd29yZCk7XG59O1xuaWYgKCFzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgIGRlbGV0ZSBXYWxsZXQucHJvdG90eXBlLnNhdmU7XG4gICAgZGVsZXRlIFdhbGxldC5wcm90b3R5cGUubG9hZDtcbn1cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYSBzdG9yYWdlIHR5cGUgaXMgYXZhaWxhYmxlIG9yIG5vdFxuICogRm9yIG1vcmUgaW5mbyBvbiBob3cgdGhpcyB3b3JrcywgcGxlYXNlIHJlZmVyIHRvIE1ETiBkb2N1bWVudGF0aW9uXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2ViX1N0b3JhZ2VfQVBJL1VzaW5nX3RoZV9XZWJfU3RvcmFnZV9BUEkjRmVhdHVyZS1kZXRlY3RpbmdfbG9jYWxTdG9yYWdlXG4gKlxuICogQG1ldGhvZCBzdG9yYWdlQXZhaWxhYmxlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSB0aGUgdHlwZSBvZiBzdG9yYWdlICgnbG9jYWxTdG9yYWdlJywgJ3Nlc3Npb25TdG9yYWdlJylcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgc3RvcmFnZSBpcyBhdmFpbGFibGUgb3Igbm90XG4gKi9cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIHZhciBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSBzZWxmW3R5cGVdO1xuICAgICAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZSAmJiAoXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBBY2NvdW50cztcbiIsIi8qXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2Ygd2ViMy5qcy5cblxuIHdlYjMuanMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuIHdlYjMuanMgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cblxuIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuIGFsb25nIHdpdGggd2ViMy5qcy4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuLyoqXG4gKiBAZmlsZSBnaXZlblByb3ZpZGVyLmpzXG4gKiBAYXV0aG9yIEZhYmlhbiBWb2dlbHN0ZWxsZXIgPGZhYmlhbkBldGhlcmV1bS5vcmc+XG4gKiBAZGF0ZSAyMDE3XG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIGdpdmVuUHJvdmlkZXIgPSBudWxsO1xuLy8gQUREIEdJVkVOIFBST1ZJREVSXG4vKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG52YXIgZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnID8gZ2xvYmFsVGhpcyA6IHVuZGVmaW5lZDtcbmlmICghZ2xvYmFsKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgZ2xvYmFsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZ2xvYmFsID0gc2VsZjtcbiAgICB9XG59XG4vLyBFSVAtMTE5Mzogd2luZG93LmV0aGVyZXVtXG5pZiAodHlwZW9mIGdsb2JhbC5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnaXZlblByb3ZpZGVyID0gZ2xvYmFsLmV0aGVyZXVtO1xuICAgIC8vIExlZ2FjeSB3ZWIzLmN1cnJlbnRQcm92aWRlclxufVxuZWxzZSBpZiAodHlwZW9mIGdsb2JhbC53ZWIzICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIpIHtcbiAgICBpZiAoZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyLnNlbmRBc3luYykge1xuICAgICAgICBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIuc2VuZCA9IGdsb2JhbC53ZWIzLmN1cnJlbnRQcm92aWRlci5zZW5kQXN5bmM7XG4gICAgICAgIGRlbGV0ZSBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIuc2VuZEFzeW5jO1xuICAgIH1cbiAgICAvLyBpZiBjb25uZWN0aW9uIGlzICdpcGNQcm92aWRlcldyYXBwZXInLCBhZGQgc3Vic2NyaXB0aW9uIHN1cHBvcnRcbiAgICBpZiAoIWdsb2JhbC53ZWIzLmN1cnJlbnRQcm92aWRlci5vbiAmJlxuICAgICAgICBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIuY29ubmVjdGlvbiAmJlxuICAgICAgICBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIuY29ubmVjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lID09PSAnaXBjUHJvdmlkZXJXcmFwcGVyJykge1xuICAgICAgICBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIub24gPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgc2Vjb25kIHBhcmFtZXRlciBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdkYXRhJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9uKCdkYXRhJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoJ0NvdWxkblxcJ3QgcGFyc2UgcmVzcG9uc2UgZGF0YScgKyBkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3RpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmlkICYmIHJlc3VsdC5tZXRob2QuaW5kZXhPZignX3N1YnNjcmlwdGlvbicpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub24odHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2l2ZW5Qcm92aWRlciA9IGdsb2JhbC53ZWIzLmN1cnJlbnRQcm92aWRlcjtcbn1cbi8qIGpzaGludCBpZ25vcmU6ZW5kICovXG5tb2R1bGUuZXhwb3J0cyA9IGdpdmVuUHJvdmlkZXI7XG4iLCJ2YXIgaXNOb2RlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyA/IHByb2Nlc3MgOiAwKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nO1xudmFyIGlzUk4gPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJztcbnZhciBfYnRvYSA9IG51bGw7XG52YXIgaGVscGVycyA9IG51bGw7XG5pZiAoaXNOb2RlIHx8IGlzUk4pIHtcbiAgICBfYnRvYSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHN0cikudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgIH07XG4gICAgdmFyIHVybCA9IHJlcXVpcmUoJ3VybCcpO1xuICAgIGlmICh1cmwuVVJMKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgbmV3IE5vZGUgNisgQVBJIGZvciBwYXJzaW5nIFVSTHMgdGhhdCBzdXBwb3J0cyB1c2VybmFtZS9wYXNzd29yZFxuICAgICAgICB2YXIgbmV3VVJMID0gdXJsLlVSTDtcbiAgICAgICAgaGVscGVycyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgbmV3VVJMKHVybCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBXZWIzIHN1cHBvcnRzIE5vZGUuanMgNSwgc28gZmFsbCBiYWNrIHRvIHRoZSBsZWdhY3kgVVJMIEFQSSBpZiBuZWNlc3NhcnlcbiAgICAgICAgaGVscGVycyA9IHJlcXVpcmUoJ3VybCcpLnBhcnNlO1xuICAgIH1cbn1cbmVsc2Uge1xuICAgIF9idG9hID0gYnRvYS5iaW5kKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JyA/IGdsb2JhbFRoaXMgOiBzZWxmKTtcbiAgICBoZWxwZXJzID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IFVSTCh1cmwpO1xuICAgIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBwYXJzZVVSTDogaGVscGVycyxcbiAgICBidG9hOiBfYnRvYVxufTtcbiIsIi8qXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2Ygd2ViMy5qcy5cblxuIHdlYjMuanMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuIHdlYjMuanMgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cblxuIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuIGFsb25nIHdpdGggd2ViMy5qcy4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuLyoqXG4gKiBAZmlsZSBnaXZlblByb3ZpZGVyLmpzXG4gKiBAYXV0aG9yIEZhYmlhbiBWb2dlbHN0ZWxsZXIgPGZhYmlhbkBldGhlcmV1bS5vcmc+XG4gKiBAZGF0ZSAyMDE3XG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIGdpdmVuUHJvdmlkZXIgPSBudWxsO1xuLy8gQUREIEdJVkVOIFBST1ZJREVSXG4vKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG52YXIgZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnID8gZ2xvYmFsVGhpcyA6IHVuZGVmaW5lZDtcbmlmICghZ2xvYmFsKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgZ2xvYmFsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZ2xvYmFsID0gc2VsZjtcbiAgICB9XG59XG4vLyBFSVAtMTE5Mzogd2luZG93LmV0aGVyZXVtXG5pZiAodHlwZW9mIGdsb2JhbC5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnaXZlblByb3ZpZGVyID0gZ2xvYmFsLmV0aGVyZXVtO1xuICAgIC8vIExlZ2FjeSB3ZWIzLmN1cnJlbnRQcm92aWRlclxufVxuZWxzZSBpZiAodHlwZW9mIGdsb2JhbC53ZWIzICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIpIHtcbiAgICBpZiAoZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyLnNlbmRBc3luYykge1xuICAgICAgICBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIuc2VuZCA9IGdsb2JhbC53ZWIzLmN1cnJlbnRQcm92aWRlci5zZW5kQXN5bmM7XG4gICAgICAgIGRlbGV0ZSBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIuc2VuZEFzeW5jO1xuICAgIH1cbiAgICAvLyBpZiBjb25uZWN0aW9uIGlzICdpcGNQcm92aWRlcldyYXBwZXInLCBhZGQgc3Vic2NyaXB0aW9uIHN1cHBvcnRcbiAgICBpZiAoIWdsb2JhbC53ZWIzLmN1cnJlbnRQcm92aWRlci5vbiAmJlxuICAgICAgICBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIuY29ubmVjdGlvbiAmJlxuICAgICAgICBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIuY29ubmVjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lID09PSAnaXBjUHJvdmlkZXJXcmFwcGVyJykge1xuICAgICAgICBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIub24gPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgc2Vjb25kIHBhcmFtZXRlciBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdkYXRhJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9uKCdkYXRhJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoJ0NvdWxkblxcJ3QgcGFyc2UgcmVzcG9uc2UgZGF0YScgKyBkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3RpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmlkICYmIHJlc3VsdC5tZXRob2QuaW5kZXhPZignX3N1YnNjcmlwdGlvbicpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub24odHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2l2ZW5Qcm92aWRlciA9IGdsb2JhbC53ZWIzLmN1cnJlbnRQcm92aWRlcjtcbn1cbi8qIGpzaGludCBpZ25vcmU6ZW5kICovXG5tb2R1bGUuZXhwb3J0cyA9IGdpdmVuUHJvdmlkZXI7XG4iLCIvKlxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHdlYjMuanMuXG5cbiB3ZWIzLmpzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiB3ZWIzLmpzIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG5cbiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiBhbG9uZyB3aXRoIHdlYjMuanMuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbi8qKlxuICogQGZpbGUgaW5kZXguanNcbiAqIEBhdXRob3IgTWFyZWsgS290ZXdpY3ogPG1hcmVrQHBhcml0eS5pbz5cbiAqIEBhdXRob3IgRmFiaWFuIFZvZ2Vsc3RlbGxlciA8ZmFiaWFuQGZyb3plbWFuLmRlPlxuICogQGRhdGUgMjAxOFxuICovXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnd2ViMy11dGlscycpO1xudmFyIEV0aGVyc0FiaUNvZGVyID0gcmVxdWlyZSgnQGV0aGVyc3Byb2plY3QvYWJpJykuQWJpQ29kZXI7XG52YXIgUGFyYW1UeXBlID0gcmVxdWlyZSgnQGV0aGVyc3Byb2plY3QvYWJpJykuUGFyYW1UeXBlO1xudmFyIGV0aGVyc0FiaUNvZGVyID0gbmV3IEV0aGVyc0FiaUNvZGVyKGZ1bmN0aW9uICh0eXBlLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlLm1hdGNoKC9edT9pbnQvKSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgKCEoISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnQk4nKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufSk7XG4vLyByZXN1bHQgbWV0aG9kXG5mdW5jdGlvbiBSZXN1bHQoKSB7XG59XG4vKipcbiAqIEFCSUNvZGVyIHByb3RvdHlwZSBzaG91bGQgYmUgdXNlZCB0byBlbmNvZGUvZGVjb2RlIHNvbGlkaXR5IHBhcmFtcyBvZiBhbnkgdHlwZVxuICovXG52YXIgQUJJQ29kZXIgPSBmdW5jdGlvbiAoKSB7XG59O1xuLyoqXG4gKiBFbmNvZGVzIHRoZSBmdW5jdGlvbiBuYW1lIHRvIGl0cyBBQkkgcmVwcmVzZW50YXRpb24sIHdoaWNoIGFyZSB0aGUgZmlyc3QgNCBieXRlcyBvZiB0aGUgc2hhMyBvZiB0aGUgZnVuY3Rpb24gbmFtZSBpbmNsdWRpbmcgIHR5cGVzLlxuICpcbiAqIEBtZXRob2QgZW5jb2RlRnVuY3Rpb25TaWduYXR1cmVcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZnVuY3Rpb25OYW1lXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGVuY29kZWQgZnVuY3Rpb24gbmFtZVxuICovXG5BQklDb2Rlci5wcm90b3R5cGUuZW5jb2RlRnVuY3Rpb25TaWduYXR1cmUgPSBmdW5jdGlvbiAoZnVuY3Rpb25OYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBmdW5jdGlvbk5hbWUgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGZ1bmN0aW9uTmFtZSA9PT0gJ29iamVjdCcgJiYgZnVuY3Rpb25OYW1lKSB7XG4gICAgICAgIGZ1bmN0aW9uTmFtZSA9IHV0aWxzLl9qc29uSW50ZXJmYWNlTWV0aG9kVG9TdHJpbmcoZnVuY3Rpb25OYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHV0aWxzLnNoYTMoZnVuY3Rpb25OYW1lKS5zbGljZSgwLCAxMCk7XG59O1xuLyoqXG4gKiBFbmNvZGVzIHRoZSBmdW5jdGlvbiBuYW1lIHRvIGl0cyBBQkkgcmVwcmVzZW50YXRpb24sIHdoaWNoIGFyZSB0aGUgZmlyc3QgNCBieXRlcyBvZiB0aGUgc2hhMyBvZiB0aGUgZnVuY3Rpb24gbmFtZSBpbmNsdWRpbmcgIHR5cGVzLlxuICpcbiAqIEBtZXRob2QgZW5jb2RlRXZlbnRTaWduYXR1cmVcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZnVuY3Rpb25OYW1lXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGVuY29kZWQgZnVuY3Rpb24gbmFtZVxuICovXG5BQklDb2Rlci5wcm90b3R5cGUuZW5jb2RlRXZlbnRTaWduYXR1cmUgPSBmdW5jdGlvbiAoZnVuY3Rpb25OYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBmdW5jdGlvbk5hbWUgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGZ1bmN0aW9uTmFtZSA9PT0gJ29iamVjdCcgJiYgZnVuY3Rpb25OYW1lKSB7XG4gICAgICAgIGZ1bmN0aW9uTmFtZSA9IHV0aWxzLl9qc29uSW50ZXJmYWNlTWV0aG9kVG9TdHJpbmcoZnVuY3Rpb25OYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHV0aWxzLnNoYTMoZnVuY3Rpb25OYW1lKTtcbn07XG4vKipcbiAqIFNob3VsZCBiZSB1c2VkIHRvIGVuY29kZSBwbGFpbiBwYXJhbVxuICpcbiAqIEBtZXRob2QgZW5jb2RlUGFyYW1ldGVyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB0eXBlXG4gKiBAcGFyYW0ge2FueX0gcGFyYW1cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGVuY29kZWQgcGxhaW4gcGFyYW1cbiAqL1xuQUJJQ29kZXIucHJvdG90eXBlLmVuY29kZVBhcmFtZXRlciA9IGZ1bmN0aW9uICh0eXBlLCBwYXJhbSkge1xuICAgIHJldHVybiB0aGlzLmVuY29kZVBhcmFtZXRlcnMoW3R5cGVdLCBbcGFyYW1dKTtcbn07XG4vKipcbiAqIFNob3VsZCBiZSB1c2VkIHRvIGVuY29kZSBsaXN0IG9mIHBhcmFtc1xuICpcbiAqIEBtZXRob2QgZW5jb2RlUGFyYW1ldGVyc1xuICpcbiAqIEBwYXJhbSB7QXJyYXk8U3RyaW5nfE9iamVjdD59IHR5cGVzXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IHBhcmFtc1xuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gZW5jb2RlZCBsaXN0IG9mIHBhcmFtc1xuICovXG5BQklDb2Rlci5wcm90b3R5cGUuZW5jb2RlUGFyYW1ldGVycyA9IGZ1bmN0aW9uICh0eXBlcywgcGFyYW1zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHR5cGVzID0gc2VsZi5tYXBUeXBlcyh0eXBlcyk7XG4gICAgcGFyYW1zID0gcGFyYW1zLm1hcChmdW5jdGlvbiAocGFyYW0sIGluZGV4KSB7XG4gICAgICAgIGxldCB0eXBlID0gdHlwZXNbaW5kZXhdO1xuICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUudHlwZSkge1xuICAgICAgICAgICAgLy8gV2UgbWF5IGdldCBhIG5hbWVkIHR5cGUgb2Ygc2hhcGUge25hbWUsIHR5cGV9XG4gICAgICAgICAgICB0eXBlID0gdHlwZS50eXBlO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtID0gc2VsZi5mb3JtYXRQYXJhbSh0eXBlLCBwYXJhbSk7XG4gICAgICAgIC8vIEZvcm1hdCBwYXJhbXMgZm9yIHR1cGxlc1xuICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnICYmIHR5cGUuaW5jbHVkZXMoJ3R1cGxlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGVyID0gZXRoZXJzQWJpQ29kZXIuX2dldENvZGVyKFBhcmFtVHlwZS5mcm9tKHR5cGUpKTtcbiAgICAgICAgICAgIGNvbnN0IG1vZGlmeVBhcmFtcyA9IChjb2RlciwgcGFyYW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZXIubmFtZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW0ubWFwKHAgPT4gbW9kaWZ5UGFyYW1zKGV0aGVyc0FiaUNvZGVyLl9nZXRDb2RlcihQYXJhbVR5cGUuZnJvbShjb2Rlci50eXBlLnJlcGxhY2UoJ1tdJywgJycpKSksIHApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29kZXIuY29kZXJzLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMubmFtZSA9PT0gJ3R1cGxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5UGFyYW1zKGMsIHBhcmFtW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtW2ldID0gc2VsZi5mb3JtYXRQYXJhbShjLm5hbWUsIHBhcmFtW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1vZGlmeVBhcmFtcyhjb2RlciwgcGFyYW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJhbTtcbiAgICB9KTtcbiAgICByZXR1cm4gZXRoZXJzQWJpQ29kZXIuZW5jb2RlKHR5cGVzLCBwYXJhbXMpO1xufTtcbi8qKlxuICogTWFwIHR5cGVzIGlmIHNpbXBsaWZpZWQgZm9ybWF0IGlzIHVzZWRcbiAqXG4gKiBAbWV0aG9kIG1hcFR5cGVzXG4gKiBAcGFyYW0ge0FycmF5fSB0eXBlc1xuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbkFCSUNvZGVyLnByb3RvdHlwZS5tYXBUeXBlcyA9IGZ1bmN0aW9uICh0eXBlcykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgbWFwcGVkVHlwZXMgPSBbXTtcbiAgICB0eXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIC8vIFJlbWFwIGBmdW5jdGlvbmAgdHlwZSBwYXJhbXMgdG8gYnl0ZXMyNCBzaW5jZSBFdGhlcnMgZG9lcyBub3RcbiAgICAgICAgLy8gcmVjb2duaXplIGZvcm1lciB0eXBlLiBTb2xpZGl0eSBkb2NzIHNheSBgRnVuY3Rpb25gIGlzIGEgYnl0ZXMyNFxuICAgICAgICAvLyBlbmNvZGluZyB0aGUgY29udHJhY3QgYWRkcmVzcyBmb2xsb3dlZCBieSB0aGUgZnVuY3Rpb24gc2VsZWN0b3IgaGFzaC5cbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlLnR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHR5cGUgPSBPYmplY3QuYXNzaWduKHt9LCB0eXBlLCB7IHR5cGU6IFwiYnl0ZXMyNFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmlzU2ltcGxpZmllZFN0cnVjdEZvcm1hdCh0eXBlKSkge1xuICAgICAgICAgICAgdmFyIHN0cnVjdE5hbWUgPSBPYmplY3Qua2V5cyh0eXBlKVswXTtcbiAgICAgICAgICAgIG1hcHBlZFR5cGVzLnB1c2goT2JqZWN0LmFzc2lnbihzZWxmLm1hcFN0cnVjdE5hbWVBbmRUeXBlKHN0cnVjdE5hbWUpLCB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50czogc2VsZi5tYXBTdHJ1Y3RUb0NvZGVyRm9ybWF0KHR5cGVbc3RydWN0TmFtZV0pXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWFwcGVkVHlwZXMucHVzaCh0eXBlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWFwcGVkVHlwZXM7XG59O1xuLyoqXG4gKiBDaGVjayBpZiB0eXBlIGlzIHNpbXBsaWZpZWQgc3RydWN0IGZvcm1hdFxuICpcbiAqIEBtZXRob2QgaXNTaW1wbGlmaWVkU3RydWN0Rm9ybWF0XG4gKiBAcGFyYW0ge3N0cmluZyB8IE9iamVjdH0gdHlwZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbkFCSUNvZGVyLnByb3RvdHlwZS5pc1NpbXBsaWZpZWRTdHJ1Y3RGb3JtYXQgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHR5cGUuY29tcG9uZW50cyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHR5cGUubmFtZSA9PT0gJ3VuZGVmaW5lZCc7XG59O1xuLyoqXG4gKiBNYXBzIHRoZSBjb3JyZWN0IHR1cGxlIHR5cGUgYW5kIG5hbWUgd2hlbiB0aGUgc2ltcGxpZmllZCBmb3JtYXQgaW4gZW5jb2RlL2RlY29kZVBhcmFtZXRlciBpcyB1c2VkXG4gKlxuICogQG1ldGhvZCBtYXBTdHJ1Y3ROYW1lQW5kVHlwZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cnVjdE5hbWVcbiAqIEByZXR1cm4ge3t0eXBlOiBzdHJpbmcsIG5hbWU6ICp9fVxuICovXG5BQklDb2Rlci5wcm90b3R5cGUubWFwU3RydWN0TmFtZUFuZFR5cGUgPSBmdW5jdGlvbiAoc3RydWN0TmFtZSkge1xuICAgIHZhciB0eXBlID0gJ3R1cGxlJztcbiAgICBpZiAoc3RydWN0TmFtZS5pbmRleE9mKCdbXScpID4gLTEpIHtcbiAgICAgICAgdHlwZSA9ICd0dXBsZVtdJztcbiAgICAgICAgc3RydWN0TmFtZSA9IHN0cnVjdE5hbWUuc2xpY2UoMCwgLTIpO1xuICAgIH1cbiAgICByZXR1cm4geyB0eXBlOiB0eXBlLCBuYW1lOiBzdHJ1Y3ROYW1lIH07XG59O1xuLyoqXG4gKiBNYXBzIHRoZSBzaW1wbGlmaWVkIGZvcm1hdCBpbiB0byB0aGUgZXhwZWN0ZWQgZm9ybWF0IG9mIHRoZSBBQklDb2RlclxuICpcbiAqIEBtZXRob2QgbWFwU3RydWN0VG9Db2RlckZvcm1hdFxuICogQHBhcmFtIHtPYmplY3R9IHN0cnVjdFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbkFCSUNvZGVyLnByb3RvdHlwZS5tYXBTdHJ1Y3RUb0NvZGVyRm9ybWF0ID0gZnVuY3Rpb24gKHN0cnVjdCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgY29tcG9uZW50cyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHN0cnVjdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RydWN0W2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2goT2JqZWN0LmFzc2lnbihzZWxmLm1hcFN0cnVjdE5hbWVBbmRUeXBlKGtleSksIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzOiBzZWxmLm1hcFN0cnVjdFRvQ29kZXJGb3JtYXQoc3RydWN0W2tleV0pXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50cy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgIHR5cGU6IHN0cnVjdFtrZXldXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xufTtcbi8qKlxuICogSGFuZGxlIHNvbWUgZm9ybWF0dGluZyBvZiBwYXJhbXMgZm9yIGJhY2t3YXJkcyBjb21wYXRhYmlsaXR5IHdpdGggRXRoZXJzIFY0XG4gKlxuICogQG1ldGhvZCBmb3JtYXRQYXJhbVxuICogQHBhcmFtIHtTdHJpbmd9IC0gdHlwZVxuICogQHBhcmFtIHthbnl9IC0gcGFyYW1cbiAqIEByZXR1cm4ge2FueX0gLSBUaGUgZm9ybWF0dGVkIHBhcmFtXG4gKi9cbkFCSUNvZGVyLnByb3RvdHlwZS5mb3JtYXRQYXJhbSA9IGZ1bmN0aW9uICh0eXBlLCBwYXJhbSkge1xuICAgIGNvbnN0IHBhcmFtVHlwZUJ5dGVzID0gbmV3IFJlZ0V4cCgvXmJ5dGVzKFswLTldKikkLyk7XG4gICAgY29uc3QgcGFyYW1UeXBlQnl0ZXNBcnJheSA9IG5ldyBSZWdFeHAoL15ieXRlcyhbMC05XSopXFxbXFxdJC8pO1xuICAgIGNvbnN0IHBhcmFtVHlwZU51bWJlciA9IG5ldyBSZWdFeHAoL14odT9pbnQpKFswLTldKikkLyk7XG4gICAgY29uc3QgcGFyYW1UeXBlTnVtYmVyQXJyYXkgPSBuZXcgUmVnRXhwKC9eKHU/aW50KShbMC05XSopXFxbXFxdJC8pO1xuICAgIC8vIEZvcm1hdCBCTiB0byBzdHJpbmdcbiAgICBpZiAodXRpbHMuaXNCTihwYXJhbSkgfHwgdXRpbHMuaXNCaWdOdW1iZXIocGFyYW0pKSB7XG4gICAgICAgIHJldHVybiBwYXJhbS50b1N0cmluZygxMCk7XG4gICAgfVxuICAgIGlmICh0eXBlLm1hdGNoKHBhcmFtVHlwZUJ5dGVzQXJyYXkpIHx8IHR5cGUubWF0Y2gocGFyYW1UeXBlTnVtYmVyQXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBwYXJhbS5tYXAocCA9PiB0aGlzLmZvcm1hdFBhcmFtKHR5cGUucmVwbGFjZSgnW10nLCAnJyksIHApKTtcbiAgICB9XG4gICAgLy8gRm9ybWF0IGNvcnJlY3Qgd2lkdGggZm9yIHU/aW50WzAtOV0qXG4gICAgbGV0IG1hdGNoID0gdHlwZS5tYXRjaChwYXJhbVR5cGVOdW1iZXIpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICBsZXQgc2l6ZSA9IHBhcnNlSW50KG1hdGNoWzJdIHx8IFwiMjU2XCIpO1xuICAgICAgICBpZiAoc2l6ZSAvIDggPCBwYXJhbS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIHBhZCB0byBjb3JyZWN0IGJpdCB3aWR0aFxuICAgICAgICAgICAgcGFyYW0gPSB1dGlscy5sZWZ0UGFkKHBhcmFtLCBzaXplKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBGb3JtYXQgY29ycmVjdCBsZW5ndGggZm9yIGJ5dGVzWzAtOV0rXG4gICAgbWF0Y2ggPSB0eXBlLm1hdGNoKHBhcmFtVHlwZUJ5dGVzKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihwYXJhbSkpIHtcbiAgICAgICAgICAgIHBhcmFtID0gdXRpbHMudG9IZXgocGFyYW0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZvcm1hdCB0byBjb3JyZWN0IGxlbmd0aFxuICAgICAgICBsZXQgc2l6ZSA9IHBhcnNlSW50KG1hdGNoWzFdKTtcbiAgICAgICAgaWYgKHNpemUpIHtcbiAgICAgICAgICAgIGxldCBtYXhTaXplID0gc2l6ZSAqIDI7XG4gICAgICAgICAgICBpZiAocGFyYW0uc3Vic3RyaW5nKDAsIDIpID09PSAnMHgnKSB7XG4gICAgICAgICAgICAgICAgbWF4U2l6ZSArPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtLmxlbmd0aCA8IG1heFNpemUpIHtcbiAgICAgICAgICAgICAgICAvLyBwYWQgdG8gY29ycmVjdCBsZW5ndGhcbiAgICAgICAgICAgICAgICBwYXJhbSA9IHV0aWxzLnJpZ2h0UGFkKHBhcmFtLCBzaXplICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZm9ybWF0IG9kZC1sZW5ndGggYnl0ZXMgdG8gZXZlbi1sZW5ndGhcbiAgICAgICAgaWYgKHBhcmFtLmxlbmd0aCAlIDIgPT09IDEpIHtcbiAgICAgICAgICAgIHBhcmFtID0gJzB4MCcgKyBwYXJhbS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtO1xufTtcbi8qKlxuICogRW5jb2RlcyBhIGZ1bmN0aW9uIGNhbGwgZnJvbSBpdHMganNvbiBpbnRlcmZhY2UgYW5kIHBhcmFtZXRlcnMuXG4gKlxuICogQG1ldGhvZCBlbmNvZGVGdW5jdGlvbkNhbGxcbiAqIEBwYXJhbSB7QXJyYXl9IGpzb25JbnRlcmZhY2VcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtc1xuICogQHJldHVybiB7U3RyaW5nfSBUaGUgZW5jb2RlZCBBQkkgZm9yIHRoaXMgZnVuY3Rpb24gY2FsbFxuICovXG5BQklDb2Rlci5wcm90b3R5cGUuZW5jb2RlRnVuY3Rpb25DYWxsID0gZnVuY3Rpb24gKGpzb25JbnRlcmZhY2UsIHBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLmVuY29kZUZ1bmN0aW9uU2lnbmF0dXJlKGpzb25JbnRlcmZhY2UpICsgdGhpcy5lbmNvZGVQYXJhbWV0ZXJzKGpzb25JbnRlcmZhY2UuaW5wdXRzLCBwYXJhbXMpLnJlcGxhY2UoJzB4JywgJycpO1xufTtcbi8qKlxuICogU2hvdWxkIGJlIHVzZWQgdG8gZGVjb2RlIGJ5dGVzIHRvIHBsYWluIHBhcmFtXG4gKlxuICogQG1ldGhvZCBkZWNvZGVQYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gYnl0ZXNcbiAqIEByZXR1cm4ge09iamVjdH0gcGxhaW4gcGFyYW1cbiAqL1xuQUJJQ29kZXIucHJvdG90eXBlLmRlY29kZVBhcmFtZXRlciA9IGZ1bmN0aW9uICh0eXBlLCBieXRlcykge1xuICAgIHJldHVybiB0aGlzLmRlY29kZVBhcmFtZXRlcnMoW3R5cGVdLCBieXRlcylbMF07XG59O1xuLyoqXG4gKiBTaG91bGQgYmUgdXNlZCB0byBkZWNvZGUgbGlzdCBvZiBwYXJhbXNcbiAqXG4gKiBAbWV0aG9kIGRlY29kZVBhcmFtZXRlclxuICogQHBhcmFtIHtBcnJheX0gb3V0cHV0c1xuICogQHBhcmFtIHtTdHJpbmd9IGJ5dGVzXG4gKiBAcmV0dXJuIHtBcnJheX0gYXJyYXkgb2YgcGxhaW4gcGFyYW1zXG4gKi9cbkFCSUNvZGVyLnByb3RvdHlwZS5kZWNvZGVQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKG91dHB1dHMsIGJ5dGVzKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjb2RlUGFyYW1ldGVyc1dpdGgob3V0cHV0cywgYnl0ZXMsIGZhbHNlKTtcbn07XG4vKipcbiAqIFNob3VsZCBiZSB1c2VkIHRvIGRlY29kZSBsaXN0IG9mIHBhcmFtc1xuICpcbiAqIEBtZXRob2QgZGVjb2RlUGFyYW1ldGVyXG4gKiBAcGFyYW0ge0FycmF5fSBvdXRwdXRzXG4gKiBAcGFyYW0ge1N0cmluZ30gYnl0ZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbG9vc2VcbiAqIEByZXR1cm4ge0FycmF5fSBhcnJheSBvZiBwbGFpbiBwYXJhbXNcbiAqL1xuQUJJQ29kZXIucHJvdG90eXBlLmRlY29kZVBhcmFtZXRlcnNXaXRoID0gZnVuY3Rpb24gKG91dHB1dHMsIGJ5dGVzLCBsb29zZSkge1xuICAgIGlmIChvdXRwdXRzLmxlbmd0aCA+IDAgJiYgKCFieXRlcyB8fCBieXRlcyA9PT0gJzB4JyB8fCBieXRlcyA9PT0gJzBYJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXR1cm5lZCB2YWx1ZXMgYXJlblxcJ3QgdmFsaWQsIGRpZCBpdCBydW4gT3V0IG9mIEdhcz8gJyArXG4gICAgICAgICAgICAnWW91IG1pZ2h0IGFsc28gc2VlIHRoaXMgZXJyb3IgaWYgeW91IGFyZSBub3QgdXNpbmcgdGhlICcgK1xuICAgICAgICAgICAgJ2NvcnJlY3QgQUJJIGZvciB0aGUgY29udHJhY3QgeW91IGFyZSByZXRyaWV2aW5nIGRhdGEgZnJvbSwgJyArXG4gICAgICAgICAgICAncmVxdWVzdGluZyBkYXRhIGZyb20gYSBibG9jayBudW1iZXIgdGhhdCBkb2VzIG5vdCBleGlzdCwgJyArXG4gICAgICAgICAgICAnb3IgcXVlcnlpbmcgYSBub2RlIHdoaWNoIGlzIG5vdCBmdWxseSBzeW5jZWQuJyk7XG4gICAgfVxuICAgIHZhciByZXMgPSBldGhlcnNBYmlDb2Rlci5kZWNvZGUodGhpcy5tYXBUeXBlcyhvdXRwdXRzKSwgJzB4JyArIGJ5dGVzLnJlcGxhY2UoLzB4L2ksICcnKSwgbG9vc2UpO1xuICAgIHZhciByZXR1cm5WYWx1ZSA9IG5ldyBSZXN1bHQoKTtcbiAgICByZXR1cm5WYWx1ZS5fX2xlbmd0aF9fID0gMDtcbiAgICBvdXRwdXRzLmZvckVhY2goZnVuY3Rpb24gKG91dHB1dCwgaSkge1xuICAgICAgICB2YXIgZGVjb2RlZFZhbHVlID0gcmVzW3JldHVyblZhbHVlLl9fbGVuZ3RoX19dO1xuICAgICAgICBjb25zdCBpc1N0cmluZ09iamVjdCA9IHR5cGVvZiBvdXRwdXQgPT09ICdvYmplY3QnICYmIG91dHB1dC50eXBlICYmIG91dHB1dC50eXBlID09PSAnc3RyaW5nJztcbiAgICAgICAgY29uc3QgaXNTdHJpbmdUeXBlID0gdHlwZW9mIG91dHB1dCA9PT0gJ3N0cmluZycgJiYgb3V0cHV0ID09PSAnc3RyaW5nJztcbiAgICAgICAgLy8gb25seSBjb252ZXJ0IGAweGAgdG8gbnVsbCBpZiBpdCdzIG5vdCBzdHJpbmcgdmFsdWVcbiAgICAgICAgZGVjb2RlZFZhbHVlID0gKGRlY29kZWRWYWx1ZSA9PT0gJzB4JyAmJiAhaXNTdHJpbmdPYmplY3QgJiYgIWlzU3RyaW5nVHlwZSkgPyBudWxsIDogZGVjb2RlZFZhbHVlO1xuICAgICAgICByZXR1cm5WYWx1ZVtpXSA9IGRlY29kZWRWYWx1ZTtcbiAgICAgICAgaWYgKCh0eXBlb2Ygb3V0cHV0ID09PSAnZnVuY3Rpb24nIHx8ICEhb3V0cHV0ICYmIHR5cGVvZiBvdXRwdXQgPT09ICdvYmplY3QnKSAmJiBvdXRwdXQubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWVbb3V0cHV0Lm5hbWVdID0gZGVjb2RlZFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVyblZhbHVlLl9fbGVuZ3RoX18rKztcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuLyoqXG4gKiBEZWNvZGVzIGV2ZW50cyBub24tIGFuZCBpbmRleGVkIHBhcmFtZXRlcnMuXG4gKlxuICogQG1ldGhvZCBkZWNvZGVMb2dcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnB1dHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhXG4gKiBAcGFyYW0ge0FycmF5fSB0b3BpY3NcbiAqIEByZXR1cm4ge0FycmF5fSBhcnJheSBvZiBwbGFpbiBwYXJhbXNcbiAqL1xuQUJJQ29kZXIucHJvdG90eXBlLmRlY29kZUxvZyA9IGZ1bmN0aW9uIChpbnB1dHMsIGRhdGEsIHRvcGljcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdG9waWNzID0gQXJyYXkuaXNBcnJheSh0b3BpY3MpID8gdG9waWNzIDogW3RvcGljc107XG4gICAgZGF0YSA9IGRhdGEgfHwgJyc7XG4gICAgdmFyIG5vdEluZGV4ZWRJbnB1dHMgPSBbXTtcbiAgICB2YXIgaW5kZXhlZFBhcmFtcyA9IFtdO1xuICAgIHZhciB0b3BpY0NvdW50ID0gMDtcbiAgICAvLyBUT0RPIGNoZWNrIGZvciBhbm9ueW1vdXMgbG9ncz9cbiAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQsIGkpIHtcbiAgICAgICAgaWYgKGlucHV0LmluZGV4ZWQpIHtcbiAgICAgICAgICAgIGluZGV4ZWRQYXJhbXNbaV0gPSAoWydib29sJywgJ2ludCcsICd1aW50JywgJ2FkZHJlc3MnLCAnZml4ZWQnLCAndWZpeGVkJ10uZmluZChmdW5jdGlvbiAoc3RhdGljVHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC50eXBlLmluZGV4T2Yoc3RhdGljVHlwZSkgIT09IC0xO1xuICAgICAgICAgICAgfSkpID8gX3RoaXMuZGVjb2RlUGFyYW1ldGVyKGlucHV0LnR5cGUsIHRvcGljc1t0b3BpY0NvdW50XSkgOiB0b3BpY3NbdG9waWNDb3VudF07XG4gICAgICAgICAgICB0b3BpY0NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub3RJbmRleGVkSW5wdXRzW2ldID0gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgbm9uSW5kZXhlZERhdGEgPSBkYXRhO1xuICAgIHZhciBub3RJbmRleGVkUGFyYW1zID0gKG5vbkluZGV4ZWREYXRhKSA/IHRoaXMuZGVjb2RlUGFyYW1ldGVyc1dpdGgobm90SW5kZXhlZElucHV0cywgbm9uSW5kZXhlZERhdGEsIHRydWUpIDogW107XG4gICAgdmFyIHJldHVyblZhbHVlID0gbmV3IFJlc3VsdCgpO1xuICAgIHJldHVyblZhbHVlLl9fbGVuZ3RoX18gPSAwO1xuICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXMsIGkpIHtcbiAgICAgICAgcmV0dXJuVmFsdWVbaV0gPSAocmVzLnR5cGUgPT09ICdzdHJpbmcnKSA/ICcnIDogbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBub3RJbmRleGVkUGFyYW1zW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWVbaV0gPSBub3RJbmRleGVkUGFyYW1zW2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXhlZFBhcmFtc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlW2ldID0gaW5kZXhlZFBhcmFtc1tpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzLm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlW3Jlcy5uYW1lXSA9IHJldHVyblZhbHVlW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVyblZhbHVlLl9fbGVuZ3RoX18rKztcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xudmFyIGNvZGVyID0gbmV3IEFCSUNvZGVyKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGNvZGVyO1xuIiwidmFyIGlzTm9kZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgPyBwcm9jZXNzIDogMCkgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcbnZhciBpc1JOID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZSc7XG52YXIgX2J0b2EgPSBudWxsO1xudmFyIGhlbHBlcnMgPSBudWxsO1xuaWYgKGlzTm9kZSB8fCBpc1JOKSB7XG4gICAgX2J0b2EgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShzdHIpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB9O1xuICAgIHZhciB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbiAgICBpZiAodXJsLlVSTCkge1xuICAgICAgICAvLyBVc2UgdGhlIG5ldyBOb2RlIDYrIEFQSSBmb3IgcGFyc2luZyBVUkxzIHRoYXQgc3VwcG9ydHMgdXNlcm5hbWUvcGFzc3dvcmRcbiAgICAgICAgdmFyIG5ld1VSTCA9IHVybC5VUkw7XG4gICAgICAgIGhlbHBlcnMgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IG5ld1VSTCh1cmwpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gV2ViMyBzdXBwb3J0cyBOb2RlLmpzIDUsIHNvIGZhbGwgYmFjayB0byB0aGUgbGVnYWN5IFVSTCBBUEkgaWYgbmVjZXNzYXJ5XG4gICAgICAgIGhlbHBlcnMgPSByZXF1aXJlKCd1cmwnKS5wYXJzZTtcbiAgICB9XG59XG5lbHNlIHtcbiAgICBfYnRvYSA9IGJ0b2EuYmluZCh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcgPyBnbG9iYWxUaGlzIDogc2VsZik7XG4gICAgaGVscGVycyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkwodXJsKTtcbiAgICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcGFyc2VVUkw6IGhlbHBlcnMsXG4gICAgYnRvYTogX2J0b2Fcbn07XG4iLCIvKlxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHdlYjMuanMuXG5cbiB3ZWIzLmpzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiB3ZWIzLmpzIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG5cbiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiBhbG9uZyB3aXRoIHdlYjMuanMuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbi8qKlxuICogQGZpbGUgZ2V0TmV0d29ya1R5cGUuanNcbiAqIEBhdXRob3IgRmFiaWFuIFZvZ2Vsc3RlbGxlciA8ZmFiaWFuQGV0aGVyZXVtLm9yZz5cbiAqIEBkYXRlIDIwMTdcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgZ2V0TmV0d29ya1R5cGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLCBpZDtcbiAgICByZXR1cm4gdGhpcy5uZXQuZ2V0SWQoKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZ2l2ZW5JZCkge1xuICAgICAgICBpZCA9IGdpdmVuSWQ7XG4gICAgICAgIHJldHVybiBfdGhpcy5nZXRCbG9jaygwKTtcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZ2VuZXNpcykge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSAncHJpdmF0ZSc7XG4gICAgICAgIGlmIChnZW5lc2lzLmhhc2ggPT09ICcweGQ0ZTU2NzQwZjg3NmFlZjhjMDEwYjg2YTQwZDVmNTY3NDVhMTE4ZDA5MDZhMzRlNjlhZWM4YzBkYjFjYjhmYTMnICYmXG4gICAgICAgICAgICBpZCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAnbWFpbic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdlbmVzaXMuaGFzaCA9PT0gJzB4NDE5NDEwMjM2ODA5MjNlMGZlNGQ3NGEzNGJkYWM4MTQxZjI1NDBlM2FlOTA2MjM3MThlNDdkNjZkMWNhNGEyZCcgJiZcbiAgICAgICAgICAgIGlkID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9ICdyb3BzdGVuJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2VuZXNpcy5oYXNoID09PSAnMHg2MzQxZmQzZGFmOTRiNzQ4YzcyY2VkNWE1YjI2MDI4ZjI0NzRmNWYwMGQ4MjQ1MDRlNGZhMzdhNzU3NjdlMTc3JyAmJlxuICAgICAgICAgICAgaWQgPT09IDQpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gJ3JpbmtlYnknO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZW5lc2lzLmhhc2ggPT09ICcweGJmN2UzMzFmN2Y3YzFkZDJlMDUxNTk2NjZiM2JmOGJjN2E4YTNhOWViMWQ1MTg5NjllYWI1MjlkZDliODhjMWEnICYmXG4gICAgICAgICAgICBpZCA9PT0gNSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAnZ29lcmxpJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2VuZXNpcy5oYXNoID09PSAnMHhhM2M1NjVmYzE1Yzc0Nzg4NjJkNTBjY2Q2NTYxZTNjMDZiMjRjYzUwOWJmMzg4OTQxYzI1ZWE5ODVjZTMyY2I5JyAmJlxuICAgICAgICAgICAgaWQgPT09IDQyKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9ICdrb3Zhbic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmV0dXJuVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xubW9kdWxlLmV4cG9ydHMgPSBnZXROZXR3b3JrVHlwZTtcbiIsIi8qXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2Ygd2ViMy5qcy5cblxuIHdlYjMuanMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuIHdlYjMuanMgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cblxuIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuIGFsb25nIHdpdGggd2ViMy5qcy4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuLyoqXG4gKiBAZmlsZSBnaXZlblByb3ZpZGVyLmpzXG4gKiBAYXV0aG9yIEZhYmlhbiBWb2dlbHN0ZWxsZXIgPGZhYmlhbkBldGhlcmV1bS5vcmc+XG4gKiBAZGF0ZSAyMDE3XG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIGdpdmVuUHJvdmlkZXIgPSBudWxsO1xuLy8gQUREIEdJVkVOIFBST1ZJREVSXG4vKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG52YXIgZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnID8gZ2xvYmFsVGhpcyA6IHVuZGVmaW5lZDtcbmlmICghZ2xvYmFsKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgZ2xvYmFsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZ2xvYmFsID0gc2VsZjtcbiAgICB9XG59XG4vLyBFSVAtMTE5Mzogd2luZG93LmV0aGVyZXVtXG5pZiAodHlwZW9mIGdsb2JhbC5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnaXZlblByb3ZpZGVyID0gZ2xvYmFsLmV0aGVyZXVtO1xuICAgIC8vIExlZ2FjeSB3ZWIzLmN1cnJlbnRQcm92aWRlclxufVxuZWxzZSBpZiAodHlwZW9mIGdsb2JhbC53ZWIzICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIpIHtcbiAgICBpZiAoZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyLnNlbmRBc3luYykge1xuICAgICAgICBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIuc2VuZCA9IGdsb2JhbC53ZWIzLmN1cnJlbnRQcm92aWRlci5zZW5kQXN5bmM7XG4gICAgICAgIGRlbGV0ZSBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIuc2VuZEFzeW5jO1xuICAgIH1cbiAgICAvLyBpZiBjb25uZWN0aW9uIGlzICdpcGNQcm92aWRlcldyYXBwZXInLCBhZGQgc3Vic2NyaXB0aW9uIHN1cHBvcnRcbiAgICBpZiAoIWdsb2JhbC53ZWIzLmN1cnJlbnRQcm92aWRlci5vbiAmJlxuICAgICAgICBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIuY29ubmVjdGlvbiAmJlxuICAgICAgICBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIuY29ubmVjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lID09PSAnaXBjUHJvdmlkZXJXcmFwcGVyJykge1xuICAgICAgICBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIub24gPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgc2Vjb25kIHBhcmFtZXRlciBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdkYXRhJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9uKCdkYXRhJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoJ0NvdWxkblxcJ3QgcGFyc2UgcmVzcG9uc2UgZGF0YScgKyBkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3RpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmlkICYmIHJlc3VsdC5tZXRob2QuaW5kZXhPZignX3N1YnNjcmlwdGlvbicpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24ub24odHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2l2ZW5Qcm92aWRlciA9IGdsb2JhbC53ZWIzLmN1cnJlbnRQcm92aWRlcjtcbn1cbi8qIGpzaGludCBpZ25vcmU6ZW5kICovXG5tb2R1bGUuZXhwb3J0cyA9IGdpdmVuUHJvdmlkZXI7XG4iLCIvKlxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHdlYjMuanMuXG5cbiB3ZWIzLmpzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiB3ZWIzLmpzIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG5cbiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiBhbG9uZyB3aXRoIHdlYjMuanMuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbi8qKlxuICogQGZpbGUgaW5kZXguanNcbiAqIEBhdXRob3IgTWFyZWsgS290ZXdpY3ogPG1hcmVrQHBhcml0eS5pbz5cbiAqIEBhdXRob3IgRmFiaWFuIFZvZ2Vsc3RlbGxlciA8ZmFiaWFuQGZyb3plbWFuLmRlPlxuICogQGRhdGUgMjAxOFxuICovXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnd2ViMy11dGlscycpO1xudmFyIEV0aGVyc0FiaUNvZGVyID0gcmVxdWlyZSgnQGV0aGVyc3Byb2plY3QvYWJpJykuQWJpQ29kZXI7XG52YXIgUGFyYW1UeXBlID0gcmVxdWlyZSgnQGV0aGVyc3Byb2plY3QvYWJpJykuUGFyYW1UeXBlO1xudmFyIGV0aGVyc0FiaUNvZGVyID0gbmV3IEV0aGVyc0FiaUNvZGVyKGZ1bmN0aW9uICh0eXBlLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlLm1hdGNoKC9edT9pbnQvKSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgKCEoISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnQk4nKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufSk7XG4vLyByZXN1bHQgbWV0aG9kXG5mdW5jdGlvbiBSZXN1bHQoKSB7XG59XG4vKipcbiAqIEFCSUNvZGVyIHByb3RvdHlwZSBzaG91bGQgYmUgdXNlZCB0byBlbmNvZGUvZGVjb2RlIHNvbGlkaXR5IHBhcmFtcyBvZiBhbnkgdHlwZVxuICovXG52YXIgQUJJQ29kZXIgPSBmdW5jdGlvbiAoKSB7XG59O1xuLyoqXG4gKiBFbmNvZGVzIHRoZSBmdW5jdGlvbiBuYW1lIHRvIGl0cyBBQkkgcmVwcmVzZW50YXRpb24sIHdoaWNoIGFyZSB0aGUgZmlyc3QgNCBieXRlcyBvZiB0aGUgc2hhMyBvZiB0aGUgZnVuY3Rpb24gbmFtZSBpbmNsdWRpbmcgIHR5cGVzLlxuICpcbiAqIEBtZXRob2QgZW5jb2RlRnVuY3Rpb25TaWduYXR1cmVcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZnVuY3Rpb25OYW1lXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGVuY29kZWQgZnVuY3Rpb24gbmFtZVxuICovXG5BQklDb2Rlci5wcm90b3R5cGUuZW5jb2RlRnVuY3Rpb25TaWduYXR1cmUgPSBmdW5jdGlvbiAoZnVuY3Rpb25OYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBmdW5jdGlvbk5hbWUgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGZ1bmN0aW9uTmFtZSA9PT0gJ29iamVjdCcgJiYgZnVuY3Rpb25OYW1lKSB7XG4gICAgICAgIGZ1bmN0aW9uTmFtZSA9IHV0aWxzLl9qc29uSW50ZXJmYWNlTWV0aG9kVG9TdHJpbmcoZnVuY3Rpb25OYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHV0aWxzLnNoYTMoZnVuY3Rpb25OYW1lKS5zbGljZSgwLCAxMCk7XG59O1xuLyoqXG4gKiBFbmNvZGVzIHRoZSBmdW5jdGlvbiBuYW1lIHRvIGl0cyBBQkkgcmVwcmVzZW50YXRpb24sIHdoaWNoIGFyZSB0aGUgZmlyc3QgNCBieXRlcyBvZiB0aGUgc2hhMyBvZiB0aGUgZnVuY3Rpb24gbmFtZSBpbmNsdWRpbmcgIHR5cGVzLlxuICpcbiAqIEBtZXRob2QgZW5jb2RlRXZlbnRTaWduYXR1cmVcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZnVuY3Rpb25OYW1lXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGVuY29kZWQgZnVuY3Rpb24gbmFtZVxuICovXG5BQklDb2Rlci5wcm90b3R5cGUuZW5jb2RlRXZlbnRTaWduYXR1cmUgPSBmdW5jdGlvbiAoZnVuY3Rpb25OYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBmdW5jdGlvbk5hbWUgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGZ1bmN0aW9uTmFtZSA9PT0gJ29iamVjdCcgJiYgZnVuY3Rpb25OYW1lKSB7XG4gICAgICAgIGZ1bmN0aW9uTmFtZSA9IHV0aWxzLl9qc29uSW50ZXJmYWNlTWV0aG9kVG9TdHJpbmcoZnVuY3Rpb25OYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHV0aWxzLnNoYTMoZnVuY3Rpb25OYW1lKTtcbn07XG4vKipcbiAqIFNob3VsZCBiZSB1c2VkIHRvIGVuY29kZSBwbGFpbiBwYXJhbVxuICpcbiAqIEBtZXRob2QgZW5jb2RlUGFyYW1ldGVyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB0eXBlXG4gKiBAcGFyYW0ge2FueX0gcGFyYW1cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGVuY29kZWQgcGxhaW4gcGFyYW1cbiAqL1xuQUJJQ29kZXIucHJvdG90eXBlLmVuY29kZVBhcmFtZXRlciA9IGZ1bmN0aW9uICh0eXBlLCBwYXJhbSkge1xuICAgIHJldHVybiB0aGlzLmVuY29kZVBhcmFtZXRlcnMoW3R5cGVdLCBbcGFyYW1dKTtcbn07XG4vKipcbiAqIFNob3VsZCBiZSB1c2VkIHRvIGVuY29kZSBsaXN0IG9mIHBhcmFtc1xuICpcbiAqIEBtZXRob2QgZW5jb2RlUGFyYW1ldGVyc1xuICpcbiAqIEBwYXJhbSB7QXJyYXk8U3RyaW5nfE9iamVjdD59IHR5cGVzXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IHBhcmFtc1xuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gZW5jb2RlZCBsaXN0IG9mIHBhcmFtc1xuICovXG5BQklDb2Rlci5wcm90b3R5cGUuZW5jb2RlUGFyYW1ldGVycyA9IGZ1bmN0aW9uICh0eXBlcywgcGFyYW1zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHR5cGVzID0gc2VsZi5tYXBUeXBlcyh0eXBlcyk7XG4gICAgcGFyYW1zID0gcGFyYW1zLm1hcChmdW5jdGlvbiAocGFyYW0sIGluZGV4KSB7XG4gICAgICAgIGxldCB0eXBlID0gdHlwZXNbaW5kZXhdO1xuICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUudHlwZSkge1xuICAgICAgICAgICAgLy8gV2UgbWF5IGdldCBhIG5hbWVkIHR5cGUgb2Ygc2hhcGUge25hbWUsIHR5cGV9XG4gICAgICAgICAgICB0eXBlID0gdHlwZS50eXBlO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtID0gc2VsZi5mb3JtYXRQYXJhbSh0eXBlLCBwYXJhbSk7XG4gICAgICAgIC8vIEZvcm1hdCBwYXJhbXMgZm9yIHR1cGxlc1xuICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnICYmIHR5cGUuaW5jbHVkZXMoJ3R1cGxlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGVyID0gZXRoZXJzQWJpQ29kZXIuX2dldENvZGVyKFBhcmFtVHlwZS5mcm9tKHR5cGUpKTtcbiAgICAgICAgICAgIGNvbnN0IG1vZGlmeVBhcmFtcyA9IChjb2RlciwgcGFyYW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZXIubmFtZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW0ubWFwKHAgPT4gbW9kaWZ5UGFyYW1zKGV0aGVyc0FiaUNvZGVyLl9nZXRDb2RlcihQYXJhbVR5cGUuZnJvbShjb2Rlci50eXBlLnJlcGxhY2UoJ1tdJywgJycpKSksIHApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29kZXIuY29kZXJzLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMubmFtZSA9PT0gJ3R1cGxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5UGFyYW1zKGMsIHBhcmFtW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtW2ldID0gc2VsZi5mb3JtYXRQYXJhbShjLm5hbWUsIHBhcmFtW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1vZGlmeVBhcmFtcyhjb2RlciwgcGFyYW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJhbTtcbiAgICB9KTtcbiAgICByZXR1cm4gZXRoZXJzQWJpQ29kZXIuZW5jb2RlKHR5cGVzLCBwYXJhbXMpO1xufTtcbi8qKlxuICogTWFwIHR5cGVzIGlmIHNpbXBsaWZpZWQgZm9ybWF0IGlzIHVzZWRcbiAqXG4gKiBAbWV0aG9kIG1hcFR5cGVzXG4gKiBAcGFyYW0ge0FycmF5fSB0eXBlc1xuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbkFCSUNvZGVyLnByb3RvdHlwZS5tYXBUeXBlcyA9IGZ1bmN0aW9uICh0eXBlcykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgbWFwcGVkVHlwZXMgPSBbXTtcbiAgICB0eXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIC8vIFJlbWFwIGBmdW5jdGlvbmAgdHlwZSBwYXJhbXMgdG8gYnl0ZXMyNCBzaW5jZSBFdGhlcnMgZG9lcyBub3RcbiAgICAgICAgLy8gcmVjb2duaXplIGZvcm1lciB0eXBlLiBTb2xpZGl0eSBkb2NzIHNheSBgRnVuY3Rpb25gIGlzIGEgYnl0ZXMyNFxuICAgICAgICAvLyBlbmNvZGluZyB0aGUgY29udHJhY3QgYWRkcmVzcyBmb2xsb3dlZCBieSB0aGUgZnVuY3Rpb24gc2VsZWN0b3IgaGFzaC5cbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlLnR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHR5cGUgPSBPYmplY3QuYXNzaWduKHt9LCB0eXBlLCB7IHR5cGU6IFwiYnl0ZXMyNFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmlzU2ltcGxpZmllZFN0cnVjdEZvcm1hdCh0eXBlKSkge1xuICAgICAgICAgICAgdmFyIHN0cnVjdE5hbWUgPSBPYmplY3Qua2V5cyh0eXBlKVswXTtcbiAgICAgICAgICAgIG1hcHBlZFR5cGVzLnB1c2goT2JqZWN0LmFzc2lnbihzZWxmLm1hcFN0cnVjdE5hbWVBbmRUeXBlKHN0cnVjdE5hbWUpLCB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50czogc2VsZi5tYXBTdHJ1Y3RUb0NvZGVyRm9ybWF0KHR5cGVbc3RydWN0TmFtZV0pXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWFwcGVkVHlwZXMucHVzaCh0eXBlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWFwcGVkVHlwZXM7XG59O1xuLyoqXG4gKiBDaGVjayBpZiB0eXBlIGlzIHNpbXBsaWZpZWQgc3RydWN0IGZvcm1hdFxuICpcbiAqIEBtZXRob2QgaXNTaW1wbGlmaWVkU3RydWN0Rm9ybWF0XG4gKiBAcGFyYW0ge3N0cmluZyB8IE9iamVjdH0gdHlwZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbkFCSUNvZGVyLnByb3RvdHlwZS5pc1NpbXBsaWZpZWRTdHJ1Y3RGb3JtYXQgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHR5cGUuY29tcG9uZW50cyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHR5cGUubmFtZSA9PT0gJ3VuZGVmaW5lZCc7XG59O1xuLyoqXG4gKiBNYXBzIHRoZSBjb3JyZWN0IHR1cGxlIHR5cGUgYW5kIG5hbWUgd2hlbiB0aGUgc2ltcGxpZmllZCBmb3JtYXQgaW4gZW5jb2RlL2RlY29kZVBhcmFtZXRlciBpcyB1c2VkXG4gKlxuICogQG1ldGhvZCBtYXBTdHJ1Y3ROYW1lQW5kVHlwZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cnVjdE5hbWVcbiAqIEByZXR1cm4ge3t0eXBlOiBzdHJpbmcsIG5hbWU6ICp9fVxuICovXG5BQklDb2Rlci5wcm90b3R5cGUubWFwU3RydWN0TmFtZUFuZFR5cGUgPSBmdW5jdGlvbiAoc3RydWN0TmFtZSkge1xuICAgIHZhciB0eXBlID0gJ3R1cGxlJztcbiAgICBpZiAoc3RydWN0TmFtZS5pbmRleE9mKCdbXScpID4gLTEpIHtcbiAgICAgICAgdHlwZSA9ICd0dXBsZVtdJztcbiAgICAgICAgc3RydWN0TmFtZSA9IHN0cnVjdE5hbWUuc2xpY2UoMCwgLTIpO1xuICAgIH1cbiAgICByZXR1cm4geyB0eXBlOiB0eXBlLCBuYW1lOiBzdHJ1Y3ROYW1lIH07XG59O1xuLyoqXG4gKiBNYXBzIHRoZSBzaW1wbGlmaWVkIGZvcm1hdCBpbiB0byB0aGUgZXhwZWN0ZWQgZm9ybWF0IG9mIHRoZSBBQklDb2RlclxuICpcbiAqIEBtZXRob2QgbWFwU3RydWN0VG9Db2RlckZvcm1hdFxuICogQHBhcmFtIHtPYmplY3R9IHN0cnVjdFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbkFCSUNvZGVyLnByb3RvdHlwZS5tYXBTdHJ1Y3RUb0NvZGVyRm9ybWF0ID0gZnVuY3Rpb24gKHN0cnVjdCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgY29tcG9uZW50cyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHN0cnVjdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RydWN0W2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2goT2JqZWN0LmFzc2lnbihzZWxmLm1hcFN0cnVjdE5hbWVBbmRUeXBlKGtleSksIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzOiBzZWxmLm1hcFN0cnVjdFRvQ29kZXJGb3JtYXQoc3RydWN0W2tleV0pXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50cy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgIHR5cGU6IHN0cnVjdFtrZXldXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xufTtcbi8qKlxuICogSGFuZGxlIHNvbWUgZm9ybWF0dGluZyBvZiBwYXJhbXMgZm9yIGJhY2t3YXJkcyBjb21wYXRhYmlsaXR5IHdpdGggRXRoZXJzIFY0XG4gKlxuICogQG1ldGhvZCBmb3JtYXRQYXJhbVxuICogQHBhcmFtIHtTdHJpbmd9IC0gdHlwZVxuICogQHBhcmFtIHthbnl9IC0gcGFyYW1cbiAqIEByZXR1cm4ge2FueX0gLSBUaGUgZm9ybWF0dGVkIHBhcmFtXG4gKi9cbkFCSUNvZGVyLnByb3RvdHlwZS5mb3JtYXRQYXJhbSA9IGZ1bmN0aW9uICh0eXBlLCBwYXJhbSkge1xuICAgIGNvbnN0IHBhcmFtVHlwZUJ5dGVzID0gbmV3IFJlZ0V4cCgvXmJ5dGVzKFswLTldKikkLyk7XG4gICAgY29uc3QgcGFyYW1UeXBlQnl0ZXNBcnJheSA9IG5ldyBSZWdFeHAoL15ieXRlcyhbMC05XSopXFxbXFxdJC8pO1xuICAgIGNvbnN0IHBhcmFtVHlwZU51bWJlciA9IG5ldyBSZWdFeHAoL14odT9pbnQpKFswLTldKikkLyk7XG4gICAgY29uc3QgcGFyYW1UeXBlTnVtYmVyQXJyYXkgPSBuZXcgUmVnRXhwKC9eKHU/aW50KShbMC05XSopXFxbXFxdJC8pO1xuICAgIC8vIEZvcm1hdCBCTiB0byBzdHJpbmdcbiAgICBpZiAodXRpbHMuaXNCTihwYXJhbSkgfHwgdXRpbHMuaXNCaWdOdW1iZXIocGFyYW0pKSB7XG4gICAgICAgIHJldHVybiBwYXJhbS50b1N0cmluZygxMCk7XG4gICAgfVxuICAgIGlmICh0eXBlLm1hdGNoKHBhcmFtVHlwZUJ5dGVzQXJyYXkpIHx8IHR5cGUubWF0Y2gocGFyYW1UeXBlTnVtYmVyQXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBwYXJhbS5tYXAocCA9PiB0aGlzLmZvcm1hdFBhcmFtKHR5cGUucmVwbGFjZSgnW10nLCAnJyksIHApKTtcbiAgICB9XG4gICAgLy8gRm9ybWF0IGNvcnJlY3Qgd2lkdGggZm9yIHU/aW50WzAtOV0qXG4gICAgbGV0IG1hdGNoID0gdHlwZS5tYXRjaChwYXJhbVR5cGVOdW1iZXIpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICBsZXQgc2l6ZSA9IHBhcnNlSW50KG1hdGNoWzJdIHx8IFwiMjU2XCIpO1xuICAgICAgICBpZiAoc2l6ZSAvIDggPCBwYXJhbS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIHBhZCB0byBjb3JyZWN0IGJpdCB3aWR0aFxuICAgICAgICAgICAgcGFyYW0gPSB1dGlscy5sZWZ0UGFkKHBhcmFtLCBzaXplKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBGb3JtYXQgY29ycmVjdCBsZW5ndGggZm9yIGJ5dGVzWzAtOV0rXG4gICAgbWF0Y2ggPSB0eXBlLm1hdGNoKHBhcmFtVHlwZUJ5dGVzKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihwYXJhbSkpIHtcbiAgICAgICAgICAgIHBhcmFtID0gdXRpbHMudG9IZXgocGFyYW0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZvcm1hdCB0byBjb3JyZWN0IGxlbmd0aFxuICAgICAgICBsZXQgc2l6ZSA9IHBhcnNlSW50KG1hdGNoWzFdKTtcbiAgICAgICAgaWYgKHNpemUpIHtcbiAgICAgICAgICAgIGxldCBtYXhTaXplID0gc2l6ZSAqIDI7XG4gICAgICAgICAgICBpZiAocGFyYW0uc3Vic3RyaW5nKDAsIDIpID09PSAnMHgnKSB7XG4gICAgICAgICAgICAgICAgbWF4U2l6ZSArPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtLmxlbmd0aCA8IG1heFNpemUpIHtcbiAgICAgICAgICAgICAgICAvLyBwYWQgdG8gY29ycmVjdCBsZW5ndGhcbiAgICAgICAgICAgICAgICBwYXJhbSA9IHV0aWxzLnJpZ2h0UGFkKHBhcmFtLCBzaXplICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZm9ybWF0IG9kZC1sZW5ndGggYnl0ZXMgdG8gZXZlbi1sZW5ndGhcbiAgICAgICAgaWYgKHBhcmFtLmxlbmd0aCAlIDIgPT09IDEpIHtcbiAgICAgICAgICAgIHBhcmFtID0gJzB4MCcgKyBwYXJhbS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtO1xufTtcbi8qKlxuICogRW5jb2RlcyBhIGZ1bmN0aW9uIGNhbGwgZnJvbSBpdHMganNvbiBpbnRlcmZhY2UgYW5kIHBhcmFtZXRlcnMuXG4gKlxuICogQG1ldGhvZCBlbmNvZGVGdW5jdGlvbkNhbGxcbiAqIEBwYXJhbSB7QXJyYXl9IGpzb25JbnRlcmZhY2VcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtc1xuICogQHJldHVybiB7U3RyaW5nfSBUaGUgZW5jb2RlZCBBQkkgZm9yIHRoaXMgZnVuY3Rpb24gY2FsbFxuICovXG5BQklDb2Rlci5wcm90b3R5cGUuZW5jb2RlRnVuY3Rpb25DYWxsID0gZnVuY3Rpb24gKGpzb25JbnRlcmZhY2UsIHBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLmVuY29kZUZ1bmN0aW9uU2lnbmF0dXJlKGpzb25JbnRlcmZhY2UpICsgdGhpcy5lbmNvZGVQYXJhbWV0ZXJzKGpzb25JbnRlcmZhY2UuaW5wdXRzLCBwYXJhbXMpLnJlcGxhY2UoJzB4JywgJycpO1xufTtcbi8qKlxuICogU2hvdWxkIGJlIHVzZWQgdG8gZGVjb2RlIGJ5dGVzIHRvIHBsYWluIHBhcmFtXG4gKlxuICogQG1ldGhvZCBkZWNvZGVQYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gYnl0ZXNcbiAqIEByZXR1cm4ge09iamVjdH0gcGxhaW4gcGFyYW1cbiAqL1xuQUJJQ29kZXIucHJvdG90eXBlLmRlY29kZVBhcmFtZXRlciA9IGZ1bmN0aW9uICh0eXBlLCBieXRlcykge1xuICAgIHJldHVybiB0aGlzLmRlY29kZVBhcmFtZXRlcnMoW3R5cGVdLCBieXRlcylbMF07XG59O1xuLyoqXG4gKiBTaG91bGQgYmUgdXNlZCB0byBkZWNvZGUgbGlzdCBvZiBwYXJhbXNcbiAqXG4gKiBAbWV0aG9kIGRlY29kZVBhcmFtZXRlclxuICogQHBhcmFtIHtBcnJheX0gb3V0cHV0c1xuICogQHBhcmFtIHtTdHJpbmd9IGJ5dGVzXG4gKiBAcmV0dXJuIHtBcnJheX0gYXJyYXkgb2YgcGxhaW4gcGFyYW1zXG4gKi9cbkFCSUNvZGVyLnByb3RvdHlwZS5kZWNvZGVQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKG91dHB1dHMsIGJ5dGVzKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjb2RlUGFyYW1ldGVyc1dpdGgob3V0cHV0cywgYnl0ZXMsIGZhbHNlKTtcbn07XG4vKipcbiAqIFNob3VsZCBiZSB1c2VkIHRvIGRlY29kZSBsaXN0IG9mIHBhcmFtc1xuICpcbiAqIEBtZXRob2QgZGVjb2RlUGFyYW1ldGVyXG4gKiBAcGFyYW0ge0FycmF5fSBvdXRwdXRzXG4gKiBAcGFyYW0ge1N0cmluZ30gYnl0ZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbG9vc2VcbiAqIEByZXR1cm4ge0FycmF5fSBhcnJheSBvZiBwbGFpbiBwYXJhbXNcbiAqL1xuQUJJQ29kZXIucHJvdG90eXBlLmRlY29kZVBhcmFtZXRlcnNXaXRoID0gZnVuY3Rpb24gKG91dHB1dHMsIGJ5dGVzLCBsb29zZSkge1xuICAgIGlmIChvdXRwdXRzLmxlbmd0aCA+IDAgJiYgKCFieXRlcyB8fCBieXRlcyA9PT0gJzB4JyB8fCBieXRlcyA9PT0gJzBYJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXR1cm5lZCB2YWx1ZXMgYXJlblxcJ3QgdmFsaWQsIGRpZCBpdCBydW4gT3V0IG9mIEdhcz8gJyArXG4gICAgICAgICAgICAnWW91IG1pZ2h0IGFsc28gc2VlIHRoaXMgZXJyb3IgaWYgeW91IGFyZSBub3QgdXNpbmcgdGhlICcgK1xuICAgICAgICAgICAgJ2NvcnJlY3QgQUJJIGZvciB0aGUgY29udHJhY3QgeW91IGFyZSByZXRyaWV2aW5nIGRhdGEgZnJvbSwgJyArXG4gICAgICAgICAgICAncmVxdWVzdGluZyBkYXRhIGZyb20gYSBibG9jayBudW1iZXIgdGhhdCBkb2VzIG5vdCBleGlzdCwgJyArXG4gICAgICAgICAgICAnb3IgcXVlcnlpbmcgYSBub2RlIHdoaWNoIGlzIG5vdCBmdWxseSBzeW5jZWQuJyk7XG4gICAgfVxuICAgIHZhciByZXMgPSBldGhlcnNBYmlDb2Rlci5kZWNvZGUodGhpcy5tYXBUeXBlcyhvdXRwdXRzKSwgJzB4JyArIGJ5dGVzLnJlcGxhY2UoLzB4L2ksICcnKSwgbG9vc2UpO1xuICAgIHZhciByZXR1cm5WYWx1ZSA9IG5ldyBSZXN1bHQoKTtcbiAgICByZXR1cm5WYWx1ZS5fX2xlbmd0aF9fID0gMDtcbiAgICBvdXRwdXRzLmZvckVhY2goZnVuY3Rpb24gKG91dHB1dCwgaSkge1xuICAgICAgICB2YXIgZGVjb2RlZFZhbHVlID0gcmVzW3JldHVyblZhbHVlLl9fbGVuZ3RoX19dO1xuICAgICAgICBjb25zdCBpc1N0cmluZ09iamVjdCA9IHR5cGVvZiBvdXRwdXQgPT09ICdvYmplY3QnICYmIG91dHB1dC50eXBlICYmIG91dHB1dC50eXBlID09PSAnc3RyaW5nJztcbiAgICAgICAgY29uc3QgaXNTdHJpbmdUeXBlID0gdHlwZW9mIG91dHB1dCA9PT0gJ3N0cmluZycgJiYgb3V0cHV0ID09PSAnc3RyaW5nJztcbiAgICAgICAgLy8gb25seSBjb252ZXJ0IGAweGAgdG8gbnVsbCBpZiBpdCdzIG5vdCBzdHJpbmcgdmFsdWVcbiAgICAgICAgZGVjb2RlZFZhbHVlID0gKGRlY29kZWRWYWx1ZSA9PT0gJzB4JyAmJiAhaXNTdHJpbmdPYmplY3QgJiYgIWlzU3RyaW5nVHlwZSkgPyBudWxsIDogZGVjb2RlZFZhbHVlO1xuICAgICAgICByZXR1cm5WYWx1ZVtpXSA9IGRlY29kZWRWYWx1ZTtcbiAgICAgICAgaWYgKCh0eXBlb2Ygb3V0cHV0ID09PSAnZnVuY3Rpb24nIHx8ICEhb3V0cHV0ICYmIHR5cGVvZiBvdXRwdXQgPT09ICdvYmplY3QnKSAmJiBvdXRwdXQubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWVbb3V0cHV0Lm5hbWVdID0gZGVjb2RlZFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVyblZhbHVlLl9fbGVuZ3RoX18rKztcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xuLyoqXG4gKiBEZWNvZGVzIGV2ZW50cyBub24tIGFuZCBpbmRleGVkIHBhcmFtZXRlcnMuXG4gKlxuICogQG1ldGhvZCBkZWNvZGVMb2dcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnB1dHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhXG4gKiBAcGFyYW0ge0FycmF5fSB0b3BpY3NcbiAqIEByZXR1cm4ge0FycmF5fSBhcnJheSBvZiBwbGFpbiBwYXJhbXNcbiAqL1xuQUJJQ29kZXIucHJvdG90eXBlLmRlY29kZUxvZyA9IGZ1bmN0aW9uIChpbnB1dHMsIGRhdGEsIHRvcGljcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdG9waWNzID0gQXJyYXkuaXNBcnJheSh0b3BpY3MpID8gdG9waWNzIDogW3RvcGljc107XG4gICAgZGF0YSA9IGRhdGEgfHwgJyc7XG4gICAgdmFyIG5vdEluZGV4ZWRJbnB1dHMgPSBbXTtcbiAgICB2YXIgaW5kZXhlZFBhcmFtcyA9IFtdO1xuICAgIHZhciB0b3BpY0NvdW50ID0gMDtcbiAgICAvLyBUT0RPIGNoZWNrIGZvciBhbm9ueW1vdXMgbG9ncz9cbiAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXQsIGkpIHtcbiAgICAgICAgaWYgKGlucHV0LmluZGV4ZWQpIHtcbiAgICAgICAgICAgIGluZGV4ZWRQYXJhbXNbaV0gPSAoWydib29sJywgJ2ludCcsICd1aW50JywgJ2FkZHJlc3MnLCAnZml4ZWQnLCAndWZpeGVkJ10uZmluZChmdW5jdGlvbiAoc3RhdGljVHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC50eXBlLmluZGV4T2Yoc3RhdGljVHlwZSkgIT09IC0xO1xuICAgICAgICAgICAgfSkpID8gX3RoaXMuZGVjb2RlUGFyYW1ldGVyKGlucHV0LnR5cGUsIHRvcGljc1t0b3BpY0NvdW50XSkgOiB0b3BpY3NbdG9waWNDb3VudF07XG4gICAgICAgICAgICB0b3BpY0NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub3RJbmRleGVkSW5wdXRzW2ldID0gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgbm9uSW5kZXhlZERhdGEgPSBkYXRhO1xuICAgIHZhciBub3RJbmRleGVkUGFyYW1zID0gKG5vbkluZGV4ZWREYXRhKSA/IHRoaXMuZGVjb2RlUGFyYW1ldGVyc1dpdGgobm90SW5kZXhlZElucHV0cywgbm9uSW5kZXhlZERhdGEsIHRydWUpIDogW107XG4gICAgdmFyIHJldHVyblZhbHVlID0gbmV3IFJlc3VsdCgpO1xuICAgIHJldHVyblZhbHVlLl9fbGVuZ3RoX18gPSAwO1xuICAgIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXMsIGkpIHtcbiAgICAgICAgcmV0dXJuVmFsdWVbaV0gPSAocmVzLnR5cGUgPT09ICdzdHJpbmcnKSA/ICcnIDogbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBub3RJbmRleGVkUGFyYW1zW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWVbaV0gPSBub3RJbmRleGVkUGFyYW1zW2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXhlZFBhcmFtc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlW2ldID0gaW5kZXhlZFBhcmFtc1tpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzLm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlW3Jlcy5uYW1lXSA9IHJldHVyblZhbHVlW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVyblZhbHVlLl9fbGVuZ3RoX18rKztcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG59O1xudmFyIGNvZGVyID0gbmV3IEFCSUNvZGVyKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGNvZGVyO1xuIiwidmFyIGlzTm9kZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgPyBwcm9jZXNzIDogMCkgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcbnZhciBpc1JOID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZSc7XG52YXIgX2J0b2EgPSBudWxsO1xudmFyIGhlbHBlcnMgPSBudWxsO1xuaWYgKGlzTm9kZSB8fCBpc1JOKSB7XG4gICAgX2J0b2EgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShzdHIpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB9O1xuICAgIHZhciB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbiAgICBpZiAodXJsLlVSTCkge1xuICAgICAgICAvLyBVc2UgdGhlIG5ldyBOb2RlIDYrIEFQSSBmb3IgcGFyc2luZyBVUkxzIHRoYXQgc3VwcG9ydHMgdXNlcm5hbWUvcGFzc3dvcmRcbiAgICAgICAgdmFyIG5ld1VSTCA9IHVybC5VUkw7XG4gICAgICAgIGhlbHBlcnMgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IG5ld1VSTCh1cmwpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gV2ViMyBzdXBwb3J0cyBOb2RlLmpzIDUsIHNvIGZhbGwgYmFjayB0byB0aGUgbGVnYWN5IFVSTCBBUEkgaWYgbmVjZXNzYXJ5XG4gICAgICAgIGhlbHBlcnMgPSByZXF1aXJlKCd1cmwnKS5wYXJzZTtcbiAgICB9XG59XG5lbHNlIHtcbiAgICBfYnRvYSA9IGJ0b2EuYmluZCh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcgPyBnbG9iYWxUaGlzIDogc2VsZik7XG4gICAgaGVscGVycyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkwodXJsKTtcbiAgICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcGFyc2VVUkw6IGhlbHBlcnMsXG4gICAgYnRvYTogX2J0b2Fcbn07XG4iLCIvKlxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHdlYjMuanMuXG5cbiB3ZWIzLmpzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiB3ZWIzLmpzIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG5cbiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiBhbG9uZyB3aXRoIHdlYjMuanMuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbi8qKlxuICogQGZpbGUgZ2l2ZW5Qcm92aWRlci5qc1xuICogQGF1dGhvciBGYWJpYW4gVm9nZWxzdGVsbGVyIDxmYWJpYW5AZXRoZXJldW0ub3JnPlxuICogQGRhdGUgMjAxN1xuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBnaXZlblByb3ZpZGVyID0gbnVsbDtcbi8vIEFERCBHSVZFTiBQUk9WSURFUlxuLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xudmFyIGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JyA/IGdsb2JhbFRoaXMgOiB1bmRlZmluZWQ7XG5pZiAoIWdsb2JhbCkge1xuICAgIHRyeSB7XG4gICAgICAgIGdsb2JhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGdsb2JhbCA9IHNlbGY7XG4gICAgfVxufVxuLy8gRUlQLTExOTM6IHdpbmRvdy5ldGhlcmV1bVxuaWYgKHR5cGVvZiBnbG9iYWwuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2l2ZW5Qcm92aWRlciA9IGdsb2JhbC5ldGhlcmV1bTtcbiAgICAvLyBMZWdhY3kgd2ViMy5jdXJyZW50UHJvdmlkZXJcbn1cbmVsc2UgaWYgKHR5cGVvZiBnbG9iYWwud2ViMyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyKSB7XG4gICAgaWYgKGdsb2JhbC53ZWIzLmN1cnJlbnRQcm92aWRlci5zZW5kQXN5bmMpIHtcbiAgICAgICAgZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyLnNlbmQgPSBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIuc2VuZEFzeW5jO1xuICAgICAgICBkZWxldGUgZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyLnNlbmRBc3luYztcbiAgICB9XG4gICAgLy8gaWYgY29ubmVjdGlvbiBpcyAnaXBjUHJvdmlkZXJXcmFwcGVyJywgYWRkIHN1YnNjcmlwdGlvbiBzdXBwb3J0XG4gICAgaWYgKCFnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIub24gJiZcbiAgICAgICAgZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyLmNvbm5lY3Rpb24gJiZcbiAgICAgICAgZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyLmNvbm5lY3Rpb24uY29uc3RydWN0b3IubmFtZSA9PT0gJ2lwY1Byb3ZpZGVyV3JhcHBlcicpIHtcbiAgICAgICAgZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyLm9uID0gZnVuY3Rpb24gKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHNlY29uZCBwYXJhbWV0ZXIgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGF0YSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbignZGF0YScsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobmV3IEVycm9yKCdDb3VsZG5cXCd0IHBhcnNlIHJlc3BvbnNlIGRhdGEnICsgZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5pZCAmJiByZXN1bHQubWV0aG9kLmluZGV4T2YoJ19zdWJzY3JpcHRpb24nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9uKHR5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGdpdmVuUHJvdmlkZXIgPSBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXI7XG59XG4vKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xubW9kdWxlLmV4cG9ydHMgPSBnaXZlblByb3ZpZGVyO1xuIiwidmFyIGlzTm9kZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgPyBwcm9jZXNzIDogMCkgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcbnZhciBpc1JOID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZSc7XG52YXIgX2J0b2EgPSBudWxsO1xudmFyIGhlbHBlcnMgPSBudWxsO1xuaWYgKGlzTm9kZSB8fCBpc1JOKSB7XG4gICAgX2J0b2EgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShzdHIpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB9O1xuICAgIHZhciB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbiAgICBpZiAodXJsLlVSTCkge1xuICAgICAgICAvLyBVc2UgdGhlIG5ldyBOb2RlIDYrIEFQSSBmb3IgcGFyc2luZyBVUkxzIHRoYXQgc3VwcG9ydHMgdXNlcm5hbWUvcGFzc3dvcmRcbiAgICAgICAgdmFyIG5ld1VSTCA9IHVybC5VUkw7XG4gICAgICAgIGhlbHBlcnMgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IG5ld1VSTCh1cmwpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gV2ViMyBzdXBwb3J0cyBOb2RlLmpzIDUsIHNvIGZhbGwgYmFjayB0byB0aGUgbGVnYWN5IFVSTCBBUEkgaWYgbmVjZXNzYXJ5XG4gICAgICAgIGhlbHBlcnMgPSByZXF1aXJlKCd1cmwnKS5wYXJzZTtcbiAgICB9XG59XG5lbHNlIHtcbiAgICBfYnRvYSA9IGJ0b2EuYmluZCh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcgPyBnbG9iYWxUaGlzIDogc2VsZik7XG4gICAgaGVscGVycyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkwodXJsKTtcbiAgICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcGFyc2VVUkw6IGhlbHBlcnMsXG4gICAgYnRvYTogX2J0b2Fcbn07XG4iLCIvKlxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHdlYjMuanMuXG5cbiB3ZWIzLmpzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiB3ZWIzLmpzIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG5cbiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiBhbG9uZyB3aXRoIHdlYjMuanMuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbi8qKlxuICogQGZpbGUgZ2l2ZW5Qcm92aWRlci5qc1xuICogQGF1dGhvciBGYWJpYW4gVm9nZWxzdGVsbGVyIDxmYWJpYW5AZXRoZXJldW0ub3JnPlxuICogQGRhdGUgMjAxN1xuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBnaXZlblByb3ZpZGVyID0gbnVsbDtcbi8vIEFERCBHSVZFTiBQUk9WSURFUlxuLyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xudmFyIGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JyA/IGdsb2JhbFRoaXMgOiB1bmRlZmluZWQ7XG5pZiAoIWdsb2JhbCkge1xuICAgIHRyeSB7XG4gICAgICAgIGdsb2JhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGdsb2JhbCA9IHNlbGY7XG4gICAgfVxufVxuLy8gRUlQLTExOTM6IHdpbmRvdy5ldGhlcmV1bVxuaWYgKHR5cGVvZiBnbG9iYWwuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2l2ZW5Qcm92aWRlciA9IGdsb2JhbC5ldGhlcmV1bTtcbiAgICAvLyBMZWdhY3kgd2ViMy5jdXJyZW50UHJvdmlkZXJcbn1cbmVsc2UgaWYgKHR5cGVvZiBnbG9iYWwud2ViMyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyKSB7XG4gICAgaWYgKGdsb2JhbC53ZWIzLmN1cnJlbnRQcm92aWRlci5zZW5kQXN5bmMpIHtcbiAgICAgICAgZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyLnNlbmQgPSBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIuc2VuZEFzeW5jO1xuICAgICAgICBkZWxldGUgZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyLnNlbmRBc3luYztcbiAgICB9XG4gICAgLy8gaWYgY29ubmVjdGlvbiBpcyAnaXBjUHJvdmlkZXJXcmFwcGVyJywgYWRkIHN1YnNjcmlwdGlvbiBzdXBwb3J0XG4gICAgaWYgKCFnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXIub24gJiZcbiAgICAgICAgZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyLmNvbm5lY3Rpb24gJiZcbiAgICAgICAgZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyLmNvbm5lY3Rpb24uY29uc3RydWN0b3IubmFtZSA9PT0gJ2lwY1Byb3ZpZGVyV3JhcHBlcicpIHtcbiAgICAgICAgZ2xvYmFsLndlYjMuY3VycmVudFByb3ZpZGVyLm9uID0gZnVuY3Rpb24gKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHNlY29uZCBwYXJhbWV0ZXIgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGF0YSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5vbignZGF0YScsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobmV3IEVycm9yKCdDb3VsZG5cXCd0IHBhcnNlIHJlc3BvbnNlIGRhdGEnICsgZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5pZCAmJiByZXN1bHQubWV0aG9kLmluZGV4T2YoJ19zdWJzY3JpcHRpb24nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLm9uKHR5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGdpdmVuUHJvdmlkZXIgPSBnbG9iYWwud2ViMy5jdXJyZW50UHJvdmlkZXI7XG59XG4vKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xubW9kdWxlLmV4cG9ydHMgPSBnaXZlblByb3ZpZGVyO1xuIiwidmFyIGlzTm9kZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgPyBwcm9jZXNzIDogMCkgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcbnZhciBpc1JOID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZSc7XG52YXIgX2J0b2EgPSBudWxsO1xudmFyIGhlbHBlcnMgPSBudWxsO1xuaWYgKGlzTm9kZSB8fCBpc1JOKSB7XG4gICAgX2J0b2EgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShzdHIpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB9O1xuICAgIHZhciB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbiAgICBpZiAodXJsLlVSTCkge1xuICAgICAgICAvLyBVc2UgdGhlIG5ldyBOb2RlIDYrIEFQSSBmb3IgcGFyc2luZyBVUkxzIHRoYXQgc3VwcG9ydHMgdXNlcm5hbWUvcGFzc3dvcmRcbiAgICAgICAgdmFyIG5ld1VSTCA9IHVybC5VUkw7XG4gICAgICAgIGhlbHBlcnMgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IG5ld1VSTCh1cmwpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gV2ViMyBzdXBwb3J0cyBOb2RlLmpzIDUsIHNvIGZhbGwgYmFjayB0byB0aGUgbGVnYWN5IFVSTCBBUEkgaWYgbmVjZXNzYXJ5XG4gICAgICAgIGhlbHBlcnMgPSByZXF1aXJlKCd1cmwnKS5wYXJzZTtcbiAgICB9XG59XG5lbHNlIHtcbiAgICBfYnRvYSA9IGJ0b2EuYmluZCh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcgPyBnbG9iYWxUaGlzIDogc2VsZik7XG4gICAgaGVscGVycyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkwodXJsKTtcbiAgICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcGFyc2VVUkw6IGhlbHBlcnMsXG4gICAgYnRvYTogX2J0b2Fcbn07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNDE1ZTJlMDJjYTRjNzMyYTE5YmRcIjsgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==