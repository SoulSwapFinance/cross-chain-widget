import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BsClock } from "react-icons/bs";
import { CgUnavailable } from "react-icons/cg";
import { FaCheckCircle, FaRegCheckCircle, FaTimesCircle } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { squidAxlUSDCWarningLink } from "../../core/externalLinks";
import { Loader } from "../Loader";
export const TransactionStatus = ({ status, transaction, loadingLabel = "Processing", }) => {
    const success = (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [_jsx("span", { children: "Done" }), " ", _jsx(FaCheckCircle, { size: 14, className: "tw-text-success" })] })));
    const receivedstablecoin = (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [_jsx("span", { children: _jsx("a", Object.assign({ className: "tw-hover:tw-underline", href: squidAxlUSDCWarningLink }, { children: "Received axlUSDC" })) }), _jsx(FaRegCheckCircle, { size: 14, className: "tw-text-success" })] })));
    const error = (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [_jsx("span", { children: "Failed" }), " ", _jsx(FaTimesCircle, { size: 14, className: "tw-text-error" })] })));
    const needgas = (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [_jsx("a", Object.assign({ className: "tw-hover:tw-underline", href: transaction === null || transaction === void 0 ? void 0 : transaction.axelarUrl }, { children: "Need gas" })), _jsx(RiErrorWarningFill, { size: 14, className: "tw-text-[#FFB155]" })] })));
    const nodata = (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [_jsx("span", { children: "Data unavailable" }), _jsx(CgUnavailable, { size: 14, className: "tw-text-neutral-content" })] })));
    const loading = (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [loadingLabel, " ", _jsx(Loader, { size: 12 })] })));
    const initialLoading = (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [_jsx("span", { children: "Getting status" }), " ", _jsx(Loader, { size: 12 })] })));
    const defaultStatus = (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [_jsx("span", { children: "Waiting to start" }), _jsx(BsClock, { size: 14, className: "tw-text-neutral-content" })] })));
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
    return _jsx("span", { children: getStatusComponent() });
};
//# sourceMappingURL=TransactionStatus.js.map