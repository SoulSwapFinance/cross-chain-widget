import type { ChainData, TokenData } from "@0xsquid/sdk";
import type { AppConfig } from "../../core/types/config";
export declare const getConfigWithDefaults: (config: AppConfig | undefined) => AppConfig;
export declare const randomIntFromInterval: (min: number, max: number) => number;
export declare const getTokensForChain: (tokens: TokenData[], chainId: number | string | undefined) => TokenData[];
export declare const getFirstAvailableChainId: (usedChain: number | string | undefined, config: AppConfig, direction: "from" | "to", chains?: ChainData[] | undefined) => string | number | undefined;
export declare const getDefaultTokenAddressForChain: (tokens: TokenData[], config: AppConfig, chainId: number | string | undefined) => string | undefined;
/**
 * Filter tokens for destination chain
 *
 * Case 1: fromToken.bridgeOnly = true
 * Destination token list shows only tokens with the same commonKey as fromToken
 *
 * Case 2: fromToken.bridgeOnly = false
 * Destination token list shows all tokens with bridgeOnly = false
 * OR Destination token list shows all tokens with the same commonKey as fromToken
 * @param tokens
 * @param selectedDestinationChain
 * @param selectedSourceChainID
 * @param selectedSourceToken
 * @returns
 */
export declare const filterTokensForDestination: <T extends TokenData>(tokens: T[], selectedDestinationChain: ChainData | undefined, selectedSourceToken: TokenData | undefined) => T[];
