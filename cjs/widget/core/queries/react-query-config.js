"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = exports.DEFAULT_STALE_TIME = void 0;
// Prevent fetching too soon after the first successful request.
exports.DEFAULT_STALE_TIME = 8000;
exports.defaultOptions = {
    queries: {
        staleTime: exports.DEFAULT_STALE_TIME,
        refetchOnWindowFocus: false,
        retry: false,
        retryOnMount: false,
    },
};
//# sourceMappingURL=react-query-config.js.map