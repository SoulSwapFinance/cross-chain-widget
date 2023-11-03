"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressToggle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable react-hooks/rules-of-hooks */
const hi_1 = require("react-icons/hi");
const useSquidStore_1 = require("../../store/useSquidStore");
const SettingsBaseToggle_1 = require("./SettingsBaseToggle");
const ExpressToggle = ({ fadeOnLoad = false, allowTransparency = true, }) => {
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const changeExpress = () => {
        useSquidStore_1.useSquidStore.setState({
            config: Object.assign(Object.assign({}, config), { enableExpress: !config.enableExpress }),
        });
    };
    return ((0, jsx_runtime_1.jsx)(SettingsBaseToggle_1.SettingsBaseToggle, { title: "Boost", description: "Boost (GMP Express) is a special feature of Axelar and Squid that reduces transaction time across chains to 5-30 seconds. It is currently available for swaps below a value of $20,000 USD.", icon: hi_1.HiLightningBolt, iconSize: 13, onChange: changeExpress, fadeOnLoad: fadeOnLoad, checked: config === null || config === void 0 ? void 0 : config.enableExpress, allowTransparency: allowTransparency }));
};
exports.ExpressToggle = ExpressToggle;
//# sourceMappingURL=ExpressToggle.js.map