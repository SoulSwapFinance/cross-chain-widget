"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTokenAmountToUSD = void 0;
const bignumber_js_1 = require("bignumber.js");
const convertTokenAmountToUSD = (tokenAmount, priceUSD) => {
    return (0, bignumber_js_1.BigNumber)(tokenAmount)
        .multipliedBy(priceUSD !== null && priceUSD !== void 0 ? priceUSD : "0")
        .toFixed();
};
exports.convertTokenAmountToUSD = convertTokenAmountToUSD;
//# sourceMappingURL=priceService.js.map