var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useAccount } from "wagmi";
import { keys } from "../core/queries/queries-keys";
import { fetchPriceForToken } from "../services/external/coingeckoService";
import { getAllEvmTokensBalance } from "../services/external/rpcService";
import { useSquidStore } from "../store/useSquidStore";
import { useSwap } from "./useSwap";
export const useAllTokensWithBalance = (direction) => {
    const { config, squid } = useSquidStore();
    const { address: connectedEVMAddress, isConnected } = useAccount();
    const { destinationAddress } = useSwap();
    const desiredAddress = useMemo(() => (direction === "to" ? destinationAddress : connectedEVMAddress), [connectedEVMAddress, destinationAddress, direction]);
    const squidTokens = useMemo(() => { var _a; return (_a = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _a !== void 0 ? _a : []; }, [squid === null || squid === void 0 ? void 0 : squid.tokens]);
    const evmTokens = useMemo(() => {
        return squidTokens
            .filter((t) => typeof t.chainId !== "string")
            .map((t) => (Object.assign(Object.assign({}, t), { balance: "0" })));
    }, [squidTokens]);
    const cosmosTokens = useMemo(() => {
        return squidTokens
            .filter((t) => typeof t.chainId === "string")
            .map((t) => (Object.assign(Object.assign({}, t), { balance: "0" })));
    }, [squidTokens]);
    const tokensWithoutBalance = useMemo(() => {
        return [...evmTokens, ...(direction === "to" ? cosmosTokens : [])];
    }, [evmTokens, cosmosTokens, direction]);
    const tokensWithBalanceQuery = useQuery(keys({
        apiUrl: config.apiUrl,
        address: desiredAddress,
    }).allTokensBalance(direction), () => __awaiter(void 0, void 0, void 0, function* () {
        // Need to be connected to query balance for EVM tokens
        if (!isConnected || !desiredAddress) {
            return [...evmTokens, ...(direction === "to" ? cosmosTokens : [])];
        }
        // Get balances
        const evmTokensBalances = yield getAllEvmTokensBalance(evmTokens, desiredAddress);
        // Concatenate all tokens
        return [
            ...evmTokensBalances,
            ...(direction === "to" ? cosmosTokens : []),
        ];
    }));
    const tokens = useMemo(() => { var _a; return (_a = tokensWithBalanceQuery.data) !== null && _a !== void 0 ? _a : tokensWithoutBalance; }, [tokensWithBalanceQuery.data, tokensWithoutBalance]);
    // When we load this view,
    // Fetch the prices for all tokens that have a balance
    // We need to do this to sort the tokens by USD price after
    // Only load for tokens having a balance
    const getTokensWithPrices = useQuery(keys({
        apiUrl: config.apiUrl,
        address: desiredAddress,
    }).allTokensPriceUSDAndBalance(), () => __awaiter(void 0, void 0, void 0, function* () {
        const tokensWithUnitPrice = yield Promise.all(tokens.map((t) => __awaiter(void 0, void 0, void 0, function* () {
            let usdPrice = t.priceUSD;
            // If token has a balance but no USD unit price, fetch it
            if (+t.balance !== 0 && !t.priceUSD && t.chainId) {
                try {
                    usdPrice = (yield fetchPriceForToken({
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
//# sourceMappingURL=useAllTokensWithBalance.js.map