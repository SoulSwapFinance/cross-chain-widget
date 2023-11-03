import type { TokenData } from "@0xsquid/sdk";
import type { HTMLAttributes } from "react";
interface Props extends HTMLAttributes<HTMLSpanElement> {
    token: TokenData | undefined;
    balance: string | number;
}
export declare const TokenUSDValue: ({ balance, token, ...props }: Props) => JSX.Element;
export {};
