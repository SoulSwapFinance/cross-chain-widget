"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwapRoutePersistStore = exports.usePersistStore = exports.useSquidRouterStore = exports.useSquidStore = void 0;
const zustand_1 = require("zustand");
const middleware_1 = require("zustand/middleware");
const constants_1 = require("../core/constants");
exports.useSquidStore = (0, zustand_1.create)((_) => constants_1.defaultValues);
exports.useSquidRouterStore = (0, zustand_1.create)((_) => ({
    history: [
        {
            route: {
                id: "swap",
                path: "/",
                title: "Swap",
                headerButtons: ["settings", "history"],
            },
        },
    ],
}));
/**
 * Persist the store in local storage
 * So the user can refresh the page and still see his old transactions
 */
exports.usePersistStore = (0, zustand_1.create)((0, middleware_1.persist)((_) => {
    return {
        transactionsHistory: [],
    };
}, {
    name: "squid.history.store",
}));
exports.useSwapRoutePersistStore = (0, zustand_1.create)((0, middleware_1.persist)((_) => {
    return {
        swapRoute: undefined,
    };
}, {
    name: "squid.swaproute.store",
}));
//# sourceMappingURL=useSquidStore.js.map