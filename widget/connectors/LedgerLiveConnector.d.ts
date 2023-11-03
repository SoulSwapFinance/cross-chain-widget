import { IFrameEthereumProvider } from "@ledgerhq/iframe-provider";
import type { Chain } from "@wagmi/core";
import { Connector } from "@wagmi/core";
import { providers } from "ethers";
import { PriorityConnectors } from "../core/constants";
type IFrameEthereumProviderOptions = ConstructorParameters<typeof IFrameEthereumProvider>[0];
export declare class IFrameEthereumConnector extends Connector<IFrameEthereumProvider, IFrameEthereumProviderOptions> {
    readonly id = PriorityConnectors.LedgerLive;
    readonly name = "Ledger Live";
    readonly ready = true;
    providerInstance?: IFrameEthereumProvider;
    connect({ chainId }?: {
        chainId?: number;
    }): Promise<{
        account: `0x${string}`;
        chain: {
            id: number;
            unsupported: boolean;
        };
        provider: IFrameEthereumProvider;
    }>;
    disconnect(): Promise<void>;
    getAccount(): Promise<`0x${string}`>;
    getChainId(): Promise<number>;
    getProvider(): Promise<IFrameEthereumProvider>;
    getSigner(): Promise<providers.JsonRpcSigner>;
    isAuthorized(): Promise<boolean>;
    switchChain(chainId: number): Promise<Chain>;
    watchAsset({ address, decimals, image, symbol, }: {
        address: string;
        decimals?: number;
        image?: string;
        symbol: string;
    }): Promise<any>;
    protected onAccountsChanged: (accounts: string[]) => void;
    protected onChainChanged: (chainId: number | string) => void;
    protected isUserRejectedRequestError(error: unknown): boolean;
    protected onDisconnect: () => void;
}
export {};
