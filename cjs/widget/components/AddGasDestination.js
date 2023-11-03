"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddGasDestination = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ai_1 = require("react-icons/ai");
const useSquidStore_1 = require("../store/useSquidStore");
const InfoComponent_1 = require("./InfoComponent");
const AddGasDestination = ({ addGasEnabled, selectedChain, selectedToken, }) => {
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const toggleAddGas = () => {
        useSquidStore_1.useSquidStore.setState({
            config: Object.assign(Object.assign({}, config), { enableGetGasOnDestination: !config.enableGetGasOnDestination }),
        });
    };
    if (addGasEnabled) {
        return ((0, jsx_runtime_1.jsx)(InfoComponent_1.InfoComponent, { id: "gas-dest-toggle", placement: "left", tooltipOffset: 0, tooltipComponent: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-text-sm" }, { children: ["Remove ", selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.nativeCurrency.symbol, " on", " ", selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainName, " and swap the entire amount to $", selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.symbol, "."] })), baseHoverComponent: null, baseComponent: (0, jsx_runtime_1.jsxs)("button", Object.assign({ onClick: toggleAddGas, type: "button", className: "tw-group tw-flex tw-flex-row tw-items-center tw-gap-0.5 tw-text-sm hover:tw-underline" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Remove gas" }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-visible group-hover:tw-hidden" }, { children: (0, jsx_runtime_1.jsx)(ai_1.AiOutlineMinusCircle, { size: 12 }) })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-hidden group-hover:tw-inline-block" }, { children: (0, jsx_runtime_1.jsx)(ai_1.AiFillMinusCircle, { size: 12 }) }))] })) }));
    }
    return ((0, jsx_runtime_1.jsx)(InfoComponent_1.InfoComponent, { id: "gas-dest-toggle", placement: "left", tooltipOffset: 0, tooltipComponent: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-text-sm" }, { children: ["Swap some of your tokens for ", selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.nativeCurrency.symbol, " to pay for transactions on ", selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainName, "."] })), baseHoverComponent: null, baseComponent: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-0.5" }, { children: (0, jsx_runtime_1.jsxs)("button", Object.assign({ onClick: toggleAddGas, type: "button", className: "tw-group tw-flex tw-flex-row tw-items-center tw-gap-0.5 tw-text-sm hover:tw-underline" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Add gas" }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-visible group-hover:tw-hidden" }, { children: (0, jsx_runtime_1.jsx)(ai_1.AiOutlinePlusCircle, { size: 12 }) })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-hidden group-hover:tw-inline-block" }, { children: (0, jsx_runtime_1.jsx)(ai_1.AiFillPlusCircle, { size: 12 }) }))] })) })) }));
};
exports.AddGasDestination = AddGasDestination;
//# sourceMappingURL=AddGasDestination.js.map