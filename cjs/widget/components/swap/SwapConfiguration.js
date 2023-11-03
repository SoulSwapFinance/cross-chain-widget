"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapConfiguration = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@0xsquid/sdk");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const hi2_1 = require("react-icons/hi2");
const constants_1 = require("../../core/constants");
const routes_1 = require("../../core/routes");
const useGnosisContext_1 = require("../../hooks/useGnosisContext");
const useIntegratorContext_1 = require("../../hooks/useIntegratorContext");
const useMultiChain_1 = require("../../hooks/useMultiChain");
const useMultiChainBalance_1 = require("../../hooks/useMultiChainBalance");
const useSquidRouter_1 = require("../../hooks/useSquidRouter");
const useSwap_1 = require("../../hooks/useSwap");
const configService_1 = require("../../services/internal/configService");
const priceService_1 = require("../../services/internal/priceService");
const walletService_1 = require("../../services/internal/walletService");
const useSquidStore_1 = require("../../store/useSquidStore");
const ActiveIndicator_1 = require("../ActiveIndicator");
const DropdownBtn_1 = require("../DropdownBtn");
const LoadingSkeleton_1 = require("../LoadingSkeleton");
const NumericInput_1 = require("../NumericInput");
const NumericValue_1 = require("../NumericValue");
const RouterLink_1 = require("../RouterLink");
const ConnectWalletButton_1 = require("../buttons/ConnectWalletButton");
const HoverButton_1 = require("../buttons/HoverButton");
const SwitchNetworkButton_1 = require("../buttons/SwitchNetworkButton");
const SwapPriceImpactText_1 = require("./SwapPriceImpactText");
const SwapConfiguration = (_a) => {
    var _b, _c, _d, _e, _f, _g, _h;
    var { direction, tokens, selectedChainId, selectedAddress, chains, price, tokenBasePrice, isLoadingPrice = false, onPriceChange, onDestinationAddressChange } = _a, props = __rest(_a, ["direction", "tokens", "selectedChainId", "selectedAddress", "chains", "price", "tokenBasePrice", "isLoadingPrice", "onPriceChange", "onDestinationAddressChange"]);
    const { config, fromPrice } = (0, useSquidStore_1.useSquidStore)();
    const { isSameAddressAndGnosisContext } = (0, useGnosisContext_1.useGnosisContext)();
    const { walletHandledExternally } = (0, useIntegratorContext_1.useIntegratorContext)();
    const { destinationAddressHasBeenUpdated } = (0, useSquidStore_1.useSwapRoutePersistStore)();
    const selectedChain = (0, react_1.useMemo)(() => chains.find((c) => c.chainId === selectedChainId), [chains, selectedChainId]);
    const selectedToken = (0, react_1.useMemo)(() => {
        var _a;
        return (_a = tokens.find((t) => t.address === selectedAddress)) !== null && _a !== void 0 ? _a : tokens.find((t) => {
            var _a;
            return t.address.toLowerCase() ===
                ((_a = (0, configService_1.getDefaultTokenAddressForChain)(tokens, config, selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainId)) === null || _a === void 0 ? void 0 : _a.toLowerCase());
        });
    }, [config, selectedAddress, selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainId, tokens]);
    const { switchRoute } = (0, useSquidRouter_1.useSquidRouter)();
    const enterMaxAmount = () => {
        onPriceChange === null || onPriceChange === void 0 ? void 0 : onPriceChange(balance !== null && balance !== void 0 ? balance : "0");
    };
    const { changeNetwork, networkConnected, networkConnectedOnRightChain, parsedAddress, } = (0, useMultiChain_1.useMultiChain)(selectedChain, selectedToken);
    const { balance } = (0, useMultiChainBalance_1.useMultiChainBalance)(selectedChain, selectedToken, direction);
    const { destinationAddress } = (0, useSwap_1.useSwap)();
    const tokenAmountPrice = (0, priceService_1.convertTokenAmountToUSD)((_b = price === null || price === void 0 ? void 0 : price.toString()) !== null && _b !== void 0 ? _b : "0", (_c = tokenBasePrice === null || tokenBasePrice === void 0 ? void 0 : tokenBasePrice.toString()) !== null && _c !== void 0 ? _c : "0");
    const notConnectedBtn = (0, jsx_runtime_1.jsx)(ConnectWalletButton_1.ConnectWalletButton, { direction: direction });
    const editableAddressBtn = () => {
        if (isSameAddressAndGnosisContext && !destinationAddressHasBeenUpdated) {
            return (0, jsx_runtime_1.jsx)(ConnectWalletButton_1.ConnectWalletButton, { direction: direction });
        }
        return ((0, jsx_runtime_1.jsx)(HoverButton_1.HoverButtonPrimary, { onClick: () => switchRoute(routes_1.routes.destination, { direction: "to" }), hoverContent: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-normal-case" }, { children: "Add address" })), (0, jsx_runtime_1.jsx)(hi2_1.HiPlus, { size: 13 })] })), content: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(destinationAddressHasBeenUpdated === null || destinationAddressHasBeenUpdated === void 0 ? void 0 : destinationAddressHasBeenUpdated.updated) &&
                        !(destinationAddressHasBeenUpdated === null || destinationAddressHasBeenUpdated === void 0 ? void 0 : destinationAddressHasBeenUpdated.filledFromWallet) && ((0, jsx_runtime_1.jsx)(hi2_1.HiPencil, { size: 14 })), (0, jsx_runtime_1.jsx)("span", { children: (0, walletService_1.formatWalletAddress)(destinationAddress) }), (!(destinationAddressHasBeenUpdated === null || destinationAddressHasBeenUpdated === void 0 ? void 0 : destinationAddressHasBeenUpdated.updated) ||
                        ((destinationAddressHasBeenUpdated === null || destinationAddressHasBeenUpdated === void 0 ? void 0 : destinationAddressHasBeenUpdated.updated) &&
                            (destinationAddressHasBeenUpdated === null || destinationAddressHasBeenUpdated === void 0 ? void 0 : destinationAddressHasBeenUpdated.filledFromWallet))) && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-ml-[6px] tw-flex" }, { children: (0, jsx_runtime_1.jsx)(ActiveIndicator_1.ActiveIndicator, {}) })))] }) }));
    };
    const addressLabelOnly = () => {
        // If the wallet is handled externally, we don't need to show the wallet selector
        // Because the user wont be able to select a wallet
        // Example if he is on ledger or gnosis safe context
        if (walletHandledExternally) {
            return ((0, jsx_runtime_1.jsx)(HoverButton_1.HoverButtonPrimary, { content: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-mr-[6px]" }, { children: parsedAddress })), (0, jsx_runtime_1.jsx)(ActiveIndicator_1.ActiveIndicator, {})] }) }));
        }
        return ((0, jsx_runtime_1.jsx)(RouterLink_1.RouterLink, Object.assign({ className: "tw-flex tw-flex-row tw-justify-end", to: routes_1.routes.wallets, params: { direction } }, { children: (0, jsx_runtime_1.jsx)(HoverButton_1.HoverButtonPrimary, { hoverContent: (0, jsx_runtime_1.jsx)("span", { children: "Change wallet" }), content: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-mr-[6px]" }, { children: parsedAddress })), (0, jsx_runtime_1.jsx)(ActiveIndicator_1.ActiveIndicator, {})] }) }) })));
    };
    const selectToken = ((0, jsx_runtime_1.jsx)(RouterLink_1.RouterLink, Object.assign({ className: (0, clsx_1.default)("tw-w-5/12 sm:tw-w-1/2", selectedChain === undefined && "pointer-events-none"), params: {
            chainId: selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainId,
            chainType: selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainType,
            direction,
        }, to: routes_1.routes.tokens }, { children: (0, jsx_runtime_1.jsx)(DropdownBtn_1.DropdownBtn, { disabled: selectedChain === undefined, label: selectedChain && (selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.symbol)
                ? selectedToken.symbol
                : "Select token", iconUrl: selectedChain && (selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.symbol)
                ? selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.logoURI
                : undefined }) })));
    const selectChain = ((0, jsx_runtime_1.jsx)(RouterLink_1.RouterLink, Object.assign({ className: "tw-w-7/12 sm:tw-w-1/2", to: routes_1.routes.chains, params: { direction } }, { children: (0, jsx_runtime_1.jsx)(DropdownBtn_1.DropdownBtn, { label: (_d = selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.networkName) !== null && _d !== void 0 ? _d : "Select a chain", iconUrl: selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainIconURI }) })));
    const walletHandleSource = !networkConnected ? (notConnectedBtn) : networkConnectedOnRightChain ? (addressLabelOnly()) : ((0, jsx_runtime_1.jsx)(SwitchNetworkButton_1.SwitchNetworkButton, { onClick: () => changeNetwork.mutate() }));
    const walletHandleDestination = networkConnected || !!destinationAddress
        ? editableAddressBtn()
        : (selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainType) === sdk_1.ChainType.Cosmos
            ? notConnectedBtn
            : null;
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({}, props, { className: (0, clsx_1.default)([
            "tw-flex tw-h-[165px] tw-w-full tw-flex-col tw-px-5",
            props.className,
        ]) }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-mb-3.5 tw-flex tw-flex-row tw-items-end tw-justify-between" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ id: "squid-swap-direction-txt", className: "tw-text-[16px] tw-font-medium tw-text-base-content" }, { children: direction === "to" ? "To" : "From" })), direction === "from" && walletHandleSource, direction === "to" && walletHandleDestination] })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: (0, clsx_1.default)("tw-rounded-box tw-flex tw-h-full tw-w-full tw-flex-col tw-border-[1px] tw-border-base-300 tw-bg-base-200 tw-px-3 tw-pb-[12px] tw-pt-[10px]", ((_f = (_e = config.style) === null || _e === void 0 ? void 0 : _e.advanced) === null || _f === void 0 ? void 0 : _f.transparentWidget) && constants_1.subTransparentClass) }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ style: { marginBottom: "0.65rem" }, className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-gap-2" }, { children: [selectChain, selectToken] })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-relative tw-mb-1 tw-flex tw-h-[39px] tw-w-full tw-flex-row tw-items-center" }, { children: !isLoadingPrice ? (direction === "from" ? ((0, jsx_runtime_1.jsx)(NumericInput_1.NumericInput, { type: "string", placeholder: "0", className: "disabled:bg-transparent tw-w-full tw-rounded-sm tw-bg-transparent tw-pl-0 tw-text-4xl tw-font-light tw-text-base-content tw-placeholder-base-content focus:tw-outline-none disabled:tw-border-none disabled:tw-outline-none", forcedUpdateValue: fromPrice, initialValue: (_g = price === null || price === void 0 ? void 0 : price.toString()) !== null && _g !== void 0 ? _g : "", maxDecimals: (_h = selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.decimals) !== null && _h !== void 0 ? _h : 18, parsedValueChanged: (value) => onPriceChange === null || onPriceChange === void 0 ? void 0 : onPriceChange(value !== null && value !== void 0 ? value : "0") })) : ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-relative tw-flex tw-w-full tw-items-center tw-text-4xl tw-font-light tw-text-neutral-content" }, { children: (0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { significantFigures: 10, value: price === null || price === void 0 ? void 0 : price.toString() }) })))) : ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-items-center tw-justify-center" }, { children: (0, jsx_runtime_1.jsx)(LoadingSkeleton_1.LoadingSkeleton, {}) }))) })), selectedChain && selectedToken && ((0, jsx_runtime_1.jsxs)("span", Object.assign({ style: { marginTop: "0.125rem" }, className: "tw-flex tw-flex-row tw-items-center tw-justify-between tw-text-sm" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-neutral-content" }, { children: [(0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { formatIfVerySmall: 0.01, value: tokenAmountPrice.toString(), currency: {
                                            symbol: "$",
                                            symbolPosition: "before",
                                        } }), direction === "to" && (0, jsx_runtime_1.jsx)(SwapPriceImpactText_1.SwapPriceImpactText, {})] })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-neutral-content" }, { children: "Balance:" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: (0, clsx_1.default)("tw-text-sm tw-text-neutral-content", direction === "to" && "pointer-events-none"), onClick: () => (direction === "from" ? enterMaxAmount() : null) }, { children: (0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { formatIfVerySmall: 0.0001, value: balance !== null && balance !== void 0 ? balance : "0", significantFigures: 4, currency: {
                                                symbol: selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.symbol,
                                                symbolPosition: "after",
                                            } }) }))] }))] })))] }))] })));
};
exports.SwapConfiguration = SwapConfiguration;
//# sourceMappingURL=SwapConfiguration.js.map