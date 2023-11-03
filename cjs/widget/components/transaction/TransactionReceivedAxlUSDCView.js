"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionReceivedAxlUSDCView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const bs_1 = require("react-icons/bs");
const hi_1 = require("react-icons/hi");
const animations_1 = require("../../assets/animations");
const externalLinks_1 = require("../../core/externalLinks");
const useMultiChain_1 = require("../../hooks/useMultiChain");
const useTransaction_1 = require("../../hooks/useTransaction");
const useSquidStore_1 = require("../../store/useSquidStore");
const TextLink_1 = require("../TextLink");
const LightButton_1 = require("../buttons/LightButton");
const TransactionStateContent_1 = require("./TransactionStateContent");
const TransactionReceivedAxlUSDCView = () => {
    const { squid } = (0, useSquidStore_1.useSquidStore)();
    const { toChain, toToken } = (0, useTransaction_1.useTransaction)();
    const { addToken } = (0, useMultiChain_1.useMultiChain)(toChain, toToken);
    const axlUSDCForChain = (0, react_1.useMemo)(() => {
        return squid === null || squid === void 0 ? void 0 : squid.tokens.find((token) => (toChain === null || toChain === void 0 ? void 0 : toChain.chainId) === token.chainId && token.commonKey === "uusdc");
    }, [squid === null || squid === void 0 ? void 0 : squid.tokens, toChain]);
    return ((0, jsx_runtime_1.jsx)(TransactionStateContent_1.TransactionStateContent, Object.assign({ animReplacement: (0, jsx_runtime_1.jsx)(bs_1.BsFillCheckCircleFill, { size: 60 }), animation: animations_1.transactionHalfSuccessAnimation, title: "Received axlUSDC" }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-1" }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-4 tw-text-center tw-text-base tw-text-neutral-content" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ style: {
                            lineHeight: "1.5",
                            marginTop: "10px",
                        } }, { children: ["Due to high slippage, your transaction reverted and you received axlUSDC on ", toChain === null || toChain === void 0 ? void 0 : toChain.networkName, ". To continue, please swap from axlUSDC to your desired token."] })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [axlUSDCForChain && ((0, jsx_runtime_1.jsx)(LightButton_1.LightButton, Object.assign({ onClick: () => addToken.mutate(axlUSDCForChain), style: { minHeight: "28px" }, className: "tw-px-3 tw-text-base tw-font-medium", size: "xs", light: "100" }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: ["Add ", axlUSDCForChain === null || axlUSDCForChain === void 0 ? void 0 : axlUSDCForChain.symbol, " to wallet"] })) }))), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)(TextLink_1.TextLink, Object.assign({ className: "tw-font-medium", href: externalLinks_1.squidAxlUSDCWarningLink }, { children: "Learn more" })), (0, jsx_runtime_1.jsx)(hi_1.HiExternalLink, {})] }))] }))] })) })) })));
};
exports.TransactionReceivedAxlUSDCView = TransactionReceivedAxlUSDCView;
//# sourceMappingURL=TransactionReceivedAxlUSDCView.js.map