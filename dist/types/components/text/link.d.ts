declare const Link: import("react").ForwardRefExoticComponent<import("./types").BaseTypographyProps & {
    children?: string;
    size?: "auto" | "xs" | "sm" | "md" | "lg" | "xl";
    color?: "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | string;
} & import("react").RefAttributes<HTMLAnchorElement>>;
export default Link;
