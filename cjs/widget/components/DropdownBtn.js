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
exports.DropdownBtn = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const bs_1 = require("react-icons/bs");
const useSquidStore_1 = require("../store/useSquidStore");
const ImageWrapper_1 = require("./ImageWrapper");
const DropdownBtn = (_a) => {
    var _b, _c;
    var { iconUrl, label } = _a, props = __rest(_a, ["iconUrl", "label"]);
    const { config } = (0, useSquidStore_1.useSquidStore)();
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ id: "squid-dropdown-btn", className: (0, clsx_1.default)("tw-flex tw-w-full tw-flex-row tw-items-center", props.disabled && "tw-opacity-50", props.className) }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: (0, clsx_1.default)("tw-rounded-dropdown tw-dsw-btn  tw-h-[36px] tw-min-h-0 tw-w-full tw-border-none tw-bg-base-100 tw-pl-1 tw-pr-3 tw-text-base tw-font-normal tw-normal-case tw-text-base-content tw-outline-none", "tw-shadow-[0_4px_12px_rgba(0,0,0,0.1)]", ((_c = (_b = config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) && "tw-bg-opacity-80") }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-gap-2" }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-max-w-[80%] tw-flex-row tw-items-center tw-gap-2" }, { children: [iconUrl && ((0, jsx_runtime_1.jsx)(ImageWrapper_1.ImageWrapper, { id: "squid-dropdown-icon", src: iconUrl, className: "tw-h-7 tw-w-7 tw-rounded-full tw-bg-base-100 tw-bg-opacity-60" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ id: "squid-dropdown-label", className: "tw-truncate tw-text-xl tw-font-medium tw-text-base-content" }, { children: label }))] })), (0, jsx_runtime_1.jsx)(bs_1.BsChevronDown, {})] })) })) })));
};
exports.DropdownBtn = DropdownBtn;
//# sourceMappingURL=DropdownBtn.js.map