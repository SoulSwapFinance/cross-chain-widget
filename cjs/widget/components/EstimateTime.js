"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstimateTime = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const transactionService_1 = require("../services/internal/transactionService");
const EstimateTime = ({ seconds }) => {
    const duration = (0, transactionService_1.formatSeconds)(seconds);
    return (0, jsx_runtime_1.jsx)("span", { children: duration });
};
exports.EstimateTime = EstimateTime;
//# sourceMappingURL=EstimateTime.js.map