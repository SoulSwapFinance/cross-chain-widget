import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { CollapsibleBox } from "../components/CollapsibleBox";
import { TransactionConfirmView } from "../components/transaction/TransactionConfirmView";
import { TransactionErrorView } from "../components/transaction/TransactionErrorView";
import { TransactionHeader } from "../components/transaction/TransactionHeader";
import { TransactionPauseView } from "../components/transaction/TransactionPauseView.tsx";
import { TransactionProcessingView } from "../components/transaction/TransactionProcessingView";
import { TransactionReceivedAxlUSDCView } from "../components/transaction/TransactionReceivedAxlUSDCView";
import { TransactionSuccessView } from "../components/transaction/TransactionSuccessView";
import { TransactionWarningView } from "../components/transaction/TransactionWarningView";
import { TransactionErrorType } from "../core/types/error";
import { useEstimate } from "../hooks/useEstimate";
import { useSingleTransaction } from "../hooks/useSingleTransaction";
import { useSquidRouter } from "../hooks/useSquidRouter";
import { useTransaction } from "../hooks/useTransaction";
import { useSquidStore } from "../store/useSquidStore";
import { TrackTransactionView } from "./TrackTransactionView";
export const TransactionProgressView = () => {
    var _a, _b;
    const { currentTransaction, config } = useSquidStore();
    const { fromToken, toToken, toChain, fromChain } = useTransaction();
    const [isCollapseBoxOpen, setIsCollapseBoxOpen] = useState(false);
    const { latestStatus } = useSingleTransaction(currentTransaction);
    const { toAmountMin, fromAmount, fromAmountFormatted, estimatedRouteDuration, } = useEstimate();
    const [displayAnimationClass, setdisplayAnimationClass] = useState({ state: "pending", display: true });
    const changeAnim = useCallback((newState) => {
        if (newState !== displayAnimationClass.state) {
            setdisplayAnimationClass({
                state: displayAnimationClass.state,
                display: false,
            });
            setTimeout(() => {
                setdisplayAnimationClass({ state: newState, display: true });
            }, 250);
        }
    }, [displayAnimationClass.state]);
    useEffect(() => {
        var _a;
        if (currentTransaction === undefined) {
            changeAnim("pending");
        }
        else if (((_a = currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.error) === null || _a === void 0 ? void 0 : _a.type) === TransactionErrorType.REJECTED_BY_USER) {
            changeAnim("rejected");
        }
        else if (((currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.status) === "error" || latestStatus === "error") &&
            (currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.status) !== "warning") {
            changeAnim("error");
        }
        else if ((currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.status) === "warning") {
            changeAnim("warning");
        }
        else if ((currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.status) === "success" &&
            latestStatus === "received_usdc") {
            changeAnim("received_usdc");
        }
        else if ((currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.status) === "success" &&
            latestStatus === "need_gas") {
            changeAnim("need_gas");
        }
        else if ((currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.status) === "success" &&
            latestStatus === "success") {
            changeAnim("success");
        }
        else if (currentTransaction !== undefined &&
            (latestStatus === "loading" ||
                latestStatus === "initialLoading" ||
                latestStatus === "data_unavailable")) {
            changeAnim("loading");
        }
        else {
            changeAnim("pending");
        }
    }, [currentTransaction, latestStatus, changeAnim]);
    const getProgressView = () => {
        switch (displayAnimationClass.state) {
            case "warning":
                return _jsx(TransactionWarningView, {});
            case "received_usdc":
                return _jsx(TransactionReceivedAxlUSDCView, {});
            case "need_gas":
                return _jsx(TransactionPauseView, {});
            case "error":
            case "rejected":
                return _jsx(TransactionErrorView, { state: displayAnimationClass.state });
            case "success":
                return (_jsx(TransactionSuccessView, { openBox: (open) => setIsCollapseBoxOpen(open) }));
            case "loading":
            case "initialLoading":
                return (_jsx(TransactionProcessingView, { setIsCollapseBoxOpen: (open) => setIsCollapseBoxOpen(open) }));
            case "pending":
                return _jsx(TransactionConfirmView, {});
            default:
                return _jsx(TransactionConfirmView, {});
        }
    };
    const { previousRoute } = useSquidRouter();
    return (_jsxs("div", Object.assign({ className: clsx("tw-flex tw-h-full tw-max-w-xs tw-flex-1 tw-flex-col tw-items-center tw-gap-4", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && "tw-bg-opacity-70") }, { children: [_jsx(TransactionHeader, { axelarUrl: currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.axelarUrl, toChain: toChain, toToken: toToken, fromAmount: fromAmount, fromChain: fromChain, fromToken: fromToken, toAmountMin: toAmountMin, estimatedRouteDuration: estimatedRouteDuration, displayTimeEstimate: displayAnimationClass.state !== "error" &&
                    displayAnimationClass.state !== "rejected" }), _jsxs("span", Object.assign({ className: "tw-justify-content tw-relative tw-flex tw-w-full tw-max-w-[90%] tw-flex-1 tw-flex-col tw-justify-between tw-pb-5" }, { children: [_jsxs("span", Object.assign({ className: clsx("transition-all tw-flex tw-w-full tw-items-center tw-py-2", displayAnimationClass.display ? "tw-opacity-100" : "tw-opacity-0") }, { children: [getProgressView(), " "] })), _jsx("button", Object.assign({ type: "button", className: "tw-text-xl tw-font-semibold", onClick: () => previousRoute() }, { children: ["pending", "rejected", "warning"].includes(displayAnimationClass.state || "")
                            ? "Go back"
                            : "Done" }))] })), _jsx(CollapsibleBox, Object.assign({ isOpen: isCollapseBoxOpen, onClose: () => setIsCollapseBoxOpen(false) }, { children: _jsx(TrackTransactionView, { fromChain: fromChain, fromToken: fromToken, toChain: toChain, toToken: toToken, amount: fromAmountFormatted }) }))] })));
};
//# sourceMappingURL=TransactionProgressView.js.map