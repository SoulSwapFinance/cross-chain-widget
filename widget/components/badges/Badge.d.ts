/// <reference types="react" />
import type { IconType } from "react-icons";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    children: JSX.Element;
    backgroundClass: string;
    textClass: string;
    maxHeight?: number;
}
export declare const Badge: ({ children, backgroundClass, textClass, maxHeight, ...props }: Props) => JSX.Element;
export declare const BadgeWithIcon: ({ children, backgroundClass, textClass, icon, iconSize, ...props }: {
    icon: IconType;
    iconSize?: number | undefined;
} & Props) => JSX.Element;
export {};
