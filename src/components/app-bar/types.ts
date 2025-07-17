import { NavItem } from '../menu/type';


export type PreviewProps = {
    linkItems?: NavItem[]
    onClick?: (path: string)=> void
}

export type AppBarCustomProps = {
    start: React.ReactNode
    center: React.ReactNode
    end: React.ReactNode
    height: number
    style?: React.CSSProperties
}

export type MobailBurgerProps = {
    items: NavItem[]
    /** кастомная иконка */
    children?: React.ReactNode 
}

