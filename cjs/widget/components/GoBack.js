"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoBack = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const fa_1 = require("react-icons/fa");
const useSquidRouter_1 = require("../hooks/useSquidRouter");
const GoBack = ({ showIcon, className }) => {
    const { previousRoute } = (0, useSquidRouter_1.useSquidRouter)();
    return ((0, jsx_runtime_1.jsxs)("button", Object.assign({ onClick: () => previousRoute(), type: "button", className: (0, clsx_1.default)("tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-base hover:tw-underline", className) }, { children: [showIcon && ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(fa_1.FaArrowLeft, { size: 10 }) })), (0, jsx_runtime_1.jsx)("span", { children: "Go back" })] })));
};
exports.GoBack = GoBack;
//# sourceMappingURL=GoBack.js.map