import React from "react";
import type { ComponentSize } from "../../core/types/components";
export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: JSX.Element | string;
    size?: ComponentSize;
}
export declare const BaseButton: React.FC<BaseButtonProps>;
