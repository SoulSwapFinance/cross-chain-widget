"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isColorDark = exports.getParsedStyle = exports.generateFocusColorFrom = exports.generateForegroundColorFrom = exports.toHSL = void 0;
/* eslint-disable consistent-return */
const color_1 = __importDefault(require("color"));
const config_1 = require("../../core/types/config");
/**
 * Converts Hex color to HSL
 * Because the current daisy theme only accepts HSL css variables
 * @param hex
 * @returns HSL string
 */
const toHSL = (hex) => {
    const color = (0, color_1.default)(hex);
    const hslArray = color.hsl().round().array();
    return `${hslArray[0]} ${hslArray[1]}% ${hslArray[2]}%`;
};
exports.toHSL = toHSL;
const generateForegroundColorFrom = (input, percentage = 0.8) => {
    if ((0, color_1.default)(input).isDark()) {
        const arr = (0, color_1.default)(input)
            .mix((0, color_1.default)("white"), percentage)
            .saturate(10)
            .hsl()
            .round()
            .array();
        return `${arr[0]} ${arr[1]}% ${arr[2]}%`;
    }
    const arr = (0, color_1.default)(input)
        .mix((0, color_1.default)("black"), percentage)
        .saturate(10)
        .hsl()
        .round()
        .array();
    return `${arr[0]} ${arr[1]}% ${arr[2]}%`;
};
exports.generateForegroundColorFrom = generateForegroundColorFrom;
const generateFocusColorFrom = (input) => {
    const darkerHslArray = (0, color_1.default)(input).darken(0.2).hsl().round().array();
    return `${darkerHslArray[0]} ${darkerHslArray[1]}% ${darkerHslArray[2]}%`;
};
exports.generateFocusColorFrom = generateFocusColorFrom;
/**
 * Parsing the user readable config to css variables with HSL values
 * @param style
 */
const getParsedStyle = (style) => {
    if (style) {
        const styleKeys = Object.keys(config_1.themeTypesKeys);
        const parsed = styleKeys.map((sk) => {
            const themeItem = config_1.themeTypesKeys[sk];
            let userValue = style[sk];
            if (themeItem.type === "color" && userValue) {
                userValue = (0, exports.toHSL)(userValue);
            }
            if (themeItem.contentFrom) {
                const parentColor = style[themeItem.contentFrom];
                if (parentColor && !userValue) {
                    userValue = (0, exports.generateForegroundColorFrom)(parentColor.toString());
                }
            }
            if (themeItem.focusFrom) {
                const parentColor = style[themeItem.focusFrom];
                if (parentColor) {
                    userValue = (0, exports.generateFocusColorFrom)(parentColor.toString());
                }
            }
            return {
                [themeItem.cssVariable]: userValue,
            };
        });
        return parsed.reduce((a, v) => {
            const key = Object.keys(v)[0];
            return Object.assign(Object.assign({}, a), { [key]: v[key] });
        });
    }
};
exports.getParsedStyle = getParsedStyle;
const isColorDark = (colorHEX) => {
    if (!colorHEX)
        return false;
    const color = (0, color_1.default)(colorHEX);
    return color.isDark();
};
exports.isColorDark = isColorDark;
//# sourceMappingURL=colorService.js.map