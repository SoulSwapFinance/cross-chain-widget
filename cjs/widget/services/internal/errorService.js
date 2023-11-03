"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSquidRouteErrorMessage = exports.isStatusError = exports.isSwapRouteError = exports.getTransactionError = exports.isEvmTransactionError = exports.transactionErrorCode = void 0;
const RouteDefaultErrorMsg_1 = require("../../../widget/components/estimate/RouteDefaultErrorMsg");
const error_1 = require("../../core/types/error");
exports.transactionErrorCode = {
    ACTION_REJECTED: {
        type: error_1.TransactionErrorType.REJECTED_BY_USER,
        message: "Return to the swap page and try again.",
    },
    4001: {
        type: error_1.TransactionErrorType.REJECTED_BY_USER,
        message: "Return to the swap page and try again.",
    },
    CALL_EXCEPTION: {
        type: error_1.TransactionErrorType.CALL_EXCEPTION,
        message: "Swap failed on the source chain. Please let us know by submitting a ticket here.",
    },
    UNKNOWN: {
        type: error_1.TransactionErrorType.UNKNOWN,
        message: "The transaction could not be initiated.",
    },
};
/**
 * Check if the error is an EVM transaction error
 * Because Typescript supports casting but that's only for compilation time,
 * We need it at runtime since we're getting the error object from the wallet
 * @param error
 * @returns boolean
 */
const isEvmTransactionError = (error) => {
    return (error &&
        (typeof error.code === "string" ||
            typeof error.code === "number" ||
            typeof error.reason === "string" ||
            typeof error.action === "string"));
};
exports.isEvmTransactionError = isEvmTransactionError;
/**
 * Return the error from enum entry
 * @param error
 * @returns boolean
 */
const getTransactionError = (error) => {
    if ((0, exports.isEvmTransactionError)(error)) {
        const castError = error;
        const code = exports.transactionErrorCode[castError.code];
        if (code)
            return code;
        return exports.transactionErrorCode.UNKNOWN;
    }
    return exports.transactionErrorCode.UNKNOWN;
};
exports.getTransactionError = getTransactionError;
// --------------------
// SQUID ROUTE ERRORS
// --------------------
const squidRouteErrorMapping = {
    Unknown: (0, RouteDefaultErrorMsg_1.RouteDefaultErrorMsg)(),
    UnknownError: (0, RouteDefaultErrorMsg_1.RouteDefaultErrorMsg)(),
    SquidServiceError: (0, RouteDefaultErrorMsg_1.RouteDefaultErrorMsg)(),
};
/**
 * Check if the error is an Squid route error
 * Because Typescript supports casting but that's only for compilation time,
 * We need it at runtime since we're getting the error object from the wallet
 * @param error
 * @returns boolean
 */
const isSwapRouteError = (error) => {
    return (error &&
        (typeof error.code === "string" || typeof error.errorType === "string"));
};
exports.isSwapRouteError = isSwapRouteError;
const isStatusError = (error) => {
    return error && typeof error.errorType === "string";
};
exports.isStatusError = isStatusError;
/**
 * Tries to parse as SquidRouteError Type & Return the error from Record entries
 * @param error
 * @returns string error message
 */
const getSquidRouteErrorMessage = (error) => {
    var _a;
    if ((0, exports.isSwapRouteError)(error)) {
        // Try to get the error message from the error code
        const codeMsg = error.code || error.errorType
            ? squidRouteErrorMapping[((_a = error.code) !== null && _a !== void 0 ? _a : error.errorType)]
            : undefined;
        if (codeMsg)
            return codeMsg;
        // If there is no error code, try to get the error message from backend
        if (error.message)
            return error.message;
    }
    return squidRouteErrorMapping.Unknown;
};
exports.getSquidRouteErrorMessage = getSquidRouteErrorMessage;
//# sourceMappingURL=errorService.js.map