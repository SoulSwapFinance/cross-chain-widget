import type { HTMLAttributes } from "react";
interface CurrencyProps {
    symbol?: string;
    symbolPosition: "before" | "after";
}
interface Props extends HTMLAttributes<HTMLSpanElement> {
    value?: string;
    precision?: number;
    useComaEvery3Digits?: boolean;
    hideIfZero?: boolean;
    formatIfVerySmall?: number;
    currency?: CurrencyProps;
    significantFigures?: number;
}
export declare const NumericValue: ({ value, precision, useComaEvery3Digits, hideIfZero, currency, significantFigures, formatIfVerySmall, ...props }: Props) => JSX.Element | null;
export {};
