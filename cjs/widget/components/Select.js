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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const Select = (_a) => {
    var { items } = _a, props = __rest(_a, ["items"]);
    return ((0, jsx_runtime_1.jsx)("select", Object.assign({}, props, { className: (0, clsx_1.default)("select select-bordered", props.className) }, { children: items.map((i, index) => ((0, jsx_runtime_1.jsx)("option", Object.assign({ value: i.value, selected: i.selected, disabled: i.disabled }, { children: i.name }), index))) })));
};
exports.Select = Select;
//# sourceMappingURL=Select.js.map