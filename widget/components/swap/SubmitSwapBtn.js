var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react-hooks/rules-of-hooks */
import { ChainType } from "@0xsquid/sdk";
import clsx from "clsx";
import { useMemo } from "react";
import { routes } from "../../core/routes";
import { useGnosisContext } from "../../hooks/useGnosisContext";
import { useMultiChain } from "../../hooks/useMultiChain";
import { useMultiChainBalance } from "../../hooks/useMultiChainBalance";
import { useSquidRouter } from "../../hooks/useSquidRouter";
import { useSwap } from "../../hooks/useSwap";
import { useTransaction } from "../../hooks/useTransaction";
import { AnalyticsService } from "../../services/external/analyticsService";
import { useSwapRoutePersistStore } from "../../store/useSquidStore";
import { LoadingButton } from "../LoadingButton";
import { BaseButton } from "../buttons/BaseButton";
export const SubmitSwapBtn = ({ disabled }) => {
    const { fromChain, fromToken, fromPrice, toChain } = useSwap();
    const { routeApproved, approveRoute } = useTransaction();
    const { switchRoute } = useSquidRouter();
    const { connectedAddress, networkConnectedOnRightChain, changeNetwork } = useMultiChain(fromChain, fromToken);
    const { balance } = useMultiChainBalance(fromChain, fromToken);
    const { swapRoute, destinationAddressHasBeenUpdated } = useSwapRoutePersistStore();
    const balanceFormatted = useMemo(() => +(balance !== null && balance !== void 0 ? balance : 0), [balance]);
    const fromPriceFormatted = useMemo(() => fromPrice !== null && fromPrice !== void 0 ? fromPrice : 0, [fromPrice]);
    const buttonEnabledClasses = "tw-text-primary-content";
    const buttonDisabledClasses = "tw-text-base-content/50";
    const buttonClass = "tw-base100 tw-w-full tw-min-h-[60px] tw-h-[60px] tw-normal-case tw-dsw-btn tw-dsw-btn-primary tw-bg-primary tw-text-xl tw-font-medium";
    const buttonId = "squid-submit-swap-btn";
    const { isSameAddressAndGnosisContext } = useGnosisContext();
    const internalDisabled = useMemo(() => disabled ||
        approveRoute.isLoading ||
        routeApproved.isFetching ||
        ((toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos &&
            (!(swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) ||
                (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) === "")), [
        disabled,
        approveRoute.isLoading,
        routeApproved.isFetching,
        toChain === null || toChain === void 0 ? void 0 : toChain.chainType,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress,
    ]);
    const isApproved = useMemo(() => routeApproved.isSuccess && routeApproved.data === true, [routeApproved.data, routeApproved.isSuccess]);
    if (connectedAddress) {
        if (!networkConnectedOnRightChain) {
            return (_jsx(LoadingButton, Object.assign({ onClick: () => changeNetwork.mutate(), className: clsx(buttonClass, buttonEnabledClasses), id: buttonId }, { children: _jsx("span", { children: "Switch network" }) })));
        }
        if (balanceFormatted <= 0 || balanceFormatted < +fromPriceFormatted) {
            return (_jsx(LoadingButton, Object.assign({ id: buttonId, disabled: true, className: clsx(buttonClass, buttonDisabledClasses) }, { children: _jsx("span", { children: "Insufficient balance" }) })));
        }
        if (isSameAddressAndGnosisContext && !destinationAddressHasBeenUpdated) {
            return (_jsx(BaseButton, Object.assign({ onClick: () => switchRoute(routes.destination), disabled: true, id: buttonId, className: clsx(buttonClass, buttonDisabledClasses) }, { children: _jsx("span", { children: "Add destination address" }) })));
        }
    }
    const approveOrNavigate = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!isApproved && (fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType) === ChainType.EVM) {
            approveRoute.mutate();
            AnalyticsService.givePermissionToUseTokenButton();
        }
        else {
            AnalyticsService.submitButtonPushed();
            switchRoute(routes.transaction);
        }
    });
    return (_jsx(LoadingButton, Object.assign({ id: buttonId, className: clsx(buttonClass, internalDisabled ? buttonDisabledClasses : buttonEnabledClasses), disabled: internalDisabled, onClick: approveOrNavigate }, { children: _jsx("span", { children: approveRoute.isLoading
                ? "Approving..."
                : isApproved || routeApproved.isLoading
                    ? "Submit"
                    : (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos &&
                        (!(swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) ||
                            (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) === "")
                        ? "Add destination address"
                        : "Give permission to use tokens" }) })));
};
//# sourceMappingURL=SubmitSwapBtn.js.map