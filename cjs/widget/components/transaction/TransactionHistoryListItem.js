"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHistoryListItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const utils_1 = require("ethers/lib/utils");
const react_1 = require("react");
const bs_1 = require("react-icons/bs");
const tb_1 = require("react-icons/tb");
const useSingleTransaction_1 = require("../../hooks/useSingleTransaction");
const useSquidChains_1 = require("../../hooks/useSquidChains");
const transactionService_1 = require("../../services/internal/transactionService");
const useSquidStore_1 = require("../../store/useSquidStore");
const ImageWrapper_1 = require("../ImageWrapper");
const NumericValue_1 = require("../NumericValue");
const TransactionStatus_1 = require("./TransactionStatus");
const TransactionHistoryListItem = ({ transaction }) => {
    var _a, _b, _c, _d, _e;
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const { latestStatus } = (0, useSingleTransaction_1.useSingleTransaction)(transaction, false);
    const { chains } = (0, useSquidChains_1.useSquidChains)();
    const { fromChainLogo, toChainLogo } = (0, react_1.useMemo)(() => {
        var _a, _b;
        return {
            fromChainLogo: (_a = chains.find((chain) => chain.chainId.toString() === transaction.params.fromChain)) === null || _a === void 0 ? void 0 : _a.chainIconURI,
            toChainLogo: (_b = chains.find((chain) => chain.chainId.toString() === transaction.params.toChain)) === null || _b === void 0 ? void 0 : _b.chainIconURI,
        };
    }, [chains, transaction.params.fromChain, transaction.params.toChain]);
    const formattedDate = (0, react_1.useMemo)(() => (0, transactionService_1.formatTransactionHistoryDate)(transaction), [transaction]);
    return ((0, jsx_runtime_1.jsx)("li", Object.assign({ className: (0, clsx_1.default)("w-full tw-flex tw-min-h-[66px] tw-flex-row tw-items-center hover:tw-bg-base-200", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) &&
            "tw-bg-opacity-0 hover:tw-bg-opacity-50") }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-px-6 tw-py-3 tw-text-base-sms" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-6" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-max-w-[29px] tw-flex-col tw-items-center tw-justify-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-h-[20px] tw-items-center tw-text-base tw-font-medium tw-uppercase tw-text-base-content" }, { children: formattedDate === null || formattedDate === void 0 ? void 0 : formattedDate.month })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-neutral-content" }, { children: formattedDate === null || formattedDate === void 0 ? void 0 : formattedDate.day }))] })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-gap-1" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-base" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)(ImageWrapper_1.ImageWrapper, { src: fromChainLogo, style: { width: 17, height: 17 }, className: "tw-rounded-full tw-bg-base-100 tw-bg-opacity-60" }), (0, jsx_runtime_1.jsx)("span", { children: (_c = transaction.params.fromToken) === null || _c === void 0 ? void 0 : _c.symbol })] })), (0, jsx_runtime_1.jsx)(bs_1.BsArrowRightShort, { size: 20 }), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "gap-0.5 tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)(ImageWrapper_1.ImageWrapper, { src: toChainLogo, style: { width: 17, height: 17 }, className: "tw-rounded-full tw-bg-base-100 tw-bg-opacity-60" }), (0, jsx_runtime_1.jsx)("span", { children: (_d = transaction.params.toToken) === null || _d === void 0 ? void 0 : _d.symbol })] }))] })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2 tw-text-sm tw-text-neutral-content" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Sent" }), (0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { value: (0, utils_1.formatUnits)(transaction.params.fromAmount, transaction.params.fromToken.decimals), significantFigures: 4 })] })), (0, jsx_runtime_1.jsx)("span", { children: (_e = transaction.params.fromToken) === null || _e === void 0 ? void 0 : _e.symbol })] })), (transaction === null || transaction === void 0 ? void 0 : transaction.axelarUrl) && ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "tw-flex tw-flex-row tw-items-center", target: "_blank", rel: "noreferrer", href: transaction.axelarUrl }, { children: (0, jsx_runtime_1.jsx)(tb_1.TbExternalLink, {}) })) }))] }))] }))] })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2 tw-text-base" }, { children: (0, jsx_runtime_1.jsx)(TransactionStatus_1.TransactionStatus, { loadingLabel: "On its way", transaction: transaction, status: latestStatus }) }))] })) })));
};
exports.TransactionHistoryListItem = TransactionHistoryListItem;
//# sourceMappingURL=TransactionHistoryListItem.js.map