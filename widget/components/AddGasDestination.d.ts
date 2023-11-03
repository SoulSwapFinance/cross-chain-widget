import type { ChainData, TokenData } from "@0xsquid/sdk";
interface Props {
    addGasEnabled?: boolean;
    selectedChain?: ChainData;
    selectedToken?: TokenData;
}
export declare const AddGasDestination: ({ addGasEnabled, selectedChain, selectedToken, }: Props) => JSX.Element;
export {};
