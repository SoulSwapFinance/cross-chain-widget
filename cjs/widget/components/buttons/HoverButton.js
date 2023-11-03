"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverButtonPrimary = exports.HoverButtonSecondary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const constants_1 = require("../../core/constants");
const useSquidStore_1 = require("../../store/useSquidStore");
const HoverButtonSecondary = (_a) => {
    var _b, _c;
    var { content, hoverContent, widthClass = "tw-w-30", paddingClass = "tw-px-2" } = _a, props = __rest(_a, ["content", "hoverContent", "widthClass", "paddingClass"]);
    const { config } = (0, useSquidStore_1.useSquidStore)();
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-group tw-flex tw-items-center" }, { children: (0, jsx_runtime_1.jsxs)("button", Object.assign({ id: "squid-secondary-hover-button" }, props, { type: "button", className: (0, clsx_1.default)("tw-dsw-btn tw-h-6.5 tw-min-h-0 tw-border-none tw-bg-base-200 tw-text-base tw-font-medium tw-lowercase tw-outline-none hover:tw-border-none hover:tw-bg-secondary hover:tw-outline-none", widthClass, paddingClass, props.className, ((_c = (_b = config === null || config === void 0 ? void 0 : config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) && constants_1.subTransparentClass) }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: (0, clsx_1.default)(hoverContent && "group-hover:tw-hidden") }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-neutral-content group-hover:tw-text-secondary-content" }, { children: content })) })), hoverContent && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-hidden tw-text-secondary-content group-hover:tw-inline-block" }, { children: hoverContent })))] })) })));
};
exports.HoverButtonSecondary = HoverButtonSecondary;
const HoverButtonPrimary = (_a) => {
    var _b, _c;
    var { content, hoverContent } = _a, props = __rest(_a, ["content", "hoverContent"]);
    const { config } = (0, useSquidStore_1.useSquidStore)();
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-group" }, { children: (0, jsx_runtime_1.jsxs)("button", Object.assign({ id: "squid-primary-hover-button" }, props, { type: "button", className: (0, clsx_1.default)("tw-dsw-btn tw-h-6.5 tw-min-h-0 tw-w-30 tw-bg-base-200 tw-text-base tw-font-medium tw-lowercase hover:tw-border-none hover:tw-bg-base-300", ((_c = (_b = config === null || config === void 0 ? void 0 : config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) && constants_1.subTransparentClass) }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: (0, clsx_1.default)(hoverContent && "group-hover:tw-hidden") }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-base-content" }, { children: content })) })), hoverContent && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-hidden group-hover:tw-inline-block" }, { children: hoverContent })))] })) })));
};
exports.HoverButtonPrimary = HoverButtonPrimary;
//# sourceMappingURL=HoverButton.js.map