"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUnknownWalletView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ContactSupportButton_1 = require("../buttons/ContactSupportButton");
const TransactionUnknownWalletView = () => {
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-text-center" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Squid encountered an error which caused your transaction to fail. Please check your wallet to see more details about the error and" }), (0, jsx_runtime_1.jsx)(ContactSupportButton_1.ContactSupportButton, {})] })));
};
exports.TransactionUnknownWalletView = TransactionUnknownWalletView;
//# sourceMappingURL=TransactionUnknownWalletView.js.map