"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalFees = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useEstimate_1 = require("../../hooks/useEstimate");
const LoadingSkeleton_1 = require("../LoadingSkeleton");
const NumericValue_1 = require("../NumericValue");
const TotalFees = ({ label = "Total fees", isFetching = false, }) => {
    const { firstFeeCost, totalWithRefundEstimate } = (0, useEstimate_1.useEstimate)();
    const value = () => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { value: totalWithRefundEstimate.totalAmount.toString(), significantFigures: 4, currency: {
                    symbol: firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.symbol,
                    symbolPosition: "after",
                } }), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-text-neutral-content" }, { children: ["(", (0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { value: totalWithRefundEstimate.totalAmountUSD.toString(), currency: {
                            symbol: "$",
                            symbolPosition: "before",
                        } }), ")"] }))] }));
    return ((0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: (0, jsx_runtime_1.jsx)("span", { children: label }) })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-1" }, { children: isFetching ? (0, jsx_runtime_1.jsx)(LoadingSkeleton_1.LoadingSkeleton, {}) : value() }))] })));
};
exports.TotalFees = TotalFees;
//# sourceMappingURL=TotalFees.js.map