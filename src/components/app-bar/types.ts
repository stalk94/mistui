import { NavItem } from '../menu/type';


export type NestedMenuProps = { 
    item: NavItem
    onSelect?: (item: NavItem)=> void 
    isHover?: boolean
}
export type OverflowNavigationItemsProps = { 
    hiddenItems: NavItem[] 
    children?: React.ReactNode 
}
export type NavigationItemsDesktopProps = { 
    items: NavItem[] 
    //onOverfow: (overflowElements: NavItem[])=> void
    className?: React.HTMLAttributes<HTMLDivElement>['className']
    style?: React.CSSProperties
    onOverflow?: (hidden: React.ReactNode[] | any[]) => void
}

export type AppBarProps = {
    startSlot: React.ReactNode
    centerSlot: React.ReactNode
    endSlot: React.ReactNode
    style?: React.CSSProperties
    className?: React.HTMLAttributes<HTMLDivElement>['className']
    variant?: 'center' | 'left'
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export type MobailBurgerProps = {
    items: NavItem[]
    /** кастомная иконка */
    children?: React.ReactNode 
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    handleMenuOpen?: ()=> void
    disabled?: boolean
}

export type PreviewProps = {
    startSlot?: React.ReactNode
    centerSlot?: React.ReactNode
    endSlot?: React.ReactNode
    variant?: 'center' | 'left'
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    items: NavItem[]
    onClick?: (path: string)=> void
}
