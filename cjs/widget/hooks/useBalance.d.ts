import type { ChainData, CosmosChain, TokenData } from "@0xsquid/sdk";
import { ethers } from "ethers";
export declare const useBalance: ({ chain, token, userAddress, enabled, }: {
    chain?: ChainData | undefined;
    token?: TokenData | undefined;
    userAddress: string;
    enabled?: boolean | undefined;
}) => {
    balance: import("@tanstack/react-query").UseQueryResult<string, unknown>;
};
export declare const useNativeTokenBalanceFromChain: () => {
    balance: import("@tanstack/react-query").UseQueryResult<ethers.BigNumber, unknown>;
};
export declare const useNativeTokenBalanceDestinationChain: () => {
    balance: import("@tanstack/react-query").UseQueryResult<ethers.BigNumber, unknown>;
};
export declare const useCosmosBalance: ({ chainData, token, userAddress, enabled, }: {
    chainData: CosmosChain | undefined;
    token?: TokenData | undefined;
    userAddress?: string | undefined;
    enabled?: boolean | undefined;
}) => {
    balance: import("@tanstack/react-query").UseQueryResult<string | undefined, unknown>;
};
