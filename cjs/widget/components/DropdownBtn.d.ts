import type { ButtonHTMLAttributes } from "react";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconUrl?: string;
    label: string;
}
export declare const DropdownBtn: ({ iconUrl, label, ...props }: Props) => JSX.Element;
export {};
