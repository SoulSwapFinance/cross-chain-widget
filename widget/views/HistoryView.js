import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { useMemo } from "react";
import { useAccount } from "wagmi";
import { ConnectWalletButton } from "../components/buttons/ConnectWalletButton";
import { TransactionHistoryListItem } from "../components/transaction/TransactionHistoryListItem";
import { usePersistStore, useSquidStore } from "../store/useSquidStore";
export const HistoryView = () => {
    var _a, _b, _c, _d, _e, _f, _g;
    const { transactionsHistory } = usePersistStore();
    const { config } = useSquidStore();
    const { address, connector: isConnected } = useAccount();
    const walletFilteredTransactions = useMemo(() => { var _a; return (_a = transactionsHistory === null || transactionsHistory === void 0 ? void 0 : transactionsHistory.filter((th) => th.fromAddress === address, [])) !== null && _a !== void 0 ? _a : []; }, [address, transactionsHistory]);
    // Handle user not connected on EVM
    if (!isConnected) {
        return (_jsxs("span", Object.assign({ className: clsx("items-start tw-flex tw-h-full tw-flex-1 tw-flex-row tw-justify-between tw-p-5 tw-py-6", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && "tw-bg-opacity-70") }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-gap-1" }, { children: [_jsx("span", Object.assign({ className: "tw-text-lg" }, { children: "No wallet connected" })), _jsx("span", Object.assign({ className: "tw-text-sm tw-text-neutral-content" }, { children: "Your transaction history will appear here when you connect a wallet." }))] })), _jsx(ConnectWalletButton, { direction: "from" })] })));
    }
    // User is connected
    return (_jsxs("div", Object.assign({ className: clsx("tw-flex tw-h-full tw-flex-1 tw-flex-col tw-gap-2 tw-overflow-hidden", ((_d = (_c = config.style) === null || _c === void 0 ? void 0 : _c.advanced) === null || _d === void 0 ? void 0 : _d.transparentWidget) && "tw-bg-opacity-70") }, { children: [_jsxs("span", Object.assign({ className: "tw-px-5" }, { children: [_jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-justify-between" }, { children: _jsx("span", Object.assign({ className: "tw-text-base tw-font-semibold" }, { children: "Recent transactions" })) })), ((_e = walletFilteredTransactions === null || walletFilteredTransactions === void 0 ? void 0 : walletFilteredTransactions.length) !== null && _e !== void 0 ? _e : 0) === 0 && (_jsx("span", Object.assign({ style: { paddingTop: 20, paddingBottom: 20 }, className: "tw-flex tw-text-base" }, { children: "No transaction found" })))] })), ((_f = walletFilteredTransactions === null || walletFilteredTransactions === void 0 ? void 0 : walletFilteredTransactions.length) !== null && _f !== void 0 ? _f : 0) > 0 && (_jsx("ul", Object.assign({ className: "tw-flex tw-h-full tw-flex-col tw-flex-nowrap tw-overflow-auto tw-pb-[20px]" }, { children: (_g = walletFilteredTransactions === null || walletFilteredTransactions === void 0 ? void 0 : walletFilteredTransactions.sort((a, b) => { var _a, _b; return ((_a = b === null || b === void 0 ? void 0 : b.timestamp) !== null && _a !== void 0 ? _a : 0) - ((_b = a === null || a === void 0 ? void 0 : a.timestamp) !== null && _b !== void 0 ? _b : 0); })) === null || _g === void 0 ? void 0 : _g.map((transaction) => (_jsx(TransactionHistoryListItem, { transaction: transaction }, `transaction-${transaction.transactionId}`))) })))] })));
};
//# sourceMappingURL=HistoryView.js.map