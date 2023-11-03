import type { TokenData } from "@0xsquid/sdk";
export type TooltipFeeRowAttributes = {
    title: string;
    amountUSD: string;
    amount: string;
    token?: TokenData;
    display: boolean;
    approximateFee?: boolean;
};
export declare const TooltipFeeRow: ({ row }: {
    row: TooltipFeeRowAttributes;
}) => JSX.Element;
