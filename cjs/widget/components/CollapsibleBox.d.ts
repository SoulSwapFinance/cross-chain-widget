interface Props {
    closedStateChildren?: string | JSX.Element;
    children: JSX.Element | JSX.Element[];
    isOpen: boolean;
    openOffset?: number | string;
    onClose: () => void;
}
export declare const CollapsibleBox: ({ closedStateChildren, children, isOpen, openOffset, onClose, }: Props) => JSX.Element;
export {};
