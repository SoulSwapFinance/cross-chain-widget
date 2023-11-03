import React from "react";
import type { IconType } from "react-icons";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    title?: string;
    description?: string | JSX.Element;
    icon?: IconType;
    iconSize?: number;
    fadeOnLoad?: boolean;
    allowTransparency?: boolean;
}
export declare const SettingsBaseToggle: ({ title, description, icon, iconSize, fadeOnLoad, allowTransparency, ...props }: Props) => JSX.Element;
export {};
