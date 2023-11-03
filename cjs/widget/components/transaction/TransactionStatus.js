"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStatus = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const bs_1 = require("react-icons/bs");
const cg_1 = require("react-icons/cg");
const fa_1 = require("react-icons/fa");
const ri_1 = require("react-icons/ri");
const externalLinks_1 = require("../../core/externalLinks");
const Loader_1 = require("../Loader");
const TransactionStatus = ({ status, transaction, loadingLabel = "Processing", }) => {
    const success = ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Done" }), " ", (0, jsx_runtime_1.jsx)(fa_1.FaCheckCircle, { size: 14, className: "tw-text-success" })] })));
    const receivedstablecoin = ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: "tw-hover:tw-underline", href: externalLinks_1.squidAxlUSDCWarningLink }, { children: "Received axlUSDC" })) }), (0, jsx_runtime_1.jsx)(fa_1.FaRegCheckCircle, { size: 14, className: "tw-text-success" })] })));
    const error = ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Failed" }), " ", (0, jsx_runtime_1.jsx)(fa_1.FaTimesCircle, { size: 14, className: "tw-text-error" })] })));
    const needgas = ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [(0, jsx_runtime_1.jsx)("a", Object.assign({ className: "tw-hover:tw-underline", href: transaction === null || transaction === void 0 ? void 0 : transaction.axelarUrl }, { children: "Need gas" })), (0, jsx_runtime_1.jsx)(ri_1.RiErrorWarningFill, { size: 14, className: "tw-text-[#FFB155]" })] })));
    const nodata = ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Data unavailable" }), (0, jsx_runtime_1.jsx)(cg_1.CgUnavailable, { size: 14, className: "tw-text-neutral-content" })] })));
    const loading = ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [loadingLabel, " ", (0, jsx_runtime_1.jsx)(Loader_1.Loader, { size: 12 })] })));
    const initialLoading = ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Getting status" }), " ", (0, jsx_runtime_1.jsx)(Loader_1.Loader, { size: 12 })] })));
    const defaultStatus = ((0, jsx_runtime_1.jsxs)("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Waiting to start" }), (0, jsx_runtime_1.jsx)(bs_1.BsClock, { size: 14, className: "tw-text-neutral-content" })] })));
    const getStatusComponent = () => {
        switch (status) {
            case "success":
                return success;
            case "received_usdc":
                return receivedstablecoin;
            case "error":
                return error;
            case "need_gas":
                return needgas;
            case "loading":
                return loading;
            case "initialLoading":
                return initialLoading;
            case "data_unavailable":
                return nodata;
            default:
                return defaultStatus;
        }
    };
    return (0, jsx_runtime_1.jsx)("span", { children: getStatusComponent() });
};
exports.TransactionStatus = TransactionStatus;
//# sourceMappingURL=TransactionStatus.js.map