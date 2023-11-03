"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAllTokensWithBalance = void 0;
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const queries_keys_1 = require("../core/queries/queries-keys");
const coingeckoService_1 = require("../services/external/coingeckoService");
const rpcService_1 = require("../services/external/rpcService");
const useSquidStore_1 = require("../store/useSquidStore");
const useSwap_1 = require("./useSwap");
const useAllTokensWithBalance = (direction) => {
    const { config, squid } = (0, useSquidStore_1.useSquidStore)();
    const { address: connectedEVMAddress, isConnected } = (0, wagmi_1.useAccount)();
    const { destinationAddress } = (0, useSwap_1.useSwap)();
    const desiredAddress = (0, react_1.useMemo)(() => (direction === "to" ? destinationAddress : connectedEVMAddress), [connectedEVMAddress, destinationAddress, direction]);
    const squidTokens = (0, react_1.useMemo)(() => { var _a; return (_a = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _a !== void 0 ? _a : []; }, [squid === null || squid === void 0 ? void 0 : squid.tokens]);
    const evmTokens = (0, react_1.useMemo)(() => {
        return squidTokens
            .filter((t) => typeof t.chainId !== "string")
            .map((t) => (Object.assign(Object.assign({}, t), { balance: "0" })));
    }, [squidTokens]);
    const cosmosTokens = (0, react_1.useMemo)(() => {
        return squidTokens
            .filter((t) => typeof t.chainId === "string")
            .map((t) => (Object.assign(Object.assign({}, t), { balance: "0" })));
    }, [squidTokens]);
    const tokensWithoutBalance = (0, react_1.useMemo)(() => {
        return [...evmTokens, ...(direction === "to" ? cosmosTokens : [])];
    }, [evmTokens, cosmosTokens, direction]);
    const tokensWithBalanceQuery = (0, react_query_1.useQuery)((0, queries_keys_1.keys)({
        apiUrl: config.apiUrl,
        address: desiredAddress,
    }).allTokensBalance(direction), () => __awaiter(void 0, void 0, void 0, function* () {
        // Need to be connected to query balance for EVM tokens
        if (!isConnected || !desiredAddress) {
            return [...evmTokens, ...(direction === "to" ? cosmosTokens : [])];
        }
        // Get balances
        const evmTokensBalances = yield (0, rpcService_1.getAllEvmTokensBalance)(evmTokens, desiredAddress);
        // Concatenate all tokens
        return [
            ...evmTokensBalances,
            ...(direction === "to" ? cosmosTokens : []),
        ];
    }));
    const tokens = (0, react_1.useMemo)(() => { var _a; return (_a = tokensWithBalanceQuery.data) !== null && _a !== void 0 ? _a : tokensWithoutBalance; }, [tokensWithBalanceQuery.data, tokensWithoutBalance]);
    // When we load this view,
    // Fetch the prices for all tokens that have a balance
    // We need to do this to sort the tokens by USD price after
    // Only load for tokens having a balance
    const getTokensWithPrices = (0, react_query_1.useQuery)((0, queries_keys_1.keys)({
        apiUrl: config.apiUrl,
        address: desiredAddress,
    }).allTokensPriceUSDAndBalance(), () => __awaiter(void 0, void 0, void 0, function* () {
        const tokensWithUnitPrice = yield Promise.all(tokens.map((t) => __awaiter(void 0, void 0, void 0, function* () {
            let usdPrice = t.priceUSD;
            // If token has a balance but no USD unit price, fetch it
            if (+t.balance !== 0 && !t.priceUSD && t.chainId) {
                try {
                    usdPrice = (yield (0, coingeckoService_1.fetchPriceForToken)({
                        apiUrl: config.apiUrl,
                        chainId: t.chainId.toString(),
                        tokenAddress: t.address,
                    })).toString();
                }
                catch (error) {
                    // Silent catch
                }
            }
            return Object.assign(Object.assign({}, t), { priceUSD: usdPrice === null || usdPrice === void 0 ? void 0 : usdPrice.toString() });
        })));
        return tokensWithUnitPrice;
    }), {
        enabled: tokensWithBalanceQuery.isSuccess, // Only fetch price when balance is loaded
    });
    return {
        tokensWithBalanceQuery,
        getTokensWithPrices,
        tokens,
    };
};
exports.useAllTokensWithBalance = useAllTokensWithBalance;
//# sourceMappingURL=useAllTokensWithBalance.js.map