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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainsView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@0xsquid/sdk");
const clsx_1 = __importDefault(require("clsx"));
const fuse_js_1 = __importDefault(require("fuse.js"));
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const logos_1 = require("../assets/images/logos");
const ListItemAvatar_1 = require("../components/ListItemAvatar");
const SearchInput_1 = require("../components/SearchInput");
const constants_1 = require("../core/constants");
const CosmosProvider_1 = require("../core/providers/CosmosProvider");
const routes_1 = require("../core/routes");
const useKeyboardNavigation_1 = require("../hooks/useKeyboardNavigation");
const useSquidChains_1 = require("../hooks/useSquidChains");
const useSquidRouter_1 = require("../hooks/useSquidRouter");
const useSwap_1 = require("../hooks/useSwap");
const configService_1 = require("../services/internal/configService");
const useSquidStore_1 = require("../store/useSquidStore");
const ChainsView = () => {
    var _a, _b;
    (0, useKeyboardNavigation_1.useKeyboardNavigation)();
    const { currentRouteParams } = (0, useSquidRouter_1.useSquidRouter)();
    const { direction, context } = currentRouteParams !== null && currentRouteParams !== void 0 ? currentRouteParams : {};
    const { fromChain, toChain } = (0, useSwap_1.useSwap)();
    const { onSwapChange } = (0, useSwap_1.useSwap)();
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const { swapRoute } = (0, useSquidStore_1.useSwapRoutePersistStore)();
    const { supportedDestinationChains, supportedSourceChains } = (0, useSquidChains_1.useSquidChains)();
    const { switchRoute } = (0, useSquidRouter_1.useSquidRouter)();
    const { onCosmosChainChange, connectCosmos, isConnected } = (0, CosmosProvider_1.useCosmosContext)();
    const chainItems = direction === "from" ? supportedSourceChains : supportedDestinationChains;
    const { chain: connectedEvmChain } = (0, wagmi_1.useNetwork)();
    const selectedChain = direction === "from" ? fromChain : toChain;
    const disabledChainTypes = direction === "from" ? [sdk_1.ChainType.Cosmos] : [];
    const [filteredChainsForSearch, setFilteredChainsForSearch] = (0, react_1.useState)([]);
    const fuse = new fuse_js_1.default(chainItems !== null && chainItems !== void 0 ? chainItems : [], {
        isCaseSensitive: false,
        includeScore: false,
        minMatchCharLength: 2,
        threshold: 0.1,
        keys: ["networkName", "chainName"],
    });
    const inputChanged = (search) => {
        if (search) {
            setFilteredChainsForSearch(fuse.search(search).map((c) => c.item));
        }
        else {
            setFilteredChainsForSearch(chainItems);
        }
    };
    const selectAllChains = () => {
        const addRouteToHistory = context !== "fromToken";
        switchRoute === null || switchRoute === void 0 ? void 0 : switchRoute(routes_1.routes.allTokens, {
            direction,
        }, addRouteToHistory);
    };
    const changeSwap = (chainId) => __awaiter(void 0, void 0, void 0, function* () {
        const newChain = chainItems.find((c) => c.chainId === chainId);
        const previousChain = chainItems.find((c) => (c === null || c === void 0 ? void 0 : c.chainId) === (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId));
        if ((newChain === null || newChain === void 0 ? void 0 : newChain.chainType) === sdk_1.ChainType.Cosmos) {
            onCosmosChainChange === null || onCosmosChainChange === void 0 ? void 0 : onCosmosChainChange(chainId.toString());
            // mutate the connection will retrieve the address and set it in the store
            // But connect is also triggering the wallet popup, so we need to be sure that the user has been connected once by himself
            if (isConnected) {
                connectCosmos === null || connectCosmos === void 0 ? void 0 : connectCosmos.mutateAsync({ chain: newChain });
            }
        }
        if (direction === "from") {
            // If To chain was the same, needs to be reset
            // To default chain
            if (chainId === (toChain === null || toChain === void 0 ? void 0 : toChain.chainId)) {
                const defaultToChainId = (0, configService_1.getFirstAvailableChainId)(chainId, config, "to", supportedDestinationChains);
                onSwapChange({ fromChainId: chainId, toChainId: defaultToChainId });
            }
            else {
                onSwapChange({ fromChainId: chainId });
            }
        }
        else {
            let destinationAddress = swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress;
            const isNewChainEvm = (newChain === null || newChain === void 0 ? void 0 : newChain.chainType) === sdk_1.ChainType.EVM;
            const isPreviousChainCosmos = (previousChain === null || previousChain === void 0 ? void 0 : previousChain.chainType) === sdk_1.ChainType.Cosmos;
            const isNewChainCosmos = (newChain === null || newChain === void 0 ? void 0 : newChain.chainType) === sdk_1.ChainType.Cosmos;
            if ((isNewChainEvm && isPreviousChainCosmos) || isNewChainCosmos) {
                destinationAddress = constants_1.destinationAddressResetValue;
                // To remove the edit pen icon
                useSquidStore_1.useSwapRoutePersistStore.setState({
                    destinationAddressHasBeenUpdated: {
                        updated: false,
                        filledFromWallet: false,
                    },
                });
            }
            onSwapChange({
                toChainId: chainId,
                destinationAddress,
            });
        }
        if (context === "fromToken") {
            switchRoute === null || switchRoute === void 0 ? void 0 : switchRoute(routes_1.routes.tokens, {
                chainId,
                direction,
                chainType: newChain === null || newChain === void 0 ? void 0 : newChain.chainType,
            }, false);
        }
        else {
            switchRoute === null || switchRoute === void 0 ? void 0 : switchRoute(routes_1.routes.swap);
        }
    });
    (0, react_1.useEffect)(() => {
        if (chainItems) {
            setFilteredChainsForSearch(chainItems);
        }
    }, [chainItems]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, clsx_1.default)(" tw-flex tw-h-full tw-flex-1 tw-flex-col tw-overflow-hidden", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && "tw-bg-opacity-70") }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-p-3" }, { children: (0, jsx_runtime_1.jsx)(SearchInput_1.SearchInput, { autoFocus: true, placeholder: "Search chain", onSearchChange: inputChanged }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "tw-px-5 tw-pb-3 tw-text-base tw-font-semibold", style: { paddingBottom: "10px", paddingTop: "2px" } }, { children: "Supported chains" })), (0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: "tw-rounded-b-box tw-flex  tw-h-full tw-flex-col tw-flex-nowrap tw-overflow-auto tw-pb-[20px]" }, { children: [(0, jsx_runtime_1.jsx)(ListItemAvatar_1.ListItemAvatar, Object.assign({ imageUrl: logos_1.logos.squidLogoPurple, onSelect: selectAllChains }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-col tw-gap-1" }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "All Networks" }) })) })) })), filteredChainsForSearch === null || filteredChainsForSearch === void 0 ? void 0 : filteredChainsForSearch.sort((a, b) => {
                        var _a, _b, _c, _d, _e, _f;
                        // Sort by chain found in comingSoonChainIds array first, then by chainId
                        return ((_a = config.comingSoonChainIds) === null || _a === void 0 ? void 0 : _a.find((id) => id === a.chainId)) &&
                            !((_b = config.comingSoonChainIds) === null || _b === void 0 ? void 0 : _b.find((id) => id === b.chainId))
                            ? 1
                            : ((_c = config.comingSoonChainIds) === null || _c === void 0 ? void 0 : _c.find((id) => id === b.chainId)) &&
                                !((_d = config.comingSoonChainIds) === null || _d === void 0 ? void 0 : _d.find((id) => id === a.chainId))
                                ? -1
                                : ((_e = config.comingSoonChainIds) === null || _e === void 0 ? void 0 : _e.find((id) => id === a.chainId)) &&
                                    ((_f = config.comingSoonChainIds) === null || _f === void 0 ? void 0 : _f.find((id) => id === b.chainId))
                                    ? a.chainName.localeCompare(b.chainName)
                                    : 0;
                    }).map((chain, index) => {
                        var _a;
                        // Active means that it is the chain that is currently CONNECTED
                        const active = direction === "from"
                            ? chain.chainId === (connectedEvmChain === null || connectedEvmChain === void 0 ? void 0 : connectedEvmChain.id)
                            : false;
                        // Selected means that it is the chain that is currently SELECTED
                        const selected = chain.chainId === (selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainId);
                        // Disabled chains at the moment:
                        // same chain as the other direction selected one, and cosmos chains for "to" direction
                        const chainTypeDisabled = disabledChainTypes.findIndex((type) => type === chain.chainType) !== -1;
                        const sameChainDisabled = direction === "to" && (fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainId) === chain.chainId;
                        const comingSoonChain = (_a = config.comingSoonChainIds) === null || _a === void 0 ? void 0 : _a.find((id) => id === chain.chainId);
                        return ((0, jsx_runtime_1.jsx)(ListItemAvatar_1.ListItemAvatar, Object.assign({ active: active, selected: selected, isLast: index + 1 === filteredChainsForSearch.length, imageUrl: chain.chainIconURI, selectValue: chain.chainId, onSelect: changeSwap, disabled: chainTypeDisabled || sameChainDisabled || comingSoonChain }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-col tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex" }, { children: (0, jsx_runtime_1.jsx)("span", { children: chain.networkName }) })), chainTypeDisabled && !comingSoonChain && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-text-left tw-text-sm" }, { children: (0, jsx_runtime_1.jsxs)("span", { children: ["Swaps from Cosmos coming soon. Bridge via", " ", (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "https://satellite.money/", target: "_blank", rel: "noreferrer", className: "tw-font-bold" }, { children: "Satellite" }))] }) }))), sameChainDisabled && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-text-sm" }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-left" }, { children: config.internalSameChainSwapAllowed
                                                ? "Please visit the single-chain swap section to swap on the same chain."
                                                : "Support for swaps on the same chain is coming soon." })) }))), !!comingSoonChain && !sameChainDisabled && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-text-sm" }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Coming soon" }) })))] })) }), `chain-${chain.chainId}`));
                    })] }))] })));
};
exports.ChainsView = ChainsView;
//# sourceMappingURL=ChainsView.js.map