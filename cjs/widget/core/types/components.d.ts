export type ComponentSize = "xs" | "sm" | "md" | "lg";
export interface SkeletonConfig {
    hasRandomWidth?: boolean;
    backgroundColor?: string;
    foregroundColor?: string;
    animate?: boolean;
    title?: string;
    speed?: number;
    width?: number;
    height?: number;
}
export interface LoadingComponentProps {
    isLoading?: boolean;
}
