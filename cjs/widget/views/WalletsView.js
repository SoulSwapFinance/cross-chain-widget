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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletsView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@0xsquid/sdk");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const ActiveIndicator_1 = require("../components/ActiveIndicator");
const TokensViewHeaderDropdown_1 = require("../components/TokensViewHeaderDropdown");
const WalletListItem_1 = require("../components/WalletListItem");
const HoverButton_1 = require("../components/buttons/HoverButton");
const constants_1 = require("../core/constants");
const useSquidChains_1 = require("../hooks/useSquidChains");
const useSquidRouter_1 = require("../hooks/useSquidRouter");
const useWallet_1 = require("../hooks/useWallet");
const walletService_1 = require("../services/internal/walletService");
const useSquidStore_1 = require("../store/useSquidStore");
const WalletsView = () => {
    var _a, _b;
    const { address: evmAddress, isConnected, connector: activeConnector, } = (0, wagmi_1.useAccount)();
    const { disconnect: disconnectEvm } = (0, wagmi_1.useDisconnect)();
    const { currentRouteParams } = (0, useSquidRouter_1.useSquidRouter)();
    const direction = currentRouteParams === null || currentRouteParams === void 0 ? void 0 : currentRouteParams.direction;
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const { chains } = (0, useSquidChains_1.useSquidChains)();
    const { swapRoute } = (0, useSquidStore_1.useSwapRoutePersistStore)();
    const currentChainId = direction === "from"
        ? swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId
        : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId;
    const currentChain = chains.find((c) => c.chainId === currentChainId);
    const { connectWallet } = (0, useWallet_1.useWallet)(currentChain);
    const filteredWallts = (0, react_1.useMemo)(() => constants_1.wallets.filter((wallet) => (currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType) === wallet.type), [currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType]);
    const walletButtonClicked = (canSwitchWallets, e) => {
        if (canSwitchWallets) {
            changeWallet(e);
        }
        else {
            disconnectEvm();
        }
    };
    const changeWallet = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const provider = yield (activeConnector === null || activeConnector === void 0 ? void 0 : activeConnector.getProvider());
        provider.request({
            method: "wallet_requestPermissions",
            params: [
                {
                    eth_accounts: {},
                },
            ],
        });
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, clsx_1.default)("tw-bg-base-neutral tw-flex tw-h-full tw-w-full tw-flex-1 tw-flex-col tw-overflow-hidden", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && "tw-bg-opacity-70") }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-gap-2 tw-px-5" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-py-[20px] tw-text-base tw-font-semibold" }, { children: "Supported wallets" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: (0, jsx_runtime_1.jsx)(TokensViewHeaderDropdown_1.ChainDropdownButton, { chainData: currentChain, direction: direction }) }))] })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-col tw-gap-6 tw-overflow-auto" }, { children: (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "tw-flex tw-h-full  tw-flex-col tw-flex-nowrap tw-pb-[20px]" }, { children: filteredWallts === null || filteredWallts === void 0 ? void 0 : filteredWallts.map((wallet, index) => walletItem(wallet)) })) }))] })));
    function walletItem(wallet) {
        const hasWindowFlagEvmAndIsConnected = wallet.type === sdk_1.ChainType.EVM &&
            (activeConnector === null || activeConnector === void 0 ? void 0 : activeConnector.name) === wallet.connectorName &&
            isConnected;
        return ((0, jsx_runtime_1.jsx)(WalletListItem_1.WalletListItem, { wallet: wallet, onSelect: () => connectWallet(wallet, true), hoverBtn: (currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType) === sdk_1.ChainType.EVM &&
                hasWindowFlagEvmAndIsConnected && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-group tw-flex tw-items-center" }, { children: (0, jsx_runtime_1.jsx)(HoverButton_1.HoverButtonPrimary, { onClick: (e) => walletButtonClicked(wallet.canSwitchWallets, e), hoverContent: wallet.canSwitchWallets ? ((0, jsx_runtime_1.jsx)("span", { children: "change wallet" })) : ((0, jsx_runtime_1.jsx)("span", { children: "Disconnect" })), content: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-mr-[6px]" }, { children: (0, walletService_1.formatWalletAddress)(evmAddress) })), (0, jsx_runtime_1.jsx)(ActiveIndicator_1.ActiveIndicator, {})] }) }) }))) }, wallet.connectorId));
    }
};
exports.WalletsView = WalletsView;
//# sourceMappingURL=WalletsView.js.map