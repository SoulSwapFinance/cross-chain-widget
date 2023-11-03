/// <reference types="react" />
import type { WidgetRoute } from "../core/routes";
interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: JSX.Element | string;
    to: WidgetRoute;
    params?: {
        [key: string]: any | undefined;
    };
}
export declare const RouterLink: ({ children, to, params, ...props }: Props) => JSX.Element;
export {};
