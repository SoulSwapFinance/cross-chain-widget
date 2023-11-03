import type { ButtonHTMLAttributes } from "react";
import type { IconType } from "react-icons/lib";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconType;
    size?: number;
    border?: boolean;
    hoverEffect?: boolean;
}
export declare const IconButton: ({ icon, size, border, hoverEffect, ...props }: Props) => JSX.Element;
export {};
