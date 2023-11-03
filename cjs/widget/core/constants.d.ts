import type { SquidConfigState } from "../store/useSquidStore";
import type { ConfigTheme, SlippageOption } from "./types/config";
import type { ConnectorID, Wallet } from "./types/wallet";
export declare const nativeEvmTokenAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
export declare const maxPriceImpact = 30;
export declare const limitTradeSizeUsd = 10000000;
export declare const defaultSlippage: SlippageOption;
export declare const chainIdResetValue = -1;
export declare const destinationAddressResetValue = "null";
export declare const widgetHeight = 684;
export declare const widgetWidth = 440;
export declare const gasRefundMultiplier = 25;
export declare const transparentClass = "tw-bg-opacity-80";
export declare const subTransparentClass = "tw-bg-opacity-50";
export declare const widgetHeaderSize: {
    height: number;
    paddingY: number;
};
export declare const squidTheme: ConfigTheme;
export declare const defaultValues: SquidConfigState;
export declare enum PriorityConnectors {
    Safe = "safe",
    LedgerLive = "ledgerLive"
}
export declare const wallets: Wallet[];
export declare const axelarSuccessStatuses: string[];
export declare const axelarEndStatuses: string[];
export declare const walletStoreLinks: {
    [key in ConnectorID]: {
        chrome: string;
        firefox: string;
    };
};
