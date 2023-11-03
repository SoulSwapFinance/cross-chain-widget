import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChainType } from "@0xsquid/sdk";
import clsx from "clsx";
import Fuse from "fuse.js";
import { useEffect, useMemo, useState } from "react";
import { SearchInput } from "../components/SearchInput";
import { TokenListItem } from "../components/TokenListItem";
import { TokensViewHeaderDropdown } from "../components/TokensViewHeaderDropdown";
import { nativeEvmTokenAddress } from "../core/constants";
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation";
import { useSquidChains } from "../hooks/useSquidChains";
import { useSquidRouter } from "../hooks/useSquidRouter";
import { useSwap } from "../hooks/useSwap";
import { useTokensWithBalance } from "../hooks/useTokensWithBalance";
import { filterTokensForDestination } from "../services/internal/configService";
import { useSquidStore } from "../store/useSquidStore";
export const TokensView = () => {
    var _a, _b, _c;
    useKeyboardNavigation();
    const { previousRoute, currentRouteParams } = useSquidRouter();
    const { supportedChains } = useSquidChains();
    const chainId = currentRouteParams === null || currentRouteParams === void 0 ? void 0 : currentRouteParams.chainId;
    const direction = currentRouteParams === null || currentRouteParams === void 0 ? void 0 : currentRouteParams.direction;
    const chainData = (_a = supportedChains.data) === null || _a === void 0 ? void 0 : _a.find((c) => c.chainId == chainId);
    const { onSwapChange, fromToken, toToken, toChain, fromChain } = useSwap();
    const { evmBalances, cosmosBalances, tokens: supportedTokens, } = useTokensWithBalance(chainData, direction);
    const [filteredTokens, setFilteredTokens] = useState([]);
    const { config } = useSquidStore();
    const selectedToken = direction === "from" ? fromToken : toToken;
    const tokens = useMemo(() => {
        var _a, _b, _c;
        if (supportedTokens && ((_a = supportedTokens === null || supportedTokens === void 0 ? void 0 : supportedTokens.length) !== null && _a !== void 0 ? _a : 0) > 0) {
            let defaultTokens = [];
            if (((chainData === null || chainData === void 0 ? void 0 : chainData.chainType) === ChainType.EVM && evmBalances.isSuccess) ||
                ((chainData === null || chainData === void 0 ? void 0 : chainData.chainType) === ChainType.Cosmos && cosmosBalances.isSuccess)) {
                if ((chainData === null || chainData === void 0 ? void 0 : chainData.chainType) === ChainType.EVM) {
                    defaultTokens = (_b = evmBalances.data) !== null && _b !== void 0 ? _b : [];
                }
                else {
                    defaultTokens = (_c = cosmosBalances.data) !== null && _c !== void 0 ? _c : [];
                }
            }
            else {
                // Initialize tokens with zero balance
                // Those balances wont be shown if 0
                defaultTokens = supportedTokens === null || supportedTokens === void 0 ? void 0 : supportedTokens.sort((a, b) => (a.address === nativeEvmTokenAddress ? -1 : 1)).map((st) => {
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
                    : filterTokensForDestination(defaultTokens, toChain, fromToken);
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
    const fuse = new Fuse(tokens !== null && tokens !== void 0 ? tokens : [], {
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
    useEffect(() => {
        var _a;
        if (filteredTokens.length === 0 && tokens && ((_a = tokens === null || tokens === void 0 ? void 0 : tokens.length) !== null && _a !== void 0 ? _a : 0) > 0) {
            setFilteredTokens(tokens);
        }
    }, [tokens, filteredTokens]);
    return (_jsxs("div", Object.assign({ className: clsx("tw-flex tw-h-full tw-flex-1 tw-flex-col tw-overflow-hidden", ((_c = (_b = config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) &&
            "tw-bg-opacity-70 hover:tw-bg-opacity-70") }, { children: [_jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2 tw-p-3 tw-text-lg" }, { children: _jsx(SearchInput, { autoFocus: true, placeholder: "Search name or paste address", onSearchChange: inputChanged, style: { height: "48px", color: "red" } }) })), _jsx(TokensViewHeaderDropdown, { chainData: chainData, direction: direction }), _jsx("ul", Object.assign({ className: "tw-flex tw-h-full  tw-flex-col tw-flex-nowrap tw-overflow-auto tw-pb-[20px]" }, { children: tokens === null || tokens === void 0 ? void 0 : tokens.filter((token) => (filteredTokens === null || filteredTokens === void 0 ? void 0 : filteredTokens.findIndex((t) => t.address === token.address && t.chainId == chainId)) !== -1).map((token, index) => {
                    return (_jsx(TokenListItem, { usdUnitPrice: token.priceUSD, selected: (selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.address) === token.address, isLast: index + 1 === filteredTokens.length, token: token, chain: chainData, onSelect: changeSwap }, `token-${token.address}`));
                }) }))] })));
};
//# sourceMappingURL=TokensView.js.map