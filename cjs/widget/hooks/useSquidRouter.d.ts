import type { WidgetRoute } from "../core/routes";
export declare const useSquidRouter: () => {
    currentRoute: WidgetRoute;
    currentRouteTitle: string;
    switchRoute: (route: WidgetRoute, params?: {
        [key: string]: any;
    } | undefined, addRouteToHistory?: boolean) => void;
    previousRoute: () => void;
    currentRouteParams: {
        [key: string]: any;
    } | undefined;
};
