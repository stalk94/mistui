declare const Drawer: import("react").ForwardRefExoticComponent<{
    className?: string | undefined | undefined;
    style?: import("react").CSSProperties | undefined;
} & {
    children?: React.ReactNode;
    content?: React.ReactNode;
    open?: boolean;
    isCloseClickOutside?: boolean;
    onClose?: () => void;
} & import("react").RefAttributes<HTMLDivElement>>;
export default Drawer;
