var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ChainType } from "@0xsquid/sdk";
import { StargateClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { getProvider } from "@wagmi/core";
import { ethers, utils } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { SecretNetworkClient } from "secretjs";
import { useAccount } from "wagmi";
import { ERC20__factory } from "../contracts/typechain/factories/ERC20__factory";
import { nativeEvmTokenAddress } from "../core/constants";
import { useCosmosContext } from "../core/providers/CosmosProvider";
import { keys } from "../core/queries/queries-keys";
import { SECRET_TOKENS, findSecretToken, getPermit, getTokenBalance, } from "../services/external/secretService";
import { useSquidStore } from "../store/useSquidStore";
import { useSwap } from "./useSwap";
const refreshIntervalMs = 8000;
export const useBalance = ({ chain, token, userAddress, enabled = true, }) => {
    const { isConnected } = useAccount();
    const { config } = useSquidStore();
    const balance = useQuery(keys({ address: userAddress, apiUrl: config.apiUrl }).balance(chain === null || chain === void 0 ? void 0 : chain.chainId, token === null || token === void 0 ? void 0 : token.address, userAddress), () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!!chain &&
            isConnected &&
            !!(token === null || token === void 0 ? void 0 : token.address) &&
            chain.chainType === ChainType.EVM) {
            const srcProvider = getProvider({ chainId: +((_a = chain.chainId) !== null && _a !== void 0 ? _a : 1) });
            const srcTokenContract = new ethers.Contract(token === null || token === void 0 ? void 0 : token.address, ERC20__factory.abi, srcProvider);
            if (token.address === nativeEvmTokenAddress) {
                const nativeCurrencyBalance = yield srcProvider.getBalance(userAddress);
                return utils.formatUnits(nativeCurrencyBalance, token === null || token === void 0 ? void 0 : token.decimals);
            }
            try {
                const balance = yield srcTokenContract.balanceOf(userAddress);
                return utils.formatUnits(balance, token === null || token === void 0 ? void 0 : token.decimals);
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
export const useNativeTokenBalanceFromChain = () => {
    var _a;
    const { isConnected, address } = useAccount();
    const { squid, config } = useSquidStore();
    const { fromChain } = useSwap();
    const chainId = fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainId;
    const nativeToken = ((_a = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _a !== void 0 ? _a : []).find((t) => t.symbol.toLowerCase() ===
        (fromChain === null || fromChain === void 0 ? void 0 : fromChain.nativeCurrency.symbol.toLowerCase()) && t.chainId === chainId);
    const balance = useQuery(keys({ address, apiUrl: config.apiUrl }).nativeBalanceBigNumber(chainId, nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.address), () => __awaiter(void 0, void 0, void 0, function* () {
        const srcProvider = getProvider({ chainId: +(chainId !== null && chainId !== void 0 ? chainId : 1) });
        const nativeCurrencyBalance = yield srcProvider.getBalance(address);
        return nativeCurrencyBalance;
    }), {
        enabled: isConnected && !!nativeToken,
    });
    return { balance };
};
export const useNativeTokenBalanceDestinationChain = () => {
    var _a;
    const { isConnected, address } = useAccount();
    const { squid, config } = useSquidStore();
    const { toChain } = useSwap();
    const chainId = toChain === null || toChain === void 0 ? void 0 : toChain.chainId;
    const nativeToken = ((_a = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _a !== void 0 ? _a : []).find((t) => t.symbol.toLowerCase() === (toChain === null || toChain === void 0 ? void 0 : toChain.nativeCurrency.symbol.toLowerCase()) &&
        t.chainId === chainId);
    const balance = useQuery(keys({ address, apiUrl: config.apiUrl }).nativeBalanceBigNumber(chainId, nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.address), () => __awaiter(void 0, void 0, void 0, function* () {
        const srcProvider = getProvider({ chainId: +(chainId !== null && chainId !== void 0 ? chainId : 1) });
        const nativeCurrencyBalance = yield srcProvider.getBalance(address);
        return nativeCurrencyBalance;
    }), {
        enabled: isConnected && !!nativeToken,
    });
    return { balance };
};
/**
 * Fetches the secret balance of the user
 * This has a different logic than the other balances because Secret network hides the balance of the user by design
 * So we need to fetch the balance in a different way
 */
const SECRET_CHAIN_ID = "secret-4";
const fetchSecretBalance = (chainData, userAddress, token, keplr) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const secretToken = findSecretToken((_a = token === null || token === void 0 ? void 0 : token.address) !== null && _a !== void 0 ? _a : "");
    if (!keplr)
        return "0.0";
    // Enables app to utilize keplr's secret utilities
    yield keplr.enable(SECRET_CHAIN_ID);
    // Create a client that handles the query encryption
    const client = new SecretNetworkClient({
        url: "https://lcd-secret.scrtlabs.com/lcd",
        chainId: SECRET_CHAIN_ID,
        wallet: keplr.getOfflineSignerOnlyAmino(SECRET_CHAIN_ID),
        encryptionUtils: keplr.getEnigmaUtils(SECRET_CHAIN_ID),
        walletAddress: userAddress,
    });
    const contracts = SECRET_TOKENS.map((t) => t.address);
    const permit = yield getPermit((_b = chainData === null || chainData === void 0 ? void 0 : chainData.chainId.toString()) !== null && _b !== void 0 ? _b : "", contracts, userAddress);
    const result = (yield getTokenBalance(client, {
        address: (_c = secretToken === null || secretToken === void 0 ? void 0 : secretToken.address) !== null && _c !== void 0 ? _c : "",
        codeHash: (_d = secretToken === null || secretToken === void 0 ? void 0 : secretToken.code_hash) !== null && _d !== void 0 ? _d : "",
    }, permit));
    return formatUnits(result.balance.amount, token === null || token === void 0 ? void 0 : token.decimals);
});
export const useCosmosBalance = ({ chainData, token, userAddress, enabled = true, }) => {
    const { isConnected, cosmosAddress, keplrTypeWallet } = useCosmosContext();
    const walletAddressToFetch = userAddress !== null && userAddress !== void 0 ? userAddress : cosmosAddress;
    const { config } = useSquidStore();
    const balance = useQuery(keys({ address: walletAddressToFetch, apiUrl: config.apiUrl }).balance(chainData === null || chainData === void 0 ? void 0 : chainData.chainId, token === null || token === void 0 ? void 0 : token.address, walletAddressToFetch, ChainType.Cosmos), () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (walletAddressToFetch &&
            chainData &&
            chainData.chainType === ChainType.Cosmos) {
            if ((token === null || token === void 0 ? void 0 : token.address) && chainData.chainName && userAddress) {
                // Specific case for Secret network
                if (chainData.chainId === SECRET_CHAIN_ID) {
                    return fetchSecretBalance(chainData, walletAddressToFetch, token, keplrTypeWallet);
                }
                const client = yield StargateClient.connect(chainData.rpc);
                const balanceAsCoin = yield client.getBalance(walletAddressToFetch, (_a = token.ibcDenom) !== null && _a !== void 0 ? _a : token.address);
                return formatUnits(balanceAsCoin.amount, token === null || token === void 0 ? void 0 : token.decimals);
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
//# sourceMappingURL=useBalance.js.map