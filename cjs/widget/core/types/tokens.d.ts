import type { TokenData } from "@0xsquid/sdk";
export type TokenWithBalance = TokenData & {
    balance: string;
    priceUSD?: string;
    isFavorite?: boolean;
};
export type AxelarTokenData = {
    id: string;
    common_key: object;
    native_chain: string;
    fully_supported: boolean;
    decimals: number;
    chain_aliases: {
        [key: string]: {
            assetSymbol: string;
            assetName: string;
            minDepositAmt: number;
            ibcDenom: string;
            fullDenomPath: string;
            tokenAddress: string;
            mintLimit: number;
        };
    };
};
export type AxelarTokensData = {
    assets: {
        [key: string]: AxelarTokenData;
    };
};
