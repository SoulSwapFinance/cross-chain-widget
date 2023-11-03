"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensViewHeaderDropdown = exports.ChainDropdownButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const bs_1 = require("react-icons/bs");
const logos_1 = require("../assets/images/logos");
const routes_1 = require("../core/routes");
const useSquidRouter_1 = require("../hooks/useSquidRouter");
const ImageWrapper_1 = require("./ImageWrapper");
const ChainDropdownButton = ({ chainData, direction }) => {
    const { switchRoute } = (0, useSquidRouter_1.useSquidRouter)();
    const isAllChain = chainData === undefined;
    return ((0, jsx_runtime_1.jsxs)("button", Object.assign({ className: `tw-rounded-dropdown tw-dsw-btn tw-flex tw-h-[32px] tw-min-h-0 
  tw-gap-1 tw-border-[1px] tw-border-base-300 tw-bg-base-100 tw-pl-1 tw-pr-3 
  tw-text-base tw-font-normal tw-normal-case tw-text-base-content 
  `, type: "button", style: {
            height: 32,
            borderWidth: "1px",
            borderStyle: "solid",
        }, onClick: () => switchRoute(routes_1.routes.chains, { direction, context: "fromToken" }, false) }, { children: [(0, jsx_runtime_1.jsx)(ImageWrapper_1.ImageWrapper, { alt: "squid logo", className: "rounded-full", src: isAllChain ? logos_1.logos.squidLogoPurple : chainData === null || chainData === void 0 ? void 0 : chainData.chainIconURI, style: { height: 24, width: 24 } }), isAllChain ? "All Networks" : chainData === null || chainData === void 0 ? void 0 : chainData.networkName, (0, jsx_runtime_1.jsx)(bs_1.BsChevronDown, { size: 12, className: (0, clsx_1.default)("rotate-0 cursor-pointer transition-transform tw-flex tw-flex-col") })] })));
};
exports.ChainDropdownButton = ChainDropdownButton;
const TokensViewHeaderDropdown = ({ chainData, direction }) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "tw-flex tw-items-center tw-justify-between tw-px-5 tw-pb-3", style: { paddingBottom: "10px" } }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-text-base tw-font-semibold" }, { children: "Available tokens" })), (0, jsx_runtime_1.jsx)(exports.ChainDropdownButton, { chainData: chainData, direction: direction })] })));
};
exports.TokensViewHeaderDropdown = TokensViewHeaderDropdown;
//# sourceMappingURL=TokensViewHeaderDropdown.js.map