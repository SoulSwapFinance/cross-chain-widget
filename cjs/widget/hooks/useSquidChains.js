"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSquidChains = void 0;
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("react");
const queries_keys_1 = require("../core/queries/queries-keys");
const useSquidStore_1 = require("../store/useSquidStore");
const useSquidChains = () => {
    const { squid, config } = (0, useSquidStore_1.useSquidStore)();
    const supportedChains = (0, react_query_1.useQuery)((0, queries_keys_1.keys)({ apiUrl: config.apiUrl }).chains(), () => {
        var _a;
        return (_a = squid === null || squid === void 0 ? void 0 : squid.chains) !== null && _a !== void 0 ? _a : [];
    }, {
        enabled: squid !== undefined,
        // cacheTime: 1000 * 60 * 60 * 24,
        // staleTime: 1000 * 60 * 60 * 24,
    });
    const chains = (0, react_1.useMemo)(() => { var _a; return (_a = supportedChains.data) !== null && _a !== void 0 ? _a : []; }, [supportedChains.data]);
    const supportedSourceChains = (0, react_1.useMemo)(() => {
        var _a;
        if (config.availableChains &&
            ((_a = config.availableChains) === null || _a === void 0 ? void 0 : _a.source) &&
            config.availableChains.source.length > 0) {
            return chains.filter((c) => { var _a, _b; return (_b = (_a = config.availableChains) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.includes(c.chainId); });
        }
        return chains;
    }, [chains, config.availableChains]);
    const supportedDestinationChains = (0, react_1.useMemo)(() => {
        var _a;
        if (config.availableChains &&
            ((_a = config.availableChains) === null || _a === void 0 ? void 0 : _a.destination) &&
            config.availableChains.destination.length > 0) {
            return chains.filter((c) => { var _a, _b; return (_b = (_a = config.availableChains) === null || _a === void 0 ? void 0 : _a.destination) === null || _b === void 0 ? void 0 : _b.includes(c.chainId); });
        }
        return chains;
    }, [chains, config.availableChains]);
    return {
        supportedChains,
        supportedSourceChains,
        supportedDestinationChains,
        chains,
    };
};
exports.useSquidChains = useSquidChains;
//# sourceMappingURL=useSquidChains.js.map