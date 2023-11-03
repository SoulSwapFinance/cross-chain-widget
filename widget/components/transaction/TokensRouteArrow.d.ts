import type { TokenData } from "@0xsquid/sdk";
import type { ComponentSize } from "../../core/types/components";
interface Props {
    fromToken?: TokenData;
    toToken?: TokenData;
    size?: ComponentSize;
}
export declare const TokensRouteArrow: ({ fromToken, toToken, size, }: Props) => JSX.Element;
export {};
