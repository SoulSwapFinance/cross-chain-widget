import type { ChainData } from "@0xsquid/sdk";
interface Props {
    chainData?: ChainData;
    direction?: "from" | "to";
}
export declare const ChainDropdownButton: ({ chainData, direction }: Props) => JSX.Element;
export declare const TokensViewHeaderDropdown: ({ chainData, direction }: Props) => JSX.Element;
export {};
