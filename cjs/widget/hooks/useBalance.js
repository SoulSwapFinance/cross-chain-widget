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
exports.useCosmosBalance = exports.useNativeTokenBalanceDestinationChain = exports.useNativeTokenBalanceFromChain = exports.useBalance = void 0;
const sdk_1 = require("@0xsquid/sdk");
const stargate_1 = require("@cosmjs/stargate");
const react_query_1 = require("@tanstack/react-query");
const core_1 = require("@wagmi/core");
const ethers_1 = require("ethers");
const utils_1 = require("ethers/lib/utils");
const secretjs_1 = require("secretjs");
const wagmi_1 = require("wagmi");
const ERC20__factory_1 = require("../contracts/typechain/factories/ERC20__factory");
const constants_1 = require("../core/constants");
const CosmosProvider_1 = require("../core/providers/CosmosProvider");
const queries_keys_1 = require("../core/queries/queries-keys");
const secretService_1 = require("../services/external/secretService");
const useSquidStore_1 = require("../store/useSquidStore");
const useSwap_1 = require("./useSwap");
const refreshIntervalMs = 8000;
const useBalance = ({ chain, token, userAddress, enabled = true, }) => {
    const { isConnected } = (0, wagmi_1.useAccount)();
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const balance = (0, react_query_1.useQuery)((0, queries_keys_1.keys)({ address: userAddress, apiUrl: config.apiUrl }).balance(chain === null || chain === void 0 ? void 0 : chain.chainId, token === null || token === void 0 ? void 0 : token.address, userAddress), () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!!chain &&
            isConnected &&
            !!(token === null || token === void 0 ? void 0 : token.address) &&
            chain.chainType === sdk_1.ChainType.EVM) {
            const srcProvider = (0, core_1.getProvider)({ chainId: +((_a = chain.chainId) !== null && _a !== void 0 ? _a : 1) });
            const srcTokenContract = new ethers_1.ethers.Contract(token === null || token === void 0 ? void 0 : token.address, ERC20__factory_1.ERC20__factory.abi, srcProvider);
            if (token.address === constants_1.nativeEvmTokenAddress) {
                const nativeCurrencyBalance = yield srcProvider.getBalance(userAddress);
                return ethers_1.utils.formatUnits(nativeCurrencyBalance, token === null || token === void 0 ? void 0 : token.decimals);
            }
            try {
                const balance = yield srcTokenContract.balanceOf(userAddress);
                return ethers_1.utils.formatUnits(balance, token === null || token === void 0 ? void 0 : token.decimals);
            }
            catch (error) {
                return "0";
            }
        }
        else {
            return "0";
        }
    }), {
        enabled: isConnected && enabled,
        refetchInterval: refreshIntervalMs,
        retry: 2,
    });
    return { balance };
};
exports.useBalance = useBalance;
const useNativeTokenBalanceFromChain = () => {
    var _a;
    const { isConnected, address } = (0, wagmi_1.useAccount)();
    const { squid, config } = (0, useSquidStore_1.useSquidStore)();
    const { fromChain } = (0, useSwap_1.useSwap)();
    const chainId = fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainId;
    const nativeToken = ((_a = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _a !== void 0 ? _a : []).find((t) => t.symbol.toLowerCase() ===
        (fromChain === null || fromChain === void 0 ? void 0 : fromChain.nativeCurrency.symbol.toLowerCase()) && t.chainId === chainId);
    const balance = (0, react_query_1.useQuery)((0, queries_keys_1.keys)({ address, apiUrl: config.apiUrl }).nativeBalanceBigNumber(chainId, nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.address), () => __awaiter(void 0, void 0, void 0, function* () {
        const srcProvider = (0, core_1.getProvider)({ chainId: +(chainId !== null && chainId !== void 0 ? chainId : 1) });
        const nativeCurrencyBalance = yield srcProvider.getBalance(address);
        return nativeCurrencyBalance;
    }), {
        enabled: isConnected && !!nativeToken,
    });
    return { balance };
};
exports.useNativeTokenBalanceFromChain = useNativeTokenBalanceFromChain;
const useNativeTokenBalanceDestinationChain = () => {
    var _a;
    const { isConnected, address } = (0, wagmi_1.useAccount)();
    const { squid, config } = (0, useSquidStore_1.useSquidStore)();
    const { toChain } = (0, useSwap_1.useSwap)();
    const chainId = toChain === null || toChain === void 0 ? void 0 : toChain.chainId;
    const nativeToken = ((_a = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _a !== void 0 ? _a : []).find((t) => t.symbol.toLowerCase() === (toChain === null || toChain === void 0 ? void 0 : toChain.nativeCurrency.symbol.toLowerCase()) &&
        t.chainId === chainId);
    const balance = (0, react_query_1.useQuery)((0, queries_keys_1.keys)({ address, apiUrl: config.apiUrl }).nativeBalanceBigNumber(chainId, nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.address), () => __awaiter(void 0, void 0, void 0, function* () {
        const srcProvider = (0, core_1.getProvider)({ chainId: +(chainId !== null && chainId !== void 0 ? chainId : 1) });
        const nativeCurrencyBalance = yield srcProvider.getBalance(address);
        return nativeCurrencyBalance;
    }), {
        enabled: isConnected && !!nativeToken,
    });
    return { balance };
};
exports.useNativeTokenBalanceDestinationChain = useNativeTokenBalanceDestinationChain;
/**
 * Fetches the secret balance of the user
 * This has a different logic than the other balances because Secret network hides the balance of the user by design
 * So we need to fetch the balance in a different way
 */
const SECRET_CHAIN_ID = "secret-4";
const fetchSecretBalance = (chainData, userAddress, token, keplr) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const secretToken = (0, secretService_1.findSecretToken)((_a = token === null || token === void 0 ? void 0 : token.address) !== null && _a !== void 0 ? _a : "");
    if (!keplr)
        return "0.0";
    // Enables app to utilize keplr's secret utilities
    yield keplr.enable(SECRET_CHAIN_ID);
    // Create a client that handles the query encryption
    const client = new secretjs_1.SecretNetworkClient({
        url: "https://lcd-secret.scrtlabs.com/lcd",
        chainId: SECRET_CHAIN_ID,
        wallet: keplr.getOfflineSignerOnlyAmino(SECRET_CHAIN_ID),
        encryptionUtils: keplr.getEnigmaUtils(SECRET_CHAIN_ID),
        walletAddress: userAddress,
    });
    const contracts = secretService_1.SECRET_TOKENS.map((t) => t.address);
    const permit = yield (0, secretService_1.getPermit)((_b = chainData === null || chainData === void 0 ? void 0 : chainData.chainId.toString()) !== null && _b !== void 0 ? _b : "", contracts, userAddress);
    const result = (yield (0, secretService_1.getTokenBalance)(client, {
        address: (_c = secretToken === null || secretToken === void 0 ? void 0 : secretToken.address) !== null && _c !== void 0 ? _c : "",
        codeHash: (_d = secretToken === null || secretToken === void 0 ? void 0 : secretToken.code_hash) !== null && _d !== void 0 ? _d : "",
    }, permit));
    return (0, utils_1.formatUnits)(result.balance.amount, token === null || token === void 0 ? void 0 : token.decimals);
});
const useCosmosBalance = ({ chainData, token, userAddress, enabled = true, }) => {
    const { isConnected, cosmosAddress, keplrTypeWallet } = (0, CosmosProvider_1.useCosmosContext)();
    const walletAddressToFetch = userAddress !== null && userAddress !== void 0 ? userAddress : cosmosAddress;
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const balance = (0, react_query_1.useQuery)((0, queries_keys_1.keys)({ address: walletAddressToFetch, apiUrl: config.apiUrl }).balance(chainData === null || chainData === void 0 ? void 0 : chainData.chainId, token === null || token === void 0 ? void 0 : token.address, walletAddressToFetch, sdk_1.ChainType.Cosmos), () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (walletAddressToFetch &&
            chainData &&
            chainData.chainType === sdk_1.ChainType.Cosmos) {
            if ((token === null || token === void 0 ? void 0 : token.address) && chainData.chainName && userAddress) {
                // Specific case for Secret network
                if (chainData.chainId === SECRET_CHAIN_ID) {
                    return fetchSecretBalance(chainData, walletAddressToFetch, token, keplrTypeWallet);
                }
                const client = yield stargate_1.StargateClient.connect(chainData.rpc);
                const balanceAsCoin = yield client.getBalance(walletAddressToFetch, (_a = token.ibcDenom) !== null && _a !== void 0 ? _a : token.address);
                return (0, utils_1.formatUnits)(balanceAsCoin.amount, token === null || token === void 0 ? void 0 : token.decimals);
            }
        }
        return undefined;
    }), {
        enabled: enabled &&
            isConnected &&
            !!cosmosAddress &&
            !!walletAddressToFetch &&
            walletAddressToFetch !== "",
        refetchInterval: refreshIntervalMs,
        refetchOnWindowFocus: "always",
        refetchIntervalInBackground: false,
    });
    return { balance };
};
exports.useCosmosBalance = useCosmosBalance;
//# sourceMappingURL=useBalance.js.map