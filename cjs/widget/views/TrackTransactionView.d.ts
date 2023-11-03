import type { ChainData, TokenData } from "@0xsquid/sdk";
interface Props {
    fromChain?: ChainData;
    fromToken?: TokenData;
    toToken?: TokenData;
    toChain?: ChainData;
    amount?: string;
}
export declare const TrackTransactionView: ({ fromChain, fromToken, toToken, toChain, amount, }: Props) => JSX.Element;
export {};
