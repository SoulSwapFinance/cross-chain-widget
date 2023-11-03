import type { ChainData, TokenData } from "@0xsquid/sdk";
import type { TokenWithBalance } from "../core/types/tokens";
export declare const useTokensWithBalance: (chainData?: ChainData, direction?: "from" | "to") => {
    evmBalances: import("@tanstack/react-query").UseQueryResult<TokenWithBalance[], unknown>;
    cosmosBalances: import("@tanstack/react-query").UseQueryResult<TokenWithBalance[], unknown>;
    tokens: TokenData[];
};
