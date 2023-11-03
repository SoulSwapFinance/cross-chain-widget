"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemAvatar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable jsx-a11y/anchor-is-valid */
const clsx_1 = __importDefault(require("clsx"));
const ai_1 = require("react-icons/ai");
const fi_1 = require("react-icons/fi");
const useSquidStore_1 = require("../store/useSquidStore");
const ActiveImg_1 = require("./ActiveImg");
const ListItemAvatar = ({ children, selectValue, imageUrl, onSelect, disabled = false, active = false, selected = false, favorite = false, roundImage = true, size = "tw-md", gap = "3", relatedImageUrl, }) => {
    var _a, _b;
    const { config } = (0, useSquidStore_1.useSquidStore)();
    return ((0, jsx_runtime_1.jsx)("li", Object.assign({ className: (0, clsx_1.default)("tw-flex tw-w-full tw-items-center", disabled && "grayscale tw-opacity-40", "tw-min-h-[66px]") }, { children: (0, jsx_runtime_1.jsxs)("button", Object.assign({ type: "button", onClick: () => (!disabled ? onSelect(selectValue) : null), className: (0, clsx_1.default)("mb-0 tw-flex tw-h-full tw-w-full tw-flex-row tw-items-center tw-justify-center tw-px-5 hover:tw-bg-base-200", `tw-gap-${gap}`, disabled && "cursor-default", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) &&
                "tw-bg-opacity-0 hover:tw-bg-opacity-70") }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-relative tw-flex tw-h-10 tw-w-10 tw-flex-col tw-items-center tw-justify-center tw-p-1.5" }, { children: [(0, jsx_runtime_1.jsx)(ActiveImg_1.ActiveImg, { size: size, active: active, logoUrl: imageUrl, roundImage: roundImage }), relatedImageUrl && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-absolute -tw-bottom-1 -tw-right-1" }, { children: (0, jsx_runtime_1.jsx)(ActiveImg_1.ActiveImg, { size: "tw-xs", active: active, logoUrl: relatedImageUrl, roundImage: roundImage }) })))] })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-text-base", style: { lineHeight: "1.1rem" } }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-grow" }, { children: children })), favorite && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-ml-[20px]" }, { children: (0, jsx_runtime_1.jsx)(ai_1.AiFillStar, { className: "tw-grow-0 tw-text-primary", size: 20 }) }))), selected && !favorite && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-ml-[20px]" }, { children: (0, jsx_runtime_1.jsx)(fi_1.FiCheck, { className: "tw-grow-0 tw-text-success", size: 20 }) })))] }))] })) })));
};
exports.ListItemAvatar = ListItemAvatar;
//# sourceMappingURL=ListItemAvatar.js.map