import type { ChainData, TokenData } from "@0xsquid/sdk";
interface Props {
    fromToken?: TokenData;
    toToken?: TokenData;
    fromChain?: ChainData;
    toChain?: ChainData;
}
export declare const ShareOnTwitter: ({ fromToken, toToken, fromChain, toChain, }: Props) => JSX.Element;
export {};
