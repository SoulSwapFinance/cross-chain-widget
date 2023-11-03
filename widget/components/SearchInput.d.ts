import type { HTMLAttributes } from "react";
interface Props extends HTMLAttributes<HTMLInputElement> {
    autoFocus?: boolean;
    onSearchChange: (search: string) => void;
}
export declare const SearchInput: ({ onSearchChange, autoFocus, ...props }: Props) => JSX.Element;
export {};
