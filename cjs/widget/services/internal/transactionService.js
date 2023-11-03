"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSeconds = exports.getExplorerTxUrl = exports.getAxelarExplorerTxUrl = exports.formatTransactionHistoryDate = exports.replaceTransactionAtNonce = exports.updateTransactionHistoryStatus = exports.findHistoryItem = void 0;
const date_fns_1 = require("date-fns");
const fromUnixTime_1 = __importDefault(require("date-fns/fromUnixTime"));
const transaction_1 = require("../../core/types/transaction");
const useSquidStore_1 = require("../../store/useSquidStore");
/**
 * Helper to find the desired transaction history in array
 * @param transactionID
 * @returns
 */
const findHistoryItem = (transactionID) => {
    var _a;
    return (_a = useSquidStore_1.usePersistStore
        .getState()
        .transactionsHistory) === null || _a === void 0 ? void 0 : _a.find((th) => th.transactionId === transactionID);
};
exports.findHistoryItem = findHistoryItem;
/**
 * Will return the same object but with the desired transaction history
 * Status changed
 * @param transactionID
 * @param status
 * @param transactionsHistory
 * @param statusResponse
 * @returns
 */
const updateTransactionHistoryStatus = (transactionID, status, transactionsHistory, statusResponse) => {
    var _a;
    return ((_a = transactionsHistory === null || transactionsHistory === void 0 ? void 0 : transactionsHistory.map((th) => {
        const sr = statusResponse !== undefined ? statusResponse : th.statusResponse;
        if (th.transactionId === transactionID && th.status !== status) {
            return Object.assign(Object.assign({}, th), { status, statusResponse: sr });
        }
        return Object.assign({}, th);
    })) !== null && _a !== void 0 ? _a : []);
};
exports.updateTransactionHistoryStatus = updateTransactionHistoryStatus;
const replaceTransactionAtNonce = (nonce, fromAddress, transactionsHistory, TransactionHistoryStore) => {
    const newTransactionsHistory = transactionsHistory !== null && transactionsHistory !== void 0 ? transactionsHistory : [];
    // Find the transaction with the same nonce and from address
    const transactionIndex = transactionsHistory === null || transactionsHistory === void 0 ? void 0 : transactionsHistory.findIndex((th) => th.nonce === nonce && th.fromAddress === fromAddress);
    // If found, replace it with the new transaction
    if (transactionIndex !== undefined && transactionIndex !== -1) {
        newTransactionsHistory[transactionIndex] = TransactionHistoryStore;
    }
    return newTransactionsHistory;
};
exports.replaceTransactionAtNonce = replaceTransactionAtNonce;
const formatTransactionHistoryDate = (transaction) => {
    return (transaction === null || transaction === void 0 ? void 0 : transaction.timestamp)
        ? {
            month: (0, date_fns_1.format)((0, fromUnixTime_1.default)(+transaction.timestamp / 1000), "MMM"),
            day: (0, date_fns_1.format)((0, fromUnixTime_1.default)(+transaction.timestamp / 1000), "dd"),
        }
        : undefined;
};
exports.formatTransactionHistoryDate = formatTransactionHistoryDate;
const getAxelarExplorerTxUrl = (urlPrefix, routeType, txID) => {
    var _a;
    if (!urlPrefix) {
        return undefined;
    }
    const txType = (_a = routeType) !== null && _a !== void 0 ? _a : transaction_1.TransactionType.BRIDGE;
    if (txType === transaction_1.TransactionType.CALL_BRIDGE ||
        txType === transaction_1.TransactionType.BRIDGE) {
        return `${urlPrefix}transfer/${txID}`;
    }
    return `${urlPrefix}gmp/${txID}`;
};
exports.getAxelarExplorerTxUrl = getAxelarExplorerTxUrl;
const getExplorerTxUrl = (chain, txID) => {
    const transactionUrl = (chain === null || chain === void 0 ? void 0 : chain.blockExplorerUrls)
        ? `${chain.blockExplorerUrls[0]}tx/${txID}`
        : "";
    return transactionUrl;
};
exports.getExplorerTxUrl = getExplorerTxUrl;
const formatSeconds = (seconds, secondsTemplate = " seconds", minutesTemplate = " minutes") => {
    let duration = "";
    if (seconds < 60) {
        duration = `${seconds.toString()}${secondsTemplate}`;
    }
    else {
        duration = (0, date_fns_1.formatDistance)(0, seconds * 1000, { includeSeconds: true });
    }
    return duration
        .replace(" minutes", minutesTemplate)
        .replace(" minute", minutesTemplate);
};
exports.formatSeconds = formatSeconds;
//# sourceMappingURL=transactionService.js.map