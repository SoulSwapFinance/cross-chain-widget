interface EventData {
    event: string;
}
declare global {
    interface Window {
        dataLayer: Array<EventData> | undefined;
    }
}
export declare class AnalyticsService {
    private static pushEvent;
    static submitButtonPushed(): void;
    static givePermissionToUseTokenButton(): void;
    static settingClicked(): void;
    static historyClicked(): void;
    static expressClicked(): void;
    static regularClicked(): void;
}
export {};
