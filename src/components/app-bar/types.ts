import { NavItem } from '../menu/type';


export type PreviewProps = {
    linkItems?: NavItem[]
    onClick?: (path: string)=> void
}

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
}

export type AppBarCustomProps = {
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
}

