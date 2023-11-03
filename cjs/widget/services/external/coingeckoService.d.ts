interface CoingeckoPriceQuery {
    apiUrl?: string;
    chainId?: string;
    tokenAddress?: string;
}
export declare const fetchPriceForToken: ({ apiUrl, chainId, tokenAddress, }: CoingeckoPriceQuery) => Promise<number>;
export {};
