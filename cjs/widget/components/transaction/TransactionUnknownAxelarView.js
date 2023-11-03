"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUnknownAxelarView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useSquidStore_1 = require("../../store/useSquidStore");
const ContactSupportButton_1 = require("../buttons/ContactSupportButton");
const TransactionUnknownAxelarView = () => {
    const { currentTransaction } = (0, useSquidStore_1.useSquidStore)();
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-2" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ style: {
                    lineHeight: "1.5",
                } }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Squid encountered an error that caused your transaction to fail." }), " ", (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "tw-cursor-pointer tw-text-base-content tw-underline", target: "_blank", href: currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.axelarUrl, rel: "noreferrer" }, { children: "Copy your Axelarscan transaction link" })), " ", (0, jsx_runtime_1.jsx)("span", { children: "and" })] })), (0, jsx_runtime_1.jsx)(ContactSupportButton_1.ContactSupportButton, {})] })));
};
exports.TransactionUnknownAxelarView = TransactionUnknownAxelarView;
//# sourceMappingURL=TransactionUnknownAxelarView.js.map