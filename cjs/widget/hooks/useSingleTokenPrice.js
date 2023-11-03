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
exports.useSingleTokenPrice = void 0;
const react_query_1 = require("@tanstack/react-query");
const wagmi_1 = require("wagmi");
const queries_keys_1 = require("../core/queries/queries-keys");
const coingeckoService_1 = require("../services/external/coingeckoService");
const useSquidStore_1 = require("../store/useSquidStore");
/**
 * If a component need to display price of a single token
 * @param tokenData
 * @returns
 */
const useSingleTokenPrice = (tokenData) => {
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const { address } = (0, wagmi_1.useAccount)();
    /**
     * Get token price from Squid api
     * Using coingecko under the hood
     */
    const tokenPrice = (0, react_query_1.useQuery)((0, queries_keys_1.keys)({ address, apiUrl: config.apiUrl }).singleTokenPrice(tokenData === null || tokenData === void 0 ? void 0 : tokenData.address, tokenData === null || tokenData === void 0 ? void 0 : tokenData.chainId), () => __awaiter(void 0, void 0, void 0, function* () {
        const price = yield (0, coingeckoService_1.fetchPriceForToken)({
            apiUrl: config.apiUrl,
            chainId: tokenData === null || tokenData === void 0 ? void 0 : tokenData.chainId.toString(),
            tokenAddress: tokenData === null || tokenData === void 0 ? void 0 : tokenData.address,
        });
        return price;
    }));
    const getUSDValue = (balance) => {
        var _a, _b;
        return parseFloat((_b = (_a = tokenPrice.data) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "0") * parseFloat(balance);
    };
    return { tokenPrice, getUSDValue };
};
exports.useSingleTokenPrice = useSingleTokenPrice;
//# sourceMappingURL=useSingleTokenPrice.js.map