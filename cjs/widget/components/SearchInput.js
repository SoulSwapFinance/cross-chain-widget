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
exports.SearchInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable jsx-a11y/no-autofocus */
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const bi_1 = require("react-icons/bi");
const md_1 = require("react-icons/md");
const constants_1 = require("../core/constants");
const useSquidStore_1 = require("../store/useSquidStore");
const SearchInput = (_a) => {
    var _b, _c;
    var { onSearchChange, autoFocus = false } = _a, props = __rest(_a, ["onSearchChange", "autoFocus"]);
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const inputChanged = (e) => {
        const searchValue = e.target.value;
        setInputValue(searchValue);
        onSearchChange(searchValue);
    };
    const resetInput = () => {
        setInputValue("");
        onSearchChange("");
    };
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-relative tw-flex tw-w-full tw-items-center" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-absolute tw-left-[13px] tw-flex tw-items-center" }, { children: (0, jsx_runtime_1.jsx)(bi_1.BiSearch, { className: "tw-text-neutral-content" }) })), (0, jsx_runtime_1.jsx)("input", { autoFocus: autoFocus, onChange: inputChanged, value: inputValue, type: "text", placeholder: props.placeholder, className: (0, clsx_1.default)("tw-border-w-[0px] tw-rounded-box tw-h-[48px] tw-max-h-[48px] tw-w-full tw-rounded-3xl tw-bg-base-200 tw-py-2 tw-pl-[35px] tw-text-lg tw-text-neutral-content tw-outline-none focus:tw-outline-none", ((_c = (_b = config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) && constants_1.subTransparentClass), style: { borderRadius: "24px" } }), inputValue !== "" && ((0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", onClick: resetInput, className: "tw-absolute tw-right-[13px] tw-flex tw-items-center" }, { children: (0, jsx_runtime_1.jsx)(md_1.MdClear, { className: "tw-text-neutral-content" }) })))] })));
};
exports.SearchInput = SearchInput;
//# sourceMappingURL=SearchInput.js.map