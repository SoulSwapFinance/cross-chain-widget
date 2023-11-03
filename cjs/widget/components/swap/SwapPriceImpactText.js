"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapPriceImpactText = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const useEstimate_1 = require("../../hooks/useEstimate");
const SwapPriceImpactText = () => {
    const { priceImpact, priceImpactStatus } = (0, useEstimate_1.useEstimate)();
    if (priceImpactStatus === undefined) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, clsx_1.default)("w-full justify-between tw-flex tw-flex-row tw-text-sm", priceImpactStatus === "critical" && "tw-text-error", priceImpactStatus === "warning" && "tw-text-warning", priceImpactStatus === "normal" && "tw-text-success") }, { children: (0, jsx_runtime_1.jsxs)("span", { children: ["(", priceImpact, "%)"] }) })));
};
exports.SwapPriceImpactText = SwapPriceImpactText;
//# sourceMappingURL=SwapPriceImpactText.js.map