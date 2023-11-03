import type { Routes } from "../routes";
import type { DexName } from "./dex";
/**
 * The color format must be of type #FFFFFF
 */
export type ColorType = `#${string}${string}${string}${string}${string}${string}`;
export interface ConfigTheme {
    neutralContent?: ColorType;
    baseContent?: ColorType;
    base100?: ColorType;
    base200?: ColorType;
    base300?: ColorType;
    error?: ColorType;
    warning?: ColorType;
    primary?: ColorType;
    secondary?: ColorType;
    secondaryContent?: ColorType;
    secondaryFocus?: ColorType;
    neutral?: ColorType;
    success?: ColorType;
    roundedBtn?: string;
    roundedCornerBtn?: string;
    roundedBox?: string;
    roundedDropDown?: string;
    advanced?: {
        transparentWidget?: boolean;
    };
}
/**
 * Mapping between readable variables name and css variables used by daisyUI and TailwindCSS
 */
export declare const themeTypesKeys: Record<string, {
    type: "color" | "value";
    cssVariable: string;
    contentFrom?: keyof ConfigTheme;
    focusFrom?: keyof ConfigTheme;
}>;
export type SlippageOption = 0.5 | 1 | 1.5 | 3;
export type TokenConfig = {
    address: string;
    chainId: number | string;
};
export interface AppConfig {
    integratorId: string;
    companyName?: string;
    slippage?: SlippageOption;
    style?: ConfigTheme;
    enableExpress?: boolean;
    enableGetGasOnDestination?: boolean;
    infiniteApproval?: boolean;
    loadPreviousStateFromLocalStorage?: boolean;
    apiUrl?: string;
    mainLogoUrl?: string;
    titles?: Record<Routes, string>;
    internalSameChainSwapAllowed?: boolean;
    hideAnimations?: boolean;
    preferDex?: DexName[] | string[];
    advanced?: {
        shareOnTwitter?: boolean;
        disableTradeLimit?: boolean;
    };
    priceImpactWarnings?: {
        warning: number;
        critical: number;
    };
    favTokens?: TokenConfig[];
    comingSoonChainIds?: any[];
    initialFromChainId?: number | string;
    initialToChainId?: number | string;
    defaultTokens?: TokenConfig[];
    availableChains?: {
        source?: (number | string)[];
        destination?: (number | string)[];
    };
}
