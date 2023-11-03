import type { ChainData, StatusResponse } from "@0xsquid/sdk";
import type { TransactionHistoryStore, TransactionStatuses } from "../../core/types/transaction";
/**
 * Helper to find the desired transaction history in array
 * @param transactionID
 * @returns
 */
export declare const findHistoryItem: (transactionID: string | undefined) => TransactionHistoryStore | undefined;
/**
 * Will return the same object but with the desired transaction history
 * Status changed
 * @param transactionID
 * @param status
 * @param transactionsHistory
 * @param statusResponse
 * @returns
 */
export declare const updateTransactionHistoryStatus: (transactionID: string | undefined, status: TransactionStatuses, transactionsHistory: TransactionHistoryStore[] | undefined, statusResponse: StatusResponse | undefined) => TransactionHistoryStore[];
export declare const replaceTransactionAtNonce: (nonce: number, fromAddress: string, transactionsHistory: TransactionHistoryStore[] | undefined, TransactionHistoryStore: TransactionHistoryStore) => TransactionHistoryStore[];
export declare const formatTransactionHistoryDate: (transaction: TransactionHistoryStore | undefined) => {
    month: string;
    day: string;
} | undefined;
export declare const getAxelarExplorerTxUrl: (urlPrefix: string | undefined, routeType: string | undefined, txID: string) => string | undefined;
export declare const getExplorerTxUrl: (chain: ChainData | undefined, txID: string) => string;
export declare const formatSeconds: (seconds: number, secondsTemplate?: string, minutesTemplate?: string) => string;
