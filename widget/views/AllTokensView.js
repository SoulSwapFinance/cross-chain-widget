import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from "clsx";
import Fuse from "fuse.js";
import { useCallback, useMemo, useState } from "react";
import { Loader } from "../components/Loader";
import { SearchInput } from "../components/SearchInput";
import { TokenListItem } from "../components/TokenListItem";
import { routes } from "../core/routes";
import { useAllTokensWithBalance } from "../hooks/useAllTokensWithBalance";
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation";
import { useSquidChains } from "../hooks/useSquidChains";
import { useSquidRouter } from "../hooks/useSquidRouter";
import { useSwap } from "../hooks/useSwap";
import { useSquidStore } from "../store/useSquidStore";
export const AllTokensView = () => {
    var _a, _b, _c;
    useKeyboardNavigation();
    const { switchRoute, currentRouteParams } = useSquidRouter();
    const { supportedChains } = useSquidChains();
    const chainId = currentRouteParams === null || currentRouteParams === void 0 ? void 0 : currentRouteParams.chainId;
    const direction = currentRouteParams === null || currentRouteParams === void 0 ? void 0 : currentRouteParams.direction;
    const chainData = (_a = supportedChains.data) === null || _a === void 0 ? void 0 : _a.find((c) => c.chainId == chainId);
    const { onSwapChange, fromToken, toToken } = useSwap();
    const { tokens, getTokensWithPrices } = useAllTokensWithBalance(direction);
    const { config } = useSquidStore();
    const [search, setSearch] = useState("");
    // Fuse initial config
    const fuse = useMemo(() => new Fuse(tokens, {
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
    const changeSwap = useCallback((token) => {
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
        switchRoute === null || switchRoute === void 0 ? void 0 : switchRoute(routes.swap);
    }, [direction, onSwapChange, switchRoute]);
    const getTokenComponent = useCallback((token) => {
        var _a, _b, _c;
        return (_jsx(TokenListItem, { usdUnitPrice: (_c = (_b = (_a = getTokensWithPrices.data) === null || _a === void 0 ? void 0 : _a.find((d) => d.address === token.address && d.chainId === token.chainId)) === null || _b === void 0 ? void 0 : _b.priceUSD) !== null && _c !== void 0 ? _c : "0", selected: (selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.address) === token.address &&
                selectedToken.chainId === token.chainId, displayChainIcon: true, isLast: false, token: token, chain: chainData, onSelect: (_) => changeSwap(token) }, `token-${token.chainId}-${token.address}`));
    }, [
        chainData,
        changeSwap,
        getTokensWithPrices.data,
        selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.address,
        selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.chainId,
    ]);
    const baseTokens = useMemo(() => {
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
    const fuseTokens = useMemo(() => fuse
        .search(search)
        .sort((a, b) => sortTokens(a.item, b.item))
        .map((token, index) => {
        const t = token.item;
        return getTokenComponent(t);
    }), [fuse, getTokenComponent, search]);
    return (_jsxs(_Fragment, { children: [getTokensWithPrices.isLoading && (_jsx("span", Object.assign({ style: {
                    position: "absolute",
                    top: 15,
                    zIndex: 10,
                    right: 15,
                } }, { children: _jsx(Loader, {}) }))), _jsxs("div", Object.assign({ className: clsx("tw-flex tw-h-full tw-flex-1 tw-flex-col tw-overflow-hidden", ((_c = (_b = config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) &&
                    "tw-bg-opacity-70 hover:tw-bg-opacity-70") }, { children: [_jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-3 tw-text-lg" }, { children: _jsx(SearchInput, { autoFocus: true, placeholder: "Search name or paste address", onSearchChange: setSearch, style: { height: "48px" } }) })), _jsx("ul", Object.assign({ className: "tw-flex tw-h-full  tw-flex-col tw-flex-nowrap tw-overflow-auto tw-pb-[20px]" }, { children: search.length > 0 ? fuseTokens : baseTokens }))] }))] }));
};
//# sourceMappingURL=AllTokensView.js.map