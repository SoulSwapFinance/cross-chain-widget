import type { ChainData, RouteData, TokenData } from "@0xsquid/sdk";
interface Props {
    toAmount: string;
    squidRoute?: RouteData | undefined;
    toToken?: TokenData;
    fromToken?: TokenData;
    exchangeRate?: string;
    fromChain?: ChainData;
    toChain?: ChainData;
}
export declare const TransactionFooter: ({ squidRoute, toAmount, toToken, fromToken, exchangeRate, fromChain, toChain, }: Props) => JSX.Element;
export {};
