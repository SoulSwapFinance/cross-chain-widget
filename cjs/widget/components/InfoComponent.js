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
exports.InfoComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = require("@floating-ui/react-dom");
const react_dom_interactions_1 = require("@floating-ui/react-dom-interactions");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const ai_1 = require("react-icons/ai");
const InfoComponent = (_a) => {
    var { id, tooltipComponent, baseComponent, baseHoverComponent, iconSize = 15, tooltipOffset = 5, placement = "top", maxWidth = "270px" } = _a, props = __rest(_a, ["id", "tooltipComponent", "baseComponent", "baseHoverComponent", "iconSize", "tooltipOffset", "placement", "maxWidth"]);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    if (baseComponent === undefined) {
        baseComponent = ((0, jsx_runtime_1.jsx)(ai_1.AiOutlineInfoCircle, { size: iconSize, className: "tw-inline-block group-hover:tw-hidden" }));
    }
    if (baseHoverComponent === undefined) {
        baseHoverComponent = ((0, jsx_runtime_1.jsx)(ai_1.AiFillInfoCircle, { size: iconSize, className: "tw-hidden group-hover:tw-inline-block" }));
    }
    const { x, y, reference, floating, strategy, context } = (0, react_dom_interactions_1.useFloating)({
        placement,
        strategy: "fixed",
        middleware: [
            (0, react_dom_1.offset)(tooltipOffset),
            (0, react_dom_1.size)({
                apply({ availableWidth, availableHeight, elements }) {
                    Object.assign(elements.floating.style, {
                        maxWidth,
                    });
                },
            }),
        ],
    });
    const { getReferenceProps, getFloatingProps } = (0, react_dom_interactions_1.useInteractions)([
        (0, react_dom_interactions_1.useHover)(context, {
            mouseOnly: true,
        }),
    ]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({}, props, { onMouseEnter: () => setIsOpen(true), onMouseLeave: () => setIsOpen(false), className: (0, clsx_1.default)("tw-group tw-flex tw-items-center", props.className) }, getReferenceProps({ ref: reference }), { children: [baseComponent, baseHoverComponent] })), isOpen && tooltipComponent && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-rounded-md tw-bg-black tw-p-2 tw-text-white" }, getFloatingProps({
                ref: floating,
                style: {
                    position: strategy,
                    top: y !== null && y !== void 0 ? y : 0,
                    left: x !== null && x !== void 0 ? x : 0,
                },
            }), { children: tooltipComponent })))] }));
};
exports.InfoComponent = InfoComponent;
//# sourceMappingURL=InfoComponent.js.map