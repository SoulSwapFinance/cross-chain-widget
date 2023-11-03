"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquidStatusErrorType = exports.TransactionErrorType = void 0;
var TransactionErrorType;
(function (TransactionErrorType) {
    TransactionErrorType[TransactionErrorType["REJECTED_BY_USER"] = 0] = "REJECTED_BY_USER";
    TransactionErrorType[TransactionErrorType["CALL_EXCEPTION"] = 1] = "CALL_EXCEPTION";
    TransactionErrorType[TransactionErrorType["UNKNOWN"] = 2] = "UNKNOWN";
    TransactionErrorType[TransactionErrorType["WARNING"] = 3] = "WARNING";
})(TransactionErrorType = exports.TransactionErrorType || (exports.TransactionErrorType = {}));
var SquidStatusErrorType;
(function (SquidStatusErrorType) {
    SquidStatusErrorType["NotFoundError"] = "NotFoundError";
})(SquidStatusErrorType = exports.SquidStatusErrorType || (exports.SquidStatusErrorType = {}));
//# sourceMappingURL=error.js.map