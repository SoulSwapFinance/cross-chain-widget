import { format, formatDistance } from "date-fns";
import fromUnixTime from "date-fns/fromUnixTime";
import { TransactionType } from "../../core/types/transaction";
import { usePersistStore } from "../../store/useSquidStore";
/**
 * Helper to find the desired transaction history in array
 * @param transactionID
 * @returns
 */
export const findHistoryItem = (transactionID) => {
    var _a;
    return (_a = usePersistStore
        .getState()
        .transactionsHistory) === null || _a === void 0 ? void 0 : _a.find((th) => th.transactionId === transactionID);
};
/**
 * Will return the same object but with the desired transaction history
 * Status changed
 * @param transactionID
 * @param status
 * @param transactionsHistory
 * @param statusResponse
 * @returns
 */
export const updateTransactionHistoryStatus = (transactionID, status, transactionsHistory, statusResponse) => {
    var _a;
    return ((_a = transactionsHistory === null || transactionsHistory === void 0 ? void 0 : transactionsHistory.map((th) => {
        const sr = statusResponse !== undefined ? statusResponse : th.statusResponse;
        if (th.transactionId === transactionID && th.status !== status) {
            return Object.assign(Object.assign({}, th), { status, statusResponse: sr });
        }
        return Object.assign({}, th);
    })) !== null && _a !== void 0 ? _a : []);
};
export const replaceTransactionAtNonce = (nonce, fromAddress, transactionsHistory, TransactionHistoryStore) => {
    const newTransactionsHistory = transactionsHistory !== null && transactionsHistory !== void 0 ? transactionsHistory : [];
    // Find the transaction with the same nonce and from address
    const transactionIndex = transactionsHistory === null || transactionsHistory === void 0 ? void 0 : transactionsHistory.findIndex((th) => th.nonce === nonce && th.fromAddress === fromAddress);
    // If found, replace it with the new transaction
    if (transactionIndex !== undefined && transactionIndex !== -1) {
        newTransactionsHistory[transactionIndex] = TransactionHistoryStore;
    }
    return newTransactionsHistory;
};
export const formatTransactionHistoryDate = (transaction) => {
    return (transaction === null || transaction === void 0 ? void 0 : transaction.timestamp)
        ? {
            month: format(fromUnixTime(+transaction.timestamp / 1000), "MMM"),
            day: format(fromUnixTime(+transaction.timestamp / 1000), "dd"),
        }
        : undefined;
};
export const getAxelarExplorerTxUrl = (urlPrefix, routeType, txID) => {
    var _a;
    if (!urlPrefix) {
        return undefined;
    }
    const txType = (_a = routeType) !== null && _a !== void 0 ? _a : TransactionType.BRIDGE;
    if (txType === TransactionType.CALL_BRIDGE ||
        txType === TransactionType.BRIDGE) {
        return `${urlPrefix}transfer/${txID}`;
    }
    return `${urlPrefix}gmp/${txID}`;
};
export const getExplorerTxUrl = (chain, txID) => {
    const transactionUrl = (chain === null || chain === void 0 ? void 0 : chain.blockExplorerUrls)
        ? `${chain.blockExplorerUrls[0]}tx/${txID}`
        : "";
    return transactionUrl;
};
export const formatSeconds = (seconds, secondsTemplate = " seconds", minutesTemplate = " minutes") => {
    let duration = "";
    if (seconds < 60) {
        duration = `${seconds.toString()}${secondsTemplate}`;
    }
    else {
        duration = formatDistance(0, seconds * 1000, { includeSeconds: true });
    }
    return duration
        .replace(" minutes", minutesTemplate)
        .replace(" minute", minutesTemplate);
};
//# sourceMappingURL=transactionService.js.map