import type { Placement } from "@floating-ui/react-dom";
import type { HTMLAttributes } from "react";
export interface TooltipProps extends HTMLAttributes<HTMLSpanElement> {
    id: string;
    tooltipComponent?: JSX.Element;
    baseComponent?: JSX.Element | null;
    baseHoverComponent?: JSX.Element | null;
    iconSize?: number;
    tooltipOffset?: number;
    placement?: Placement;
    maxWidth?: string;
}
export declare const InfoComponent: ({ id, tooltipComponent, baseComponent, baseHoverComponent, iconSize, tooltipOffset, placement, maxWidth, ...props }: TooltipProps) => JSX.Element;
