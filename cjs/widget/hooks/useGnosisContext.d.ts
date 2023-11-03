import SafeAppsSDK from "@safe-global/safe-apps-sdk";
export declare const useGnosisContext: () => {
    getGnosisSafeContext: () => Promise<SafeAppsSDK | undefined>;
    isSameAddressAndGnosisContext: boolean;
    isGnosisContext: boolean;
};
