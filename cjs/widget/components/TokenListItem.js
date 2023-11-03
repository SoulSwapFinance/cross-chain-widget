"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenListItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@0xsquid/sdk");
const react_dom_1 = require("@floating-ui/react-dom");
const react_dom_interactions_1 = require("@floating-ui/react-dom-interactions");
const react_1 = require("react");
const fi_1 = require("react-icons/fi");
const wagmi_1 = require("wagmi");
const constants_1 = require("../core/constants");
const useMultiChain_1 = require("../hooks/useMultiChain");
const useSquidChains_1 = require("../hooks/useSquidChains");
const priceService_1 = require("../services/internal/priceService");
const ListItemAvatar_1 = require("./ListItemAvatar");
const NumericValue_1 = require("./NumericValue");
const TokenListItem = ({ token, chain, isLast, onSelect, selected = false, displayChainIcon = false, usdUnitPrice, }) => {
    var _a;
    const { addToken } = (0, useMultiChain_1.useMultiChain)(chain, token);
    const { chain: currentEvmChain } = (0, wagmi_1.useNetwork)();
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const { chains } = (0, useSquidChains_1.useSquidChains)();
    const tokenChain = (0, react_1.useMemo)(() => chains.find((c) => c.chainId == token.chainId), [chains, token.chainId]);
    const balanceInUsd = (0, react_1.useMemo)(() => {
        const nullBalance = +token.balance === 0;
        if (!nullBalance) {
            return (0, priceService_1.convertTokenAmountToUSD)(token.balance, usdUnitPrice);
        }
        return "0";
    }, [token.balance, usdUnitPrice]);
    const { x, y, reference, floating, strategy, context } = (0, react_dom_interactions_1.useFloating)({
        placement: "top",
        strategy: "fixed",
        middleware: [(0, react_dom_1.offset)(5)],
    });
    const { getReferenceProps, getFloatingProps } = (0, react_dom_interactions_1.useInteractions)([
        (0, react_dom_interactions_1.useHover)(context, {
            mouseOnly: true,
        }),
    ]);
    const tokenCanBeAddedToWallet = chain &&
        token.address !== constants_1.nativeEvmTokenAddress &&
        chain.chainType === sdk_1.ChainType.EVM &&
        chain.chainId === (currentEvmChain === null || currentEvmChain === void 0 ? void 0 : currentEvmChain.id);
    return ((0, jsx_runtime_1.jsxs)(ListItemAvatar_1.ListItemAvatar, Object.assign({ isLast: isLast, imageUrl: token.logoURI, relatedImageUrl: displayChainIcon ? tokenChain === null || tokenChain === void 0 ? void 0 : tokenChain.chainIconURI : undefined, selectValue: token.address, onSelect: onSelect, selected: selected, favorite: token.isFavorite }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-start tw-gap-1" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-1 tw-font-semibold" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: token.symbol }), tokenCanBeAddedToWallet && (
                                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                                    (0, jsx_runtime_1.jsx)("div", Object.assign({ onMouseEnter: () => setIsOpen(true), onMouseLeave: () => setIsOpen(false) }, getReferenceProps({ ref: reference }), { onClick: (e) => {
                                            e.stopPropagation();
                                            addToken.mutate();
                                        }, className: "tw-group" }, { children: (0, jsx_runtime_1.jsx)(fi_1.FiPlusCircle, { className: "tw-rounded-full group-hover:tw-bg-primary group-hover:tw-text-base-200" }) })))] })), token.name && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-sm tw-text-neutral-content" }, { children: token.name })))] })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-end tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { hideIfZero: true, className: "tw-text-base", formatIfVerySmall: 0.0001, significantFigures: 4, value: (_a = token.balance) !== null && _a !== void 0 ? _a : "0" }), (0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { hideIfZero: true, formatIfVerySmall: 0.01, className: "tw-text-base tw-text-sm tw-text-neutral-content", currency: { symbol: "$", symbolPosition: "before" }, value: balanceInUsd !== null && balanceInUsd !== void 0 ? balanceInUsd : "0" })] }))] })), isOpen && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-max-w-[200px] tw-rounded-md tw-bg-black tw-p-2 tw-text-white" }, getFloatingProps({
                ref: floating,
                style: {
                    position: strategy,
                    top: y !== null && y !== void 0 ? y : 0,
                    left: x !== null && x !== void 0 ? x : 0,
                },
            }), { children: "Add token to wallet" })))] })));
};
exports.TokenListItem = TokenListItem;
//# sourceMappingURL=TokenListItem.js.map