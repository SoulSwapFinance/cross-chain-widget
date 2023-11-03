/// <reference types="react" />
import type { SwapDirection } from "../../core/types/types";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    direction: SwapDirection;
}
export declare const ConnectWalletButton: ({ direction, ...props }: Props) => JSX.Element;
export {};
