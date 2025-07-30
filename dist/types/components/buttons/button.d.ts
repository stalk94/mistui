declare const Button: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    onClick?: import("react").MouseEventHandler<HTMLButtonElement>;
} & {
    children: string | React.ReactElement;
    title?: string;
    size?: "auto" | "xs" | "sm" | "md" | "lg" | "xl";
    shadow?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    variant?: "contained" | "outline" | "dash" | "soft" | "ghost" | "link";
    color?: import("../theme/default").Variants | (string & {});
    isSoft?: boolean;
    isGradient?: any;
    selected?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    ripple?: boolean;
    'aria-label'?: string;
} & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
