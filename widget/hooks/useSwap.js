var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ChainType } from "@0xsquid/sdk";
import { useCallback, useEffect, useMemo } from "react";
import { chainIdResetValue, destinationAddressResetValue, } from "../core/constants";
import { filterTokensForDestination, getDefaultTokenAddressForChain, getFirstAvailableChainId, getTokensForChain, } from "../services/internal/configService";
import { useSquidStore, useSwapRoutePersistStore, } from "../store/useSquidStore";
import { useMultiChain } from "./useMultiChain";
import { usePrices } from "./usePrices";
import { useSquidChains } from "./useSquidChains";
export const useSwap = () => {
    var _a, _b, _c, _d;
    const { fromPrice, toPrice, config, squid } = useSquidStore();
    const { swapRoute } = useSwapRoutePersistStore();
    const { tokenPrices } = usePrices();
    const { chains, supportedDestinationChains, supportedSourceChains } = useSquidChains();
    // chain ID will use the swapRoute one (the user choice)
    // Or the config one (if defined)
    const fromChainId = (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId) ||
        (chains.find((c) => c.chainId === config.initialFromChainId) &&
            config.initialFromChainId);
    const toChainId = (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId) ||
        (chains.find((c) => c.chainId === config.initialToChainId) &&
            config.initialToChainId);
    // Source
    const fromChain = chains.find((c) => c.chainId === (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId));
    const fromTokens = getTokensForChain((_a = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _a !== void 0 ? _a : [], fromChainId);
    const fromToken = fromTokens.find((t) => t.address === (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress));
    // Destination
    const toChain = chains.find((c) => c.chainId === (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId));
    const toTokensForChain = getTokensForChain((_b = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _b !== void 0 ? _b : [], toChainId);
    const toToken = toTokensForChain.find((t) => t.address === (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress));
    const toTokens = filterTokensForDestination(toTokensForChain, toChain, fromToken);
    const tokenItems = useMemo(() => ({
        from: fromTokens,
        to: toTokens,
    }), [fromTokens, toTokens]);
    const updatedDestinationAddress = swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress;
    const { connectedAddress: destinationUserAddress } = useMultiChain(toChain, toToken);
    /**
     * Important to have a defined address otherwise the "getRoute" cannot be called
     * TODO: Improve this check readability
     */
    const destinationAddress = useMemo(() => {
        if (updatedDestinationAddress)
            return updatedDestinationAddress;
        if (destinationUserAddress)
            return destinationUserAddress;
        return undefined;
    }, [destinationUserAddress, updatedDestinationAddress]);
    /**
     * When user changes the price of the source token,
     * This will update the destination token price
     * @param price: string
     */
    const fromPriceChanged = useCallback((price) => {
        var _a, _b;
        useSquidStore.setState({
            fromPrice: price || undefined,
        });
        if (price !== "" &&
            !!((_a = tokenPrices.data) === null || _a === void 0 ? void 0 : _a.sourceTokenUsdPrice) &&
            !!((_b = tokenPrices.data) === null || _b === void 0 ? void 0 : _b.destinationTokenUsdPrice)) {
            const ratio = tokenPrices.data.sourceTokenUsdPrice /
                tokenPrices.data.destinationTokenUsdPrice;
            useSquidStore.setState({
                toPrice: +price * ratio,
            });
        }
    }, [
        (_c = tokenPrices.data) === null || _c === void 0 ? void 0 : _c.destinationTokenUsdPrice,
        (_d = tokenPrices.data) === null || _d === void 0 ? void 0 : _d.sourceTokenUsdPrice,
    ]);
    /**
     * Destination token address has different logic
     * Some tokens are not available based on the source chain/token
     * TODO: This could need a refactor
     */
    const handleDestinationAddressOnSwapChange = useCallback((fromChainId, fromTokenAddress, toTokenAddress, toChainId) => {
        var _a;
        const fromToken = squid === null || squid === void 0 ? void 0 : squid.tokens.find((t) => t.address === (fromTokenAddress !== null && fromTokenAddress !== void 0 ? fromTokenAddress : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress) &&
            t.chainId === fromChainId);
        const toChain = chains.find((c) => c.chainId === (toChainId !== null && toChainId !== void 0 ? toChainId : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId));
        const destinationTokensFiltered = filterTokensForDestination(getTokensForChain((_a = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _a !== void 0 ? _a : [], toChainId !== null && toChainId !== void 0 ? toChainId : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId), toChain, fromToken);
        const defaultToAddress = getDefaultTokenAddressForChain(destinationTokensFiltered, config, toChainId !== null && toChainId !== void 0 ? toChainId : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId);
        let destinationTokenAddress = toChainId && !toTokenAddress
            ? defaultToAddress
            : toTokenAddress !== null && toTokenAddress !== void 0 ? toTokenAddress : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress;
        // Re assign destination token address if it's not available
        if (destinationTokensFiltered.find((t) => t.address === destinationTokenAddress) === undefined) {
            destinationTokenAddress = defaultToAddress;
        }
        return destinationTokenAddress;
    }, [
        config,
        fromTokens,
        squid === null || squid === void 0 ? void 0 : squid.tokens,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress,
        toChain,
    ]);
    /**
     * When user changes chains from dropdown
     * @param
     */
    const onSwapChange = useCallback(({ fromChainId, toChainId, fromTokenAddress, toTokenAddress, destinationAddress, }) => __awaiter(void 0, void 0, void 0, function* () {
        var _e;
        const sourceChainId = fromChainId !== null && fromChainId !== void 0 ? fromChainId : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId;
        // Get the default Source Address
        // This can be either the first token or the one set by the user from config
        const defaultFromAddress = getDefaultTokenAddressForChain((_e = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _e !== void 0 ? _e : [], config, sourceChainId);
        // Get the destination ChainId based on parameters of swap received
        const destinationChainId = toChainId === chainIdResetValue
            ? undefined
            : toChainId !== null && toChainId !== void 0 ? toChainId : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId;
        // Destination Token Address based on parameters of swap received
        // If the user only changed the chain, we need to get the default token address
        // Otherwise, we use the one received
        const sourceTokenAddress = fromChainId && !fromTokenAddress
            ? defaultFromAddress
            : fromTokenAddress !== null && fromTokenAddress !== void 0 ? fromTokenAddress : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress;
        // Destination Token Address based on parameters of swap received
        const destinationWalletAddress = destinationAddress === destinationAddressResetValue
            ? undefined
            : destinationAddress !== null && destinationAddress !== void 0 ? destinationAddress : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress;
        // The destination token address is a bit different
        // Some specific filters apply based on source chain & token
        const destinationTokenAddress = handleDestinationAddressOnSwapChange(fromChainId !== null && fromChainId !== void 0 ? fromChainId : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId, sourceTokenAddress, toTokenAddress, toChainId);
        useSwapRoutePersistStore.setState({
            swapRoute: {
                fromChainId: sourceChainId,
                toChainId: destinationChainId,
                fromTokenAddress: sourceTokenAddress,
                toTokenAddress: destinationTokenAddress,
                destinationAddress: destinationWalletAddress,
            },
        });
    }), [
        squid === null || squid === void 0 ? void 0 : squid.tokens,
        config,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress,
        handleDestinationAddressOnSwapChange,
    ]);
    /**
     * Inverting selected prices, chains & tokens
     */
    const invertSwaps = () => {
        const toChainId = (fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType) !== ChainType.Cosmos
            ? swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId
            : chains[0].chainId;
        const fromChainId = (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos
            ? swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId
            : chains.filter((c) => c.chainId !== toChainId)[0].chainId;
        useSwapRoutePersistStore.setState({
            swapRoute: {
                fromChainId,
                toChainId,
                fromTokenAddress: (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress) || tokenItems.to[0].address,
                toTokenAddress: (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress) || tokenItems.from[0].address,
            },
        });
    };
    /**
     * Init default chain ids and default token addresses
     * From the first item of sdk arrays
     */
    useEffect(() => {
        if (chains.length > 0 && !useSwapRoutePersistStore.getState().swapRoute) {
            const defaultFromChainId = getFirstAvailableChainId(undefined, config, "from", supportedSourceChains);
            const defaultToChainId = getFirstAvailableChainId(defaultFromChainId, config, "to", supportedDestinationChains);
            const fromTokenAddress = getDefaultTokenAddressForChain(fromTokens, config, defaultFromChainId);
            const toTokenAddress = getDefaultTokenAddressForChain(toTokens, config, defaultToChainId);
            useSwapRoutePersistStore.setState({
                swapRoute: {
                    fromChainId: defaultFromChainId,
                    toChainId: defaultToChainId,
                    fromTokenAddress,
                    toTokenAddress,
                    destinationAddress: undefined,
                },
            });
        }
    }, [
        config,
        fromTokens,
        supportedDestinationChains,
        supportedSourceChains,
        toTokens,
    ]);
    return {
        tokenItems,
        onSwapChange,
        invertSwaps,
        fromPrice,
        toPrice,
        fromPriceChanged,
        toToken,
        fromToken,
        fromChain,
        toChain,
        destinationAddress,
    };
};
//# sourceMappingURL=useSwap.js.map