import type { EvmTransactionError, SquidRouteError, SquidStatusError, TransactionErrorWithMessage } from "../../core/types/error";
export declare const transactionErrorCode: Record<string, TransactionErrorWithMessage>;
/**
 * Check if the error is an EVM transaction error
 * Because Typescript supports casting but that's only for compilation time,
 * We need it at runtime since we're getting the error object from the wallet
 * @param error
 * @returns boolean
 */
export declare const isEvmTransactionError: (error: any) => error is EvmTransactionError;
/**
 * Return the error from enum entry
 * @param error
 * @returns boolean
 */
export declare const getTransactionError: (error: any) => TransactionErrorWithMessage;
/**
 * Check if the error is an Squid route error
 * Because Typescript supports casting but that's only for compilation time,
 * We need it at runtime since we're getting the error object from the wallet
 * @param error
 * @returns boolean
 */
export declare const isSwapRouteError: (error: any) => error is SquidRouteError;
export declare const isStatusError: (error: any) => error is SquidStatusError;
/**
 * Tries to parse as SquidRouteError Type & Return the error from Record entries
 * @param error
 * @returns string error message
 */
export declare const getSquidRouteErrorMessage: (error: any) => string | JSX.Element;
