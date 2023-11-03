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
exports.RouterLink = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useSquidRouter_1 = require("../hooks/useSquidRouter");
const RouterLink = (_a) => {
    var { children, to, params } = _a, props = __rest(_a, ["children", "to", "params"]);
    const { switchRoute } = (0, useSquidRouter_1.useSquidRouter)();
    return ((0, jsx_runtime_1.jsx)("a", Object.assign({ onClick: () => switchRoute(to, params) }, props, { children: children })));
};
exports.RouterLink = RouterLink;
//# sourceMappingURL=RouterLink.js.map