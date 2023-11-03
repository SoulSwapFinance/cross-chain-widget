import type { HTMLAttributes, ReactElement, ReactNode } from "react";
interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    allowTransparency?: boolean;
}
export declare const Box: ({ children, allowTransparency, ...props }: Props) => ReactElement;
export {};
