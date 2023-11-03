"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const fa_1 = require("react-icons/fa");
const constants_1 = require("../../core/constants");
const routes_1 = require("../../core/routes");
const useSquidStore_1 = require("../../store/useSquidStore");
const RouterLink_1 = require("../RouterLink");
const IconButton_1 = require("./IconButton");
const AccountButton = () => {
    var _a, _b;
    const { config } = (0, useSquidStore_1.useSquidStore)();
    return ((0, jsx_runtime_1.jsx)(RouterLink_1.RouterLink, Object.assign({ to: routes_1.routes.history }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, { hoverEffect: false, border: false, icon: fa_1.FaHistory, size: 16, className: (0, clsx_1.default)("tw-bg-base-200 tw-p-2 tw-text-neutral-content", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && constants_1.subTransparentClass) }) })));
};
exports.AccountButton = AccountButton;
//# sourceMappingURL=AccountButton.js.map