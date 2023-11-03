import type { ChainData } from "@0xsquid/sdk";
import type { Keplr } from "@keplr-wallet/types";
import type { UseMutationResult } from "@tanstack/react-query";
import type { ReactNode } from "react";
import React from "react";
import type { Wallet } from "../types/wallet";
interface ICosmsosContextData {
    connectCosmos?: UseMutationResult<void, unknown, {
        chain: ChainData;
        wallet?: Wallet;
    }, unknown>;
    cosmosAddress?: string;
    cosmosConnectedWallet?: Wallet;
    keplrTypeWallet?: Keplr;
    cosmosChainId?: string;
    setCosmosChainId?: React.Dispatch<React.SetStateAction<string | undefined>>;
    isConnected?: boolean;
    onCosmosChainChange?: (chainId: string) => void;
    isInstalled?: boolean;
}
export declare const CosmosContext: React.Context<ICosmsosContextData>;
export declare const CosmosProvider: React.FC<{
    children?: ReactNode;
}>;
export declare function useCosmosContext(): ICosmsosContextData;
export {};
