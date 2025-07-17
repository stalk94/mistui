declare const Modal: import("react").ForwardRefExoticComponent<{
    className?: string | undefined | undefined;
    style?: import("react").CSSProperties | undefined;
} & {
    children?: React.ReactNode;
    actions?: React.ReactNode;
    isCloseClickOutside?: boolean;
    classNameModalBox?: React.HTMLAttributes<HTMLDivElement>["className"];
    open?: boolean;
} & import("react").RefAttributes<HTMLDialogElement>>;
export default Modal;
