"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRateRow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useEstimate_1 = require("../../hooks/useEstimate");
const useSwap_1 = require("../../hooks/useSwap");
const LoadingSkeleton_1 = require("../LoadingSkeleton");
const NumericValue_1 = require("../NumericValue");
const ExchangeRateRow = ({ isLoading }) => {
    const { fromToken, toToken } = (0, useSwap_1.useSwap)();
    const { toAmount, exchangeRate } = (0, useEstimate_1.useEstimate)();
    return ((0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-justify-between" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Exchange rate" }), isLoading ? ((0, jsx_runtime_1.jsx)(LoadingSkeleton_1.LoadingSkeleton, { width: 100 })) : ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsxs)("span", { children: [+toAmount > 0 ? "1" : "0", " ", fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol] }), (0, jsx_runtime_1.jsx)("span", { children: "=" }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { value: exchangeRate, significantFigures: 4, currency: {
                                    symbol: toToken === null || toToken === void 0 ? void 0 : toToken.symbol,
                                    symbolPosition: "after",
                                } }), " "] })] })))] })));
};
exports.ExchangeRateRow = ExchangeRateRow;
//# sourceMappingURL=ExchangeRateRow.js.map