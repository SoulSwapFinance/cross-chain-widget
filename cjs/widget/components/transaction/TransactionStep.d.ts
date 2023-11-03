import type { StatusResponseType, TransactionParams } from "../../core/types/transaction";
interface Props {
    label: JSX.Element | string;
    transactionStatus: StatusResponseType;
    link?: {
        explorerUrl?: string;
        externalExplorerImageUrl?: string;
    };
    transaction?: TransactionParams;
}
export declare const TransactionStep: ({ label, transactionStatus, link, transaction, }: Props) => JSX.Element;
export {};
