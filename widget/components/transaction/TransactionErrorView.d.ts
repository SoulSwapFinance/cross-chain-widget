import type { StatusResponseType } from "../../core/types/transaction";
export declare const TransactionErrorView: ({ state, }: {
    state: StatusResponseType | "pending" | "rejected" | "warning" | undefined;
}) => JSX.Element;
