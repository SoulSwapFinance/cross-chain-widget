import type { Wallet } from "../core/types/wallet";
interface Props {
    wallet: Wallet;
    onSelect: (wallet: Wallet) => void;
    hoverBtn?: JSX.Element | boolean;
}
export declare const WalletListItem: ({ wallet, onSelect, hoverBtn }: Props) => JSX.Element;
export {};
