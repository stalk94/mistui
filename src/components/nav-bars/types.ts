type NavLinkItem = {
    id: string | number
    icon?: React.ReactElement
    divider?: any
    style?: React.CSSProperties
    label: string | React.ReactElement
}

export type BarProps = {
    orientation?: 'horizontal' | 'vertical'
    style?: React.CSSProperties
    children?: React.ReactNode | string
    start?: React.ReactNode | string
    end?: React.ReactNode | string
    className?: HTMLDivElement['className']
}


export type SidebarMenuProps = {
    collapsed: boolean
    onChange?: (item: NavLinkItem)=> void
    items: NavLinkItem[]
    style?: React.CSSProperties
    isFocusSelected?: boolean 
    selected?: any
    listStyle?: React.CSSProperties
}
export type LeftNavigationProps = SidebarMenuProps & {
    type: 'box' | 'drawer'
    end?: NavLinkItem[]
    start?: NavLinkItem[]
    /** показывать выделленным цветом текуший выбранный элемент */
    isFocusSelected?: boolean 
}


export type SideBarAndToolPanelProps = {
    /** слоты навигационной панели */
    schemaNavBar: {
        start?: NavLinkItem[]
        items: NavLinkItem[]
        /** нижняя субпанелька, всегда поверх базовой */
        end?: NavLinkItem[]
    }
    /** ⬇️ Нижняя панелька для дополнительных элементов(tool) */
    end?: React.ReactNode
    /** центральные элементы */
    top?: React.ReactNode
    /** ⬆️ Верхняя панелька для дополнительных элементов(tool) */
    start?: React.ReactNode
    /** 💻 Контент рабочей области(правая панель) */
    children: React.ReactNode
    /** 🔥 нажат элемент боковой навигации */
    onChangeNavigation?: (item: NavLinkItem)=> void
    /** 📏 Ширина рабочей области (без учета навигации) */
    width?: string | number
    style?: React.CSSProperties
    selected?: any
}
