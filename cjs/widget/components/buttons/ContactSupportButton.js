"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactSupportButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const externalLinks_1 = require("../../core/externalLinks");
const LightButton_1 = require("./LightButton");
const ContactSupportButton = () => {
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: "tw-flex tw-flex-row" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ target: "_blank", href: externalLinks_1.squidZenDeskSupportLink, rel: "noreferrer" }, { children: (0, jsx_runtime_1.jsx)(LightButton_1.LightButton, Object.assign({ style: { minHeight: "28px" }, className: "tw-px-3 tw-text-base tw-font-medium", size: "xs", light: "100" }, { children: "Contact support" })) })) })));
};
exports.ContactSupportButton = ContactSupportButton;
//# sourceMappingURL=ContactSupportButton.js.map