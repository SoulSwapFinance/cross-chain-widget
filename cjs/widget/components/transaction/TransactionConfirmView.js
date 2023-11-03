"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionConfirmView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const cg_1 = require("react-icons/cg");
const animations_1 = require("../../assets/animations");
const TransactionStateContent_1 = require("./TransactionStateContent");
const TransactionConfirmView = () => {
    return ((0, jsx_runtime_1.jsx)(TransactionStateContent_1.TransactionStateContent, Object.assign({ animReplacement: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "tw-animate-spin" }, { children: (0, jsx_runtime_1.jsx)(cg_1.CgSpinnerTwo, { size: 60 }) })), animation: animations_1.transactionPendingAnimation, title: "Confirm in wallet" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Awaiting confirmation in your wallet with a signature." }) })));
};
exports.TransactionConfirmView = TransactionConfirmView;
//# sourceMappingURL=TransactionConfirmView.js.map