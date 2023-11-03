"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxelarIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const useTheme_1 = require("../../../hooks/useTheme");
const AxelarIcon = ({ height = 15 }) => {
    const { isGlobalDark } = (0, useTheme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)("svg", Object.assign({ version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: "auto", height: height, viewBox: "0 0 64.000000 64.000000", className: (0, clsx_1.default)(isGlobalDark && "tw-invert") }, { children: (0, jsx_runtime_1.jsxs)("g", Object.assign({ transform: "translate(0.000000,64.000000) scale(0.100000,-0.100000)", fill: "#000000", stroke: "none" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M127 602 l-37 -38 103 -102 c74 -74 109 -102 127 -102 18 0 53 28\n    127 102 l103 102 -37 38 -37 38 -78 -77 -78 -78 -78 78 -78 77 -37 -38z" }), (0, jsx_runtime_1.jsx)("path", { d: "M38 513 l-38 -38 77 -77 78 -78 -78 -78 -77 -78 38 -37 38 -37 107\n    108 c59 60 107 115 107 122 0 7 -48 62 -107 122 l-108 108 -37 -37z" }), (0, jsx_runtime_1.jsx)("path", { d: "M462 447 c-74 -74 -102 -109 -102 -127 0 -18 28 -53 102 -127 l102\n    -103 38 37 38 37 -77 78 -78 78 80 80 c43 44 77 81 74 82 -2 2 -20 18 -39 35\n    l-36 33 -102 -103z" }), (0, jsx_runtime_1.jsx)("path", { d: "M198 183 l-108 -107 34 -34 c41 -41 45 -40 136 52 l64 66 78 -77 78\n    -78 38 38 37 38 -107 104 c-58 58 -114 105 -124 105 -9 0 -66 -48 -126 -107z" })] })) })));
};
exports.AxelarIcon = AxelarIcon;
//# sourceMappingURL=AxelarIcon.js.map