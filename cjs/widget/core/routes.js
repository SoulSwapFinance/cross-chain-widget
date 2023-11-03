"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = exports.routesArray = exports.routes = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useSquidRouter_1 = require("../hooks/useSquidRouter");
const AllTokensView_1 = require("../views/AllTokensView");
const ChainsView_1 = require("../views/ChainsView");
const DestinationAddressView_1 = require("../views/DestinationAddressView");
const HistoryView_1 = require("../views/HistoryView");
const SettingsView_1 = require("../views/SettingsView");
const SwapView_1 = require("../views/SwapView");
const TokensView_1 = require("../views/TokensView");
const TransactionView_1 = require("../views/TransactionView");
const WalletsView_1 = require("../views/WalletsView");
exports.routes = {
    swap: {
        id: "swap",
        path: "/",
        title: "Swap",
        headerButtons: ["settings", "history"],
    },
    settings: {
        id: "settings",
        path: "/settings",
        title: "Settings",
        headerButtons: ["back"],
    },
    wallets: {
        id: "wallets",
        path: "/wallets",
        title: "Connect",
        headerButtons: ["back"],
    },
    destination: {
        id: "destination",
        path: "/destination",
        title: "Destination address",
        headerButtons: ["back"],
    },
    tokens: {
        id: "tokens",
        path: "/tokens",
        title: "Select Token",
        headerButtons: ["back"],
    },
    allTokens: {
        id: "allTokens",
        path: "/allTokens",
        title: "Select token",
        headerButtons: ["back"],
    },
    chains: {
        id: "chains",
        path: "/chains",
        title: "Select chain",
        headerButtons: ["back"],
    },
    transaction: {
        id: "transaction",
        path: "/transaction",
        title: "Transaction",
        headerButtons: ["back"],
    },
    history: {
        id: "history",
        path: "/history",
        title: "History",
        headerButtons: ["back"],
    },
};
exports.routesArray = Object.values(exports.routes);
const AppRoutes = () => {
    var _a, _b;
    const { currentRoute } = (0, useSquidRouter_1.useSquidRouter)();
    const allRoutes = [
        {
            id: "swap",
            path: exports.routes.swap.path,
            element: (0, jsx_runtime_1.jsx)(SwapView_1.SwapView, {}),
        },
        {
            id: "settings",
            path: exports.routes.settings.path,
            element: (0, jsx_runtime_1.jsx)(SettingsView_1.SettingsView, {}),
        },
        {
            id: "destination",
            path: `${exports.routes.destination.path}/:direction`,
            element: (0, jsx_runtime_1.jsx)(DestinationAddressView_1.DestinationAddressView, {}),
        },
        {
            id: "wallets",
            path: `${exports.routes.wallets.path}/:direction`,
            element: (0, jsx_runtime_1.jsx)(WalletsView_1.WalletsView, {}),
        },
        {
            id: "tokens",
            path: `${exports.routes.tokens.path}/:chainId/:chainType/:direction`,
            element: (0, jsx_runtime_1.jsx)(TokensView_1.TokensView, {}),
        },
        {
            id: "chains",
            path: `${exports.routes.chains.path}/:direction/:context`,
            element: (0, jsx_runtime_1.jsx)(ChainsView_1.ChainsView, {}),
        },
        {
            id: "transaction",
            path: `${exports.routes.transaction.path}`,
            element: (0, jsx_runtime_1.jsx)(TransactionView_1.TransactionView, {}),
        },
        {
            id: "history",
            path: `${exports.routes.history.path}`,
            element: (0, jsx_runtime_1.jsx)(HistoryView_1.HistoryView, {}),
        },
        {
            id: "allTokens",
            path: `${exports.routes.allTokens.path}/:direction`,
            element: (0, jsx_runtime_1.jsx)(AllTokensView_1.AllTokensView, {}),
        },
    ];
    return (_b = (_a = allRoutes.find((r) => r.id === currentRoute.id)) === null || _a === void 0 ? void 0 : _a.element) !== null && _b !== void 0 ? _b : (0, jsx_runtime_1.jsx)("span", {});
};
exports.AppRoutes = AppRoutes;
//# sourceMappingURL=routes.js.map