"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterTokensForDestination = exports.getDefaultTokenAddressForChain = exports.getFirstAvailableChainId = exports.getTokensForChain = exports.randomIntFromInterval = exports.getConfigWithDefaults = void 0;
const lodash_1 = require("lodash");
const constants_1 = require("../../core/constants");
const getConfigWithDefaults = (config) => {
    return {
        integratorId: (0, lodash_1.get)(config, "integratorId", constants_1.defaultValues.config.integratorId),
        companyName: (0, lodash_1.get)(config, "companyName", constants_1.defaultValues.config.companyName),
        slippage: (0, lodash_1.get)(config, "slippage", constants_1.defaultValues.config.slippage),
        style: (0, lodash_1.get)(config, "style", constants_1.defaultValues.config.style),
        titles: (0, lodash_1.get)(config, "titles", constants_1.defaultValues.config.titles),
        advanced: (0, lodash_1.get)(config, "advanced", constants_1.defaultValues.config.advanced),
        internalSameChainSwapAllowed: (0, lodash_1.get)(config, "internalSameChainSwapAllowed", constants_1.defaultValues.config.internalSameChainSwapAllowed),
        hideAnimations: (0, lodash_1.get)(config, "hideAnimations", constants_1.defaultValues.config.hideAnimations),
        infiniteApproval: (0, lodash_1.get)(config, "infiniteApproval", constants_1.defaultValues.config.infiniteApproval),
        enableExpress: (0, lodash_1.get)(config, "enableExpress", constants_1.defaultValues.config.enableExpress),
        enableGetGasOnDestination: (0, lodash_1.get)(config, "enableGetGasOnDestination", constants_1.defaultValues.config.enableGetGasOnDestination),
        apiUrl: (0, lodash_1.get)(config, "apiUrl", constants_1.defaultValues.config.apiUrl),
        priceImpactWarnings: (0, lodash_1.get)(config, "priceImpactWarnings", constants_1.defaultValues.config.priceImpactWarnings),
        initialFromChainId: (0, lodash_1.get)(config, "initialFromChainId", constants_1.defaultValues.config.initialFromChainId),
        initialToChainId: (0, lodash_1.get)(config, "initialToChainId", constants_1.defaultValues.config.initialToChainId),
        defaultTokens: (0, lodash_1.get)(config, "defaultTokens", constants_1.defaultValues.config.defaultTokens),
        mainLogoUrl: (0, lodash_1.get)(config, "mainLogoUrl", constants_1.defaultValues.config.mainLogoUrl),
        loadPreviousStateFromLocalStorage: (0, lodash_1.get)(config, "loadPreviousStateFromLocalStorage", constants_1.defaultValues.config.loadPreviousStateFromLocalStorage),
        preferDex: (0, lodash_1.get)(config, "preferDex", constants_1.defaultValues.config.preferDex),
        favTokens: (0, lodash_1.get)(config, "favTokens", constants_1.defaultValues.config.favTokens),
        comingSoonChainIds: (0, lodash_1.get)(config, "comingSoonChainIds", constants_1.defaultValues.config.comingSoonChainIds),
        availableChains: (0, lodash_1.get)(config, "availableChains", constants_1.defaultValues.config.availableChains),
    };
};
exports.getConfigWithDefaults = getConfigWithDefaults;
const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.randomIntFromInterval = randomIntFromInterval;
const getTokensForChain = (tokens, chainId) => {
    return chainId ? tokens.filter((t) => t.chainId === chainId) : tokens;
};
exports.getTokensForChain = getTokensForChain;
const getFirstAvailableChainId = (usedChain, config, direction, chains = []) => {
    const filteredChains = chains.filter((c) => {
        var _a;
        return c.chainId !== usedChain &&
            !((_a = config.comingSoonChainIds) === null || _a === void 0 ? void 0 : _a.find((id) => id === c.chainId));
    });
    if (direction === "from" &&
        config.initialFromChainId &&
        config.initialFromChainId !== usedChain) {
        return config.initialFromChainId;
    }
    if (direction === "to" &&
        config.initialToChainId &&
        config.initialToChainId !== usedChain) {
        return config.initialToChainId;
    }
    return filteredChains.length > 0 ? filteredChains[0].chainId : undefined;
};
exports.getFirstAvailableChainId = getFirstAvailableChainId;
const getDefaultTokenAddressForChain = (tokens, config, chainId) => {
    var _a;
    const chainIdDefaultToken = (_a = config.defaultTokens) === null || _a === void 0 ? void 0 : _a.find((token) => token.chainId == chainId);
    if (chainIdDefaultToken) {
        return chainIdDefaultToken.address;
    }
    const filteredTokens = chainId
        ? tokens.filter((t) => t.chainId === chainId)
        : tokens;
    return filteredTokens.length > 0 ? filteredTokens[0].address : undefined;
};
exports.getDefaultTokenAddressForChain = getDefaultTokenAddressForChain;
/**
 * Filter tokens for destination chain
 *
 * Case 1: fromToken.bridgeOnly = true
 * Destination token list shows only tokens with the same commonKey as fromToken
 *
 * Case 2: fromToken.bridgeOnly = false
 * Destination token list shows all tokens with bridgeOnly = false
 * OR Destination token list shows all tokens with the same commonKey as fromToken
 * @param tokens
 * @param selectedDestinationChain
 * @param selectedSourceChainID
 * @param selectedSourceToken
 * @returns
 */
const filterTokensForDestination = (tokens, selectedDestinationChain, selectedSourceToken) => {
    if (selectedSourceToken === null || selectedSourceToken === void 0 ? void 0 : selectedSourceToken.bridgeOnly) {
        return tokens.filter((t) => t.commonKey === selectedSourceToken.commonKey &&
            t.chainId === (selectedDestinationChain === null || selectedDestinationChain === void 0 ? void 0 : selectedDestinationChain.chainId));
    }
    return tokens.filter((t) => !t.bridgeOnly || t.commonKey === (selectedSourceToken === null || selectedSourceToken === void 0 ? void 0 : selectedSourceToken.commonKey));
};
exports.filterTokensForDestination = filterTokensForDestination;
//# sourceMappingURL=configService.js.map