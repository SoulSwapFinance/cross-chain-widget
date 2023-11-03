"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceFees = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useSwap_1 = require("../../hooks/useSwap");
const InfoComponent_1 = require("../InfoComponent");
const LoadingSkeleton_1 = require("../LoadingSkeleton");
const ServiceFees = ({ isLoading }) => {
    const { fromToken } = (0, useSwap_1.useSwap)();
    return ((0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-justify-between" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Service fees" }), (0, jsx_runtime_1.jsx)(InfoComponent_1.InfoComponent, { id: "service-fees", placement: "top-start", iconSize: 13, tooltipComponent: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-sm" }, { children: "Service fees are fees charged by the product that integrates Squid. Squid currently charges zero fees." })) })] })), isLoading ? ((0, jsx_runtime_1.jsx)(LoadingSkeleton_1.LoadingSkeleton, { width: 90 })) : ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-2" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row" }, { children: ["0.00 ", fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol] })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-text-neutral-content" }, { children: "$0.00" }))] })))] })));
};
exports.ServiceFees = ServiceFees;
//# sourceMappingURL=ServiceFees.js.map