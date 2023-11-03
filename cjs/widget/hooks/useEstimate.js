"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEstimate = void 0;
const ethers_1 = require("ethers");
const utils_1 = require("ethers/lib/utils");
const react_1 = require("react");
const constants_1 = require("../core/constants");
const numbers_1 = require("../core/numbers");
const transactionService_1 = require("../services/internal/transactionService");
const useSquidStore_1 = require("../store/useSquidStore");
const useBalance_1 = require("./useBalance");
const useSingleTokenPrice_1 = require("./useSingleTokenPrice");
const useSwap_1 = require("./useSwap");
const useTokensWithBalance_1 = require("./useTokensWithBalance");
const useTransaction_1 = require("./useTransaction");
const useEstimate = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const { squidRoute } = (0, useTransaction_1.useTransaction)();
    const { config, squid } = (0, useSquidStore_1.useSquidStore)();
    const { balance } = (0, useBalance_1.useNativeTokenBalanceFromChain)();
    const { fromChain, fromToken, toChain } = (0, useSwap_1.useSwap)();
    const priceImpact = (0, react_1.useMemo)(() => { var _a, _b, _c; return (_c = (_b = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate) === null || _b === void 0 ? void 0 : _b.aggregatePriceImpact) !== null && _c !== void 0 ? _c : undefined; }, [(_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate]);
    const fromAmount = (0, react_1.useMemo)(() => { var _a, _b, _c; return (_c = (_b = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate) === null || _b === void 0 ? void 0 : _b.fromAmount) !== null && _c !== void 0 ? _c : undefined; }, [(_c = (_b = squidRoute.data) === null || _b === void 0 ? void 0 : _b.estimate) === null || _c === void 0 ? void 0 : _c.fromAmount]);
    const fromAmountFormatted = (0, react_1.useMemo)(() => (fromAmount ? (0, utils_1.formatUnits)(fromAmount, fromToken === null || fromToken === void 0 ? void 0 : fromToken.decimals) : ""), [fromAmount, fromToken === null || fromToken === void 0 ? void 0 : fromToken.decimals]);
    const sourceChainNativeToken = (0, react_1.useMemo)(() => {
        var _a;
        return ((_a = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _a !== void 0 ? _a : []).find((t) => t.symbol === (fromChain === null || fromChain === void 0 ? void 0 : fromChain.nativeCurrency.symbol) &&
            t.chainId == fromChain.chainId);
    }, [squid, fromChain]);
    const destChainNativeToken = (0, react_1.useMemo)(() => {
        var _a;
        return ((_a = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _a !== void 0 ? _a : []).find((t) => t.symbol === (toChain === null || toChain === void 0 ? void 0 : toChain.nativeCurrency.symbol) &&
            t.chainId == toChain.chainId);
    }, [squid, toChain]);
    const toAmountUSD = (0, react_1.useMemo)(() => { var _a, _b, _c; return (_c = (_b = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate) === null || _b === void 0 ? void 0 : _b.toAmountUSD) !== null && _c !== void 0 ? _c : undefined; }, [(_e = (_d = squidRoute.data) === null || _d === void 0 ? void 0 : _d.estimate) === null || _e === void 0 ? void 0 : _e.toAmountUSD]);
    const toAmountUSDFloat = (0, react_1.useMemo)(() => (toAmountUSD ? parseFloat(toAmountUSD.replace(/,/g, "")) : 0), [toAmountUSD]);
    const exchangeRate = (0, react_1.useMemo)(() => { var _a, _b; return (_b = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate.exchangeRate) !== null && _b !== void 0 ? _b : "0"; }, [(_f = squidRoute.data) === null || _f === void 0 ? void 0 : _f.estimate.exchangeRate]);
    const toAmountMin = (0, react_1.useMemo)(() => {
        var _a, _b, _c;
        return (0, utils_1.formatUnits)((_b = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate.toAmountMin) !== null && _b !== void 0 ? _b : "0", (_c = squidRoute.data) === null || _c === void 0 ? void 0 : _c.params.toToken.decimals);
    }, [
        (_g = squidRoute.data) === null || _g === void 0 ? void 0 : _g.estimate.toAmountMin,
        (_h = squidRoute.data) === null || _h === void 0 ? void 0 : _h.params.toToken.decimals,
    ]);
    const toAmount = (0, react_1.useMemo)(() => {
        var _a, _b, _c;
        const formattedAmount = (0, numbers_1.formatUnitsRounded)((_b = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate.toAmount) !== null && _b !== void 0 ? _b : "0", (_c = squidRoute.data) === null || _c === void 0 ? void 0 : _c.params.toToken.decimals, 14);
        return formattedAmount === "0.0" ? "0" : formattedAmount;
    }, [
        (_j = squidRoute.data) === null || _j === void 0 ? void 0 : _j.estimate.toAmount,
        (_k = squidRoute.data) === null || _k === void 0 ? void 0 : _k.params.toToken.decimals,
    ]);
    /**
     * At the moment we're only taking the first item
     * of fees array, but keeping the possibility to display multiple fees
     */
    const crossChainGasFee = (0, react_1.useMemo)(() => {
        var _a;
        const estimate = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate;
        return (estimate === null || estimate === void 0 ? void 0 : estimate.feeCosts.length) > 0 ? estimate === null || estimate === void 0 ? void 0 : estimate.feeCosts[0] : undefined;
    }, [(_l = squidRoute.data) === null || _l === void 0 ? void 0 : _l.estimate]);
    const allFeeCosts = (0, react_1.useMemo)(() => {
        var _a, _b;
        const estimate = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate;
        return (_b = estimate === null || estimate === void 0 ? void 0 : estimate.feeCosts) !== null && _b !== void 0 ? _b : [];
    }, [(_m = squidRoute.data) === null || _m === void 0 ? void 0 : _m.estimate]);
    const allGasCosts = (0, react_1.useMemo)(() => {
        var _a, _b;
        const estimate = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate;
        return (_b = estimate === null || estimate === void 0 ? void 0 : estimate.gasCosts) !== null && _b !== void 0 ? _b : [];
    }, [(_o = squidRoute.data) === null || _o === void 0 ? void 0 : _o.estimate]);
    const firstGasCost = (0, react_1.useMemo)(() => (allGasCosts.length > 0 ? allGasCosts[0] : undefined), [allGasCosts]);
    const firstFeeCost = (0, react_1.useMemo)(() => (allFeeCosts.length > 0 ? allFeeCosts[0] : undefined), [allFeeCosts]);
    const { getUSDValue } = (0, useSingleTokenPrice_1.useSingleTokenPrice)(firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token);
    const expressFeeCost = (0, react_1.useMemo)(() => allFeeCosts.length > 0
        ? allFeeCosts.find((f) => f.name === "Express Fee")
        : undefined, [allFeeCosts]);
    const expressSupportedForThisRoute = (0, react_1.useMemo)(() => {
        var _a, _b;
        return ((_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate.isExpressSupported) === undefined
            ? true
            : (_b = squidRoute.data) === null || _b === void 0 ? void 0 : _b.estimate.isExpressSupported;
    }, [(_p = squidRoute.data) === null || _p === void 0 ? void 0 : _p.estimate.isExpressSupported]);
    const transactionTimeEstimate = (0, react_1.useMemo)(() => expressSupportedForThisRoute && config.enableExpress
        ? (0, transactionService_1.formatSeconds)(20, "s", "min")
        : (0, transactionService_1.formatSeconds)((fromChain === null || fromChain === void 0 ? void 0 : fromChain.estimatedRouteDuration) || 0, "s", "min"), [
        config.enableExpress,
        fromChain === null || fromChain === void 0 ? void 0 : fromChain.estimatedRouteDuration,
        expressSupportedForThisRoute,
    ]);
    const expectedGasRefundCost = (0, react_1.useMemo)(() => {
        var _a;
        return ethers_1.BigNumber.from((_a = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount) !== null && _a !== void 0 ? _a : "0")
            .mul(constants_1.gasRefundMultiplier)
            .div(100);
    }, [firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount]);
    const sameTokenBetweenFees = (0, react_1.useMemo)(() => (firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.address) === (firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.token.address) &&
        (firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.chainId) === (firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.token.chainId), [
        firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.address,
        firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.chainId,
        firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.token.address,
        firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.token.chainId,
    ]);
    // From token is the same as the native chain token
    // TODO: This only works for EVM chains
    const isFromTokenNative = (0, react_1.useMemo)(() => {
        if (fromToken === undefined || (fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainId) === undefined) {
            return false;
        }
        return fromToken.symbol === fromChain.nativeCurrency.symbol;
    }, [fromToken, fromChain]);
    const totalNativeFees = (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d;
        const expressBn = ethers_1.BigNumber.from((_a = expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amount) !== null && _a !== void 0 ? _a : ethers_1.constants.Zero);
        if (sameTokenBetweenFees) {
            return ethers_1.BigNumber.from((_b = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount) !== null && _b !== void 0 ? _b : ethers_1.constants.Zero)
                .add(ethers_1.BigNumber.from((_c = firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.amount) !== null && _c !== void 0 ? _c : ethers_1.constants.Zero))
                .add(expressBn);
        }
        return ethers_1.BigNumber.from((_d = firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.amount) !== null && _d !== void 0 ? _d : ethers_1.constants.Zero).add(expressBn);
    }, [
        firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount,
        firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.amount,
        sameTokenBetweenFees,
        expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amount,
    ]);
    const totalFeesInNativeTokenPlusRatio = (0, react_1.useMemo)(() => {
        return totalNativeFees.mul(105).div(100);
    }, [totalNativeFees]);
    const totalWithRefundEstimate = (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d, _e, _f, _g;
        const formattedRefundCost = (0, utils_1.formatUnits)(expectedGasRefundCost, firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.decimals);
        const formattedRefundCostUSD = getUSDValue(formattedRefundCost);
        const formattedFirstFeeCost = (0, utils_1.formatUnits)((_a = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount) !== null && _a !== void 0 ? _a : "0", firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.decimals);
        const formattedExpressFeeCost = (0, utils_1.formatUnits)((_b = expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amount) !== null && _b !== void 0 ? _b : "0", expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.token.decimals);
        const totalAmount = ((_c = +formattedFirstFeeCost) !== null && _c !== void 0 ? _c : 0) +
            ((_d = +formattedExpressFeeCost) !== null && _d !== void 0 ? _d : 0) -
            ((_e = +formattedRefundCost) !== null && _e !== void 0 ? _e : 0);
        const totalAmountUSD = +((_f = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amountUSD) !== null && _f !== void 0 ? _f : 0) +
            +((_g = expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amountUSD) !== null && _g !== void 0 ? _g : 0) -
            +(formattedRefundCostUSD !== null && formattedRefundCostUSD !== void 0 ? formattedRefundCostUSD : 0);
        return { totalAmount, totalAmountUSD, feeToken: firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token };
    }, [expectedGasRefundCost, expressFeeCost, firstFeeCost, getUSDValue]);
    /**
     * Two cases:
     * 1. If the source token is the same as the native token, check if the balance of native token is less than the (source amount) + (native gas)
     * 2. If the source token is different from the native token, check if the balance of native token is less than (native gas)
     */
    const fromBalanceEnoughToSwap = (0, react_1.useMemo)(() => {
        var _a;
        if (squidRoute.isLoading)
            return true;
        const fromAmountWei = ethers_1.BigNumber.from(fromAmount !== null && fromAmount !== void 0 ? fromAmount : ethers_1.constants.Zero);
        const fromBalance = (_a = balance.data) !== null && _a !== void 0 ? _a : ethers_1.constants.Zero;
        if (isFromTokenNative) {
            const fromPlusGas = fromAmountWei.add(totalFeesInNativeTokenPlusRatio);
            if (fromPlusGas.lte(fromBalance)) {
                return true;
            }
        }
        else if (totalFeesInNativeTokenPlusRatio.lte(fromBalance)) {
            return true;
        }
        return false;
    }, [
        balance.data,
        fromAmount,
        isFromTokenNative,
        squidRoute.isLoading,
        totalFeesInNativeTokenPlusRatio,
    ]);
    /**
     * In the case where the source token is the same as the native token,
     * we need to advise the user to change the source amount to be less than the balance of native token minus the gas cost
     */
    const minAmountValueWarnMsg = (0, react_1.useMemo)(() => {
        var _a, _b;
        if (!isFromTokenNative) {
            return undefined;
        }
        const fromBalance = (_a = balance.data) !== null && _a !== void 0 ? _a : ethers_1.constants.Zero;
        const minAmount = fromBalance.sub(totalFeesInNativeTokenPlusRatio);
        if (minAmount.gt(ethers_1.constants.Zero)) {
            const parsedMinAmount = (0, utils_1.formatUnits)(minAmount, (_b = sourceChainNativeToken === null || sourceChainNativeToken === void 0 ? void 0 : sourceChainNativeToken.decimals) !== null && _b !== void 0 ? _b : 18);
            return parsedMinAmount;
        }
        return "0";
    }, [
        balance.data,
        isFromTokenNative,
        sourceChainNativeToken === null || sourceChainNativeToken === void 0 ? void 0 : sourceChainNativeToken.decimals,
        totalFeesInNativeTokenPlusRatio,
    ]);
    /**
     * If last updated data is older than X seconds and the query is currently loading, show loading indicator
     */
    const showLoading = (0, react_1.useMemo)(() => squidRoute.isFetching || squidRoute.isRefetching, [squidRoute.isFetching, squidRoute.isRefetching]);
    const priceImpactStatus = (0, react_1.useMemo)(() => {
        if (config.priceImpactWarnings !== undefined && priceImpact !== undefined) {
            if (+priceImpact >= config.priceImpactWarnings.warning &&
                +priceImpact < config.priceImpactWarnings.critical) {
                return "warning";
            }
            if (+priceImpact >= config.priceImpactWarnings.critical) {
                return "critical";
            }
            if (+priceImpact < config.priceImpactWarnings.warning) {
                return "normal";
            }
        }
        return undefined;
    }, [config.priceImpactWarnings, priceImpact]);
    const proposedGasDestinationAmount = (0, react_1.useMemo)(() => {
        // Get native token of chain
        const nativeToken = toChain === null || toChain === void 0 ? void 0 : toChain.nativeCurrency.symbol;
        let gasDestinationAmount = 0;
        switch (nativeToken) {
            case "GLMR":
                gasDestinationAmount = 5.289;
                break;
            case "ETH":
                gasDestinationAmount = 0.0009;
                break;
            case "AVAX":
                gasDestinationAmount = 0.115;
                break;
            case "BNB":
                gasDestinationAmount = 0.00425;
                break;
            case "FTM":
                gasDestinationAmount = 4.45;
                break;
            case "CELO":
                gasDestinationAmount = 3.052;
                break;
            case "KAVA":
                gasDestinationAmount = 2.339;
                break;
            case "MATIC":
                gasDestinationAmount = 1.795;
                break;
            default:
                gasDestinationAmount = 0;
                break;
        }
        return { value: gasDestinationAmount, currency: nativeToken };
    }, [toChain === null || toChain === void 0 ? void 0 : toChain.nativeCurrency.symbol]);
    /**
     * Fetching balances of From & To ChainId tokens
     * This way when user goes to the Token view, tokens are
     * already loaded with their balance
     * Needs to refetch on every chain change
     * Since we're on a hook and fromChain & toChain can change,
     * these two lines below will be called again when chain variable changes
     */
    (0, useTokensWithBalance_1.useTokensWithBalance)(fromChain);
    (0, useTokensWithBalance_1.useTokensWithBalance)(toChain, "to");
    return {
        allFeeCosts,
        allGasCosts,
        crossChainGasFee,
        priceImpact,
        exchangeRate,
        toAmountMin,
        toAmount,
        fromToken,
        toAmountUSD,
        toAmountUSDFloat,
        isFetching: showLoading,
        squidRouteError: squidRoute.error,
        priceImpactStatus,
        fromAmount,
        fromAmountFormatted,
        estimatedRouteDuration: (_r = (_q = squidRoute.data) === null || _q === void 0 ? void 0 : _q.estimate) === null || _r === void 0 ? void 0 : _r.estimatedRouteDuration,
        minAmountValueWarnMsg,
        fromBalanceEnoughToSwap,
        isFromTokenNative,
        firstFeeCost,
        firstGasCost,
        sameTokenBetweenFees,
        totalFeesInNativeTokenPlusRatio,
        totalNativeFees,
        sourceChainNativeToken,
        expressFeeCost,
        proposedGasDestinationAmount,
        expectedGasRefundCost,
        expressSupportedForThisRoute,
        transactionTimeEstimate,
        totalWithRefundEstimate,
        destChainNativeToken,
    };
};
exports.useEstimate = useEstimate;
//# sourceMappingURL=useEstimate.js.map