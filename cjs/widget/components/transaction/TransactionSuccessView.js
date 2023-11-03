"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSuccessView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@0xsquid/sdk");
const bs_1 = require("react-icons/bs");
const fi_1 = require("react-icons/fi");
const animations_1 = require("../../assets/animations");
const TrackButton_1 = require("../../components/buttons/TrackButton");
const ShareOnTwitter_1 = require("../../components/transaction/ShareOnTwitter");
const constants_1 = require("../../core/constants");
const useMultiChain_1 = require("../../hooks/useMultiChain");
const useTransaction_1 = require("../../hooks/useTransaction");
const ViewTransactionButton_1 = require("../buttons/ViewTransactionButton");
const TransactionStateContent_1 = require("./TransactionStateContent");
const TransactionSuccessView = ({ openBox }) => {
    const { fromToken, toToken, toChain, fromChain, currentTransaction } = (0, useTransaction_1.useTransaction)();
    const { addToken } = (0, useMultiChain_1.useMultiChain)(toChain, toToken);
    return ((0, jsx_runtime_1.jsx)(TransactionStateContent_1.TransactionStateContent, Object.assign({ animReplacement: (0, jsx_runtime_1.jsx)(bs_1.BsFillCheckCircleFill, { size: 60 }), title: "Complete", animation: animations_1.transactionSuccessAnimation }, { children: (0, jsx_runtime_1.jsxs)("span", { children: [(toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === sdk_1.ChainType.EVM &&
                    (toToken === null || toToken === void 0 ? void 0 : toToken.address) !== constants_1.nativeEvmTokenAddress && ((0, jsx_runtime_1.jsxs)("button", Object.assign({ type: "button", onClick: () => addToken.mutate(), className: "tw-group tw-mt-2 tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-sm tw-text-base-content hover:tw-underline" }, { children: ["Add ", toToken === null || toToken === void 0 ? void 0 : toToken.symbol, " to your wallet", " ", (0, jsx_runtime_1.jsx)(fi_1.FiPlusCircle, { className: "tw-rounded-full group-hover:tw-bg-primary group-hover:tw-text-base-200" })] }))), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-2 tw-text-sm" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-neutral-content" }, { children: "Your tokens have been sent." })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-justify-center tw-gap-2" }, { children: [(0, jsx_runtime_1.jsx)(TrackButton_1.TrackButton, { onClick: () => openBox(true) }), (0, jsx_runtime_1.jsx)(ViewTransactionButton_1.ViewTransactionButton, { url: currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.axelarUrl })] })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-justify-center tw-p-1" }, { children: (0, jsx_runtime_1.jsx)(ShareOnTwitter_1.ShareOnTwitter, { fromToken: fromToken, toToken: toToken, fromChain: fromChain, toChain: toChain }) }))] }))] }) })));
};
exports.TransactionSuccessView = TransactionSuccessView;
//# sourceMappingURL=TransactionSuccessView.js.map