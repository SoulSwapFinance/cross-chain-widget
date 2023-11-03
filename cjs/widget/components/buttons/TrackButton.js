"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const fi_1 = require("react-icons/fi");
const useEstimate_1 = require("../../hooks/useEstimate");
const LightButton_1 = require("./LightButton");
const TrackButton = ({ onClick, showEstimate = false, }) => {
    const { transactionTimeEstimate } = (0, useEstimate_1.useEstimate)();
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row" }, { children: (0, jsx_runtime_1.jsx)(LightButton_1.LightButton, Object.assign({ onClick: onClick, style: { minHeight: "28px" }, className: "tw-px-3 tw-text-base tw-font-medium", size: "xs", light: "100" }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)(fi_1.FiClock, {}), (0, jsx_runtime_1.jsx)("span", { children: "Track" }), showEstimate && (0, jsx_runtime_1.jsx)("span", { children: ` ~${transactionTimeEstimate}` })] })) })) })));
};
exports.TrackButton = TrackButton;
//# sourceMappingURL=TrackButton.js.map