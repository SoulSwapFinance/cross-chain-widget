"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquidApp = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const constants_1 = require("../core/constants");
const routes_1 = require("../core/routes");
const useAutoConnect_1 = require("../hooks/useAutoConnect");
const colorService_1 = require("../services/internal/colorService");
const useSquidStore_1 = require("../store/useSquidStore");
const MaintenanceLayout_1 = require("./MaintenanceLayout");
const WidgetHeader_1 = require("./WidgetHeader");
const SquidApp = ({ configStyle }) => {
    var _a;
    const parsedStyle = (0, colorService_1.getParsedStyle)(configStyle !== null && configStyle !== void 0 ? configStyle : constants_1.squidTheme);
    // Instead of having wagmi auto connect, we will do it manually
    // Wa want to have Gnosis Safe app connect in priority if it is available
    (0, useAutoConnect_1.useAutoConnect)();
    const { squid } = (0, useSquidStore_1.useSquidStore)();
    // Coming from the api, it can be a string like "true" | "false"
    const isInMaintenanceMode = (squid === null || squid === void 0 ? void 0 : squid.isInMaintenanceMode) === "true" ||
        (squid === null || squid === void 0 ? void 0 : squid.isInMaintenanceMode) === true;
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ id: "squid-widget", style: {
            minHeight: constants_1.widgetHeight,
            width: "100%",
        } }, { children: [(0, jsx_runtime_1.jsx)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), (0, jsx_runtime_1.jsx)("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }), (0, jsx_runtime_1.jsx)("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap", rel: "stylesheet" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: Object.assign(Object.assign({}, parsedStyle), { maxWidth: constants_1.widgetWidth, maxHeight: constants_1.widgetHeight, height: constants_1.widgetHeight, minHeight: constants_1.widgetHeight, pointerEvents: isInMaintenanceMode ? "none" : "auto" }), className: (0, clsx_1.default)("tw-rounded-box tw-relative tw-flex tw-h-full tw-w-full tw-flex-col tw-gap-4 tw-overflow-hidden tw-bg-neutral tw-font-inter tw-text-base-content", ((_a = configStyle === null || configStyle === void 0 ? void 0 : configStyle.advanced) === null || _a === void 0 ? void 0 : _a.transparentWidget) && constants_1.transparentClass) }, { children: [isInMaintenanceMode && (0, jsx_runtime_1.jsx)(MaintenanceLayout_1.MaintenanceLayout, {}), (0, jsx_runtime_1.jsx)(WidgetHeader_1.WidgetHeader, {}), (0, jsx_runtime_1.jsx)(routes_1.AppRoutes, {})] }))] })));
};
exports.SquidApp = SquidApp;
//# sourceMappingURL=SquidApp.js.map