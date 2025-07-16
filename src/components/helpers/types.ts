type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;


export type ModalProps = Props & {
    children?: React.ReactNode
    actions?: React.ReactNode
    isCloseClickOutside?: boolean
    classNameModalBox?: React.HTMLAttributes<HTMLDivElement>['className']
    open?: boolean
}

export type DrawerProps = Props & {
    children?: React.ReactNode
    content?: React.ReactNode
    open?: boolean
    isCloseClickOutside?: boolean
    onClose?: ()=> void
}

export type PopoverProps = Props & {
    children?: React.ReactNode
    content?: React.ReactNode
    isHover?: boolean
}