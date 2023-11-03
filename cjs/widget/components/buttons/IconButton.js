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
exports.IconButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const IconButton = (_a) => {
    var { icon, size = 22, border = true, hoverEffect = true } = _a, props = __rest(_a, ["icon", "size", "border", "hoverEffect"]);
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ id: "squid-icon-button", type: "button" }, props, { className: (0, clsx_1.default)("transition-all tw-group tw-flex tw-items-center tw-justify-center tw-rounded-full", props.className, border && "border tw-border-primary", hoverEffect && "hover:tw-bg-primary") }, { children: icon({
            className: "transition-all",
            size,
        }) })));
};
exports.IconButton = IconButton;
//# sourceMappingURL=IconButton.js.map