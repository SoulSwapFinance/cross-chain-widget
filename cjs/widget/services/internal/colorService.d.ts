import type { ConfigTheme } from "../../core/types/config";
/**
 * Converts Hex color to HSL
 * Because the current daisy theme only accepts HSL css variables
 * @param hex
 * @returns HSL string
 */
export declare const toHSL: (hex: string) => string;
export declare const generateForegroundColorFrom: (input: string, percentage?: number) => string;
export declare const generateFocusColorFrom: (input: string) => string;
/**
 * Parsing the user readable config to css variables with HSL values
 * @param style
 */
export declare const getParsedStyle: (style?: ConfigTheme) => {
    [key: string]: string | undefined;
} | undefined;
export declare const isColorDark: (colorHEX: string | undefined) => boolean;
