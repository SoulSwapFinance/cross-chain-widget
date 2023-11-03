export declare const useSquidChains: () => {
    supportedChains: import("@tanstack/react-query").UseQueryResult<import("@0xsquid/sdk").ChainData[], unknown>;
    supportedSourceChains: import("@0xsquid/sdk").ChainData[];
    supportedDestinationChains: import("@0xsquid/sdk").ChainData[];
    chains: import("@0xsquid/sdk").ChainData[];
};
