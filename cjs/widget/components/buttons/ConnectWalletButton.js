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
exports.ConnectWalletButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const hi2_1 = require("react-icons/hi2");
const routes_1 = require("../../core/routes");
const RouterLink_1 = require("../RouterLink");
const ConnectWalletButton = (_a) => {
    var { direction } = _a, props = __rest(_a, ["direction"]);
    return ((0, jsx_runtime_1.jsx)(RouterLink_1.RouterLink, Object.assign({ className: "tw-flex tw-flex-row tw-justify-end", to: direction === "from" ? routes_1.routes.wallets : routes_1.routes.destination, params: { direction } }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({}, props, { type: "button", className: "tw-group tw-dsw-btn-outline tw-dsw-btn-primary tw-dsw-btn-xs tw-dsw-btn tw-h-6.5 tw-w-30 tw-border-none tw-bg-primary tw-px-1" }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2  tw-text-base tw-font-medium tw-normal-case tw-text-primary-content" }, { children: direction === "from" ? ("Connect") : ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-normal-case" }, { children: "Add address" })), (0, jsx_runtime_1.jsx)(hi2_1.HiPlus, { size: 13 })] }))) })) })) })));
};
exports.ConnectWalletButton = ConnectWalletButton;
//# sourceMappingURL=ConnectWalletButton.js.map