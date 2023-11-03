"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoostBadge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const bi_1 = require("react-icons/bi");
const hi_1 = require("react-icons/hi");
const useEstimate_1 = require("../../hooks/useEstimate");
const useSquidStore_1 = require("../../store/useSquidStore");
const Badge_1 = require("./Badge");
const BoostBadge = ({ onClick }) => {
    const { config } = (0, useSquidStore_1.useSquidStore)();
    const { transactionTimeEstimate, expressSupportedForThisRoute } = (0, useEstimate_1.useEstimate)();
    return ((0, jsx_runtime_1.jsx)(Badge_1.BadgeWithIcon, Object.assign({ backgroundClass: expressSupportedForThisRoute && config.enableExpress
            ? "tw-bg-success"
            : "tw-bg-neutral-content", textClass: expressSupportedForThisRoute && config.enableExpress
            ? "tw-text-success"
            : "tw-text-neutral-content", iconSize: expressSupportedForThisRoute && config.enableExpress ? 22 : 24, maxHeight: 22, icon: expressSupportedForThisRoute && config.enableExpress
            ? hi_1.HiLightningBolt
            : bi_1.BiTimer, onClick: onClick }, { children: (0, jsx_runtime_1.jsxs)("span", { children: [expressSupportedForThisRoute && config.enableExpress
                    ? "Boost"
                    : "Normal", (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-ml-1 tw-font-normal" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ style: { position: "relative", top: "0.25rem" } }, { children: "\u02DC" })), transactionTimeEstimate] })), " "] }) })));
};
exports.BoostBadge = BoostBadge;
//# sourceMappingURL=BoostBadge.js.map