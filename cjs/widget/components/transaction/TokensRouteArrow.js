"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensRouteArrow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const vsc_1 = require("react-icons/vsc");
const ImageWrapper_1 = require("../ImageWrapper");
const TokensRouteArrow = ({ fromToken, toToken, size = "lg", }) => {
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: (0, clsx_1.default)("tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-2 ", size === "lg" && "tw-text-lg", size === "md" && "tw-text-base") }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)(ImageWrapper_1.ImageWrapper, { className: "tw-h-7 tw-w-7", src: fromToken === null || fromToken === void 0 ? void 0 : fromToken.logoURI, alt: "" }), (0, jsx_runtime_1.jsx)("span", { children: fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol })] })), (0, jsx_runtime_1.jsx)(vsc_1.VscArrowRight, {}), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)(ImageWrapper_1.ImageWrapper, { className: "tw-h-7 tw-w-7", src: toToken === null || toToken === void 0 ? void 0 : toToken.logoURI, alt: "" }), (0, jsx_runtime_1.jsx)("span", { children: toToken === null || toToken === void 0 ? void 0 : toToken.symbol })] }))] })));
};
exports.TokensRouteArrow = TokensRouteArrow;
//# sourceMappingURL=TokensRouteArrow.js.map