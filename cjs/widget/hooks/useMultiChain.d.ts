import type { ChainData, TokenData } from "@0xsquid/sdk";
export declare const useMultiChain: (chainToCompare: ChainData | undefined, tokenToCompare: TokenData | undefined) => {
    changeNetwork: import("@tanstack/react-query").UseMutationResult<boolean, any, void, unknown>;
    networkConnected: boolean | undefined;
    networkConnectedOnRightChain: boolean;
    connectedAddress: string | undefined;
    parsedAddress: string;
    addToken: import("@tanstack/react-query").UseMutationResult<boolean, unknown, void | TokenData, unknown>;
};
