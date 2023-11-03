export declare const usePrices: () => {
    tokenPrices: import("@tanstack/react-query").UseQueryResult<{
        sourceTokenUsdPrice: number;
        destinationTokenUsdPrice: number;
    }, unknown>;
};
