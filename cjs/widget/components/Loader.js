"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const cg_1 = require("react-icons/cg");
const Loader = ({ size = 20 }) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "tw-flex tw-flex-row tw-items-center" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "tw-animate-spin" }, { children: (0, jsx_runtime_1.jsx)(cg_1.CgSpinnerTwo, { size: size, className: "tw-text-secondary" }) })) })));
};
exports.Loader = Loader;
//# sourceMappingURL=Loader.js.map