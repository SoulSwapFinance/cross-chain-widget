import type { ChainData, TokenData } from "@0xsquid/sdk";
export declare const useMultiChainBalance: (chainToCompare: ChainData | undefined, tokenToCompare: TokenData | undefined, direction?: "from" | "to") => {
    balance: string | undefined;
};
