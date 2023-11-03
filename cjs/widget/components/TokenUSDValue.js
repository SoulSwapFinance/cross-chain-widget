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
exports.TokenUSDValue = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useSingleTokenPrice_1 = require("../hooks/useSingleTokenPrice");
const NumericValue_1 = require("./NumericValue");
const TokenUSDValue = (_a) => {
    var { balance, token } = _a, props = __rest(_a, ["balance", "token"]);
    const { getUSDValue } = (0, useSingleTokenPrice_1.useSingleTokenPrice)(token);
    const usdValue = getUSDValue(balance.toString());
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({}, props, { children: ["(", (0, jsx_runtime_1.jsx)(NumericValue_1.NumericValue, { formatIfVerySmall: 0.01, currency: { symbol: "$", symbolPosition: "before" }, value: usdValue.toString() }), ")"] })));
};
exports.TokenUSDValue = TokenUSDValue;
//# sourceMappingURL=TokenUSDValue.js.map