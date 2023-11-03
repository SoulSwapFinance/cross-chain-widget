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
exports.NumericValue = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const numbers_1 = require("../core/numbers");
const NumericValue = (_a) => {
    var { value, precision, useComaEvery3Digits = true, hideIfZero = false, currency, significantFigures, formatIfVerySmall } = _a, props = __rest(_a, ["value", "precision", "useComaEvery3Digits", "hideIfZero", "currency", "significantFigures", "formatIfVerySmall"]);
    const isVerySmall = (0, react_1.useMemo)(() => {
        return (formatIfVerySmall !== undefined &&
            +(value !== null && value !== void 0 ? value : "0") !== 0 &&
            +(value !== null && value !== void 0 ? value : "0") < formatIfVerySmall);
    }, [formatIfVerySmall, value]);
    const newValue = (0, react_1.useMemo)(() => value !== undefined && value !== ""
        ? (0, numbers_1.roundNumericValue)(value, precision, useComaEvery3Digits, significantFigures)
        : undefined, [value, precision, useComaEvery3Digits, significantFigures]);
    if (hideIfZero && (value === "0" || value === "0.0")) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: props.className }, { children: [isVerySmall && (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-mr-0.5" }, { children: "<" })), currency && currency.symbolPosition === "before" && ((0, jsx_runtime_1.jsx)("span", { children: currency.symbol })), newValue && ((0, jsx_runtime_1.jsx)("span", { children: isVerySmall ? formatIfVerySmall === null || formatIfVerySmall === void 0 ? void 0 : formatIfVerySmall.toString() : newValue })), currency && currency.symbolPosition === "after" && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-ml-1" }, { children: currency.symbol })))] })) }));
};
exports.NumericValue = NumericValue;
//# sourceMappingURL=NumericValue.js.map