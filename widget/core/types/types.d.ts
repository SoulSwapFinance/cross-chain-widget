import type { TokenData } from "@0xsquid/sdk";
export type SwapDirection = "from" | "to";
export type NextJsImg = {
    src: string;
};
export type ImgType = string | NextJsImg;
export declare enum FeeType {
    AXELAR_FEE = "Axelar Fee",
    GAS_RECEIVER_FEE = "Cross-chain gas fees"
}
export type FeeCost = {
    name: FeeType;
    description: string;
    percentage: string;
    token: TokenData;
    amount: string;
    amountUSD: string;
};
export type ApiBasicResponse = {
    error?: string;
    errorType?: any;
};
export type TimeSpent = {
    send_vote?: number;
    type?: string;
    destination_chain_type?: string;
    source_chain_type?: string;
    total?: number;
    vote_ibc?: number;
};
