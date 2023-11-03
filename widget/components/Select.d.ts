import React from "react";
export interface SelectItem {
    name: string;
    value: any;
    selected?: boolean;
    disabled?: boolean;
}
interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    items: SelectItem[];
}
export declare const Select: ({ items, ...props }: Props) => JSX.Element;
export {};
