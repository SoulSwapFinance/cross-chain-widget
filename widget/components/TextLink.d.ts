/// <reference types="react" />
interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: JSX.Element | string;
}
export declare const TextLink: ({ children, ...props }: Props) => JSX.Element;
export {};
