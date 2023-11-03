import type { SecretNetworkClient } from "secretjs";
interface SecretToken {
    name: string;
    address: string;
    code_hash: string;
    decimals: number;
    coingecko_id: string;
    axelar_denom: string;
}
export declare const SECRET_TOKENS: SecretToken[];
export declare const findSecretToken: (axlDenom: string) => SecretToken | undefined;
/**
 * Fetch secret network token balance
 * Using the permit signature, see permit function for more details
 * @param secretJS
 * @param contract
 * @param chainId
 * @param walletAddress
 * @param permit
 * @returns
 */
export declare const getTokenBalance: (secretJS: SecretNetworkClient, contract: {
    address: string;
    codeHash: string;
}, permit: any) => Promise<unknown>;
export declare const getPermit: (chainId: string, contracts: any[], address: string) => Promise<any>;
export {};
