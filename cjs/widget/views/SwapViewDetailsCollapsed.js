"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapViewDetailsCollapsed = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ExpressToggle_1 = require("../components/toggles/ExpressToggle");
const GasToggle_1 = require("../components/toggles/GasToggle");
const TransactionFooter_1 = require("../components/transaction/TransactionFooter");
const useEstimate_1 = require("../hooks/useEstimate");
const useTransaction_1 = require("../hooks/useTransaction");
const SwapViewDetailsCollapsed = ({ isHighlightedExpress, isHighlightedGas, }) => {
    const { toAmount, exchangeRate } = (0, useEstimate_1.useEstimate)();
    const { squidRoute, fromToken, toToken, fromChain } = (0, useTransaction_1.useTransaction)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ id: "squid-header-title", className: "tw-text-xl tw-font-semibold tw-text-base-content", style: {
                    position: "relative",
                    top: "-20px",
                    width: "100%",
                    textAlign: "center",
                    marginBottom: "-20px",
                    pointerEvents: "none",
                } }, { children: "Details" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-my-3 tw-flex tw-w-full tw-flex-row tw-items-center tw-text-base tw-font-semibold" }, { children: "Controls" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "tw-flex tw-h-full tw-flex-1 tw-flex-col tw-gap-3 tw-text-base" }, { children: [(0, jsx_runtime_1.jsx)(ExpressToggle_1.ExpressToggle, { allowTransparency: false, fadeOnLoad: isHighlightedExpress }), (0, jsx_runtime_1.jsx)(GasToggle_1.GasToggle, { allowTransparency: false, fadeOnLoad: isHighlightedGas })] })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-bg-neutral" }, { children: (0, jsx_runtime_1.jsx)(TransactionFooter_1.TransactionFooter, { squidRoute: squidRoute.data, toAmount: toAmount, toToken: toToken, fromToken: fromToken, exchangeRate: exchangeRate, fromChain: fromChain }) }))] }));
};
exports.SwapViewDetailsCollapsed = SwapViewDetailsCollapsed;
//# sourceMappingURL=SwapViewDetailsCollapsed.js.map