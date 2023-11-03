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
exports.DestinationAddressView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@0xsquid/sdk");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const ActiveIndicator_1 = require("../components/ActiveIndicator");
const GoBack_1 = require("../components/GoBack");
const TokensViewHeaderDropdown_1 = require("../components/TokensViewHeaderDropdown");
const WalletListItem_1 = require("../components/WalletListItem");
const HoverButton_1 = require("../components/buttons/HoverButton");
const constants_1 = require("../core/constants");
const CosmosProvider_1 = require("../core/providers/CosmosProvider");
const useCosmos_1 = require("../hooks/useCosmos");
const useGnosisContext_1 = require("../hooks/useGnosisContext");
const useIntegratorContext_1 = require("../hooks/useIntegratorContext");
const useSquidChains_1 = require("../hooks/useSquidChains");
const useSquidRouter_1 = require("../hooks/useSquidRouter");
const useSwap_1 = require("../hooks/useSwap");
const useWallet_1 = require("../hooks/useWallet");
const walletService_1 = require("../services/internal/walletService");
const useSquidStore_1 = require("../store/useSquidStore");
const DestinationAddressView = () => {
    var _a, _b;
    const { currentRouteParams } = (0, useSquidRouter_1.useSquidRouter)();
    const direction = currentRouteParams === null || currentRouteParams === void 0 ? void 0 : currentRouteParams.direction;
    const { onSwapChange, toChain } = (0, useSwap_1.useSwap)();
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const { chains } = (0, useSquidChains_1.useSquidChains)();
    const { swapRoute, destinationAddressHasBeenUpdated } = (0, useSquidStore_1.useSwapRoutePersistStore)();
    const { isGnosisContext, isSameAddressAndGnosisContext } = (0, useGnosisContext_1.useGnosisContext)();
    const [isUpdatedAddressValid, setIsUpdatedAddressValid] = (0, react_1.useState)(undefined);
    const { cosmosAddress, isConnected: cosmosConnected, cosmosConnectedWallet, } = (0, CosmosProvider_1.useCosmosContext)();
    const { address: evmAddress, isConnected: evmConnected, connector: activeConnector, } = (0, wagmi_1.useAccount)();
    const currentChainId = direction === "from"
        ? swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId
        : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId;
    const currentChain = chains.find((c) => c.chainId === currentChainId);
    const { connectWallet } = (0, useWallet_1.useWallet)(currentChain);
    const currentType = currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType;
    const filteredWallts = (0, react_1.useMemo)(() => constants_1.wallets.filter((wallet) => currentType === wallet.type), [currentType]);
    const { getCosmosWalletInfos } = (0, useCosmos_1.useCosmos)();
    const { widgetInIframe, walletHandledExternally } = (0, useIntegratorContext_1.useIntegratorContext)();
    const [currentTab, setCurrentTab] = (0, react_1.useState)(0);
    const connectedAddress = currentType === sdk_1.ChainType.EVM ? evmAddress : cosmosAddress;
    const isConnected = currentType === sdk_1.ChainType.EVM ? evmConnected : cosmosConnected;
    const [autofillInputValue, setAutofillInputValue] = (0, react_1.useState)();
    const updateAutoFillInputValue = (value, filledFromWallet) => {
        setAutofillInputValue(value);
        // Check validity
        if (currentChain) {
            const valid = (0, walletService_1.isWalletAddressValid)(currentChain, value);
            setIsUpdatedAddressValid(valid);
            if (valid) {
                onDestinationAddressChange === null || onDestinationAddressChange === void 0 ? void 0 : onDestinationAddressChange(value, filledFromWallet);
            }
        }
    };
    const onDestinationAddressChange = (address, filledFromWallet) => {
        onSwapChange({ destinationAddress: address });
        useSquidStore_1.useSwapRoutePersistStore.setState({
            destinationAddressHasBeenUpdated: {
                updated: true,
                filledFromWallet,
            },
        });
    };
    const autoFill = () => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        if ((currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType) === sdk_1.ChainType.Cosmos) {
            const result = yield getCosmosWalletInfos.mutateAsync({
                chainId: currentChain.chainId.toString(),
            });
            updateAutoFillInputValue((_c = result !== null && result !== void 0 ? result : connectedAddress) !== null && _c !== void 0 ? _c : "", true);
        }
        else {
            updateAutoFillInputValue(connectedAddress !== null && connectedAddress !== void 0 ? connectedAddress : "", true);
        }
    });
    const pasteFromClipboard = () => __awaiter(void 0, void 0, void 0, function* () {
        const text = yield navigator.clipboard.readText();
        if (text) {
            updateAutoFillInputValue(text, false);
        }
    });
    (0, react_1.useEffect)(() => {
        var _a, _b;
        if (!destinationAddressHasBeenUpdated && isGnosisContext) {
            setAutofillInputValue(isSameAddressAndGnosisContext
                ? ""
                : (_a = swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) !== null && _a !== void 0 ? _a : connectedAddress);
        }
        else {
            setAutofillInputValue((_b = swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) !== null && _b !== void 0 ? _b : connectedAddress);
        }
    }, [destinationAddressHasBeenUpdated, isSameAddressAndGnosisContext]);
    const errorMessage = ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-w-full tw-text-xs tw-text-error" }, { children: "The address is not in the correct format for the selected chain. Please check the address and try again." })));
    const gnosisContextMessage = ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-text-xs tw-text-warning" }, { children: ["Important! Gnosis Safe addresses are not always the same on every chain, please double check the address on ", toChain === null || toChain === void 0 ? void 0 : toChain.networkName, " or you risk losing your funds"] })));
    const successMessage = ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-gap-1 tw-text-xs tw-text-success" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Address is valid. You can return to the previous page." }), (0, jsx_runtime_1.jsx)(GoBack_1.GoBack, { className: "tw-text-xs tw-underline", showIcon: false })] })));
    const editAddress = () => {
        var _a, _b;
        return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-items-left tw-flex tw-w-full tw-flex-col tw-gap-2" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-px-5 tw-text-base tw-font-semibold", style: { paddingTop: "46px", paddingBottom: "5px" } }, { children: "Add custom wallet address" })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-px-5" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-relative tw-mb-2 tw-flex tw-w-full tw-flex-row tw-items-center tw-gap-2" }, { children: [(0, jsx_runtime_1.jsx)("input", { className: (0, clsx_1.default)(`t-w-full tw-rounded-box tw-flex tw-min-h-[2rem] tw-grow tw-flex-row 
                tw-justify-start tw-overflow-hidden tw-border-none tw-bg-base-200 
                tw-px-2 tw-py-0 tw-text-left tw-font-normal tw-lowercase tw-text-neutral-content 
                tw-outline-none tw-outline-0 hover:tw-bg-base-100`, isUpdatedAddressValid && "tw-border-success", isUpdatedAddressValid === false &&
                                        "tw-border-error tw-text-error", isUpdatedAddressValid === undefined &&
                                        "tw-border-dashed tw-border-secondary", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && constants_1.subTransparentClass), type: "text", value: autofillInputValue, onChange: (e) => updateAutoFillInputValue(e.target.value, false), placeholder: "Enter wallet address", style: {
                                        height: "50px",
                                        borderRadius: "25px",
                                        paddingLeft: "16px",
                                        fontSize: "11px",
                                    } }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-absolute tw-right-[12px]" }, { children: !widgetInIframe && ((0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: (0, clsx_1.default)(`tw-dsw-btn tw-h-6.5 tw-min-h-0 tw-w-[55px] tw-border-none tw-bg-primary 
                  tw-text-sm tw-font-normal tw-normal-case tw-text-primary-content 
                  tw-outline-none`), onClick: pasteFromClipboard }, { children: "Paste" }))) }))] })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-gap-2" }, { children: [isUpdatedAddressValid === false && errorMessage, isUpdatedAddressValid === true && successMessage, isGnosisContext &&
                                    isSameAddressAndGnosisContext &&
                                    gnosisContextMessage] }))] }))] })));
    };
    // If the wallet is handled externally, we don't need to show the wallet selector
    // Because the user wont be able to select a wallet
    // Example if he is on ledger or gnosis safe context
    if (walletHandledExternally) {
        return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "tw-flex tw-h-full tw-w-full tw-flex-1 tw-flex-col tw-overflow-hidden" }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-justify-start tw-gap-2 tw-py-6" }, { children: editAddress() })) })));
    }
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, clsx_1.default)("tw-flex tw-h-full tw-w-full tw-flex-1 tw-flex-col tw-overflow-hidden", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && constants_1.subTransparentClass) }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "tw-bg-base-200", style: {
                    height: "38px",
                    margin: "0 20px",
                    position: "relative",
                    borderRadius: "8px",
                } }, { children: [(0, jsx_runtime_1.jsx)("span", { className: "tw-bg-base-100", style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            transform: currentTab === 0 ? "translate(0, 0)" : "translate(100%, 0)",
                            height: "37px",
                            width: "50%",
                            borderRadius: "8px",
                            transition: "transform .2s ease-out",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        } }), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: `tw-font-semibold ${currentTab === 0
                            ? "tw-text-base-content"
                            : "tw-text-neutral-content"}`, style: {
                            width: "50%",
                            lineHeight: "38px",
                            position: "relative",
                        }, onClick: () => setCurrentTab(0) }, { children: "Wallet" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: `tw-font-semibold ${currentTab === 0
                            ? "tw-text-neutral-content"
                            : "tw-text-base-content"}`, type: "button", style: {
                            width: "50%",
                            lineHeight: "38px",
                            position: "relative",
                        }, onClick: () => setCurrentTab(1) }, { children: "Address" }))] })), currentTab === 0 && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "tw-overflow-auto" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-gap-2 tw-px-5" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-py-6 tw-text-base tw-font-semibold" }, { children: "Supported wallets" })), (0, jsx_runtime_1.jsx)(TokensViewHeaderDropdown_1.ChainDropdownButton, { chainData: currentChain, direction: direction })] })), (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "tw-flex tw-h-[75%]  tw-flex-col tw-flex-nowrap tw-pb-[20px]" }, { children: filteredWallts === null || filteredWallts === void 0 ? void 0 : filteredWallts.map((wallet, index) => {
                            const hasWindowFlagEvmAndIsConnected = wallet.type === sdk_1.ChainType.EVM &&
                                (activeConnector === null || activeConnector === void 0 ? void 0 : activeConnector.name) === wallet.connectorName &&
                                isConnected;
                            // Only displaying address of active wallet for EVM
                            // Only displaying address of Keplr wallet for cosmos
                            let hoverBtn;
                            if (((currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType) === sdk_1.ChainType.EVM &&
                                hasWindowFlagEvmAndIsConnected) ||
                                ((currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType) === sdk_1.ChainType.Cosmos &&
                                    wallet.connectorId === (cosmosConnectedWallet === null || cosmosConnectedWallet === void 0 ? void 0 : cosmosConnectedWallet.connectorId))) {
                                hoverBtn = ((0, jsx_runtime_1.jsx)(HoverButton_1.HoverButtonPrimary, { onClick: autoFill, hoverContent: (0, jsx_runtime_1.jsx)("span", { children: "select address" }), content: isConnected ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-mr-[6px]" }, { children: (0, walletService_1.formatWalletAddress)(connectedAddress) })), (0, jsx_runtime_1.jsx)(ActiveIndicator_1.ActiveIndicator, {})] })) : undefined }));
                            }
                            return ((0, jsx_runtime_1.jsx)(WalletListItem_1.WalletListItem, { wallet: wallet, onSelect: () => connectWallet(wallet, true), hoverBtn: hoverBtn }, wallet.connectorId));
                        }) }))] }))), currentTab === 1 && ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-h-[25%] tw-flex-col tw-items-center tw-justify-start tw-gap-2" }, { children: editAddress() })) }))] })));
};
exports.DestinationAddressView = DestinationAddressView;
//# sourceMappingURL=DestinationAddressView.js.map