import type { StatusResponse } from "@0xsquid/sdk";
import type { AxiosError } from "axios";
import type { StatusResponseType, TransactionParams } from "../core/types/transaction";
export declare const useSingleTransaction: (transaction: TransactionParams | undefined, disableIfTransactionLoading?: boolean) => {
    transactionStatusQuery: import("@tanstack/react-query").UseQueryResult<StatusResponse, Error | AxiosError<unknown, any>>;
    fromChain: import("@0xsquid/sdk").TransactionStatus | undefined;
    toChain: import("@0xsquid/sdk").TransactionStatus | undefined;
    latestStatus: StatusResponseType;
};
