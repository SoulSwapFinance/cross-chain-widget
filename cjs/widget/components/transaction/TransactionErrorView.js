"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionErrorView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const bs_1 = require("react-icons/bs");
const animations_1 = require("../../assets/animations");
const error_1 = require("../../core/types/error");
const useSquidStore_1 = require("../../store/useSquidStore");
const ContactSupportButton_1 = require("../buttons/ContactSupportButton");
const TransactionStateContent_1 = require("./TransactionStateContent");
const TransactionUnknownAxelarView_1 = require("./TransactionUnknownAxelarView");
const TransactionUnknownWalletView_1 = require("./TransactionUnknownWalletView");
const TransactionErrorView = ({ state, }) => {
    var _a, _b, _c;
    const { currentTransaction } = (0, useSquidStore_1.useSquidStore)();
    return ((0, jsx_runtime_1.jsx)(TransactionStateContent_1.TransactionStateContent, Object.assign({ animReplacement: (0, jsx_runtime_1.jsx)(bs_1.BsFillXCircleFill, { size: 60 }), animation: state === "rejected"
            ? animations_1.transactionRejectedAnimation
            : animations_1.transactionFailureAnimation, title: state === "rejected" ? "No confirmation" : "Swap failed" }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-center" }, { children: (currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.status) === "error" ? (((_a = currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.error) === null || _a === void 0 ? void 0 : _a.type) ===
                error_1.TransactionErrorType.CALL_EXCEPTION ? ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-4 tw-text-center" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Swap failed on the source chain." }), (0, jsx_runtime_1.jsx)(ContactSupportButton_1.ContactSupportButton, {})] }))) : ((0, jsx_runtime_1.jsx)("span", { children: ((_b = currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.error) === null || _b === void 0 ? void 0 : _b.message) ? ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-4 tw-text-center" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: (_c = currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.error) === null || _c === void 0 ? void 0 : _c.message }), state !== "rejected" && (0, jsx_runtime_1.jsx)(ContactSupportButton_1.ContactSupportButton, {})] }))) : ((0, jsx_runtime_1.jsx)(TransactionUnknownWalletView_1.TransactionUnknownWalletView, {})) }))) : ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(TransactionUnknownAxelarView_1.TransactionUnknownAxelarView, {}) })) })) })));
};
exports.TransactionErrorView = TransactionErrorView;
//# sourceMappingURL=TransactionErrorView.js.map