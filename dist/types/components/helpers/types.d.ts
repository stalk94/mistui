import type { Variants } from '../theme/default';
type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;
export type ModalProps = Props & {
    children?: React.ReactNode;
    actions?: React.ReactNode;
    isCloseClickOutside?: boolean;
    classNameModalBox?: React.HTMLAttributes<HTMLDivElement>['className'];
    classNameActions?: React.HTMLAttributes<HTMLDivElement>['className'];
    open?: boolean;
};
export type DrawerProps = Props & {
    children?: React.ReactNode;
    trigger?: React.ReactNode;
    open?: boolean;
    onClose?: () => void;
    position?: "left" | "right" | "top" | "bottom";
};
export type PopoverProps = Props & {
    classNameContainer?: Props['className'];
    children?: React.ReactNode;
    trigger?: React.ReactNode;
    anchor?: React.ReactNode;
    isHover?: boolean;
    side?: "top" | "left" | "bottom" | "right";
    align?: "center" | "end" | "start";
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    onClose?: () => void;
    usePortal?: boolean;
    open?: boolean;
    setOpen?: (val: boolean) => void;
    /** element mount portal */
    portalContainer?: HTMLElement;
};
export type TooltipProps = {
    /** wraparound component */
    children?: string | React.ReactElement;
    /** hint content */
    content?: string;
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: Variants | (string & {});
    style?: React.CSSProperties;
    className?: Props['className'];
    position?: 'top' | 'left' | 'right' | 'bottom';
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link';
};
export {};
