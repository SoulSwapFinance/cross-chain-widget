import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { keys } from "../core/queries/queries-keys";
import { useSquidStore } from "../store/useSquidStore";
export const useSquidChains = () => {
    const { squid, config } = useSquidStore();
    const supportedChains = useQuery(keys({ apiUrl: config.apiUrl }).chains(), () => {
        var _a;
        return (_a = squid === null || squid === void 0 ? void 0 : squid.chains) !== null && _a !== void 0 ? _a : [];
    }, {
        enabled: squid !== undefined,
        // cacheTime: 1000 * 60 * 60 * 24,
        // staleTime: 1000 * 60 * 60 * 24,
    });
    const chains = useMemo(() => { var _a; return (_a = supportedChains.data) !== null && _a !== void 0 ? _a : []; }, [supportedChains.data]);
    const supportedSourceChains = useMemo(() => {
        var _a;
        if (config.availableChains &&
            ((_a = config.availableChains) === null || _a === void 0 ? void 0 : _a.source) &&
            config.availableChains.source.length > 0) {
            return chains.filter((c) => { var _a, _b; return (_b = (_a = config.availableChains) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.includes(c.chainId); });
        }
        return chains;
    }, [chains, config.availableChains]);
    const supportedDestinationChains = useMemo(() => {
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
//# sourceMappingURL=useSquidChains.js.map