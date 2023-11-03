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
exports.useMultiChain = void 0;
const sdk_1 = require("@0xsquid/sdk");
const react_query_1 = require("@tanstack/react-query");
const core_1 = require("@wagmi/core");
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const CosmosProvider_1 = require("../core/providers/CosmosProvider");
const walletService_1 = require("../services/internal/walletService");
const useMultiChain = (chainToCompare, tokenToCompare) => {
    const { chain: currentEvmChain } = (0, wagmi_1.useNetwork)();
    const { isConnected: isEvmConnected, connector, address } = (0, wagmi_1.useAccount)();
    const { isConnected: cosmosIsConnected, cosmosAddress } = (0, CosmosProvider_1.useCosmosContext)();
    const { switchNetworkAsync } = (0, wagmi_1.useSwitchNetwork)({
        throwForSwitchChainNotSupported: true,
    });
    /**
     * Get connected address, depends on chainType
     */
    const connectedAddress = (0, react_1.useMemo)(() => {
        switch (chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) {
            case sdk_1.ChainType.EVM:
                return address;
            case sdk_1.ChainType.Cosmos:
                return cosmosAddress;
            default:
                return address;
        }
    }, [address, chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType, cosmosAddress]);
    const parsedAddress = (0, react_1.useMemo)(() => (0, walletService_1.formatWalletAddress)(connectedAddress), [connectedAddress]);
    /**
     * Change current network for desired chain
     */
    const changeNetwork = (0, react_query_1.useMutation)(() => __awaiter(void 0, void 0, void 0, function* () {
        if ((chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) === sdk_1.ChainType.EVM) {
            yield (switchNetworkAsync === null || switchNetworkAsync === void 0 ? void 0 : switchNetworkAsync(+chainToCompare.chainId));
        }
        // Implement keplr change network
        // Looks like there are no method to do that at the moment
        return false;
    }), {
        onError: (error) => __awaiter(void 0, void 0, void 0, function* () {
            if (error instanceof core_1.UserRejectedRequestError) {
                return;
            }
            if ((error instanceof wagmi_1.ChainNotConfiguredError ||
                error instanceof wagmi_1.SwitchChainError ||
                error instanceof core_1.AddChainError) &&
                chainToCompare) {
                const provider = yield (connector === null || connector === void 0 ? void 0 : connector.getProvider());
                const chainParameters = {
                    chainId: `0x${chainToCompare.chainId.toString(16)}`,
                    chainName: chainToCompare.networkName,
                    nativeCurrency: chainToCompare.nativeCurrency,
                    rpcUrls: [chainToCompare.rpc],
                    blockExplorerUrls: chainToCompare.blockExplorerUrls,
                    iconUrls: [chainToCompare.chainIconURI],
                };
                provider.request({
                    method: "wallet_addEthereumChain",
                    params: [chainParameters],
                });
            }
        }),
    });
    /**
     * Add token to wallet
     */
    const addToken = (0, react_query_1.useMutation)((tokenToAdd) => __awaiter(void 0, void 0, void 0, function* () {
        const token = tokenToAdd !== null && tokenToAdd !== void 0 ? tokenToAdd : tokenToCompare;
        if (token && (chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) === sdk_1.ChainType.EVM) {
            const provider = yield (connector === null || connector === void 0 ? void 0 : connector.getProvider());
            // Switch network if needed
            if ((currentEvmChain === null || currentEvmChain === void 0 ? void 0 : currentEvmChain.id) !== (token === null || token === void 0 ? void 0 : token.chainId)) {
                yield (switchNetworkAsync === null || switchNetworkAsync === void 0 ? void 0 : switchNetworkAsync(+token.chainId));
                // Metamask is not popping the second modal if we don't wait a bit
                // eslint-disable-next-line no-promise-executor-return
                yield new Promise((resolve) => setTimeout(resolve, 100));
            }
            // Add token to wallet
            provider.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: token === null || token === void 0 ? void 0 : token.address,
                        symbol: token === null || token === void 0 ? void 0 : token.symbol,
                        decimals: token === null || token === void 0 ? void 0 : token.decimals,
                        image: token === null || token === void 0 ? void 0 : token.logoURI,
                    },
                },
            });
        }
        // TODO: Implement keplr add token
        return false;
    }));
    /**
     * Handle multiple chains
     */
    const networkConnected = (0, react_1.useMemo)(() => {
        switch (chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) {
            case sdk_1.ChainType.EVM:
                return isEvmConnected;
            case sdk_1.ChainType.Cosmos:
                return cosmosIsConnected;
            default:
                return isEvmConnected;
        }
    }, [isEvmConnected, chainToCompare, address, cosmosIsConnected]);
    /**
     * Checks if Network is connected and with the right chain
     */
    const networkConnectedOnRightChain = (0, react_1.useMemo)(() => {
        if ((chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) === sdk_1.ChainType.EVM) {
            return isEvmConnected && (currentEvmChain === null || currentEvmChain === void 0 ? void 0 : currentEvmChain.id) === chainToCompare.chainId;
        }
        // TODO: Implement keplr check
        return true;
    }, [isEvmConnected, currentEvmChain, chainToCompare]);
    return {
        changeNetwork,
        networkConnected,
        networkConnectedOnRightChain,
        connectedAddress,
        parsedAddress,
        addToken,
    };
};
exports.useMultiChain = useMultiChain;
//# sourceMappingURL=useMultiChain.js.map