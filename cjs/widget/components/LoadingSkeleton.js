"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingSkeleton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_content_loader_1 = __importDefault(require("react-content-loader"));
const useTheme_1 = require("../hooks/useTheme");
const configService_1 = require("../services/internal/configService");
const LoadingSkeleton = ({ hasRandomWidth = false, width = 50, height = 10, }) => {
    const { isGlobalDark } = (0, useTheme_1.useTheme)();
    const componentWidth = hasRandomWidth
        ? (0, configService_1.randomIntFromInterval)(width - width / 2, width + width / 2)
        : width;
    return ((0, jsx_runtime_1.jsx)(react_content_loader_1.default, Object.assign({ backgroundColor: isGlobalDark ? "#888888" : "#F3F3F3", foregroundColor: isGlobalDark ? "#626060" : "#ECEBEB", width: componentWidth, height: height, viewBox: `0 0 ${componentWidth} ${height}` }, { children: (0, jsx_runtime_1.jsx)("rect", { x: "0", y: "0", rx: "3", ry: "3", width: componentWidth, height: height }) })));
};
exports.LoadingSkeleton = LoadingSkeleton;
//# sourceMappingURL=LoadingSkeleton.js.map