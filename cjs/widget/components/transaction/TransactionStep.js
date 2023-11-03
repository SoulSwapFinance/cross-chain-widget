"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStep = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ExplorerLink_1 = require("./ExplorerLink");
const TransactionStatus_1 = require("./TransactionStatus");
const TransactionStep = ({ label, transactionStatus, link, transaction, }) => {
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: label }), link && link.explorerUrl && ((0, jsx_runtime_1.jsx)(ExplorerLink_1.ExplorerLink, { explorerUrl: link.explorerUrl, externalExplorerImageUrl: link.externalExplorerImageUrl }))] })), (0, jsx_runtime_1.jsx)(TransactionStatus_1.TransactionStatus, { transaction: transaction, status: transactionStatus })] })));
};
exports.TransactionStep = TransactionStep;
//# sourceMappingURL=TransactionStep.js.map