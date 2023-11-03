import type { ChainData } from "@0xsquid/sdk";
import type { TokenWithBalance } from "../core/types/tokens";
interface Props {
    token: TokenWithBalance;
    chain?: ChainData;
    isLast: boolean;
    onSelect: (tokenAddress: string) => void;
    selected?: boolean;
    displayChainIcon?: boolean;
    usdUnitPrice?: string;
}
export declare const TokenListItem: ({ token, chain, isLast, onSelect, selected, displayChainIcon, usdUnitPrice, }: Props) => JSX.Element;
export {};
