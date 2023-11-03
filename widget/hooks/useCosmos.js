var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useMutation } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useState } from "react";
import { wallets } from "../core/constants";
import { getCosmosChainInfosObject, getDescendantProp, } from "../services/internal/walletService";
import { useSwapRoutePersistStore } from "../store/useSquidStore";
export const useCosmos = () => {
    const [cosmosAddress, setCosmosAddress] = useState();
    const [cosmosConnectedWallet, setCosmosConnectedWallet] = useState();
    const [cosmosChainId, setCosmosChainId] = useState();
    const [isConnected, setIsConnected] = useState(false);
    const [isInstalled, setIsInstalled] = useState(false);
    const { swapRoute } = useSwapRoutePersistStore();
    const keplrTypeWallet = useMemo(() => { var _a; return window === null || window === void 0 ? void 0 : window[(_a = cosmosConnectedWallet === null || cosmosConnectedWallet === void 0 ? void 0 : cosmosConnectedWallet.windowFlag) !== null && _a !== void 0 ? _a : "keplr"]; }, [cosmosConnectedWallet]);
    const getCosmosWalletInfos = useMutation(({ chainId, cosmosWalletObject, }) => __awaiter(void 0, void 0, void 0, function* () {
        const walletObject = cosmosWalletObject !== null && cosmosWalletObject !== void 0 ? cosmosWalletObject : keplrTypeWallet;
        if (walletObject) {
            const address = yield (walletObject === null || walletObject === void 0 ? void 0 : walletObject.getKey(chainId));
            if (address === null || address === void 0 ? void 0 : address.bech32Address) {
                return address.bech32Address;
            }
        }
        return undefined;
    }));
    const handleKeplrAccountChanged = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (cosmosChainId) {
            const address = yield getCosmosWalletInfos.mutateAsync({
                chainId: cosmosChainId,
            });
            if (address) {
                setIsConnected(true);
                setCosmosAddress(address);
            }
        }
    }), [cosmosChainId, getCosmosWalletInfos]);
    useEffect(() => {
        window.addEventListener("keplr_keystorechange", () => handleKeplrAccountChanged());
        return () => {
            window.removeEventListener("keplr_keystorechange", () => handleKeplrAccountChanged());
        };
    }, [handleKeplrAccountChanged]);
    const connectCosmos = useMutation(({ chain, wallet }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const chainInfos = getCosmosChainInfosObject(chain);
        const selectedWallet = (_a = wallet !== null && wallet !== void 0 ? wallet : cosmosConnectedWallet) !== null && _a !== void 0 ? _a : wallets === null || wallets === void 0 ? void 0 : wallets.find((w) => w.connectorId === "keplr");
        const cosmosWalletObject = selectedWallet
            ? getDescendantProp(window, selectedWallet.windowFlag)
            : undefined;
        if (cosmosWalletObject) {
            setCosmosChainId(chainInfos.chainId.toString());
            try {
                yield cosmosWalletObject.enable(chainInfos.chainId.toString());
                const address = yield getCosmosWalletInfos.mutateAsync({
                    chainId: chain.chainId.toString(),
                    cosmosWalletObject,
                });
                if (address) {
                    setCosmosConnectedWallet(selectedWallet);
                    setIsConnected(true);
                    setCosmosAddress(address);
                    useSwapRoutePersistStore.setState({
                        swapRoute: Object.assign(Object.assign({}, useSwapRoutePersistStore.getState().swapRoute), { destinationAddress: address }),
                    });
                }
            }
            catch (error) {
                const e = error;
                if (e.message !== "Request rejected" &&
                    e.message !== "User rejected the request.") {
                    // Maybe the chain is not supported ?
                    if (cosmosWalletObject.experimentalSuggestChain) {
                        const chainInfos = getCosmosChainInfosObject(chain);
                        try {
                            yield cosmosWalletObject.experimentalSuggestChain(chainInfos);
                            // Now try to connect
                            connectCosmos.mutate({ chain });
                        }
                        catch (error) {
                            console.log("Failed to suggest chain", error);
                        }
                    }
                }
            }
        }
        else {
            setIsInstalled(false);
        }
    }));
    const onCosmosChainChange = (newChainId) => {
        if (newChainId !== cosmosChainId) {
            clearData();
        }
        useSwapRoutePersistStore.setState({
            swapRoute: Object.assign(Object.assign({}, swapRoute), { destinationAddress: cosmosAddress }),
            destinationAddressHasBeenUpdated: {
                updated: false,
                filledFromWallet: false,
            },
        });
    };
    const clearData = () => {
        setIsConnected(false);
        setCosmosChainId(undefined);
        setCosmosAddress(undefined);
    };
    return {
        connectCosmos,
        cosmosAddress,
        cosmosChainId,
        setCosmosChainId,
        isConnected,
        setIsConnected,
        isInstalled,
        setIsInstalled,
        clearData,
        onCosmosChainChange,
        getCosmosWalletInfos,
        cosmosConnectedWallet,
        keplrTypeWallet,
    };
};
//# sourceMappingURL=useCosmos.js.map