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
exports.BadgeWithIcon = exports.Badge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const Badge = (_a) => {
    var { children, backgroundClass, textClass, maxHeight } = _a, props = __rest(_a, ["children", "backgroundClass", "textClass", "maxHeight"]);
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({}, props, { style: { maxHeight: maxHeight !== null && maxHeight !== void 0 ? maxHeight : "none" }, type: "button", className: (0, clsx_1.default)("tw-flex tw-items-center tw-rounded-md tw-bg-opacity-20 tw-px-1.5 tw-py-[2px] tw-text-sm tw-font-semibold tw-transition-all hover:tw-bg-opacity-30", backgroundClass, textClass) }, { children: children })));
};
exports.Badge = Badge;
const BadgeWithIcon = (_a) => {
    var { children, backgroundClass, textClass, icon, iconSize = 18 } = _a, props = __rest(_a, ["children", "backgroundClass", "textClass", "icon", "iconSize"]);
    const Icon = icon;
    return ((0, jsx_runtime_1.jsx)(exports.Badge, Object.assign({}, props, { backgroundClass: backgroundClass, textClass: textClass }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-0.5" }, { children: [(0, jsx_runtime_1.jsx)(Icon, { className: "tw-p-[3px]", size: iconSize }), children] })) })));
};
exports.BadgeWithIcon = BadgeWithIcon;
//# sourceMappingURL=Badge.js.map