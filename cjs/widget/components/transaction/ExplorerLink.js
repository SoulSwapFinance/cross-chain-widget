"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplorerLink = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ai_1 = require("react-icons/ai");
const ExplorerLink = ({ explorerUrl, height = 15, externalExplorerImageUrl, }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "tw-flex tw-flex-row tw-items-center", target: "_blank", rel: "noreferrer", href: explorerUrl }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: "tw-flex tw-items-center" }, { children: (0, jsx_runtime_1.jsx)(ai_1.AiOutlineLink, { className: "tw-font-normal tw-text-neutral-content", color: "tw-text-neutral", size: height * 1.2 }) })) })) })));
};
exports.ExplorerLink = ExplorerLink;
//# sourceMappingURL=ExplorerLink.js.map