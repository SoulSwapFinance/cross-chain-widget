"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const constants_1 = require("../core/constants");
const useSquidRouter_1 = require("../hooks/useSquidRouter");
const useSquidStore_1 = require("../store/useSquidStore");
const AccountButton_1 = require("./buttons/AccountButton");
const BackButton_1 = require("./buttons/BackButton");
const SettingsButton_1 = require("./buttons/SettingsButton");
const WidgetHeader = () => {
    var _a, _b, _c, _d, _e, _f;
    const { currentRoute, currentRouteTitle: title } = (0, useSquidRouter_1.useSquidRouter)();
    const { config } = (0, useSquidStore_1.useSquidStore)();
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: {
            height: constants_1.widgetHeaderSize.height,
            paddingTop: constants_1.widgetHeaderSize.paddingY,
            paddingBottom: constants_1.widgetHeaderSize.paddingY,
        }, id: "squid-widget-header", className: (0, clsx_1.default)("tw-rounded-t-box tw-flex tw-flex-row tw-items-center tw-justify-between tw-px-4", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && "tw-bg-opacity-[0.85]") }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ id: "squid-header-logo", className: "tw-flex tw-min-w-[65px] tw-flex-row tw-items-center tw-justify-start" }, { children: (currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.headerButtons) && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-3 tw-text-sm" }, { children: ((_c = currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.headerButtons) === null || _c === void 0 ? void 0 : _c.find((hb) => hb === "back")) && ((0, jsx_runtime_1.jsx)(BackButton_1.BackButton, {})) }))) })), (0, jsx_runtime_1.jsx)("span", Object.assign({ id: "squid-header-title", className: "tw-text-xl tw-font-semibold", style: { color: (_d = config.style) === null || _d === void 0 ? void 0 : _d.baseContent } }, { children: title })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-min-w-[65px] tw-flex-row tw-items-center tw-justify-end" }, { children: (currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.headerButtons) && ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-3 tw-text-sm" }, { children: [((_e = currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.headerButtons) === null || _e === void 0 ? void 0 : _e.find((hb) => hb === "history")) && ((0, jsx_runtime_1.jsx)(AccountButton_1.AccountButton, {})), ((_f = currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.headerButtons) === null || _f === void 0 ? void 0 : _f.find((hb) => hb === "settings")) && ((0, jsx_runtime_1.jsx)(SettingsButton_1.SettingsButton, {}))] }))) }))] })));
};
exports.WidgetHeader = WidgetHeader;
//# sourceMappingURL=WidgetHeader.js.map