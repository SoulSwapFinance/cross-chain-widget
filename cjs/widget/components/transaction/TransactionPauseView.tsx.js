"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionPauseView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ri_1 = require("react-icons/ri");
const animations_1 = require("../../assets/animations");
const AnimationWrapper_1 = require("../AnimationWrapper");
const TransactionPauseView = () => {
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-h-full tw-w-full tw-flex-col" }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-h-full tw-flex-col tw-items-center tw-justify-center tw-gap-4" }, { children: [(0, jsx_runtime_1.jsx)(AnimationWrapper_1.AnimationWrapper, { animReplacement: (0, jsx_runtime_1.jsx)(ri_1.RiErrorWarningFill, { size: 60 }), lottieJsonFile: animations_1.transactionErrorPauseAnimation }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-1" }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-base tw-text-neutral-content" }, { children: "Need gas !" })) }))] })) })));
};
exports.TransactionPauseView = TransactionPauseView;
//# sourceMappingURL=TransactionPauseView.tsx.js.map