"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainAddressBadge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const walletService_1 = require("../services/internal/walletService");
const ImageWrapper_1 = require("./ImageWrapper");
const ChainAddressBadge = ({ walletAddress, chainIconUrl }) => {
    const addressLabel = (0, react_1.useMemo)(() => (0, walletService_1.formatWalletAddress)(walletAddress), [walletAddress]);
    return ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-rounded-box tw-flex tw-flex-row tw-items-center tw-gap-2 tw-bg-base-100 tw-px-3 tw-py-1" }, { children: [(0, jsx_runtime_1.jsx)(ImageWrapper_1.ImageWrapper, { className: "tw-h-5 tw-w-5", src: chainIconUrl, alt: "" }), (0, jsx_runtime_1.jsx)("span", { children: addressLabel })] })));
};
exports.ChainAddressBadge = ChainAddressBadge;
//# sourceMappingURL=ChainAddressBadge.js.map