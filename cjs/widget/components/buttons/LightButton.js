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
exports.LightButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const BaseButton_1 = require("./BaseButton");
const LightButton = (_a) => {
    var { light, children, size } = _a, props = __rest(_a, ["light", "children", "size"]);
    const lightColor = `tw-bg-base-${light}`;
    return ((0, jsx_runtime_1.jsx)(BaseButton_1.BaseButton, Object.assign({ size: size }, props, { className: (0, clsx_1.default)(lightColor, "tw-text-base-content", props.className) }, { children: children })));
};
exports.LightButton = LightButton;
//# sourceMappingURL=LightButton.js.map