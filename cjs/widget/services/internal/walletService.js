"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVMnetworkNotSupportedErrorCode = exports.metamaskIcon = exports.formatChainsForWagmi = exports.getDescendantProp = exports.redirectExtensionStoreIfNotInstalled = exports.isWalletExtensionInstalled = exports.getCosmosChainInfosObject = exports.getWalletByConnectorID = exports.isWalletAddressValid = exports.formatWalletAddress = void 0;
const sdk_1 = require("@0xsquid/sdk");
const ethers_1 = require("ethers");
const constants_1 = require("../../core/constants");
const formatWalletAddress = (walletAddress, trimLength = 5) => {
    return walletAddress
        ? (walletAddress === null || walletAddress === void 0 ? void 0 : walletAddress.length) > trimLength
            ? `${walletAddress.slice(0, trimLength)}...${walletAddress.slice(walletAddress.length - (trimLength - 2), // -2 here because the start of wallet is 0x
            walletAddress.length)}`.toLowerCase()
            : walletAddress
        : "";
};
exports.formatWalletAddress = formatWalletAddress;
const isWalletAddressValid = (chainData, address) => {
    if (address) {
        if (chainData.chainType === sdk_1.ChainType.EVM) {
            return ethers_1.ethers.utils.isAddress(address);
        }
        if (chainData.chainType === sdk_1.ChainType.Cosmos) {
            // Force cast because we're sure it is of this type based on chainType
            const prefix = chainData.bech32Config
                .bech32PrefixAccAddr;
            // TODO: Come up with a better way to check cosmos address validity
            return address.startsWith(prefix);
        }
    }
    return false;
};
exports.isWalletAddressValid = isWalletAddressValid;
const getWalletByConnectorID = (connectorID) => {
    return constants_1.wallets.find((w) => w.connectorId === connectorID);
};
exports.getWalletByConnectorID = getWalletByConnectorID;
const getCosmosChainInfosObject = (chain) => {
    const cosmosChain = chain;
    return Object.assign(Object.assign({}, cosmosChain), { chainId: cosmosChain.chainId.toString(), rpc: cosmosChain.rpc.split("?chain")[0] });
};
exports.getCosmosChainInfosObject = getCosmosChainInfosObject;
const isWalletExtensionInstalled = (wallet) => {
    if ((wallet.connectorId === "metaMask" && !window.ethereum) ||
        (wallet.connectorId === "keplr" && !window.keplr) ||
        (wallet.connectorId === "leap" && !window.leap) ||
        // Cosmostation has two different connectors for different extensions
        ((wallet.connectorId === "cosmostationCosmos" ||
            wallet.connectorId === "cosmostation") &&
            !window.cosmostation) ||
        (wallet.connectorId === "xdefi" && !window.xfi) ||
        (wallet.connectorId === "bitkeep" && !window.bitkeep)) {
        return false;
    }
    return true;
};
exports.isWalletExtensionInstalled = isWalletExtensionInstalled;
const redirectExtensionStoreIfNotInstalled = (wallet) => {
    const { userAgent } = navigator;
    let link;
    if (!(0, exports.isWalletExtensionInstalled)(wallet)) {
        if (userAgent.indexOf("Firefox") > -1) {
            link = constants_1.walletStoreLinks[wallet.connectorId].firefox;
        }
        else if (userAgent.indexOf("Chrome") > -1) {
            link = constants_1.walletStoreLinks[wallet.connectorId].chrome;
        }
        if (link && link !== "") {
            window === null || window === void 0 ? void 0 : window.open(link, "_blank").focus();
        }
    }
};
exports.redirectExtensionStoreIfNotInstalled = redirectExtensionStoreIfNotInstalled;
/**
 * Get the value of an object property using a string path
 * E.G. window["cosmostation.providers.keplr"]
 * @param obj
 * @param path
 * @returns
 */
const getDescendantProp = (obj, path) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};
exports.getDescendantProp = getDescendantProp;
const formatChainsForWagmi = (chains) => {
    return chains
        .filter((c) => c.chainType === sdk_1.ChainType.EVM)
        .map((c) => ({
        id: +c.chainId,
        name: c.networkName,
        network: c.networkName,
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            },
        },
        nativeCurrency: c.nativeCurrency,
        rpcUrls: { public: { http: [c.rpc] }, default: { http: [c.rpc] } },
    }));
};
exports.formatChainsForWagmi = formatChainsForWagmi;
exports.metamaskIcon = (_a = (0, exports.getWalletByConnectorID)("metaMask")) === null || _a === void 0 ? void 0 : _a.icon;
exports.EVMnetworkNotSupportedErrorCode = 4902;
//# sourceMappingURL=walletService.js.map