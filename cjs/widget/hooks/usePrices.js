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
exports.usePrices = void 0;
const react_query_1 = require("@tanstack/react-query");
const queries_keys_1 = require("../core/queries/queries-keys");
const coingeckoService_1 = require("../services/external/coingeckoService");
const useSquidStore_1 = require("../store/useSquidStore");
const usePrices = () => {
    const { squid, config } = (0, useSquidStore_1.useSquidStore)();
    const { swapRoute } = (0, useSquidStore_1.useSwapRoutePersistStore)();
    /**
     * Get token prices from Squid API
     */
    const tokenPrices = (0, react_query_1.useQuery)((0, queries_keys_1.keys)({ apiUrl: config.apiUrl }).tokensPrice(swapRoute), () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const result = yield Promise.all([
            // From
            (0, coingeckoService_1.fetchPriceForToken)({
                apiUrl: config.apiUrl,
                chainId: (_a = swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId) === null || _a === void 0 ? void 0 : _a.toString(),
                tokenAddress: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress,
            }),
            // To
            (0, coingeckoService_1.fetchPriceForToken)({
                apiUrl: config.apiUrl,
                chainId: (_b = swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId) === null || _b === void 0 ? void 0 : _b.toString(),
                tokenAddress: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress,
            }),
        ]);
        return {
            sourceTokenUsdPrice: result[0],
            destinationTokenUsdPrice: result[1],
        };
    }), {
        enabled: swapRoute &&
            !!squid &&
            !!(swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId) &&
            !!(swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId) &&
            !!(swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress) &&
            !!(swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress),
    });
    return { tokenPrices };
};
exports.usePrices = usePrices;
//# sourceMappingURL=usePrices.js.map