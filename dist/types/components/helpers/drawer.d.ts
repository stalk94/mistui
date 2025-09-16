declare const Drawer: import("react").ForwardRefExoticComponent<{
    style?: import("react").CSSProperties | undefined;
    className?: string | undefined;
} & {
    children?: React.ReactNode;
    trigger?: React.ReactNode;
    open?: boolean;
    onClose?: () => void;
    position?: "left" | "right" | "top" | "bottom";
} & import("react").RefAttributes<HTMLDivElement>>;
export default Drawer;
