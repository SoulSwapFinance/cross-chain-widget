import type { ChainData } from "@0xsquid/sdk";
import type { ChainInfo } from "@keplr-wallet/types";
import type { Chain } from "wagmi";
import type { ConnectorID, Wallet } from "../../core/types/wallet";
export declare const formatWalletAddress: (walletAddress: string | undefined, trimLength?: number) => string;
export declare const isWalletAddressValid: (chainData: ChainData, address?: string) => boolean;
export declare const getWalletByConnectorID: (connectorID: ConnectorID) => Wallet | undefined;
export declare const getCosmosChainInfosObject: (chain: ChainData) => ChainInfo;
export declare const isWalletExtensionInstalled: (wallet: Wallet) => boolean;
export declare const redirectExtensionStoreIfNotInstalled: (wallet: Wallet) => void;
/**
 * Get the value of an object property using a string path
 * E.G. window["cosmostation.providers.keplr"]
 * @param obj
 * @param path
 * @returns
 */
export declare const getDescendantProp: (obj: any, path: string) => any;
export declare const formatChainsForWagmi: (chains: ChainData[]) => Chain[];
export declare const metamaskIcon: string | undefined;
export declare const EVMnetworkNotSupportedErrorCode = 4902;
