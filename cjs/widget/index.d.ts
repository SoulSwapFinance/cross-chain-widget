import type { PropsWithChildren } from "react";
import React from "react";
import "../compiled-tailwind.css";
import type { AppConfig } from "./core/types/config";
export interface AppProps {
    config: AppConfig;
}
export declare const SquidMainWidget: ({ config }: AppProps) => JSX.Element;
export declare const AppRouter: React.FC<PropsWithChildren<{}>>;
