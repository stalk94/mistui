declare const MarqueeText: import("react").ForwardRefExoticComponent<import("./types").BaseTypographyProps & {
    children?: string;
    href?: string;
    size?: "auto" | "xs" | "sm" | "md" | "lg" | "xl";
    isHover?: boolean;
    navigate?: (href: string) => void;
} & {
    pxPerSecond?: number;
    copies?: number;
    pauseOnHover?: boolean;
    gap?: number;
    direction?: "left" | "right";
    children: React.ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
export default MarqueeText;
