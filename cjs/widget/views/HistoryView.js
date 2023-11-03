"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const ConnectWalletButton_1 = require("../components/buttons/ConnectWalletButton");
const TransactionHistoryListItem_1 = require("../components/transaction/TransactionHistoryListItem");
const useSquidStore_1 = require("../store/useSquidStore");
const HistoryView = () => {
    var _a, _b, _c, _d, _e, _f, _g;
    const { transactionsHistory } = (0, useSquidStore_1.usePersistStore)();
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const { address, connector: isConnected } = (0, wagmi_1.useAccount)();
    const walletFilteredTransactions = (0, react_1.useMemo)(() => { var _a; return (_a = transactionsHistory === null || transactionsHistory === void 0 ? void 0 : transactionsHistory.filter((th) => th.fromAddress === address, [])) !== null && _a !== void 0 ? _a : []; }, [address, transactionsHistory]);
    // Handle user not connected on EVM
    if (!isConnected) {
        return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: (0, clsx_1.default)("items-start tw-flex tw-h-full tw-flex-1 tw-flex-row tw-justify-between tw-p-5 tw-py-6", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && "tw-bg-opacity-70") }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-lg" }, { children: "No wallet connected" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-sm tw-text-neutral-content" }, { children: "Your transaction history will appear here when you connect a wallet." }))] })), (0, jsx_runtime_1.jsx)(ConnectWalletButton_1.ConnectWalletButton, { direction: "from" })] })));
    }
    // User is connected
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, clsx_1.default)("tw-flex tw-h-full tw-flex-1 tw-flex-col tw-gap-2 tw-overflow-hidden", ((_d = (_c = config.style) === null || _c === void 0 ? void 0 : _c.advanced) === null || _d === void 0 ? void 0 : _d.transparentWidget) && "tw-bg-opacity-70") }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-px-5" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-justify-between" }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-base tw-font-semibold" }, { children: "Recent transactions" })) })), ((_e = walletFilteredTransactions === null || walletFilteredTransactions === void 0 ? void 0 : walletFilteredTransactions.length) !== null && _e !== void 0 ? _e : 0) === 0 && ((0, jsx_runtime_1.jsx)("span", Object.assign({ style: { paddingTop: 20, paddingBottom: 20 }, className: "tw-flex tw-text-base" }, { children: "No transaction found" })))] })), ((_f = walletFilteredTransactions === null || walletFilteredTransactions === void 0 ? void 0 : walletFilteredTransactions.length) !== null && _f !== void 0 ? _f : 0) > 0 && ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "tw-flex tw-h-full tw-flex-col tw-flex-nowrap tw-overflow-auto tw-pb-[20px]" }, { children: (_g = walletFilteredTransactions === null || walletFilteredTransactions === void 0 ? void 0 : walletFilteredTransactions.sort((a, b) => { var _a, _b; return ((_a = b === null || b === void 0 ? void 0 : b.timestamp) !== null && _a !== void 0 ? _a : 0) - ((_b = a === null || a === void 0 ? void 0 : a.timestamp) !== null && _b !== void 0 ? _b : 0); })) === null || _g === void 0 ? void 0 : _g.map((transaction) => ((0, jsx_runtime_1.jsx)(TransactionHistoryListItem_1.TransactionHistoryListItem, { transaction: transaction }, `transaction-${transaction.transactionId}`))) })))] })));
};
exports.HistoryView = HistoryView;
//# sourceMappingURL=HistoryView.js.map