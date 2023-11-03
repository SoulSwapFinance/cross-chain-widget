import type { ChainData, RouteData, StatusResponse, TokenData } from "@0xsquid/sdk";
import type { UseQueryResult } from "@tanstack/react-query";
import type { TransactionErrorWithMessage } from "./error";
export declare enum TransactionType {
    BRIDGE = "BRIDGE",
    BRIDGE_CALL = "BRIDGE_CALL",
    CALL_BRIDGE = "CALL_BRIDGE",
    CALL_BRIDGE_CALL = "CALL_BRIDGE_CALL"
}
export declare enum AxelarStatusResponseType {
    GAS_PAID_NOT_ENOUGH_GAS = "gas_paid_not_enough_gas",
    DESTINATION_EXECUTED = "destination_executed",
    EXPRESS_EXECUTED = "express_executed",
    CROSS_MULTICALL_EXECUTED = "CrossMulticallExecuted",
    CROSS_MULTICALL_FAILED = "CrossMulticallFailed",
    SRC_GATEWAY_CALLED = "source_gateway_called",
    DEST_GATEWAY_APPROVED = "destination_gateway_approved",
    DESTINATION_EXECUTE_ERROR = "destination_execute_error",
    DESTINATION_EXECUTING = "executing",
    UNKNOWN_ERROR = "unknown_error",
    CANNOT_FETCH_STATUS = "cannot_fetch_status",
    ERROR = "error"
}
export type TransactionStatuses = "loading" | "success" | "error" | "warning" | "data_unavailable";
export type StatusResponseType = "error" | "not_found" | "loading" | "initialLoading" | "success" | "received_usdc" | "need_gas" | "data_unavailable" | "idle" | undefined;
export interface TransactionParams {
    routeType: string;
    nonce: number;
    transactionId: string | undefined;
    chain?: ChainData;
    timestamp?: number;
    status: TransactionStatuses;
    error?: TransactionErrorWithMessage;
    fromAddress?: string;
    statusResponse?: StatusResponse;
    axelarUrl?: string;
    sourceTxExplorerUrl?: string;
    sourceExplorerImgUrl?: string;
}
export type TransactionHistoryStore = TransactionParams & Pick<RouteData, "params">;
export interface TransactionStepsProps {
    currentTransaction?: TransactionParams;
    sourceExplorerUrl?: string;
    fromToken?: TokenData;
    toToken?: TokenData;
    toChain?: ChainData;
    fromChain?: ChainData;
}
export type TransactionStepProps = TransactionStepsProps & {
    statusResponse?: UseQueryResult<StatusResponse, unknown>;
};
export interface StepStatusGetterProps {
    transaction?: TransactionParams;
    statusResponse?: UseQueryResult<StatusResponse, unknown>;
    onlyFullStatusStep?: boolean;
}
