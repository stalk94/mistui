
export type ItemDropMenu = {
    id: string | number
    label: string | React.ReactElement
}


export type DropMenuProps = {
    style?: React.CSSProperties & { positionAnchor?: string }
    id?: string
    onSelect?: (select: string | number| ItemDropMenu)=> void
    items?: string[] | ItemDropMenu[]
    onlyId?: boolean
}

export type PopUpMenuProps = {
    style?: React.CSSProperties & { positionAnchor?: string }
    id?: string
    isHover?: boolean
    children: React.ReactElement | string
    content: React.ReactElement
}

export type AccordionItem = {
    /** label аккордеона */
    title: React.ReactElement
    /** тело аккордеона */
    content: React.ReactElement
}

export type NavItem = {
    id?: string
    label?: string | React.ReactNode 
    title?: string | React.ReactNode 
    icon?: React.ReactElement
    /** expanded submenu */
    open?: boolean
    action?: React.ReactNode
    /** if true then display separator under element */
    divider?: boolean | React.CSSProperties
    /** nested */
    children?: NavItem[]
    /** custom comand handle click element */
    comand?: (item: NavItem) => void
    /** dot stylization inline item */
    style?: React.CSSProperties
}
export type MainListProps = {
    onSelect?: (item: NavItem) => void
    className?: React.HTMLAttributes<HTMLElement>['className']
    style?: React.CSSProperties
    isNested?: boolean
    items: NavItem[]
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}