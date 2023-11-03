import type { InputHTMLAttributes } from "react";
import type { TooltipProps } from "./InfoComponent";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    tooltipProps?: TooltipProps;
}
export declare const ToggleWithTextAndTooltip: ({ tooltipProps, ...props }: Props) => JSX.Element;
export {};
