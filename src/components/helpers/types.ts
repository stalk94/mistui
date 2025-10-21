import type { Variants } from '../theme/default';
import type { ButtonProps } from '../buttons/type';


type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;


export type ModalProps = Props & {
    children?: React.ReactNode
    actions?: React.ReactNode
    isCloseClickOutside?: boolean
    classNameModalBox?: React.HTMLAttributes<HTMLDivElement>['className']
    classNameActions?: React.HTMLAttributes<HTMLDivElement>['className']
    open?: boolean
}

export type DrawerProps = Props & {
    children?: React.ReactNode
    trigger?: React.ReactNode
    open?: boolean
    onClose?: ()=> void
    position?: "left" | "right" | "top" | "bottom";
}




export type PopoverProps = Props & {
    classNameContainer?: Props['className']
    children?: React.ReactNode
    trigger?: React.ReactNode
    anchor?: React.ReactNode
    isHover?: boolean
    side?: "top" | "left" | "bottom" | "right"
    align?: "center" | "end" | "start"
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    onClose?: ()=> void
    usePortal?: boolean
    open?: boolean;
    setOpen?: (val: boolean) => void;
    /** element mount portal */
    portalContainer?: HTMLElement
}


export type TooltipPlacement = "top" | "bottom" | "left" | "right";
export interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    placement?: TooltipPlacement;
    className?: React.HTMLAttributes<HTMLDivElement>['className'];
    delayShow?: number;
    delayHide?: number;
    color?: Variants | (string & {});
    borderColor?: Variants | (string & {});
    textColor?: Variants | (string & {});
}


export type FabProps = {
    children: React.ReactNode
    isFlower?: boolean
    button: React.ReactElement<ButtonProps>
    buttonClose: React.ReactElement<ButtonProps>
}