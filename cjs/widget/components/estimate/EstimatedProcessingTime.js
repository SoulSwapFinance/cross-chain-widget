"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstimatedProcessingTime = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useEstimate_1 = require("../../hooks/useEstimate");
const EstimateTime_1 = require("../EstimateTime");
const LoadingSkeleton_1 = require("../LoadingSkeleton");
const EstimatedProcessingTime = ({ isLoading, }) => {
    const { estimatedRouteDuration } = (0, useEstimate_1.useEstimate)();
    return ((0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-justify-between" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Estimated processing time" }), isLoading ? ((0, jsx_runtime_1.jsx)(LoadingSkeleton_1.LoadingSkeleton, { width: 70 })) : ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-3" }, { children: estimatedRouteDuration !== undefined ? ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-justify-between tw-text-sm" }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "~" }), (0, jsx_runtime_1.jsx)(EstimateTime_1.EstimateTime, { seconds: estimatedRouteDuration })] })) }))) : ((0, jsx_runtime_1.jsx)("span", { children: "-" })) })))] })));
};
exports.EstimatedProcessingTime = EstimatedProcessingTime;
//# sourceMappingURL=EstimatedProcessingTime.js.map