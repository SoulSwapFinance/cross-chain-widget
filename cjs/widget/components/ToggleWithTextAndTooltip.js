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
exports.ToggleWithTextAndTooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const InfoComponent_1 = require("./InfoComponent");
const ToggleWithTextAndTooltip = (_a) => {
    var { tooltipProps } = _a, props = __rest(_a, ["tooltipProps"]);
    return ((0, jsx_runtime_1.jsx)(InfoComponent_1.InfoComponent, Object.assign({ id: "gas-dest-toggle" }, tooltipProps, { baseComponent: (0, jsx_runtime_1.jsx)("input", Object.assign({ type: "checkbox", className: "custom-toggle gas-dest tw-dsw-toggle-secondary tw-dsw-toggle" }, props)) })));
};
exports.ToggleWithTextAndTooltip = ToggleWithTextAndTooltip;
//# sourceMappingURL=ToggleWithTextAndTooltip.js.map