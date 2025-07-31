declare const Link: import("react").ForwardRefExoticComponent<import("./types").BaseTypographyProps & {
    children?: string;
    href?: string;
    size?: "auto" | "xs" | "sm" | "md" | "lg" | "xl";
    isHover?: boolean;
    navigate?: (href: string) => void;
} & import("react").RefAttributes<HTMLAnchorElement>>;
export default Link;
