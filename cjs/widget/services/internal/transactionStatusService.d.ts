import type { ChainData, StatusResponse, TokenData } from "@0xsquid/sdk";
import type { UseQueryResult } from "@tanstack/react-query";
import type { StatusResponseType, StepStatusGetterProps, TransactionParams } from "../../core/types/transaction";
import { TransactionType } from "../../core/types/transaction";
/**
 * Get the steps for a transaction
 * First step and second step are always the same
 * @param transaction
 * @param statusResponse
 * @returns {TransactionStepStatus[]}
 */
export declare const getStepStatuses: ({ transaction, statusResponse, onlyFullStatusStep, }: StepStatusGetterProps) => StatusResponseType[];
export declare const getHalfSuccessState: (data?: StatusResponse) => "success" | "received_usdc" | "need_gas" | undefined;
export declare const getStepsInfos: ({ fromChain, toChain, fromToken, toToken, amount, txType, transaction, statusResponse, }: {
    txType: TransactionType;
    amount: string;
    fromChain?: ChainData | undefined;
    toChain?: ChainData | undefined;
    fromToken?: TokenData | undefined;
    toToken?: TokenData | undefined;
    transaction?: TransactionParams | undefined;
    statusResponse?: UseQueryResult<StatusResponse, unknown> | undefined;
}) => {
    label: string;
    status: StatusResponseType;
    subTitle?: string;
    link?: string;
}[];
