"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderLogo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const logos_1 = require("../assets/images/logos");
const useTheme_1 = require("../hooks/useTheme");
const useSquidStore_1 = require("../store/useSquidStore");
const ImageWrapper_1 = require("./ImageWrapper");
const HeaderLogo = ({ height = 36 }) => {
    const { isHeaderDark } = (0, useTheme_1.useTheme)();
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const isLogoDefined = config.mainLogoUrl !== undefined;
    // Some partners wanted to hide the logo
    if (config.mainLogoUrl === "") {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(ImageWrapper_1.ImageWrapper, { alt: "squid logo", src: isLogoDefined ? config.mainLogoUrl : logos_1.logos.squidLogoDark, className: (0, clsx_1.default)("aspect-square tw-w-auto", !isLogoDefined && isHeaderDark && "tw-invert"), style: { height } }));
};
exports.HeaderLogo = HeaderLogo;
//# sourceMappingURL=HeaderLogo.js.map