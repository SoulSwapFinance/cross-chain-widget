"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("ethers/lib/utils");
const im_1 = require("react-icons/im");
const NumericValue_1 = require("../NumericValue");
const TransactionHeader = ({ axelarUrl, toToken, fromAmount, fromToken, fromChain, toChain, estimatedRouteDuration, toAmountMin, displayTimeEstimate = true, }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "tw-mt-3 tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-3 tw-text-base" }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-2" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-text-s tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { value: (0, utils_1.formatUnits)(fromAmount !== null && fromAmount !== void 0 ? fromAmount : "0", fromToken === null || fromToken === void 0 ? void 0 : fromToken.decimals), significantFigures: 4, currency: {
                                symbol: fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol,
                                symbolPosition: "after",
                            } }), (0, jsx_runtime_1.jsx)(im_1.ImArrowRight2, {}), (0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { value: toAmountMin, significantFigures: 4, currency: {
                                symbol: toToken === null || toToken === void 0 ? void 0 : toToken.symbol,
                                symbolPosition: "after",
                            } })] })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-center" }, { children: [fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName, " to ", toChain === null || toChain === void 0 ? void 0 : toChain.networkName] }))] })) })));
};
exports.TransactionHeader = TransactionHeader;
//# sourceMappingURL=TransactionHeader.js.map