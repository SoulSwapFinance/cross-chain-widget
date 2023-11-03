"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@0xsquid/sdk");
const clsx_1 = __importDefault(require("clsx"));
const fuse_js_1 = __importDefault(require("fuse.js"));
const react_1 = require("react");
const SearchInput_1 = require("../components/SearchInput");
const TokenListItem_1 = require("../components/TokenListItem");
const TokensViewHeaderDropdown_1 = require("../components/TokensViewHeaderDropdown");
const constants_1 = require("../core/constants");
const useKeyboardNavigation_1 = require("../hooks/useKeyboardNavigation");
const useSquidChains_1 = require("../hooks/useSquidChains");
const useSquidRouter_1 = require("../hooks/useSquidRouter");
const useSwap_1 = require("../hooks/useSwap");
const useTokensWithBalance_1 = require("../hooks/useTokensWithBalance");
const configService_1 = require("../services/internal/configService");
const useSquidStore_1 = require("../store/useSquidStore");
const TokensView = () => {
    var _a, _b, _c;
    (0, useKeyboardNavigation_1.useKeyboardNavigation)();
    const { previousRoute, currentRouteParams } = (0, useSquidRouter_1.useSquidRouter)();
    const { supportedChains } = (0, useSquidChains_1.useSquidChains)();
    const chainId = currentRouteParams === null || currentRouteParams === void 0 ? void 0 : currentRouteParams.chainId;
    const direction = currentRouteParams === null || currentRouteParams === void 0 ? void 0 : currentRouteParams.direction;
    const chainData = (_a = supportedChains.data) === null || _a === void 0 ? void 0 : _a.find((c) => c.chainId == chainId);
    const { onSwapChange, fromToken, toToken, toChain, fromChain } = (0, useSwap_1.useSwap)();
    const { evmBalances, cosmosBalances, tokens: supportedTokens, } = (0, useTokensWithBalance_1.useTokensWithBalance)(chainData, direction);
    const [filteredTokens, setFilteredTokens] = (0, react_1.useState)([]);
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const selectedToken = direction === "from" ? fromToken : toToken;
    const tokens = (0, react_1.useMemo)(() => {
        var _a, _b, _c;
        if (supportedTokens && ((_a = supportedTokens === null || supportedTokens === void 0 ? void 0 : supportedTokens.length) !== null && _a !== void 0 ? _a : 0) > 0) {
            let defaultTokens = [];
            if (((chainData === null || chainData === void 0 ? void 0 : chainData.chainType) === sdk_1.ChainType.EVM && evmBalances.isSuccess) ||
                ((chainData === null || chainData === void 0 ? void 0 : chainData.chainType) === sdk_1.ChainType.Cosmos && cosmosBalances.isSuccess)) {
                if ((chainData === null || chainData === void 0 ? void 0 : chainData.chainType) === sdk_1.ChainType.EVM) {
                    defaultTokens = (_b = evmBalances.data) !== null && _b !== void 0 ? _b : [];
                }
                else {
                    defaultTokens = (_c = cosmosBalances.data) !== null && _c !== void 0 ? _c : [];
                }
            }
            else {
                // Initialize tokens with zero balance
                // Those balances wont be shown if 0
                defaultTokens = supportedTokens === null || supportedTokens === void 0 ? void 0 : supportedTokens.sort((a, b) => (a.address === constants_1.nativeEvmTokenAddress ? -1 : 1)).map((st) => {
                    var _a;
                    const isFavorite = ((_a = config.favTokens) === null || _a === void 0 ? void 0 : _a.find((t) => t.address === st.address && t.chainId === st.chainId)) !== undefined;
                    return Object.assign(Object.assign({}, st), { balance: "0", priceinUSD: "0", isFavorite });
                });
            }
            // We're doing this reassignment to have super fast tokens loading
            // Meaning that even if we dont have the balance, we can display tokens when user asks for them
            // The balance will display right after
            if (defaultTokens.length > 0) {
                const filteredTokens = direction === "from"
                    ? defaultTokens
                    : (0, configService_1.filterTokensForDestination)(defaultTokens, toChain, fromToken);
                return filteredTokens
                    .map((st) => {
                    var _a, _b, _c;
                    const isFavorite = ((_a = config.favTokens) === null || _a === void 0 ? void 0 : _a.find((t) => t.address === st.address && t.chainId === st.chainId)) !== undefined;
                    const tokenWithBalance = defaultTokens.find((tokenWithBalance) => tokenWithBalance.address === st.address);
                    return Object.assign(Object.assign({}, st), { isFavorite, balance: (_b = tokenWithBalance === null || tokenWithBalance === void 0 ? void 0 : tokenWithBalance.balance) !== null && _b !== void 0 ? _b : "0", priceUSD: (_c = tokenWithBalance === null || tokenWithBalance === void 0 ? void 0 : tokenWithBalance.priceUSD) !== null && _c !== void 0 ? _c : "0" });
                })
                    .sort((a, b) => {
                    // First compare favourites
                    if (!a.isFavorite && b.isFavorite)
                        return 1;
                    if (a.isFavorite && !b.isFavorite)
                        return -1;
                    if (a.isFavorite && b.isFavorite) {
                        return a.symbol.localeCompare(b.symbol);
                    }
                    // Then balance
                    if (+a.balance * +a.priceUSD > +b.balance * +b.priceUSD)
                        return -1;
                    if (+a.balance * +a.priceUSD < +b.balance * +b.priceUSD)
                        return 1;
                    return 0;
                });
            }
            return defaultTokens;
        }
        return [];
    }, [
        chainData === null || chainData === void 0 ? void 0 : chainData.chainType,
        config.favTokens,
        cosmosBalances.data,
        cosmosBalances.isSuccess,
        evmBalances.data,
        evmBalances.isSuccess,
        fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainId,
        fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol,
        supportedTokens,
        toChain,
    ]);
    const fuse = new fuse_js_1.default(tokens !== null && tokens !== void 0 ? tokens : [], {
        isCaseSensitive: false,
        includeScore: false,
        threshold: 0.15,
        keys: [
            {
                name: "symbol",
                weight: 1,
            },
            {
                name: "address",
                weight: 0.1,
            },
        ],
    });
    const inputChanged = (search) => {
        if (search) {
            setFilteredTokens(fuse.search(search).map((c) => c.item));
        }
        else {
            setFilteredTokens(tokens);
        }
    };
    const changeSwap = (tokenAddress) => {
        if (direction === "from") {
            onSwapChange({ fromTokenAddress: tokenAddress });
        }
        else {
            onSwapChange({ toTokenAddress: tokenAddress });
        }
        previousRoute();
    };
    (0, react_1.useEffect)(() => {
        var _a;
        if (filteredTokens.length === 0 && tokens && ((_a = tokens === null || tokens === void 0 ? void 0 : tokens.length) !== null && _a !== void 0 ? _a : 0) > 0) {
            setFilteredTokens(tokens);
        }
    }, [tokens, filteredTokens]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, clsx_1.default)("tw-flex tw-h-full tw-flex-1 tw-flex-col tw-overflow-hidden", ((_c = (_b = config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) &&
            "tw-bg-opacity-70 hover:tw-bg-opacity-70") }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-3 tw-text-lg" }, { children: (0, jsx_runtime_1.jsx)(SearchInput_1.SearchInput, { autoFocus: true, placeholder: "Search name or paste address", onSearchChange: inputChanged, style: { height: "48px", color: "red" } }) })), (0, jsx_runtime_1.jsx)(TokensViewHeaderDropdown_1.TokensViewHeaderDropdown, { chainData: chainData, direction: direction }), (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "tw-flex tw-h-full  tw-flex-col tw-flex-nowrap tw-overflow-auto tw-pb-[20px]" }, { children: tokens === null || tokens === void 0 ? void 0 : tokens.filter((token) => (filteredTokens === null || filteredTokens === void 0 ? void 0 : filteredTokens.findIndex((t) => t.address === token.address && t.chainId == chainId)) !== -1).map((token, index) => {
                    return ((0, jsx_runtime_1.jsx)(TokenListItem_1.TokenListItem, { usdUnitPrice: token.priceUSD, selected: (selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.address) === token.address, isLast: index + 1 === filteredTokens.length, token: token, chain: chainData, onSelect: changeSwap }, `token-${token.address}`));
                }) }))] })));
};
exports.TokensView = TokensView;
//# sourceMappingURL=TokensView.js.map