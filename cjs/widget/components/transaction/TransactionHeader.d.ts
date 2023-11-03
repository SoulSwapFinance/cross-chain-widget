import type { ChainData, TokenData } from "@0xsquid/sdk";
interface Props {
    axelarUrl?: string;
    toToken?: TokenData;
    toChain?: ChainData;
    fromChain?: ChainData;
    estimatedRouteDuration?: number;
    toAmountMin: string;
    fromAmount: string | undefined;
    fromToken?: TokenData;
    displayTimeEstimate?: boolean;
}
export declare const TransactionHeader: ({ axelarUrl, toToken, fromAmount, fromToken, fromChain, toChain, estimatedRouteDuration, toAmountMin, displayTimeEstimate, }: Props) => JSX.Element;
export {};
