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
exports.SubmitSwapBtn = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable react-hooks/rules-of-hooks */
const sdk_1 = require("@0xsquid/sdk");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const routes_1 = require("../../core/routes");
const useGnosisContext_1 = require("../../hooks/useGnosisContext");
const useMultiChain_1 = require("../../hooks/useMultiChain");
const useMultiChainBalance_1 = require("../../hooks/useMultiChainBalance");
const useSquidRouter_1 = require("../../hooks/useSquidRouter");
const useSwap_1 = require("../../hooks/useSwap");
const useTransaction_1 = require("../../hooks/useTransaction");
const analyticsService_1 = require("../../services/external/analyticsService");
const useSquidStore_1 = require("../../store/useSquidStore");
const LoadingButton_1 = require("../LoadingButton");
const BaseButton_1 = require("../buttons/BaseButton");
const SubmitSwapBtn = ({ disabled }) => {
    const { fromChain, fromToken, fromPrice, toChain } = (0, useSwap_1.useSwap)();
    const { routeApproved, approveRoute } = (0, useTransaction_1.useTransaction)();
    const { switchRoute } = (0, useSquidRouter_1.useSquidRouter)();
    const { connectedAddress, networkConnectedOnRightChain, changeNetwork } = (0, useMultiChain_1.useMultiChain)(fromChain, fromToken);
    const { balance } = (0, useMultiChainBalance_1.useMultiChainBalance)(fromChain, fromToken);
    const { swapRoute, destinationAddressHasBeenUpdated } = (0, useSquidStore_1.useSwapRoutePersistStore)();
    const balanceFormatted = (0, react_1.useMemo)(() => +(balance !== null && balance !== void 0 ? balance : 0), [balance]);
    const fromPriceFormatted = (0, react_1.useMemo)(() => fromPrice !== null && fromPrice !== void 0 ? fromPrice : 0, [fromPrice]);
    const buttonEnabledClasses = "tw-text-primary-content";
    const buttonDisabledClasses = "tw-text-base-content/50";
    const buttonClass = "tw-base100 tw-w-full tw-min-h-[60px] tw-h-[60px] tw-normal-case tw-dsw-btn tw-dsw-btn-primary tw-bg-primary tw-text-xl tw-font-medium";
    const buttonId = "squid-submit-swap-btn";
    const { isSameAddressAndGnosisContext } = (0, useGnosisContext_1.useGnosisContext)();
    const internalDisabled = (0, react_1.useMemo)(() => disabled ||
        approveRoute.isLoading ||
        routeApproved.isFetching ||
        ((toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === sdk_1.ChainType.Cosmos &&
            (!(swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) ||
                (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) === "")), [
        disabled,
        approveRoute.isLoading,
        routeApproved.isFetching,
        toChain === null || toChain === void 0 ? void 0 : toChain.chainType,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress,
    ]);
    const isApproved = (0, react_1.useMemo)(() => routeApproved.isSuccess && routeApproved.data === true, [routeApproved.data, routeApproved.isSuccess]);
    if (connectedAddress) {
        if (!networkConnectedOnRightChain) {
            return ((0, jsx_runtime_1.jsx)(LoadingButton_1.LoadingButton, Object.assign({ onClick: () => changeNetwork.mutate(), className: (0, clsx_1.default)(buttonClass, buttonEnabledClasses), id: buttonId }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Switch network" }) })));
        }
        if (balanceFormatted <= 0 || balanceFormatted < +fromPriceFormatted) {
            return ((0, jsx_runtime_1.jsx)(LoadingButton_1.LoadingButton, Object.assign({ id: buttonId, disabled: true, className: (0, clsx_1.default)(buttonClass, buttonDisabledClasses) }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Insufficient balance" }) })));
        }
        if (isSameAddressAndGnosisContext && !destinationAddressHasBeenUpdated) {
            return ((0, jsx_runtime_1.jsx)(BaseButton_1.BaseButton, Object.assign({ onClick: () => switchRoute(routes_1.routes.destination), disabled: true, id: buttonId, className: (0, clsx_1.default)(buttonClass, buttonDisabledClasses) }, { children: (0, jsx_runtime_1.jsx)("span", { children: "Add destination address" }) })));
        }
    }
    const approveOrNavigate = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!isApproved && (fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType) === sdk_1.ChainType.EVM) {
            approveRoute.mutate();
            analyticsService_1.AnalyticsService.givePermissionToUseTokenButton();
        }
        else {
            analyticsService_1.AnalyticsService.submitButtonPushed();
            switchRoute(routes_1.routes.transaction);
        }
    });
    return ((0, jsx_runtime_1.jsx)(LoadingButton_1.LoadingButton, Object.assign({ id: buttonId, className: (0, clsx_1.default)(buttonClass, internalDisabled ? buttonDisabledClasses : buttonEnabledClasses), disabled: internalDisabled, onClick: approveOrNavigate }, { children: (0, jsx_runtime_1.jsx)("span", { children: approveRoute.isLoading
                ? "Approving..."
                : isApproved || routeApproved.isLoading
                    ? "Submit"
                    : (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === sdk_1.ChainType.Cosmos &&
                        (!(swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) ||
                            (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) === "")
                        ? "Add destination address"
                        : "Give permission to use tokens" }) })));
};
exports.SubmitSwapBtn = SubmitSwapBtn;
//# sourceMappingURL=SubmitSwapBtn.js.map