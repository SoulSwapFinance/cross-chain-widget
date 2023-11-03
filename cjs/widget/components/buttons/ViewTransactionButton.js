"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewTransactionButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const hi_1 = require("react-icons/hi");
const ViewTransactionButton = ({ url }) => {
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-base tw-text-base-content hover:tw-underline" }, { children: [(0, jsx_runtime_1.jsx)("a", Object.assign({ target: "_blank", rel: "noreferrer", href: url, className: "tw-font-medium" }, { children: "View" })), (0, jsx_runtime_1.jsx)(hi_1.HiExternalLink, {})] })));
};
exports.ViewTransactionButton = ViewTransactionButton;
//# sourceMappingURL=ViewTransactionButton.js.map