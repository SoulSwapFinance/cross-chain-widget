"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlippageSettingsComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const externalLinks_1 = require("../core/externalLinks");
const useSquidStore_1 = require("../store/useSquidStore");
const Box_1 = require("./Box");
const TextLink_1 = require("./TextLink");
const SlippageSettingsComponent = () => {
    const slippageOptions = [
        { value: 0.5, name: "0.5%" },
        { value: 1.5, name: "1.5%" },
        { value: 3, name: "3%" },
        { value: 1, name: "auto" },
    ];
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const changeSlippage = (value) => {
        useSquidStore_1.useSquidStore.setState({
            config: Object.assign(Object.assign({}, config), { slippage: value }),
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "tw-flex tw-flex-col tw-gap-2" }, { children: [(0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "tw-flex tw-h-[45px] tw-w-full tw-flex-row tw-items-center tw-px-4" }, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-font-medium" }, { children: "Slippage" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-2" }, { children: slippageOptions.map((slippageOption) => ((0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", onClick: () => changeSlippage(slippageOption.value), className: (0, clsx_1.default)("tw-rounded-corner-btn tw-dsw-btn-sm tw-dsw-btn tw-h-6 tw-min-h-[1.5rem] tw-max-w-[105px] tw-items-center tw-border-none tw-px-2 tw-font-normal tw-outline-none", config.slippage === slippageOption.value
                                    ? "tw-dsw-btn-secondary tw-bg-secondary tw-text-secondary-content"
                                    : "tw-dsw-btn-secondary tw-bg-base-300 tw-text-base-content") }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-lowercase" }, { children: slippageOption.name })) }), slippageOption.value))) }))] })) })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-text-xs tw-text-neutral-content" }, { children: ["Slippage is the price variation you are willing to accept in the event that the price of the trade changes while it is processing. If the trade fails due to too-low slippage, you will receive axlUSDC on the destination chain.", " ", (0, jsx_runtime_1.jsx)(TextLink_1.TextLink, Object.assign({ href: externalLinks_1.squidSlippageToleranceLink }, { children: "Learn more" }))] }))] })));
};
exports.SlippageSettingsComponent = SlippageSettingsComponent;
//# sourceMappingURL=SlippageSettingsComponent.js.map