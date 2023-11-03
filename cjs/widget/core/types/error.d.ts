import type { TransactionResponse } from "@ethersproject/providers";
import type { BigNumber } from "ethers";
export declare enum TransactionErrorType {
    REJECTED_BY_USER = 0,
    CALL_EXCEPTION = 1,
    UNKNOWN = 2,
    WARNING = 3
}
export type TransactionErrorWithMessage = {
    type: TransactionErrorType;
    message: string;
};
export interface TransactionReplacedError extends Error {
    code: string;
    replacement: TransactionResponse;
}
export interface EvmTransactionError {
    reason: string;
    code: string;
    action: string;
    transaction: {
        to: string;
        data: string;
        gasLimit: number;
        value: {
            type: BigNumber;
            hex: string;
        };
        from: string;
    };
}
export interface SquidRouteError {
    code?: string;
    errorType?: string;
    message?: string;
}
export interface SquidStatusError {
    errorType?: string;
}
export type SquidRouteErrorType = "Unknown" | "UnknownError" | "SquidServiceError";
export declare enum SquidStatusErrorType {
    NotFoundError = "NotFoundError"
}
