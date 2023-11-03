"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceLayout = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useSquidStore_1 = require("../store/useSquidStore");
const defaultMaintenanceMessage = "Squid is under maintenance, please refresh this page later.";
const MaintenanceLayout = () => {
    var _a;
    const { squid } = (0, useSquidStore_1.useSquidStore)();
    const maintenanceMessage = (_a = squid === null || squid === void 0 ? void 0 : squid.maintenanceMessage) !== null && _a !== void 0 ? _a : defaultMaintenanceMessage;
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-pointer-events-none tw-z-50 tw-flex tw-flex-row tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-80 tw-p-4 tw-text-center tw-text-xl tw-text-white", style: {
            position: "absolute",
            width: "100%",
            height: "100%",
        } }, { children: maintenanceMessage })));
};
exports.MaintenanceLayout = MaintenanceLayout;
//# sourceMappingURL=MaintenanceLayout.js.map