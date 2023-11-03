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
exports.useWallet = void 0;
const sdk_1 = require("@0xsquid/sdk");
const wagmi_1 = require("wagmi");
const constants_1 = require("../core/constants");
const CosmosProvider_1 = require("../core/providers/CosmosProvider");
const walletService_1 = require("../services/internal/walletService");
const useSquidChains_1 = require("./useSquidChains");
const useSquidRouter_1 = require("./useSquidRouter");
const useWallet = (chain) => {
    const { connector: activeConnector } = (0, wagmi_1.useAccount)();
    const { isConnected: isEvmConnected } = (0, wagmi_1.useAccount)();
    const { disconnectAsync: disconnectEvm } = (0, wagmi_1.useDisconnect)();
    const { isConnected: cosmosIsConnected, connectCosmos } = (0, CosmosProvider_1.useCosmosContext)();
    const { connectAsync } = (0, wagmi_1.useConnect)();
    const { previousRoute } = (0, useSquidRouter_1.useSquidRouter)();
    const { chains } = (0, useSquidChains_1.useSquidChains)();
    const connectWallet = (wallet, redirect) => __awaiter(void 0, void 0, void 0, function* () {
        (0, walletService_1.redirectExtensionStoreIfNotInstalled)(wallet);
        try {
            if (wallet && wallet.connector && wallet.type === sdk_1.ChainType.EVM) {
                yield disconnectEvm();
                yield connectAsync({
                    connector: wallet.connector((0, walletService_1.formatChainsForWagmi)(chains)),
                });
            }
            else if (wallet.type === sdk_1.ChainType.Cosmos && chain) {
                yield (connectCosmos === null || connectCosmos === void 0 ? void 0 : connectCosmos.mutateAsync({ chain, wallet }));
            }
            if (redirect) {
                previousRoute();
            }
        }
        catch (error) {
            console.error(error);
        }
    });
    /**
     * Get the connected wallet object
     * @returns {Wallet | undefined}
     */
    const currentWallet = () => {
        if ((chain === null || chain === void 0 ? void 0 : chain.chainType) === sdk_1.ChainType.EVM) {
            if ((activeConnector === null || activeConnector === void 0 ? void 0 : activeConnector.id) && isEvmConnected) {
                const activeWallet = constants_1.wallets.find((w) => w.connectorId === activeConnector.id);
                return activeWallet;
            }
        }
        if ((chain === null || chain === void 0 ? void 0 : chain.chainType) === sdk_1.ChainType.Cosmos) {
            if ((activeConnector === null || activeConnector === void 0 ? void 0 : activeConnector.id) && cosmosIsConnected) {
                // At the moment we dont know how to differentiate
                // So we return keplr by default
                return constants_1.wallets.find((w) => w.connectorId === "keplr");
            }
        }
        return undefined;
    };
    return {
        currentWallet: currentWallet(),
        connectWallet,
    };
};
exports.useWallet = useWallet;
//# sourceMappingURL=useWallet.js.map