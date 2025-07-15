type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;


export type ModalProps = Props & {
    children?: React.ReactNode
    actions?: React.ReactNode
    isCloseClickOutside?: boolean
    classNameModalBox?: React.HTMLAttributes<HTMLDivElement>['className']
}

export type DrawerProps = Props & {
    children?: React.ReactNode
}

export type PopoverProps = Props & {
    children?: React.ReactNode
    content?: React.ReactNode
    isHover?: boolean
}