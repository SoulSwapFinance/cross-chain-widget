"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSquidRouter = void 0;
const react_1 = require("react");
const useSquidStore_1 = require("../store/useSquidStore");
const useSquidRouter = () => {
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const { history } = (0, useSquidStore_1.useSquidRouterStore)();
    const switchRoute = (route, params, addRouteToHistory = true) => {
        const currentHistory = useSquidStore_1.useSquidRouterStore.getState().history;
        if (addRouteToHistory) {
            useSquidStore_1.useSquidRouterStore.setState({
                history: [...currentHistory, { route, params }],
            });
        }
        else {
            useSquidStore_1.useSquidRouterStore.setState({
                history: [...currentHistory.slice(0, -1), { route, params }],
            });
        }
    };
    const previousRoute = () => {
        const currentHistory = useSquidStore_1.useSquidRouterStore.getState().history;
        currentHistory.pop();
        useSquidStore_1.useSquidRouterStore.setState({
            history: currentHistory,
        });
    };
    const currentRoute = history[history.length - 1].route;
    const currentRouteParams = history[history.length - 1].params;
    const configRouteTitleSet = (0, react_1.useMemo)(() => {
        var _a, _b;
        if (config.titles !== undefined) {
            return (_b = (_a = config.titles) === null || _a === void 0 ? void 0 : _a[currentRoute.id]) !== null && _b !== void 0 ? _b : undefined;
        }
        return undefined;
    }, [config.titles, currentRoute]);
    const currentRouteTitle = (0, react_1.useMemo)(() => { var _a; return (_a = configRouteTitleSet !== null && configRouteTitleSet !== void 0 ? configRouteTitleSet : currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.title) !== null && _a !== void 0 ? _a : "Squid"; }, [currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.title, configRouteTitleSet]);
    return {
        currentRoute,
        currentRouteTitle,
        switchRoute,
        previousRoute,
        currentRouteParams,
    };
};
exports.useSquidRouter = useSquidRouter;
//# sourceMappingURL=useSquidRouter.js.map