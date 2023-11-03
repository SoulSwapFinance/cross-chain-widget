"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasToggle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable react-hooks/rules-of-hooks */
const ri_1 = require("react-icons/ri");
const useSquidStore_1 = require("../../store/useSquidStore");
const SettingsBaseToggle_1 = require("./SettingsBaseToggle");
const GasToggle = ({ fadeOnLoad = false, allowTransparency = true }) => {
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const changeGetGasOnDestination = () => {
        useSquidStore_1.useSquidStore.setState({
            config: Object.assign(Object.assign({}, config), { enableGetGasOnDestination: !config.enableGetGasOnDestination }),
        });
    };
    return ((0, jsx_runtime_1.jsx)(SettingsBaseToggle_1.SettingsBaseToggle, { title: "Arrival gas", description: " Swap some of your tokens for gas on the destination chain.", icon: ri_1.RiGasStationFill, onChange: changeGetGasOnDestination, fadeOnLoad: fadeOnLoad, allowTransparency: allowTransparency, checked: config === null || config === void 0 ? void 0 : config.enableGetGasOnDestination }));
};
exports.GasToggle = GasToggle;
//# sourceMappingURL=GasToggle.js.map