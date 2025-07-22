declare const IconButton: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    onClick?: import("react").MouseEventHandler<HTMLButtonElement>;
} & {
    icon?: React.ReactNode;
    children?: React.ReactNode;
    title?: string;
    shadow?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    variant?: "contained" | "outline" | "dash" | "soft" | "ghost" | "link";
    color?: "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | string;
    size?: "auto" | "xs" | "sm" | "md" | "lg" | "xl";
    isRounded?: boolean;
    isGradient?: any;
    disabled?: boolean;
    selected?: boolean;
    'aria-label'?: string;
} & import("react").RefAttributes<HTMLButtonElement>>;
export default IconButton;
