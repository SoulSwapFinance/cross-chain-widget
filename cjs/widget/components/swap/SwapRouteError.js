"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapRouteError = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const errorService_1 = require("../../services/internal/errorService");
const SwapRouteError = ({ error }) => {
    var _a, _b, _c;
    const axiosError = error;
    const squidError = (_a = axiosError === null || axiosError === void 0 ? void 0 : axiosError.response) === null || _a === void 0 ? void 0 : _a.data;
    const errorMessage = (0, errorService_1.getSquidRouteErrorMessage)(((_c = (_b = squidError === null || squidError === void 0 ? void 0 : squidError.errors) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) > 0 ? squidError.errors[0] : undefined);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-text-xs tw-text-error tw-line-clamp-3" }, { children: (0, jsx_runtime_1.jsx)("span", { children: errorMessage }) })));
};
exports.SwapRouteError = SwapRouteError;
//# sourceMappingURL=SwapRouteError.js.map