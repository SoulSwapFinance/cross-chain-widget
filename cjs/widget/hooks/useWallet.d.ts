import type { ChainData } from "@0xsquid/sdk";
import type { Wallet } from "../core/types/wallet";
export declare const useWallet: (chain: ChainData | undefined) => {
    currentWallet: Wallet | undefined;
    connectWallet: (wallet: Wallet, redirect?: boolean) => Promise<void>;
};
