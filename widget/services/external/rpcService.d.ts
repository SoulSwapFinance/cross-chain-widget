import type { TokenData } from "@0xsquid/sdk";
import type { TokenWithBalance } from "../../core/types/tokens";
export declare const getAllEvmTokensBalance: (evmTokens: TokenData[], userAddress: string) => Promise<TokenWithBalance[]>;
