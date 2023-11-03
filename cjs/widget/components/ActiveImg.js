"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveImg = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const ImageWrapper_1 = require("./ImageWrapper");
const ActiveImg = ({ logoUrl, size = "tw-md", active = false, pulseActive = false, roundImage = true, }) => {
    const mdSize = {
        container: "tw-w-[44px] tw-h-[44px]",
        activeLight: "tw-w-3 tw-h-3",
    };
    const smSize = {
        container: "tw-w-[36px] tw-h-[36px]",
        activeLight: "tw-w-3 tw-h-3",
    };
    const xsSize = { container: "tw-w-6 tw-h-6", activeLight: "tw-w-3 tw-h-3" };
    const sizeMap = {
        "tw-md": mdSize,
        "tw-sm": smSize,
        "tw-xs": xsSize,
    };
    const currentSize = sizeMap[size];
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: (0, clsx_1.default)("tw-relative tw-flex tw-items-center tw-justify-center tw-p-1", currentSize.container) }, { children: [active && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: (0, clsx_1.default)("absolute tw-right-0 tw-top-1 tw-h-3 tw-w-3 tw-bg-success", currentSize.activeLight, roundImage ? "tw-rounded-full" : "tw-rounded-sm") }, { children: pulseActive && ((0, jsx_runtime_1.jsx)("span", { className: (0, clsx_1.default)("absolute tw-right-0 tw-top-0 tw-h-3 tw-w-3 tw-animate-ping tw-bg-success tw-opacity-75", roundImage ? "tw-rounded-full" : "tw-rounded-sm") })) }))), (0, jsx_runtime_1.jsx)(ImageWrapper_1.ImageWrapper, { src: logoUrl, className: (0, clsx_1.default)("tw-h-auto tw-w-full tw-rounded-full tw-bg-base-100 tw-bg-opacity-60", roundImage ? "tw-rounded-full" : "tw-rounded-sm") })] })));
};
exports.ActiveImg = ActiveImg;
//# sourceMappingURL=ActiveImg.js.map