import type { InputHTMLAttributes } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    parsedValueChanged: (value: string) => void;
    initialValue: string;
    forcedUpdateValue?: string;
    maxDecimals?: number;
}
export declare const NumericInput: ({ parsedValueChanged, initialValue, forcedUpdateValue, maxDecimals, ...props }: Props) => JSX.Element;
export {};
