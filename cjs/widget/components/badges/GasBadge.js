"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasBadge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ri_1 = require("react-icons/ri");
const useSquidStore_1 = require("../../store/useSquidStore");
const Badge_1 = require("./Badge");
const GasBadge = ({ onClick }) => {
    const { config } = (0, useSquidStore_1.useSquidStore)();
    return ((0, jsx_runtime_1.jsx)(Badge_1.BadgeWithIcon, Object.assign({ backgroundClass: (config === null || config === void 0 ? void 0 : config.enableGetGasOnDestination)
            ? "tw-bg-success"
            : "tw-bg-neutral-content", textClass: (config === null || config === void 0 ? void 0 : config.enableGetGasOnDestination)
            ? "tw-text-success"
            : "tw-text-neutral-content", iconSize: 22, maxHeight: 22, icon: ri_1.RiGasStationFill, onClick: onClick }, { children: (0, jsx_runtime_1.jsx)("span", { children: (config === null || config === void 0 ? void 0 : config.enableGetGasOnDestination) ? "ON" : "OFF" }) })));
};
exports.GasBadge = GasBadge;
//# sourceMappingURL=GasBadge.js.map