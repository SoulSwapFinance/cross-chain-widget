import type { BaseButtonProps } from "./buttons/BaseButton";
interface Props extends BaseButtonProps {
    isLoading?: boolean;
}
export declare const LoadingButton: ({ title, isLoading, ...props }: Props) => JSX.Element;
export {};
