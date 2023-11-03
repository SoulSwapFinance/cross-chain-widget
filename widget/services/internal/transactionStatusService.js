import { axelarSuccessStatuses } from "../../core/constants";
import { SquidStatusErrorType } from "../../core/types/error";
import { AxelarStatusResponseType, TransactionType, } from "../../core/types/transaction";
import { isStatusError } from "./errorService";
/**
 * Get the steps for a transaction
 * First step and second step are always the same
 * @param transaction
 * @param statusResponse
 * @returns {TransactionStepStatus[]}
 */
export const getStepStatuses = ({ transaction, statusResponse, onlyFullStatusStep, }) => {
    let firstStepStatus;
    // "warning" state is a custom one indicating that
    // the user is taking too much time to validate the transaction
    // And can be set to loading
    switch (transaction === null || transaction === void 0 ? void 0 : transaction.status) {
        case "error":
        case "success":
        case "loading":
            firstStepStatus = transaction.status;
            break;
        case "warning":
            firstStepStatus = "loading";
            break;
        default:
            firstStepStatus = "idle";
    }
    let middleStepStatus = !onlyFullStatusStep && firstStepStatus !== "success"
        ? "idle"
        : middleStepChecker(statusResponse);
    const lastStepStatus = getLastStepStatus(firstStepStatus, middleStepStatus);
    // Once we have the last step status,
    // we have to override the middle step for some states
    middleStepStatus =
        middleStepStatus === "need_gas" || middleStepStatus === "received_usdc"
            ? "success"
            : middleStepStatus;
    return onlyFullStatusStep
        ? [middleStepStatus]
        : [firstStepStatus, middleStepStatus, lastStepStatus];
};
const getLastStepStatus = (first, middle) => {
    if (first === "idle" || first === "loading" || first === "error") {
        return "idle";
    }
    switch (middle) {
        case "initialLoading":
        case "loading":
            return "idle";
        default:
            return middle;
    }
};
export const getHalfSuccessState = (data) => {
    var _a, _b, _c;
    if ((data === null || data === void 0 ? void 0 : data.gasStatus) === AxelarStatusResponseType.GAS_PAID_NOT_ENOUGH_GAS &&
        (data === null || data === void 0 ? void 0 : data.status) !== AxelarStatusResponseType.DESTINATION_EXECUTING) {
        return "need_gas";
    }
    // Success cases
    if (axelarSuccessStatuses.includes((_a = data === null || data === void 0 ? void 0 : data.status) !== null && _a !== void 0 ? _a : "")) {
        // "destination_executed" case
        if ((data === null || data === void 0 ? void 0 : data.status) === AxelarStatusResponseType.DESTINATION_EXECUTED ||
            (data === null || data === void 0 ? void 0 : data.status) === AxelarStatusResponseType.EXPRESS_EXECUTED) {
            if (((_b = data === null || data === void 0 ? void 0 : data.toChain) === null || _b === void 0 ? void 0 : _b.callEventStatus) ===
                AxelarStatusResponseType.CROSS_MULTICALL_EXECUTED) {
                return "success";
            }
            if (((_c = data === null || data === void 0 ? void 0 : data.toChain) === null || _c === void 0 ? void 0 : _c.callEventStatus) ===
                AxelarStatusResponseType.CROSS_MULTICALL_FAILED) {
                return "received_usdc";
            }
        }
        return "success";
    }
    return undefined;
};
const middleStepChecker = (statusResponse) => {
    const data = statusResponse === null || statusResponse === void 0 ? void 0 : statusResponse.data;
    const successState = getHalfSuccessState(data);
    if (successState) {
        return successState;
    }
    if ((data === null || data === void 0 ? void 0 : data.status) === AxelarStatusResponseType.ERROR) {
        const { error } = data;
        if (isStatusError(error)) {
            if (error.errorType === SquidStatusErrorType.NotFoundError) {
                return "error";
            }
        }
        return "error";
    }
    if (statusResponse === null || statusResponse === void 0 ? void 0 : statusResponse.isInitialLoading) {
        return "initialLoading";
    }
    return "loading";
};
export const getStepsInfos = ({ fromChain, toChain, fromToken, toToken, amount, txType, transaction, statusResponse, }) => {
    var _a, _b;
    const [firstStepStatus, middleStepStatus, lastStepStatus] = getStepStatuses({
        transaction,
        statusResponse,
    });
    const payLabel = `Pay ${amount} ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} on ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName}`;
    const swapForUSDCLabel = `Swap ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} for axlUSDC`;
    const sendUSDCLabel = `Send axlUSDC to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}`;
    const swapUSDCLabel = `Swap axlUSDC for ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}`;
    const receiveLabel = `Receive ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol} on ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}`;
    const axelarUrl = transaction === null || transaction === void 0 ? void 0 : transaction.axelarUrl;
    const sourceExplorerUrl = transaction === null || transaction === void 0 ? void 0 : transaction.sourceTxExplorerUrl;
    const destinationExplorerUrl = (_b = (_a = statusResponse === null || statusResponse === void 0 ? void 0 : statusResponse.data) === null || _a === void 0 ? void 0 : _a.toChain) === null || _b === void 0 ? void 0 : _b.transactionUrl;
    switch (txType) {
        case TransactionType.CALL_BRIDGE_CALL:
            return [
                {
                    label: payLabel,
                    status: firstStepStatus,
                    link: sourceExplorerUrl,
                    subTitle: "View on explorer",
                },
                {
                    label: swapForUSDCLabel,
                    status: firstStepStatus !== "success" ? "idle" : firstStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: sendUSDCLabel,
                    status: middleStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: swapUSDCLabel,
                    status: middleStepStatus !== "success" ? "idle" : middleStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: receiveLabel,
                    status: lastStepStatus,
                    link: destinationExplorerUrl,
                    subTitle: "View on explorer",
                },
            ];
        case TransactionType.CALL_BRIDGE:
            return [
                {
                    label: payLabel,
                    status: firstStepStatus,
                    link: sourceExplorerUrl,
                    subTitle: "View on explorer",
                },
                {
                    label: swapForUSDCLabel,
                    status: firstStepStatus !== "success" ? "idle" : firstStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: sendUSDCLabel,
                    status: middleStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: receiveLabel,
                    status: lastStepStatus,
                    link: destinationExplorerUrl,
                    subTitle: "View on explorer",
                },
            ];
        case TransactionType.BRIDGE:
            return [
                {
                    label: payLabel,
                    status: firstStepStatus,
                    link: sourceExplorerUrl,
                    subTitle: "View on explorer",
                },
                {
                    label: sendUSDCLabel,
                    status: firstStepStatus !== "success" ? "idle" : firstStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: receiveLabel,
                    status: lastStepStatus,
                    link: destinationExplorerUrl,
                    subTitle: "View on explorer",
                },
            ];
        case TransactionType.BRIDGE_CALL:
            return [
                {
                    label: payLabel,
                    status: firstStepStatus,
                    link: sourceExplorerUrl,
                    subTitle: "View on explorer",
                },
                {
                    label: sendUSDCLabel,
                    status: firstStepStatus !== "success" ? "idle" : firstStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: swapUSDCLabel,
                    status: middleStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: receiveLabel,
                    status: lastStepStatus,
                    link: destinationExplorerUrl,
                    subTitle: "View on explorer",
                },
            ];
        default:
            return [];
    }
};
//# sourceMappingURL=transactionStatusService.js.map