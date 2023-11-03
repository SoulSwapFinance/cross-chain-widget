import type { ImgHTMLAttributes } from "react";
type Props = ImgHTMLAttributes<HTMLImageElement>;
/**
 * Mapping the source to work with NextJS and basic create-react-app
 * NextJS will use the .src of img, CRA will use the image ref itself
 * @param param0
 * @returns
 */
export declare const ImageWrapper: ({ ...props }: Props) => JSX.Element;
export {};
