"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapsibleBox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const bs_1 = require("react-icons/bs");
const constants_1 = require("../core/constants");
const useSquidStore_1 = require("../store/useSquidStore");
const CollapsibleBox = ({ closedStateChildren, children, isOpen, openOffset = 0, onClose, }) => {
    var _a, _b;
    const { config } = (0, useSquidStore_1.useSquidStore)();
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-col tw-px-5" }, { children: [closedStateChildren, (0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                    top: isOpen ? openOffset : constants_1.widgetHeight,
                    left: 0,
                    height: `calc(100% + ${constants_1.widgetHeaderSize.height + constants_1.widgetHeaderSize.paddingY}px)`,
                    transition: "all 0.3s ease-in-out",
                }, className: (0, clsx_1.default)("transition-all duration-300 ease-in-out tw-rounded-t-box tw-absolute tw-z-20 tw-flex tw-w-full tw-flex-col tw-overflow-auto tw-bg-neutral") }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-col tw-items-end tw-px-4 tw-pt-4" }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", onClick: onClose }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: (0, clsx_1.default)("tw-flex tw-h-full tw-w-full tw-items-center tw-justify-center tw-rounded-full tw-bg-base-200 tw-p-1", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && constants_1.subTransparentClass) }, { children: (0, jsx_runtime_1.jsx)(bs_1.BsChevronDown, { className: (0, clsx_1.default)("rotate-0 cursor-pointer transition-transform tw-flex tw-flex-col tw-text-neutral-content", !isOpen && "rotate-180") }) })) })), children] })) }))] })));
};
exports.CollapsibleBox = CollapsibleBox;
//# sourceMappingURL=CollapsibleBox.js.map