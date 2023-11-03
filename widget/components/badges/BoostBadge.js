import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BiTimer } from "react-icons/bi";
import { HiLightningBolt } from "react-icons/hi";
import { useEstimate } from "../../hooks/useEstimate";
import { useSquidStore } from "../../store/useSquidStore";
import { BadgeWithIcon } from "./Badge";
export const BoostBadge = ({ onClick }) => {
    const { config } = useSquidStore();
    const { transactionTimeEstimate, expressSupportedForThisRoute } = useEstimate();
    return (_jsx(BadgeWithIcon, Object.assign({ backgroundClass: expressSupportedForThisRoute && config.enableExpress
            ? "tw-bg-success"
            : "tw-bg-neutral-content", textClass: expressSupportedForThisRoute && config.enableExpress
            ? "tw-text-success"
            : "tw-text-neutral-content", iconSize: expressSupportedForThisRoute && config.enableExpress ? 22 : 24, maxHeight: 22, icon: expressSupportedForThisRoute && config.enableExpress
            ? HiLightningBolt
            : BiTimer, onClick: onClick }, { children: _jsxs("span", { children: [expressSupportedForThisRoute && config.enableExpress
                    ? "Boost"
                    : "Normal", _jsxs("span", Object.assign({ className: "tw-ml-1 tw-font-normal" }, { children: [_jsx("span", Object.assign({ style: { position: "relative", top: "0.25rem" } }, { children: "\u02DC" })), transactionTimeEstimate] })), " "] }) })));
};
//# sourceMappingURL=BoostBadge.js.map