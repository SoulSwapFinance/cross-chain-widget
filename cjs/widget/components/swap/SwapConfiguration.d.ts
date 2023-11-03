import type { ChainData, TokenData } from "@0xsquid/sdk";
import React from "react";
import type { SwapDirection } from "../../core/types/types";
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    direction: SwapDirection;
    tokens: TokenData[];
    selectedChainId?: number | string;
    selectedAddress?: string;
    chains: ChainData[];
    price?: number | string;
    tokenBasePrice?: number;
    isLoadingPrice?: boolean;
    onPriceChange?: (price: string) => void;
    onDestinationAddressChange?: ({ address, filledFromWallet, }: {
        address: string;
        filledFromWallet: boolean;
    }) => void;
}
export declare const SwapConfiguration: ({ direction, tokens, selectedChainId, selectedAddress, chains, price, tokenBasePrice, isLoadingPrice, onPriceChange, onDestinationAddressChange, ...props }: Props) => JSX.Element;
export {};
