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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = exports.SquidMainWidget = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const sdk_1 = require("@0xsquid/sdk");
const react_query_1 = require("@tanstack/react-query");
const safe_1 = require("@wagmi/connectors/safe");
const wagmi_1 = require("wagmi");
const jsonRpc_1 = require("wagmi/providers/jsonRpc");
require("../compiled-tailwind.css");
const SquidApp_1 = require("./components/SquidApp");
const LedgerLiveConnector_1 = require("./connectors/LedgerLiveConnector");
const constants_1 = require("./core/constants");
const CosmosProvider_1 = require("./core/providers/CosmosProvider");
const react_query_config_1 = require("./core/queries/react-query-config");
const configService_1 = require("./services/internal/configService");
const walletService_1 = require("./services/internal/walletService");
const useSquidStore_1 = require("./store/useSquidStore");
const SquidMainWidget = ({ config }) => {
    const queryClient = new react_query_1.QueryClient({ defaultOptions: react_query_config_1.defaultOptions });
    // Initialize wagmi client, will be reset when squid is loaded
    const [wagmiClient, setWagmiClient] = (0, react_1.useState)(null);
    /**
     * EVM Client - Used to connect with multiple wallets using provider
     * Possible to extend and have more wallets
     */
    const initWagmiClient = (chains) => {
        const { provider, chains: wagmiChains } = (0, wagmi_1.configureChains)((0, walletService_1.formatChainsForWagmi)(chains), [
            (0, jsonRpc_1.jsonRpcProvider)({
                rpc: (chain) => {
                    var _a;
                    return ({
                        http: (_a = chain.rpcUrls.default.http[0]) !== null && _a !== void 0 ? _a : "",
                        webSocket: undefined,
                    });
                },
            }),
        ]);
        const evmWalletConnectors = constants_1.wallets
            .filter((w) => w.type === sdk_1.ChainType.EVM)
            .map((w) => { var _a; return (_a = w.connector) === null || _a === void 0 ? void 0 : _a.call(w, wagmiChains); });
        const wagmiClient = (0, wagmi_1.createClient)({
            persister: null,
            provider,
            connectors: [
                ...evmWalletConnectors,
                // For Gnosis Safe App Context
                new safe_1.SafeConnector({
                    chains: wagmiChains,
                    options: {
                        allowedDomains: [/cross.soulswap.finance$/, /exchange.soulswap.finance$/, /app.soulswap.finance$/, /localhost$/, /gnosis-safe.io$/, /app.safe.global$/],
                        debug: false,
                    },
                }),
                new LedgerLiveConnector_1.IFrameEthereumConnector({ chains: wagmiChains, options: {} }),
            ],
        });
        setWagmiClient(wagmiClient);
    };
    const initFullSquidConfig = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        const fullConfig = (0, configService_1.getConfigWithDefaults)(config);
        const squid = new sdk_1.Squid({
            baseUrl: fullConfig.apiUrl,
        });
        squid.setConfig({
            baseUrl: fullConfig.apiUrl,
            integratorId: config.integratorId,
        });
        yield squid.init();
        initWagmiClient(squid.chains);
        // Reset config if integrator doesn't want to load local storage state
        // From previous user session
        // Or if integrator has set up some pre defined states (default chains)
        if (!(config === null || config === void 0 ? void 0 : config.loadPreviousStateFromLocalStorage) ||
            config.initialFromChainId ||
            config.initialToChainId) {
            useSquidStore_1.useSwapRoutePersistStore.setState({
                swapRoute: undefined,
                destinationAddressHasBeenUpdated: undefined,
            });
        }
        useSquidStore_1.useSquidStore.setState((_) => ({
            config: fullConfig,
            squid,
        }));
    }), [config]);
    /**
     *  Init squid SDK
     *  store sdk & config in globalState
     */
    const initSquid = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        // Squid already initialized
        if (useSquidStore_1.useSquidStore.getState().squid) {
            const fullConfig = (0, configService_1.getConfigWithDefaults)(config);
            // if api changed, re-init everything
            if (fullConfig.apiUrl !== useSquidStore_1.useSquidStore.getState().config.apiUrl ||
                !wagmiClient) {
                initFullSquidConfig();
            }
            else {
                // If not, just update config
                useSquidStore_1.useSquidStore.setState((_) => ({
                    config: fullConfig,
                }));
            }
            return;
        }
        initFullSquidConfig();
    }), [config, initFullSquidConfig]);
    (0, react_1.useEffect)(() => {
        initSquid();
    }, [config, initSquid]);
    return ((0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, Object.assign({ client: queryClient }, { children: wagmiClient && ((0, jsx_runtime_1.jsx)(wagmi_1.WagmiConfig, Object.assign({ client: wagmiClient }, { children: (0, jsx_runtime_1.jsx)(CosmosProvider_1.CosmosProvider, { children: (0, jsx_runtime_1.jsx)(exports.AppRouter, { children: (0, jsx_runtime_1.jsx)(SquidApp_1.SquidApp, { configStyle: config === null || config === void 0 ? void 0 : config.style }) }) }) }))) })));
};
exports.SquidMainWidget = SquidMainWidget;
const AppRouter = ({ children }) => {
    const Router = react_1.Fragment;
    return (0, jsx_runtime_1.jsx)(Router, { children: children });
};
exports.AppRouter = AppRouter;
//# sourceMappingURL=index.js.map