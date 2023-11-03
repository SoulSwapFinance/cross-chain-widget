"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_lottie_player_1 = require("@lottiefiles/react-lottie-player");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const useSquidStore_1 = require("../store/useSquidStore");
const AnimRelacementWrapper = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-h-full tw-w-full tw-items-center tw-justify-center" }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-secondary-content", style: { width: "60px", height: "60px" } }, { children: children })) })));
};
const AnimationWrapper = ({ lottieJsonFile, animReplacement, }) => {
    const [display, setDisplay] = (0, react_1.useState)(false);
    const { config } = (0, useSquidStore_1.useSquidStore)();
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            setDisplay(true);
        }, 250);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
            width: "180px",
            height: "180px",
            background: "hsl(var(--s))",
            borderRadius: "32px",
            display: "flex",
            alignItems: "center",
        }, className: (0, clsx_1.default)("tw-transition-all", display ? "tw-opacity-100" : "tw-opacity-0") }, { children: [!config.hideAnimations && ((0, jsx_runtime_1.jsx)(react_lottie_player_1.Player, { style: { height: 150 }, autoplay: true, loop: true, src: lottieJsonFile })), config.hideAnimations && animReplacement !== undefined && ((0, jsx_runtime_1.jsx)(AnimRelacementWrapper, { children: animReplacement }))] })));
};
exports.AnimationWrapper = AnimationWrapper;
//# sourceMappingURL=AnimationWrapper.js.map