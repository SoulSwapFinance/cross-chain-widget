"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const bs_1 = require("react-icons/bs");
const hi_1 = require("react-icons/hi");
const wagmi_1 = require("wagmi");
const CollapsibleBox_1 = require("../components/CollapsibleBox");
const Loader_1 = require("../components/Loader");
// const PoweredBy_1 = require("../components/PoweredBy");
const BoostBadge_1 = require("../components/badges/BoostBadge");
const GasBadge_1 = require("../components/badges/GasBadge");
const SubmitSwapBtn_1 = require("../components/swap/SubmitSwapBtn");
const SwapConfiguration_1 = require("../components/swap/SwapConfiguration");
const SwapRouteError_1 = require("../components/swap/SwapRouteError");
const SwapWarning_1 = require("../components/swap/SwapWarning");
const constants_1 = require("../core/constants");
const numbers_1 = require("../core/numbers");
const useEstimate_1 = require("../hooks/useEstimate");
const usePrices_1 = require("../hooks/usePrices");
const useSquidChains_1 = require("../hooks/useSquidChains");
const useSwap_1 = require("../hooks/useSwap");
const useSquidStore_1 = require("../store/useSquidStore");
const SwapViewDetailsCollapsed_1 = require("./SwapViewDetailsCollapsed");
const SwapView = () => {
    var _a, _b, _c, _d, _e;
    const { tokenItems, onSwapChange, fromPrice, fromPriceChanged, invertSwaps } = (0, useSwap_1.useSwap)();
    const [isCollapseBoxOpen, setIsCollapseBoxOpen] = (0, react_1.useState)(false);
    const [isHighlightedGas, setIsHighlightedGas] = (0, react_1.useState)(false);
    const [isHighlightedExpress, setIsHighlightedExpress] = (0, react_1.useState)(false);
    const { supportedDestinationChains, supportedSourceChains } = (0, useSquidChains_1.useSquidChains)();
    // At the moment only swapping from EVM chains
    // So only disabling swap button if not connected on an EVM chain
    const { isConnected } = (0, wagmi_1.useAccount)();
    const { tokenPrices } = (0, usePrices_1.usePrices)();
    const { toAmount, isFetching: isFetchingEstimate, squidRouteError, priceImpact, toAmountUSDFloat, sourceChainNativeToken, totalWithRefundEstimate, } = (0, useEstimate_1.useEstimate)();
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const { swapRoute } = (0, useSquidStore_1.useSwapRoutePersistStore)();
    const swapButtonDisabledConditions = (0, react_1.useMemo)(() => [
        toAmountUSDFloat > constants_1.limitTradeSizeUsd,
        isFetchingEstimate,
        +toAmount <= 0,
        !isConnected,
        +(priceImpact !== null && priceImpact !== void 0 ? priceImpact : "0") > constants_1.maxPriceImpact, //  If the price impact is too high, we don't want to allow the user to swap
    ], [isConnected, isFetchingEstimate, priceImpact, toAmount, toAmountUSDFloat]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "tw-rounded-b-box tw-relative tw-flex tw-h-full tw-grow tw-flex-col" }, {
        children: [
            (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-col" }, {
            children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-3" }, {
                children: [(0, jsx_runtime_1.jsx)(SwapConfiguration_1.SwapConfiguration, { id: "squid-swap-source", direction: "from", onPriceChange: (d) => fromPriceChanged(d), price: fromPrice, tokens: tokenItems.from, chains: supportedSourceChains, tokenBasePrice: (_a = tokenPrices.data) === null || _a === void 0 ? void 0 : _a.sourceTokenUsdPrice, selectedChainId: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId, selectedAddress: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-relative tw-flex tw-w-full tw-justify-center" }, {
                    children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-absolute" }, {
                        children: (0, jsx_runtime_1.jsx)("button", Object.assign({
                            onClick: invertSwaps, type: "button", className: "w-rounded-md tw-group tw-dsw-btn-primary tw-flex tw-flex-row tw-items-center tw-justify-center tw-bg-primary tw-p-0 tw-text-center", style: {
                                padding: "0 !important",
                                width: "26px",
                                height: "26px",
                                borderRadius: "8px",
                                marginTop: "4px",
                            }
                        }, { children: (0, jsx_runtime_1.jsx)(hi_1.HiArrowDown, { size: 16, className: "tw-text-primary-content tw-transition-all group-hover:tw-rotate-180" }) }))
                    }))
                })), (0, jsx_runtime_1.jsx)(SwapConfiguration_1.SwapConfiguration, {
                    id: "squid-swap-destination", direction: "to", onDestinationAddressChange: ({ address, filledFromWallet }) => {
                        onSwapChange({ destinationAddress: address });
                        useSquidStore_1.useSwapRoutePersistStore.setState({
                            destinationAddressHasBeenUpdated: {
                                updated: true,
                                filledFromWallet,
                            },
                        });
                    }, price: toAmount, tokens: tokenItems.to, chains: supportedDestinationChains, tokenBasePrice: (_b = tokenPrices.data) === null || _b === void 0 ? void 0 : _b.destinationTokenUsdPrice, selectedChainId: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId, selectedAddress: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress, isLoadingPrice: isFetchingEstimate
                })]
            }))
        })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: (0, clsx_1.default)("tw-flex tw-h-full tw-w-full tw-grow tw-flex-col tw-gap-2 tw-pt-4", ((_d = (_c = config.style) === null || _c === void 0 ? void 0 : _c.advanced) === null || _d === void 0 ? void 0 : _d.transparentWidget) && "tw-bg-opacity-0") }, {
            children: [(0, jsx_runtime_1.jsx)(CollapsibleBox_1.CollapsibleBox, Object.assign({
                isOpen: isCollapseBoxOpen, openOffset: `-${constants_1.widgetHeaderSize.height + constants_1.widgetHeaderSize.paddingY}px`, onClose: () => {
                    setIsCollapseBoxOpen(false);
                    setIsHighlightedExpress(false);
                    setIsHighlightedGas(false);
                }, closedStateChildren: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between" }, {
                    children: [isFetchingEstimate ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "tw-flex tw-min-h-[31px] tw-flex-row tw-items-center tw-gap-1.5 tw-text-sm tw-font-semibold" }, { children: [(0, jsx_runtime_1.jsx)(Loader_1.Loader, {}), (0, jsx_runtime_1.jsx)("span", { children: "Fetching estimations" })] }))) : ((0, jsx_runtime_1.jsxs)("button", Object.assign({ type: "button", onClick: () => setIsCollapseBoxOpen(true), className: "tw-flex tw-flex-col" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-text-sm tw-font-semibold" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: (0, numbers_1.roundNumericValue)(totalWithRefundEstimate.totalAmount.toString(), 2, false, 4) }), " ", (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-ml-0.5" }, { children: (_e = totalWithRefundEstimate === null || totalWithRefundEstimate === void 0 ? void 0 : totalWithRefundEstimate.feeToken) === null || _e === void 0 ? void 0 : _e.symbol })), " "] })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-sm tw-text-neutral-content" }, { children: "Estimated fee" }))] }))), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-1.5" }, {
                        children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-items-center" }, {
                            children: (0, jsx_runtime_1.jsx)(GasBadge_1.GasBadge, {
                                onClick: () => {
                                    setIsCollapseBoxOpen(true);
                                    setIsHighlightedGas(true);
                                }
                            })
                        })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-items-center" }, {
                            children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-items-center" }, {
                                children: (0, jsx_runtime_1.jsx)(BoostBadge_1.BoostBadge, {
                                    onClick: () => {
                                        setIsCollapseBoxOpen(true);
                                        setIsHighlightedExpress(true);
                                    }
                                })
                            }))
                        })), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", onClick: () => setIsCollapseBoxOpen(true) }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-relative tw-flex tw-h-7 tw-w-7 tw-items-center tw-justify-center" }, { children: (0, jsx_runtime_1.jsx)(bs_1.BsChevronDown, { className: (0, clsx_1.default)("rotate-0 cursor-pointer transition-transform tw-flex tw-flex-col") }) })) }))]
                    }))]
                }))
            }, { children: (0, jsx_runtime_1.jsx)(SwapViewDetailsCollapsed_1.SwapViewDetailsCollapsed, { isHighlightedExpress: isHighlightedExpress, isHighlightedGas: isHighlightedGas }) })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-mb-2  tw-w-full tw-px-5" }, { children: squidRouteError ? ((0, jsx_runtime_1.jsx)(SwapRouteError_1.SwapRouteError, { error: squidRouteError })) : ((0, jsx_runtime_1.jsx)(SwapWarning_1.SwapWarning, {})) }))]
        })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: " tw-mb-4 tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-1 tw-px-5 tw-text-sm tw-font-semibold" },
            {
                children: [(0, jsx_runtime_1.jsx)(SubmitSwapBtn_1.SubmitSwapBtn,
                    { disabled: swapButtonDisabledConditions.some((c) => c) }),
                    // (0, jsx_runtime_1.jsx)(PoweredBy_1.PoweredBy, {})
                ]
            }))]
    })));
};
exports.SwapView = SwapView;
//# sourceMappingURL=SwapView.js.map