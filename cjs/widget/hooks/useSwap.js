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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwap = void 0;
const sdk_1 = require("@0xsquid/sdk");
const react_1 = require("react");
const constants_1 = require("../core/constants");
const configService_1 = require("../services/internal/configService");
const useSquidStore_1 = require("../store/useSquidStore");
const useMultiChain_1 = require("./useMultiChain");
const usePrices_1 = require("./usePrices");
const useSquidChains_1 = require("./useSquidChains");
const useSwap = () => {
    var _a, _b, _c, _d;
    const { fromPrice, toPrice, config, squid } = (0, useSquidStore_1.useSquidStore)();
    const { swapRoute } = (0, useSquidStore_1.useSwapRoutePersistStore)();
    const { tokenPrices } = (0, usePrices_1.usePrices)();
    const { chains, supportedDestinationChains, supportedSourceChains } = (0, useSquidChains_1.useSquidChains)();
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
    const fromTokens = (0, configService_1.getTokensForChain)((_a = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _a !== void 0 ? _a : [], fromChainId);
    const fromToken = fromTokens.find((t) => t.address === (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress));
    // Destination
    const toChain = chains.find((c) => c.chainId === (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId));
    const toTokensForChain = (0, configService_1.getTokensForChain)((_b = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _b !== void 0 ? _b : [], toChainId);
    const toToken = toTokensForChain.find((t) => t.address === (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress));
    const toTokens = (0, configService_1.filterTokensForDestination)(toTokensForChain, toChain, fromToken);
    const tokenItems = (0, react_1.useMemo)(() => ({
        from: fromTokens,
        to: toTokens,
    }), [fromTokens, toTokens]);
    const updatedDestinationAddress = swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress;
    const { connectedAddress: destinationUserAddress } = (0, useMultiChain_1.useMultiChain)(toChain, toToken);
    /**
     * Important to have a defined address otherwise the "getRoute" cannot be called
     * TODO: Improve this check readability
     */
    const destinationAddress = (0, react_1.useMemo)(() => {
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
    const fromPriceChanged = (0, react_1.useCallback)((price) => {
        var _a, _b;
        useSquidStore_1.useSquidStore.setState({
            fromPrice: price || undefined,
        });
        if (price !== "" &&
            !!((_a = tokenPrices.data) === null || _a === void 0 ? void 0 : _a.sourceTokenUsdPrice) &&
            !!((_b = tokenPrices.data) === null || _b === void 0 ? void 0 : _b.destinationTokenUsdPrice)) {
            const ratio = tokenPrices.data.sourceTokenUsdPrice /
                tokenPrices.data.destinationTokenUsdPrice;
            useSquidStore_1.useSquidStore.setState({
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
    const handleDestinationAddressOnSwapChange = (0, react_1.useCallback)((fromChainId, fromTokenAddress, toTokenAddress, toChainId) => {
        var _a;
        const fromToken = squid === null || squid === void 0 ? void 0 : squid.tokens.find((t) => t.address === (fromTokenAddress !== null && fromTokenAddress !== void 0 ? fromTokenAddress : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress) &&
            t.chainId === fromChainId);
        const toChain = chains.find((c) => c.chainId === (toChainId !== null && toChainId !== void 0 ? toChainId : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId));
        const destinationTokensFiltered = (0, configService_1.filterTokensForDestination)((0, configService_1.getTokensForChain)((_a = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _a !== void 0 ? _a : [], toChainId !== null && toChainId !== void 0 ? toChainId : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId), toChain, fromToken);
        const defaultToAddress = (0, configService_1.getDefaultTokenAddressForChain)(destinationTokensFiltered, config, toChainId !== null && toChainId !== void 0 ? toChainId : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId);
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
    const onSwapChange = (0, react_1.useCallback)(({ fromChainId, toChainId, fromTokenAddress, toTokenAddress, destinationAddress, }) => __awaiter(void 0, void 0, void 0, function* () {
        var _e;
        const sourceChainId = fromChainId !== null && fromChainId !== void 0 ? fromChainId : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId;
        // Get the default Source Address
        // This can be either the first token or the one set by the user from config
        const defaultFromAddress = (0, configService_1.getDefaultTokenAddressForChain)((_e = squid === null || squid === void 0 ? void 0 : squid.tokens) !== null && _e !== void 0 ? _e : [], config, sourceChainId);
        // Get the destination ChainId based on parameters of swap received
        const destinationChainId = toChainId === constants_1.chainIdResetValue
            ? undefined
            : toChainId !== null && toChainId !== void 0 ? toChainId : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId;
        // Destination Token Address based on parameters of swap received
        // If the user only changed the chain, we need to get the default token address
        // Otherwise, we use the one received
        const sourceTokenAddress = fromChainId && !fromTokenAddress
            ? defaultFromAddress
            : fromTokenAddress !== null && fromTokenAddress !== void 0 ? fromTokenAddress : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress;
        // Destination Token Address based on parameters of swap received
        const destinationWalletAddress = destinationAddress === constants_1.destinationAddressResetValue
            ? undefined
            : destinationAddress !== null && destinationAddress !== void 0 ? destinationAddress : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress;
        // The destination token address is a bit different
        // Some specific filters apply based on source chain & token
        const destinationTokenAddress = handleDestinationAddressOnSwapChange(fromChainId !== null && fromChainId !== void 0 ? fromChainId : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId, sourceTokenAddress, toTokenAddress, toChainId);
        useSquidStore_1.useSwapRoutePersistStore.setState({
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
        const toChainId = (fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType) !== sdk_1.ChainType.Cosmos
            ? swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId
            : chains[0].chainId;
        const fromChainId = (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== sdk_1.ChainType.Cosmos
            ? swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId
            : chains.filter((c) => c.chainId !== toChainId)[0].chainId;
        useSquidStore_1.useSwapRoutePersistStore.setState({
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
    (0, react_1.useEffect)(() => {
        if (chains.length > 0 && !useSquidStore_1.useSwapRoutePersistStore.getState().swapRoute) {
            const defaultFromChainId = (0, configService_1.getFirstAvailableChainId)(undefined, config, "from", supportedSourceChains);
            const defaultToChainId = (0, configService_1.getFirstAvailableChainId)(defaultFromChainId, config, "to", supportedDestinationChains);
            const fromTokenAddress = (0, configService_1.getDefaultTokenAddressForChain)(fromTokens, config, defaultFromChainId);
            const toTokenAddress = (0, configService_1.getDefaultTokenAddressForChain)(toTokens, config, defaultToChainId);
            useSquidStore_1.useSwapRoutePersistStore.setState({
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
exports.useSwap = useSwap;
//# sourceMappingURL=useSwap.js.map