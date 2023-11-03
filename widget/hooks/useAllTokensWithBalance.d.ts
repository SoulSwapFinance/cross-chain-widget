import type { TokenWithBalance } from "../core/types/tokens";
export declare const useAllTokensWithBalance: (direction: "from" | "to") => {
    tokensWithBalanceQuery: import("@tanstack/react-query").UseQueryResult<TokenWithBalance[], unknown>;
    getTokensWithPrices: import("@tanstack/react-query").UseQueryResult<(import("@0xsquid/sdk").TokenData & {
        balance: string;
        priceUSD?: string | undefined;
        isFavorite?: boolean | undefined;
    })[], unknown>;
    tokens: TokenWithBalance[];
};
