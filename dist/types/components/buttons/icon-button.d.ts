declare const IconButton: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    onClick?: import("react").MouseEventHandler<HTMLButtonElement>;
    style?: import("react").CSSProperties | undefined;
} & {
    icon?: React.ReactNode;
    children?: React.ReactNode;
    title?: string;
    shadow?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    variant?: "contained" | "outline" | "dash" | "soft" | "ghost" | "link";
    color?: import("../theme/default").Variants | (string & {});
    size?: "auto" | "xs" | "sm" | "md" | "lg" | "xl";
    isRounded?: boolean;
    isGradient?: any;
    disabled?: boolean;
    selected?: boolean;
    ripple?: boolean;
    'aria-label'?: string;
} & import("react").RefAttributes<HTMLButtonElement>>;
export default IconButton;
