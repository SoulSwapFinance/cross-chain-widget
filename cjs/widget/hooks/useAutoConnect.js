"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoConnect = void 0;
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const constants_1 = require("../core/constants");
const PRIORITY_CONNECTOR_ID = [constants_1.PriorityConnectors.Safe];
const WAGMI_LOCAL_STORAGE_WALLET_ID = "wagmi.wallet";
/**
 * Auto connect to Safe provider if it's present
 * Safe will always be the priority connector
 * Because if it's present, this means the user is on a Safe app iframe
 */
const useAutoConnect = () => {
    const { connect, connectors } = (0, wagmi_1.useConnect)();
    const wagmiLocalStorageWalletID = localStorage.getItem(WAGMI_LOCAL_STORAGE_WALLET_ID);
    (0, react_1.useEffect)(() => {
        const queryParameters = new URLSearchParams(window.location.search);
        // TODO: At the moment gnosis was published without the embed parameter in the manifest,
        // but we should ask gnosis to change our app url to https://app.squidrouter.com/?embed="safe"
        // So we could remove the priority connector array and just use the embed parameter
        const embedType = queryParameters.get("embed");
        let priorityConnector;
        if (embedType) {
            priorityConnector = connectors.find((c) => c.id === embedType);
        }
        else {
            priorityConnector = connectors.find((c) => PRIORITY_CONNECTOR_ID.includes(c.id) && c.ready);
        }
        // Connect priority provider if it's present
        // Otherwise, connect to the last wallet used if authorized
        if (priorityConnector) {
            connect({ connector: priorityConnector });
        }
        else if (wagmiLocalStorageWalletID) {
            const wagmiLocalStorageWalletConnector = connectors.find((c) => c.id === JSON.parse(wagmiLocalStorageWalletID) && c.ready);
            // If we do not check this, the wallet will try to connect even if the user disconnected on purpose
            // Checking this will prevent the wallet to popup at each page refresh if the user is disconnected
            wagmiLocalStorageWalletConnector === null || wagmiLocalStorageWalletConnector === void 0 ? void 0 : wagmiLocalStorageWalletConnector.isAuthorized().then((isAuthorized) => {
                if (isAuthorized) {
                    connect({ connector: wagmiLocalStorageWalletConnector });
                }
            });
        }
    }, [connect, connectors]);
};
exports.useAutoConnect = useAutoConnect;
//# sourceMappingURL=useAutoConnect.js.map