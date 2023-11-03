import type { RouteData } from "@0xsquid/sdk";
import { ChainType } from "@0xsquid/sdk";
import type { SlippageOption } from "../types/config";
import type { SwapRoute } from "../types/swap";
import type { TransactionParams } from "../types/transaction";
/**
 * Cache keys implementation for react-query caching / invalidating
 * For example if you invalidate a top level query, all its child will be invalidated, e.g "all" key
 * @returns Query Keys array
 */
export declare const keys: ({ address, apiUrl, }: {
    address?: string | undefined;
    apiUrl?: string | undefined;
}) => {
    all: (string | undefined)[];
    chains: () => (string | undefined)[];
    tokens: () => (string | undefined)[];
    tokensForChain: (chainId?: number | string) => (string | number | undefined)[];
    tokensPrice: (swapRoute: SwapRoute | undefined) => (string | number | undefined)[];
    singleTokenPrice: (tokenAddress?: string, chainId?: number | string) => (string | number | undefined)[];
    axelarTokens: () => (string | undefined)[];
    balances: () => (string | undefined)[];
    balance: (chainId?: number | string, tokenAddress?: string, userAddress?: string, chainType?: ChainType) => (string | number | undefined)[];
    nativeBalanceBigNumber: (chainId?: number | string, tokenAddress?: string, chainType?: ChainType) => (string | number | undefined)[];
    tokensBalanceForChain: (chainType: ChainType, chainId?: number | string) => (string | number | undefined)[];
    allTokensBalance: (direction: "from" | "to") => (string | undefined)[];
    allTokensPriceUSDAndBalance: () => (string | undefined)[];
    transactions: () => (string | undefined)[];
    transaction: (swapDirection: SwapRoute | undefined, price: string | undefined, slippage: SlippageOption | undefined, infiniteApproval: boolean | undefined, getGasOnDestination: boolean | undefined, expressEnabled: boolean | undefined) => (string | number | boolean | undefined)[];
    transactionStatus: (currentTransaction?: TransactionParams) => (string | undefined)[];
    transactionStatusRefetcher: (currentTransaction?: TransactionParams) => (string | undefined)[];
    routeApproved: (swapDirection: SwapRoute | undefined, sender: string | undefined, routeData: RouteData | undefined) => (string | number | undefined)[];
    aproveRoute: () => string[];
};
