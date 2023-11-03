import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RiErrorWarningFill } from "react-icons/ri";
import { transactionErrorPauseAnimation } from "../../assets/animations";
import { AnimationWrapper } from "../AnimationWrapper";
export const TransactionPauseView = () => {
    return (_jsx("span", Object.assign({ className: "tw-flex tw-h-full tw-w-full tw-flex-col" }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-h-full tw-flex-col tw-items-center tw-justify-center tw-gap-4" }, { children: [_jsx(AnimationWrapper, { animReplacement: _jsx(RiErrorWarningFill, { size: 60 }), lottieJsonFile: transactionErrorPauseAnimation }), _jsx("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-1" }, { children: _jsx("span", Object.assign({ className: "tw-text-base tw-text-neutral-content" }, { children: "Need gas !" })) }))] })) })));
};
//# sourceMappingURL=TransactionPauseView.tsx.js.map