"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSingleTransaction = void 0;
const react_query_1 = require("@tanstack/react-query");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const constants_1 = require("../core/constants");
const queries_keys_1 = require("../core/queries/queries-keys");
const transactionService_1 = require("../services/internal/transactionService");
const transactionStatusService_1 = require("../services/internal/transactionStatusService");
const useSquidStore_1 = require("../store/useSquidStore");
const useSquidRouter_1 = require("./useSquidRouter");
const useSingleTransaction = (transaction, disableIfTransactionLoading = true) => {
    var _a, _b, _c, _d;
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const { currentRoute } = (0, useSquidRouter_1.useSquidRouter)();
    const [refetchInterval, setRefetchInterval] = (0, react_1.useState)(10000);
    const { transactionsHistory } = (0, useSquidStore_1.usePersistStore)();
    const currentHistoryItem = (0, react_1.useMemo)(() => transactionsHistory === null || transactionsHistory === void 0 ? void 0 : transactionsHistory.find((th) => th.transactionId === (transaction === null || transaction === void 0 ? void 0 : transaction.transactionId)), [transactionsHistory, transaction]);
    /**
     * Transaction status endpoint
     * Squid api is using axelar endpoint and parsing the response
     * @returns {StatusResponse} Status response
     */
    const transactionStatusQuery = (0, react_query_1.useQuery)((0, queries_keys_1.keys)({ apiUrl: config.apiUrl }).transactionStatus(transaction), () => __awaiter(void 0, void 0, void 0, function* () {
        var _e, _f;
        const statusEndpoint = `${config.apiUrl}/v1/status`;
        const response = yield ((_f = axios_1.default
            .get(statusEndpoint, {
            params: {
                transactionId: transaction === null || transaction === void 0 ? void 0 : transaction.transactionId,
            },
            headers: {
                "X-Integrator-Id": config.integratorId,
                "X-Request-Id": (_e = useSquidStore_1.useSquidStore.getState().currentRequestId) !== null && _e !== void 0 ? _e : "",
            },
        })) === null || _f === void 0 ? void 0 : _f.catch((error) => {
            throw new Error("Fetch transaction status failed", {
                cause: error,
            });
        }));
        return response.data;
    }), {
        enabled: transaction !== undefined &&
            (currentHistoryItem === null || currentHistoryItem === void 0 ? void 0 : currentHistoryItem.status) !== "error" &&
            ((_a = transaction === null || transaction === void 0 ? void 0 : transaction.statusResponse) === null || _a === void 0 ? void 0 : _a.status) !== "destination_executed" &&
            ((_b = transaction === null || transaction === void 0 ? void 0 : transaction.statusResponse) === null || _b === void 0 ? void 0 : _b.status) !== "express_executed" &&
            (disableIfTransactionLoading ? transaction.status !== "loading" : true),
        refetchInterval(data, query) {
            var _a;
            const statusResponse = data;
            // If the status response is something telling that the transaction
            // is finished, then store transaction history state if success
            // And return false to indicate refetcher to stop
            if (statusResponse &&
                constants_1.axelarEndStatuses.includes((_a = statusResponse.status) !== null && _a !== void 0 ? _a : "")) {
                return false;
            }
            return refetchInterval; // Had to handle a variable here because after onError, we want the interval to stop
        },
        retryDelay: 3000,
        retry: currentRoute.id === "transaction" ? 25 : 1,
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            var _a;
            const statusResponse = data;
            if (statusResponse &&
                constants_1.axelarSuccessStatuses.includes((_a = statusResponse.status) !== null && _a !== void 0 ? _a : "") &&
                (currentHistoryItem === null || currentHistoryItem === void 0 ? void 0 : currentHistoryItem.status) !== "success") {
                useSquidStore_1.usePersistStore.setState({
                    transactionsHistory: (0, transactionService_1.updateTransactionHistoryStatus)(transaction === null || transaction === void 0 ? void 0 : transaction.transactionId, "success", useSquidStore_1.usePersistStore.getState().transactionsHistory, statusResponse),
                });
            }
        },
        onError: (error) => {
            var _a, _b;
            // Check if axios error and if it's a 404
            const is404 = ((_b = (_a = error.cause) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.status) === 404;
            setRefetchInterval(-1);
            useSquidStore_1.usePersistStore.setState({
                transactionsHistory: (0, transactionService_1.updateTransactionHistoryStatus)(transaction === null || transaction === void 0 ? void 0 : transaction.transactionId, is404 ? "data_unavailable" : "error", useSquidStore_1.usePersistStore.getState().transactionsHistory, undefined),
            });
        },
    });
    /**
     * Return the status of the latest transaction step
     * Could be "error", "loading", "idle", "success", "paused"
     * If the transaction getter fails to fetch the transaction, it will return "error"
     */
    const latestStatus = (0, react_1.useMemo)(() => {
        var _a;
        if ((currentHistoryItem === null || currentHistoryItem === void 0 ? void 0 : currentHistoryItem.status) === "success") {
            return ((_a = (0, transactionStatusService_1.getHalfSuccessState)(currentHistoryItem.statusResponse)) !== null && _a !== void 0 ? _a : "success");
        }
        // Sometimes We get a 404 from the transactionStatus getter
        // This doesnt mean that the transaction failed, but could mean that the transaction is not yet indexed
        if ((currentHistoryItem === null || currentHistoryItem === void 0 ? void 0 : currentHistoryItem.status) === "data_unavailable") {
            return "data_unavailable";
        }
        if ((currentHistoryItem === null || currentHistoryItem === void 0 ? void 0 : currentHistoryItem.status) === "error") {
            return "error";
        }
        const statuses = (0, transactionStatusService_1.getStepStatuses)({
            transaction,
            statusResponse: transactionStatusQuery,
            onlyFullStatusStep: true,
        });
        return statuses[statuses.length - 1];
    }, [transaction, transactionStatusQuery, currentHistoryItem]);
    const fromChain = (0, react_1.useMemo)(() => { var _a; return (_a = transactionStatusQuery.data) === null || _a === void 0 ? void 0 : _a.fromChain; }, [(_c = transactionStatusQuery.data) === null || _c === void 0 ? void 0 : _c.fromChain]);
    const toChain = (0, react_1.useMemo)(() => { var _a; return (_a = transactionStatusQuery.data) === null || _a === void 0 ? void 0 : _a.toChain; }, [(_d = transactionStatusQuery.data) === null || _d === void 0 ? void 0 : _d.toChain]);
    return {
        transactionStatusQuery,
        fromChain,
        toChain,
        latestStatus,
    };
};
exports.useSingleTransaction = useSingleTransaction;
//# sourceMappingURL=useSingleTransaction.js.map