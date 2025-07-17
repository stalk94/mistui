/**
 * Бегушая строка текст
 */
declare const MarqueeText: import("react").ForwardRefExoticComponent<import("./types").BaseTypographyProps & {
    speed?: number;
    direction?: "left" | "right";
    children: React.ReactNode;
} & import("react").RefAttributes<HTMLParagraphElement>>;
export default MarqueeText;
