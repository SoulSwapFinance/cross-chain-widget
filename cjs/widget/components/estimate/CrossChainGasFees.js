"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossChainGasFees = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ethers_1 = require("ethers");
const utils_1 = require("ethers/lib/utils");
const externalLinks_1 = require("../../core/externalLinks");
const useEstimate_1 = require("../../hooks/useEstimate");
const InfoComponent_1 = require("../InfoComponent");
const LoadingSkeleton_1 = require("../LoadingSkeleton");
const NumericValue_1 = require("../NumericValue");
const TextLink_1 = require("../TextLink");
const TooltipFeeRow_1 = require("./TooltipFeeRow");
const CrossChainGasFees = ({ isLoading }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const { firstGasCost, firstFeeCost, expressSupportedForThisRoute, expressFeeCost, } = (0, useEstimate_1.useEstimate)();
    const fees = {
        CROSS_CHAIN_GAS_FEES: {
            title: "Expected cross-chain fees",
            amount: (0, utils_1.formatUnits)((_a = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount) !== null && _a !== void 0 ? _a : ethers_1.constants.Zero, firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.decimals),
            amountUSD: (_b = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amountUSD) !== null && _b !== void 0 ? _b : "0",
            token: firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token,
            display: firstFeeCost !== undefined,
        },
        SOURCE_CHAIN_GAS: {
            title: "Source chain gas",
            amount: (0, utils_1.formatUnits)((_c = firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.amount) !== null && _c !== void 0 ? _c : ethers_1.constants.Zero, firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.token.decimals),
            amountUSD: (_d = firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.amountUSD) !== null && _d !== void 0 ? _d : "0",
            token: firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.token,
            display: firstGasCost !== undefined,
            approximateFee: true,
        },
        EXPRESS_GAS_FEES: {
            title: "Boost Fee",
            amount: (0, utils_1.formatUnits)((_e = expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amount) !== null && _e !== void 0 ? _e : ethers_1.constants.Zero, expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.token.decimals),
            amountUSD: (_f = expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amountUSD) !== null && _f !== void 0 ? _f : "0",
            token: expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.token,
            display: expressFeeCost !== undefined,
        },
        ESTIMATED_GAS_FEES: {
            title: "Estimated gas fees",
            amount: (+(0, utils_1.formatUnits)((_g = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount) !== null && _g !== void 0 ? _g : "0", firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.decimals) +
                (expressSupportedForThisRoute
                    ? +(0, utils_1.formatUnits)((_h = expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amount) !== null && _h !== void 0 ? _h : "0", expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.token.decimals)
                    : 0)).toString(),
            amountUSD: (+((_j = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amountUSD) !== null && _j !== void 0 ? _j : 0) + +((_k = expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amountUSD) !== null && _k !== void 0 ? _k : 0)).toString(),
            token: firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token,
            display: firstFeeCost !== undefined,
            approximateFee: true,
        },
    };
    return ((0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-justify-between" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsxs)("span", { children: ["Expected gas fees after", " ", (0, jsx_runtime_1.jsx)(TextLink_1.TextLink, Object.assign({ className: "tw-underline", href: externalLinks_1.squidGasFeesRefundLink }, { children: "refund" }))] }), (0, jsx_runtime_1.jsx)(InfoComponent_1.InfoComponent, { maxWidth: "310px", placement: "top-start", id: "crosschaingas-fees", iconSize: 13, tooltipComponent: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-gap-2 tw-text-sm" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "We overestimate gas by 50% to ensure your trade. Any gas that isn't used is refunded by Axelar. The fee shown reflects the estimated amount you will have paid after being refunded." }), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-gap-1 tw-text-sm" }, { children: [(0, jsx_runtime_1.jsx)(TooltipFeeRow_1.TooltipFeeRow, { row: fees.CROSS_CHAIN_GAS_FEES }), fees.EXPRESS_GAS_FEES.display && ((0, jsx_runtime_1.jsx)(TooltipFeeRow_1.TooltipFeeRow, { row: fees.EXPRESS_GAS_FEES }))] }))] })) })] })), isLoading ? ((0, jsx_runtime_1.jsx)(LoadingSkeleton_1.LoadingSkeleton, { width: 120 })) : firstFeeCost || expressFeeCost ? ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-2" }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row" }, { children: (0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { significantFigures: 4, value: fees.ESTIMATED_GAS_FEES.amount, currency: {
                            symbol: firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.symbol,
                            symbolPosition: "after",
                        } }) })) }))) : ((0, jsx_runtime_1.jsx)("span", { children: "-" }))] })));
};
exports.CrossChainGasFees = CrossChainGasFees;
//# sourceMappingURL=CrossChainGasFees.js.map