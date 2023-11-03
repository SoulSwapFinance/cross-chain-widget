"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionProgressView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const CollapsibleBox_1 = require("../components/CollapsibleBox");
const TransactionConfirmView_1 = require("../components/transaction/TransactionConfirmView");
const TransactionErrorView_1 = require("../components/transaction/TransactionErrorView");
const TransactionHeader_1 = require("../components/transaction/TransactionHeader");
const TransactionPauseView_tsx_1 = require("../components/transaction/TransactionPauseView.tsx");
const TransactionProcessingView_1 = require("../components/transaction/TransactionProcessingView");
const TransactionReceivedAxlUSDCView_1 = require("../components/transaction/TransactionReceivedAxlUSDCView");
const TransactionSuccessView_1 = require("../components/transaction/TransactionSuccessView");
const TransactionWarningView_1 = require("../components/transaction/TransactionWarningView");
const error_1 = require("../core/types/error");
const useEstimate_1 = require("../hooks/useEstimate");
const useSingleTransaction_1 = require("../hooks/useSingleTransaction");
const useSquidRouter_1 = require("../hooks/useSquidRouter");
const useTransaction_1 = require("../hooks/useTransaction");
const useSquidStore_1 = require("../store/useSquidStore");
const TrackTransactionView_1 = require("./TrackTransactionView");
const TransactionProgressView = () => {
    var _a, _b;
    const { currentTransaction, config } = (0, useSquidStore_1.useSquidStore)();
    const { fromToken, toToken, toChain, fromChain } = (0, useTransaction_1.useTransaction)();
    const [isCollapseBoxOpen, setIsCollapseBoxOpen] = (0, react_1.useState)(false);
    const { latestStatus } = (0, useSingleTransaction_1.useSingleTransaction)(currentTransaction);
    const { toAmountMin, fromAmount, fromAmountFormatted, estimatedRouteDuration, } = (0, useEstimate_1.useEstimate)();
    const [displayAnimationClass, setdisplayAnimationClass] = (0, react_1.useState)({ state: "pending", display: true });
    const changeAnim = (0, react_1.useCallback)((newState) => {
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
    (0, react_1.useEffect)(() => {
        var _a;
        if (currentTransaction === undefined) {
            changeAnim("pending");
        }
        else if (((_a = currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.error) === null || _a === void 0 ? void 0 : _a.type) === error_1.TransactionErrorType.REJECTED_BY_USER) {
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
                return (0, jsx_runtime_1.jsx)(TransactionWarningView_1.TransactionWarningView, {});
            case "received_usdc":
                return (0, jsx_runtime_1.jsx)(TransactionReceivedAxlUSDCView_1.TransactionReceivedAxlUSDCView, {});
            case "need_gas":
                return (0, jsx_runtime_1.jsx)(TransactionPauseView_tsx_1.TransactionPauseView, {});
            case "error":
            case "rejected":
                return (0, jsx_runtime_1.jsx)(TransactionErrorView_1.TransactionErrorView, { state: displayAnimationClass.state });
            case "success":
                return ((0, jsx_runtime_1.jsx)(TransactionSuccessView_1.TransactionSuccessView, { openBox: (open) => setIsCollapseBoxOpen(open) }));
            case "loading":
            case "initialLoading":
                return ((0, jsx_runtime_1.jsx)(TransactionProcessingView_1.TransactionProcessingView, { setIsCollapseBoxOpen: (open) => setIsCollapseBoxOpen(open) }));
            case "pending":
                return (0, jsx_runtime_1.jsx)(TransactionConfirmView_1.TransactionConfirmView, {});
            default:
                return (0, jsx_runtime_1.jsx)(TransactionConfirmView_1.TransactionConfirmView, {});
        }
    };
    const { previousRoute } = (0, useSquidRouter_1.useSquidRouter)();
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, clsx_1.default)("tw-flex tw-h-full tw-max-w-xs tw-flex-1 tw-flex-col tw-items-center tw-gap-4", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && "tw-bg-opacity-70") }, { children: [(0, jsx_runtime_1.jsx)(TransactionHeader_1.TransactionHeader, { axelarUrl: currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.axelarUrl, toChain: toChain, toToken: toToken, fromAmount: fromAmount, fromChain: fromChain, fromToken: fromToken, toAmountMin: toAmountMin, estimatedRouteDuration: estimatedRouteDuration, displayTimeEstimate: displayAnimationClass.state !== "error" &&
                    displayAnimationClass.state !== "rejected" }), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-justify-content tw-relative tw-flex tw-w-full tw-max-w-[90%] tw-flex-1 tw-flex-col tw-justify-between tw-pb-5" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: (0, clsx_1.default)("transition-all tw-flex tw-w-full tw-items-center tw-py-2", displayAnimationClass.display ? "tw-opacity-100" : "tw-opacity-0") }, { children: [getProgressView(), " "] })), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: "tw-text-xl tw-font-semibold", onClick: () => previousRoute() }, { children: ["pending", "rejected", "warning"].includes(displayAnimationClass.state || "")
                            ? "Go back"
                            : "Done" }))] })), (0, jsx_runtime_1.jsx)(CollapsibleBox_1.CollapsibleBox, Object.assign({ isOpen: isCollapseBoxOpen, onClose: () => setIsCollapseBoxOpen(false) }, { children: (0, jsx_runtime_1.jsx)(TrackTransactionView_1.TrackTransactionView, { fromChain: fromChain, fromToken: fromToken, toChain: toChain, toToken: toToken, amount: fromAmountFormatted }) }))] })));
};
exports.TransactionProgressView = TransactionProgressView;
//# sourceMappingURL=TransactionProgressView.js.map