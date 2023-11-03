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
exports.BaseButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const constants_1 = require("../../core/constants");
const useSquidStore_1 = require("../../store/useSquidStore");
const getSizeClass = (size) => {
    switch (size) {
        case "xs":
            return "tw-dsw-btn-xs";
        case "sm":
            return "tw-dsw-btn-sm";
        case "md":
            return "tw-dsw-btn-md";
        case "lg":
            return "tw-dsw-btn-lg";
        default:
            return "tw-dsw-btn-md";
    }
};
const BaseButton = (_a) => {
    var _b, _c;
    var { children, size = "md" } = _a, props = __rest(_a, ["children", "size"]);
    const sizeClass = getSizeClass(size);
    const { config } = (0, useSquidStore_1.useSquidStore)();
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button" }, props, { className: (0, clsx_1.default)("transition-all tw-rounded-btn tw-dsw-btn tw-normal-case hover:tw-brightness-95", sizeClass, props.className, props.disabled && "tw-dsw-btn-disabled tw-bg-neutral tw-bg-opacity-20", props.disabled &&
            ((_c = (_b = config === null || config === void 0 ? void 0 : config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) &&
            constants_1.transparentClass) }, { children: (0, jsx_runtime_1.jsx)("span", { children: children }) })));
};
exports.BaseButton = BaseButton;
//# sourceMappingURL=BaseButton.js.map