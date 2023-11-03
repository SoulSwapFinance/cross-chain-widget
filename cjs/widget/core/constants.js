"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletStoreLinks = exports.axelarEndStatuses = exports.axelarSuccessStatuses = exports.wallets = exports.PriorityConnectors = exports.defaultValues = exports.squidTheme = exports.widgetHeaderSize = exports.subTransparentClass = exports.transparentClass = exports.gasRefundMultiplier = exports.widgetWidth = exports.widgetHeight = exports.destinationAddressResetValue = exports.chainIdResetValue = exports.defaultSlippage = exports.limitTradeSizeUsd = exports.maxPriceImpact = exports.nativeEvmTokenAddress = void 0;
const sdk_1 = require("@0xsquid/sdk");
const coinbaseWallet_1 = require("@wagmi/connectors/coinbaseWallet");
const injected_1 = require("@wagmi/connectors/injected");
const metaMask_1 = require("@wagmi/connectors/metaMask");
const walletConnect_1 = require("@wagmi/connectors/walletConnect");
const wallets_1 = require("../assets/images/icons/wallets");
const externalLinks_1 = require("./externalLinks");
const wallet_1 = require("./types/wallet");
exports.nativeEvmTokenAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
exports.maxPriceImpact = 30;
exports.limitTradeSizeUsd = 10000000;
exports.defaultSlippage = 1.5;
exports.chainIdResetValue = -1;
exports.destinationAddressResetValue = "null";
exports.widgetHeight = 684;
exports.widgetWidth = 440;
exports.gasRefundMultiplier = 25;
exports.transparentClass = "tw-bg-opacity-80";
exports.subTransparentClass = "tw-bg-opacity-50";
exports.widgetHeaderSize = {
    height: 60,
    paddingY: 16,
};
exports.squidTheme = {
    neutralContent: "#747379",
    baseContent: "#2E2C33",
    base100: "#F5F5F7",
    base200: "#F2F2F2",
    base300: "#DADADA",
    error: "#ED6A5E",
    warning: "#FFB155",
    success: "#2EAEB0",
    primary: "#2E2C33",
    secondary: "#070707",
    secondaryContent: "#FFFFFF",
    neutral: "#FFFFFF",
    roundedBtn: "999px",
    roundedCornerBtn: "999px",
    roundedBox: "1rem",
    roundedDropDown: "999px",
};
exports.defaultValues = {
    config: {
        integratorId: "squid-swap-widget",
        companyName: "Squid",
        style: exports.squidTheme,
        slippage: exports.defaultSlippage,
        infiniteApproval: false,
        enableExpress: true,
        apiUrl: externalLinks_1.squidApiBaseUrl,
        mainLogoUrl: undefined,
        comingSoonChainIds: ["cosmoshub-4", "injective-1", "kichain-2"],
        titles: {
            swap: "Swap",
            settings: "Settings",
            wallets: "Wallets",
            tokens: "Select Token",
            chains: "Select Chain",
            history: "History",
            transaction: "Transaction",
            allTokens: "Select Token",
            destination: "Destination address",
        },
        priceImpactWarnings: {
            warning: 3,
            critical: 5,
        },
    },
};
var PriorityConnectors;
(function (PriorityConnectors) {
    PriorityConnectors["Safe"] = "safe";
    PriorityConnectors["LedgerLive"] = "ledgerLive";
})(PriorityConnectors = exports.PriorityConnectors || (exports.PriorityConnectors = {}));
exports.wallets = [
    {
        name: "SoulWallet",
        type: sdk_1.ChainType.EVM,
        connectorId: "soulwallet",
        connectorName: "SoulWallet",
        windowFlag: wallet_1.WindowWalletFlag.SoulWallet,
        connector: (chains) => new injected_1.InjectedConnector({
            chains,
        }),
        // connector: (chains) => new injected_1.InjectedConnector({
        //     chains,
        //     options: {
        //         name: "SoulWallet",
        //         shimDisconnect: true,
        //         getProvider: () => typeof window !== "undefined" &&
        //             (window === null || window === void 0 ? void 0 : window.ethereum) &&
        //             (window === null || window === void 0 ? void 0 : window.ethereum.isSoulWallet)
        //             ? window === null || window === void 0 ? void 0 : window.ethereum
        //             : undefined,
        //     },
        // }),
        icon: wallets_1.walletIcons.soul,
        canSwitchWallets: false,
    },
    {
        name: "XDEFI Wallet",
        type: sdk_1.ChainType.EVM,
        connectorId: "xdefi",
        connectorName: "XDefi",
        windowFlag: wallet_1.WindowWalletFlag.Xdefi,
        connector: (chains) => new injected_1.InjectedConnector({
            chains,
            options: {
                name: "XDefi",
                shimDisconnect: true,
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.xfi) &&
                    (window === null || window === void 0 ? void 0 : window.xfi.ethereum)
                    ? window === null || window === void 0 ? void 0 : window.xfi.ethereum
                    : undefined,
            },
        }),
        icon: wallets_1.walletIcons.xdefi,
        canSwitchWallets: false,
    },
    {
        name: "Metamask",
        type: sdk_1.ChainType.EVM,
        connectorId: "metaMask",
        connectorName: "MetaMask",
        connector: (chains) => new metaMask_1.MetaMaskConnector({ chains }),
        icon: wallets_1.walletIcons.metamask,
        windowFlag: wallet_1.WindowWalletFlag.MetaMask,
        canSwitchWallets: true,
    },
    {
        name: "Coinbase Wallet",
        type: sdk_1.ChainType.EVM,
        connectorId: "coinbaseWallet",
        connectorName: "Coinbase Wallet",
        windowFlag: wallet_1.WindowWalletFlag.Coinbase,
        connector: (chains) => new coinbaseWallet_1.CoinbaseWalletConnector({
            chains,
            options: { appName: "Coinbase" },
        }),
        icon: wallets_1.walletIcons.coinbase,
        canSwitchWallets: false,
    },
    {
        name: "Trust Wallet",
        type: sdk_1.ChainType.EVM,
        connectorId: "trustwallet",
        connectorName: "Trust Wallet",
        windowFlag: wallet_1.WindowWalletFlag.TrustWallet,
        connector: (chains) => new injected_1.InjectedConnector({
            chains,
            options: {
                name: "Trust Wallet",
                shimDisconnect: true,
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.trustwallet) &&
                    (window === null || window === void 0 ? void 0 : window.trustwallet)
                    ? window === null || window === void 0 ? void 0 : window.trustwallet
                    : undefined,
            },
        }),
        icon: wallets_1.walletIcons.trustwallet,
        canSwitchWallets: false,
    },
    {
        name: "Rabby",
        type: sdk_1.ChainType.EVM,
        connectorId: "rabby",
        connectorName: "Rabby",
        windowFlag: wallet_1.WindowWalletFlag.Rabby,
        connector: (chains) => new injected_1.InjectedConnector({
            chains,
            options: {
                name: "Rabby",
                shimDisconnect: true,
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.ethereum) &&
                    (window === null || window === void 0 ? void 0 : window.ethereum.isRabby)
                    ? window === null || window === void 0 ? void 0 : window.ethereum
                    : undefined,
            },
        }),
        icon: wallets_1.walletIcons.rabby,
        canSwitchWallets: false,
    },
    {
        name: "Injected",
        type: sdk_1.ChainType.EVM,
        connectorId: "injected",
        connectorName: "Injected",
        windowFlag: wallet_1.WindowWalletFlag.Injected,
        connector: (chains) => new injected_1.InjectedConnector({
            chains,
        }),
        icon: wallets_1.walletIcons.injected,
        canSwitchWallets: false,
    },
    {
        name: "Zerion",
        type: sdk_1.ChainType.EVM,
        connectorId: "zerion",
        connectorName: "Zerion",
        windowFlag: wallet_1.WindowWalletFlag.Zerion,
        connector: (chains) => new injected_1.InjectedConnector({
            chains,
            options: {
                name: "Zerion",
                shimDisconnect: true,
                getProvider: () => {
                    var _a;
                    return typeof window !== "undefined" &&
                        (window === null || window === void 0 ? void 0 : window.ethereum) &&
                        ((_a = window === null || window === void 0 ? void 0 : window.ethereum) === null || _a === void 0 ? void 0 : _a.isZerion)
                        ? window === null || window === void 0 ? void 0 : window.zerionWallet
                        : undefined;
                },
            },
        }),
        icon: wallets_1.walletIcons.zerion,
        canSwitchWallets: false,
    },
    {
        name: "WalletConnect",
        type: sdk_1.ChainType.EVM,
        connectorId: "walletConnect",
        connectorName: "WalletConnect",
        windowFlag: wallet_1.WindowWalletFlag.WalletConnect,
        connector: (chains) => new walletConnect_1.WalletConnectConnector({
            chains,
            options: {
                showQrModal: true,
                projectId: "db6a4f6ff58e4172b2fd52f01360bc49",
            },
        }),
        icon: wallets_1.walletIcons.walletConnect,
        canSwitchWallets: false,
    },
    {
        name: "Cosmostation",
        type: sdk_1.ChainType.EVM,
        connectorId: "cosmostation",
        connectorName: "Cosmostation",
        windowFlag: wallet_1.WindowWalletFlag.CosmostationEVM,
        connector: (chains) => new injected_1.InjectedConnector({
            chains,
            options: {
                name: "Cosmostation",
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.cosmostation)
                    ? window === null || window === void 0 ? void 0 : window.cosmostation.ethereum
                    : undefined,
            },
        }),
        icon: wallets_1.walletIcons.cosmostation,
        canSwitchWallets: false,
    },
    {
        name: "BitKeep",
        type: sdk_1.ChainType.EVM,
        connectorId: "bitkeep",
        connectorName: "BitKeep",
        windowFlag: wallet_1.WindowWalletFlag.Bitkeep,
        connector: (chains) => new injected_1.InjectedConnector({
            chains,
            options: {
                name: "BitKeep",
                shimDisconnect: true,
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.bitkeep) &&
                    (window === null || window === void 0 ? void 0 : window.bitkeep.ethereum)
                    ? window === null || window === void 0 ? void 0 : window.bitkeep.ethereum
                    : undefined,
            },
        }),
        icon: wallets_1.walletIcons.bitkeep,
        canSwitchWallets: false,
    },
    {
        name: "OKX Wallet",
        type: sdk_1.ChainType.EVM,
        connectorId: "okx",
        connectorName: "okx",
        windowFlag: wallet_1.WindowWalletFlag.OKX,
        connector: (chains) => new injected_1.InjectedConnector({
            chains,
            options: {
                name: "OKX",
                shimDisconnect: true,
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.ethereum) &&
                    (window === null || window === void 0 ? void 0 : window.okxwallet)
                    ? window === null || window === void 0 ? void 0 : window.okxwallet
                    : undefined,
            },
        }),
        icon: wallets_1.walletIcons.okx,
        canSwitchWallets: false,
    },
    {
        name: "Coin98",
        type: sdk_1.ChainType.EVM,
        connectorId: "coin98",
        connectorName: "Coin98",
        windowFlag: wallet_1.WindowWalletFlag.Coin98,
        connector: (chains) => new injected_1.InjectedConnector({
            chains,
            options: {
                name: "Coin98",
                shimDisconnect: true,
                getProvider: () => typeof window !== "undefined" && (window === null || window === void 0 ? void 0 : window.coin98)
                    ? window === null || window === void 0 ? void 0 : window.coin98.provider
                    : undefined,
            },
        }),
        icon: wallets_1.walletIcons.coin98,
        canSwitchWallets: false,
    },
    {
        name: "Keplr",
        type: sdk_1.ChainType.Cosmos,
        windowFlag: wallet_1.WindowWalletFlag.Keplr,
        icon: wallets_1.walletIcons.keplr,
        canSwitchWallets: false,
        connectorId: "keplr",
        connectorName: "Keplr",
    },
    {
        name: "Leap",
        type: sdk_1.ChainType.Cosmos,
        windowFlag: wallet_1.WindowWalletFlag.Leap,
        icon: wallets_1.walletIcons.leap,
        canSwitchWallets: false,
        connectorId: "leap",
        connectorName: "Leap",
    },
    {
        name: "Cosmostation",
        type: sdk_1.ChainType.Cosmos,
        connectorId: "cosmostationCosmos",
        connectorName: "Cosmostation Cosmos",
        windowFlag: wallet_1.WindowWalletFlag.CosmostationCosmos,
        connector: (chains) => new injected_1.InjectedConnector({
            chains,
            options: {
                name: "Cosmostation",
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.cosmostation)
                    ? window === null || window === void 0 ? void 0 : window.cosmostation.ethereum
                    : undefined,
            },
        }),
        icon: wallets_1.walletIcons.cosmostation,
        canSwitchWallets: false,
    },
    {
        name: "Fetch.ai",
        type: sdk_1.ChainType.Cosmos,
        connectorId: "fetchai",
        connectorName: "Fetch.ai",
        windowFlag: wallet_1.WindowWalletFlag.FetchAi,
        icon: wallets_1.walletIcons.fetchai,
        canSwitchWallets: false,
    },
];
exports.axelarSuccessStatuses = [
    "destination_executed",
    "executed",
    "express_executed",
];
exports.axelarEndStatuses = [
    ...exports.axelarSuccessStatuses,
    "error_fetching_status",
    "error",
];
exports.walletStoreLinks = {
    leap: {
        chrome: "https://chrome.google.com/webstore/detail/leap-cosmos-wallet/fcfcfllfndlomdhbehjjcoimbgofdncg",
        firefox: "",
    },
    keplr: {
        chrome: "https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap",
        firefox: "https://addons.mozilla.org/en-US/firefox/addon/keplr/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search",
    },
    metaMask: {
        chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
        firefox: "https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search",
    },
    walletConnect: {
        chrome: "https://chrome.google.com/webstore/detail/walletconnect-extension/omaakakjkplhggaabmbmcbmipdiboenn",
        firefox: "",
    },
    coinbaseWallet: {
        chrome: "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
        firefox: "",
    },
    cosmostation: {
        chrome: "https://chrome.google.com/webstore/detail/cosmostation-wallet/fpkhgmpbidmiogeglndfbkegfdlnajnf",
        firefox: "",
    },
    cosmostationCosmos: {
        chrome: "https://chrome.google.com/webstore/detail/cosmostation-wallet/fpkhgmpbidmiogeglndfbkegfdlnajnf",
        firefox: "",
    },
    xdefi: {
        chrome: "https://chrome.google.com/webstore/detail/xdefi-wallet/hmeobnfnfcmdkdcmlblgagmfpfboieaf",
        firefox: "",
    },
    bitkeep: {
        chrome: "https://chrome.google.com/webstore/detail/bitkeep-crypto-nft-wallet/jiidiaalihmmhddjgbnbgdfflelocpak",
        firefox: "",
    },
    trustwallet: {
        chrome: "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph",
        firefox: "",
    },
    fetchai: {
        chrome: "https://chrome.google.com/webstore/detail/fetch-wallet/ellkdbaphhldpeajbepobaecooaoafpg",
        firefox: "",
    },
    coin98: {
        chrome: "https://chrome.google.com/webstore/detail/coin98-wallet/aeachknmefphepccionboohckonoeemg",
        firefox: "",
    },
    soulwallet: {
        chrome: "",
        firefox: "",
    },
    rabby: {
        chrome: "https://chrome.google.com/webstore/detail/rabby-wallet/acmacodkjbdgmoleebolmdjonilkdbch",
        firefox: "",
    },
    okx: {
        chrome: "https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge",
        firefox: "",
    },
    injected: {
        chrome: "",
        firefox: "",
    },
    zerion: {
        chrome: "https://chrome.google.com/webstore/detail/zerion-wallet-for-web3-nf/klghhnkeealcohjjanjjdaeeggmfmlpl",
        firefox: "",
    },
};
//# sourceMappingURL=constants.js.map