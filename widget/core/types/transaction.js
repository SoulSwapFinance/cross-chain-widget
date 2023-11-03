export var TransactionType;
(function (TransactionType) {
    TransactionType["BRIDGE"] = "BRIDGE";
    TransactionType["BRIDGE_CALL"] = "BRIDGE_CALL";
    TransactionType["CALL_BRIDGE"] = "CALL_BRIDGE";
    TransactionType["CALL_BRIDGE_CALL"] = "CALL_BRIDGE_CALL";
})(TransactionType || (TransactionType = {}));
export var AxelarStatusResponseType;
(function (AxelarStatusResponseType) {
    AxelarStatusResponseType["GAS_PAID_NOT_ENOUGH_GAS"] = "gas_paid_not_enough_gas";
    AxelarStatusResponseType["DESTINATION_EXECUTED"] = "destination_executed";
    AxelarStatusResponseType["EXPRESS_EXECUTED"] = "express_executed";
    AxelarStatusResponseType["CROSS_MULTICALL_EXECUTED"] = "CrossMulticallExecuted";
    AxelarStatusResponseType["CROSS_MULTICALL_FAILED"] = "CrossMulticallFailed";
    AxelarStatusResponseType["SRC_GATEWAY_CALLED"] = "source_gateway_called";
    AxelarStatusResponseType["DEST_GATEWAY_APPROVED"] = "destination_gateway_approved";
    AxelarStatusResponseType["DESTINATION_EXECUTE_ERROR"] = "destination_execute_error";
    AxelarStatusResponseType["DESTINATION_EXECUTING"] = "executing";
    AxelarStatusResponseType["UNKNOWN_ERROR"] = "unknown_error";
    AxelarStatusResponseType["CANNOT_FETCH_STATUS"] = "cannot_fetch_status";
    AxelarStatusResponseType["ERROR"] = "error";
})(AxelarStatusResponseType || (AxelarStatusResponseType = {}));
//# sourceMappingURL=transaction.js.map