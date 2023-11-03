import type { StatusResponseType, TransactionParams } from "../../core/types/transaction";
interface Props {
    status: StatusResponseType;
    transaction?: TransactionParams;
    loadingLabel?: string;
}
export declare const TransactionStatus: ({ status, transaction, loadingLabel, }: Props) => JSX.Element;
export {};
