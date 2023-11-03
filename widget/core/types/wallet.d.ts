import type { ChainType } from "@0xsquid/sdk";
import type { Chain } from "wagmi";
export type TypedWindow = Window & typeof globalThis & {
    [key in WindowWalletFlag]?: any;
};
export declare enum WindowWalletFlag {
    Binance = "bbcSignTx",
    Coinbase = "isCoinbaseWallet",
    MetaMask = "isMetaMask",
    WalletConnect = "walletConnect",
    CosmostationEVM = "cosmostation",
    CosmostationCosmos = "cosmostation.providers.keplr",
    Keplr = "keplr",
    Leap = "leap",
    Xdefi = "xfi",
    Bitkeep = "bitkeep",
    TrustWallet = "trustwallet",
    FetchAi = "keplr",
    Coin98 = "coin98",
    Rabby = "isRabby",
    SoulWallet = "isSoulWallet",
    OKX = "okxwallet",
    Injected = "injected",
    Zerion = "isZerion"
}
export type ConnectorID = "metaMask" | "walletConnect" | "coinbaseWallet" | "keplr" | "cosmostation" | "cosmostationCosmos" | "leap" | "xdefi" | "bitkeep" | "fetchai" | "coin98" | "rabby" | "soulwallet" | "okx" | "injected" | "zerion" | "trustwallet";
export interface Wallet {
    name: string;
    type: ChainType;
    connectorId: ConnectorID;
    connectorName: string;
    connector?: (chains?: Chain[]) => any;
    icon: string | undefined;
    windowFlag: string;
    canSwitchWallets: boolean;
}
export interface AddEthereumChainParameter {
    chainId: string;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
        icon: string;
    };
    rpcUrls: string[];
    blockExplorerUrls?: string[];
    iconUrls?: string[];
}
