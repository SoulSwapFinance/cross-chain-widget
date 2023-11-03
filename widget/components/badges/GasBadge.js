import { jsx as _jsx } from "react/jsx-runtime";
import { RiGasStationFill } from "react-icons/ri";
import { useSquidStore } from "../../store/useSquidStore";
import { BadgeWithIcon } from "./Badge";
export const GasBadge = ({ onClick }) => {
    const { config } = useSquidStore();
    return (_jsx(BadgeWithIcon, Object.assign({ backgroundClass: (config === null || config === void 0 ? void 0 : config.enableGetGasOnDestination)
            ? "tw-bg-success"
            : "tw-bg-neutral-content", textClass: (config === null || config === void 0 ? void 0 : config.enableGetGasOnDestination)
            ? "tw-text-success"
            : "tw-text-neutral-content", iconSize: 22, maxHeight: 22, icon: RiGasStationFill, onClick: onClick }, { children: _jsx("span", { children: (config === null || config === void 0 ? void 0 : config.enableGetGasOnDestination) ? "ON" : "OFF" }) })));
};
//# sourceMappingURL=GasBadge.js.map