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
exports.useTokensWithBalance = void 0;
const sdk_1 = require("@0xsquid/sdk");
const stargate_1 = require("@cosmjs/stargate");
const react_query_1 = require("@tanstack/react-query");
const utils_1 = require("ethers/lib/utils");
const react_1 = require("react");
const queries_keys_1 = require("../core/queries/queries-keys");
const coingeckoService_1 = require("../services/external/coingeckoService");
const rpcService_1 = require("../services/external/rpcService");
const useSquidStore_1 = require("../store/useSquidStore");
const useMultiChain_1 = require("./useMultiChain");
const useSwap_1 = require("./useSwap");
const useTokensWithBalance = (chainData, direction) => {
    var _a;
    const { connectedAddress } = (0, useMultiChain_1.useMultiChain)(chainData, undefined);
    const { config, squid } = (0, useSquidStore_1.useSquidStore)();
    const { destinationAddress } = (0, useSwap_1.useSwap)();
    const walletAddressToFetch = (0, react_1.useMemo)(() => (direction === "to" ? destinationAddress : connectedAddress), [connectedAddress, destinationAddress, direction]);
    const tokens = ((_a = squid === null || squid === void 0 ? void 0 : squid.tokens.filter((t) => t.chainId == (chainData === null || chainData === void 0 ? void 0 : chainData.chainId))) !== null && _a !== void 0 ? _a : []);
    const evmBalances = (0, react_query_1.useQuery)((0, queries_keys_1.keys)({
        apiUrl: config.apiUrl,
        address: walletAddressToFetch,
    }).tokensBalanceForChain(sdk_1.ChainType.EVM, chainData === null || chainData === void 0 ? void 0 : chainData.chainId), () => __awaiter(void 0, void 0, void 0, function* () {
        var _b, _c, _d;
        if (chainData && tokens && walletAddressToFetch) {
            const tokensBalance = yield (0, rpcService_1.getAllEvmTokensBalance)(tokens, walletAddressToFetch);
            // Get Token usd price only for tokens which have balance > 0
            const tokenUSDPrices = yield Promise.all((_b = tokensBalance === null || tokensBalance === void 0 ? void 0 : tokensBalance.map((t, index) => {
                if (+t.balance !== 0) {
                    return (0, coingeckoService_1.fetchPriceForToken)({
                        apiUrl: config.apiUrl,
                        chainId: t === null || t === void 0 ? void 0 : t.chainId.toString(),
                        tokenAddress: t === null || t === void 0 ? void 0 : t.address,
                    });
                }
                return 0;
            })) !== null && _b !== void 0 ? _b : []);
            return ((_c = tokensBalance === null || tokensBalance === void 0 ? void 0 : tokensBalance.map((token, index) => {
                return Object.assign(Object.assign({}, token), { balance: token.balance, priceUSD: tokenUSDPrices[index].toString() });
            })) !== null && _c !== void 0 ? _c : []);
        }
        return (_d = tokens === null || tokens === void 0 ? void 0 : tokens.map((s) => (Object.assign(Object.assign({}, s), { balance: "" })))) !== null && _d !== void 0 ? _d : [];
    }), {
        enabled: (chainData === null || chainData === void 0 ? void 0 : chainData.chainType) === sdk_1.ChainType.EVM && !!tokens,
    });
    const cosmosBalances = (0, react_query_1.useQuery)((0, queries_keys_1.keys)({
        apiUrl: config.apiUrl,
        address: walletAddressToFetch,
    }).tokensBalanceForChain(sdk_1.ChainType.Cosmos, chainData === null || chainData === void 0 ? void 0 : chainData.chainId), () => __awaiter(void 0, void 0, void 0, function* () {
        var _e;
        if (chainData && tokens) {
            return Promise.all(tokens === null || tokens === void 0 ? void 0 : tokens.map((token) => __awaiter(void 0, void 0, void 0, function* () {
                var _f;
                if ((token === null || token === void 0 ? void 0 : token.address) && chainData.chainName) {
                    const client = yield stargate_1.StargateClient.connect(chainData.rpc);
                    const balanceAsCoin = yield client.getBalance(walletAddressToFetch !== null && walletAddressToFetch !== void 0 ? walletAddressToFetch : "", (_f = token === null || token === void 0 ? void 0 : token.ibcDenom) !== null && _f !== void 0 ? _f : token.address);
                    const balance = (0, utils_1.formatUnits)(balanceAsCoin.amount, token === null || token === void 0 ? void 0 : token.decimals);
                    return Object.assign(Object.assign({}, token), { balance });
                }
                return Object.assign(Object.assign({}, token), { balance: "" });
            })));
        }
        return (_e = tokens === null || tokens === void 0 ? void 0 : tokens.map((s) => (Object.assign(Object.assign({}, s), { balance: "" })))) !== null && _e !== void 0 ? _e : [];
    }), {
        enabled: (chainData === null || chainData === void 0 ? void 0 : chainData.chainType) === sdk_1.ChainType.Cosmos &&
            !!tokens &&
            !!walletAddressToFetch &&
            walletAddressToFetch.length > 0,
    });
    return { evmBalances, cosmosBalances, tokens };
};
exports.useTokensWithBalance = useTokensWithBalance;
//# sourceMappingURL=useTokensWithBalance.js.map