import type { BaseButtonProps } from "./BaseButton";
interface Props extends BaseButtonProps {
    light?: "100" | "200" | "300";
    children: JSX.Element | string;
}
export declare const LightButton: ({ light, children, size, ...props }: Props) => JSX.Element;
export {};
