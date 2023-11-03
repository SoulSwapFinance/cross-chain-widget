"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapWarning = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const utils_js_1 = require("ethers/lib/utils.js");
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const constants_1 = require("../../core/constants");
const numbers_1 = require("../../core/numbers");
const useEstimate_1 = require("../../hooks/useEstimate");
const useSquidStore_1 = require("../../store/useSquidStore");
const NumericValue_1 = require("../NumericValue");
const SwapWarning = () => {
    var _a, _b;
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const { priceImpactStatus, toAmountUSDFloat, fromBalanceEnoughToSwap, minAmountValueWarnMsg, isFromTokenNative, fromAmount, fromToken, sourceChainNativeToken, totalNativeFees, } = (0, useEstimate_1.useEstimate)();
    const { isConnected: isEvmConnected } = (0, wagmi_1.useAccount)();
    const tradeLimitUsdExceeded = (0, react_1.useMemo)(() => {
        var _a;
        return ((_a = config.advanced) === null || _a === void 0 ? void 0 : _a.disableTradeLimit)
            ? false
            : toAmountUSDFloat > constants_1.limitTradeSizeUsd;
    }, [toAmountUSDFloat, (_a = config.advanced) === null || _a === void 0 ? void 0 : _a.disableTradeLimit]);
    const priceImpactWarning = (0, react_1.useMemo)(() => priceImpactStatus !== undefined && priceImpactStatus !== "normal", [priceImpactStatus]);
    // TODO: Delete this when liqudiity is good enough
    if (tradeLimitUsdExceeded) {
        return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, clsx_1.default)("w-full tw-flex tw-flex-row tw-rounded-xl tw-py-2 tw-text-xs tw-text-error") }, { children: (0, jsx_runtime_1.jsxs)("span", { children: ["Transaction size is currently limited to", " ", (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { style: { display: "inline-block !important" }, value: constants_1.limitTradeSizeUsd.toString(), currency: {
                                symbol: "$",
                                symbolPosition: "before",
                            } }) }), ". Please decrease the size of your transaction and try again."] }) })));
    }
    if (priceImpactWarning) {
        return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, clsx_1.default)("w-full tw-flex tw-flex-row tw-text-xs", priceImpactStatus === "critical" && "tw-text-error", priceImpactStatus === "warning" && "tw-text-warning") }, { children: (0, jsx_runtime_1.jsx)("span", { children: "The size of this trade is large compared to the available liquidity. Reduce the swap amount to get a better price." }) })));
    }
    // There's not enough balance to pay for the gas + the amount
    // TODO: When allowing cosmos as source chain, we need to check if the user is connected to cosmos wallet
    if (!fromBalanceEnoughToSwap &&
        !!fromAmount &&
        parseFloat(fromAmount) > 0 &&
        isEvmConnected) {
        return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-rounded-xl tw-py-2 tw-text-xs tw-text-warning" }, { children: isFromTokenNative &&
                minAmountValueWarnMsg !== "0" &&
                minAmountValueWarnMsg !== undefined ? ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-line-clamp-3" }, { children: ["You do not have enough ", fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol, " to cover the swap amount and the estimated gas costs for this transfer. Set your input amount to", " ", (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: "tw-underline", onClick: () => useSquidStore_1.useSquidStore.setState({
                            fromPrice: minAmountValueWarnMsg,
                        }) }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-underline" }, { children: [(0, numbers_1.roundNumericValue)(minAmountValueWarnMsg, 2, false, 4), " ", fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol] })) })), " ", "or below to cover gas costs."] }))) : ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-line-clamp-3" }, { children: ["You do not have enough ", sourceChainNativeToken === null || sourceChainNativeToken === void 0 ? void 0 : sourceChainNativeToken.symbol, " to cover the estimated gas costs for this transaction. Make sure you have more than", " ", (0, jsx_runtime_1.jsx)("span", { children: (0, numbers_1.roundNumericValue)((0, utils_js_1.formatUnits)(totalNativeFees, (_b = sourceChainNativeToken === null || sourceChainNativeToken === void 0 ? void 0 : sourceChainNativeToken.decimals) !== null && _b !== void 0 ? _b : 18), 2, false, 4) }), " ", sourceChainNativeToken === null || sourceChainNativeToken === void 0 ? void 0 : sourceChainNativeToken.symbol, " before trying again."] }))) })));
    }
    return null;
};
exports.SwapWarning = SwapWarning;
//# sourceMappingURL=SwapWarning.js.map