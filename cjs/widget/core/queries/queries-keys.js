"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keys = void 0;
const sdk_1 = require("@0xsquid/sdk");
/**
 * Cache keys implementation for react-query caching / invalidating
 * For example if you invalidate a top level query, all its child will be invalidated, e.g "all" key
 * @returns Query Keys array
 */
const keys = ({ address, apiUrl, }) => ({
    all: [address, apiUrl, "all"],
    // Chains
    chains: () => [...(0, exports.keys)({ apiUrl, address }).all, apiUrl, "chains"],
    // Tokens
    tokens: () => [...(0, exports.keys)({ apiUrl, address }).all, apiUrl, "tokens"],
    tokensForChain: (chainId) => [
        ...(0, exports.keys)({ apiUrl, address }).tokens(),
        chainId,
        "tokensForChain",
    ],
    tokensPrice: (swapRoute) => [
        ...(0, exports.keys)({ apiUrl, address }).tokens(),
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress,
        "tokensPrice",
    ],
    singleTokenPrice: (tokenAddress, chainId) => [
        ...(0, exports.keys)({ apiUrl, address }).tokens(),
        tokenAddress,
        chainId,
        "singleTokenPrice",
    ],
    axelarTokens: () => [...(0, exports.keys)({ apiUrl }).tokens(), "axelarTokens"],
    // Balances
    balances: () => [...(0, exports.keys)({ apiUrl, address }).all, "balances"],
    balance: (chainId, tokenAddress, userAddress, chainType = sdk_1.ChainType.EVM) => [
        ...(0, exports.keys)({ apiUrl, address }).balances(),
        address,
        chainId,
        tokenAddress,
        chainType,
        userAddress,
        "balance",
    ],
    nativeBalanceBigNumber: (chainId, tokenAddress, chainType = sdk_1.ChainType.EVM) => [
        ...(0, exports.keys)({ apiUrl, address }).balances(),
        address,
        chainId,
        tokenAddress,
        chainType,
        "nativeBalance",
    ],
    tokensBalanceForChain: (chainType, chainId) => [
        ...(0, exports.keys)({ apiUrl, address }).balances(),
        address,
        chainId,
        chainType,
        "tokensBalanceForChain",
    ],
    allTokensBalance: (direction) => [
        ...(0, exports.keys)({ apiUrl, address }).balances(),
        address,
        direction,
        "allTokensBalance",
    ],
    allTokensPriceUSDAndBalance: () => [
        ...(0, exports.keys)({ apiUrl, address }).balances(),
        address,
        "allTokensPriceUSDAndBalance",
    ],
    // Transactions
    transactions: () => [...(0, exports.keys)({ apiUrl, address }).all, "transactions"],
    transaction: (swapDirection, price, slippage, infiniteApproval, getGasOnDestination, expressEnabled) => [
        ...(0, exports.keys)({ apiUrl, address }).transactions(),
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.fromChainId,
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.toChainId,
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.toTokenAddress,
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.fromTokenAddress,
        price,
        slippage,
        infiniteApproval,
        getGasOnDestination,
        expressEnabled,
        "transaction",
    ],
    transactionStatus: (currentTransaction) => [
        ...(0, exports.keys)({ apiUrl, address }).transactions(),
        currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.routeType,
        currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.transactionId,
        currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.status,
        "transactionStatus",
    ],
    transactionStatusRefetcher: (currentTransaction) => [
        ...(0, exports.keys)({ apiUrl, address }).transactions(),
        currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.routeType,
        currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.transactionId,
        currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.status,
        "transactionStatusRefetcher",
    ],
    routeApproved: (swapDirection, sender, routeData) => [
        ...(0, exports.keys)({ apiUrl, address }).transactions(),
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.fromChainId,
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.toChainId,
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.toTokenAddress,
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.fromTokenAddress,
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.destinationAddress,
        sender,
        routeData === null || routeData === void 0 ? void 0 : routeData.estimate.fromAmount,
        "routeApproved",
    ],
    aproveRoute: () => ["aproveRoute"],
});
exports.keys = keys;
//# sourceMappingURL=queries-keys.js.map