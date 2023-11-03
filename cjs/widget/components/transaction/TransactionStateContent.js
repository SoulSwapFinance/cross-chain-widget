"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStateContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const AnimationWrapper_1 = require("../AnimationWrapper");
const TransactionStateContent = ({ title, children, animation, animReplacement, }) => {
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center" }, { children: [(0, jsx_runtime_1.jsx)(AnimationWrapper_1.AnimationWrapper, { lottieJsonFile: animation, animReplacement: animReplacement }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-base tw-font-semibold", style: {
                    fontSize: "24px",
                    marginTop: "24px",
                    marginBottom: "10px",
                } }, { children: title })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-center tw-text-sm tw-text-neutral-content" }, { children: children }))] })));
};
exports.TransactionStateContent = TransactionStateContent;
//# sourceMappingURL=TransactionStateContent.js.map