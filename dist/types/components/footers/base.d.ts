declare const Footer: import("react").ForwardRefExoticComponent<{
    style?: import("react").CSSProperties | undefined;
    className?: string | undefined;
} & {
    isCenter?: boolean;
    orientation?: "horizontal" | "vertical";
    children: React.ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
export default Footer;
