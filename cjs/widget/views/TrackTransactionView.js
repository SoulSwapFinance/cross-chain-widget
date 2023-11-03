"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackTransactionView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const bi_1 = require("react-icons/bi");
const fa_1 = require("react-icons/fa");
const hi_1 = require("react-icons/hi");
const md_1 = require("react-icons/md");
const Loader_1 = require("../components/Loader");
const useSingleTransaction_1 = require("../hooks/useSingleTransaction");
const transactionStatusService_1 = require("../services/internal/transactionStatusService");
const useSquidStore_1 = require("../store/useSquidStore");
const TransactionStep = ({ title, subTitle, subTitleLink, state, hasStepAfter = true, }) => {
    const stateComponentClass = "tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center tw-rounded-full";
    const idleStateComponent = ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)(stateComponentClass, "tw-border-2 tw-border-base-200 tw-text-neutral") }));
    const loadingStateComponent = ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, clsx_1.default)(stateComponentClass, "tw-text-neutral") }, { children: (0, jsx_runtime_1.jsx)(Loader_1.Loader, { size: 28.8 }) })));
    const successStateComponent = ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, clsx_1.default)(stateComponentClass, "tw-bg-success tw-text-neutral") }, { children: (0, jsx_runtime_1.jsx)(bi_1.BiCheck, {}) })));
    const warningStateComponent = ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, clsx_1.default)(stateComponentClass, "tw-bg-warning tw-text-neutral") }, { children: (0, jsx_runtime_1.jsx)(md_1.MdWarning, {}) })));
    const errorStateComponent = ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, clsx_1.default)(stateComponentClass, "tw-bg-warning tw-text-neutral") }, { children: (0, jsx_runtime_1.jsx)(fa_1.FaTimes, {}) })));
    const getStateComponent = () => {
        switch (state) {
            case "idle":
                return idleStateComponent;
            case "loading" || "initialLoading":
                return loadingStateComponent;
            case "success" || "received_usdc":
                return successStateComponent;
            case "need_gas":
                return warningStateComponent;
            case "error":
                return errorStateComponent;
            default:
                return idleStateComponent;
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "tw-relative tw-flex tw-w-full tw-flex-row tw-items-start tw-gap-3 tw-px-2" }, { children: [hasStepAfter && ((0, jsx_runtime_1.jsx)("div", { style: { height: 28, width: 2, top: 34, left: 19 }, className: "tw-absolute tw-bg-base-200" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-h-6 tw-w-6 tw-rounded-full" }, { children: getStateComponent() })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "tw-flex tw-flex-col tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-font-medium", style: { fontSize: "16px" } }, { children: title })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-sm tw-text-neutral-content" }, { children: subTitle })), subTitleLink && ((0, jsx_runtime_1.jsx)("a", Object.assign({ target: "_blank", href: subTitleLink, rel: "noreferrer" }, { children: (0, jsx_runtime_1.jsx)(hi_1.HiExternalLink, { size: 16 }) })))] }))] }))] })));
};
const CollapsibleBoxTitle = ({ title }) => {
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ id: "squid-header-title", className: "tw-text-lg tw-font-semibold tw-text-base-content", style: {
            position: "relative",
            top: "-20px",
            width: "100%",
            textAlign: "center",
            marginBottom: "-20px",
            pointerEvents: "none",
        } }, { children: title })));
};
const TrackTransactionView = ({ fromChain, fromToken, toToken, toChain, amount, }) => {
    const { currentTransaction } = (0, useSquidStore_1.useSquidStore)();
    const { transactionStatusQuery } = (0, useSingleTransaction_1.useSingleTransaction)(currentTransaction);
    const routeType = (0, react_1.useMemo)(() => currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.routeType, [currentTransaction]);
    const steps = (0, transactionStatusService_1.getStepsInfos)({
        txType: routeType,
        fromChain,
        fromToken,
        toChain,
        toToken,
        transaction: currentTransaction,
        statusResponse: transactionStatusQuery,
        amount: amount !== null && amount !== void 0 ? amount : "0",
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-7" }, { children: [(0, jsx_runtime_1.jsx)(CollapsibleBoxTitle, { title: "Track Transaction" }), steps.map((step, index) => {
                var _a;
                return ((0, jsx_runtime_1.jsx)(TransactionStep, { title: step.label, state: step.status, subTitle: (_a = step.subTitle) !== null && _a !== void 0 ? _a : "", subTitleLink: step.link }, index));
            }), (0, jsx_runtime_1.jsx)(TransactionStep, { title: `Gas refund on ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainName}`, state: "idle", subTitle: "See Axelarscan for details", hasStepAfter: false, subTitleLink: currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.axelarUrl })] })));
};
exports.TrackTransactionView = TrackTransactionView;
//# sourceMappingURL=TrackTransactionView.js.map