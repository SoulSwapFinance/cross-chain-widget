"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const squidWidgetVersion_1 = require("../../squidWidgetVersion");
const SlippageSettingsComponent_1 = require("../components/SlippageSettingsComponent");
const ExpressToggle_1 = require("../components/toggles/ExpressToggle");
const GasToggle_1 = require("../components/toggles/GasToggle");
const InfiniteToggle_1 = require("../components/toggles/InfiniteToggle");
const useSquidStore_1 = require("../store/useSquidStore");
const SettingsView = () => {
    var _a, _b;
    const { config } = (0, useSquidStore_1.useSquidStore)();
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, clsx_1.default)("tw-flex tw-h-full tw-flex-col tw-justify-between", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && "tw-bg-opacity-70") }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "tw-flex tw-h-full tw-flex-1 tw-flex-col tw-gap-6  tw-p-4 tw-text-base" }, { children: [(0, jsx_runtime_1.jsx)(ExpressToggle_1.ExpressToggle, {}), (0, jsx_runtime_1.jsx)(GasToggle_1.GasToggle, {}), (0, jsx_runtime_1.jsx)(SlippageSettingsComponent_1.SlippageSettingsComponent, {}), (0, jsx_runtime_1.jsx)(InfiniteToggle_1.InfiniteToggle, {})] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: " tw-mb-2  tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-text-xs tw-text-neutral-content" }, { children: ["v", squidWidgetVersion_1.SQUID_WIDGET_VERSION.toString()] }))] })));
};
exports.SettingsView = SettingsView;
//# sourceMappingURL=SettingsView.js.map