"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfiniteToggle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable react-hooks/rules-of-hooks */
const hi_1 = require("react-icons/hi");
const externalLinks_1 = require("../../core/externalLinks");
const useSquidStore_1 = require("../../store/useSquidStore");
const TextLink_1 = require("../TextLink");
const SettingsBaseToggle_1 = require("./SettingsBaseToggle");
const InfiniteToggle = ({ fadeOnLoad = false }) => {
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const changeInfiniteApproval = () => {
        useSquidStore_1.useSquidStore.setState({
            config: Object.assign(Object.assign({}, config), { infiniteApproval: !config.infiniteApproval }),
        });
    };
    return ((0, jsx_runtime_1.jsx)(SettingsBaseToggle_1.SettingsBaseToggle, { title: "Infinite approval", description: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "" }, { children: ["When this is unchecked, we limit the amount that you approve the Squid Router contract to spend. This can improve your security in some cases.", " ", (0, jsx_runtime_1.jsx)(TextLink_1.TextLink, Object.assign({ href: externalLinks_1.squidInfiniteApprovalLink }, { children: "Learn more" }))] })), icon: hi_1.HiRefresh, onChange: changeInfiniteApproval, fadeOnLoad: fadeOnLoad, iconSize: 17, checked: config === null || config === void 0 ? void 0 : config.infiniteApproval }));
};
exports.InfiniteToggle = InfiniteToggle;
//# sourceMappingURL=InfiniteToggle.js.map