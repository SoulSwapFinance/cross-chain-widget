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
exports.BackButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const fa_1 = require("react-icons/fa");
const useSquidRouter_1 = require("../../hooks/useSquidRouter");
const IconButton_1 = require("./IconButton");
const BackButton = (_a) => {
    var props = __rest(_a, []);
    const { previousRoute } = (0, useSquidRouter_1.useSquidRouter)();
    return ((0, jsx_runtime_1.jsx)(IconButton_1.IconButton, { className: (0, clsx_1.default)(props.className, "tw-rounded-full tw-text-neutral-content"), size: 20, border: false, hoverEffect: false, onClick: () => previousRoute(), icon: fa_1.FaChevronLeft }));
};
exports.BackButton = BackButton;
//# sourceMappingURL=BackButton.js.map