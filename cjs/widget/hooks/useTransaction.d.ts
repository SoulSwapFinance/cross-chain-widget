import type { RouteData } from "@0xsquid/sdk";
import type { TransactionReceipt } from "@ethersproject/abstract-provider";
import type { TransactionParams } from "../core/types/transaction";
export declare const useTransaction: () => {
    routeApproved: import("@tanstack/react-query").UseQueryResult<boolean, unknown>;
    approveRoute: import("@tanstack/react-query").UseMutationResult<boolean, unknown, void, unknown>;
    swapQuery: import("@tanstack/react-query").UseMutationResult<TransactionReceipt, any, RouteData | undefined, unknown>;
    currentTransaction: TransactionParams | undefined;
    fromToken: import("@0xsquid/sdk").TokenData | undefined;
    toToken: import("@0xsquid/sdk").TokenData | undefined;
    squidRoute: import("@tanstack/react-query").UseQueryResult<RouteData, unknown>;
    fromPrice: string | undefined;
    toPrice: number | undefined;
    toChain: import("@0xsquid/sdk").ChainData | undefined;
    fromChain: import("@0xsquid/sdk").ChainData | undefined;
    sourceExplorerUrl: string | undefined;
};
