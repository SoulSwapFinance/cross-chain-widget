import type { BigNumberish } from "ethers";
export declare const roundNumericValue: (value?: string, precision?: number, useComaEvery3Digits?: boolean, significantFigures?: number) => string;
export declare function formatUnitsRounded(value: BigNumberish, decimals?: string | BigNumberish, maxDecimalDigits?: number): string;
