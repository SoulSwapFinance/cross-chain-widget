"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRejectedAnimation = exports.transactionErrorPauseAnimation = exports.transactionHalfSuccessAnimation = exports.transactionSuccessAnimation = exports.transactionFailureAnimation = exports.transactionProcessinganimation = exports.transactionPendingAnimation = exports.loadingDots = exports.checkMarkError = exports.checkMarkSuccess = exports.checkMarkInfo = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const CheckMarkInfo = __importStar(require("./check-mark-i.json"));
const CheckMarkSuccess = __importStar(require("./check-mark-v.json"));
const CheckMarkError = __importStar(require("./check-mark-x.json"));
const LoadingDots = __importStar(require("./loading-dots.json"));
const transaction_error_pause_json_1 = __importDefault(require("./transaction_error_pause.json"));
const transaction_failure_json_1 = __importDefault(require("./transaction_failure.json"));
const transaction_half_success_json_1 = __importDefault(require("./transaction_half_success.json"));
const transaction_pending_json_1 = __importDefault(require("./transaction_pending.json"));
const transaction_processing_json_1 = __importDefault(require("./transaction_processing.json"));
const transaction_rejected_json_1 = __importDefault(require("./transaction_rejected.json"));
const transaction_success_json_1 = __importDefault(require("./transaction_success.json"));
exports.checkMarkInfo = CheckMarkInfo;
exports.checkMarkSuccess = CheckMarkSuccess;
exports.checkMarkError = CheckMarkError;
exports.loadingDots = LoadingDots;
exports.transactionPendingAnimation = transaction_pending_json_1.default;
exports.transactionProcessinganimation = transaction_processing_json_1.default;
exports.transactionFailureAnimation = transaction_failure_json_1.default;
exports.transactionSuccessAnimation = transaction_success_json_1.default;
exports.transactionHalfSuccessAnimation = transaction_half_success_json_1.default;
exports.transactionErrorPauseAnimation = transaction_error_pause_json_1.default;
exports.transactionRejectedAnimation = transaction_rejected_json_1.default;
//# sourceMappingURL=index.js.map