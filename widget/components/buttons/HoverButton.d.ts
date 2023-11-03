/// <reference types="react" />
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    content?: JSX.Element;
    hoverContent?: JSX.Element;
    widthClass?: string;
    paddingClass?: string;
}
export declare const HoverButtonSecondary: ({ content, hoverContent, widthClass, paddingClass, ...props }: Props) => JSX.Element;
export declare const HoverButtonPrimary: ({ content, hoverContent, ...props }: Props) => JSX.Element;
export {};
