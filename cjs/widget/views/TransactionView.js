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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const error_1 = require("../core/types/error");
const useTransaction_1 = require("../hooks/useTransaction");
const useSquidStore_1 = require("../store/useSquidStore");
const TransactionProgressView_1 = require("./TransactionProgressView");
const TransactionView = () => {
    const { swapQuery, squidRoute } = (0, useTransaction_1.useTransaction)();
    const executeTx = () => __awaiter(void 0, void 0, void 0, function* () {
        // Reset current transaction because a new one is coming
        useSquidStore_1.useSquidStore.setState({ currentTransaction: undefined });
        // Check if we need to refetch the route data
        if (squidRoute.isStale) {
            const resp = yield squidRoute.refetch();
            if (resp.data && resp.isSuccess) {
                swapQuery.mutate(resp.data);
            }
        }
        else {
            swapQuery.mutate(squidRoute.data);
        }
    });
    // As soon as this component is mounted
    // We need to execute the transaction
    (0, react_1.useEffect)(() => {
        executeTx();
        /**
         * Check if the user sign the tx within 30s
         * If not, error must be thrown
         */
        const timerId = setTimeout(() => {
            const { currentTransaction } = useSquidStore_1.useSquidStore.getState();
            if (!currentTransaction) {
                useSquidStore_1.useSquidStore.setState({
                    currentTransaction: Object.assign(Object.assign({}, currentTransaction), { status: "warning", error: {
                            type: error_1.TransactionErrorType.WARNING,
                            message: "You're taking a while! We suggest rejecting the pending transaction and starting over with a new quote",
                        } }),
                });
            }
        }, 45 * 1000);
        return () => clearTimeout(timerId);
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "tw-flex tw-h-full tw-flex-1 tw-flex-col tw-items-center" }, { children: (0, jsx_runtime_1.jsx)(TransactionProgressView_1.TransactionProgressView, {}) })));
};
exports.TransactionView = TransactionView;
//# sourceMappingURL=TransactionView.js.map