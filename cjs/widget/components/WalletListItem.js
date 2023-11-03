"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletListItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@0xsquid/sdk");
const clsx_1 = __importDefault(require("clsx"));
const useSquidChains_1 = require("../hooks/useSquidChains");
const useSquidRouter_1 = require("../hooks/useSquidRouter");
const useSquidStore_1 = require("../store/useSquidStore");
const ListItemAvatar_1 = require("./ListItemAvatar");
const WalletListItem = ({ wallet, onSelect, hoverBtn }) => {
    const { currentRouteParams } = (0, useSquidRouter_1.useSquidRouter)();
    const { swapRoute } = (0, useSquidStore_1.useSwapRoutePersistStore)();
    const { chains } = (0, useSquidChains_1.useSquidChains)();
    const currentChainId = (currentRouteParams === null || currentRouteParams === void 0 ? void 0 : currentRouteParams.direction) === "from"
        ? swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId
        : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId;
    const currentChain = chains.find((c) => c.chainId === currentChainId);
    return ((0, jsx_runtime_1.jsx)(ListItemAvatar_1.ListItemAvatar, Object.assign({ imageUrl: wallet.icon, onSelect: onSelect, className: (0, clsx_1.default)("tw-flex tw-flex-row tw-items-center tw-justify-center tw-border-base-content tw-font-normal tw-text-base-content", (currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType) === sdk_1.ChainType.EVM && "tw-border-[1px]"), roundImage: true, size: "tw-md", gap: "3" }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-gap-2 tw-text-base" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: wallet.name }), hoverBtn] })) }), wallet.connectorId));
};
exports.WalletListItem = WalletListItem;
//# sourceMappingURL=WalletListItem.js.map