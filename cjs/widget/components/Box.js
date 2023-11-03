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
exports.Box = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const constants_1 = require("../core/constants");
const useSquidStore_1 = require("../store/useSquidStore");
const Box = (_a) => {
    var _b, _c;
    var { children, allowTransparency = true } = _a, props = __rest(_a, ["children", "allowTransparency"]);
    const { config } = (0, useSquidStore_1.useSquidStore)();
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({}, props, { className: (0, clsx_1.default)("tw-rounded-box tw-bg-base-200", props.className, ((_c = (_b = config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) &&
            allowTransparency &&
            constants_1.subTransparentClass) }, { children: children })));
};
exports.Box = Box;
//# sourceMappingURL=Box.js.map