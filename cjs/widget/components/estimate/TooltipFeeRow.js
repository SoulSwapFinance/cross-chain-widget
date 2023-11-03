"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipFeeRow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const NumericValue_1 = require("../NumericValue");
const TooltipFeeRow = ({ row }) => {
    var _a;
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-justify-between tw-gap-6" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: row.title }), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-1" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-1" }, { children: [row.approximateFee && (0, jsx_runtime_1.jsx)("span", { children: "~" }), (0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { value: row.amount, significantFigures: 4, currency: {
                                    symbol: (_a = row.token) === null || _a === void 0 ? void 0 : _a.symbol,
                                    symbolPosition: "after",
                                } })] })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-text-neutral-content" }, { children: (0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { value: row.amountUSD, currency: {
                                symbol: "$",
                                symbolPosition: "before",
                            } }) }))] }))] })));
};
exports.TooltipFeeRow = TooltipFeeRow;
//# sourceMappingURL=TooltipFeeRow.js.map