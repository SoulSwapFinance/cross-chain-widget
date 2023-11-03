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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const BaseButton_1 = require("./buttons/BaseButton");
const Loader_1 = require("./Loader");
const LoadingButton = (_a) => {
    var { title, isLoading = false } = _a, props = __rest(_a, ["title", "isLoading"]);
    return ((0, jsx_runtime_1.jsx)(BaseButton_1.BaseButton, Object.assign({}, props, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-center" }, { children: isLoading ? (0, jsx_runtime_1.jsx)(Loader_1.Loader, {}) : props.children })) })));
};
exports.LoadingButton = LoadingButton;
//# sourceMappingURL=LoadingButton.js.map