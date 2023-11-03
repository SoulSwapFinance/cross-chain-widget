"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntegratorContext = void 0;
const react_1 = require("react");
const constants_1 = require("../core/constants");
const useGnosisContext_1 = require("./useGnosisContext");
const useIntegratorContext = () => {
    const { isGnosisContext } = (0, useGnosisContext_1.useGnosisContext)();
    /**
     * Check if the wallet is handled externally
     * Example: Ledger or Gnosis Safe
     * Either by the embed parameter or by Gnosis context
     */
    const walletHandledExternally = (0, react_1.useMemo)(() => {
        const embedTypesHavingExternalWallet = [
            constants_1.PriorityConnectors.LedgerLive,
            constants_1.PriorityConnectors.Safe,
        ];
        const queryParameters = new URLSearchParams(window.location.search);
        const embedType = queryParameters.get("embed");
        return (isGnosisContext || embedTypesHavingExternalWallet.includes(embedType));
    }, [isGnosisContext]);
    const isEmbed = (0, react_1.useMemo)(() => {
        const queryParameters = new URLSearchParams(window.location.search);
        const embedType = queryParameters.get("embed");
        return !!embedType;
    }, []);
    /**
     * It's important to know if we can use certain features such as
     * the clipboard reading
     */
    const widgetInIframe = (0, react_1.useMemo)(() => {
        try {
            return window.self !== window.top;
        }
        catch (e) {
            return false;
        }
    }, []);
    return { walletHandledExternally, isEmbed, widgetInIframe };
};
exports.useIntegratorContext = useIntegratorContext;
//# sourceMappingURL=useIntegratorContext.js.map