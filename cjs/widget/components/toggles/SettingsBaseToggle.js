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
exports.SettingsBaseToggle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const Box_1 = require("../Box");
const iconWrapper = (icon, size) => {
    if (!icon)
        return null;
    const Icon = icon;
    return (0, jsx_runtime_1.jsx)(Icon, { size: size, className: "tw-text-base-content" });
};
const SettingsBaseToggle = (_a) => {
    var { title, description, icon, iconSize = 14, fadeOnLoad = false, allowTransparency = true } = _a, props = __rest(_a, ["title", "description", "icon", "iconSize", "fadeOnLoad", "allowTransparency"]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "tw-flex tw-flex-col tw-gap-2" }, { children: [(0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ id: "box", allowTransparency: allowTransparency, className: (0, clsx_1.default)("tw-flex tw-h-[45px] tw-w-full tw-flex-row tw-items-center tw-px-4", fadeOnLoad && "tw-animate-fade") }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-items-center tw-gap-1" }, { children: [icon && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-p-[3px]" }, { children: iconWrapper(icon, iconSize) }))), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-base tw-font-medium" }, { children: title }))] })), (0, jsx_runtime_1.jsx)("input", Object.assign({}, props, { type: "checkbox", className: "tw-dsw-toggle-secondary tw-dsw-toggle" }))] })) })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-xs tw-text-neutral-content" }, { children: description }))] })));
};
exports.SettingsBaseToggle = SettingsBaseToggle;
//# sourceMappingURL=SettingsBaseToggle.js.map