var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TransactionStatus as GnosisTransactionStatus } from "@safe-global/safe-apps-sdk/dist/src/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { utils } from "ethers";
import { Logger } from "ethers/lib/utils.js";
import { useCallback, useMemo } from "react";
import { useAccount, useSigner } from "wagmi";
import { defaultSlippage } from "../core/constants";
import { keys } from "../core/queries/queries-keys";
import { routes } from "../core/routes";
import { TransactionErrorType } from "../core/types/error";
import { getTransactionError } from "../services/internal/errorService";
import { getAxelarExplorerTxUrl, getExplorerTxUrl, replaceTransactionAtNonce, updateTransactionHistoryStatus, } from "../services/internal/transactionService";
import { usePersistStore, useSquidStore, useSwapRoutePersistStore, } from "../store/useSquidStore";
import { useGnosisContext } from "./useGnosisContext";
import { useMultiChain } from "./useMultiChain";
import { useSquidRouter } from "./useSquidRouter";
import { useSwap } from "./useSwap";
export const useTransaction = () => {
    const signer = useSigner();
    const { currentRoute } = useSquidRouter();
    const queryClient = useQueryClient();
    const { fromPrice, toPrice, squid, currentTransaction, config } = useSquidStore();
    const { swapRoute } = useSwapRoutePersistStore();
    const { connector: activeConnector } = useAccount();
    const { fromChain, toChain, fromToken, toToken, destinationAddress } = useSwap();
    const { getGnosisSafeContext } = useGnosisContext();
    const { connectedAddress: sourceUserAddress } = useMultiChain(fromChain, fromToken);
    const sourceExplorerUrl = useMemo(() => {
        if (!fromChain ||
            fromChain.blockExplorerUrls.length === 0 ||
            !(currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.transactionId)) {
            return undefined;
        }
        return `${fromChain.blockExplorerUrls[0]}/tx/${currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.transactionId}`;
    }, [currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.transactionId, fromChain]);
    /**
     * Fetching route data from the API
     * These data will be used to trigger the transaction
     * @returns {Route} Route data
     */
    const squidRoute = useQuery(keys({
        address: destinationAddress,
        apiUrl: config.apiUrl,
    }).transaction(swapRoute, fromPrice, config.slippage, config.infiniteApproval, config.enableGetGasOnDestination, config.enableExpress), () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const params = {
            fromChain: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId,
            fromToken: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress,
            fromAmount: utils
                .parseUnits((_a = fromPrice === null || fromPrice === void 0 ? void 0 : fromPrice.toString()) !== null && _a !== void 0 ? _a : "0", fromToken === null || fromToken === void 0 ? void 0 : fromToken.decimals)
                .toString(),
            toChain: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId,
            toToken: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress,
            toAddress: destinationAddress !== null && destinationAddress !== void 0 ? destinationAddress : "",
            quoteOnly: destinationAddress === undefined,
            slippage: (_b = config.slippage) !== null && _b !== void 0 ? _b : defaultSlippage,
            enableExpress: config.enableExpress,
            prefer: config.preferDex,
            receiveGasOnDestination: config.enableGetGasOnDestination,
        };
        const { route, requestId } = yield squid.getRoute(Object.assign({}, params));
        useSquidStore.setState({
            currentRequestId: requestId,
        });
        return route;
    }), {
        enabled: squid !== undefined &&
            fromPrice !== undefined &&
            fromPrice !== "0" &&
            (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId) !== undefined &&
            swapRoute.toTokenAddress !== undefined &&
            (currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.path) !== routes.transaction.path,
        cacheTime: 7500,
        staleTime: 4000,
        refetchOnWindowFocus: (query) => Date.now() - query.state.dataUpdatedAt > 30000,
        refetchIntervalInBackground: false,
        refetchInterval: 30000, // Refetch every 30 seconds
    });
    /**
     * Checking if spending tokens is allowed for this source address
     * On Success: storing the transaction
     * On Error: Showing the error message if any
     * @returns {boolean} approved
     */
    const routeApproved = useQuery(keys({
        address: sourceUserAddress,
        apiUrl: config.apiUrl,
    }).routeApproved(swapRoute, sourceUserAddress, squidRoute.data), () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { isApproved } = yield squid.isRouteApproved({
                route: squidRoute.data,
                sender: sourceUserAddress,
            });
            return isApproved;
        }
        catch (error) {
            return false;
        }
    }), {
        enabled: !!squidRoute.data && !!sourceUserAddress,
    });
    /**
     * Manually approve route if necessary
     */
    const approveRoute = useMutation(keys({
        address: sourceUserAddress,
        apiUrl: config.apiUrl,
    }).aproveRoute(), () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (squidRoute.data && signer.data) {
                const approved = yield squid.approveRoute({
                    route: squidRoute.data,
                    signer: signer.data,
                    executionSettings: { infiniteApproval: config.infiniteApproval },
                });
                return approved;
            }
            return false;
        }
        catch (error) {
            return false;
        }
    }), {
        onSuccess: (data, variable) => {
            queryClient.invalidateQueries(keys({
                address: sourceUserAddress,
                apiUrl: config.apiUrl,
            }).routeApproved(swapRoute, sourceUserAddress, squidRoute.data));
        },
    });
    /**
     * There's a specific way to get the transaction hash for the safe connector
     * SO if the app is being used inside the safe container, we need to use the safe sdk to get the tx hash
     * @param connector
     * @param hashReceived
     * @returns
     */
    const getTransactionHash = (connector, hashReceived) => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        if ((connector === null || connector === void 0 ? void 0 : connector.id) === "safe") {
            const safeSdk = yield getGnosisSafeContext();
            const tx = yield (safeSdk === null || safeSdk === void 0 ? void 0 : safeSdk.txs.getBySafeTxHash(hashReceived));
            const status = tx === null || tx === void 0 ? void 0 : tx.txStatus;
            if (status !== GnosisTransactionStatus.FAILED &&
                status !== GnosisTransactionStatus.SUCCESS &&
                status !== GnosisTransactionStatus.CANCELLED) {
                // Wait 2 seconds before checking the gnosis status again
                // eslint-disable-next-line no-promise-executor-return
                yield new Promise((res) => setTimeout(res, 2000));
                return getTransactionHash(connector, hashReceived);
            }
            return (_c = tx === null || tx === void 0 ? void 0 : tx.txHash) !== null && _c !== void 0 ? _c : hashReceived;
        }
        return hashReceived;
    });
    const setTransactionState = useCallback(({ route, txHash, nonce, status, userAddress, axelarUrl, }) => {
        if (route && route.transactionRequest) {
            const { routeType } = route.transactionRequest;
            const currentTransaction = {
                chain: fromChain,
                routeType,
                nonce,
                transactionId: txHash,
                status,
                timestamp: Date.now(),
                fromAddress: userAddress,
                sourceTxExplorerUrl: getExplorerTxUrl(fromChain, txHash),
                sourceExplorerImgUrl: fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainIconURI,
                axelarUrl,
            };
            useSquidStore.setState({
                currentTransaction,
            });
            return currentTransaction;
        }
        return undefined;
    }, [fromChain]);
    // If the transaction is replaced, we need to update the transaction hash
    // Transaction replaced can mean that the user has speed up the transaction for example
    // Could also be cancelled
    const handleTransactionReplacementError = useCallback(({ error, route, status, userAddress, axelarUrl, }) => __awaiter(void 0, void 0, void 0, function* () {
        if (route && error.code === Logger.errors.TRANSACTION_REPLACED) {
            const txReplacementError = error;
            const { hash: newHash, nonce: newNonce } = txReplacementError.replacement;
            if (route.transactionRequest && squidRoute.data) {
                const { routeType } = route.transactionRequest;
                const currentTransaction = setTransactionState({
                    route,
                    txHash: newHash,
                    nonce: newNonce,
                    userAddress: sourceUserAddress,
                    status,
                    axelarUrl: getAxelarExplorerTxUrl(squid === null || squid === void 0 ? void 0 : squid.axelarscanURL, routeType, newHash),
                });
                if (currentTransaction) {
                    const newHistoryElement = Object.assign(Object.assign({}, currentTransaction), { params: squidRoute.data.params });
                    // Need to store the new transaction hash on the previous transaction
                    usePersistStore.setState({
                        transactionsHistory: replaceTransactionAtNonce(newNonce, sourceUserAddress, usePersistStore.getState().transactionsHistory, newHistoryElement),
                    });
                }
            }
            try {
                const response = yield txReplacementError.replacement.wait();
                return response;
            }
            catch (error) {
                // Maybe the transaction was replaced again
                // recursive call
                return handleTransactionReplacementError({
                    error,
                    route,
                    status,
                    userAddress,
                    axelarUrl,
                });
            }
        }
        else {
            throw error;
        }
    }), [
        setTransactionState,
        sourceUserAddress,
        squid === null || squid === void 0 ? void 0 : squid.axelarscanURL,
        squidRoute.data,
    ]);
    /**
     * Execute cross chain swap with selected tokens
     * getRoute should be called before this mutation
     * @returns {TransactionReceipt} Transaction receipt
     */
    const swapQuery = useMutation((route) => __awaiter(void 0, void 0, void 0, function* () {
        var _d, _e;
        if (route && !!squid && signer.isSuccess) {
            const txResponse = yield squid.executeRoute({
                signer: signer.data,
                route,
                executionSettings: {
                    infiniteApproval: config.infiniteApproval,
                },
            });
            const hash = yield getTransactionHash(activeConnector, txResponse.hash);
            if (route.transactionRequest) {
                const { routeType } = route.transactionRequest;
                const currentTransaction = setTransactionState({
                    route,
                    txHash: hash,
                    nonce: txResponse.nonce,
                    userAddress: sourceUserAddress,
                    status: "loading",
                    axelarUrl: getAxelarExplorerTxUrl(squid.axelarscanURL, routeType, hash),
                });
                // Persisting the transaction in local storage
                if (currentTransaction && squidRoute.data) {
                    const previousHistoryList = (_d = usePersistStore.getState().transactionsHistory) !== null && _d !== void 0 ? _d : [];
                    const newHistoryElement = Object.assign(Object.assign({}, currentTransaction), { params: squidRoute.data.params });
                    usePersistStore.setState({
                        transactionsHistory: [...previousHistoryList, newHistoryElement],
                    });
                }
            }
            try {
                const response = yield txResponse.wait();
                return response;
            }
            catch (error) {
                return handleTransactionReplacementError({
                    error,
                    route,
                    status: "loading",
                    userAddress: sourceUserAddress,
                    axelarUrl: getAxelarExplorerTxUrl(squid.axelarscanURL, (_e = route === null || route === void 0 ? void 0 : route.transactionRequest) === null || _e === void 0 ? void 0 : _e.routeType, hash),
                });
            }
        }
        throw new Error("Need all parameters");
    }), {
        onError: (error) => {
            const { currentTransaction } = useSquidStore.getState();
            const errorObject = getTransactionError(error);
            useSquidStore.setState({
                currentTransaction: Object.assign(Object.assign({}, currentTransaction), { status: "error", error: errorObject }),
            });
            if ((currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.transactionId) &&
                (errorObject === null || errorObject === void 0 ? void 0 : errorObject.type) === TransactionErrorType.CALL_EXCEPTION) {
                usePersistStore.setState({
                    transactionsHistory: updateTransactionHistoryStatus(currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.transactionId, "error", usePersistStore.getState().transactionsHistory, undefined),
                });
            }
        },
        onSuccess: () => {
            const { currentTransaction } = useSquidStore.getState();
            queryClient.invalidateQueries(keys({}).balances());
            useSquidStore.setState({
                currentTransaction: Object.assign(Object.assign({}, currentTransaction), { status: "success" }),
            });
        },
    });
    return {
        routeApproved,
        approveRoute,
        swapQuery,
        currentTransaction,
        fromToken,
        toToken,
        squidRoute,
        fromPrice,
        toPrice,
        toChain,
        fromChain,
        sourceExplorerUrl,
    };
};
//# sourceMappingURL=useTransaction.js.map