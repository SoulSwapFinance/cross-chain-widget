"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionWarningView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const bs_1 = require("react-icons/bs");
const animations_1 = require("../../assets/animations");
const useTransaction_1 = require("../../hooks/useTransaction");
const TransactionStateContent_1 = require("./TransactionStateContent");
const TransactionWarningView = () => {
    var _a;
    const { currentTransaction } = (0, useTransaction_1.useTransaction)();
    return ((0, jsx_runtime_1.jsx)(TransactionStateContent_1.TransactionStateContent, Object.assign({ animReplacement: (0, jsx_runtime_1.jsx)(bs_1.BsFillXCircleFill, { size: 60 }), animation: animations_1.transactionPendingAnimation, title: "No confirmation" }, { children: (0, jsx_runtime_1.jsx)("span", { children: (_a = currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.error) === null || _a === void 0 ? void 0 : _a.message }) })));
};
exports.TransactionWarningView = TransactionWarningView;
//# sourceMappingURL=TransactionWarningView.js.map