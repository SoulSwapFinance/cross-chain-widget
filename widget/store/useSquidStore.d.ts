import type { Squid } from "@0xsquid/sdk";
import type { WidgetRoute } from "../core/routes";
import type { AppConfig } from "../core/types/config";
import type { SwapRoute } from "../core/types/swap";
import type { TransactionHistoryStore, TransactionParams } from "../core/types/transaction";
export interface SquidConfigState {
    squid?: Squid;
    fromPrice?: string;
    toPrice?: number;
    currentTransaction?: TransactionParams;
    currentRequestId?: string;
    config: AppConfig;
}
export declare const useSquidStore: import("zustand").UseBoundStore<import("zustand").StoreApi<SquidConfigState>>;
export interface SquidRouter {
    history: {
        route: WidgetRoute;
        params?: {
            [key: string]: any | undefined;
        };
    }[];
}
export declare const useSquidRouterStore: import("zustand").UseBoundStore<import("zustand").StoreApi<SquidRouter>>;
/**
 * Persist the store in local storage
 * So the user can refresh the page and still see his old transactions
 */
export declare const usePersistStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<{
    transactionsHistory?: TransactionHistoryStore[] | undefined;
}>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<{
            transactionsHistory?: TransactionHistoryStore[] | undefined;
        }, {
            transactionsHistory?: TransactionHistoryStore[] | undefined;
        }>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: {
            transactionsHistory?: TransactionHistoryStore[] | undefined;
        }) => void) => () => void;
        onFinishHydration: (fn: (state: {
            transactionsHistory?: TransactionHistoryStore[] | undefined;
        }) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<{
            transactionsHistory?: TransactionHistoryStore[] | undefined;
        }, {
            transactionsHistory?: TransactionHistoryStore[] | undefined;
        }>>;
    };
}>;
export declare const useSwapRoutePersistStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<{
    swapRoute?: SwapRoute | undefined;
    destinationAddressHasBeenUpdated?: {
        updated: boolean;
        filledFromWallet: boolean;
    } | undefined;
}>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<{
            swapRoute?: SwapRoute | undefined;
            destinationAddressHasBeenUpdated?: {
                updated: boolean;
                filledFromWallet: boolean;
            } | undefined;
        }, {
            swapRoute?: SwapRoute | undefined;
            destinationAddressHasBeenUpdated?: {
                updated: boolean;
                filledFromWallet: boolean;
            } | undefined;
        }>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: {
            swapRoute?: SwapRoute | undefined;
            destinationAddressHasBeenUpdated?: {
                updated: boolean;
                filledFromWallet: boolean;
            } | undefined;
        }) => void) => () => void;
        onFinishHydration: (fn: (state: {
            swapRoute?: SwapRoute | undefined;
            destinationAddressHasBeenUpdated?: {
                updated: boolean;
                filledFromWallet: boolean;
            } | undefined;
        }) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<{
            swapRoute?: SwapRoute | undefined;
            destinationAddressHasBeenUpdated?: {
                updated: boolean;
                filledFromWallet: boolean;
            } | undefined;
        }, {
            swapRoute?: SwapRoute | undefined;
            destinationAddressHasBeenUpdated?: {
                updated: boolean;
                filledFromWallet: boolean;
            } | undefined;
        }>>;
    };
}>;
