"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllTokensView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const fuse_js_1 = __importDefault(require("fuse.js"));
const react_1 = require("react");
const Loader_1 = require("../components/Loader");
const SearchInput_1 = require("../components/SearchInput");
const TokenListItem_1 = require("../components/TokenListItem");
const routes_1 = require("../core/routes");
const useAllTokensWithBalance_1 = require("../hooks/useAllTokensWithBalance");
const useKeyboardNavigation_1 = require("../hooks/useKeyboardNavigation");
const useSquidChains_1 = require("../hooks/useSquidChains");
const useSquidRouter_1 = require("../hooks/useSquidRouter");
const useSwap_1 = require("../hooks/useSwap");
const useSquidStore_1 = require("../store/useSquidStore");
const AllTokensView = () => {
    var _a, _b, _c;
    (0, useKeyboardNavigation_1.useKeyboardNavigation)();
    const { switchRoute, currentRouteParams } = (0, useSquidRouter_1.useSquidRouter)();
    const { supportedChains } = (0, useSquidChains_1.useSquidChains)();
    const chainId = currentRouteParams === null || currentRouteParams === void 0 ? void 0 : currentRouteParams.chainId;
    const direction = currentRouteParams === null || currentRouteParams === void 0 ? void 0 : currentRouteParams.direction;
    const chainData = (_a = supportedChains.data) === null || _a === void 0 ? void 0 : _a.find((c) => c.chainId == chainId);
    const { onSwapChange, fromToken, toToken } = (0, useSwap_1.useSwap)();
    const { tokens, getTokensWithPrices } = (0, useAllTokensWithBalance_1.useAllTokensWithBalance)(direction);
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const [search, setSearch] = (0, react_1.useState)("");
    // Fuse initial config
    const fuse = (0, react_1.useMemo)(() => new fuse_js_1.default(tokens, {
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
    }), [tokens]);
    const selectedToken = direction === "from" ? fromToken : toToken;
    const sortTokens = (a, b) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (+a.balance * +((_a = a === null || a === void 0 ? void 0 : a.priceUSD) !== null && _a !== void 0 ? _a : 0) > +b.balance * +((_b = b === null || b === void 0 ? void 0 : b.priceUSD) !== null && _b !== void 0 ? _b : 0)) {
            return -1;
        }
        if (+a.balance * +((_c = a === null || a === void 0 ? void 0 : a.priceUSD) !== null && _c !== void 0 ? _c : 0) < +b.balance * +((_d = b === null || b === void 0 ? void 0 : b.priceUSD) !== null && _d !== void 0 ? _d : 0)) {
            return 1;
        }
        if (+((_e = a === null || a === void 0 ? void 0 : a.balance) !== null && _e !== void 0 ? _e : 0) > +((_f = b === null || b === void 0 ? void 0 : b.balance) !== null && _f !== void 0 ? _f : 0)) {
            return -1;
        }
        if (+((_g = a === null || a === void 0 ? void 0 : a.balance) !== null && _g !== void 0 ? _g : 0) < +((_h = b === null || b === void 0 ? void 0 : b.balance) !== null && _h !== void 0 ? _h : 0)) {
            return 1;
        }
        return 0;
    };
    const changeSwap = (0, react_1.useCallback)((token) => {
        if (direction === "from") {
            onSwapChange({
                fromChainId: token.chainId,
                fromTokenAddress: token.address,
            });
        }
        else {
            onSwapChange({
                toTokenAddress: token.address,
                toChainId: token.chainId,
            });
        }
        switchRoute === null || switchRoute === void 0 ? void 0 : switchRoute(routes_1.routes.swap);
    }, [direction, onSwapChange, switchRoute]);
    const getTokenComponent = (0, react_1.useCallback)((token) => {
        var _a, _b, _c;
        return ((0, jsx_runtime_1.jsx)(TokenListItem_1.TokenListItem, { usdUnitPrice: (_c = (_b = (_a = getTokensWithPrices.data) === null || _a === void 0 ? void 0 : _a.find((d) => d.address === token.address && d.chainId === token.chainId)) === null || _b === void 0 ? void 0 : _b.priceUSD) !== null && _c !== void 0 ? _c : "0", selected: (selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.address) === token.address &&
                selectedToken.chainId === token.chainId, displayChainIcon: true, isLast: false, token: token, chain: chainData, onSelect: (_) => changeSwap(token) }, `token-${token.chainId}-${token.address}`));
    }, [
        chainData,
        changeSwap,
        getTokensWithPrices.data,
        selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.address,
        selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.chainId,
    ]);
    const baseTokens = (0, react_1.useMemo)(() => {
        const data = getTokensWithPrices.isSuccess
            ? getTokensWithPrices.data
            : tokens;
        return data
            .sort((a, b) => sortTokens(a, b))
            .map((token) => getTokenComponent(token));
    }, [
        getTokenComponent,
        getTokensWithPrices.data,
        getTokensWithPrices.isSuccess,
        tokens,
    ]);
    const fuseTokens = (0, react_1.useMemo)(() => fuse
        .search(search)
        .sort((a, b) => sortTokens(a.item, b.item))
        .map((token, index) => {
        const t = token.item;
        return getTokenComponent(t);
    }), [fuse, getTokenComponent, search]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [getTokensWithPrices.isLoading && ((0, jsx_runtime_1.jsx)("span", Object.assign({ style: {
                    position: "absolute",
                    top: 15,
                    zIndex: 10,
                    right: 15,
                } }, { children: (0, jsx_runtime_1.jsx)(Loader_1.Loader, {}) }))), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, clsx_1.default)("tw-flex tw-h-full tw-flex-1 tw-flex-col tw-overflow-hidden", ((_c = (_b = config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) &&
                    "tw-bg-opacity-70 hover:tw-bg-opacity-70") }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-3 tw-text-lg" }, { children: (0, jsx_runtime_1.jsx)(SearchInput_1.SearchInput, { autoFocus: true, placeholder: "Search name or paste address", onSearchChange: setSearch, style: { height: "48px" } }) })), (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "tw-flex tw-h-full  tw-flex-col tw-flex-nowrap tw-overflow-auto tw-pb-[20px]" }, { children: search.length > 0 ? fuseTokens : baseTokens }))] }))] }));
};
exports.AllTokensView = AllTokensView;
//# sourceMappingURL=AllTokensView.js.map