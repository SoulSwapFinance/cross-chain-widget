import type { TokenData } from "@0xsquid/sdk";
export declare const useSwap: () => {
    tokenItems: {
        from: TokenData[];
        to: TokenData[];
    };
    onSwapChange: ({ fromChainId, toChainId, fromTokenAddress, toTokenAddress, destinationAddress, }: {
        fromChainId?: string | number | undefined;
        toChainId?: string | number | undefined;
        fromTokenAddress?: string | undefined;
        toTokenAddress?: string | undefined;
        destinationAddress?: string | undefined;
    }) => Promise<void>;
    invertSwaps: () => void;
    fromPrice: string | undefined;
    toPrice: number | undefined;
    fromPriceChanged: (price: string) => void;
    toToken: TokenData | undefined;
    fromToken: TokenData | undefined;
    fromChain: import("@0xsquid/sdk").ChainData | undefined;
    toChain: import("@0xsquid/sdk").ChainData | undefined;
    destinationAddress: string | undefined;
};
