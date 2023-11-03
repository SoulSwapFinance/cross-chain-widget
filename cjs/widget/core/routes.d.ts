export type Routes = "swap" | "settings" | "wallets" | "tokens" | "chains" | "history" | "transaction" | "allTokens" | "destination";
type HeaderButton = "back" | "settings" | "history";
export interface WidgetRoute {
    id: Routes;
    path: string;
    title: string;
    headerButtons?: HeaderButton[];
}
export declare const routes: Record<Routes, WidgetRoute>;
export declare const routesArray: WidgetRoute[];
export declare const AppRoutes: () => JSX.Element;
export {};
