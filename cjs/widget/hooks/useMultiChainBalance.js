"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMultiChainBalance = void 0;
const sdk_1 = require("@0xsquid/sdk");
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const CosmosProvider_1 = require("../core/providers/CosmosProvider");
const useBalance_1 = require("./useBalance");
const useSwap_1 = require("./useSwap");
const useMultiChainBalance = (chainToCompare, tokenToCompare, direction) => {
    var _a, _b;
    const { address } = (0, wagmi_1.useAccount)();
    const { destinationAddress } = (0, useSwap_1.useSwap)();
    const { cosmosAddress } = (0, CosmosProvider_1.useCosmosContext)();
    /**
     * Get balance for EVM chain types
     */
    const { balance: evmBalance } = (0, useBalance_1.useBalance)({
        chain: chainToCompare,
        token: tokenToCompare,
        userAddress: (_a = (direction === "to" ? destinationAddress : address)) !== null && _a !== void 0 ? _a : "",
        enabled: (chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) === sdk_1.ChainType.EVM,
    });
    /**
     * Get balance for Cosmos chain types
     */
    const { balance: cosmosBalance } = (0, useBalance_1.useCosmosBalance)({
        chainData: chainToCompare,
        token: tokenToCompare,
        userAddress: (_b = (direction === "to" ? destinationAddress : cosmosAddress)) !== null && _b !== void 0 ? _b : "",
        enabled: (chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) === sdk_1.ChainType.Cosmos,
    });
    /**
     * Get either EVM or cosmos Balance
     */
    const balance = (0, react_1.useMemo)(() => (chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) === sdk_1.ChainType.EVM
        ? evmBalance.data
        : cosmosBalance.data, [evmBalance.data, chainToCompare, cosmosBalance.data]);
    return { balance };
};
exports.useMultiChainBalance = useMultiChainBalance;
//# sourceMappingURL=useMultiChainBalance.js.map