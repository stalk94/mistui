type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;
export type ModalProps = Props & {
    children?: React.ReactNode;
    actions?: React.ReactNode;
    isCloseClickOutside?: boolean;
    classNameModalBox?: React.HTMLAttributes<HTMLDivElement>['className'];
    open?: boolean;
};
export type DrawerProps = Props & {
    children?: React.ReactNode;
    trigger?: React.ReactNode;
    open?: boolean;
    onClose?: () => void;
    position?: "left" | "right" | "top" | "bottom";
};
type DropdownPosition = "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";
export type PopoverProps = Props & {
    classNameContainer?: Props['className'];
    children?: React.ReactNode;
    trigger?: React.ReactNode;
    isHover?: boolean;
    position?: DropdownPosition;
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    onClose?: () => void;
    usePortal?: boolean;
};
export {};
