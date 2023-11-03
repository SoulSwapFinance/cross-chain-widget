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
exports.SwitchNetworkButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const SwitchNetworkButton = (_a) => {
    var props = __rest(_a, []);
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({}, props, { type: "button", className: (0, clsx_1.default)("tw-dsw-btn tw-h-6.5 tw-min-h-0 tw-w-30 tw-bg-primary tw-font-medium tw-lowercase tw-text-primary-content hover:tw-border-none") }, { children: (0, jsx_runtime_1.jsx)("span", { children: "switch network" }) })));
};
exports.SwitchNetworkButton = SwitchNetworkButton;
//# sourceMappingURL=SwitchNetworkButton.js.map