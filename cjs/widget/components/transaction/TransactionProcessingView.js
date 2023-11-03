"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionProcessingView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const cg_1 = require("react-icons/cg");
const animations_1 = require("../../assets/animations");
const useSquidStore_1 = require("../../store/useSquidStore");
const Timer_1 = require("../Timer");
const TrackButton_1 = require("../buttons/TrackButton");
const ViewTransactionButton_1 = require("../buttons/ViewTransactionButton");
const TransactionStateContent_1 = require("./TransactionStateContent");
const TransactionProcessingView = ({ setIsCollapseBoxOpen }) => {
    const { currentTransaction } = (0, useSquidStore_1.useSquidStore)();
    return ((0, jsx_runtime_1.jsx)(TransactionStateContent_1.TransactionStateContent, Object.assign({ animation: animations_1.transactionProcessinganimation, animReplacement: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "tw-animate-spin" }, { children: (0, jsx_runtime_1.jsx)(cg_1.CgSpinnerTwo, { size: 60 }) })), title: "Processing" }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-2" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-1 tw-text-sm tw-font-semibold tw-text-base-content" }, { children: (0, jsx_runtime_1.jsx)(Timer_1.Timer, {}) })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-0.5 tw-text-center tw-text-sm" }, { children: ["Your tokens are on their way, feel free to leave this page", (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-mt-2 tw-flex tw-gap-3" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-justify-center" }, { children: (0, jsx_runtime_1.jsx)(TrackButton_1.TrackButton, { showEstimate: true, onClick: () => setIsCollapseBoxOpen(true) }) })), (0, jsx_runtime_1.jsx)(ViewTransactionButton_1.ViewTransactionButton, { url: currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.axelarUrl })] }))] }))] })) })));
};
exports.TransactionProcessingView = TransactionProcessingView;
//# sourceMappingURL=TransactionProcessingView.js.map