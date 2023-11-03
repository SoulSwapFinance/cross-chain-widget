/// <reference types="react" />
import type { ChainData } from "@0xsquid/sdk";
import type { Keplr } from "@keplr-wallet/types";
import type { Wallet } from "../core/types/wallet";
export declare const useCosmos: () => {
    connectCosmos: import("@tanstack/react-query").UseMutationResult<void, unknown, {
        chain: ChainData;
        wallet?: Wallet | undefined;
    }, unknown>;
    cosmosAddress: string | undefined;
    cosmosChainId: string | undefined;
    setCosmosChainId: import("react").Dispatch<import("react").SetStateAction<string | undefined>>;
    isConnected: boolean;
    setIsConnected: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    isInstalled: boolean;
    setIsInstalled: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    clearData: () => void;
    onCosmosChainChange: (newChainId: string) => void;
    getCosmosWalletInfos: import("@tanstack/react-query").UseMutationResult<string | undefined, unknown, {
        chainId: string;
        cosmosWalletObject?: Keplr | undefined;
    }, unknown>;
    cosmosConnectedWallet: Wallet | undefined;
    keplrTypeWallet: Keplr;
};
